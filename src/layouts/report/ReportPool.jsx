
import { UserInfoContext } from '@contexts/UserInfoContext';
import Ranking from '@layouts/rank/Ranking';
import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function ReportPool() {
    const {profileData, teamData} = useContext(UserInfoContext);
    const[pickDate, setPickDate] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [ranking, setRanking] = useState(false);
    const [showRank, setShowRank] = useState(false);

    const reportPool = [
  {
    title: "Self Vol",
    value: `${Number(profileData?.data?.total_invested).toFixed(2)}`,
  },
  {
    title: "Rank",
    value:  ` ⭐${Number(profileData?.data?.rank_id).toFixed(0)}`,
  },
  {
    title: "Direct",
    value: `${Number(profileData?.data?.total_directs).toFixed(0)}`,
  },
  {
    title: "Direct Vol",
    value: `${Number(teamData?.data?.direct_business).toFixed(0)}`
  },
  {
    title: "Direct Reward",
    value: `${Number(profileData?.data?.direct_income)?.toFixed(2)}`,
  },
  {
    title: "Total Team",
    value: `${Number(teamData?.data?.total_child).toFixed(0)}`,
  },
  {
    title: "Total Vol",
    value: `${Number(teamData?.data?.total_business).toFixed(0)}`,
  },
  {
    title: "Level",
    value: `${Number(profileData?.data?.eligible_level).toFixed(2)}`,
  },
  {
    title: "Level Reward",
    value: `${Number(profileData?.data?.level_income).toFixed(2)}`,
  },
  {
    title: "UNI-Pool Reward",
    value: `${Number(profileData?.data?.uni_income).toFixed(2)}`,
  },
  {
    title: "Capping",
    value: `${Number((profileData?.data?.used_capping/profileData?.data?.total_capping)*100).toFixed(2)}%`,
  },
  {
    title: "Total Gain",
    value: `${Number(profileData?.data?.total_income)}`,
  },
];

const rank = [" ⭐1", " ⭐2", " ⭐3", " ⭐4", " ⭐5", " ⭐6"];

  return (
    <div className='bg-[#efffe3] border-2 border-[#5b5bac] rounded-md mt-10 p-7 px-11'>
     <div className='grid items-center justify-between grid-cols-1 gap-10 md:grid-cols-3 lg-grid-cols-4 lg:grid-cols-6 lg:grid-rows-2 '>
        {
            reportPool?.map((pool, i)=>(
                <div key={i} className='flex flex-col items-center bg-[#c4ffa1] p-2  border border-[#68a12b] rounded-md shadow'>
                    <span>{pool?.title}</span>
                    <span>{pool?.value}</span>

                </div>
            ))
        }
        
     </div>
     <div className='flex flex-wrap items-center justify-between gap-5 py-2 mt-10 '>
        <button className='p-1 px-5 rounded-md border border-black bg-[#c4ffa1]'>
            Back
        </button>
        <input type="text" className='border border-black px-5 p-1 bg-[#ffffff] rounded-xs' />
        <div className=' bg-[#c4ffa1] relative p-2 border border-black rounded-md flex gap-2 items-center' onClick={()=>setShowRank(!showRank)}>
            <span>{ranking ? ranking :"My Team Rank"}</span>
            <img src="/assets/icons/dropdown.svg" alt="dropdown" />
          { showRank && <div className='absolute left-0 z-10 w-full rounded-md top-11'>
           {rank?.map((rank,index)=> <span className='block bg-[#c4ffa1] p-2' key={index} onClick={()=>setRanking(rank)}>{rank}</span>)}
            </div>}
        </div>
        <div className='border border-black p-2 bg-[#c4ffa1]'>
            <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)}/>
        </div>
        <div className='flex items-center gap-2 p-2 px-3 border border-black' onClick={()=>setPickDate(true)}>

      { pickDate ? <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)}/>
        :
        <>
        <img src="/assets/icons/calendar.svg" alt='calendar' />
        <span className='text-sm font-Lato'>Pick a Date</span>
        </>

    }
        </div>
        <button className='p-1 px-2 rounded-xl border border-black bg-[#c4ffa1]'>Reset</button>
     </div>
    </div>
  )
}
