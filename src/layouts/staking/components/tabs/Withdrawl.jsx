import { UserInfoContext } from '@contexts/UserInfoContext'
import FullPageLoader from '@hooks/FullPageLoader';
import Load from '@hooks/Load';
import { duration } from '@mui/material';
import { useAppKitProvider } from '@reown/appkit/react';
import { TRANSACTIONS } from '@services/panda.api.services';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@utils/axiosInstance';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import { data } from 'react-router-dom';

export default function Withdrawl({activeTab, setActiveTab}) {
    const { walletProvider } = useAppKitProvider("eip155");
const {userData, refetch} = useContext(UserInfoContext);
const [withdrawalAmount, setWithdrawalAmount] = useState("");
const [switchPopup, setSwitchPopup] = useState(false);

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
   toast.success(data?.message);
  withdrawalHash.mutate({
    "fund_hash" : txn?.hash,
    "amount" : withdrawalAmount,
  })
} catch (error) {
  
}
 

  },
  onError : (error)=>{
    toast.error(error?.message,{
                    duration : 1000
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
    // toast.success(data?.message);
    setWithdrawalAmount("");
     refetch();
  },
  onError : (error)=>{
    toast.error(error?.message)
      setWithdrawalAmount("");
     refetch();
  }
})

 useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!staking?.isPending) return;
  
      e.preventDefault();
      e.returnValue = ""; 
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [withdrawaling?.isPending]);

  return (
    <>
    {withdrawaling?.isPending && <FullPageLoader/>}
    <div className="relative mt-6 lg:px-15">

         <div className=" grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3 bg-white border border-black rounded-lg lg:rounded-full w-full">
          <div className="flex items-center gap-1">
            <p>Avl</p>
            <div className="flex items-center gap-1">
                <p>
              ${userData?.data?.withdrawable_balance ? parseFloat(parseFloat(userData?.data?.withdrawable_balance).toFixed(2)) : 0}
            </p>
            </div>
           
          </div>
         <div className="relative w-[170px] lg:w-[60%] sm:w-[200px] m-auto">
           <input  type="number" className='border border-[2px] p-2 w-full border-gray-500 rounded-lg' value={withdrawalAmount} onChange={(e)=>setWithdrawalAmount(e.target.value)} />
         <div onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 99/100)} className="absolute  top-1 right-1 py-2 px-4
               bg-[#72A314] rounded-lg flex items-center justify-center
               text-white  font-extralight text-sm cursor-pointer shadow-sm">
              
            Max
         
           </div> 
         </div>
        </div>

            

        {/* <div className='flex items-center justify-between w-full mt-2 '>
          <button className='p-2 px-5 font-extralight' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 25/100)}>25%</button>
          <button className='p-2 px-5 font-extralight' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 50/100)}>50%</button>
          <button className='p-2 px-5 font-extralight' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 70/100)}>75%</button>
          <button className='p-2 px-5 font-extralight' onClick={()=>setWithdrawalAmount(userData?.data?.withdrawable_balance * 99/100)}>100%</button>
        </div> */}

        <p className="mt-2 text-right sm:text-left blink-text">⚠️ 5% REWARD POOL FEE ⚠️</p>

        <div className="flex justify-center mt-2 ">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center" onClick={()=>{
            if(withdrawalAmount){
            setSwitchPopup(true)
          }
          else{
            toast.error("Amount field is required", {duration : 700})
          }
            }
            
          } >
         {withdrawaling?.isPending ? <Load/>  : "Submit"}
          </button>
        </div>

     { switchPopup &&  <div className='absolute left-0 flex items-center justify-center w-full h-full -top-20'>
      <div className='fixed top-0 left-0 z-10 w-full h-full' onClick={()=>setSwitchPopup(false)}/>
          <div className='p-5 text-white bg-[#000000dc] rounded-md z-20'>
             <div className='flex justify-end'>
            <button className='bg-[#ff403a9e] rounded-full  p-2' onClick={()=>setSwitchPopup(false)}>
              <img className='' src="/assets/images/close.png" alt="close" />
            </button>
          </div>
          <h3 className='text-center'>⚠️ 5% POOL FEE APPLIES ⚠️</h3>
          <h3 className='text-center'>💡 SWITCH TO P2P AND SAVE 100% OF THIS FEE</h3>

          <div className='flex items-center justify-center gap-5 mt-3'>
          <button className='p-2 px-4 btn-primary' onClick={()=>{setActiveTab({...activeTab, mainTabs : "p2p"});setSwitchPopup(false)}}>P2p</button>
          <button className='p-2 btn-primary' onClick={()=>withdrawaling.mutate({"amount":withdrawalAmount})}  disabled={withdrawaling?.isPending && true}>Proceed to Withdrawal </button>
          </div>
          </div>
        </div>}
      </div>
      </>
  )
}
