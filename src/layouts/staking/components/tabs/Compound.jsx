import { UserInfoContext } from "@contexts/UserInfoContext";
import FullPageLoader from "@hooks/FullPageLoader";
import Load from "@hooks/Load";
import { TRANSACTIONS } from "@services/panda.api.services";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Compound() {
  const [compoundAmount, setCompoundAmount] = useState("");
  const { userData, refetch } = useContext(UserInfoContext);

  const compounding = useMutation({
    mutationFn: async (formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.compound,
        formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      setCompoundAmount("");
      refetch();
    },
    onError: (error) => {
      toast.error(error?.message, {
        duration: 700,
      });
      setCompoundAmount("");
      refetch();
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
  }, [compounding?.isPending]);

  return (
    <>
    {compounding?.isPending && <FullPageLoader/>}
    <div className="mt-6 lg:px-15">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3  bg-white border border-black rounded-lg lg:rounded-full w-full">
        <p className="text-center  w-[60px] sm:w-full  sm:text-left">
          Avl $
          {userData?.data?.withdrawable_balance
            ? Number(userData?.data?.withdrawable_balance).toFixed(2)
            : 0}
        </p>

        <div className="relative w-[170px] lg:w-[60%] sm:w-[200px] m-auto">
          <input
            type="text"
            className="border border-[2px] p-2 w-full border-gray-500 rounded-lg"
            value={compoundAmount}
            onChange={(e) => setCompoundAmount(e.target.value)}
          />
        <div className="absolute top-1 right-1 py-2 px-4
               bg-[#72A314] rounded-lg flex items-center justify-center
               text-white  font-extralight text-sm cursor-pointer shadow-sm"
               onClick={() =>
              setCompoundAmount(parseInt(userData?.data?.withdrawable_balance))
            }
            > 
            Max
        </div>
          
        </div>
      </div>

      {/* <p className="mt-3 text-right sm:text-left">5% Pool Fee</p> */}

      <div className="flex justify-center mt-3 ">
        <button
          className={`bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center ${userData?.data?.is_deactivated && "grayscale"}`}
          onClick={() => compounding.mutate({ amount: compoundAmount })}
          disabled={compounding?.isPending && true || (userData?.data?.is_deactivated)&&true}
        >
          {compounding?.isPending ? <Load/> : "Submit"}
        </button>
      </div>
    </div>
    </>
  );
}
