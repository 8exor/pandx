import React, { useContext } from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "@utils/axiosInstance";
import { TRANSACTIONS } from "@services/panda.api.services";
import toast from "react-hot-toast";
import { Contract, ethers } from "ethers";
import Abi from "@utils/abi/tokenAllowance.abi.json";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { UserInfoContext } from "@contexts/UserInfoContext";

export default function StakeTab() {
  const [stakeAmount, setStakeAmount] = useState("");
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { userData, refetch } = useContext(UserInfoContext);

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

        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );

        const signer = await ethersProvider.getSigner();

        const contract = new Contract(approvalAddress, Abi, signer);

        const allowance = await contract.allowance(address, allowanceAddress);

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
        submitHash.mutate({
          txn_hash: invest?.hash,
          token_amount: stakeAmount,
        });
      } catch (error) {
        console.log({ error });
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Error occurred", {
        duration: 700,
      });
    },
  });

  const submitHash = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.submitStakeHash,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      setStakeAmount("");
      refetch();
      console.log("what s up bro are you hanging out here:::::::");
    },
    onError: (error) => {
      toast.error(error?.message || "Error Occurred", {
        duration: 700,
      });
      setStakeAmount("");
      refetch();
    },
  });

  return (
    <div className=" mt-1 mb-1 lg:px-15 ">
      {/* <div className="flex flex-col justify-between gap-4 mb-3 sm:flex-row">
          <div className="w-full sm:max-w-[150px]">
            <p className="text-sm sm:text-base">$PANDX in wallet</p>
            <div className="w-full sm:max-w-[110px] bg-[#BFFEB0] btn-primary  px-2 py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-center">
          
            </div>
          </div>
          <div className="w-full sm:max-w-[150px]">
            <p className="text-sm sm:text-base">Current Worth</p>
            <div className="w-full sm:max-w-[110px] bg-[#BFFEB0] btn-primary  px-2 py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-center">
              {Number(userData?.data?.wallet_balance * userData?.data?.token_price).toFixed(2)}
            </div>
          </div>
        </div> */}

      {/* <div className="items-center justify-between w-full max-w-full gap-4 px-4 py-3 mx-auto bg-white border border-black lg:flex rounded-xl">
          <div className="items-center justify-center w-full gap-3 lg:flex">
          <p className="block w-full text-center ">
            Avl ${Number(userData?.data?.withdrawable_balance).toFixed(2)}
          </p>
            <input
              type="text"
              className="w-full mt-2 border border-black rounded-full"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center w-full mt-3 lg:mt-0">
            <div className="bg-[#72A314] btn-primary  px-4 py-1  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight cursor-pointer text-center">
              MAX
            </div>
            <p className="font-bold">${Number(userData?.data?.wallet_balance).toFixed(0)}</p>
          </div>
        </div> 

 */}

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-full sm:max-w-[620px] mx-auto bg-white px-2 py-3 lg:rounded-full rounded-lg border border-black gap-1">
        <div className="flex items-center gap-2 justify-between w-full sm:px-[10px] gap-1">
          <div className="flex gap-1 items-center">
            <p>Avl $</p>
            <div className="flex items-center gap-1">
             
              {/* <img
                src="assets/images/pandalogofinalcopy.svg"
                className="w-6 rounded-full"
              /> */}
                <p>
              {userData?.data?.wallet_balance
                ? Number(userData?.data?.wallet_balance).toFixed(2)
                : 0}
            </p>
            </div>
           
          </div>
          <div className="relative w-[170px] lg:w-[60%] sm:w-[200px] m-auto">
            <input
              type="number"
              className="border border-[2px] m-auto border-gray-500 w-full px-2 rounded-lg py-2"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
            <div
              className="absolute top-1 right-1 py-2 px-4
               bg-[#72A314] rounded-lg flex items-center justify-center
               text-white  font-extralight text-sm cursor-pointer shadow-sm"
              onClick={() =>
                setStakeAmount(parseInt(userData?.data?.wallet_balance).toFixed(2))
              }
            >
              MAX
            </div>
          </div>

          <p className="font-bold">
            $
            {Number(stakeAmount * userData?.data?.token_price)
              ? parseFloat(stakeAmount * userData?.data?.token_price).toFixed(2)
              : 0}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <button
          className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2 rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center"
          onClick={() => staking.mutate({ stake_amount: stakeAmount })}
        >
          {staking?.isPending ? "loading...." : "submit"}
        </button>
      </div>
    </div>
  );
}
