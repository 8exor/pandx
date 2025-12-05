import LoginPage from "@pages/LoginPage";
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
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

        const { isConnected, address } = useAppKitAccount();

  useEffect(() => {
    // Show popup when user enters website
    if(!isConnected){
    setShow(true);
    }
  }, []);

  // Close popup
  const closePopup = () => setShow(false);





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
  useEffect(() => {
    if (isConnected && loginWithPopUp ) {
      LoginUser.mutate({ wallet_address: address });
    }
  }, [isConnected && loginWithPopUp ]);

  console.log("why are you not connectinggggg > .",isConnected)

  if (!show) return null;


  

  return (
    <>
    <div
      className="fixed z-40 w-full h-full max-md:p-2 left-0 top-0 bg-[#000000ed] flex justify-center items-center"
      onClick={closePopup} // click outside closes
    >
      <div
        className="bg-[#000000a1] border border-white p-6 rounded-2xl shadow-xl w-fit text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
         <div className="mb-2 text-end">
          <button
          onClick={closePopup}
          className="text-white rounded-full ">
          <img src="assets/images/close.png" alt="close icon"/>
        </button>
        </div>
        <h2 className="mb-3 text-2xl text-white">Please Connect Your Wallet</h2>
       <ul className="flex items-center justify-center gap-5 mt-5">
        <li> <button  onClick={()=>{open();  
      setLoginWithPopUp(true);}} className="flex gap-2 px-6 py-3 text-lg text-white btn-primary">
                    Login
                  </button></li>
       <li>
         <button className="flex gap-2 px-6 py-3 text-lg text-white btn-primary" onClick={()=>{
           setOpenLoginModal(true)
          //  setShow(false);
          }}>
                    
                    Sign up
                  </button>
       </li>
         </ul>
        <a href="https://swap.qerra.network/" target="blank"> <button className="flex items-center justify-center w-full gap-2 px-2 py-3 mt-5 text-sm text-white sm:px-6 sm:text-lg btn-primary">
                    <img src="/assets/images/panda.svg" alt="panda" />
                   Buy $PANDX <img  className="sm:h-[20px] h-[15px] w-[15px] sm:w-[20px]" src="/assets/images/qerra.png" alt="panda"/>qerraSWAP
                  </button></a>
        {/* <button
          onClick={closePopup}
          className="px-5 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Continue
        </button> */}
      </div>
    </div>
    {
      loginModal &&
      <LoginPage setShow={setShow} setOpenLoginModal={setOpenLoginModal}/>
    }
    </>
  );
};

export default HomePopup;
