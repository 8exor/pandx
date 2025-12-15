import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import React, { useEffect, useState } from 'react'

export const WalletLogin = () => {
      const { open } = useAppKit();
        const { isConnected, address } = useAppKitAccount();
        const [loginRequest, setLoginRequest] = useState(false)
      
        const login = ()=>{
            setLoginRequest(true);
            open();
        }

        useEffect(()=>{

        },[loginRequest, isConnected, address, LoginUser])
    
  return {login};
}


