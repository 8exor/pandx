import { UserInfoContext } from '@contexts/UserInfoContext'
import { TRANSACTIONS } from '@services/panda.api.services'
import { useMutation } from '@tanstack/react-query'
import axiosInstance from '@utils/axiosInstance'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'

export default function Compound() {
    const[compoundAmount, setCompoundAmount] = useState("");
    const {userData} = useContext(UserInfoContext);

    const compounding = useMutation({
        mutationFn : async(formdata)=>{
            const {data} = await axiosInstance.post(TRANSACTIONS?.compound, formdata);
            return data;
        },
        onSuccess : async(data)=>{
            console.log("what you compounding...");
            toast.success(data?.message)
            
        },
        onError : (error)=>{
            toast.error(error?.message);
        }
    })


  return (
      <div className="px-4 mt-6 sm:px-15">
        <div className="flex flex-col items-center justify-between gap-3 p-3 bg-white border border-black rounded-full sm:flex-row">
          <p className="w-full text-center sm:text-left sm:w-auto">
            Available ${Number(userData?.data?.withdrawable_balance).toFixed(2)}
          </p>
          <input type="text" className='' value={compoundAmount} onChange={(e)=>setCompoundAmount(e.target.value)} />
          <button className="bg-[#72A314] btn-primary  w-full sm:w-auto px-4 py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Max
          </button>
        </div>

        <p className="mt-3 text-center sm:text-left">5% Pool Free</p>

        <div className="flex justify-center ">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center" onClick={()=>compounding.mutate({"amount":compoundAmount})}>
            Submit
          </button>
        </div>
      </div>
  )
}
