import Moralis from "moralis";
import React from "react";
import { useEffect } from "react";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { abi } from "../constants";
const Buy = () => {

    // const web3 =  Moralis.enableWeb3();
    const{isAuthenticated,Moralis}=useMoralis()
    // useEffect(() => {
    //     if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    //   }, [isAuthenticated, isWeb3Enabled]);
  // const {chainId:chainIdHex}=useMoralis()
  // console.log(parseInt(chainIdHex))
  // const {runContractfunction: buy}=useWeb3Contract({
  //     abi:abi,
  //     contractAddress:contractAddress[],
  //     functionName: buy,
  //     params:{},
  //     msgValue:
  // })
  
  let options = {
    contractAddress: "0x45B5F07E2a960D9c67bB612f7e0Ff46bC015fd35",
    functonName: "Buy",
    abi: abi,
    params: {
      _addr: 0xd63b5859278497c69171a92bfcee22516907aaaf,
      _amount: 0.0001,
    },
    msgValue: Moralis.Units.ETH(0.0001),
  };
  const Buy = async () => {
    await Moralis.executeFunction(options);
  };

  return (
    <>
      <div>
      {isAuthenticated?(
        <div className="bg-blue-500 rounded-full grid items-center py-2 px-3 hover:bg-blue-700 my-5">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl"
            onClick={Buy()}
          >
            BUY
          </button>
        </div>):(<div>Connect</div>)}
      </div>
    </>
  );
};

export default Buy;
