import React, { useState } from "react";
import { dappNavLinks } from "../../../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppKitProvider, useDisconnect } from "@reown/appkit/react";
import { ethers } from "ethers";

const DashboardHeader = () => {
  const[openMenu, setOpenMenu] = useState(false);
    const { walletProvider } = useAppKitProvider("eip155");
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

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
    <header className=" w-full bg-[#C5FF9E] p-3 ">
      <main className="max-w-[1360px] mx-auto flex justify-between items-center">
        <img className="w-45" src="/assets/images/Logo.png" alt="logo" />

        <ul className="items-center justify-between hidden gap-5 xl:gap-40 md:flex">
          {dappNavLinks?.map((navlink, index) => (
            <li key={index}>
              <NavLink to={navlink?.link}>
             <span>{navlink?.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

         <button
          className="hidden gap-2 px-6 py-2 text-lg font-medium text-white duration-300 ease-in-out md:px-2 lg:px-6 md:flex btn-primary"
          onClick={() => handleDisconnet()}
        >
          <img src="/assets/images/panda.svg" alt="panda" />
        LOGOUT
        </button>

        <button
          className="hidden gap-2 px-6 py-2 text-lg font-medium text-white duration-300 ease-in-out md:px-2 lg:px-6 md:flex btn-primary"
          onClick={() => open()}
        >
          <img src="/assets/images/panda.svg" alt="panda" />
          Buy $PANDX
        </button>
        {
           <div className="md:hidden bg-graydient-box hover:!bg-[#5b5ca9]  duration-300 ease-in-out  h-13 w-13 flex items-center justify-center rounded-full">
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
        }
        {
          openMenu && 
            <div className="sm:hidden absolute top-18 left-0 w-full right-0  p-4 bg-[#C5FF9E] rounded shadow-lg z-50 rounded-b-xl">
             <ul className="text-center">
          {dappNavLinks?.map((navlink, index) => (
            <li key={index}>
              <NavLink to={navlink?.link}>
                {navlink?.title}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
        }
      </main>
    </header>
  );
};

export default DashboardHeader;
