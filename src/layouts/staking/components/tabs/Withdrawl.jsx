import { UserInfoContext } from '@contexts/UserInfoContext'
import { useAppKitProvider } from '@reown/appkit/react';
import { TRANSACTIONS } from '@services/panda.api.services';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@utils/axiosInstance';
import { ethers } from 'ethers';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';

export default function Withdrawl() {
    const { walletProvider } = useAppKitProvider("eip155");
const {userData} = useContext(UserInfoContext);
const [withdrawalAmount, setWithdrawalAmount] = useState("");

const withdrawaling = useMutation({
  mutationFn : async(Formdata)=>{
    const {data} = await axiosInstance.post(TRANSACTIONS.withdrawal, Formdata);
    return data;
  },
  onSuccess : async(data)=>{
try {
  const provider = new ethers.providers.Web3Provider(walletProvider);

  const signer = await provider.getSigner();
  const txn = await signer.sendTransaction({
    from : data?.data?.from,
    to : data?.data?.to,
    gasPrice : data?.data?.gasPrice,
    gasLimit : data?.data?.gasLimit,
    data : data?.data?.data,
    value : data?.data?.value,
  })

  await txn.wait();

  withdrawalHash.mutate({
    "fund_hash" : txn?.hash,
    "amount" : withdrawalAmount,
  })
} catch (error) {
  
}
    toast.success(data?.message);

  },
  onError : (error)=>{
    toast.error(error?.message,{
                    duration : 700
                  });
    console.log(error)
  }
})

const withdrawalHash = useMutation({
  mutationFn : async(formdata)=>{
    const {data} = await axiosInstance.post(TRANSACTIONS?.submitFundHash, formdata);
    return data;
  },
  onSuccess : async(data)=>{
    toast.success(data?.message);
    setWithdrawalAmount("");
  },
  onError : (error)=>{
    toast.error(error?.message)
  }
})

  return (
    <div className=" mt-6 lg:px-15">

         <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3 bg-white border border-black rounded-lg lg:rounded-full w-full">


          <p className=" text-center  w-[60px] sm:w-full  sm:text-left">
            Avl ${userData?.data?.withdrawable_balance ? Number(userData?.data?.withdrawable_balance).toFixed(2) : 0}
          </p>


          <input  type="text" className='border border-[2px] p-1 w-full border-gray-500 rounded-lg' value={withdrawalAmount} onChange={(e)=>setWithdrawalAmount(e.target.value)} />


          {/* <button className="bg-[#72A314] btn-primary   px-4 py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Max
          </button> */}
        </div>
        <div className='flex items-center justify-between w-full mt-2 '>
          <button className='p-2 px-5 btn-primary' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 25/100)}>25%</button>
          <button className='p-2 px-5 btn-primary' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 50/100)}>50%</button>
          <button className='p-2 px-5 btn-primary' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 70/100)}>75%</button>
          <button className='p-2 px-5 btn-primary' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 99/100)}>100%</button>
        </div>

        <p className="mt-3 text-right sm:text-left">5% Pool Fee</p>

        <div className="flex justify-center ">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center" onClick={()=>withdrawaling.mutate({"amount":withdrawalAmount})} >
            Submit
          </button>
        </div>
      </div>
  )
}
