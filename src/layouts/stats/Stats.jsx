import { statsRanks } from "@constants/index";
import React from "react";

const Stats = () => {


const tableHeadings = [
  "S N",
  "RANK",
  "USERNAME",
  "WALLET ADDRESS",
  "1ST ACHIVEMENT",
  "LAST ACHIVEMENT",
  "STATUS"
]


  return (
    <div className="w-full h-full min-h-screen bg-[#e5ffd5] p-2">
      <div className="w-full max-w-[1360px] mx-auto text-xl">
        <div className="mt-20 flex items-center justify-center">
        <h2 className=" text-black text-2xl text-center py-2 btn-primary w-md">
          TOTAL RANK ACHIEVERS
        </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-5 mt-10">

       { statsRanks.map((data, index)=>  <div className="flex flex-col items-center bg-[#c4ffa1] p-2  border border-[#68a12b] rounded-md hover:bg-[linear-gradient(90deg,_#ffffff,_#edfee1,_#ffffff)] hover:shadow-[inset_0_0_5px_#ffffff96,inset_0_30px_30px_#72a315,0_5px_10px_#00000070] transition-all duration-300">
          <span className="flex items-center gap-1">
           <span className="animate-spin [animation-duration:2s]">
            <img src="/assets/images/star 1.svg" alt="" />
           </span>
            {data.title}
          </span>
          <span>
            {data.value}
          </span>
        </div>)}

        </div>
        <div className="flex items-center justify-center mt-8">
        <h2 className="mt-7 text-center btn-primary w-md py-2 text-black text-2xl">MY TEAM RANKS</h2>
        </div>
        <div className="w-full overflow-auto mt-10">
          <table className="w-full">
            <thead className="w-full">
              <tr className="flex justify-between w-full text-left text-black rounded-lg btn-primary">
               {tableHeadings.map((heading, index)=> 
               <th className="capitalize text-center text-nowrap whitespace-nowrap p-5 font-medium">
                {heading}
                </th>)}
              </tr>
            </thead>
            <tbody>
              <tr >
                <td colSpan={7} className="text-center py-10">No Data Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stats;
