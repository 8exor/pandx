import React from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { TRANSACTIONS } from "@services/panda.api.services";
import { ethers } from "ethers";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { EthersProvider } from "@reown/appkit-adapter-ethers5";
import p2pAllowance from "@utils/abi/p2pAllowance.abi.json"
import toast from "react-hot-toast";

export default function P2p() {
   const { walletProvider } = useAppKitProvider("eip155");
     const { address, isConnected } = useAppKitAccount();
       const [p2pAmount, setp2pAmount] = useState("");

const p2pTransaction = useMutation({
 mutationFn : async(formdata)=>{
  const {data} = await axiosInstance.post(TRANSACTIONS?.createP2PStake, formdata)
  return data
 },
 onSuccess : async(data)=>{
  try {
    const approvalAddress = data?.data?.stakeApproval?.to;
    const allowanceAddress = data?.data?.stakeInvest?.to;
    const provider = new ethers.providers.Web3Provider(walletProvider)

    const signer = await provider.getSigner();
    const contract = new Contract(approvalAddress, p2pAllowance, signer );
    const allowance = await contract.allowance(address, allowanceAddress);
    if(Number(allowance) < Number(p2pAmount)){
      const approval = await signer?.sendTransaction({
        from : data?.data?.stakeApproval?.from,
        to : data?.data?.stakeApproval?.to,
        gasPrice : data?.data?.stakeApproval?.gasPrice,
        gasLimit : data?.data?.stakeApproval?.gasLimit,
        data : data?.data?.stakeApproval?.data
      })
      await approval.wait();
    }

    const invest = await signer?.sendTransaction({
      from : data?.data?.stakeInvest?.from,
      to : data?.data?.stakeInvest?.to,
      gasPrice : data?.data?.stakeInvest?.gasPrice,
      gasLimit : data?.data?.stakeInvest?.data,
      value : data?.data?.stakeInvest?.value
    })
    await invest.wait();
    p2pHash.mutate({
      "txn_hash" : invest?.hash,
      "token_amount" : p2pAmount
    })
  } catch (error) {
    console.log({error})
  }
 },
 onError :(error)=>{
  toast.error(error?.message || "Error Occurred")
 }
})

const p2pHash = useMutation({
  mutationFn : async(formdata)=>{
    const {data} = await axiosInstance.post(TRANSACTIONS?.submitP2pHash, formdata);
    return data;
  },
  onSuccess : async(data)=>{
    toast.success(data?.message)
  },
  onError : (error)=>{
    toast.error(error?.message || "Error Occurred")
  }
})




  return (
    <div className="w-full px-2 mt-5 sm:px-4">
      <div className="flex flex-col items-center justify-between gap-3 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row">
        <input
          type="text"
          placeholder="Enter UserName"
          className="w-full sm:w-[60%] px-2 py-1 rounded-sm outline-none"
          onChange={(e)=>setp2pAmount(e.target.value)}
        />

        <button
          className="bg-[#72A314] w-full sm:w-[25%] px-2 py-1 sm:px-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight"
        >
          Validate
        </button>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row">
        <p className="w-full text-center sm:text-left sm:w-auto">
          Available $60
        </p>

        <button
          className="bg-[#72A314] w-full sm:w-auto px-2 py-1  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight"
        >
          Max
        </button>
      </div>
      <p className="mb-4 font-semibold text-center uppercase sm:text-left">
        P2P unlimited and free
      </p>

      <div className="flex justify-center mb-4">
        <button
          className="bg-[#72A314] text-white px-3 sm:px-10 py-1 sm:py-3 rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight"
          onClick={()=>p2pTransaction.mutate({"username" : "name", "token_amount": p2pAmount})}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
