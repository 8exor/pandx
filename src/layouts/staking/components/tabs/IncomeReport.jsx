import { UserInfoContext } from "@contexts/UserInfoContext";
import React, { useContext } from "react";

import { act } from "react";

export default function IncomeReport({ activeTab, setActiveTab }) {
  const {setIncomeId} = useContext(UserInfoContext);
    const incomeId = ["4", "1", "2", "5", "3", "6"];
 const incomeReport = [
  {
    label : "TRIAL",
    incomeId : "4"
  },
   {
    label : "DAILY",
    incomeId : "1"
  },
    {
    label : "DIRECT",
    incomeId : "2"
  },
      {
    label : "BOOSTX",
    incomeId : "5"
  },
      {
    label : "LEVEL",
    incomeId : "3"
  },
       {
    label : "UNI-POOL",
    incomeId : "6"
  },
 ]
  return (
    <div className="px-0 lg:px-15">
    <div className="p-2 mt-8 bg-white border border-black rounded-lg sm:px-10 lg:rounded-full font-extralight">
      <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-3 ">
        {incomeReport.map( // trail income pending
          (report, index) => (
            <button
              key={index}
              className={`${
                activeTab?.incomeTabs === report?.label ? "bg-[#EAF5CF]  " : " btn-primary "}    border border-black  rounded-full shine hover:scale-105 duration-300 ease-in-out uppercase 
                      py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all  w-full max-w-[170px]  mx-auto`}
              onClick={() => {setActiveTab({ ...activeTab, incomeTabs: report.label }); setIncomeId(report?.incomeId)}}
            >
              {report?.label}
            </button>
          )
        )}
      </div>
    </div>
    </div>
  );
}
