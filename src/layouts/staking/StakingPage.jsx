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
import TrialBonsuPopUp from "@pages/TrialBonsuPopUp";
import RainbowConfetti from "@pages/signUpConfetti";

const StakingPage = () => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAppKitAccount();
    const [bonusPopup, setBonusPopup] = useState(false);
  const {isLogin} =useContext(UserInfoContext)
  const [buyPandx, setBuyPandx] = useState(true);
  const navigate = useNavigate();
  // const [token, setToken] = useState("");
const [isClaimed, setIsClaimed] = useState(false)
 


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

const isRegistered = localStorage.getItem("isRegistered");
console.log("what is isregisteed in the stakingpage: ", isRegistered)

  return (
    <>

 
  
      <div className="sm:w-full h-full min-h-screen bg-[#eaffdd] ">
{(localStorage.getItem("isRegistered") && !bonusPopup) && <TrialBonsuPopUp setBonusPopup={setBonusPopup} bonusPopup={bonusPopup} setIsClaimed={setIsClaimed} />}
   {(bonusPopup && isClaimed) && (
        <RainbowConfetti trigger={true} duration={3} intensity={3} />
      )}
{
    (buyPandx && !isRegistered) &&
      <BuyPandaPopUp setBuyPandx={setBuyPandx}/>}
          <Staking isClaimed={isClaimed}/>

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
