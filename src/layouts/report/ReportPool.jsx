

import { reportPool } from '@constants/index'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function ReportPool() {

    const[pickDate, setPickDate] = useState(false);
    const [startDate, setStartDate] = useState(new Date())

  return (
    <div className='bg-[#efffe3] border-2 border-[#5b5bac] rounded-md mt-15 p-7'>
     <div className='grid items-center justify-between grid-cols-1 gap-10 md:grid-cols-3 lg-grid-cols-4 lg:grid-cols-4 lg:grid-rows-3 '>
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
        <div className=' bg-[#c4ffa1] p-2 border border-black rounded-md flex gap-2 items-center'>
            <span>My Team Rank</span>
            <img src="/assets/icons/dropdown.svg" alt="dropdown" />
        </div>
        <div className='border border-black p-2 bg-[#c4ffa1]'>
            PANDX Team Status
        </div>
        <div className='flex items-center gap-2 p-2 px-3 border border-black' onClick={()=>setPickDate(true)}>

      { pickDate ? <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)}/>
        :
        <>
        <img src="/assets/icons/calendar.svg" alt="calendar" />
        <span className='text-sm font-Lato'>Pick a Date</span>
        </>

    }
        </div>
        <button className='p-1 px-2 rounded-xl border border-black bg-[#c4ffa1]'>Reset</button>
     </div>
    </div>
  )
}
