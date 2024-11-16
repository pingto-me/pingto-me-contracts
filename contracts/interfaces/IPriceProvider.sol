// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPriceProvider {
    function getPrice(string memory eventId) external view returns (uint256);
}
