import { UserInfoContext } from "@contexts/UserInfoContext";
import { TRANSACTIONS } from "@services/panda.api.services";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import React, { useContext, useState } from "react";
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

  return (
    <div className="mt-6 lg:px-15">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3 bg-white border border-black rounded-lg lg:rounded-full w-full">
        <p className="text-center  w-[60px] sm:w-full  sm:text-left">
          Avl $
          {userData?.data?.withdrawable_balance
            ? Number(userData?.data?.withdrawable_balance).toFixed(2)
            : 0}
        </p>

        <input
          type="text"
          className="border border-[2px] w-full rounded-lg p-1 border-gray-500 rounded-lg'"
          value={compoundAmount}
          onChange={(e) => setCompoundAmount(e.target.value)}
        />

        <button
          className="bg-[#72A314] btn-primary   px-4 py-2  rounded-full text-white font-extralight text-center"
          onClick={() =>
            setCompoundAmount(parseInt(userData?.data?.withdrawable_balance))
          }
        >
          Max
        </button>
      </div>

      <p className="mt-3 text-right sm:text-left">5% Pool Fee</p>

      <div className="flex justify-center mt-3 ">
        <button
          className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center"
          onClick={() => compounding.mutate({ amount: compoundAmount })}
        >
          {compounding?.isPending ? "loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
