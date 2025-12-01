import { useState, useEffect } from "react";
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
const Header = () => {
  const { open, close } = useAppKit();
  const { isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { disconnect } = useDisconnect();
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
             <a href=" https://swap.qerra.network/" target="blank"><img className="md:w-[180px] w-[120px]" src="/assets/images/Logo.png" alt="logo" /></a>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="hidden hover:scale-110 md:block bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
               <a href="https://t.me/pandxdao" target="blank">
                 <img
                  className="w-[20px] h-[20]"
                  src="/assets/images/Icon.svg"
                  alt="telegram"
                />
               </a>
              </div>
              <div className="hidden hover:scale-110  lg:block bg-white  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow rotate-6">
                <img src="/assets/images/telegram.svg" alt="telegram" />
              </div>
         
              <div className="items-center hidden gap-3 lg:flex">
                <button
                  className="bg-[#5f5f81] hover:scale-110 transition duration-300 shine rounded-full duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium"
                  onClick={() => {
                    isConnected ? handleDisconnet() : setOpenLoginModal(true);
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


                <NavLink to={"/StakingPage"}>
                  <button className=" bg-[#5f5f81]   rounded-full shine hover:scale-110 duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Staking
                  </button>
                </NavLink>

                
                <a href=" https://swap.qerra.network/" target="blank">
                  <button className="bg-[#5f5f81]  shine rounded-full   hover:scale-110 duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Buy $Pandx
                  </button>
                </a>
              </div>
              <div className="bg-[#5f5f81]  hover:scale-110   shine rounded-full     duration-300 ease-in-out  h-13 w-13 flex items-center justify-center rounded-full">
                <button
                  onClick={() => setOpenMenu(!openMenu)}
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

              {openMenu && (
                <div className="absolute top-20 left-0 w-full right-0 mt-2 p-4 bg-[#C5FF9E] rounded shadow-lg ">
                  <ul className="text-center">
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Home</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">About</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Tokenomics</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Get Started</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Roadmap</a>
                    </li>
                  </ul>
                  <a className="flex items-center justify-center mt-6 lg:hidden" href=" https://swap.qerra.network/" target="blank">
                  <button className="bg-[#5f5f81]  shine rounded-full    hover:scale-110  hover:!bg-[#5b5ca9] duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Buy $Pandx
                  </button>
                </a>
                  <NavLink
                    to={isConnected ? "/StakingPage" : "/"}
                    className={
                      "flex justify-center items-center mt-6 lg:hidden"
                    }
                  >
                    <button className="bg-[#5f5f81]  shine rounded-full      hover:scale-110 duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                      <img src="/assets/images/panda.svg" alt="panda" />
                      Staking
                    </button>
                  </NavLink>
                  <button
                    className="lg:hidden mt-6  mx-auto hover:scale-110  shine rounded-full      hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium"
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenLoginModal(true);
                    }}
                  >
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Register
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
