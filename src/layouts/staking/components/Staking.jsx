import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { REPORTS } from "@services/panda.api.services";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import StakingHead from "./StakingHead";
import { useAppKitAccount } from "@reown/appkit/react";
import Tabs from "./Tabs";
import CopyToClipBaord from "@hooks/CopyToClipBoard";
import StakingTable from "./StakingTable";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInfoContext } from "@contexts/UserInfoContext";
import toast from "react-hot-toast";
import { taskNote } from "@constants/index";

export default function Staking() {
  const { address } = useAppKitAccount();
  const navigate = useNavigate();

  const tableDataKeys = [" S No", "Username", "Status", "$QRA AirDrop"];
  const [handleCopy] = CopyToClipBaord();

  const { userData } = useContext(UserInfoContext);
  const location = useLocation();
  // const [clikcedTab, setClickedTab] = useState("stake")
  const [activeTab, setActiveTab] = useState({
    mainTabs: "stake",
    incomeTabs: "DAILY$",
  });

  const tableConfig = {
    stake: {
      headers: ["Sr No", "Date", "Staked Amt$", "Status", "Total Withdrawal"],
    },
    unstake: {
      headers: [
        "Sr No",
        "Date",
        "Staked Amt$",
        "Unstaked Amt$",
        "Status",
        "Total Withdrawal",
      ],
    },
    withdrawal: {
      headers: [
        "Sr No",
        "Date",
        "Withdrawal Amt$",
        "Status",
        "Total Withdrawal",
      ],
    },
    compound: {
      headers: [
        "Sr No",
        "Date",
        "Withdrawal Amt$",
        "Status",
        "Total Withdrawal",
      ],
    },
    p2p: {
      headers: ["Sr No", "Date", "P2P Amt$", "Status", "Total Withdrawal"],
    },
    incomeReports: {
      DAILY$: ["Sr No", "Date", "Daily $", "Amt $", "Note"],
      DIRECT: ["Sr No", "Date", "Direct Referral", "Amt $", "Note"],
      BOOSTX: ["Sr No", "Date", "Direct Referral", "Amt $", "BOOSTX Status"],
      LEVEL: ["Sr No", "Date", "Username", "Level", "Amt$", "Note"],
      RANK: ["Sr No", "Date", "Username", "Rank", "Amt$", "Note"],
      "UNI-POOL": ["Sr No", "Date", "Username", "Uni-Pool", "Amt$", "Note"],
    },
  };

  const { data } = useQuery({
    queryKey: ["airdropData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS.airdropData);
      return data?.data;
    },
  });

  const upgrade =
    (userData?.data?.rank_id == 1 && "0.60%") ||
    (userData?.data?.rank_id == 2 && "0.70%") ||
    (userData?.data?.rank_id == 3 && "0.80%") ||
    (userData?.data?.rank_id == 4 && "0.90%") ||
    (userData?.data?.rank_id == 5 && "1.00%");

  return (
    <div className="maincontainer h-full sm:w-full max-w-[1360px] rounded-xl md:mx-auto mt-[70px] sm:mx-auto mx-2">
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-center gap-2 p-3 text-xl ">
        <span className="blink-text">{taskNote?.title}</span>
        <marquee behavior="alternate" scrollamount="10" direction="">
          {taskNote?.des}
        </marquee>
      </div>
      <StakingHead />
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="left w-full md:w-1/2  bg-gradient-to-tl from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] h-auto md:h-[800px] lg:h-[720px] xl:h-[670px] sm:border-l border-b border-r-0 border-t-0 sm:border-r border-[#49498A] sm:rounded-b-lg rounded-none">
          {/* <div className="relative flex flex-col items-center justify-center w-full gap-3 mt-4 text-black md:flex-row sm:mt-2">
            <div
              className=" bg-[#BFFEB0] flex items-center justify-center gap-3 btn-primary  rounded-full shine hover:scale-105 duration-300 ease-in-out m-2 sm:m-2 w-full sm:w-[170px] max-w-[200px]  py-2 px-1"
            >
          
              <div className="flex items-center justify-center gap-1">
            <img className="w-4" src="/assets/images/star 1.svg" alt="star" />
            <span className="text-sm">{userData?.data?.rank_id}</span>
            </div>
            </div>
         
            <button
              className={`${
                userData?.data?.is_active ? "btn-primary " : "btn-red"
              } m-2 sm:m-2 w-full sm:w-[170px] max-w-[200px] rounded-full text-sm shine hover:scale-105 duration-300 ease-in-out  py-2 px-1 blink-text`}
            >
              {userData?.data?.is_active ? "Active" : "Inactive"}
            </button>
            <button className="bg-[#BFFEB0] btn-primary  m-2 sm:m-2 w-full sm:w-[170px] max-w-[200px] rounded-full shine hover:scale-105 duration-300 ease-in-out  text-xs py-3" onClick={()=>navigate("/Ranking")}>
              
            Upgrade Rank & Get {upgrade}

            </button>
          </div>

          <img
            src="/assets/images/pandaDash.svg"
            alt="panda"
            className="flex justify-center items-center w-[150px]  m-auto mt-8 sm:mt-8 "
          /> */}
          <div className="relative flex items-center justify-between w-full gap-3 p-4 text-black sm:mt-2">
            <div className=" bg-[#BFFEB0] flex items-center justify-center gap-3 btn-primary  rounded-full   w-[33%]   py-2 md:px-1">
              <div className="flex py-[2px] items-center justify-center gap-1">
                <img
                  className="w-5"
                  src="/assets/images/star 1.svg"
                  alt="star"
                />
                <span className="text-sm">{userData?.data?.rank_id}</span>
              </div>
            </div>


            <button
              className="bg-[#BFFEB0] btn-primary hidden lg:block  w-[33%] rounded-full   text-sm py-2"
              onClick={() => navigate("/Ranking")}
            >
              Upgrade Rank & Get {upgrade}
            </button>

            {/* copy for marquee */}
              <button
              className="bg-[#BFFEB0] btn-primary flex items-center justify-center  lg:hidden block w-[33%]  px-2  rounded-full   text-sm py-2"
              onClick={() => navigate("/Ranking")}
            >
              <marquee behavior="scroll" direction="left"> Upgrade Rank & Get {upgrade} </marquee>
             
            </button>
            {/* copy marqee end */}


            <button
              className={`${
                userData?.data?.is_active ? "btn-primary " : "btn-red"
              }  w-[33%] sm:w-[160px] max-w-[200px] rounded-full text-sm  py-2 px-1 blink-text`}
            >
              {userData?.data?.is_active ? "Active" : "Inactive"}
            </button>


          </div>

          <img
            src="/assets/images/pandaDash.svg"
            alt="panda"
            className="flex justify-center items-center w-[150px]  m-auto mt-8 sm:mt-8 "
          />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="z-2 right-contain w-full md:w-1/2 bg-gradient-to-tr from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] h-auto md:h-[800px]  lg:h-[720px] xl:h-[670px] sm:border-r sm:border-b border-l-0 border-t-0 border-[#49498A]  rounded-b-lg  p-4 md:p-6">
          <h1 className="flex justify-center my-4 text-xl text-center md:text-left blink-text md:my-2">
            QRA AIRDROP LIVE - EARN UNLIMITED $QRA
          </h1>

          <div className="mx-auto mb-5 circle-animate-logo">
            <img
              src="/assets/images/qerralogo.svg"
              className="w-[150px] sm:w-[136px] h-auto mt-6 md:mt-10"
            />
          </div>

          <div className="w-[260px] sm:w-[260px] p-4 py-2  mx-auto mt-24 bg-[#BFFEB0] btn-primary  text-center rounded-sm">
            Total AirDrop {Number(data?.qerra_airdrop).toFixed(0)} $QRA
          </div>
          <div className=" mt-6 rounded-md overflow-auto scrollbar-custom max-h-[240px]  ">
            <table className="w-full ">
              <thead className="sticky top-0 text-black rounded-md shadow-xl">
                <tr className="w-full flex gap-10 items-center justify-between p-4 py-2  rounded-md  bg-[#BFFEB0] btn-primary   ">
                  <th className="font-normal max-md:w-[150px] flex-[1_1_150]">
                    Sr No
                  </th>
                  <th className="font-normal max-md:w-[150px] flex-[1_1_150] ">
                    Username
                  </th>
                  <th className="font-normal max-md:w-[150px] flex-[1_1_150] ">
                    Status
                  </th>
                  <th className="font-normal max-md:w-[150px] flex-[1_1_150]">
                    $QRA AirDrop
                  </th>
                </tr>
              </thead>

              <tbody className="w-full">

                {data?.child_air_logs?.map((child, index) => (
                  <>
                    <tr
                      key={index}
                      className="w-full flex gap-10 items-center justify-between bg-[#E6FFD5] mt-5  px-4 p-2 rounded-md shadow-xl"
                    >
                      <td className="max-md:w  return (-[150px] flex-[1_1_150] text-base font-medium text-left text-black capitalize max-sm:w-30 ">
                        {index + 1}
                      </td>
                      <td className=" max-md:w-[150px] flex-[1_1_150] font-medium text-left text-black capitalize max-sm:w-30 ">
                        {child?.airdrop_child_user?.username}
                      </td>
                      <td className="max-md:w-[150px] flex-[1_1_150] text-base font-medium text-black capitalize max-sm:w-30 ">
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-400 rounded-md bg-red-400/10 inset-ring inset-ring-red-400/20">
                          To be claimed
                        </span>
                      </td>
                      <td className="max-md:w-[150px] flex-[1_1_150] text-base font-medium text-black capitalize max-sm:w-30 ">
                        {Number(
                          child?.airdrop_child_user?.qerra_airdrop
                        ).toFixed(0)}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <StakingTable activeTab={activeTab} tableConfig={tableConfig} />
    </div>
  );
}
