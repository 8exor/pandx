

import { myLevel, myRank, taskNote } from '../../constants'
import React, { useContext, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { UserInfoContext } from '@contexts/UserInfoContext';
import { REPORTS } from '@services/panda.api.services';
import axiosInstance from '@utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import TableSkeleton from '@layouts/staking/components/TableSkelton';
import { LoaderIcon } from 'react-hot-toast';
import Load from '@hooks/Load';

const Report = () => {
  const {userData} = useContext(UserInfoContext);

  const [getUserName, setGetUserName] = useState("");
  const [date, setDate] = useState({
    from : null,
    to : null
  })
  const [rank, setRank] = useState("");
  const [history, setHistory] = useState([]);

  const {data:profileData, isLoading:profileLoading, error:profileError} = useQuery({
    queryKey : ["profileData"],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS?.profile);
        return data;
    }
})

const {data:teamData, isLoading:teamLoading, error:teamError} = useQuery({
    queryKey: ["teamData",getUserName,rank,date],
    queryFn : async ()=>{

        const {data} = await axiosInstance.get(`${REPORTS?.teamInfo}?username=${getUserName}&rank=${rank}&date_from=${date?.from}&date_to=${date?.to}`);
        return data
;    }
})


    const reportPool = [
  {
    title: "Self Vol",
    value: `${profileData && Number(profileData?.data?.total_invested).toFixed(2) || 0}`,
  },
  {
    title: "Rank",
    value:  ` ⭐${profileData && Number(profileData?.data?.rank_id).toFixed(0) || 0}`,
  },
  {
    title: "Direct",
    value: `${profileData && Number(profileData?.data?.total_directs).toFixed(0) || 0}`,
  },
  {
    title: "Direct Vol",
    value: `${teamData && Number(teamData?.data?.direct_business).toFixed(0) || 0}`
  },
  {
    title: "Direct Reward",
    value: `${profileData && Number(profileData?.data?.direct_income)?.toFixed(2) || 0}`,
  },
  {
    title: "Total Team",
    value: `${teamData && Number(teamData?.data?.total_child).toFixed(0) || 0}`,
  },
  {
    title: "Total Vol",
    value: `${teamData && Number(teamData?.data?.total_business).toFixed(0) || 0}`,
  },
  {
    title: "Level",
    value: `${profileData && Number(profileData?.data?.eligible_level).toFixed(2) || 0}`,
  },
  {
    title: "Level Reward",
    value: `${profileData && Number(profileData?.data?.level_income).toFixed(2) || 0}`,
  },
  {
    title: "UNI-Pool Reward",
    value: `${profileData && Number(profileData?.data?.uni_income).toFixed(2) || 0}`,
  },
  {
    title: "Capping",
    value: `${profileData && Number((profileData?.data?.used_capping/profileData?.data?.total_capping)*100).toFixed(2) || 0}%`,
  },
  {
    title: "Total Gain",
    value: `${profileData && Number(profileData?.data?.total_income) || 0}`,
  },
];

const userInfoLoading = false;
  const tableDataKeys = [
    "username",
    "Self $",
    "Directs",
    "BoostX",
    "Rank",
    // "team vol",
    "Level",
    "Total Team	",
    "Team Vol",
    // "Withdrawals"
  ];

  const updateState = (newState) => {
    setHistory((prev) => [...prev, getUserName]);
    setGetUserName(newState);
  };

    const goBack = () => {
    setHistory((prev) => {
      const newHistory = [...prev];
      const lastState = newHistory.pop();
      if (lastState !== undefined) {
        setGetUserName(lastState);
      }
      return newHistory;
    });
  };



  return (
    <div className='w-full h-full min-h-screen bg-[#e5ffd5] p-2'>
    <div className='w-full max-w-[1360px] mx-auto text-xl'>
        <div className='w-full max-w-[1360px] mx-auto  flex items-center justify-center gap-2 p-3'>
                      <span className='blink-text'>{taskNote?.title}</span>
                     <marquee behavior="alternate" scrollamount="10"  direction="">
                    {taskNote?.des}
                    </marquee>
                  </div>
      
 <div className='bg-[#efffe3] border-2 border-[#5b5bac] rounded-md mt-10 p-7 px-1 xl:px-11'>
     <div className='grid items-center justify-between grid-cols-2 gap-5 text-sm md:text-xl lg:text-sm md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2'>
        {
            reportPool?.map((pool, i)=>(
                <div key={i} className='flex flex-col items-center bg-[#c4ffa1] p-2  border border-[#68a12b] rounded-md shadow'>
                    <span>{pool?.title}</span>
               {pool?.value ?     <span>{pool?.value}</span> : <Load/>}

                </div>
            ))
        }
      
        <button className='p-4 px-5 rounded-md border border-black bg-[#c4ffa1] lg:col-start-2 lg:row-start-3 col-span-2 md:col-span-1' onClick={()=>goBack()}>
            Back
        </button>
   
          <DatePicker value={date?.from} onChange={(newValue)=>setDate({...date, from : newValue})} label = "From Date" className='lg:col-start-3 lg:row-start-3 '   format="DD/MM/YYYY"/>
          <DatePicker value={date?.to} onChange={(newValue)=>setDate({...date, to :newValue})} label = "To Date" className='lg:col-start-4 lg:row-start-3'  format="DD/MM/YYYY"/>
       
       
        <button className='p-4 px-2 rounded-md border border-black bg-[#c4ffa1] lg:col-start-5 rlg:ow-start-3 col-span-2 md:col-span-1'onClick={() => {
              setGetUserName("");
              setDate({
                from: null,
                to: null,
              });
              setRank("");
            }}>Reset</button>
     </div>

 
    </div>

   <div
          id="scroll-bar"
          className="w-full  py-10 overflow-x-auto overflow-y-auto max-h-[700px] cursor-pointer "
        >
          <div className="w-full max-w-[100px] min-w-full ">
            {userInfoLoading ? (
              <div className="flex justify-center">
               loading....
              </div>
            ) : (
              <table className="w-full rounded-lg divide-background">
                <thead className="sticky top-0 text-black ">
                  <tr className="flex justify-between w-full text-left text-black rounded-lg btn-primary">
                    {tableDataKeys?.map((data, index) => {
                      return (
                        <th
                          className="capitalize text-center font-medium p-5 w-[160px]"
                          key={index}
                        >
                          {data}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              { !teamLoading ? <tbody  className="flex flex-col mt-5 space-y-4 flex-nowrap">
                  {teamData?.data?.child?.length == 0 ? (
                    <tr className='mx-auto text-center '>
                      <td colSpan={9} className="w-full p-10 rounded-lg bg-midgray hover:bg-border-color group/item">No Data Found</td>
                    </tr>
                  ) : (
                    teamData?.data?.child?.map(
                      (
                        data,
                        index
                      ) => {
                        return (
                          <tr
                            key={index}
                            className="rounded-lg  hover:bg-border-color bg-[#c4ffa1]  group/item flex justify-between items-center shadow"
                          >
                            <td
                              onClick={() => updateState(data?.child)}
                              className="capitalize w-full md:max-w-[150px] text-sm font-normal p-5 py-2   text-black text-center"
                            >
                              {data?.child}
                            </td>
                            <td className="capitalize w-full md:max-w-[150px] text-sm font-normal p-5 py-2 text-black text-center">
                              $
                              {Number(
                                data?.child_user?.total_invested
                              )?.toFixed(2)}
                            </td>
                            <td className="capitalize w-full max-w-[150px] text-sm font-normal p-5 py-2 text-black text-center">
                              {data?.child_user?.total_directs}
                            </td>
                               <td className="capitalize w-full md:max-w-[150px]  text-sm font-normal p-5 py-0  text-black text-center">
                              {data?.child_user?.booster_income}
                            </td>
                             <td className="capitalize w-full md:max-w-[150px] text-sm font-normal p-5 py-0  text-black text-center">
                              {data?.child_user?.rank_id}
                            </td>
                            <td className="capitalize w-full md:max-w-[150px]  text-sm font-normal p-5 py-0  text-black text-center">
                              {data?.child_user?.eligible_level}
                            </td>
                              <td className="capitalize w-full md:max-w-[150px]  text-sm font-normal p-5 py-0  text-black text-center">
                              {data?.child_user?.total_team}
                            </td>
                            <td className="capitalize w-full md:max-w-[150px] text-sm font-normal p-5 py-3  text-black text-center">
                              <p className="w-full px-3 py-1 text-center rounded-md cursor-pointer bg-secondary text-background">
                                {data?.child_user?.total_team_business
                                  ? Number(
                                      data?.child_user?.total_team_business
                                    )?.toFixed(2)
                                  : 0}
                              </p>
                            </td>
                          </tr>
                        );
                      }
                    )
                  )}
                </tbody>
                :
                <tbody>
                
                {/* <TableSkeleton rows={4} cols={8}/> */}
                </tbody>
                }
              </table>
            )}
          </div>
        </div>


    </div>
    </div>
  )
}

export default Report
