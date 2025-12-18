import React, { useContext, useEffect, useState } from "react";
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
import Load from "@hooks/Load";
import FullPageLoader from "@hooks/FullPageLoader";

export default function P2p() {
  const { walletProvider } = useAppKitProvider("eip155");
  const { address, isConnected } = useAppKitAccount();
  const [p2pAmount, setp2pAmount] = useState("");
  const [userName, setUserName] = useState("");
  const { userData, refetch } = useContext(UserInfoContext);
  const [isUserValidated, setIsUserValidated] = useState(false);
  const [error, setError] = useState({
    userName : false,
    p2pAmount : false,
  })

  const validateUserName = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(AUTH?.verifyUserName, formdata);
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      setIsUserValidated(true);
    },
    onError: (error) => {
      toast.error(error?.message || "Invalid username", {
        duration: 1000,
      });
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
      toast.error(error?.message || "Error Occurred", {
        duration: 700,
      });
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
      setUserName("");
      setp2pAmount("");
      refetch();
    },
    onError: (error) => {
      toast.error(error?.message || "Error Occurred", {
        duration: 700,
      });
      refetch();
    },
  });
// console.log("what is username : ",userName)

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
  }, [p2pTransaction?.isPending]);

  useEffect(()=>{
    setIsUserValidated(false);
    setError({...error, userName : false})
  },[userName])

  useEffect(()=>{
    setError({...error, p2pAmount : false})
  },[p2pAmount])

  return (
    <>
    {p2pTransaction?.isPending && <FullPageLoader/>}
    <div className="w-full px-2 mt-5 lg:px-15">
      <div className="grid items-center justify-between grid-cols-1 gap-2 lg:grid-cols-1 xl:grid-cols-2 ">
        <div className={`flex gap-2   bg-white border border-black rounded-lg p-[12px] lg:rounded-full ${error?.userName && "border-red-600"} `}>
          <input
            type="text"
            placeholder="Enter UserName"
            value={userName}
            className="border border-[2px] w-[160px]   xl:w-[125px] border-gray-500 rounded-lg text-sm p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="bg-[#72A314] btn-primary text-sm w-full py-2 rounded-full text-white font-extralight"
            onClick={() => validateUserName.mutate({ username: userName })}
          >
            {isUserValidated ? (
              <img
                className="w-5 mx-auto rounded-full blink-text"
                src="/assets/images/check.png"
              />
            ) : (
              "Validate"
            )}
          </button>
        </div>

        <div className={`flex items-center justift-between w-full gap-3 p-[12px]  bg-white border border-black rounded-lg lg:rounded-full ${error?.p2pAmount && "border-red-600"} `}>
          <p className="text-sm text-center sm:text-left">
            Avl $
            {userData?.data?.withdrawable_balance
              ?parseFloat(parseFloat(userData?.data?.withdrawable_balance).toFixed(2))
              : 0}
          </p>
          <div className="relative w-[170px] lg:w-[60%] sm:w-[200px] m-auto">
            <input
              type="number"
              className="border border-[2px] flex-1 p-2 w-full border-gray-500 rounded-lg"
              value={p2pAmount}
              onChange={(e) => setp2pAmount(e.target.value)}
            />
            <div className="absolute top-1 bottom-1 right-1 py-2 px-4
               bg-[#72A314] rounded-lg flex items-center justify-center
               text-white  font-extralight text-sm cursor-pointer shadow-sm" onClick={() =>
                setp2pAmount(parseInt(userData?.data?.withdrawable_balance))
              }> 
        
              Max
         
            </div>
            
          </div>
        </div>
      </div>

      <p className="my-2 font-semibold text-center uppercase sm:text-left">
        P2P unlimited and free
      </p>

      <div className="flex justify-center mb-4">
        <button
          className={`bg-[#72A314] btn-primary  text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight ${userData?.data?.is_deactivated && "grayscale"}`}
          onClick={() => {
            if(!userName && !p2pAmount){
              setError({...error, userName : true, p2pAmount : true})
            }
            else if(!userName){
              setError({...error, userName : true})
            }
            else if(!p2pAmount){
              setError({...error, p2pAmount : true})
            }
            else{
            p2pTransaction.mutate({
              username: userName,
              token_amount: p2pAmount,
            })
          }
          }
          }
          disabled={p2pTransaction?.isPending && true || (userData?.data?.is_deactivated)&&true}
        >
          {p2pTransaction?.isPending ? <Load/> : " Submit"}
        </button>
      </div>
    </div>
    </>
  );
}
