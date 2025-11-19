import React from 'react'
import DashboardHeader from '../../components/ui/dashboard/DashboardHeader';
import { stakers } from '../../contants';
import Staking from './Staking';

const StakingPage = () => {
    console.log("Inside the staking page")
  return (
    <div className='w-full h-full min-h-screen bg-[#eaffdd]'>
        <DashboardHeader/>
    <div className='w-full flex justify-between max-w-[1360px] mx-auto bg-[linear-gradient(90deg,rgba(165,159,238,1)_0%,rgba(153,145,235,1)_50%,rgba(150,150,224,1)_100%)] p-3 rounded-xl mt-5'>
        {
            stakers.map((users, i)=>(
               <div key={i} className='flex items-center'>
                <img src={users.img} alt="Image" />
                <span>{users.title}</span>
                </div>
        
            ))
        }
    </div>
    <Staking/>
    </div>
  )
}

export default StakingPage;
