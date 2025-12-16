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
import { getAccessToken } from "@utils/Session";
import { useNavigate } from "react-router-dom";

const StakingPage = () => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAppKitAccount();
  const {isLogin} =useContext(UserInfoContext)
  const [buyPandx, setBuyPandx] = useState(true);
  const navigate = useNavigate();
  // const [token, setToken] = useState("");

  // const getTheToken =async()=>{
  //   const token = await getAccessToken();
  //   console.log("what is deepak tokeninggg color:red ",token);
  //   setToken(token);
  // }


  const { data } = useQuery({
    queryKey: ["dashboarData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS.dashboardData);
      return data?.data;
    },
  });

  // useEffect(()=>{
  //   getTheToken();
  // },[])



  return (
    <>

 
  
      <div className="sm:w-full h-full min-h-screen bg-[#eaffdd] ">
       
{
    buyPandx &&
      <BuyPandaPopUp setBuyPandx={setBuyPandx}/>}
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
 
    </>
  );
};

export default StakingPage;
