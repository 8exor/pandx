import React from "react";

const LevelWiseReport = ({ data, type, setShowPopUp, setActiveIndex, setInactiveIndex, allTeam, setAllTeam }) => {
 
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full max-">

    <div className="w-full max-w-[250px]  bg-[#efffe3] text-center  space-y-2 rounded-md border  border-black py-2  ">
        <div className="sticky top-0 w-full bg-[#efffe3]">
            <div className="flex items-center justify-between border-b-2  border-[#68a12b]">
              <div/>
              {console.log("what is all team : ")}
       <h3 className="">{allTeam?.team ? "ALL TEAM" : type}</h3>
       
        <button className="p-2 rounded-full cursor-pointer " onClick={()=>{setShowPopUp(false),  setActiveIndex(""), setInactiveIndex(false)}}>
            <img src="/assets/images/close.png" className="invert" alt="close" />
        </button>
        </div>
       </div>
       <div className="overflow-auto custom-scrollbar scroll-smooth max-h-[300px] ">
      <ul className="px-2 ">
        {
        data && data.length === 0 ? 
        <li>
           <p> No data found</p>
        </li>
        :
        data?.map((d, i) => (
          <li key={i} className={`flex items-center p-1 px-2 ${allTeam?.team ? "justify-between " : "justify-center"} mb-2 border border-green-900 rounded-md bg-[#68a12b] `}>
            <p>{d.username}</p>
           {allTeam?.team && <p className={`p-1 btn-primary ${d?.is_active  ? "btn-primary" : "btn-red"}`}>{d?.is_active ? "Active" : "In-Active"}</p>}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default LevelWiseReport;
