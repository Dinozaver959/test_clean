
import {ABI} from "./ABI.js"
const Web3 = require('web3');

var connectedAddress;
export const contractAddress = "0xb1bc4CeC54c40672E0d60034252F23d228195311";
const network = "polygon";


async function UpdateConnectedAddrress() {
  if (window.ethereum) {
    try {
      connectedAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('action performed by account: ' + connectedAddress);

      // show connected address
      document.getElementById('connectedAddress').style.display = 'inline';
      document.getElementById('connectedAddress').innerText="Connected with: " + connectedAddress;

      // hide connect btn
      document.getElementById('connectButton').style.display = 'none';
      // show mint btn
      document.getElementById('mintButton').style.display = 'inline';

    } catch (error) {
      if (error.code === 4001) {
        // User rejected request
        console.log('user denied request');
      }
      console.log('error: ' + error);
    }
  }

}


// external functions
export async function Connect() {
  await UpdateConnectedAddrress();
  await HandleNetworkSwitch(network);
  // after connecting you can display buttons
  //document.getElementById('ConnectPART').style.display = 'inline';
}


export async function CheckTotalSupply() {
  await UpdateConnectedAddrress();
  await HandleNetworkSwitch(network);
  const smartContract = await InitializeSmartContract();

  if(smartContract){
    smartContract.methods.MAX_SUPPLY().call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("Total supply: ", res)
    });
  }
}


export async function Mint() {
  await UpdateConnectedAddrress();
  await HandleNetworkSwitch(network);
  const smartContract = await InitializeSmartContract();

  if(smartContract){

    // Check if Mint is open                                               // first check if mint is open
    smartContract.methods.publicSaleActive().call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("sale active status: ", res);    

      if(res){  // sle active

        // get the mint price directly from the contract
        smartContract.methods.MINT_PRICE().call(function (err, res) {
          if (err) {
            console.log("An error occured", err)
            return
          }
          console.log("mint price: ", res);    

          // mint quantity
          var numTokens = parseInt(document.getElementById('mintInput').value);
          if(!numTokens){numTokens = 1;}
          if(numTokens > 10){numTokens = 10;}

          // do the actual mint
          let parameters = {
            from: connectedAddress.toString(),
            value: res * numTokens       // value: web3.utils.toWei(0.1, 'ether'),     // needs to be specified -> we can send a read Tx to the blockchain
          }

          smartContract.methods.publicSaleMint(numTokens)   // Mint
            .send(parameters, function (err, res) {
              if (err) {
                console.log("An error occured", err)
                return
              }
              console.log("mint Tx sent. Tx hash: ", res)

              document.getElementById('errors').style.display = 'inline';
              document.getElementById('errors').style.color = 'red';
              document.getElementById('errors').innerText="Mint transacation send, waiting on confirmation...";
            })
            .on('receipt', function (receipt) {
              console.log("Transacation has been included on the blockchain");

              document.getElementById('errors').style.display = 'inline';
              document.getElementById('errors').style.color = 'red';
              document.getElementById('errors').innerText="mint successful!";
            })
            .on('error', function (error, receipt) {
              console.log("error: " + error);
            });
        });

      } else {  // sale not active
        document.getElementById('errors').style.display = 'inline';
        document.getElementById('errors').style.color = 'red';
        document.getElementById('errors').innerText="Sale not active!";
      }

    });
  }
}



export async function CheckSaleActive() {
  await UpdateConnectedAddrress();
  await HandleNetworkSwitch(network);
  const smartContract = await InitializeSmartContract();

  if(smartContract){
    smartContract.methods.saleActive().call(function (err, res) {
      if (err) {
        console.log("An error occured: ", err)
        return
      }
      console.log("Sale active: " + res)
    });
  }
}


async function InitializeSmartContract() {
  const web3 = new Web3(window.ethereum);

  return (new web3.eth.Contract(ABI, contractAddress));
}


async function HandleNetworkSwitch(networkName) {

  try {
      if (!window.ethereum) throw new Error("No crypto wallet found");

      if (window.ethereum.networkVersion !== ConvertNetworkNameToChainID(networkName)) {

          try {
              await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: "0x" + (ConvertNetworkNameToChainID(networkName)).toString(16) }]
              });

          } catch (err) {
              // This error code indicates that the chain has not been added to MetaMask
              if (err.code === 4902) {
                  await window.ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                      {
                          ...networks[networkName]
                      }]
                  });
              }
          }
      }
  } catch (err) {
      console.log(err.message);
  }
}

export function ConvertNetworkNameToChainID(networkName){

  switch (networkName) {
      case "homestead":
          return 1;

      case "rinkeby":
          return 4;

      case "polygon":
          return 137;

      case "mumbai":
          return 80001;

      default:
          break;
  }
}

const networks = {
  homestead: {
      chainId: `0x${Number(1).toString(16)}`,
      chainName: "Ethereum Mainnet",
      nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
      },
      rpcUrls: ["https://api.mycryptoapi.com/eth/"],
      blockExplorerUrls: ["https://etherscan.io/"]
  },
  rinkeby: {
      chainId: `0x${Number(4).toString(16)}`,
      chainName: "Test Network Rinkeby",
      nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
      },
      rpcUrls: ["https://rinkeby.infura.io/v3/"],
      blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
  },
  polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
  },
  polygon_Mumbai: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Mumbai",
      nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
      },
      rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
  }
};


// regarding the issue of injecting web3, read this:
// https://stackoverflow.com/questions/59172558/metamask-stopping-to-inject-web3-js
// just import web3 and use it

// however you will get this error:
// We noticed that the current website tried to use the removed window.web3 API. If the site appears to be broken, please click here for more information.
// so consider using ethers.js
