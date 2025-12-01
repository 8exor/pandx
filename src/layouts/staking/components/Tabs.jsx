import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "@utils/axiosInstance";
import { TRANSACTIONS } from "@services/panda.api.services";
import toast from "react-hot-toast";
import { Contract, ethers } from "ethers";
import Abi from "@utils/abi/tokenAllowance.abi.json"
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import StakeTab from "./tabs/StakeTab";
import UnstakeTab from "./tabs/UnstakeTab";
import Withdrawl from "./tabs/Withdrawl";
import P2p from "./tabs/P2p";
import IncomeReport from "./tabs/IncomeReport";

// const [activeTab, setActiveTab] = useState("stake");
const Tabs = ({activeTab, setActiveTab, setIncomeReports}) => {

  const tabs = [
    { key: "stake", label: "Stake" },
    { key: "unstake", label: "Unstake" },
    { key: "withdrawal", label: "Withdrawal" },
    { key: "p2p", label: "P2P" },
    { key: "incomeReports", label: "IncomeReport" },
  ];
  
  const renderContent = {
    stake: (
   
      <StakeTab/>
    ),
    unstake: (
      <UnstakeTab/>
    ),
    withdrawal: (
    <Withdrawl/>
    ),
    p2p: (
      <P2p/>
    ),
    incomeReports: (
     <IncomeReport activeTab={activeTab} setActiveTab={setActiveTab} setIncomeReports={setIncomeReports} />
    ),
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab({...activeTab, mainTabs : tab.key })}
              className={`p-2 md:p-4 min-w-[110px] rounded-full shine hover:scale-110 duration-300 ease-in-out ${
                activeTab?.mainTabs === tab.key ? "bg-white" : "bg-[#BFFEB0]"
              } hover:bg-white`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-2 mt-5 mb-12 font-semibold text-black">
        {renderContent[activeTab?.mainTabs]}
      </div>
    </div>
  );
};

export default Tabs;
