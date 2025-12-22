
import { useDisconnect } from '@reown/appkit/react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from './Session';

const WalletAccountListener = () => {
const navigate = useNavigate();
const disconnect = useDisconnect();

useEffect(() => {
    const debounce = setTimeout(() => {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', () => {
          setAccessToken("")
          navigate("/", {replace : true})
          
        })
      };
    }, 1000);
    return () => clearTimeout(debounce);
  }, []);
  return null
}

export default WalletAccountListener
