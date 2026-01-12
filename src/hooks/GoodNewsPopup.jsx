import React, { useState } from 'react'
import { useTimerCounter, useTimerCounterTwo } from './useTimeCounter';
import { NavLink } from 'react-router-dom';

const GoodNewsPopup = ({setGoodnews}) => {

      const [days, hours, minutes, seconds] = useTimerCounterTwo(
    1769817000000,
    0
  );
  return (
    <>

       <div className='z-45 fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#000000ed]'>
        <div className='z-50 p-4 bg-[#C5FF9E] border border-black rounded-xl w-4xl'>
            <div className='flex items-center justify-end mb-2'>
            <button className='cursor-pointer' onClick={()=>setGoodnews(false)}>
                <img className='invert' src="/assets/images/close.png" alt="" />
            
            </button>
            </div>
            <NavLink to={"https://doc.qerra.network/qerra-docs/ecosystem-tour/tokenomics"} target='_blank'>
            <div className='w-full border-2 border-black rounded-md cursor-pointer'>
            <img  className='w-full h-full' src="/assets/images/goodnews.png" alt="" />
            </div>
            </NavLink>
            <div className='flex items-center justify-center mt-5'>
              <div className='p-2 px-4 text-xl border-2 border-black rounded-md '>
                <span className='blink-text'>{`${days}d : ${hours}h : ${minutes}s : ${seconds}s`}</span>
              </div>
            </div>
      
        </div>
      
    </div>

  </>
  )
}

export default GoodNewsPopup
