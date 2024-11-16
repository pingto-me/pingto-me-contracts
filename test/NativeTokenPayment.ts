// SPDX-License-Identifier: MIT
import { expect } from "chai";
import { ethers } from "hardhat";
import { NativeTokenPayment, ManualPriceProvider } from "../typechain-types";

describe("NativeTokenPayment Contract", function () {
  let nativeTokenPayment: NativeTokenPayment;
  let priceProvider: ManualPriceProvider;
  let owner: any, admin: any, user: any;
  const role = ethers.utils.id('ADMIN_ROLE');

  beforeEach(async function () {
    [owner, admin, user] = await ethers.getSigners();

    // Deploy Manual PriceProvider
    const PriceProvider = await ethers.getContractFactory("ManualPriceProvider");
    priceProvider = (await PriceProvider.deploy(1000)) as ManualPriceProvider; // Initial price set to 1000
    await priceProvider.deployed();

    // Grant admin role to admin account
    await priceProvider.connect(owner).grantRole(ethers.utils.id("ADMIN_ROLE"), admin.address);

    // Deploy NativeTokenPayment contract
    const NativeTokenPayment = await ethers.getContractFactory("NativeTokenPayment");
    nativeTokenPayment = (await NativeTokenPayment.deploy(priceProvider.address, owner.address)) as NativeTokenPayment;
    await nativeTokenPayment.deployed();
  });

  describe("Admin Functions", function () {
    it("Should set USD price by admin", async function () {
      await nativeTokenPayment.connect(owner).setUsdPrice(2000);
      expect(await nativeTokenPayment.usdPrice()).to.equal(2000);
    });

    it("Should revert when non-admin tries to set USD price", async function () {
      await expect(nativeTokenPayment.connect(user).setUsdPrice(2000)).to.be.revertedWith(
        `AccessControl: account ${user.address.toLowerCase()} is missing role ${role}`
      );
    });

    it("Should allow admin to change the price provider", async function () {
      const PriceProvider = await ethers.getContractFactory("ManualPriceProvider");
      const newPriceProvider = (await PriceProvider.deploy(1500)) as ManualPriceProvider;
      await newPriceProvider.deployed();

      await nativeTokenPayment.connect(owner).setPriceProvider(newPriceProvider.address);
      expect(await nativeTokenPayment.priceProvider()).to.equal(newPriceProvider.address);
    });
  });

  describe("Payments", function () {
    it("Should accept payment if the amount is sufficient", async function () {
      // Set USD price to 2000
      await nativeTokenPayment.connect(owner).setUsdPrice(2000);

      // Get required native token price (priceProvider price is 1000)
      const nativePrice = await nativeTokenPayment.getNativePrice();

      // Send payment from user
      await expect(
        nativeTokenPayment.connect(user).pay("orderId123", { value: nativePrice })
      ).to.emit(nativeTokenPayment, "PaymentMade").withArgs(user.address, nativePrice, "orderId123");
    });

    it("Should revert if payment amount is insufficient", async function () {
      // Set USD price to 2000
      await nativeTokenPayment.connect(owner).setUsdPrice(2000);

      // Get required native token price and reduce it by half for testing
      const nativePrice = (await nativeTokenPayment.getNativePrice()).div(2);

      // Send insufficient payment from user
      await expect(
        nativeTokenPayment.connect(user).pay("orderId123", { value: nativePrice })
      ).to.be.revertedWith("Insufficient payment");
    });

    it("Should revert if orderId is empty", async function () {
      await expect(
        nativeTokenPayment.connect(user).pay("", { value: 1000 })
      ).to.be.revertedWith("Order ID cannot be empty");
    });

    it("Should revert if orderId is already used", async function () {
      await nativeTokenPayment.connect(owner).setUsdPrice(2000);
      const nativePrice = await nativeTokenPayment.getNativePrice();
      await nativeTokenPayment.connect(user).pay("orderId123", { value: nativePrice });

      // Attempt to pay with the same orderId
      await expect(
        nativeTokenPayment.connect(user).pay("orderId123", { value: nativePrice })
      ).to.be.revertedWith("Order ID already used");
    });
  });

  describe("Price Provider", function () {
    it("Should allow admin to update the price in ManualPriceProvider", async function () {
      await priceProvider.connect(admin).setPrice(1500);
      expect(await priceProvider.getPrice()).to.equal(1500);
    });

    it("Should revert if non-admin tries to update the price in ManualPriceProvider", async function () {
      await expect(priceProvider.connect(user).setPrice(1500)).to.be.revertedWith(
        `AccessControl: account ${user.address.toLowerCase()} is missing role ${role}`
      );
    });
  });
});
