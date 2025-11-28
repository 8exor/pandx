import React from 'react'

export default function P2p() {
  return (
   <div className="w-full px-2 mt-5 sm:px-4">
        <div
          className="flex flex-col items-center justify-between gap-3 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row"
        >
          <input
            type="text"
            placeholder="Enter UserName"
            className="w-full sm:w-[60%] px-2 py-1 rounded-sm"
          />

          <button
            className="bg-[#72A314] w-full sm:w-[25%] px-2 py-1 sm:px-2 sm:py-2 rounded-sm 
                       text-white font-extralight"
          >
            Validate
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-between gap-3 p-2 mb-4 bg-white border border-black rounded-sm sm:flex-row"
        >
          <p className="w-full text-center sm:text-left sm:w-auto">
            Available $60
          </p>

          <button
            className="bg-[#72A314] w-full sm:w-auto px-2 py-1 rounded-sm 
                       text-white font-extralight"
          >
            Max
          </button>
        </div>
        <p className="mb-4 font-semibold text-center uppercase sm:text-left">
          P2P unlimited and free
        </p>

        <div className="flex justify-center mb-4">
          <button
            className="bg-[#72A314] text-white px-3 sm:px-10 py-1 sm:py-3 
                       rounded-sm border border-[#181724] font-extralight"
          >
            Submit
          </button>
        </div>
      </div>
  )
}
