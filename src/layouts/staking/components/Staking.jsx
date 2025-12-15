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
import TableSkeleton from "./TableSkelton";

export default function Staking() {
  const { address } = useAppKitAccount();
  const navigate = useNavigate();

  const tableDataKeys = [
    " S No",
    "Username",
    "Status",
    "$QRAsdfsfdsfsdfsdf AirDrop",
  ];
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
      headers: ["S N", "Date", "Staked Amt $", "Status", "Total Withdrawal"],
    },
    unstake: {
      headers: [
        "S N",
        "Date",
        "Staked Amt $",
        "Unstaked Amt $",
        "Status",
        "Total Withdrawal",
      ],
    },
    withdrawal: {
      headers: [
        "S N",
        "Date",
        "Withdrawal Amt $",
        "Status",
        "Total Withdrawal",
      ],
    },
    compound: {
      headers: ["S N", "Date", "Stake Amt $", "Status", "Total Withdrawal"],
    },
    p2p: {
      headers: ["S N", "Date", "P2P Amt $", "Status", "Total Withdrawal"],
    },
    incomeReports: {
      DAILY$: ["S N", "Date", "Amt $", "Note"],
      DIRECT: ["S N", "Date", "Direct Referral", "Amt $", "Note"],
      BOOSTX: ["S N", "Date", "Amt $", "BOOSTX Status"],
      LEVEL: ["S N", "Date", "Username", "Level", "Amt $", "Note"],
      TRIAL: ["S N", "Date", "Amt $", "Note"],
      "UNI-POOL": ["S N", "Date", "Username", "Amt $", "Note"],
    },
  };

  const { data, isLoading } = useQuery({
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
        <span className="blink-text sm:ml-30">{taskNote?.title}</span>
        <marquee behavior="alternate" scrollamount="10" direction="">
          {taskNote?.des}
        </marquee>
      </div>
      <div className="w-fit mx-auto flex items-center justify-center gap-2 p-3 text-xl border rounded-lg border-[#6ba631]">
        <span className="blink-text text-center font-normal">
          ACHIEVE BOOSTX IN 96:00:00
        </span>
      </div>
      <StakingHead />
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="left w-full md:w-1/2  bg-gradient-to-tl from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] h-auto md:h-[800px] lg:h-[790px] xl:h-[670px] sm:border-l border-b border-r-0 border-t-0 sm:border-r border-[#49498A] sm:rounded-b-lg rounded-none">
          <div className="relative flex items-center justify-between w-full gap-3 p-4 text-black lg:px-15 sm:mt-2">
            <div className="flex-1 bg-[#BFFEB0] flex items-center justify-center gap-3 btn-primary  rounded-full    py-2 md:px-1">
              <div className="flex py-[2px] items-center justify-center gap-1">
                <img
                  className="w-5"
                  src="/assets/images/star 1.svg"
                  alt="star"
                />
                <span className="text-sm">{userData?.data?.rank_id}</span>
              </div>
            </div>

            {/* desktop marqee */}

            <div
              className="bg-[#BFFEB0] btn-primary overflow-hidden whitespace-nowrap lg:block hidden flex items-center justify-center mx-auto flex-1 px-2 rounded-full text-sm py-2"
              onClick={() => navigate("/Ranking")}
            >
              <div className="marquee-track">
                <span className="marquee-item">
                  Upgrade Rank & Get {upgrade}
                </span>
                <span className="marquee-item">
                  Upgrade Rank & Get {upgrade}
                </span>
              </div>
            </div>

            {/* desktop marqee */}
            <button
              className={`${
                userData?.data?.is_active ? "btn-primary " : "btn-red"
              } flex-1  rounded-full text-sm  py-2 px-1 blink-text`}
            >
              {userData?.data?.is_active ? "Active" : "Inactive"}
            </button>
          </div>

          {/* mobile marqee */}

          <div
            className="bg-[#BFFEB0] overflow-hidden whitespace-nowrap btn-primary mx-[15px]  lg:hidden block   px-2  rounded-full   text-sm py-2"
            onClick={() => navigate("/Ranking")}
          >
            <div className="marquee-track">
              <span className="marquee-item">Upgrade Rank & Get {upgrade}</span>
              <span className="marquee-item">Upgrade Rank & Get {upgrade}</span>
            </div>
          </div>
          {/* mobile marqee */}

          <img
            src="/assets/images/pandaDash.svg"
            alt="panda"
            className="flex justify-center items-center w-[150px]  m-auto mt-8 sm:mt-8 "
          />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="z-2 right-contain w-full md:w-1/2 bg-gradient-to-tr from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] h-auto md:h-[800px]  lg:h-[790px] xl:h-[670px] sm:border-r sm:border-b border-l-0 border-t-0 border-[#49498A]  rounded-b-lg  p-4 md:p-6">
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
              <thead className="sticky top-0 z-10 text-black rounded-md shadow-xl">
                <tr className="w-full flex  items-center justify-between px-4 py-2  rounded-md  bg-[#BFFEB0] btn-primary   ">
                  <th className="font-normal  w-[50px]">S N</th>
                  <th className="font-normal   w-[100px] whitespace-nowrap">
                    Username
                  </th>
                  <th className="font-normal  w-[100px] whitespace-nowrap">
                    Status
                  </th>
                  <th className="font-normal  w-[120px] whitespace-nowrap">
                    $QRA AirDrop
                  </th>
                </tr>
              </thead>
              {isLoading ? (
                <></>
              ) : (
                // <TableSkeleton  />
                <tbody className="w-full">
                  {!data?.child_air_logs.length ? (
                    <tr className="flex items-center justify-center w-full p-2 py-15 mt-10 bg-[#E6FFD5] ">
                      <td>No Data Found</td>
                    </tr>
                  ) : (
                    data?.child_air_logs?.map((child, index) => (
                      <>
                        <tr
                          key={index}
                          className="w-full flex  items-center justify-between bg-[#E6FFD5] mt-5  px-4 p-2 rounded-md shadow-xl"
                        >
                          <td className="  w-[50px] text-center font-medium  text-black capitalize whitespace-nowrap ">
                            {index + 1}
                          </td>
                          <td className="  w-[100px]  font-medium text-center text-black capitalize whitespace-nowrap">
                            {child?.airdrop_child_user?.username}
                          </td>
                          <td className=" w-[100px] text-center font-medium text-black capitalize whitespace-nowrap ">
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-400 rounded-md bg-red-400/10 inset-ring inset-ring-red-400/20">
                              To be claimed
                            </span>
                          </td>
                          <td className="  w-[100px] text-center font-medium text-black capitalize  whitespace-nowrap">
                            {Number(
                              child?.airdrop_child_user?.qerra_airdrop
                            ).toFixed(0)}
                          </td>
                        </tr>
                      </>
                    ))
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <StakingTable activeTab={activeTab} tableConfig={tableConfig} />
    </div>
  );
}
