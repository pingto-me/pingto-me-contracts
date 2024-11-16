import { HardhatRuntimeEnvironment } from 'hardhat/types';
import {NativeTokenPayment__factory} from "../typechain-types/factories/contracts/core/NativeTokenPayment.sol";
import {NativeTokenPayment} from "../typechain-types/contracts/core/NativeTokenPayment.sol";


const contractName = 'NativeTokenPayment';

module.exports = async function ({ ethers, network, getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
  const { provider } = ethers;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const balance = await provider.getBalance(deployer);
  console.log(`\nRemaining balance is: ${balance}`);

  const manualPriceProvider = await deployments.get('ManualPriceProvider');

  const chainId = network.config.chainId;
  const contract = await deploy(contractName, {
    from: deployer,
    args: [manualPriceProvider.address, deployer],
    log: true,
    deterministicDeployment: false,
  });
  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');

  const Factory = (await ethers.getContractFactory(contractName)) as NativeTokenPayment__factory;
  const nativeTokenPayment: NativeTokenPayment = Factory.attach(contract.address);
  await nativeTokenPayment.deployed();
  console.log(nativeTokenPayment.address);
  console.log('==================');
};

module.exports.tags = [contractName, 'Payment'];
module.exports.dependencies = ['ManualPriceProvider'];
