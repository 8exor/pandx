import React from 'react'
import {useQuery} from "@tanstack/react-query"
import axiosInstance from '@utils/axiosInstance'
import { REPORTS } from '@services/panda.api.services'

export default function IncomeReport() {

    const {data} = useQuery({
        queryKey : ["incomeReports"],
        queryFn : async()=>{
            const {data} = await axiosInstance.get(REPORTS?.incomeReports)
            return data;
        }
    })
    console.log("what are the income reports : ", data);


  return (
  <div className="w-full p-2 mt-8 bg-white border border-black rounded-sm font-extralight">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
          {["Daily$", "Direct", "Boostx", "Level", "Rank", "Unipole"].map(
            (label) => (
              <button
                key={label}
                className="bg-[linear-gradient(90deg,rgba(110,163,22,1)_0%,rgba(90,161,33,1)_50%,rgba(74,160,42,1)_100%)] 
                                       text-white border border-black rounded-sm uppercase 
                                       px-2 py-2 text-sm sm:text-base
                                       hover:bg-[#EAF5CF] hover:text-black 
                                       transition-all duration-300 ease-in-out w-full"
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
  )
}
