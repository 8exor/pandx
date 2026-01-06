import React, { useEffect, useState } from "react";
import RainbowConfetti from "./signUpConfetti";
import { useNavigate } from "react-router-dom";

const TrialBonsuPopUp = ({setBonusPopup, bonusPopup, setIsClaimed}) => {


  // const [trigger, setTrigger] = useState(false)
  // const navigate = useNavigate();
  //   useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/StakingPage", { replace: true });
  //   }, 5000);

  //   return () => clearTimeout(timer); // cleanup
  // }, [trigger]);



  return (
    <div className="z-45 fixed flex items-center justify-center inset-0 w-full h-full min-h-screen bg-[#00000081]">
      <div className=" z-50 w-full max-w-md p-4 py-4  bg-[#C5FF9E] border border-black rounded-md">
        <button
          className="flex justify-end w-full"
          onClick={() => {
            localStorage.removeItem("isRegistered")
            setBonusPopup(true)
          }}
        >
          <img
            className="invert w-7"
            src="/assets/icons/close.svg"
            alt="clsoe"
          />
        </button>
        <div className="flex items-center gap-2">
          <img src="/assets/images/gift.svg" className="w-20" alt="gift" />
          <h2 className="text-xl text-center">$100 TRIAL BONUS FOR 5 DAYS</h2>
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            className="  bg-[#ccf1b3] text-[#5b5bac] p-2 px-5  border border-black  rounded-md cursor-pointer"
            onClick={async () => {
              setIsClaimed(true);
            localStorage.removeItem("isRegistered")
            setBonusPopup(true)
            }}
          >
            CLAIM NOW
          </button>
        </div>
      </div>
   
    </div>
  );
};

export default TrialBonsuPopUp;
