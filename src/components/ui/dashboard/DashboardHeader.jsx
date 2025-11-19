import React from "react";
import { dappNavLinks } from "../../../contants";

const DashboardHeader = () => {
  return (
    <header className="w-full bg-[#C5FF9E] p-3 ">
      <main className="max-w-[1360px] mx-auto flex justify-between items-center">
        <img src="/assets/images/Logo.svg" alt="logo" />

        <ul className="flex justify-between items-center gap-5">
          {dappNavLinks?.map((navlink, index) => (
            <li key={index}>{navlink?.title}</li>
          ))}
        </ul>

        <button
          className="bg-graydient hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium"
          onClick={() => open()}
        >
          <img src="/assets/images/panda.svg" alt="panda" />
          Buy $PANDX
        </button>
      </main>
    </header>
  );
};

export default DashboardHeader;
