// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPriceProvider {
    // Function to get the current price of the native token
    // The function now takes an eventId to fetch price related to a specific event
    function getPrice(string memory eventId) external view returns (uint256);
}
