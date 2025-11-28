

import { myLevel, myRank } from '../../constants'
import React from 'react'
import ReportPool from './ReportPool'

const Report = () => {
  return (
    <div className='w-full h-full min-h-screen bg-[#e5ffd5] py-10'>
    <div className='w-full max-w-[1360px] mx-auto'>
      <div className='flex flex-wrap items-center justify-center gap-5 lg:justify-between'>
      {
        myRank?.map((rank, i)=>(
          <div className='w-full max-w-xs  flex flex-col items-center text-white rounded-md border border-black p-1 px-20 bg-[linear-gradient(90deg,rgba(91,91,172,1)_0%,rgba(113,113,173,1)_50%,rgba(133,133,171,1)_100%)] text-2xl' key={i}>
            <span>{rank?.title}</span>
            <span>{rank?.value}</span>
          </div>
        ))
      }
  </div>

   <div className='flex flex-wrap items-center justify-center gap-5 text-center lg:justify-between mt-15'>
      {
        myLevel?.map((level, i)=>(
          <div className='flex flex-col items-center gap-5 p-1 px-20 text-3xl text-white border border-black rounded-md bg-graydient-level' key={i}>
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
