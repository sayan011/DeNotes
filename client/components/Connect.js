import React from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
const Connect = () => {
  return (
    <div className="absolute top-0 right-0 p-5 mx-auto mt-2">
      <ConnectButton className="py-4 " />
      
    </div>
  );
};

export default Connect;
