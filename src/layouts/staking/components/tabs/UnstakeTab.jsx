import React from 'react'

export default function UnstakeTab() {
  return (
   <div className="px-4 mt-6 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 p-3 bg-white border border-black rounded-sm sm:flex-row sm:justify-between">
          <button className="bg-[#72A314] w-[200px] sm:w-[30%] py-3  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            MyStake $1000
          </button>
          <button className="bg-[#72A314] w-[200px] sm:w-[30%] py-3  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Unstake 100%
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] text-white px-6 sm:px-10 py-2 sm:py-4 border border-[#181724] font-extralight text-center  rounded-full shine hover:scale-110 duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
  )
}
