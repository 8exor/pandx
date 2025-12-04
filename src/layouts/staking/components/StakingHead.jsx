import React from 'react'
import {useQuery} from "@tanstack/react-query"
import axiosInstance from '@utils/axiosInstance';
import { REPORTS } from '@services/panda.api.services';
import MaxCapProgress from './MaxCapProgress';
import toast from 'react-hot-toast';
import { ProgressBar } from './ProgressBar';


export default function StakingHead() {

  const {data} = useQuery({
    queryKey : ['userData'],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS.userInfo);
        return data;     
    },
})


const maxCap = (data?.data?.used_capping/data?.data?.total_capping)*100;
// const maxCap = 50;


  return (
   <>
    <div
        className="relative mt-2 w-full max-w-[1360px] bg-[#49498A] p-8 pb-5 rounded-t-xl text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]
            flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-2 text-center md:text-left "
      >
      <div className='ml-50'/>
        <img className='absolute left-25 w-30 -top-12' src="/assets/images/gift.svg" alt="gift" />
        <p >Trial Bonus ${Number(data?.data?.trial_staking?.total_amt_usd).toFixed(0)}</p>
          <p >My Stake ${isNaN(Number(data?.data?.staking?.amt_usd).toFixed(0)) ? 0 : Number(data?.data?.staking?.amt_usd).toFixed(0)}</p>
        <p>Daily 0.5%</p>
        <p>Daily $0.5</p>
        {/* <p>Total Gain ${Number(data?.data?.trail_income).toFixed(1)}</p> */}
           <MaxCapProgress value={maxCap}/>
      </div>



       <div className="flex justify-center w-full max-w-[1360px] mx-auto relative  z-30 ">
        {/* <div
          className="w-full bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D] 
                   font-bold text-black py-1 px-2 
                  relative overflow-visible"
        >
          {" "}
          Total Burning 60% */}
          {/* TOP BLEND */}
          {/* <div className="absolute top-[-20px] left-0 right-0 h-[20px] opacity-80"></div> */}
          {/* BOTTOM BLEND */}
          {/* <div className="absolute bottom-[-20px] left-0 right-0 h-[20px] opacity-80"></div> */}
        {/* </div> */}
            <ProgressBar label="Total Burning" value={50} />
      </div>


{/* 
       <div className={` w-full max-w-[1360px] bg-[#49498A] ${isNaN(Number(data?.data?.staking?.amt_usd).toFixed(0)) || Number(data?.data?.staking?.amt_usd).toFixed(0) === 0 ? "bg-[#656599]" : "" } p-8 pt-4 border-t   text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]
            flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-4 text-center md:text-left`}
      >
        <p >My Stake ${isNaN(Number(data?.data?.staking?.amt_usd).toFixed(0)) ? 0 : Number(data?.data?.staking?.amt_usd).toFixed(0)}</p>
        <p>Daily ${Number(data?.data?.daily_reward_per).toFixed(1)}</p>
        <p>Daily $10</p> */}

        {/* <div className="flex flex-col items-center md:items-start"> */}
          {/* Max Cap */}
          {/* <p className="bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D] w-20 h-3 rounded-2xl mt-1"></p> */}
       
        {/* </div> */}
   
      {/* </div> */}

   </>
  )
}
