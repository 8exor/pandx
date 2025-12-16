import { add } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import React, { useEffect, useState } from 'react'

export const useWalletLogin = (LoginUser) => {
      const { open } = useAppKit();
        const { isConnected, address } = useAppKitAccount();
        const [loginRequest, setLoginRequest] = useState(false)
      
        const login = ()=>{
            setLoginRequest(true);
        if(!isConnected) {   
            open();}
        }

        useEffect(()=>{
            if(loginRequest && isConnected){
                if(address){
                    LoginUser.mutate({wallet_address : address})
                }
                setLoginRequest(false)
            }

        },[loginRequest, isConnected, address, LoginUser])
    
  return {login};
}


