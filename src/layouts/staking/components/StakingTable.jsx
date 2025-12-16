import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";
import { is } from "@amcharts/amcharts4/core";

import toast from "react-hot-toast";
import TableSkeleton from "./TableSkelton";
import { UserInfoContext } from "@contexts/UserInfoContext";

export default function StakingTable({ activeTab, tableConfig }) {
  const { userData, incomeReporting, incomeLoading, incomeRefetch } =
    useContext(UserInfoContext);

  // const { data, incomeLoading } = useQuery({
  //   queryKey: ["incomeReports"],
  //   queryFn: async () => {
  //     const { data } = await axiosInstance.get(
  //       `${REPORTS?.incomeReports}?incomeId=${incomeId}`
  //     );
  //     return data;
  //   },
  // });

  const incomeData = incomeReporting?.data?.rows;
  const stakeData = userData?.data?.staking;

  return (
    <div className="w-full max-w-[1360px] bg-[#E3FFDE] p-4 mt-5  border border-[#6f6fb5] rounded-md">
      <div className="overflow-auto rounded-md scrollbar-custom">
        <table className="w-full ">
          <thead className="sticky top-0 text-black rounded-md ">
            <tr className="w-full flex gap-10 items-center justify-between p-4 px-2  rounded-md  bg-[#ffffff] border-b-5 border-[#befeb2]  ">
              {activeTab?.mainTabs === "incomeReports"
                ? tableConfig[activeTab?.mainTabs][activeTab?.incomeTabs]?.map(
                    (head, index) => (
                      <th className="font-normal w-[150px]" key={index}>
                        {head}
                      </th>
                    )
                  )
                : tableConfig[activeTab?.mainTabs].headers?.map(
                    (head, index) => (
                      <th className="font-normal w-[150px]" key={index}>
                        {head}
                      </th>
                    )
                  )}
            </tr>
          </thead>

          <tbody className="w-full">
            {activeTab?.mainTabs === "stake" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl">
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                      1
                    </td>
                    <td className="font-medium text-center text-black capitalize w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-[150px] ">
                      {stakeData?.status ? "true" : "false"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-[150px] ">
                      {stakeData?.note}
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "unstake" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={6} />
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl">
                    <td className="text-base font-medium text-center text-black capitalize w-[150px]">
                      1
                    </td>
                    <td className="font-medium text-center text-black capitalize w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.status ? "Unstaked" : "Staked"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.status ? "Unstaked" : "Staked"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.note}
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "withdrawal" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl">
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                      1
                    </td>
                    <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.status ? "true" : "false"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.note}
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "compound" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl">
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                      1
                    </td>
                    <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.status ? "true" : "false"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.note}
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "p2p" && (
              <>
                {incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <tr className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl">
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                      1
                    </td>
                    <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.created_at
                        ? new Date(stakeData?.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="text-base text-center font-medium text-black capitalize w-full max-w-[150px] ">
                      {parseFloat(stakeData?.amt_usd || 0)}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.status ? "true" : "false"}
                    </td>
                    <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                      {stakeData?.note}
                    </td>
                  </tr>
                )}
              </>
            )}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "DAILY$" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={4} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.staking?.amt_usd)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "DIRECT" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.from_username}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.staking?.amt_usd)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}

                {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "LEVEL" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={5} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.from_username}
                      </td>
                       <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.level)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.staking?.amt_usd)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}

            {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "TRIAL" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={4} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.amount)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}

                 {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "BOOSTX" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={4} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>

                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.amount)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}

                  {activeTab?.mainTabs === "incomeReports" &&
              activeTab?.incomeTabs === "UNI-POOL" &&
              incomeData?.map((incomeData, index) =>
                incomeLoading ? (
                  <TableSkeleton rows={1} cols={4} />
                ) : (
                  <>
                    <tr
                      className="w-full flex gap-10 items-center justify-between bg-[#befeb2] mt-5  px-4 p-2 rounded-md shadow-xl"
                      key={index}
                    >
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px]">
                        {index + 1}
                      </td>
                      <td className="font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.date
                          ? new Date(incomeData?.date).toLocaleDateString()
                          : "-"}
                      </td>
                        
                          <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {(incomeData?.username)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {parseFloat(incomeData?.amount)}
                      </td>
                      <td className="text-base font-medium text-center text-black capitalize w-full max-w-[150px] ">
                        {incomeData?.note}
                      </td>
                    </tr>
                  </>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
