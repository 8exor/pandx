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
import { data, NavLink } from "react-router-dom";

export default function UnstakeTab() {
  const [isChecked, setIsChecked] = useState("");
  const { walletProvider } = useAppKitProvider("eip155");
  const { userData } = useContext(UserInfoContext);
  const [unstakePopup, setUnstakePopup] = useState(false);
  const unstake = useMutation({
    mutationFn: async (Formdata) => {
      const { data } = await axiosInstance.post(
        TRANSACTIONS?.createUnstakeTransaction,
        Formdata
      );
      return data;
    },
    onSuccess: async (data) => {
      // toast.success(data?.message);
      try {
        // debugger;
        // console.log({ data });
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = await provider.getSigner();
        // console.log({
        //   from: data?.data?.unStake?.from,
        //   to: data?.data?.unStake?.to,
        //   gasPrice: data?.data?.unStake?.gasPrice,
        //   gasLimit: data?.data?.unStake?.gasLimit,
        //   data: data?.data?.unStake?.data,
        //   value: data?.data?.unStake?.value,
        // });
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
      toast.success("UNSTAKED successfully ✅", {
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
      {unstake?.isPending && <FullPageLoader />}
      <div className="mt-6 lg:px-15">
        <div className="flex items-center justify-between lg:px-[30px] gap-4 p-3 bg-white border border-black rounded-lg lg:rounded-full sm:flex-row sm:justify-between">
          <button
            className={`bg-[#72A314] btn-primary sm:text-[16px] sm:px-[16px] sm:py-[8px] text-[14px]  sm:p-2 p-[7px]   text-white font-extralight text-center ${
              userData?.data?.is_deactivated && "grayscale"
            }`}
          >
            MyStake $
            {isNaN(Number(userData?.data?.staking?.amt_usd).toFixed(0))
              ? 0
              : Number(userData?.data?.staking?.amt_usd).toFixed(0)}
          </button>

          <button className="bg-[#72A314] btn-primary sm:text-[16px] sm:px-[16px] sm:py-[8px] text-[14px]  sm:p-2 p-[7px]   text-white font-extralight text-center">
            Un-Stake 100%
          </button>
        </div>

        {/* <div className="flex items-center gap-3 mt-3 leading-0">
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
      </div> */}

        <div className="relative flex justify-center mt-6 ">
          <button
            className={`bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2 border border-[#181724] font-extralight text-center  rounded-full shine hover:scale-110 duration-300 ease-in-out ${
              userData?.data?.is_deactivated && "grayscale"
            }`}
            onClick={() => setUnstakePopup(true)}
          >
            {unstake?.isPending ? <Load /> : " Submit"}
          </button>
          {unstakePopup && (
            <div className="absolute left-0 flex items-center justify-center w-full h-full -top-20">
              <div
                className="fixed top-0 left-0 z-10 w-full h-full"
                onClick={() => setUnstakePopup(false)}
              />
              <div className="p-5 py-3 text-white bg-[#000000dc] rounded-md z-20">
                <h3>
                  By proceeding with Un-Staking, you confirm that you have read
                  and accepted the{" "}
                  <NavLink
                    to={"/terms-and-conditions"}
                    target="blank"
                    className="text-[#68c8ee] underline font-extrabold "
                  >
                    applicable T&C during Staking
                  </NavLink>
                  . The system will verify all capping limits & the final amt
                  will be calculated as follows: Principal Amount − (Total
                  Rewards Earned + 25% Un-Staking Deduction)
                </h3>

                <div className="flex items-center gap-3 mt-3 leading-0">
                  <input
                    type="checkbox"
                    className=""
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <div>
                    <span className="text-sm font-light">I Agree</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5 mt-3">
                  <button
                    className="p-2 btn-primary "
                    onClick={() =>
                      unstake.mutate({ confirmation: isChecked && "1" })
                    }
                    disabled={
                      (unstake?.isPending && true) ||
                      (userData?.data?.is_deactivated && true)
                    }
                  >
                    Proceed to Unstake
                  </button>
                  <button
                    className="p-2 btn-primary"
                    onClick={() => setUnstakePopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
