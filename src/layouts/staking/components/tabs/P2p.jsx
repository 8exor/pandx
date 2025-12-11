import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { AUTH, TRANSACTIONS } from "@services/panda.api.services";
import { Contract, ethers } from "ethers";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { EthersProvider } from "@reown/appkit-adapter-ethers5";
import p2pAllowance from "@utils/abi/p2pAllowance.abi.json";
import toast from "react-hot-toast";
import { data, useLocation } from "react-router-dom";
import { UserInfoContext } from "@contexts/UserInfoContext";

export default function P2p() {
  const { walletProvider } = useAppKitProvider("eip155");
  const { address, isConnected } = useAppKitAccount();
  const [p2pAmount, setp2pAmount] = useState("");
  const [userName, setUserName] = useState("");
    const { userData } = useContext(UserInfoContext);

  const validateUserName = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(AUTH?.verifyUserName, formdata);
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.message || "Invalid username");
    },
  });

  const p2pTransaction = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.createP2PStake,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      try {
        const provider = new ethers.providers.Web3Provider(walletProvider);


        const signer = await provider.getSigner();
    

        const data3 = await signer.sendTransaction({
          from: data?.data?.stakeInvest?.from,
          to: data?.data?.stakeInvest?.to,
          gasPrice: data?.data?.stakeInvest?.gasPrice,
          gasLimit: data?.data?.stakeInvest?.gasLimit,
          data: data?.data?.stakeInvest?.data,
          value: data?.data?.stakeInvest?.value,
        });

        await data3.wait();

        p2pHash.mutate({
          txn_hash: data3?.hash,
          username: userName,
          token_amount: p2pAmount,
        });
      } catch (error) {
        console.log({ error });
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Error Occurred");
    },
  });

  const p2pHash = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.submitP2pHash,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.message || "Error Occurred");
    },
  });

  return (
    <div className="w-full px-2 mt-5 lg:px-15">
      <div className="grid items-center justify-between grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 ">


        <div className="grid grid-cols-1  xl:grid-cols-3 w-full gap-2 p-[10px] mb-4 bg-white border border-black rounded-lg xl:rounded-full ">
          <p className="w-full text-sm text-center sm:text-left" >
            Avl 
          </p>
          <input
            type="text"
            className="border border-[2px] p-1 border-gray-500 rounded-lg"
            value={p2pAmount}
            onChange={(e) => setp2pAmount(e.target.value)}
          />
          <button className="bg-[#72A314] btn-primary  w-full sm:w-auto px-2 py-1 text-sm rounded-full  text-white font-extralight">
            Max
          </button>
        </div>



        <div className="flex flex-col xl:flex-row gap-2 md:gap-6 p-2 mb-4 bg-white border border-black rounded-lg p-[14px] xl:rounded-full ">
          <input
            type="text"
            placeholder="Enter UserName"
            className="border border-[2px] w-full xl:max-w-[118px] border-gray-500 rounded-lg text-sm p-1"
            onChange={(e) => setUserName(e.target.value)}
          />

          <button
            className="bg-[#72A314] btn-primary text-sm w-full  py-2    rounded-full  text-white font-extralight"
            onClick={() => validateUserName.mutate({ username: userName })}
          >
            Validate
          </button>
        </div>



      </div>


      <p className="mb-4 font-semibold text-center uppercase sm:text-left">
        P2P unlimited and free
      </p>

      <div className="flex justify-center mb-4">
        <button
          className="bg-[#72A314] btn-primary  text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight"
          onClick={() =>
            p2pTransaction.mutate({
              username: userName,
              token_amount: p2pAmount,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}
