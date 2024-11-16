// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/IPriceProvider.sol";

// Chainlink-based implementation of the PriceProvider interface
contract ChainlinkPriceProvider is IPriceProvider, AccessControl {
    // Define a role identifier for the admin role
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Chainlink price feed interface
    AggregatorV3Interface internal priceFeed;

    // Event to emit when the price feed is updated
    event PriceFeedUpdated(address newPriceFeed);

    // Constructor to set up the admin role and initialize the price feed
    constructor(address _priceFeed) {
        // Set up roles - the deployer is given both the default admin role and the custom admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);

        // Initialize the Chainlink price feed
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    // Function to update the Chainlink price feed address, can only be called by an admin
    function setPriceFeed(address newPriceFeed) external onlyRole(ADMIN_ROLE) {
        priceFeed = AggregatorV3Interface(newPriceFeed);
        emit PriceFeedUpdated(newPriceFeed);
    }

    // Function to get the current price of the native token from Chainlink
    function getPrice() external view override returns (uint256) {
        (, int256 price, , ,) = priceFeed.latestRoundData();
        require(price > 0, "Invalid price from Chainlink");
        return uint256(price);
    }
}
