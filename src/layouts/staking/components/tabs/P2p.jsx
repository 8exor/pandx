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
        console.log({ provider });
  
        const signer = await provider.getSigner();
        console.log({ signer });
        console.log({
          from: data?.data?.stakeInvest?.from,
          to: data?.data?.stakeInvest?.to,
          gasPrice: data?.data?.stakeInvest?.gasPrice,
          gasLimit: data?.data?.stakeInvest?.data,
          value: data?.data?.stakeInvest?.value,
        });

        const data3 = await signer.sendTransaction({
          from: data?.data?.stakeInvest?.from,
          to: data?.data?.stakeInvest?.to,
          gasPrice: data?.data?.stakeInvest?.gasPrice,
          gasLimit: data?.data?.stakeInvest?.gasLimit,
          data: data?.data?.stakeInvest?.data,
          value: data?.data?.stakeInvest?.value,
        });

        console.log(data3);
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
    <div className="w-full px-2 mt-5 sm:px-4">
      <div className="flex flex-col items-center justify-between gap-3 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row">
        <input
          type="text"
          placeholder="Enter UserName"
          className="w-full sm:w-[60%] px-2 py-1 rounded-sm outline-none"
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          className="bg-[#72A314] btn-primary  w-full sm:w-[25%] px-1 py-1 sm:px-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight"
          onClick={() => validateUserName.mutate({ username: userName })}
        >
          Validate
        </button>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row">
        <p className="w-full text-center sm:text-left sm:w-auto">
          Available $60
        </p>
        <input
          type="text"
          className="w-full md:max-w-[150px] lg:max-w-[270px] xl:max-w-[420px] outline-none"
          value={p2pAmount}
          onChange={(e) => setp2pAmount(e.target.value)}
        />
        <button className="bg-[#72A314] btn-primary  w-full sm:w-auto px-2 py-1  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight">
          Max
        </button>
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
