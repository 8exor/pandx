import { UserInfoContext } from "@contexts/UserInfoContext";
import FullPageLoader from "@hooks/FullPageLoader";
import Load from "@hooks/Load";
import { useAppKitProvider } from "@reown/appkit/react";
import { TRANSACTIONS } from "@services/panda.api.services";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { ethers, providers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data } from "react-router-dom";

export default function UnstakeTab() {
  const [isChecked, setIsChecked] = useState("");
  const { walletProvider } = useAppKitProvider("eip155");
  const { userData } = useContext(UserInfoContext);
  const unstake = useMutation({
    mutationFn: async (Formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.createUnstakeTransaction,
        Formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      try {
        // debugger;
        console.log({ data });
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = await provider.getSigner();
        console.log({
          from: data?.data?.unStake?.from,
          to: data?.data?.unStake?.to,
          gasPrice: data?.data?.unStake?.gasPrice,
          gasLimit: data?.data?.unStake?.gasLimit,
          data: data?.data?.unStake?.data,
          value: data?.data?.unStake?.value,
        });
        const unstaking = await signer.sendTransaction({
          from: data?.data?.unStake?.from,
          to: data?.data?.unStake?.to,
          gasPrice: data?.data?.unStake?.gasPrice,
          gasLimit: data?.data?.unStake?.gasLimit,
          data: data?.data?.unStake?.data,
          value: data?.data?.unStake?.value,
        });
        await unstaking.wait();
        unstakeHash?.mutate({ txn_hash: unstaking.hash });
        setIsChecked(false);
      } catch (error) {
        console.log({ error });
      }
    },
    onError: (error) => {
      toast.error(error?.message, {
        duration: 1000,
      });
    },
  });

  const unstakeHash = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.submiteUnstakeHash,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message, {
        duration: 700,
      });
    },
  });

   useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!staking?.isPending) return;
  
      e.preventDefault();
      e.returnValue = ""; // REQUIRED
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unstake?.isPending]);

  return (
    <>
    {unstake?.isPending && <FullPageLoader/>}
    <div className="mt-6 lg:px-15">
      <div className="flex items-center justify-between lg:px-[30px] gap-4 p-3 bg-white border border-black rounded-lg lg:rounded-full sm:flex-row sm:justify-between">
        <button className={`bg-[#72A314] btn-primary sm:text-[16px] sm:px-[16px] sm:py-[8px] text-[14px]  sm:p-2 p-[7px]   text-white font-extralight text-center ${userData?.data?.is_deactivated && "grayscale"}`}>
          MyStake $
          {isNaN(Number(userData?.data?.staking?.amt_usd).toFixed(0))
            ? 0
            : Number(userData?.data?.staking?.amt_usd).toFixed(0)}
        </button>

        <button className="bg-[#72A314] btn-primary sm:text-[16px] sm:px-[16px] sm:py-[8px] text-[14px]  sm:p-2 p-[7px]   text-white font-extralight text-center">
          Un-Stake 100%
        </button>
      </div>

      <div className="flex items-center gap-3 mt-3 leading-0">
        <input
          type="checkbox"
          className="scale-200"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div>
          <span className="text-sm font-light">
            Please confirm if you want to proceed with unstaking. Once you
            unstake, your ID will be permanently deactivated.
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          className={`bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2 border border-[#181724] font-extralight text-center  rounded-full shine hover:scale-110 duration-300 ease-in-out ${userData?.data?.is_deactivated && "grayscale"}`}
          onClick={() => unstake.mutate({ confirmation: isChecked && "1" })}
          disabled = {unstake?.isPending && true (userData?.data?.is_deactivated)&&true} 
        >
          {unstake?.isPending ?  <Load/> : " Submit"}
        </button>
      </div>
    </div>
    </>
  );
}
