import React from 'react'
import Tokenomics from './TokenomicsChart'
import CustomPieChart from '../../../hooks/PieChart3D'

export default function Chart() {
  return (
    <div className=' relative w-full h-full bg-[#e8ffda]'>
        <h2 className='text-3xl md:text-7xl text-center mb-5'>Tokenomics</h2>
      <CustomPieChart/>
    <img className='absolute top-50 w-[140px] left-[32%] md:w-[210px] md:left-[38%] lg:left-[40%] xl:left-[43%] 2xl:left-[44%]' src="/assets/images/chartpanda.svg" alt="" />
    </div>
  )
}
