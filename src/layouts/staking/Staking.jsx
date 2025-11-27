import React from "react";
import Tabs from "./Tabs";
import { useState } from "react";
import { REPORTS } from "@services/panda.api.services";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import StakingHead from "./StakingHead";
import { useAppKitAccount } from "@reown/appkit/react";


export default function Staking() {
  const {address} = useAppKitAccount();
  const [stakePopup, setStakePopup] = useState(false);
  const tableDataKeys = [" S No", "Username", "Status", "$QRA AirDrop"];

  const { data } = useQuery({
    queryKey: ["airdropData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS.airdropData);
      return data?.data;
    },
  });
  console.log(data);

  return (
    <div className="maincontainer h-full sm:w-full max-w-[1320px] rounded-xl md:mx-auto sm:mx-auto mx-2 md:mt-10 mt-4">
      <StakingHead/>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div
          className="left w-full md:w-1/2  bg-gradient-to-tl from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] 
                        h-auto md:h-[900px] sm:border-l border-b border-r-0 border-t-0 sm:border-r border-[#49498A] sm:rounded-b-lg rounded-none"
        >
          <div className="flex flex-col md:flex-row justify-center items-center text-black gap-3 md:gap-40 mt-4 sm:mt-15 w-full">
            <button className="bg-[#BFFEB0] m-2 sm:m-2 w-full sm:w-[300px] max-w-[200px] rounded-sm py-6 px-3" onClick={()=>setStakePopup(true)}>
              My Rank
            </button>
            <button className="bg-[#BFFEB0] m-2 sm:m-2 w-full sm:w-[300px] max-w-[200px] rounded-sm p-3">
              Upgrade next rank & get 0.60%
            </button>
          </div>

          <img
            src="/assets/images/pandaDash.svg"
            alt="panda"
            className="flex justify-center items-center w-[148px] h-[189px] m-auto mt-8 sm:mt-16"
          />
          <Tabs />
        </div>

        <div
          className="right-contain w-full md:w-1/2 bg-gradient-to-tr from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB]
                h-auto md:h-[900px] sm:border-r sm:border-b border-l-0 border-t-0 border-[#49498A]  rounded-b-lg  p-4 md:p-6"
        >
          <h1 className="text-xl flex justify-center text-center md:text-left my-4 md:my-8">
            QRA AIRDROP LIVE - EARN UNLIMITED $QRA
          </h1>
          <img
            src="/assets/images/qqlogo.svg"
            className="w-[150px] sm:w-[196px] h-auto mx-auto mt-6 md:mt-32"
          />
          <div className="w-[260px] sm:w-[300px] p-4 mx-auto mt-15 bg-[#BFFEB0] text-center rounded-sm">
            Total AirDrop {Number(data?.qerra_airdrop).toFixed(0)} $QRA
          </div>
          <div className=" mt-10 rounded-md overflow-auto scrollbar-custom max-h-[300px]  ">
            <table className="w-full  ">
              <thead className="sticky top-0 text-black  rounded-md shadow-xl">
                <tr className="w-full flex gap-10 items-center justify-between p-4  rounded-md  bg-[#BFFEB0]  ">
                  <th className="font-normal">sr</th>
                  <th className="font-normal ">Username</th>
                  <th className="font-normal ">Status</th>
                  <th className="font-normal ">$QRA AirDrop</th>
                </tr>
              </thead>

              <tbody className="w-full">
                {data?.child_air_logs?.map((child, index) => (
                  <>
                    <tr
                      key={index}
                      className="w-full flex gap-10 items-center justify-between bg-[#E6FFD5] mt-5  px-4 p-2 rounded-md shadow-xl"
                    >
                      <td lassName="capitalize text-base font-medium max-sm:w-30 text-white text-left">
                        {index + 1}
                      </td>
                      <td className="capitalize  font-medium max-sm:w-30 text-black text-left ">
                        {child?.airdrop_child_user?.username}
                      </td>
                      <td className="capitalize text-base font-medium max-sm:w-30 text-black ">
                        <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">
                          To be claimed
                        </span>
                      </td>
                      <td className="capitalize text-base font-medium max-sm:w-30 text-black ">
                        {Number(child?.airdrop_child_user?.qerra_airdrop).toFixed(0)}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {stakePopup && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setStakePopup(false)} //  background click closes popup
          >
            <div
              className="p-6 bg-[#C5FF9E] w-full max-w-[300px] h-[200px] rounded-sm text-black"
              onClick={(e) => e.stopPropagation()} //  clicking inside won't close popup
            >
              <div className="flex justify-between items-center space-y-4">
                <div>
                  <h3>Wallet Address</h3>
                  <span className="">{`${address.substring(0,5)}....${address.substring(36,42)}`}</span>
                </div>
                <div>
                    <button>
                      <img src="/assets/icons/copy.svg" alt="copy" />
                    </button>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <div>
                  <h3>Referral Link</h3>
                  <span>Akash</span>
                </div>
                <div>
                  <button>
                      <img src="/assets/icons/copy.svg" alt="copy" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
