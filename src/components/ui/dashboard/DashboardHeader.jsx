import React, { useState } from "react";
import { dappNavLinks } from "../../../constants";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  const[openMenu, setOpenMenu] = useState(false);

  return (
    <header className=" w-full bg-[#C5FF9E] p-3 ">
      <main className="max-w-[1360px] mx-auto flex justify-between items-center">
        <img src="/assets/images/Logo.svg" alt="logo" />

        <ul className="items-center justify-between hidden gap-40 md:flex">
          {dappNavLinks?.map((navlink, index) => (
            <li key={index}>
              <NavLink to={navlink?.link}>
             <span>{navlink?.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:flex bg-graydient-box hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6  gap-2 text-white text-lg font-medium"
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
