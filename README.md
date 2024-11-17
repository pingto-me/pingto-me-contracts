
--- 
<img src="assets/images/logo.png" alt="Logo" width="200px">

NFTs Personal Verify Card
This is a verification card to take you connect without unlimited to Web3

### Card Example

<img src="assets/images/all.png" alt="Logo" width="80%">

## Repositories

- Frontend : https://github.com/pingto-me/pingto-me-frontend
- Backend : https://github.com/pingto-me/pingto-me-backend
- Smart Contract : https://github.com/pingto-me/pingto-me-contracts
- Attestation : https://github.com/pingto-me/pingto-me-attestation
- Figma : [Link](https://www.figma.com/design/gWvVN7ncuDoy05TIbok2ji/Design?node-id=4131-38949&t=wnN4NB0UNBn9OPiD-1)

### Chainlink Price Provider
The `ChainlinkPriceProvider.sol` contract is responsible for integrating the our custom api to feed card printing package price to payment contract to get reliable price data.

You can find the **ChainlinkPriceProvider** contract [here](contracts/core/ChainlinkPriceProvider.sol) (contracts/core/ChainlinkPriceProvider.sol).

## Smart Contract Deployment

| Chain               | Name                    | Address                                    |
|---------------------|-------------------------|--------------------------------------------|
| BitkubChain Testnet | ManualPriceProvider     | 0xCFb2FB046e80ceb1e5bD3c22f9441440f62b9b63 |
| BitkubChain Testnet | NativeTokenPayment      | 0xdb93C0b3139cf0a533A0fbB4B95294c42f0d34Cc |
| Hedera Testnet      | ManualPriceProvider     | 0x33533a67C62AcF8595CfDFC261F90b29bB617c39 |
| Hedera Testnet      | NativeTokenPayment      | 0xa84aC71C1F6C5B533dA717f4eb88596bB2871aBf |
| Celo Testnet        | ManualPriceProvider     | 0x33533a67C62AcF8595CfDFC261F90b29bB617c39 |
| Celo Testnet        | NativeTokenPayment      | 0xa84aC71C1F6C5B533dA717f4eb88596bB2871aBf |
| Base Testnet        | ManualPriceProvider     | 0x33533a67C62AcF8595CfDFC261F90b29bB617c39 |
| Base Testnet        | NativeTokenPayment      | 0xa84aC71C1F6C5B533dA717f4eb88596bB2871aBf |
| Rootstock Testnet   | ManualPriceProvider     | 0x33533a67C62AcF8595CfDFC261F90b29bB617c39 |
| Rootstock Testnet   | NativeTokenPayment      | 0xa84aC71C1F6C5B533dA717f4eb88596bB2871aBf |
| Sepolia Testnet     | ManualPriceProvider     | 0xb327A4F96Bc69f624c577B3f1508044e266f1808 |
| Sepolia Testnet     | NativeTokenPayment      | 0x11f0aeb16BCC0d5BeF9a17a52d2D321d38bA287a |
| Sepolia Testnet     | ChainlinkPriceProvider  | 0xf07c79d75Fc04eb4d842e8c1CEFBe132eC51e6B2 |


