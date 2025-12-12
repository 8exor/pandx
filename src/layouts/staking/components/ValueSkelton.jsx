import React from 'react'

export const ValueSkelton = () => {
  return (
    <>
        <div
            className="relative mt-10 w-full max-w-[1360px] bg-[#49498A] p-8 pb-5 rounded-t-xl text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]
                flex flex-wrap justify-center md:flex-nowrap md:justify-between gap-2 text-center md:text-left "
          >
          <div className='ml-[10px] ml-50'/>
            <img className='absolute lg:left-[15px] left-[0px] top-[-30px] lg:top-[-40px] sm:top-[-28px] md:w-[80px] lg:w-[80px]   w-[90px] left-0' src="/assets/images/gift.svg" alt="gift" />
           <div className="grid sm:grid-cols-3  lg:grid-cols-5 gap-4">
      <p className='left-text-center'>Trial Bonus $ <span className='h-[8px] w-[10px] bg-gray-500'></span></p>
      <p className='left-text-center'>My Stake <span className='h-[8px] w-[10px] bg-gray-500'></span></p>
      
      <p className='left-text-center'>Daily 0.5%</p>
      <p className='left-text-center'>Dailyddf $0.5</p>
    </div>
            <div/>
          </div>
          </>
  )
}






