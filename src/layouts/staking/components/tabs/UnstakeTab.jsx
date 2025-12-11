import { useAppKitProvider } from '@reown/appkit/react';
import { TRANSACTIONS } from '@services/panda.api.services';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@utils/axiosInstance';
import { ethers, providers } from 'ethers';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';

export default function UnstakeTab() {
const[isChecked, setIsChecked] = useState("");
    const { walletProvider } = useAppKitProvider("eip155");
const unstake = useMutation({
  mutationFn : async(Formdata)=>{
    const {data} = await axiosInstance.post(TRANSACTIONS?.createUnstakeTransaction, Formdata);
    return data;
  },
  onSuccess : async(data)=>{
    toast.success(data?.message);
    try {
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = await provider.getSigner();
      const unstaking = await signer.sendTransaction();
      await unstaking.wait();
      unstakeHash?.mutate({"txn_hash" : unstaking.hash()})
    } catch (error) {
      console.log({error})
    }
  },
  onError : (error)=>{
    toast.error(error?.message);
  }
})

const unstakeHash = useMutation({
 mutationFn : async(formdata)=>{
   const {data} = await axiosInstance.post(TRANSACTIONS?.submiteUnstakeHash, formdata);
   return data;
 },
 onSuccess : async(data)=>{
  toast.success(data?.message);
 }
})

  return (
   <div className="px-4 mt-6 lg:px-15">
        <div className="flex items-center justify-between lg:px-[30px] gap-4 p-3 bg-white border border-black rounded-lg lg:rounded-full sm:flex-row sm:justify-between" >
          <button className="bg-[#72A314] btn-primary   p-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            MyStake $1000
          </button>
        
          <button className="bg-[#72A314] btn-primary    p-2 rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Un-Stake 100%
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3 leading-0">
          <input type="checkbox" className='scale-200'  checked ={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} />
          <div>
        
          <span className='text-sm font-light'>Please confirm if you want to proceed with unstaking. Once you unstake, your ID will be permanently deactivated.
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2 border border-[#181724] font-extralight text-center  rounded-full shine hover:scale-110 duration-300 ease-in-out" onClick={()=>unstake.mutate({"confirmation" : isChecked && "1"})}>
            Submit
          </button>
        </div>
      </div>
  )
}
