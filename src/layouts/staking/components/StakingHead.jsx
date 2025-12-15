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

  return (
    <>
      <div className="relative mt-10  max-w-[1360px] bg-[#49498A] p-8 pb-5 rounded-t-xl text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] ">
        <div className="absolute lg:left-[15px]  min-[375px]:left-[35px] min-[375px]:top-[35px] left-[10px] left-0 top-[10px] lg:top-[-80px] sm:top-[-80%]">
          <Gift />
        </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center justify-between w-[80%] ml-auto">
          <p className="text-center lg:text-right">
            Trial Bonus $
            {Number(data?.data?.trial_staking?.total_amt_usd || 0).toFixed(0) }
          </p>
          <p className="text-center lg:text-right">
            My Stake ${Number(data?.data?.staking?.amt_usd || 0).toFixed(0) }
          </p>
          <p className="text-center lg:text-right">Daily 0.5%</p>
          <p className="text-center lg:text-right">Daily $0.5</p>
          <div className="flex justify-end ">

          <MaxCapProgress  value={maxCap} maxCap={true} />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full max-w-[1360px] mx-auto relative  z-30 ">
        <ProgressBar label="Total Burning" value={50} />
      </div>
    </>
  );
}
