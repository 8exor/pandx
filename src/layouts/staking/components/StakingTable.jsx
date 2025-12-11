import React, { useContext } from 'react'
  import {useQuery} from "@tanstack/react-query"
  import axiosInstance from '@utils/axiosInstance'
  import { REPORTS } from '@services/panda.api.services'
import { is } from '@amcharts/amcharts4/core'

import toast from 'react-hot-toast'
import TableSkeleton from './TableSkelton'
import { UserInfoContext } from '@contexts/UserInfoContext'

export default function StakingTable({activeTab, tableConfig}) {
const {userData} = useContext(UserInfoContext);


     const {data, isLoading} = useQuery({
        queryKey : ["incomeReports"],
        queryFn : async()=>{
            const {data} = await axiosInstance.get(`${REPORTS?.incomeReports}?incomeId=${1}`)
            return data;
        },
        // throwOnError : (error)=>{
        //       toast.error(error)
        // }
    })
  

const incomeData =  data?.data?.rows ;
const stakeData = userData?.data?.staking;


  return (
    <div className='w-full max-w-[1360px] bg-[#E3FFDE] p-4 mt-5 border border-[#6f6fb5] rounded-md'>
    
        <div className="overflow-auto rounded-md scrollbar-custom">
            <table className="w-full ">
              <thead className="sticky top-0 text-black rounded-md ">
                <tr className="w-full flex gap-10 items-center justify-between p-4 px-15  rounded-md  bg-[#ffffff] border-b-5 border-[#befeb2]  ">
                  {/* <th className="font-normal">Sr No</th>
                  <th className="font-normal">Date</th>
                  <th className="font-normal">Username</th>
                  <th className="font-normal">Daily $</th>
                  <th className="font-normal">Amt $</th>
                  <th className="font-normal">Note</th> */}

                {activeTab?.mainTabs === "incomeReports"?
                
               tableConfig[activeTab?.mainTabs][activeTab?.incomeTabs]?.map((head, index)=>
                 <th className="font-normal" key={index}>{head}</th>
                )
                :
                tableConfig[activeTab?.mainTabs].headers?.map((head, index)=>
                 <th className="font-normal" key={index}>{head}</th>
                )}
                 
                </tr>
              </thead>

              <tbody className="w-full">
               
              { 
             (activeTab?.mainTabs === "incomeReports" && activeTab?.incomeTabs === "DAILY$" ) &&
                incomeData?.map((incomeData, index)=>
                  !isLoading ?
                 <>
                    <tr
                     
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize max-sm:w-30">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize max-sm:w-30 ">
                    {/* {new Date(incomeData?.date)} */} "date"
                      </td>
                      {/* <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                       {incomeData?.username}
                      </td> */}
                      <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                        "1.5 "
                      </td>
                        <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                        {incomeData?.staking?.amt_usd}
                      </td>
                        <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                  :
                  <TableSkeleton/>
                )}
         
              </tbody>
            </table>
          </div>
    </div>
  )
}
