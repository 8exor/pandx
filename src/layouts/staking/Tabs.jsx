import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "@utils/axiosInstance";
import { TRANSACTIONS } from "@services/panda.api.services";
import toast from "react-hot-toast";
import { Contract, ethers } from "ethers";
import Abi from "../../utils/abi/tokenAllowance.abi.json";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("stake");
  const [stakeAmount, setStakeAmount] = useState("");
  const tabs = [
    { key: "stake", label: "Stake" },
    { key: "unstake", label: "Unstake" },
    { key: "withdrawal", label: "Withdrawal" },
    { key: "p2p", label: "P2P" },
    { key: "income report", label: "Income Report" },
  ];
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const staking = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.getStakeTransaction,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      try {
        // debugger;
        const approvalAddress = data?.data?.stakeApproval?.to;
        const allowanceAddress = data?.data?.stakeInvest?.to;
        console.log("what is contract address : ", approvalAddress);
        console.log(walletProvider);
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        console.log({ ethersProvider });
        const signer = await ethersProvider.getSigner();
        console.log({ signer });
        const contract = new Contract(approvalAddress, Abi, signer);
        console.log({ contract });
        console.log(address, allowanceAddress);
        const allowance = await contract.allowance(address, allowanceAddress);
        console.log({ allowance });
        if (Number(allowance) < Number(stakeAmount)) {
        //   console.log({
        //     from: data?.data?.stakeApproval?.from,
        //     to: data?.data?.stakeApproval?.to,
        //     gasPrice: data?.data?.stakeApproval?.gasPrice,
        //     gasLimit: data?.data?.stakeApproval?.gasLimit,
        //     data: data?.data?.stakeApproval?.data,
        //   });
          const approval = await signer?.sendTransaction({
            from: data?.data?.stakeApproval?.from,
            to: data?.data?.stakeApproval?.to,
            gasPrice: data?.data?.stakeApproval?.gasPrice,
            gasLimit: data?.data?.stakeApproval?.gasLimit,
            data: data?.data?.stakeApproval?.data,
          });
          await approval.wait();
          console.log({ approval });
        }
        // console.log({
        //   from: data?.data?.stakeInvest?.from,
        //   to: data?.data?.stakeInvest?.to,
        //   gasPrice: data?.data?.stakeInvest?.gasPrice,
        //   gasLimit: data?.data?.stakeInvest?.gasLimit,
        //   data: data?.data?.stakeInvest?.data,
        //   value: data?.data?.stakeInvest?.value,
        // });
        const invest = await signer?.sendTransaction({
          from: data?.data?.stakeInvest?.from,
          to: data?.data?.stakeInvest?.to,
          gasPrice: data?.data?.stakeInvest?.gasPrice,
          gasLimit: data?.data?.stakeInvest?.gasLimit,
          data: data?.data?.stakeInvest?.data,
          value: data?.data?.stakeInvest?.value,
        });
        await invest.wait();
        console.log({ invest });
        console.log(invest?.hash );

        submitHash.mutate({
        "txn_hash" : invest?.hash,
        "token_amount" : stakeAmount
        })
      } catch (error) {
        console.log({ error });
      }
    },
    onError: (error) => {toast.error(error?.message || "Error occurred")}
  });

  const submitHash = useMutation({
    mutationFn : async(formdata)=>{
        const {data} = await axiosInstance.post(TRANSACTIONS?.submitStakeHash, formdata);
        return data;
    },
    onSuccess : async(data)=>{
      toast.success(data?.message);
    },
    onError:(error)=>{
toast.error(error?.message || "Error Occurred")
    }
  })

  const renderContent = {
    stake: (
      <div className="mt-8 mb-10 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="w-full sm:max-w-[200px]">
            <p className="text-sm sm:text-base">$PANDX in wallet</p>
            <div className="w-full bg-[#BFFEB0] px-2 py-2 rounded-sm text-center">
              0.00
            </div>
          </div>
          <div className="w-full sm:max-w-[200px]">
            <p className="text-sm sm:text-base">Current Worth</p>
            <div className="w-full bg-[#BFFEB0] px-2 py-2 rounded-sm text-center">
              $0
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-full sm:max-w-[620px] mx-auto bg-white px-4 py-3 rounded-sm border border-black gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <img
              src="/assets/images/pandalogofinalcopy.svg"
              alt="panda"
              className="w-8 h-8 rounded-full"
            />
            <input
              type="text"
              className="w-full outline-none"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <div className="bg-[#72A314] px-4 py-2 rounded-sm text-white font-extralight cursor-pointer text-center">
              MAX
            </div>
            <p className="font-bold">$PANDX</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-[#72A314] text-white px-6 sm:px-10 py-2 sm:py-4 rounded-sm border border-[#181724] font-extralight text-center"
            onClick={() => staking.mutate({ stake_amount: stakeAmount })}
          >
            Submit
          </button>
        </div>
      </div>
    ),
    unstake: (
      <div className="mt-6 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 bg-white rounded-sm border border-black p-3">
          <button className="bg-[#72A314] w-[200px] sm:w-[30%] py-3 rounded-sm text-white font-extralight text-center">
            MyStake $1000
          </button>
          <button className="bg-[#72A314] w-[200px] sm:w-[30%] py-3 rounded-sm text-white font-extralight text-center">
            Unstake 100%
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] text-white px-6 sm:px-10 py-2 sm:py-4 rounded-sm border border-[#181724] font-extralight text-center">
            Submit
          </button>
        </div>
      </div>
    ),
    withdrawal: (
      <div className="mt-6  px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-sm border border-black gap-3">
          <p className="text-center sm:text-left w-full sm:w-auto">
            Available $90
          </p>
          <button className="bg-[#72A314] w-full sm:w-auto px-4 py-2 rounded-sm text-white font-extralight text-center">
            Max
          </button>
        </div>

        <p className="mt-3 text-center sm:text-left">5% Pool Free</p>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] text-white px-6 sm:px-10 py-2 sm:py-3 rounded-sm border border-[#181724] font-extralight text-center">
            Submit
          </button>
        </div>
      </div>
    ),
    p2p: (
      <div className="w-full px-2 sm:px-4 mt-5">
        <div
          className="flex flex-col sm:flex-row justify-between items-center 
                  bg-white p-2 rounded-sm border border-black mb-4 gap-3"
        >
          <input
            type="text"
            placeholder="Enter UserName"
            className="w-full sm:w-[60%] px-2 py-1 rounded-sm"
          />

          <button
            className="bg-[#72A314] w-full sm:w-[25%] px-2 py-1 sm:px-2 sm:py-2 rounded-sm 
                       text-white font-extralight"
          >
            Validate
          </button>
        </div>
        <div
          className="flex flex-col sm:flex-row justify-between items-center 
                  bg-white p-2 rounded-sm border border-black mb-4 gap-3"
        >
          <p className="text-center sm:text-left w-full sm:w-auto">
            Available $60
          </p>

          <button
            className="bg-[#72A314] w-full sm:w-auto px-2 py-1 rounded-sm 
                       text-white font-extralight"
          >
            Max
          </button>
        </div>
        <p className="uppercase font-semibold text-center sm:text-left mb-4">
          P2P unlimited and free
        </p>

        <div className="flex justify-center mb-4">
          <button
            className="bg-[#72A314] text-white px-3 sm:px-10 py-1 sm:py-3 
                       rounded-sm border border-[#181724] font-extralight"
          >
            Submit
          </button>
        </div>
      </div>
    ),
    "income report": (
      <div className="bg-white border border-black p-2 rounded-sm mt-8 font-extralight w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
          {["Daily$", "Direct", "Boostx", "Level", "Rank", "Unipole"].map(
            (label) => (
              <button
                key={label}
                className="bg-[linear-gradient(90deg,rgba(110,163,22,1)_0%,rgba(90,161,33,1)_50%,rgba(74,160,42,1)_100%)] 
                                       text-white border border-black rounded-sm uppercase 
                                       px-2 py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all duration-300 ease-in-out w-full"
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    ),
  };

  return (
    <div>
      <div className="mt-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`p-2 md:p-4 min-w-[110px] rounded-sm ${
                activeTab === tab.key ? "bg-white" : "bg-[#BFFEB0]"
              } hover:bg-white`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-2 mt-5 mb-12 font-semibold text-black">
        {renderContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
