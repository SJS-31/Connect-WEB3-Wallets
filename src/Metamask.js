import React from 'react'
import { useState } from "react";
import {ethers} from 'ethers';


const Metamask=()=> {

   // usetstate for storing and retrieving wallet details
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(result => accountChanged([result[0]]));
    } else {
      setErrorMessage("install metamask extension!!");
    }
  };
  
  const accountChanged = (accountName) =>{
    setDefaultAccount(accountName);
    // getUserBalance(accountName)
  }

  // getbalance function for getting a balance in
  // a right format with help of ethers
  // const getUserBalance = (accountAddress) => {

  //   // Requesting balance method
  //   window.ethereum
  //     .request({ 
  //       method: "eth_getBalance", 
  //       params: [String(accountAddress), "latest"] 
  //     })
  //     .then((balance) => {
  //       // Setting balance
  //       setUserBalance(ethers.utils.formatEther(balance));
  //     });
  // };

  return (
    <div>
    <div className='Wallet'>
        <h1>Connect Your Wallet</h1>
        <button onClick={connectWallet}>Connect Wallet</button>
        <h3>{defaultAccount}</h3>
        {/* <h3>{userBalance}</h3> */}
        {errorMessage}
    </div>
    </div>
  )
}

export default Metamask