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
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "@contexts/UserInfoContext";
import FullPageLoader from "@hooks/FullPageLoader";
import TypeWriterEffect from "@hooks/TypeWriterEffect";
import GiftFlapConfetti from "./GiftFlapConfetti";
import { animate } from "animejs";


export default function LoginPage({ setOpenLoginModal, setShow }) {
  const { open } = useAppKit();
  const [clickedOnLogin, setClickedOnLogin] = useState(false);
  const [clickedOnConnect, setClickedOnConnect] = useState(false);
  const { isConnected, address } = useAppKitAccount();
  const [userName, setUserName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [pasteReferralCode, setPasteReferralCode] = useState("");
  const [showError, setShowError] = useState({
    walletAddress: false,
    userName: false,
    referralCode: false,
  });
  const [isUserNameChecked, setIsUserNameChecked] = useState(false);
  const [isReferralCodeChecked, setIsReferralCodeChecked] = useState(false);
  const { disconnect } = useDisconnect();
  const { isLogin, setIsLogin } = useContext(UserInfoContext);

  const navigate = useNavigate();

  const pasteButton = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setReferralCode(text);
    } catch (error) {
      toast.error("Permission to paste was denied or clipboard is empty.");
    }
  };

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

  const validateReferralCode = () => {
    if (!referralCode) {
      console.log({ referralCode });
      setShowError({ ...showError, referralCode: true });
      return toast.error("Username is required.");
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
    },
    onError: (error) => {
      console.log(error, "error");
      if (error?.status == 0) {
        toast.error(error?.message);
      }
    },
  });

  const checkRegsiter = () => {
    if (!address && !userName && !referralCode) {
      setShowError({
        ...showError,
        walletAddress: true,
        userName: true,
        referralCode: true,
      });
      return toast.error("All fields are required");
    }
    if (!address) {
      setShowError({ ...showError, walletAddress: true });
      return toast.error("wallet connection is required");
    }
    if (!userName) {
      setShowError({ ...showError, userName: true });
      return toast.error("Username is required");
    }
    if (!referralCode) {
      setShowError({ ...showError, referralCode: true });
      return toast.error("Referral code is required");
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
      toast.success(data?.message);
      // await new Promise((p) => setTimeout(p, 3000));
      setAccessToken(data?.data?.token);
      navigate("/StakingPage", { state: userName });
      setOpenLoginModal(false);
    },
    onError: (error) => {
      if (error?.status === 0 && clickedOnLogin) {
        toast.error(error?.message);
        // disconnect();
      }
    },
  });

  useEffect(() => {
    if (isConnected && clickedOnLogin) {
      LoginUser.mutate({ wallet_address: address });
    }
  }, [isConnected]);

  useEffect(() => {
    setIsReferralCodeChecked(false);
  }, [referralCode]);

  useEffect(() => {
    setIsUserNameChecked(false);
  }, [userName]);

  useEffect(() => {
    if (!clickedOnLogin && clickedOnConnect) {
      open();
    }
  }, [clickedOnConnect]);

function releaseConfettiInside() {
  const parent = document.querySelector(".animateDiv");
  const parentRect = parent.getBoundingClientRect();

  for (let i = 0; i < 120; i++) {   // ⬅️ doubled confetti amount
    const c = document.createElement("div");
    c.className = "real-confetti";

    // random sizes for realism
    const w = Math.random() * 6 + 4;   // 4–10px
    const h = Math.random() * 18 + 8;  // 8–26px
    c.style.width = `${w}px`;
    c.style.height = `${h}px`;

    // starting at the top opening of the box
    c.style.left = parentRect.width / 2 + "px";
    c.style.top = "0px";

    // colorful confetti
    c.style.backgroundColor =
      ["#ff3b3b", "#ffb300", "#3ecfff", "#8bff7b", "#ff7bf3"][
        Math.floor(Math.random() * 5)
      ];

    // 🌟 STRONGER & WIDER BURST
    const angle = Math.random() * 2 * Math.PI;
    const burstPower = 150 + Math.random() * 150; // much stronger blast

    const xForce = Math.cos(angle) * burstPower;
    const yForce = -Math.abs(Math.sin(angle)) * (burstPower * 0.9);

    // 🍃 Gravity fall
    const fallDistance = 140 + Math.random() * 180;

    // assign CSS variables
    c.style.setProperty("--xBurst", `${xForce}px`);
    c.style.setProperty("--yBurst", `${yForce}px`);
    c.style.setProperty("--fall", `${fallDistance}px`);
    c.style.setProperty("--spin", `${Math.random() * 700}deg`);

    parent.appendChild(c);

    // remove after animation (falls down + fades)
    setTimeout(() => c.remove(), 2200);
  }
}
// useEffect(()=>{
//   animate('.animateDiv', {
//   width: '100%', // from '48px' to '25%',
//   y: '-2rem', // from '0px' to '15rem',
//   x:"0rem",
//   rotate: '.01turn', // from `0deg` to '.75turn',
// //  loop: true,
//   duration: 1000,
//   easing: 'easeInOutQuad',
//   onBegin : ()=>{
//     releaseConfettiInside();
//   }
// });

// },[])

  return (
    <>
      {LoginUser?.isPending && <FullPageLoader />}
      <div className="z-45 fixed flex items-center justify-center inset-0 w-full h-full min-h-screen bg-[#00000081]">
        <div className="z-50 w-full max-w-md p-4 py-4  bg-[#C5FF9E] border border-black rounded-md">
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
          <div className=" mt-5 relative flex items-center justify-between w-full p-3 h-full min-h-20 rounded-md bg-[linear-gradient(90deg,rgba(0,112,194,1)_0%,rgba(78,94,175,1)_50%,rgba(91,91,172,1)_100%)]">
            <div />
            <div className="absolute left-0 -top-5 md:-top-17 ">
            
            {/* <div className="w-20 p-3 btn-primary animateDiv"></div>
            <div className="w-20 h-20 md:w-30 md:h-30  p-3 bg-[url('/assets/images/gift.svg')] bg-cover bg-center"></div> */}
              <img
              className="w-20 md:w-35"
              src="/assets/images/gift.svg"
              alt=""
            />
          {/* <GiftFlapConfetti/> */}
            </div>

            <div className="text-[#ffffff] w-full max-w-[200px] font-semibold flex justify-start">
              <span className=" text-md sm:text-xl">
                <TypeWriterEffect
                  text={" Join Now & Get $100 TRIAL FUND"}
                  delay={150}
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
              className="bg-[#5b5bac] text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer"
              onClick={() => {
                setClickedOnLogin(false);
                setClickedOnConnect(true);
              }}
            >
              Connect wallet
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
              maxLength={9}
              minLength={4}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className={` text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer ${
                isUserNameChecked
                  ? "border-green-900 bg-green-600"
                  : "bg-[#5b5bac]"
              }`}
              onClick={() => {
                if (userName.length == 0) {
                  setShowError({ ...showError, userName: true });
                  return toast.error("Username is required");
                }
                checkUserName.mutate({ username: userName });
              }}
            >
              {userName
                ? isUserNameChecked
                  ? "Validated"
                  : checkUserName?.isPending
                  ? "Validating..."
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
              minLength={4}
              maxLength={9}
              onChange={(e) => setReferralCode(e.target.value)}
            />
            <button
              className={`${
                referralCode && isReferralCodeChecked
                  ? "border-green-900 bg-green-600"
                  : "bg-[#5b5bac]"
              } text-white font-light p-2 w-full md:max-w-[150px] border border-black  rounded-md cursor-pointer`}
              onClick={() => {
                referralCode ? validateReferralCode() : pasteButton();
              }}
            >
              {referralCode
                ? isReferralCodeChecked
                  ? "Validated"
                  : checkReferralCode?.isPending
                  ? "Validating"
                  : "Validate"
                : "Paste"}
            </button>
          </div>

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
                open();
                setClickedOnLogin(true);
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
