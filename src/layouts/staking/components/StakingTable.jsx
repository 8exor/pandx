import React from 'react'

export default function StakingTable() {
  return (
    <div className='w-full max-w-[1360px] bg-[#E3FFDE] p-4 mt-5 border border-[#6f6fb5] rounded-md'>
        <div className="overflow-auto rounded-md scrollbar-custom">
            <table className="w-full ">
              <thead className="sticky top-0 text-black rounded-md ">
                <tr className="w-full flex gap-10 items-center justify-between p-4 px-15  rounded-md  bg-[#ffffff] border-b-5 border-[#befeb2]  ">
                  <th className="font-normal">Sr No</th>
                  <th className="font-normal">Date</th>
                  <th className="font-normal">Username</th>
                  <th className="font-normal">Daily $</th>
                  <th className="font-normal">Amt $</th>
                  <th className="font-normal">Note</th>

                </tr>
              </thead>

              <tbody className="w-full">
               
                  <>
                    <tr
                     
                      className="w-full flex gap-10 items-center justify-between bg-[#E6FFD5] mt-5  px-4 p-2 rounded-md shadow-xl"
                    >
                      <td lassName="capitalize text-base font-medium max-sm:w-30 text-white text-left">
                  
                      </td>
                      <td className="font-medium text-left text-black capitalize max-sm:w-30 ">
                    
                      </td>
                      <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                       
                      </td>
                      <td className="text-base font-medium text-black capitalize max-sm:w-30 ">
                    
                      </td>
                    </tr>
                  </>
         
              </tbody>
            </table>
          </div>
    </div>
  )
}
