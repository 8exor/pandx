import React from 'react'
import Tokenomics from './TokenomicsChart'
import CustomPieChart from '../../../hooks/PieChart3D'

export default function Chart() {
  return (
    <div className=' relative w-full h-full bg-[#e8ffda]'data-aos="slide-up">
        <h2 className='text-3xl md:text-7xl text-center mb-2'>Tokenomics</h2>
        <p className='text-center text-2xl text-xl lg:mb-5'>100,000,000 $PANDX</p>
      <CustomPieChart/>
    <img className='absolute top-[44%] w-[140px] left-[32%] md:w-[210px] md:left-[38%] lg:left-[40%] xl:left-[44%]' src="/assets/images/chartpanda.svg" alt="" />
    </div>
  )
}



