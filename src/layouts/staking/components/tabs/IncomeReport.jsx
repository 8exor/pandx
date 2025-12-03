import React from 'react'

import { act } from 'react'

export default function IncomeReport({activeTab, setActiveTab}) {

 


  return (
  <div className="w-full p-2 mt-8 bg-white border border-black rounded-sm font-extralight">
        <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 lg:grid-cols-3">
          {["DAILY$", "DIRECT", "BOOSTX", "LEVEL", "RANK", "UNIPOLE"].map(
            (label) => (
              <button
                key={label}
                className="bg-[linear-gradient(90deg,rgba(110,163,22,1)_0%,rgba(90,161,33,1)_50%,rgba(74,160,42,1)_100%)] btn-primary 
                                       text-white border border-black  rounded-full shine hover:scale-110 duration-300 ease-in-out uppercase 
                                        py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all  w-full max-w-[170px]  mx-auto"
                onClick={()=>setActiveTab({...activeTab, incomeTabs : label})}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
  )
}
