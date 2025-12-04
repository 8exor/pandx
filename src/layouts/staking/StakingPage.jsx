import React, { useContext, useEffect, useState } from "react";
import Staking from "./components/Staking";
import { stakers } from "@constants/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AUTH, REPORTS } from "@services/panda.api.services";
import axiosInstance from "@utils/axiosInstance";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { UserInfoContext } from "@contexts/UserInfoContext";
import BuyPandaPopUp from "./BuyPandaPopUp";

const StakingPage = () => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAppKitAccount();
  const {isLogin} =useContext(UserInfoContext)
  const [buyPandx, setBuyPandx] = useState(true);

  const { data } = useQuery({
    queryKey: ["dashboarData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS.dashboardData);
      return data?.data;
    },
  });

  const LoginUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.login, formData);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);

      setAccessToken(data?.data?.token);
    },
    onError: (error) => {
      if (error?.status === 0 && clickedOnLogin) {
        toast.error(error?.message);
      }
      disconnect();
    },
  });

  // useEffect(() => {

  //   if (isConnected) {
  //     alert("Hey !!!")
  //     LoginUser.mutate({ wallet_address: address });
  //   }
  // }, [isConnected]);

  console.log("what is connecteing : ", isConnected)

  return (
    <>
    {
      buyPandx ?
      <BuyPandaPopUp setBuyPandx={setBuyPandx}/>
      :
      <div className="sm:w-full h-full min-h-screen bg-[#eaffdd] py-5">
        {/* Stakers section */}
        {/* <div className='sm:w-full flex flex-wrap gap-4 justify-between max-w-[1360px] sm:mx-auto mx-2  
                      bg-[linear-gradient(90deg,rgba(165,159,238,1)_0%,rgba(153,145,235,1)_50%,rgba(150,150,224,1)_100%)] 
                      p-3 rounded-xl'>
        {stakers.map((user, index) => (
          <div 
            key={user.id + user.title} 
            className='flex flex-col items-center w-full gap-2 px-3 py-2 rounded-lg sm:flex-row sm:items-center sm:w-auto'
          >
            <img 
              src={user.img} 
              alt={user.title} 
              className='object-cover w-12 h-12 sm:w-8 sm:h-8'
            />
         
           <span className='text-center text-black sm:text-left'>{`${user.title} ${Object.values(data ||{})[index]}`}</span>
         
            
          </div>
        ))}
      </div> */}

   
          <Staking />

          {/* <div className="flex items-center justify-center w-full mt-30">
            <button
              className="  bg-[#ccf1b3] text-[#5b5bac] p-2 w-full max-w-[200px] border border-black  rounded-md cursor-pointer"
              onClick={async () => {
                open();
              }}
            >
              Login
            </button>
          </div> */}

      </div>
      }
    </>
  );
};

export default StakingPage;
