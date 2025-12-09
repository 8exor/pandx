import { useState, useEffect, useRef } from "react";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
// import { useState , useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { ethers } from "ethers";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { AUTH } from "@services/panda.api.services";
import toast from "react-hot-toast";
import { setAccessToken } from "@utils/Session";
const Header = ({
  aboutRef,
  tokenomicsRef,
  getStartedRef,
  roadmapRef,
  homeRef,
}) => {
  const scrollTo = (section, offset = 0, isCenter = false) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      tokenomics: tokenomicsRef,
      getStarted: getStartedRef,
      roadmap: roadmapRef,
    };

    const element = refs[section].current;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 100; // Get position relative to the document

      let offsetPosition;

      if (isCenter) {
        // Calculate center position of the section in the viewport
        const centerOffset =
          window.innerHeight / 0 - element.clientHeight / 200;
        offsetPosition = elementPosition - centerOffset;
      } else {
        // Apply custom offset provided by the user
        offsetPosition = elementPosition - offset;
      }

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  const { open, close } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { disconnect } = useDisconnect();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [clickedOnConnect, setClickedOnConnect] = useState(false);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Scroll listenerblock: "start"
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  const handleDisconnet = async () => {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);

      const sign = await ethersProvider.getSigner();

      const txn = await sign.signMessage("are you sure you want to disconnect");
      if (txn) {
        disconnect();
      }
    } catch (error) {
      console.log(error);
    }
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
      navigate("/StakingPage");
    },
    onError: (error) => {
      if (error?.status === 0 && clickedOnConnect) {
        toast.error(error?.message);
        disconnect();
      }
    },
  });

  useEffect(() => {
    if (isConnected && clickedOnConnect) {
      LoginUser.mutate({ wallet_address: address });
    }
  }, [isConnected]);

  return (
    <>
      <header
        className={`py-6 w-full z-30 transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 bg-[#C5FF9E] shadow-lg"
            : "absolute bg-[#C5FF9E]"
        }`}
      >
        <nav className="mycontainer ">
          <div className="flex items-center justify-between">
            <div className="logo">
             <NavLink to={"/"}>
                <img
                  className="md:w-[180px] w-[120px]"
                  src="/assets/images/Logo.png"
                  alt="logo"
                />
               </NavLink>
            </div>

            <div className="flex items-center justify-between gap-7">
             
              <div className="hidden hover:scale-110 sm:block bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-2 rounded-lg border border-black shadow">
                <a href="https://t.me/pandxdao" target="blank">
                  <img
                    className="w-[25px] h-[25px]"
                    src="/assets/images/Icon.svg"
                    alt="telegram"
                  />
                </a>
              </div>
              <div className="hidden hover:scale-110 sm:block bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-2 rounded-lg border border-black shadow transform-gpu rotate-6">
                <img
                  className="w-[25px] h-[25px]"
                  src="/assets/images/telegram.svg"
                  alt="telegram"
                />
              </div>

              <div className="items-center hidden gap-7 mr-[-25px] lg:flex">
                <button
                  className="flex gap-2 px-6 py-3 text-lg font-medium text-white btn-primary"
                  onClick={() => {
                    isConnected ? handleDisconnet() : open();
                    setClickedOnConnect(true);
                  }}
                >
                  <img src="/assets/images/panda.svg" alt="panda" />
                  {isConnected ? "Disconnect" : " Connect"}
                </button>
                {/* 
                <NavLink to={"/StakingPage"}>
                  <button className="bg-[#5f5f81]  shine rounded-full hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Staking
                  </button>
                </NavLink> */}
                {isConnected && (
                  <NavLink to={"/StakingPage"}>
                    <button className="flex gap-2 px-6 py-3 text-lg font-medium text-white btn-primary">
                      <img src="/assets/images/panda.svg" alt="panda" />
                      Staking
                    </button>
                  </NavLink>
                )}

                <button
                  onClick={() => setOpenLoginModal(true)}
                  className="flex gap-2 px-6 py-3 text-lg text-white btn-primary"
                >
                  Sign up
                </button>

                <a href="https://swap.qerra.network/" target="blank">
                  {" "}
                  <button className="flex items-center justify-center hidden w-full gap-2 px-2 py-3 text-sm text-white sm:px-6 sm:text-lg btn-primary">
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
              <div
                ref={buttonRef}
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center justify-center rounded-full btn-primary h-13 w-13"
              >
                <button className="   relative w-8 h-6 flex flex-col justify-between items-center p-[2px] group">
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

              {openMenu && (
                <div
                  ref={menuRef}
                  className="absolute top-20 left-0 w-full right-0 mt-2 p-4 bg-[#C5FF9E] rounded shadow-lg "
                >
                  <ul
                    className="text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li className="text-3xl text-[#141414] leading-14">
                      <button
                        onClick={() => {
                          scrollTo("home");
                          setOpenMenu(false);
                        }}
                      >
                        {" "}
                        Home
                      </button>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <button
                        onClick={() => {
                          scrollTo("about");
                          setOpenMenu(false);
                        }}
                      >
                        About
                      </button>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <button
                        onClick={() => {
                          scrollTo("tokenomics");
                          setOpenMenu(false);
                        }}
                      >
                        Tokenomics
                      </button>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <button
                        onClick={() => {
                          scrollTo("getStarted");
                          setOpenMenu(false);
                        }}
                      >
                        Get Started
                      </button>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <button
                        onClick={() => {
                          scrollTo("roadmap");
                          setOpenMenu(false);
                        }}
                      >
                        Roadmap
                      </button>
                    </li>
                  </ul>
                  <a
                    className="flex items-center justify-center lg:hidden"
                    href=" https://swap.qerra.network/"
                    target="blank"
                  >
                    <button className="flex gap-2 px-6 py-3 text-lg font-medium text-white btn-primary">
                      <img src="/assets/images/panda.svg" alt="panda" />
                      Buy $Pandx
                    </button>
                  </a>
                  {isConnected && (
                    <NavLink
                      to={isConnected ? "/StakingPage" : "/"}
                      className={
                        "flex justify-center items-center mt-6 lg:hidden"
                      }
                    >
                      <button className="flex gap-2 px-6 py-3 text-lg font-medium text-white btn-primary">
                        <img src="/assets/images/panda.svg" alt="panda" />
                        Staking
                      </button>
                    </NavLink>
                  )}
                  <button
                    className="lg:hidden mt-6  mx-auto btn-primary     hover:!bg-[#5b5ca9]   py-3 px-6 flex gap-2 text-white text-lg font-medium"
                    onClick={() => {
                      open();
                      setClickedOnConnect(true);
                    }}
                  >
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Connect
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        {openLoginModal && <LoginPage setOpenLoginModal={setOpenLoginModal} />}
      </header>
    </>
  );
};

export default Header;
