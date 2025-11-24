

import { myLevel, myRank } from '../../constants'
import React from 'react'
import ReportPool from './ReportPool'

const Report = () => {
  return (
    <div className='w-full h-full min-h-screen bg-[#e5ffd5] py-10'>
    <div className='w-full max-w-[1360px] mx-auto'>
      <div className='flex flex-wrap justify-center lg:justify-between gap-5 items-center'>
      {
        myRank?.map((rank, i)=>(
          <div className='flex flex-col items-center text-white rounded-md border border-black p-1 px-20 bg-[linear-gradient(90deg,rgba(91,91,172,1)_0%,rgba(113,113,173,1)_50%,rgba(133,133,171,1)_100%)] text-2xl' key={i}>
            <span>{rank?.title}</span>
            <span>{rank?.value}</span>
          </div>
        ))
      }
  </div>

   <div className='flex flex-wrap lg:justify-between justify-center gap-5 text-center  items-center mt-15'>
      {
        myLevel?.map((level, i)=>(
          <div className='flex flex-col items-center text-white rounded-md border border-black p-1 px-30 bg-graydient-level text-3xl' key={i}>
            <span>{level?.title}</span>
            <span>{level?.value}</span>
          </div>
        ))
      }
  </div>
  <ReportPool/>
    </div>
    </div>
  )
}

export default Report
