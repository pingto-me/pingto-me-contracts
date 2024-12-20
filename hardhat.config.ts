import { config as dotEnvConfig } from 'dotenv';

//import '@nomiclabs/hardhat-waffle';
import './tasks/accounts';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-web3';
import './tasks/faucet';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';
import '@primitivefi/hardhat-dodoc';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-abi-exporter';
import '@nomicfoundation/hardhat-chai-matchers';

dotEnvConfig();
const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
};

const config: any = {
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      default: 1,
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
    excludeContracts: [],
    src: './contracts',
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  dodoc: {
    runOnCompile: false,
    include: [], // default
    exclude: ['contracts/tests', 'contracts/shared', 'console'],
    outputDir: 'docs', // default
    templatePath: 'doc-template.sqrl',
    debugMode: false, // default
    keepFileStructure: true, // default
    freshOutput: true, // default
  },
  solidity: {
    typechain: {
      outDir: 'typechain',
      target: 'ethers-v5',
    },
    compilers: [
      {
        version: '0.8.19',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {},
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts,
    },
    localhost: {
      accounts,
    },
    goerli: {
      accounts,
      url: 'https://eth-goerli.public.blastapi.io',
      chainId: 5,
    },
    linea_testnet: {
      accounts,
      url: 'https://linea-sepolia.blockpi.network/v1/rpc/public',
      chainId: 59141,
    },
    sepolia: {
      accounts,
      url: 'https://rpc-sepolia.rockx.com',
      chainId: 11155111,
    },
    polygon_mumbai: {
      accounts,
      //url: 'https://rpc-mumbai.maticvigil.com/',
      url: 'https://polygon-mumbai.blockpi.network/v1/rpc/public',
      chainId: 80001,
    },
    bkc: {
      accounts,
      url: 'https://rpc.bitkubchain.io',
      chainId: 96,
    },
    bkc_testnet: {
      accounts,
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
    },
    hedera_testnet: {
      url: 'https://testnet.hashio.io/api',
      accounts: accounts,
      chainId: 296,
    },
    celo_testnet: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: accounts,
      chainId: 44787,
    },
    base_testnet: {
      url: 'https://sepolia.base.org',
      accounts: accounts,
      chainId: 84532,
    },
    rootstock_testnet: {
      url: 'https://public-node.testnet.rsk.co',
      accounts: accounts,
      chainId: 31,
    },
    taiko: {
      url: 'https://rpc.test.taiko.xyz',
      accounts: accounts,
      chainId: 167005,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      linea_testnet: 'BE73V3WIFAP2WP7SQBHV95AQBMN1URH4JP',
      sepolia: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      polygon_mumbai: 'FPHU3AFWJD2M3ECIKN61FPG1CIMN3IWF46',
      bkc_testnet: 'key',
      hedera_testnet: 'key',
      celo_testnet: 'PQ6KHZ9W2YZ7HI3KW651DIEMWS2HUEIXYN',
      bkc: 'key',
      rootstock_testnet:'key',
      polygonMumbai: 'FPHU3AFWJD2M3ECIKN61FPG1CIMN3IWF46',
      base_testnet: 'HWIGT6I8F9PZHQXKWM3WM57P4TFQC1ISWS'
    },
    customChains: [
      {
        network: 'sepolia',
        chainId: 11155111,
        urls: {
          apiURL: 'https://eth-sepolia.blockscout.com/api',
          browserURL: 'https://eth-sepolia.blockscout.com/',
        },
      },
      {
        network: 'bkc_testnet',
        chainId: 25925,
        urls: {
          apiURL: 'https://testnet.bkcscan.com/api',
          browserURL: 'https://testnet.bkcscan.com/',
        },
      },
      {
        network: 'rootstock_testnet',
        chainId: 31,
        urls: {
          apiURL: 'https://explorer.testnet.rootstock.io/api',
          browserURL: 'https://explorer.testnet.rootstock.io/',
        },
      },
      {
        network: 'hedera_testnet',
        chainId: 296,
        urls: {
          apiURL: 'https://testnet.hashio.io/api',
          browserURL: 'https://testnet.bkcscan.com/',
        },
      },
      {
        network: 'celo_testnet',
        chainId: 44787,
        urls: {
          apiURL: 'https://api-alfajores.celoscan.io/api',
          browserURL: 'https://alfajores.celoscan.io',
        },
      },
      {
        network: 'base_testnet',
        chainId: 84532,
        urls: {
          apiURL: 'https://api-sepolia.basescan.org/api',
          browserURL: 'https://sepolia.basescan.org/',
        },
      },
      {
        network: 'rootstock_testnet',
        chainId: 31,
        urls: {
          apiURL: 'https://api-sepolia.basescan.org/api',
          browserURL: 'https://sepolia.basescan.org/',
        },
      },
      {
        network: 'linea_testnet',
        chainId: 59141,
        urls: {
          apiURL: 'https://api-sepolia.lineascan.build/api',
          browserURL: 'https://sepolia.lineascan.build/',
        },
      },
      {
        network: 'bkc',
        chainId: 96,
        urls: {
          apiURL: 'https://www.bkcscan.com/api',
          browserURL: 'https:///www.bkcscan.com/',
        },
      },
      {
        network: 'taiko',
        chainId: 167005,
        urls: {
          apiURL: 'https://explorer.test.taiko.xyz/api',
          browserURL: 'https://explorer.test.taiko.xyz',
        },
      },
    ],
  },
};

export default config;
