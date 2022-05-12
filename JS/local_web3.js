
var connectedAddress;
const constractAddress = "0x71C0D7F8312d4A73d105c7567938aa58a84A9350";



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
  UpdateConnectedAddrress();
  // after connecting you can display buttons
  //document.getElementById('ConnectPART').style.display = 'inline';
}


export async function CheckTotalSupply() {
  UpdateConnectedAddrress();
  const smartContract = await InitializeSmartContract();

  if(smartContract){
    smartContract.methods.totalSupply().call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("Total supply: ", res)
    });
  }
}


export async function Mint() {
  UpdateConnectedAddrress();
  const smartContract = await InitializeSmartContract();

  if(smartContract){

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

      smartContract.methods.mint(numTokens)
        .send(parameters, function (err, res) {
          if (err) {
            console.log("An error occured", err)
            return
          }
          console.log("mint Tx sent. Tx hash: ", res)
        })
        .on('receipt', function (receipt) {
          console.log("Transacation has been included on the blockchain");
        })
        .on('error', function (error, receipt) {
          console.log("error: " + error);
        });
    });
  }
}



export async function CheckSaleActive() {
  UpdateConnectedAddrress();
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

  // need to give exact address + ABI file path

  let contractABI_path = getFileContent("..\\COMPILED\\abi.txt", false);
  const contractABI = JSON.parse(JSON.parse(JSON.stringify(contractABI_path)));
    return (new web3.eth.Contract(contractABI, constractAddress));
}


