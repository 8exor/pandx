import React from 'react'
import { NavLink , Link } from 'react-router-dom'
export default function BuyPandaPopUp({setBuyPandx}) {
  return (
    <>
       <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full max-md:p-2"
        onClick={(e)=>e.stopPropagation}
      >
        <div className="fixed top-0 left-0 w-full h-full z-45" onClick={()=>setBuyPandx(false)} />
        <div className="z-50 flex relative flex-col items-center p-[50px] border bg-[#000000ba]  border-white max-md:p-5 w-fit max-sm:w-full rounded-2xl">
          <div className="absolute right-[10px] top-[10px] bg-[#ff403a9e] rounded-full h-[25px] w-[25px] flex justify-center ">
            <button onClick={()=>setBuyPandx(false)}>
              <img src="/assets/icons/close.svg" alt="close" />
            </button>
          </div>
          <NavLink to={"https://swap.qerra.network/"} target="blank">
            <button className=" flex items-center gap-2  w-full gap-2 px-2 py-3 mt-5 text-lg text-white sm:px-6 sm:text-xl md:text-2xl rounded-lg">
              Join Official Telegram Group
            </button>
          </NavLink>
          <Link
            to={"https://t.me/pandxxyz"}
            target="blank"
            className="w-full flex items-center justify-center gap-2 btn-primary !font-bold text-center gap-2 px-2 py-3 mt-5 text-sm text-white sm:px-6 sm:text-lg md:text-xl border border-white rounded-lg"
          >
            <img
              className="w-[25px] text-white h-[25px]"
              src="/assets/images/Icon.svg"
              alt="telegram"
            />
            Join Now
          </Link>
        </div>
      </div>

        </>
  )
}
