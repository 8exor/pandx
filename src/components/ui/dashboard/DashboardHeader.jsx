import React, { useContext, useState } from "react";
import { dappNavLinks } from "../../../constants";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
import { ethers } from "ethers";
import { UserInfoContext } from "@contexts/UserInfoContext";
import CopyToClipBaord from "@hooks/CopyToClipBoard";

const DashboardHeader = () => {
  const { address } = useAppKitAccount();
  const [isCopied, handleCopy] = CopyToClipBaord();
  const { userData } = useContext(UserInfoContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [stakePopup, setStakePopup] = useState(false);
  const { walletProvider } = useAppKitProvider("eip155");
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(false);

  const handleDisconnet = async () => {
    try {
   
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);

      const sign = await ethersProvider.getSigner();

      const txn = await sign.signMessage("are you sure you want to disconnect");
      if (txn) {
        disconnect();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className=" w-full bg-[#C5FF9E] p-3  fixed z-40 top-0">
      <main className="max-w-[1360px] mx-auto flex justify-between items-center">
        <div onClick={() => navigate("/")}>
          <img
            className="md:w-[180px] w-[120px]"
            src="/assets/images/Logo.png"
            alt="logo"
          />
        </div>
        <div className="relative">
           
          <ul className="items-center justify-between hidden gap-5 xl:ml-10 xl:gap-10 xl:flex">
            {dappNavLinks?.map((navlink, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#6ba632] py-[8px] px-[20px] rounded-lg text-white"
                      : ""
                  }
                  to={navlink?.link}
                  onClick={() =>  setActiveNav(navlink?.title) }
                >
                  <span>{navlink?.title}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="flex items-center justify-center p-3 text-lg font-medium text-center text-white duration-300 ease-in-out btn-star animate-bounce "
                onClick={() => setStakePopup(!stakePopup)}
              >
                <img className="" src="/assets/images/star 1.svg" alt="star" />
              </button>
              {stakePopup && (
                <>
                  <div
                    className="fixed inset-0 z-40 flex items-center justify-center w-full h-full"
                    onClick={() => setStakePopup(false)}
                  />
                  <div className=" absolute top-15  -right-20 z-40   p-3 bg-[#C5FF9E] w-full max-w-[230px]  h-[160px] rounded-md text-black border border-black">
                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Username</h3>
                        <p className="text-sm font-medium">
                          {userData?.data?.username}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCopy(userData?.data?.username)}
                        >
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Wallet Address</h3>
                        <p className="text-sm">
                          {address
                            ? `${address.substring(
                                0,
                                5
                              )}....${address.substring(36, 42)}`
                            : "No address found"}
                        </p>
                      </div>
                      <div>
                        <button onClick={() => handleCopy(address)}>
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Referral Link</h3>
                        <p className="text-sm">{userData?.data?.username}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCopy(userData?.data?.username)}
                        >
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="relative flex items-center gap-5 ">
          <NavLink to={"https://swap.qerra.network/"} target="blank">
            <button className="items-center justify-between hidden gap-2 px-6 py-2 text-lg font-medium text-white duration-300 ease-in-out md:px-2 lg:px-6 xl:flex btn-primary">
              <img src="/assets/images/panda.svg" alt="panda" />
              Buy $PANDX
              <img
                className="w-5 h-5"
                src="/assets/images/qerra.png"
                alt="qerra"
              />
              qerraSwap
            </button>
          </NavLink>

          <button
            className="hidden gap-2 px-6 py-2 text-lg font-medium text-white duration-300 ease-in-out md:px-2 lg:px-6 xl:flex btn-primary"
            onClick={() => handleDisconnet()}
          >
            <img src="/assets/images/panda.svg" alt="panda" />
            LOGOUT
          </button>

          {/*  star logout  icons in responsive*/}
          <div className="block xl:hidden relative flex gap-4 justify-end">
             <button
                className=" flex items-center justify-center p-3  text-lg btn-star animate-bounce "
                onClick={() => setStakePopup(!stakePopup)}
              >
                <img className="h-[20px] w-[20px]" src="/assets/images/star 1.svg" alt="star" />
              </button> {stakePopup && (
                <>
                  <div
                    className="fixed inset-0 z-40 flex items-center justify-center w-full h-full"
                    onClick={() => setStakePopup(false)}
                  />
                  <div className=" absolute top-15  right-0  z-40   p-3 bg-[#C5FF9E] w-full min-w-[200px]  rounded-md text-black border border-black">
                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Username</h3>
                        <p className="text-sm font-medium">
                          {userData?.data?.username}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCopy(userData?.data?.username)}
                        >
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Wallet Address</h3>
                        <p className="text-sm">
                          {address
                            ? `${address.substring(
                                0,
                                5
                              )}....${address.substring(36, 42)}`
                            : "No address found"}
                        </p>
                      </div>
                      <div>
                        <button onClick={() => handleCopy(address)}>
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div>
                        <h3>Referral Link</h3>
                        <p className="text-sm">{userData?.data?.username}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCopy(userData?.data?.username)}
                        >
                          <img
                            className="w-7"
                            src="/assets/icons/copy.svg"
                            alt="copy"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
                <button
                className="flex items-center justify-center p-3  text-lg btn-star "
                onClick={() => handleDisconnet()}
              >
                 <img className="h-[20px] w-[20px]" src="/assets/images/out.png" alt="log-out" />
              </button>
           </div>
            {/*  star logout  icons in responsive end */}
          {
            <div  onClick={() => setOpenMenu(!openMenu)} className="xl:hidden btn-primary hover:!bg-[#5b5ca9]  duration-300 ease-in-out  h-13 w-13 flex items-center justify-center rounded-full">
              <button
               
                className="   relative w-8 h-6 flex flex-col justify-between items-center p-[2px] group"
              >
                <span
                  className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                    openMenu ? "translate-y-[9px] rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                    openMenu ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                    openMenu ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                ></span>
              </button>
            </div>
          }
        </div>
          
        {openMenu && (
          <div className="xl:hidden gap-[10px] absolute top-18 left-0 w-full right-0  p-10  bg-[#C5FF9E] rounded shadow-lg z-50 rounded-b-xl">
            <ul className="text-center">
              {dappNavLinks?.map((navlink, index) => (
                <li className="mt-2" key={index}>
                  <NavLink to={navlink?.link}
                   onClick={() => setOpenMenu(false)}>
                    <span>{navlink?.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center w-full mt-5">
              <button
                className="flex gap-2 px-6 py-2 text-lg font-medium text-white duration-300 ease-in-out md:px-2 lg:px-6 md:flex btn-primary"
                onClick={() => handleDisconnet()}
              >
                <img src="/assets/images/panda.svg" alt="panda" />
                LOGOUT
              </button>
            </div>
          </div>
        )}
        
      </main>
    </header>
  );
};

export default DashboardHeader;
