/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ChainlinkPriceProvider,
  ChainlinkPriceProviderInterface,
} from "../../../contracts/core/ChainlinkPriceProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "relayer_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "eventType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "Response",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "checkStringHasValue",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "donID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "eventPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "isStringEmpty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestEvent",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
    ],
    name: "requestPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastResponse",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newRelayer",
        type: "address",
      },
    ],
    name: "setRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "testFulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x600580546001600160a01b03191673b83e47c2bc239b3bf370bc41e1459a34b41238d01790557f66756e2d657468657265756d2d7365706f6c69612d31000000000000000000006006556007805463ffffffff1916620493e017905561024060405261017c60a08181529062001f0060c039600a90620000809082620002f1565b503480156200008e57600080fd5b506040516200207c3803806200207c833981016040819052620000b191620003bd565b6005546001600160a01b03166080523380600081620001175760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156200014a576200014a81620001a1565b5050600780546001600160a01b039093166c01000000000000000000000000026001600160601b036001600160401b03909516640100000000029490941663ffffffff909316929092179290921790555062000412565b336001600160a01b03821603620001fb5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200010e565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200027757607f821691505b6020821081036200029857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ec57600081815260208120601f850160051c81016020861015620002c75750805b601f850160051c820191505b81811015620002e857828155600101620002d3565b5050505b505050565b81516001600160401b038111156200030d576200030d6200024c565b62000325816200031e845462000262565b846200029e565b602080601f8311600181146200035d5760008415620003445750858301515b600019600386901b1c1916600185901b178555620002e8565b600085815260208120601f198616915b828110156200038e578886015182559484019460019091019084016200036d565b5085821015620003ad5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008060408385031215620003d157600080fd5b82516001600160401b0381168114620003e957600080fd5b60208401519092506001600160a01b03811681146200040757600080fd5b809150509250929050565b608051611acb620004356000396000818161033b0152610dd70152611acb6000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806379ba5097116100b85780639bfc012a1161007c5780639bfc012a146102b6578063b1e21749146102c9578063d4fe6bd0146102d2578063f2fde38b146102e5578063f68016b7146102f8578063f887ea401461031d57600080fd5b806379ba5097146102345780637f27b9e51461023c5780638406c0791461024f578063852fa8f9146102815780638da5cb5b146102a557600080fd5b80633944ea3a116100ff5780633944ea3a146101f55780634b0795a8146101fd578063524f3889146102055780636548e9bc146102185780636e74336b1461022b57600080fd5b806303ef5acc1461013c57806309c1ba2e1461017a5780630ca76175146101ad57806322e01192146101c257806333fff15f146101d5575b600080fd5b61016761014a36600461150c565b805160208183018101805160088252928201919093012091525481565b6040519081526020015b60405180910390f35b6007546101959064010000000090046001600160401b031681565b6040516001600160401b039091168152602001610171565b6101c06101bb366004611548565b610330565b005b6101c06101d03660046115b4565b6103b4565b6101e86101e33660046115f8565b61041c565b6040516101719190611661565b6101e86104b6565b6101e86104c3565b61016761021336600461150c565b6104d0565b6101c0610226366004611674565b6104f8565b61016760065481565b6101c0610588565b6101c061024a366004611548565b610632565b60075461026990600160601b90046001600160a01b031681565b6040516001600160a01b039091168152602001610171565b61029561028f36600461150c565b51151590565b6040519015158152602001610171565b6000546001600160a01b0316610269565b6102956102c436600461150c565b511590565b61016760025481565b6101c06102e036600461150c565b610642565b6101c06102f3366004611674565b61082b565b6007546103089063ffffffff1681565b60405163ffffffff9091168152602001610171565b600554610269906001600160a01b031681565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103795760405163c6829f8360e01b815260040160405180910390fd5b61038483838361083f565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b6103bc610a6a565b806008836040516103cd919061169d565b9081526020016040518091039020819055507f159e83f4712ba2552e68be9d848e49bf6dd35c24f19564ffd523b6549450a2f482826040516104109291906116b9565b60405180910390a15050565b60096020526000908152604090208054610435906116db565b80601f0160208091040260200160405190810160405280929190818152602001828054610461906116db565b80156104ae5780601f10610483576101008083540402835291602001916104ae565b820191906000526020600020905b81548152906001019060200180831161049157829003601f168201915b505050505081565b60038054610435906116db565b60048054610435906116db565b60006008826040516104e2919061169d565b9081526020016040518091039020549050919050565b610500610a6a565b6001600160a01b03811661055b5760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642052454c41594552206164647265737300000000000000000060448201526064015b60405180910390fd5b600780546001600160a01b03909216600160601b026bffffffffffffffffffffffff909216919091179055565b6001546001600160a01b031633146105db5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b6044820152606401610552565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b61063d83838361083f565b505050565b600754600160601b90046001600160a01b031633146106a35760405162461bcd60e51b815260206004820152601960248201527f43616c6c6572206973206e6f74207468652052454c41594552000000000000006044820152606401610552565b6106e46040805160e0810190915280600081526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b610781600a80546106f4906116db565b80601f0160208091040260200160405190810160405280929190818152602001828054610720906116db565b801561076d5780601f106107425761010080835404028352916020019161076d565b820191906000526020600020905b81548152906001019060200180831161075057829003601f168201915b505050505082610abf90919063ffffffff16565b604080516001808252818301909252600091816020015b606081526020019060019003908161079857905050905082816000815181106107c3576107c3611715565b60209081029190910101526107d88282610ad0565b6108086107e483610afa565b6007546006546001600160401b036401000000008304169163ffffffff1690610dd2565b600281905560009081526009602052604090206108258482611779565b50505050565b610833610a6a565b61083c81610ea4565b50565b600083815260096020526040902080546108e1919061085d906116db565b80601f0160208091040260200160405190810160405280929190818152602001828054610889906116db565b80156108d65780601f106108ab576101008083540402835291602001916108d6565b820191906000526020600020905b8154815290600101906020018083116108b957829003601f168201915b505050505051151590565b6109215760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081c995c5d595cdd1259607a1b6044820152606401610552565b6000838152600960205260408120805461093a906116db565b80601f0160208091040260200160405190810160405280929190818152602001828054610966906116db565b80156109b35780601f10610988576101008083540402835291602001916109b3565b820191906000526020600020905b81548152906001019060200180831161099657829003601f168201915b505050505090506000836109c690611838565b60001c9050806008836040516109dc919061169d565b908152602001604051809103902081905550847f160ed0aaffbef6885155188b91459cb5a97d5daadccf7561d8c46deea6641b50838686604051610a229392919061185c565b60405180910390a27f159e83f4712ba2552e68be9d848e49bf6dd35c24f19564ffd523b6549450a2f48282604051610a5b9291906116b9565b60405180910390a15050505050565b6000546001600160a01b03163314610abd5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610552565b565b610acc8260008084610f4d565b5050565b8051600003610af25760405163fe936cb760e01b815260040160405180910390fd5b60a090910152565b60606000610b09610100610fcb565b9050610b426040518060400160405280600c81526020016b31b7b232a637b1b0ba34b7b760a11b81525082610fec90919063ffffffff16565b8251610b60906002811115610b5957610b5961189f565b8290611005565b6040805180820190915260088152676c616e677561676560c01b6020820152610b8a908290610fec565b6040830151610ba1908015610b5957610b5961189f565b604080518082019091526006815265736f7572636560d01b6020820152610bc9908290610fec565b6060830151610bd9908290610fec565b60a08301515115610c6d576040805180820190915260048152636172677360e01b6020820152610c0a908290610fec565b610c138161103e565b60005b8360a0015151811015610c6357610c538460a001518281518110610c3c57610c3c611715565b602002602001015183610fec90919063ffffffff16565b610c5c816118cb565b9050610c16565b50610c6d81611062565b60808301515115610d3157600083602001516002811115610c9057610c9061189f565b03610cae5760405163a80d31f760e01b815260040160405180910390fd5b60408051808201909152600f81526e39b2b1b932ba39a637b1b0ba34b7b760891b6020820152610cdf908290610fec565b610cf883602001516002811115610b5957610b5961189f565b6040805180820190915260078152667365637265747360c81b6020820152610d21908290610fec565b6080830151610d31908290611080565b60c08301515115610dca5760408051808201909152600981526862797465734172677360b81b6020820152610d67908290610fec565b610d708161103e565b60005b8360c0015151811015610dc057610db08460c001518281518110610d9957610d99611715565b60200260200101518361108090919063ffffffff16565b610db9816118cb565b9050610d73565b50610dca81611062565b515192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663461d27628688600188886040518663ffffffff1660e01b8152600401610e2a9594939291906118e4565b6020604051808303816000875af1158015610e49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6d919061192d565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b336001600160a01b03821603610efc5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610552565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b8051600003610f6f576040516322ce3edd60e01b815260040160405180910390fd5b83836002811115610f8257610f8261189f565b90816002811115610f9557610f9561189f565b90525060408401828015610fab57610fab61189f565b90818015610fbb57610fbb61189f565b9052506060909301929092525050565b610fd3611435565b8051610fdf908361108d565b5060006020820152919050565b610ff98260038351611107565b815161063d9082611220565b81516110129060c2611248565b50610acc828260405160200161102a91815260200190565b604051602081830303815290604052611080565b6110498160046112b1565b60018160200181815161105c9190611946565b90525050565b61106d8160076112b1565b60018160200181815161105c9190611959565b610ff98260028351611107565b6040805180820190915260608152600060208201526110ad60208361196c565b156110d5576110bd60208361196c565b6110c8906020611959565b6110d29083611946565b91505b6020808401839052604051808552600081529081840101818110156110f957600080fd5b604052508290505b92915050565b6017816001600160401b03161161112d5782516108259060e0600585901b168317611248565b60ff816001600160401b03161161116d578251611155906018611fe0600586901b1617611248565b508251610825906001600160401b03831660016112c8565b61ffff816001600160401b0316116111ae578251611196906019611fe0600586901b1617611248565b508251610825906001600160401b03831660026112c8565b63ffffffff816001600160401b0316116111f15782516111d990601a611fe0600586901b1617611248565b508251610825906001600160401b03831660046112c8565b825161120890601b611fe0600586901b1617611248565b508251610825906001600160401b03831660086112c8565b6040805180820190915260608152600060208201526112418383845161134d565b9392505050565b604080518082019091526060815260006020820152825151600061126d826001611946565b90508460200151821061128e5761128e8561128983600261198e565b61141e565b84516020838201018581535080518211156112a7578181525b5093949350505050565b815161063d90601f611fe0600585901b1617611248565b60408051808201909152606081526000602082015283515160006112ec8285611946565b90508560200151811115611309576113098661128983600261198e565b6000600161131986610100611a89565b6113239190611959565b90508651828101878319825116178152508051831115611341578281525b50959695505050505050565b604080518082019091526060815260006020820152825182111561137057600080fd5b835151600061137f8483611946565b9050856020015181111561139c5761139c8661128983600261198e565b8551805183820160200191600091808511156113b6578482525b505050602086015b602086106113f657805182526113d5602083611946565b91506113e2602082611946565b90506113ef602087611959565b95506113be565b51815160001960208890036101000a0190811690199190911617905250849150509392505050565b815161142a838361108d565b506108258382611220565b604051806040016040528061145d604051806040016040528060608152602001600081525090565b8152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261149157600080fd5b81356001600160401b03808211156114ab576114ab61146a565b604051601f8301601f19908116603f011681019082821181831017156114d3576114d361146a565b816040528381528660208588010111156114ec57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561151e57600080fd5b81356001600160401b0381111561153457600080fd5b61154084828501611480565b949350505050565b60008060006060848603121561155d57600080fd5b8335925060208401356001600160401b038082111561157b57600080fd5b61158787838801611480565b9350604086013591508082111561159d57600080fd5b506115aa86828701611480565b9150509250925092565b600080604083850312156115c757600080fd5b82356001600160401b038111156115dd57600080fd5b6115e985828601611480565b95602094909401359450505050565b60006020828403121561160a57600080fd5b5035919050565b60005b8381101561162c578181015183820152602001611614565b50506000910152565b6000815180845261164d816020860160208601611611565b601f01601f19169290920160200192915050565b6020815260006112416020830184611635565b60006020828403121561168657600080fd5b81356001600160a01b038116811461124157600080fd5b600082516116af818460208701611611565b9190910192915050565b6040815260006116cc6040830185611635565b90508260208301529392505050565b600181811c908216806116ef57607f821691505b60208210810361170f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b601f82111561063d57600081815260208120601f850160051c810160208610156117525750805b601f850160051c820191505b818110156117715782815560010161175e565b505050505050565b81516001600160401b038111156117925761179261146a565b6117a6816117a084546116db565b8461172b565b602080601f8311600181146117db57600084156117c35750858301515b600019600386901b1c1916600185901b178555611771565b600085815260208120601f198616915b8281101561180a578886015182559484019460019091019084016117eb565b50858210156118285787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8051602080830151919081101561170f5760001960209190910360031b1b16919050565b60608152600061186f6060830186611635565b82810360208401526118818186611635565b905082810360408401526118958185611635565b9695505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016118dd576118dd6118b5565b5060010190565b6001600160401b038616815260a06020820152600061190660a0830187611635565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561193f57600080fd5b5051919050565b80820180821115611101576111016118b5565b81810381811115611101576111016118b5565b60008261198957634e487b7160e01b600052601260045260246000fd5b500690565b8082028115828204841417611101576111016118b5565b600181815b808511156119e05781600019048211156119c6576119c66118b5565b808516156119d357918102915b93841c93908002906119aa565b509250929050565b6000826119f757506001611101565b81611a0457506000611101565b8160018114611a1a5760028114611a2457611a40565b6001915050611101565b60ff841115611a3557611a356118b5565b50506001821b611101565b5060208310610133831016604e8410600b8410161715611a63575081810a611101565b611a6d83836119a5565b8060001904821115611a8157611a816118b5565b029392505050565b600061124183836119e856fea2646970667358221220035d887118572c08a198d9975d4871e2feeacb5c4dcd55cfb18bb941c217323f64736f6c63430008130033636f6e7374206576656e7454797065203d20617267735b305d3b636f6e737420617069526573706f6e7365203d2061776169742046756e6374696f6e732e6d616b654874747052657175657374287b75726c3a6068747470733a2f2f617369612d736f75746865617374312d77617374652d70726f746f636f6c2e636c6f756466756e6374696f6e732e6e65742f6170692f7075626c69632f6576656e742d6974656d732f247b6576656e74547970657d607d293b69662028617069526573706f6e73652e6572726f7229207b7468726f77204572726f72286052657175657374206661696c656460293b7d636f6e7374207b2064617461207d203d20617069526573706f6e73653b636f6e7374205f7072696365203d20646174612e70726963653b636f6e7374207072696365203d204d6174682e666c6f6f72285f7072696365202a204d6174682e706f772831302c313829293b72657475726e2046756e6374696f6e732e656e636f646555696e74323536287072696365293b";

type ChainlinkPriceProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainlinkPriceProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainlinkPriceProvider__factory extends ContractFactory {
  constructor(...args: ChainlinkPriceProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId_: PromiseOrValue<BigNumberish>,
    relayer_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainlinkPriceProvider> {
    return super.deploy(
      subscriptionId_,
      relayer_,
      overrides || {}
    ) as Promise<ChainlinkPriceProvider>;
  }
  override getDeployTransaction(
    subscriptionId_: PromiseOrValue<BigNumberish>,
    relayer_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId_,
      relayer_,
      overrides || {}
    );
  }
  override attach(address: string): ChainlinkPriceProvider {
    return super.attach(address) as ChainlinkPriceProvider;
  }
  override connect(signer: Signer): ChainlinkPriceProvider__factory {
    return super.connect(signer) as ChainlinkPriceProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkPriceProviderInterface {
    return new utils.Interface(_abi) as ChainlinkPriceProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkPriceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkPriceProvider;
  }
}
