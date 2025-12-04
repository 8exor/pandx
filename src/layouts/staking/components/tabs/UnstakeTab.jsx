import React from 'react'

export default function UnstakeTab() {
  return (
   <div className="px-4 mt-6 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 p-3 bg-white border border-black rounded-sm sm:flex-row sm:justify-between">
          <button className="bg-[#72A314] btn-primary  w-[180px] sm:w-[30%] py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            MyStake $1000
          </button>
          <span></span>
          <button className="bg-[#72A314] btn-primary  w-[180px] sm:w-[30%] py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Unstake 100%
          </button>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <input type="checkbox"  />
          <div>
        
          <span className='font-light '>Please confirm if you want to proceed with unstaking. Once you unstake, your ID will be permanently deactivated.
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2 border border-[#181724] font-extralight text-center  rounded-full shine hover:scale-110 duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
  )
}
