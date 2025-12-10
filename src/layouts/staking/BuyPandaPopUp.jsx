import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BuyPandaPopUp({setBuyPandx}) {
  return (
    <>

      {/* <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full max-md:p-2" onClick={(e)=>e.stopPropagation}>
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
        </div> */}


          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full max-md:p-2" onClick={(e)=>e.stopPropagation}>
    <div className='fixed top-0 left-0 w-full h-full z-45' onClick={()=>setBuyPandx(false)}/>
          <div className="z-50 flex relative flex-col items-center p-[50px] border bg-[#000000ba]  border-white max-md:p-5 w-fit max-sm:w-full rounded-2xl">
            <div className='absolute right-[10px] top-[10px] bg-[#ff403a9e] rounded-full h-[25px] w-[25px] flex justify-center ' >
            <button onClick={()=>setBuyPandx(false)}>
                <img src="/assets/icons/close.svg" alt="close" />
            </button>
            </div>
            <NavLink to={"https://swap.qerra.network/"} target='blank'>
           <button className='flex items-center justify-center w-full gap-2 px-2 py-3 mt-5 text-sm text-white sm:px-6 sm:text-lg md:text-xl border border-white rounded-lg'>
           Buy PANDX
           <img className='sm:h-[20px] h-[15px] w-[15px] sm:w-[20px]' src="/assets/images/qerra.png" alt="qerra" />
           qerraSwap
           </button>
           </NavLink>
         </div>
        </div>
 
        </>
  )
}
