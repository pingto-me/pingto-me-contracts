// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/IPriceProvider.sol";

contract ManualPriceProvider is IPriceProvider, AccessControl {
    // Define a role identifier for the admin role
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Variable to store the current price of the native token
    uint256 private price;

    // Event to emit when the price is updated
    event PriceUpdated(uint256 newPrice);

    // Constructor to set up the admin role
    constructor(uint256 initialPrice) {
        // Set up roles - the deployer is given both the default admin role and the custom admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);

        // Set the initial price
        price = initialPrice;
    }

    // Function to update the price, can only be called by an admin
    function setPrice(uint256 newPrice) external onlyRole(ADMIN_ROLE) {
        price = newPrice;
        emit PriceUpdated(newPrice);
    }

    // Function to get the current price of the native token
    function getPrice(string memory eventId) external view override returns (uint256) {
        return price;
    }
}
