import { HardhatRuntimeEnvironment } from 'hardhat/types';
import {NativeTokenPayment__factory} from "../typechain-types/factories/contracts/core/NativeTokenPayment.sol";
import {NativeTokenPayment} from "../typechain-types/contracts/core/NativeTokenPayment.sol";
import {ManualPriceProvider, ManualPriceProvider__factory} from "../typechain-types";


const contractName = 'ChainlinkPriceProvider';

module.exports = async function ({ ethers, network, getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
  const { provider } = ethers;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log(`deployer : ${deployer}`)
  const balance = await provider.getBalance(deployer);
  console.log(`\nRemaining balance is: ${balance}`);
  const defaultPrice = ethers.utils.parseUnits('0.02', 18);

  const chainId = network.config.chainId;
  const contract = await deploy(contractName, {
    from: deployer,
    args: [3947,deployer],
    log: true,
    deterministicDeployment: false,
  });
  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');

  const Factory = (await ethers.getContractFactory(contractName)) as ManualPriceProvider__factory;
  const manualPriceProvider: ManualPriceProvider = Factory.attach(contract.address);
  await manualPriceProvider.deployed();
  console.log(manualPriceProvider.address);
  console.log('==================');
};

module.exports.tags = [contractName, 'PriceProvider'];
module.exports.dependencies = [];
