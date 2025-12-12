import { UserInfoContext } from "@contexts/UserInfoContext";
import React, { useContext } from "react";

import { act } from "react";

export default function IncomeReport({ activeTab, setActiveTab }) {
  const {setIncomeId} = useContext(UserInfoContext);
  
  return (
    <div className="px-0 lg:px-15">
    <div className="p-2 mt-8 bg-white border border-black rounded-lg sm:px-10 lg:rounded-full font-extralight">
      <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-3 ">
        {["DAILY$", "DIRECT",  "LEVEL", "TRIAL" , "BOOSTX","UNI-POOL", ].map( // trail income pending
          (label, index) => (
            <button
              key={label}
              className={`${
                activeTab?.incomeTabs === label ? "bg-[#EAF5CF]  " : " btn-primary "}    border border-black  rounded-full shine hover:scale-105 duration-300 ease-in-out uppercase 
                      py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all  w-full max-w-[170px]  mx-auto`}
              onClick={() => {setActiveTab({ ...activeTab, incomeTabs: label }); setIncomeId(index+1)}}
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
