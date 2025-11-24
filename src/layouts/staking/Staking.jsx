import React from 'react'
import Tabs from './Tabs'
import { useState } from 'react'

export default function Staking() {
  const [stakePopup, setStakePopup] = useState(false)
  return (
    <div className='main-container h-full w-full max-w-[1320px] rounded-lg m-auto border-t border-l border-r border-[#5B5BAC] md:mt-10 mt-4'>
      <div className="-mt-1 w-full max-w-[1320px] bg-[#49498A] p-8 rounded-t-xl text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]
            flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-4 text-center md:text-left">

        <p onClick={() => setStakePopup(true)}>My Stake $</p>
        <p>Daily 0.50%</p>
        <p>Daily $10</p>

        <p className='flex flex-col items-center md:items-start'>
          Max Cap
          <div className="bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D] w-20 h-3 rounded-2xl mt-1"></div>
        </p>
        <p>Total Gain $</p>
      </div>

      <div className="flex justify-center w-full max-w-[1320px] mx-auto relative sm:-mt-6 sm:-mb-6 -mt-3 -mb-3 z-30">
        <div className="w-full bg-gradient-to-r from-[#28DB8C] via-[#6AEA94] to-[#B8FC9D] 
                   font-bold text-black py-1 px-2 rounded-lg 
                  relative overflow-visible"> Total Burning 60%
          {/* TOP BLEND */}
          <div className="absolute top-[-20px] left-0 right-0 h-[20px] opacity-80"></div>
          {/* BOTTOM BLEND */}
          <div className="absolute bottom-[-20px] left-0 right-0 h-[20px] opacity-80"></div>
        </div>
      </div>



      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className="left w-full md:w-1/2  bg-gradient-to-tl from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB] 
        h-auto md:h-[900px] sm:border-r border-[#5B5BAC] sm:rounded-b-lg rounded-none 
        ">

          <div className='flex flex-col sm:flex-row justify-center items-center text-black gap-3 md:gap-40 mt-4 sm:mt-15 w-full'>
            <button className='bg-[#BFFEB0] m-2 sm:m-2 w-full sm:w-[300px] max-w-[200px] rounded-sm py-6 px-3'>
              My Rank
            </button>
            <button className='bg-[#BFFEB0] m-2 sm:m-2 w-full sm:w-[300px] max-w-[200px] rounded-sm p-3'>
              Upgrade next rank & get 0.60%
            </button>
          </div>

          <img src="./assets/images/PandaDash.png" alt="panda" className='flex justify-center items-center w-[148px] h-[189px] m-auto mt-5 sm:mt-12' />
          <Tabs />

        </div>

        <div className="right-contain w-full md:w-1/2 bg-gradient-to-tr from-[#8885D4] via-[#A6A0E3] to-[#D4CCFB]
                h-auto md:h-[900px] sm:border-l border-[#5B5BAC]  rounded-b-lg  p-4 md:p-6 mt-0 sm:mt-0">
          <h1 className='text-xl flex justify-center text-center md:text-left my-4 md:my-15'>
            QRA AIRDROP LIVE - EARN UNLIMITED $QRA
          </h1>
          <img src="./assets/images/qqlogo.png" className='w-[150px] sm:w-[196px] h-auto mx-auto mt-6 md:mt-25' />
          <div className='w-[260px] sm:w-[300px] p-4 mx-auto mt-15 bg-[#BFFEB0] text-center rounded-sm'>Total AirDrop 0 $QRA</div>
          <div className='w-full max-w-[600px] mx-auto mt-12 bg-[#BFFEB0] rounded-sm font-bold
                  flex justify-between px-4 sm:px-8 py-3 text-sm sm:text-base'>
            <p>S No</p>
            <p>Username</p>
            <p>Status</p>
            <p>$QRA AirDrop</p>
          </div>
        </div>


        {stakePopup && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setStakePopup(false)}     //  background click closes popup
          >
            <div
              className='p-6 bg-[#C5FF9E] w-full max-w-[300px] h-[200px] rounded-sm text-black'
              onClick={(e) => e.stopPropagation()}   //  clicking inside won't close popup
            >
              <div className='flex justify-between items-center mb-8'>
                <div>
                  <h1>Wallet Address</h1>
                  <input type="text" placeholder='Undefined...undefined' />
                </div>
                <div>
                  <img src="./assets/images/copy-link 1.svg" alt="copy" />
                </div>
              </div>

              <div className='flex justify-between items-center mb-8'>
                <div>
                  <h1>Referral Link</h1>
                  <input type="text" placeholder='Narn00' />
                </div>
                <div>
                  <img src="./assets/images/copy-link 1.svg" alt="copy" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}