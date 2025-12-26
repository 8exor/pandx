import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";
import MaxCapProgress from "./MaxCapProgress";
import toast from "react-hot-toast";
import { ProgressBar } from "./ProgressBar";
import { ValueSkelton } from "../ValueLoaders";
import Gift from "./Gift";

export default function StakingHead() {
  const { data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS.userInfo);
      return data;
    },
  });

  const maxCap = (data?.data?.used_capping / data?.data?.total_capping) * 100;
  // const maxCap = 50;
  const trialExpiry = new Date(data?.data?.trial_staking?.expiry);
 const trialDate = trialExpiry.getDate() ;
 const trialMonth = trialExpiry.getMonth();
 const trialYear = trialExpiry.getFullYear();

  return (
    <>
      <div className="relative mt-5  max-w-[1360px] bg-[#49498A] p-8 pb-5 rounded-t-xl text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] ">
        
             {
        data?.data?.trial_staking?.remaining_days === 0
         ?

         <>
        <div className="absolute lg:left-[30px]  min-[375px]:left-[8px] min-[375px]:top-[80px] left-[10px] left-0 top-[30%] lg:top-0 sm:top-[6%]">
           <img src="/assets/images/gift.svg" className="grayscale w-28 h-28 sm:w-25 sm:h-25" alt="" /> 
        </div>
         </>
         :
        <div className="absolute lg:left-[50px]  min-[375px]:left-[35px] min-[375px]:top-[35px] left-[10px] left-0 top-[10px] lg:top-[-80px] sm:top-[-50%]">
         <Gift />
        </div>
         }
        <div className="flex sm:flex-row  flex-col gap-4 items-top justify-between w-[90%] mr-4 ml-auto xl:mx-auto ">
          <p className={`text-right text-lg   w-full ${data?.data?.trial_staking?.remaining_days === 0 ? "text-gray-400" : "text-white"} `}>
            Trial Bonus $
            {Number(data?.data?.trial_staking?.total_amt_usd || 0).toFixed(0) }
          </p>
          <div className="text-right text-lg   w-full">
           <p className="  ">
            Trial Bonus Expiry <br/>
           
          </p>
          <p className="text-right sm:text-right text-md"> {trialDate}-{trialMonth}-{trialYear}</p>
          </div>
          <p className="text-right text-lg  w-full">
            My Stake ${Number(data?.data?.staking?.amt_usd || 0).toFixed(0) }
          </p>
          <p className="text-right text-lg  w-full">Daily SR 0.5%</p> 
          <p className="text-right text-lg  w-full">Daily SR $0.5</p>
          {/* desktop view caping */}
          <div className="flex text-right w-full hidden md:block ">

          <MaxCapProgress  value={maxCap} maxCap={true} />
          </div>
        </div>
        {/* mobile view caping  */}
         <div className="pt-7 text-right w-full md:hidden ">

          <MaxCapProgress  value={maxCap} maxCap={true} />
          </div>
      </div>

      <div className="flex justify-center w-full max-w-[1360px] mx-auto relative  z-30 ">
        <ProgressBar label="Total Burning" value={50} />
      </div>
    </>
  );
}
