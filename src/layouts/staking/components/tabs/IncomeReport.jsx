import React from "react";

import { act } from "react";

export default function IncomeReport({ activeTab, setActiveTab }) {
  return (
    <div className="lg:px-15 px-0">
    <div className="p-2 px-10 mt-8 bg-white border border-black rounded-lg lg:rounded-full font-extralight">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center  ">
        {["DAILY$", "DIRECT", "BOOSTX", "LEVEL", "RANK", "UNI-POOL"].map(
          (label) => (
            <button
              key={label}
              className={`${
                activeTab?.incomeTabs === label ? "bg-[#EAF5CF]  " : " btn-primary "}    border border-black  rounded-full shine hover:scale-105 duration-300 ease-in-out uppercase 
                      py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all  w-full max-w-[170px]  mx-auto`}
              onClick={() => setActiveTab({ ...activeTab, incomeTabs: label })}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
    </div>
  );
}
