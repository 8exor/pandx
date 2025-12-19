import FullPageLoader from "@hooks/FullPageLoader";
import { useWalletLogin } from "@hooks/useWalletLogin";
import LoginPage from "@pages/LoginPage";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { AUTH } from "@services/panda.api.services";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { setAccessToken } from "@utils/Session";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePopup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [loginModal, setOpenLoginModal] = useState(false);
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const [loginWithPopUp, setLoginWithPopUp] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const { isConnected, address } = useAppKitAccount();

  useEffect(() => {
    // timer 
  const targetDate = new Date(Date.UTC(2025, 11, 20, 5, 0, 0)); // KL 1 PM
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft("Time's up!");
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    // Show popup when user enters website
    if (!isConnected) {
      setShow(true);
    }
  }, []);

  // Close popup
  const closePopup = () => {
    setShow(false);
    setTimeout(() => {
      setShowSecondPopup(true);
    }, 200); // small delay for smoother UX
  };

  const LoginUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.login, formData);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      // await new Promise((p) => setTimeout(p, 3000));
      setAccessToken(data?.data?.token);
      setShow(false);
      navigate("/StakingPage");
    },
    onError: (error) => {
      if (error?.status === 0) {
        toast.error(error?.message);
        // disconnect();
      }
    },
  });
  // useEffect(() => {
  //   if (loginWithPopUp && isConnected) {
  //     LoginUser.mutate({ wallet_address: address });
  //   }
  // }, [loginWithPopUp, isConnected]);
  const { login } = useWalletLogin(LoginUser);
  if (!show && !showSecondPopup) return null;

  return (
    <>
      {LoginUser?.isPending && <FullPageLoader />}
      <div
        className="fixed z-40 w-full h-full max-md:p-2 left-0 top-0 bg-[#000000ed] flex justify-center items-center"
        onClick={closePopup} // click outside closes
      >
        <div
          className="bg-[#000000a1] relative border border-white p-[15px] sm:p-[50px] rounded-2xl shadow-xl w-fit text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-2 right-2">
            <div className="mb-2 text-end bg-[#ff403a9e] rounded-full h-[30px] p-2 w-[30px] flex justify-center">
              <button onClick={closePopup} className="text-white rounded-full ">
                <img src="assets/images/close.png" alt="close icon" />
              </button>
            </div>
          </div>
          <h2 className="mb-3 text-2xl px-6 sm:px-0 text-white">
            Please Connect Your Wallet
          </h2>
          <ul className="flex items-center justify-center gap-5 mt-5">
            <li>
              <button
                onClick={() => {
                  // open();
                  // setLoginWithPopUp(true);
                  login();
                }}
                className="flex gap-2 px-6 [@media(max-width:320px)]:text-sm py-3 text-lg text-white btn-primary"
              >
                <img src="/assets/images/panda.svg" alt="panda" />
                Login
              </button>
            </li>
            <li>
              <button
                className="flex gap-2 [@media(max-width:320px)]:text-sm px-6 py-3 text-lg text-white btn-primary"
                onClick={() => {
                  setOpenLoginModal(true);
                  //  setShow(false);
                }}
              >
                <img src="/assets/images/panda.svg" alt="panda" />
                Sign up
              </button>
            </li>
          </ul>
          <a href="https://swap.qerra.network/" target="blank">
            {" "}
            <button className="flex items-center justify-center w-full gap-2 px-2 py-3 mt-5 text-sm text-white sm:px-6 sm:text-lg btn-primary">
              <img src="/assets/images/panda.svg" alt="panda" />
              Buy $PANDX{" "}
              <img
                className="sm:h-[20px] h-[15px] w-[15px] sm:w-[20px]"
                src="/assets/images/qerra.png"
                alt="panda"
              />
              qerraSWAP
            </button>
          </a>
        </div>
      </div>
      {loginModal && (
        <LoginPage setShow={setShow} setOpenLoginModal={setOpenLoginModal} />
      )}
      {/* offer popup */}

      {showSecondPopup && (
        <div
          className="fixed z-50 w-full h-full left-0 top-0 bg-[#00000029] flex justify-center items-center"
          onClick={() => setShowSecondPopup(false)}
        >
          <div
            className="bg-[#000000] max-w-[450px]  border border-white p-[40px] rounded-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl leading-8 text-white mb-3">
              FREE REGISTRATIONS WILL BE START FROM SATURDAY <br/> 20 DEC 2025 at 01:00 PM
             
            </h2>
            <div className="mt-3 w-fit mx-auto border-3 rounded-lg  p-3 border-[#6ca632]">
              <span className="text-2xl
              blink-text  text-white mb-3">{timeLeft} </span>
            </div>
            <button
              onClick={() => setShowSecondPopup(false)}
              className="px-6 mt-5 py-3 text-white btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* offer popup end */}
    </>
  );
};

export default HomePopup;
