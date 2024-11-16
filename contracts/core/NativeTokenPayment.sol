// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../interfaces/IPriceProvider.sol";


contract NativeTokenPayment is AccessControl, ReentrancyGuard {
    // Define a role identifier for the admin role
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Price provider contract to get the current price of the native token
    IPriceProvider public priceProvider;
    // The price in USD for the service or product
    uint256 public usdPrice;
    // Address where the payments will be transferred to
    address public adminAddress;

    // Struct to store payment details
    struct PaymentDetail {
        address user; // Address of the user making the payment
        uint256 amount; // Amount paid in native tokens
        uint256 timestamp; // Timestamp of when the payment was made
        string eventId; // Event ID associated with the payment
    }

    // Mapping to store payments using orderId as the key
    mapping(string => PaymentDetail) public payments;

    // Event to emit when a payment is made
    event PaymentMade(address indexed user, uint256 amount, string orderId, string eventId);

    // Constructor to set up the price provider and admin address
    constructor(address priceProviderAddress, address _adminAddress) {
        // Set up roles - the deployer is given both the default admin role and the custom admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);

        // Set the price provider contract and admin address
        priceProvider = IPriceProvider(priceProviderAddress);
        adminAddress = _adminAddress;
    }

    // Function to set the USD price, can only be called by an admin
    function setUsdPrice(uint256 _usdPrice) external onlyRole(ADMIN_ROLE) {
        usdPrice = _usdPrice;
    }

    // Function to change the price provider contract, can only be called by an admin
    function setPriceProvider(address newPriceProvider) external onlyRole(ADMIN_ROLE) {
        priceProvider = IPriceProvider(newPriceProvider);
    }

    // Function to make a payment in native tokens
    // The function is protected against re-entrancy attacks using the nonReentrant modifier
    function pay(string memory orderId, string memory eventId) external payable nonReentrant {
        // Ensure the order ID is not empty
        require(bytes(orderId).length > 0, "Order ID cannot be empty");
        // Ensure the order ID has not been used before to prevent overwrites
        require(payments[orderId].user == address(0), "Order ID already used");

        // Calculate the required native token amount based on the USD price
        uint256 nativePrice = getNativePrice(eventId);
        // Ensure the user has sent enough native tokens
        require(msg.value >= nativePrice, "Insufficient payment");

        // Transfer the payment to the admin address
        (bool success, ) = adminAddress.call{value: msg.value}("");
        require(success, "Transfer failed");

        // Store the payment details in the mapping
        payments[orderId] = PaymentDetail(msg.sender, msg.value, block.timestamp, eventId);

        // Emit an event for the payment
        emit PaymentMade(msg.sender, msg.value, orderId, eventId);
    }

    // Function to get the native token price required for the payment
    function getNativePrice(string memory eventId) public view returns (uint256) {
        // Get the current price of the native token from the price provider using the eventId
        uint256 price = priceProvider.getPrice(eventId);
        // Calculate the equivalent native token amount for the given USD price
        return (usdPrice * 1e18) / price;
    }

    // Function to get the payment details for a given order ID
    function getPaymentDetail(string memory orderId) external view returns (PaymentDetail memory) {
        return payments[orderId];
    }
}
