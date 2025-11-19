import React from 'react'
import Tabs from './Tabs'

export default function Staking() {
  return (
  <div className='main-container h-screen w-full max-w-[1320px] rounded-xl m-auto bg-[#49498A] mt-10 mb-10'>

        {/* UPPER BAR */}
        <div className='w-full max-w-[1320px] bg-[#49498A] p-6 rounded-t-xl flex justify-between items-center text-white font-bold text-[20px]'>
          <p>MY Stake <span>$</span></p>
          <p>Daily <span>0.50%</span></p>
          <p>Daily <span>$10</span></p>
          <p>Max Cap
            <div className='max-cap w-20 h-3 rounded-2xl bg-[#72A314]'></div>
          </p>
          <p>Total Gain <span className=''>$</span></p>
        </div>

        <div className='total-burning w-full max-w-[1320px] p-1 rounded-xl'>
          Total Burning 60%
        </div>

        <div className='flex justify-between items-center'>

          {/* LEFT SECTION */}
          <div className="left w-full max-w-[660px] bg-[#9892BF] h-[785px] border border-[#5B5BAC] rounded-xl">

            {/* Rank Buttons */}
            <div className='flex justify-center items-center text-black gap-50 mt-8'>
              <button className='bg-[#BFFEB0] m-5 w-full max-w-[200px] rounded-sm p-5'>
                My Rank
              </button>
              <button className='bg-[#BFFEB0] m-5 w-full max-w-[200px] rounded-sm p-2'>
                Upgrade next rank & get 0.60%
              </button>
            </div>

            <img src="./assets/images/PandaDash.png" alt="panda" className='flex justify-center items-center w-[148px] h-[189px] m-auto mt-10' />
            <Tabs />


            {/* WALLET INFO */}
          
          </div>

          {/* RIGHT SECTION */}
          <div className="right-contain w-full max-w-[660px] h-[786px]  border border-[#5B5BAC] rounded-xl">
            <h1 className='w-full mx-25 my-15 text-xl justify-center'>QRA AIRDROP LIVE - EARN UNLIMITED $QRA</h1>
            <img src="./assets/images/qqlogo.png" className='flex justify-center items-center w-[196px] h-[179px] m-auto mt-25' />
            <div className='w-[300px] p-4 m-auto mt-15 bg-[#BFFEB0] text-center rounded-sm'>Total AirDrop 0 $QRA</div>

            <div className='w-full max-w-[600px] m-auto mt-20 bg-[#BFFEB0] rounded-sm font-bold flex justify-between px-8 py-3'>
              <p>S No</p>
              <p>Username</p>
              <p>Status</p>
              <p>$QRA AirDrop</p>
            </div>

          </div>

        </div>
        </div>

  )
}
