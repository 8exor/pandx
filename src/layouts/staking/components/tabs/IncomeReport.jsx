import React from "react";

import { act } from "react";

export default function IncomeReport({ activeTab, setActiveTab }) {
  return (
    <div className="w-full p-2 mt-8 bg-white border border-black rounded-sm font-extralight">
      <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 lg:grid-cols-3">
        {["DAILY$", "DIRECT", "BOOSTX", "LEVEL", "RANK", "UNI-POOL"].map(
          (label) => (
            <button
              key={label}
              className={`${
                activeTab?.incomeTabs === label ? "bg-[#EAF5CF]  " : " btn-primary "}    border border-black  rounded-full shine hover:scale-110 duration-300 ease-in-out uppercase 
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
  );
}
