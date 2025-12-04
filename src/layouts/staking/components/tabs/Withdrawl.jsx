import { UserInfoContext } from '@contexts/UserInfoContext'
import React, { useContext } from 'react'

export default function Withdrawl() {
const {userData} = useContext(UserInfoContext);

  return (
    <div className="px-4 mt-6 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-3 p-3 bg-white border border-black rounded-sm sm:flex-row">
          <p className="w-full text-center sm:text-left sm:w-auto">
            Available $90
          </p>
          <button className="bg-[#72A314] btn-primary  w-full sm:w-auto px-4 py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out text-white font-extralight text-center">
            Max
          </button>
        </div>

        <p className="mt-3 text-center sm:text-left">5% Pool Free</p>

        <div className="flex justify-center mt-6">
          <button className="bg-[#72A314] btn-primary  text-white px-6 sm:px-6 py-2 sm:py-2  rounded-full shine hover:scale-110 duration-300 ease-in-out border border-[#181724] font-extralight text-center">
            Submit
          </button>
        </div>
      </div>
  )
}
