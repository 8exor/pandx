import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";
import { is } from "@amcharts/amcharts4/core";

import toast from "react-hot-toast";
import TableSkeleton from "./TableSkelton";
import { UserInfoContext } from "@contexts/UserInfoContext";
import useCopyToClipBaord from "@hooks/useCopyToClipBoard";
import { NavLink } from "react-router-dom";

export default function StakingTable({ activeTab, tableConfig }) {
  const { userData, incomeReporting, incomeLoading, incomeRefetch } =
    useContext(UserInfoContext);
  const [isCopied, handleCopy] = useCopyToClipBaord();

  const { data: p2pReport, isLoading: p2pLoading } = useQuery({
    queryKey: ["p2pReport"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS?.p2pReport);
      return data;
    },
  });

  const { data: withdrawalReport, isLoading: withdrawalLoading } = useQuery({
    queryKey: ["withdrawalReport"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS?.withdrawalReport);
      return data;
    },
  });

  const { data: compoundReport, isLoading: compoundLoading } = useQuery({
    queryKey: ["compoundReport"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS?.compoundReport);
      return data;
    },
  });

  const { data: unstakeReport, isLoading: unstakeLoading } = useQuery({
    queryKey: ["unstakeReport"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(REPORTS?.unstakeReport);
      return data;
    },
  });

  const incomeData = incomeReporting?.data?.rows;
  const stakeData = userData?.data?.staking;
  const p2pData = p2pReport?.data?.rows;
  const withdrawalData = withdrawalReport?.data?.rows;
  const compoundData = compoundReport?.data?.rows;
  const unstakeData = unstakeReport?.data?.rows;


  // console.log("what is stake data !!! : ", stakeData===null)

  return (
    <div className="w-full max-w-[1360px] bg-[#E3FFDE] p-4 mt-5  border border-[#6f6fb5] rounded-md">
      <div className="overflow-auto rounded-md scrollbar-custom">
        <table className="w-full ">
          <thead className="sticky top-0 text-black rounded-md ">
           
              {activeTab?.mainTabs === "incomeReports"   ?
               <tr className="w-full flex gap-10 items-center justify-between p-4 px-10  rounded-md  bg-[#ffffff] border-b-5 border-[#befeb2]  ">
              <th className="font-normal text-left w-[30px]">S N</th>
            {  tableConfig[activeTab?.mainTabs][activeTab?.incomeTabs]?.map(
                    (head, index) => (
                      <th className="font-normal text-left w-[130px]" key={index}>
                        {head}
                      </th>
                    )
                  )}
                   <th className="font-normal text-center w-[350px]">Note</th>
                  </tr>

                  :
                  <tr className="w-full flex gap-10 items-center justify-between p-4 px-10  rounded-md  bg-[#ffffff] border-b-5 border-[#befeb2]  ">
              <th className="font-normal text-left w-[50px]">S N</th>

                  {
                 tableConfig[activeTab?.mainTabs].headers?.map(
                    (head, index) => (
                      <th className="font-normal text-left w-[150px]" key={index}>
                        {head}
                      </th>
                    )
                  )}
                  </tr>
}
                
          </thead>

          <tbody className="w-full">
            {activeTab?.mainTabs === "stake" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) :( !stakeData || stakeData?.length === 0 )? (
                  <tr className="flex items-center justify-center w-full mt-5">
                    <td className="w-full text-center">No Data Found</td>
                  </tr>
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-2  px-10 py-1 rounded-md shadow-xl">
                    <td className="text-base font-medium text-left text-black capitalize w-full max-w-[50px]">
                      1
                    </td>
                    <td className="font-medium text-left text-black capitalize w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-left text-black capitalize w-[150px] ">
                      {stakeData?.status ? "true" : "false"}
                    </td>
                    <td className="text-base font-medium text-left text-black capitalize w-[150px] ">
                     
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "unstake" &&
              (unstakeLoading ? (
                <TableSkeleton rows={1} cols={6} />
              ) : (!unstakeData || unstakeData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                <>
                  {unstakeData?.map((unstake, index) => (
                    <tr
                      className="w-full  flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl "
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[50px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {unstake?.created_at
                          ? new Date(unstake?.created_at).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base text-center font-medium text-black capitalize w-[150px] ">
                        {parseFloat(stakeData?.amt_usd || 0)}
                      </td>
                      <td className="text-base text-left font-medium text-black capitalize w-full max-w-[150px] ">
                        Unstaked
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {unstake?.status}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] "></td>
                    </tr>
                  ))}
                </>
              ))}

            {activeTab?.mainTabs === "withdrawal" &&
              (withdrawalLoading ? (
                <TableSkeleton rows={3} cols={5} />
              ) : (!withdrawalData || withdrawalData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                <>
                  {withdrawalData?.map((withdrawal, index) => (
                    <tr
                      className="w-full  flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl "
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[50px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {withdrawal?.created_at
                          ? new Date(
                              withdrawal?.created_at
                            ).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(withdrawal?.amt_usd || 0)}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {withdrawal?.status}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {index + 1 == 1
                          ? parseFloat(withdrawalReport?.data?.total_income)
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </>
              ))}

            {activeTab?.mainTabs === "compound" &&
              (compoundLoading ? (
                <TableSkeleton rows={3} cols={5} />
              ) : (!compoundData || compoundData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                <>
                  {compoundData?.map((compound, index) => (
                    <tr
                      className="w-full  flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl "
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[50px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {compound?.createdAt
                          ? new Date(compound?.createdAt).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(compound?.debit || 0)}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {compound?.status ? "true" : "false"}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] "></td>
                    </tr>
                  ))}
                </>
              ))}

            {activeTab?.mainTabs === "p2p" &&
              (p2pLoading ? (
                <TableSkeleton rows={3} cols={7} />
              ) : (!p2pData || p2pData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                <>
                  {p2pData?.map((p2p, index) => (
                    <tr
                      className="w-full  flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl "
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[50px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {p2p?.created_at
                          ? new Date(p2p?.created_at).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base text-left font-medium text-black capitalize w-full max-w-[150px] ">
                        {p2p?.username}
                      </td>
                      <td className="text-base text-left font-medium text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(p2p?.amount_in_usd || 0)}
                      </td>
                      <td className="text-base text-left font-medium text-black capitalize w-full max-w-[150px] ">
                        {p2p?.username == userData?.data?.username
                          ? "In"
                          : "Out"}
                      </td>
                      <td
                        className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] cursor-pointer"
                      >
                      <NavLink to={import.meta.env.VITE_ENV === "development" ? `https://sepolia.etherscan.io/tx/${p2p?.txn_hash}` : `https://bscscan.com/tx/${p2p?.txn_hash}`} className="font-extrabold" target="_blank">
                        {`${p2p?.txn_hash.substring(
                          0,
                          5
                        )}....${p2p?.txn_hash.substring(59, 64)}`}
                      </NavLink>
                      
                      </td>

                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[150px] ">
                        {(p2p?.status == 0 && "Pending Process") ||
                          (p2p?.status == 1 && "In Process") ||
                          (p2p?.status == 2 && "Complete")}
                      </td>
                      {/* <td className="text-base font-medium text-left text-black capitalize w-full max-w-[120px] ">
                        {stakeData?.note}
                      </td> */}
                    </tr>
                  ))}
                </>
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "DAILY" &&
              (incomeLoading ? (
                <TableSkeleton rows={3} cols={4} />
              ) : (!incomeData || incomeData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {parseFloat(incomeData?.staking?.amt_usd || 0)}
                      </td>
                      <td className="text-sm font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "DIRECT" &&
              (incomeLoading ? (
                <TableSkeleton rows={3} cols={5} />
              ) :(!incomeData || incomeData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.from_username}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full  max-w-[130px] ">
                        {parseFloat(incomeData?.staking?.amt_usd || 0)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "LEVEL" &&
              (incomeLoading ? (
                <TableSkeleton rows={1} cols={6} />
              ) : (!incomeData || incomeData.length === 0)? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl "
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.from_username}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {parseFloat(incomeData?.level)}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {parseFloat(incomeData?.staking?.amt_usd || 0)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "TRIAL" &&
              (incomeLoading ? (
                <TableSkeleton rows={1} cols={4} />
              ) : (!incomeData || incomeData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-left text-black capitalize w-full max-w-[120px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[120px] ">
                        {parseFloat(incomeData?.amount || 0)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "BOOSTX" &&
              (incomeLoading ? (
                <TableSkeleton rows={1} cols={4} />
              ) : (!incomeData || incomeData.length === 0) ? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[130px] ">
                        {parseFloat(incomeData?.amount || 0)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "UNI-POOL" && 
              (incomeLoading ? (
                <TableSkeleton rows={3} cols={5} />
              ) : (!incomeData || incomeData.length === 0)? (
                <tr className="flex items-center justify-center w-full mt-5">
                  <td className="w-full text-center">No Data Found</td>
                </tr>
              ) : (
                incomeData?.map((incomeData, index) => (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-10 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[30px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[130px] ">
                        {incomeData?.username}
                      </td>
                      <td className="text-base font-medium text-left text-black capitalize w-full max-w-[130px] ">
                        {parseFloat(incomeData?.amount || 0)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[350px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                ))
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
