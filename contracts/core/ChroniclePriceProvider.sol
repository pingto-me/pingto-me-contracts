// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/IPriceProvider.sol";

// Chronicle-based implementation of the PriceProvider interface
contract ChroniclePriceProvider is IPriceProvider, AccessControl {
    // Define a role identifier for the admin role
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    IChronicle public chronicle;
    ISelfKisser public selfKisser;

    // Variable to store the current price of the native token
    uint256 private price;

    // Event to emit when the price is updated
    event PriceUpdated(uint256 newPrice);

    // Constructor to set up the admin role
    constructor(uint256 initialPrice, address _chronicle, address _selfKisser) {
        // Set up roles - the deployer is given both the default admin role and the custom admin role
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);

        // Set the initial price
        price = initialPrice;
        chronicle = IChronicle(_chronicle);
        selfKisser = ISelfKisser(_selfKisser);
        selfKisser.selfKiss(address(chronicle));
    }

    // Function to update the price, can only be called by an admin
    function setPrice(uint256 newPrice) external onlyRole(ADMIN_ROLE) {
        price = newPrice;
        emit PriceUpdated(newPrice);
    }

    // Function to get the current price of the native token
    function getPrice() external view override returns (uint256) {
        return chronicle.read();
    }
}

// Copied from [chronicle-std](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol).
interface IChronicle {
    /**
    * @notice Returns the oracle's current value.
    * @dev Reverts if no value set.
    * @return value The oracle's current value.
    */
    function read() external view returns (uint256 value);

    /**
    * @notice Returns the oracle's current value and its age.
    * @dev Reverts if no value set.
    * @return value The oracle's current value using 18 decimals places.
    * @return age The value's age as a Unix Timestamp .
    * */
    function readWithAge() external view returns (uint256 value, uint256 age);
}

// Copied from [self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol).
interface ISelfKisser {
    /// @notice Kisses caller on oracle `oracle`.
    function selfKiss(address oracle) external;
}
