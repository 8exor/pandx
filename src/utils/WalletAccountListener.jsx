
import { useDisconnect } from '@reown/appkit/react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const WalletAccountListener = () => {
const navigate = useNavigate();
const disconnect = useDisconnect();



// const walletDisconnect = async()=>{
// await window.ethereum.request({
// "method": "wallet_revokePermissions",
// "params": [
// {
// eth_accounts: {}
// }
// ],
// });
// }

useEffect(() => {
    const debounce = setTimeout(() => {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', () => {
          navigate("/", {replace : true})
      window.ethereum.request({
        "method" : "wallet_revokePermissions",
        "parmas" : [
          {
            eth_accounts : {}
          }
        ]
      })
        })
      };
    }, 1000);
    return () => clearTimeout(debounce);
  }, []);
  return null
}

export default WalletAccountListener
