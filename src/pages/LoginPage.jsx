import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { AUTH } from "../services/panda.api.services";
import toast from "react-hot-toast";
import { setAccessToken } from "@utils/Session";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { UserInfoContext } from "@contexts/UserInfoContext";
import FullPageLoader from "@hooks/FullPageLoader";
import TypeWriterEffect from "@hooks/TypeWriterEffect";

import Gift from "@layouts/staking/components/Gift";
import { useWalletLogin } from "@hooks/useWalletLogin";
import { replace } from "@amcharts/amcharts4/.internal/core/utils/Array";

export default function LoginPage({ setOpenLoginModal, setShow }) {
  const { open } = useAppKit();
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [clickedOnLogin, setClickedOnLogin] = useState(false);
  const [clickedOnRegister, setClickedOnRegister] = useState(false);
  const [clickedOnSignUpConnect, setClickedOnSignUpConnect] = useState(false);
  const { isConnected, address } = useAppKitAccount();
  const [userName, setUserName] = useState("");
  const [alreadyExist, setAlreadyExist] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);
  const [pasteReferralCode, setPasteReferralCode] = useState("");
  const [showError, setShowError] = useState({
    walletAddress: false,
    userName: false,
    referralCode: false,
    termsCheck: false,
    isUserValidated: false,
    isReferralValidated: false,
  });
  const [isUserNameChecked, setIsUserNameChecked] = useState(false);
  const [isReferralCodeChecked, setIsReferralCodeChecked] = useState(false);
  const [termsCheck, setTermsCheck] = useState("");
  const { disconnect } = useDisconnect();
  const { isLogin, setIsLogin } = useContext(UserInfoContext);
  const [URLSearchParams, setSearchParams] = useSearchParams();
  // const {referral_code} = useParams();
  const [searchParams] = useSearchParams();

  // console.log({searchParams , kk : searchParams.get("referral_code")})

  const navigate = useNavigate();

  const pasteButton = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const removeSpace = text.replace(/\s+/g, "");
      setReferralCode(removeSpace);
    } catch (error) {
      toast.error("Permission to paste was denied or clipboard is empty.", {
        duration: 700,
      });
    }
  };

  const checkUserName = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.checkUserName, formData);

      return data;
    },
    onSuccess: async (data) => {
      setIsUserNameChecked(true);
      setShowError({ ...showError, isUserValidated: false });
    },
    onError: (error) => {
      console.log(error, "error");

      if (error?.status == 0) {
        // toast.error(error?.message, {
        //   duration: 1000,
        // });
        setAlreadyExist(true);
      }
    },
  });

  const validateReferralCode = () => {
    if (!referralCode) {
      setShowError({ ...showError, referralCode: true });
      return toast.error("Username is required.", {
        duration: 700,
      });
    }
    checkReferralCode.mutate({ username: referralCode });
  };

  const checkReferralCode = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.verifyUserName, formData);
      return data;
    },
    onSuccess: async (data) => {
      setIsReferralCodeChecked(true);
      setShowError({ ...showError, isReferralValidated: false });
    },
    onError: (error) => {
      console.log(error, "error");
      if (error?.status == 0) {
        // toast.error("INVALID USER", {
        //   duration: 700
        // });
        setInvalidUser(true);
      }
    },
  });

  const checkRegsiter = () => {
    setClickedOnRegister(true);
    if (!address && !userName && !referralCode && !termsCheck) {
      setShowError({
        ...showError,
        walletAddress: true,
        userName: true,
        referralCode: true,
        termsCheck: true,
      });
      return toast.error("All fields are required", {
        duration: 700,
      });
    }
    if (!address) {
      setShowError({ ...showError, walletAddress: true });
      return toast.error("wallet connection is required", {
        duration: 700,
      });
    }
    if (!userName) {
      setShowError({ ...showError, userName: true });
      return toast.error("Username is required", {
        duration: 700,
      });
    }
    if (!referralCode) {
      setShowError({ ...showError, referralCode: true });
      return toast.error("Referral code is required", {
        duration: 700,
      });
    }
    if (!termsCheck) {
      setShowError({ ...showError, termsCheck: true });
      return toast.error("Please accept the Terms and Conditions to proceed", {
        duration: 700,
      });
    }

    if (!isUserNameChecked && !isReferralCodeChecked) {
      setShowError({
        ...showError,
        isUserValidated: true,
        isReferralValidated: true,
      });
      return toast.error(
        "Please validate the Username and Referral code to proceed",
        {
          duration: 700,
        }
      );
    }

    if (!isUserNameChecked) {
      setShowError({ ...showError, isUserValidated: true });
      return toast.error("Please validate the Username to proceed", {
        duration: 700,
      });
    }

    if (!isReferralCodeChecked) {
      setShowError({ ...showError, isReferralValidated: true });
      return toast.error("Please validate the Referral code to proceed", {
        duration: 700,
      });
    }

    registerUser.mutate({
      wallet_address: address,
      username: userName,
      referral: referralCode,
    });
  };

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
      if (error?.status === 0) toast.error(error?.message);
    },
  });

  const LoginUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.login, formData);
      return data;
    },
    onSuccess: async (data) => {
      if (!clickedOnRegister) {
        toast.success(data?.message);
      }
      // await new Promise((p) => setTimeout(p, 3000));
      setAccessToken(data?.data?.token);
      sessionStorage.removeItem("LOGOUT_IN_PROGRESS");
      navigate("/StakingPage", { replace: true });
      setOpenLoginModal(false);
      // setClickedOnRegister(false);
      // console.log("why are you disconnecting:::::::", isConnected)
    },
    onError: (error) => {
      toast.error(error?.message || "Error Occurred");
      disconnect();
    },
  });

  useEffect(() => {
    setIsReferralCodeChecked(false);
    setInvalidUser(false);
    setShowError({...showError, isReferralValidated : false})
  }, [referralCode]);

  useEffect(() => {
    setIsUserNameChecked(false);
    setAlreadyExist(false);
    setShowError({...showError, isUserValidated : false})

  }, [userName]);

  useEffect(() => {
    const referral_code = searchParams.get("referral");
    //  console.log({referral_code})

    setReferralCode(referral_code);
  }, []);

  const { login } = useWalletLogin(LoginUser);

  return (
    <>
      {LoginUser?.isPending || (registerUser?.isPending && <FullPageLoader />)}
      <div className="z-45 fixed flex items-center justify-center inset-0 w-full h-full min-h-screen bg-[#00000081]">
        <div className=" z-50 w-full max-w-md p-4 py-4  bg-[#C5FF9E] border border-black rounded-md">
          <button
            className="flex justify-end w-full"
            onClick={() => {
              setOpenLoginModal(false);
              setShow(false);
            }}
          >
            <img
              className="invert w-7"
              src="/assets/icons/close.svg"
              alt="clsoe"
            />
          </button>
          <div className=" mt-5  flex items-center justify-between w-full p-3  rounded-md bg-[linear-gradient(90deg,rgba(0,112,194,1)_0%,rgba(78,94,175,1)_50%,rgba(91,91,172,1)_100%)]">
            <div />
            {/* <div className="absolute left-5 md:left-10 -top-17 md:-top-20 "> */}
            {/* </div> */}
            <div className="text-[#ffffff] w-full max-h-[70px] font-semibold gap-10 flex justify-center items-center">
              <Gift className="flex-1" />

              <span className="flex-1 text-md sm:text-xl">
                <TypeWriterEffect
                  text={" Join Now & Get $100 TRIAL FUND"}
                  delay={150}
                  infinite={true}
                />
              </span>
            </div>
          </div>
          <div
            className={`bg-[#ccf1b3] w-full mt-5 p-3 border border-black rounded-md flex items-center flex-wrap md:flex-nowrap gap-2 justify-between ${
              showError?.walletAddress && "border-red-600"
            } `}
          >
            <p>
              {isConnected
                ? `${address.substring(0, 10)}.....${address.substring(32, 42)}`
                : "Connect Your Wallet"}{" "}
            </p>
            <button
              className={`bg-[#5b5bac] text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer ${
                address && "border-green-900 bg-green-600"
              }`}
              onClick={() => {
                // setClickedOnLogin(false);
                // setClickedOnSignUpConnect(true);
                open();
                setShowError({ ...showError, walletAddress: false });
              }}
            >
              {address ? "CONNECTED" : "Connect wallet"}
            </button>
          </div>

          <div
            className={`bg-[#ccf1b3] mt-5 p-3 border border-black rounded-md flex items-center flex-wrap md:flex-nowrap gap-2 justify-between ${
              showError?.userName && "border-red-600"
            } `}
          >
            <input
              type="text"
              className="w-full text-black placeholder-black outline-none"
              placeholder="Choose Username"
              value={userName}
              onChange={(e) => {
                const input = e.target.value;
                const removeSpace = input.replace(/\s+/g, "");
                setUserName(removeSpace);
                setShowError({ ...showError, userName: false });
              }}
            />
            <button
              className={` text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer ${
                isUserNameChecked
                  ? "border-green-900 bg-green-600"
                  : "bg-[#5b5bac]"
              } ${
                alreadyExist ? "border-red-900 bg-red-600" : "bg-[#5b5bac]"
              } ${showError.isUserValidated && "border-red-600 text-red-500"}`}
              onClick={() => {
                if (userName.length == 0) {
                  setShowError({ ...showError, userName: true });
                  return toast.error("Username is required", {
                    duration: 700,
                  });
                }
                checkUserName.mutate({ username: userName });
              }}
            >
              {userName
                ? isUserNameChecked
                  ? "Validated"
                  : checkUserName?.isPending
                  ? "Validating..."
                  : alreadyExist
                  ? "Already Exist"
                  : "Validate"
                : "Validate"}
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
              onChange={(e) => {
                const input = e.target.value;
                const removeSpace = input.replace(/\s+/g, "");
                setReferralCode(removeSpace);
                setShowError({ ...showError, referralCode: false });
              }}
            />
            <button
              className={`${
                referralCode && isReferralCodeChecked
                  ? "border-green-900 bg-green-600"
                  : "bg-[#5b5bac]"
              } ${
                invalidUser ? "border-red-900 bg-red-600" : "bg-[#5b5bac]"
              } text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer ${
                showError?.isReferralValidated && "border-red-600 text-red-500"
              }`}
              onClick={() => {
                referralCode ? validateReferralCode() : pasteButton();
              }}
            >
              {referralCode
                ? isReferralCodeChecked
                  ? "Validated"
                  : checkReferralCode?.isPending
                  ? "Validating"
                  : invalidUser
                  ? "Invalid User"
                  : "Validate"
                : "Paste"}
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <input
              type="checkbox"
              value={termsCheck}
              onChange={(e) => {
                setTermsCheck(e.target.checked);
                setShowError({ ...showError, termsCheck: false });
              }}
            />
            <NavLink
              to={"/terms-and-conditions"}
              target="blank"
              className="text-[#0000EE] underline font-extrabold "
            >
              I Accept All The T&C
            </NavLink>
          </div>
          {/* {showError.termsCheck &&  <p className="text-red-500">*Please accept the Terms and Conditions to proceed</p>} */}

          <div className="flex items-center justify-between mt-5 gap-7">
            <button
              className="bg-[#5b5bac] text-white font-light p-2 w-full  border border-black  rounded-md cursor-pointer"
              onClick={() => checkRegsiter()}
            >
              Register
            </button>

            <button
              className="  bg-[#ccf1b3] text-[#5b5bac] p-2 w-full  border border-black  rounded-md cursor-pointer"
              onClick={async () => {
                // open();
                // setClickedOnLogin(true);
                login();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
