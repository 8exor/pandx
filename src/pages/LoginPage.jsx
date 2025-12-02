import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { AUTH } from "../services/panda.api.services";
import toast from "react-hot-toast";
import { setAccessToken } from "@utils/Session";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setOpenLoginModal }) {
  const { open } = useAppKit();
  const [clickedOnLogin, setClickedOnLogin] = useState(false);
  const { isConnected, address } = useAppKitAccount();
  const [userName, setUserName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [pasteReferralCode, setPasteReferralCode] = useState("");
  const [showError, setShowError] = useState({
    userName: false,
    referralCode: false,
  });
  const [isUserNameChecked, setIsUserNameChecked] = useState(false);
  const [isReferralCodeChecked, setIsReferralCodeChecked] = useState(false);
    const { disconnect } = useDisconnect();

  const navigate = useNavigate();

  const pasteButton=async()=>{
try {
  const text = await navigator.clipboard.readText();
  setPasteReferralCode(text);
} catch (error) {
  toast.error("Permission to paste was denied or clipboard is empty.")
}
  }

  const checkUserName = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.checkUserName, formData);

      return data;
    },
    onSuccess: async (data) => {
      setIsUserNameChecked(true);
    },
    onError: (error) => {
      console.log(error, "error");

      if (error?.status == 0) {
        toast.error(error?.message);
      }
      allowScroll();
    },
  });

  const validateReferralCode=()=>{
      if (referralCode.length > 9 || referralCode.length < 4) {
                setShowError({ ...showError, referralCode: true });
                return toast.error(
                  "The username must be between 4 and 9 characters long."
                );
              }
              checkReferralCode.mutate({ username: referralCode });
  }

  const checkReferralCode = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.verifyUserName, formData);
      return data;
    },
    onSuccess: async (data) => {
      setIsReferralCodeChecked(true);
    },
    onError: (error) => {
      console.log(error, "error");
      if (error?.status == 0) {
        toast.error(error?.message);
      }
    },
  });

  const registerUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.signUp, formData);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      LoginUser.mutate({ wallet_address: address });
    },
    onError: (error) => {
      if (error?.status === 0) toast.error(error?.error);
    },
  });

  const LoginUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.login, formData);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
    
  
      setAccessToken(data?.data?.token);
      navigate("/StakingPage", {state : userName});
      setOpenLoginModal(false);
    },
    onError: (error) => {
      if (error?.status === 0){
      toast.error(error?.message)
      }
      disconnect();
      
    },
  });

  useEffect(() => {
  
    if (isConnected && clickedOnLogin) {
      LoginUser.mutate({ wallet_address: address });
    }
  }, [isConnected]);

  return (
    <div className="fixed flex items-center justify-center inset-0 w-full h-full min-h-screen bg-[#00000081]">
      <div className="z-50 w-full max-w-md p-7 py-10  bg-[#C5FF9E] border border-black rounded-md">
        <button
          className="flex justify-end w-full"
          onClick={() => setOpenLoginModal(false)}
        >
          <img
            className="invert w-7"
            src="/assets/icons/close.svg"
            alt="clsoe"
          />
        </button>
        <div className=" mt-10 relative flex items-center justify-between w-full p-3 rounded-md bg-[linear-gradient(90deg,rgba(0,112,194,1)_0%,rgba(78,94,175,1)_50%,rgba(91,91,172,1)_100%)]">
          <div className="absolute left-0 -top-5 md:-top-17 ">
            <img
              className="w-20 md:w-35"
              src="/assets/images/gift.svg"
              alt=""
            />
          </div>

          <div className="text-[#ffffff] flex-1 font-semibold flex justify-end">
            <span className=" text-md sm:text-xl">
              Join Now & Get <br />
              <span className="text-xl font-semibold text-bg-graydient-box sm:text-2xl">
                $100 TRIAL FUND
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#ccf1b3]  mt-5 p-3 border border-black rounded-md flex items-center flex-wrap md:flex-nowrap gap-2 justify-between ">
          <p className="">
            {isConnected
              ? `${address.substring(0, 10)}.....${address.substring(32, 42)}`
              : "Connect Your Wallet"}{" "}
          </p>
          <button
            className="bg-[#5b5bac] text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer"
            onClick={() => open()}
          >
            Connect wallet
          </button>
        </div>

        <div
          className={`bg-[#ccf1b3] mt-5 p-3 border border-black rounded-md flex items-center flex-wrap md:flex-nowrap gap-2 justify-between ${
            showError?.userName && "border-red-600"
          }`}
        >
          <input
            type="text"
            className="w-full text-black placeholder-black outline-none"
            placeholder="Choose Username"
            maxLength={9}
            minLength={4}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="bg-[#5b5bac] text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer"
            onClick={() => {

              if (userName.length > 9 || userName.length < 4) {
                setShowError({ ...showError, userName: true });
                return toast.error(
                  "The username must be between 4 and 9 characters long."
                );
              }
              checkUserName.mutate({ username: userName });
            }}
          >
            {userName ? (
              isUserNameChecked ? (
                <img
                  className="mx-auto rounded-full w-7"
                  src="/assets/images/check.gif"
                  alt="gif"
                />
              ) : (
                "Validate"
              )
            ) : (
              "Validate"
            )}
          </button>
        </div>

        <div
          className={`bg-[#ccf1b3] mt-5 p-3 border border-black rounded-md flex items-center gap-2 justify-between flex-wrap md:flex-nowrap ${
            showError?.referralCode && "border-red-600"
          }`}
        >
          <input
            type="text"
            className="w-full text-black placeholder-black outline-none"
            placeholder="*Enter Referral Code"
            value={referralCode}
            minLength={4}
            maxLength={9}
            onChange={(e) => setReferralCode(e.target.value)}
          />
          <button
            className={`bg-[#5b5bac] text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer`}
            onClick={() => {
              isReferralCodeChecked ?
            validateReferralCode()
            :
            pasteButton()
            }}
          >
            {referralCode ? (
              isReferralCodeChecked ? (
                <img
                  className="mx-auto rounded-full w-7"
                  src="/assets/images/check.gif"
                  alt="gif"
                />
              ) : (
                "Validate"
              )
            ) : (
              "Paste"
            )}
          </button>
        </div>

        <div className="flex items-center justify-between mt-5 gap-7">
          <button
            className="bg-[#5b5bac] text-white font-light p-2 w-full  border border-black  rounded-md cursor-pointer"
            onClick={() =>
              registerUser.mutate({
                wallet_address: address,
                username: userName,
                referral: referralCode,
              })
            }
          >
            Register
          </button>

          <button
            className="  bg-[#ccf1b3] text-[#5b5bac] p-2 w-full  border border-black  rounded-md cursor-pointer"
            onClick={async () => {
              open();
              setClickedOnLogin(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
