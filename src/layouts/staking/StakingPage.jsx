import React from 'react';
import Staking from './Staking';
import { stakers } from '@constants/index';
import { useQuery } from "@tanstack/react-query";
import { AUTH, REPORTS } from '@services/panda.api.services';
import axiosInstance from '@utils/axiosInstance';

const StakingPage = () => {
  console.log("Inside the staking page");

  const {data} = useQuery({
    queryKey : ["dashboarData"],
    queryFn : async()=>{
    const {data} = await axiosInstance.get(REPORTS.dashboardData);
    return data?.data;
    }
  })
  console.log(data);




  return (
    <>
    <div className='sm:w-full h-full min-h-screen bg-[#eaffdd] py-5'>

      {/* Stakers section */}
      <div className='sm:w-full flex flex-wrap gap-4 justify-between max-w-[1360px] sm:mx-auto mx-2  
                      bg-[linear-gradient(90deg,rgba(165,159,238,1)_0%,rgba(153,145,235,1)_50%,rgba(150,150,224,1)_100%)] 
                      p-3 rounded-xl'>
        {stakers.map((user, index) => (
          <div 
            key={user.id + user.title} 
            className='flex flex-col sm:flex-row items-center sm:items-center px-3 py-2 gap-2 w-full sm:w-auto rounded-lg'
          >
            <img 
              src={user.img} 
              alt={user.title} 
              className='w-12 h-12 sm:w-8 sm:h-8 object-cover'
            />
         
           <span className='text-black text-center sm:text-left'>{`${user.title} ${Object.values(data ||{})[index]}`}</span>
         
            
          </div>
        ))}
      </div>

      <Staking />
    </div>
    </>
  );
}

export default StakingPage;
