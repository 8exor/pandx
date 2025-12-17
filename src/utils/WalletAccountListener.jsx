import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const WalletAccountListener = () => {
const navigate = useNavigate();
useEffect(() => {
    const debounce = setTimeout(() => {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', () => {
          navigate("/", {replace : true})
         disconnect();
        })
      };
    }, 1000);
    return () => clearTimeout(debounce);
  }, []);
  return null
}

export default WalletAccountListener
