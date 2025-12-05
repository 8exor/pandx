

import { myLevel, myRank } from '../../constants'
import React from 'react'
import ReportPool from './ReportPool'
import ReportTable from './ReportTable'

const Report = () => {
  return (
    <div className='w-full h-full min-h-screen bg-[#e5ffd5] py-10'>
    <div className='w-full max-w-[1360px] mx-auto'>
      <div className='grid items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:justify-between border-2 py-7 border-[#5b5bac] rounded-md'>
      {
        myRank?.map((rank, i)=>(
          <div className='w-full max-w-[250px]  flex flex-col items-center mx-auto text-white rounded-md border border-black p-1 px-15 bg-[linear-gradient(90deg,rgba(91,91,172,1)_0%,rgba(113,113,173,1)_50%,rgba(133,133,171,1)_100%)] btn-purple  text-2xl' key={i}>
            <span>{rank?.title}</span>
            <span>{rank?.value}</span>
          </div>
        ))
      }
  </div>

   {/* <div className='flex flex-wrap items-center justify-center gap-5 mt-10 text-center lg:justify-between'>
      {
        myLevel?.map((level, i)=>(
          <div className='flex flex-col items-center gap-1 text-3xl text-white border border-black rounded-md px-15 bg-graydient-level btn-primary' key={i}>
            <span>{level?.title}</span>
            <span>{level?.value}</span>
          </div>
        ))
      }
  </div> */}
  <ReportPool/>
  <ReportTable/>
    </div>
    </div>
  )
}

export default Report
