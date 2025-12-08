import React from 'react'

export default function ReportTable() {

const datas = [];
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
    "Withdrawals"
  ];
  return (
    <div>
       <div
          id="scroll-bar"
          className="w-full mt-8 overflow-x-auto overflow-y-auto max-h-[700px] cursor-pointer "
        >
          <div className="w-full max-w-[100px] min-w-full ">
            {userInfoLoading ? (
              <div className="flex justify-center">
               loading....
              </div>
            ) : (
              <table className="w-full rounded-lg divide-background">
                <thead className="sticky top-0 text-black btn-primary">
                  <tr className="w-full mb-4 text-left text-black rounded-lg">
                    {/* <th className="capitalize text-base font-medium p-5 max-md:w-[150px] flex-[1_1_300]">
                      Sr No
                    </th> */}
                    {tableDataKeys?.map((data, index) => {
                      return (
                        <th
                          className="capitalize text-base font-medium p-5 px-10 max-md:w-[150px] flex-[1_1_300]"
                          key={index}
                        >
                          {data}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {datas?.length == 0 ? (
                    <tr>
                      <td colSpan={9} className="w-full p-10 text-center rounded-lg bg-midgray hover:bg-border-color group/item">No Data Found</td>
                    </tr>
                  ) : (
                    datas?.map(
                      (
                        data,
                        index
                      ) => {
                        return (
                          <tr
                            key={index}
                            className="bg-green-500 rounded-lg bg-midgray hover:bg-border-color group/item"
                          >
                            {/* <td className="capitalize max-md:w-[150px] flex-[1_1_150] text-sm font-normal p-5 py-2 text-white text-left">
                              {index + 1}
                            </td> */}
                            <td
                              onClick={() => updateState(data?.child)}
                              className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left"
                            >
                              {data?.child}
                            </td>
                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              $
                              {Number(
                                data?.child_user?.total_invested
                              )?.toFixed(2)}
                            </td>
                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              {data?.child_user?.stakings[0]?.plan_id ? (
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={
                                      straightSponsorshipReward[
                                        Number(
                                          data?.child_user?.stakings[0]?.plan_id
                                        ) - 1
                                      ]?.icon || ""
                                    }
                                    alt={""}
                                    width={25}
                                    height={25}
                                    className="bg-white p-0.5 w-6 h-6 rounded-sm"
                                  />
                                  <p>
                                    {
                                      straightSponsorshipReward[
                                        Number(
                                          data?.child_user?.stakings[0]?.plan_id
                                        ) - 1
                                      ]?.title?.en
                                    }
                                  </p>
                                </div>
                              ) : (
                                "-"
                              )}
                            </td>

                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              {eliteStatusData[
                                Number(data?.child_user?.rank_id) - 1
                              ]?.rank ?? "-"}
                            </td>
                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              {data?.child_user?.total_directs}
                            </td>

                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-3  text-white text-left">
                              <p className="w-full px-3 py-1 text-center rounded-md cursor-pointer bg-secondary text-background">
                                {data?.child_user?.total_team_business
                                  ? Number(
                                      data?.child_user?.total_team_business
                                    )?.toFixed(2)
                                  : 0}
                              </p>
                            </td>
                            <td className="capitalize flex gap-2 max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              {data?.child_user?.wallet_address?.slice(0, 6)}...
                              {data?.child_user?.wallet_address?.slice(-6)}
                              <span className="invisible group-hover/item:visible">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  className="cursor-pointer"
                                  onClick={() =>
                                    handleCopy(
                                      `${data?.child_user?.wallet_address}`
                                    )
                                  }
                                >
                                  <path
                                    fill="currentColor"
                                    d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"
                                  />
                                  <path
                                    fill="currentColor"
                                    d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"
                                  />
                                </svg>
                              </span>
                            </td>
                            <td className="capitalize max-md:w-[150px] flex-[1_1_300] text-sm font-normal p-5 py-0  text-white text-left">
                              {dateFormate(data?.child_user?.active_date)}
                            </td>
                          </tr>
                        );
                      }
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
    </div>
  )
}
