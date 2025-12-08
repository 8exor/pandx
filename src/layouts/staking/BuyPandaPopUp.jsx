import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BuyPandaPopUp({setBuyPandx}) {
  return (
    <>

      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full max-md:p-2" onClick={(e)=>e.stopPropagation}>
    <div className='fixed top-0 left-0 w-full h-full z-45' onClick={()=>setBuyPandx(false)}/>
          <div className="z-50 flex flex-col items-center p-5 border bg-[#000000a8]  border-white max-md:p-5 w-fit max-sm:w-full rounded-2xl">
            <div className='flex justify-end w-full ' >
            <button onClick={()=>setBuyPandx(false)}>
                <img src="/assets/icons/close.svg" alt="close" />
            </button>
            </div>
            <NavLink to={"https://swap.qerra.network/"} target='blank'>
           <button className='flex items-center gap-2 p-2 mt-5 text-2xl text-white border border-white rounded-md'>
           Buy PANDX
           <img className='w-8 h-8' src="/assets/images/qerra.png" alt="qerra" />
           qerraSwap
           </button>
           </NavLink>
         </div>
             
          
        </div>
 
        </>
  )
}
