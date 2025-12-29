import { myLevel, myRank, taskNote } from "../../constants";
import React, { useContext, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { UserInfoContext } from "@contexts/UserInfoContext";
import { REPORTS } from "@services/panda.api.services";
import axiosInstance from "@utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import TableSkeleton from "@layouts/staking/components/TableSkelton";
import { LoaderIcon } from "react-hot-toast";
import Load from "@hooks/Load";
import MaxCapProgress from "@layouts/staking/components/MaxCapProgress";
import LevelWiseReport from "./LevelWiseReport";

const Report = () => {
  const { userData } = useContext(UserInfoContext);
  const [activeIndex, setActiveIndex] = useState(false);
  const [allTeam, setAllTeam] = useState({
    index: false,
    team: false,
  });
  const [inactiveIndex, setInactiveIndex] = useState(false);

  const [getUserName, setGetUserName] = useState("");
  const [levelUsersData, setLevelUsersData] = useState([]);

  const [showPopUp, setShowPopUp] = useState(false);
  const [dataType, setDataType] = useState(false);
  const [date, setDate] = useState({
    from: null,
    to: null,
  });
  const [rank, setRank] = useState("");
  const [history, setHistory] = useState([]);

  const {
    data: profileData,
    isLoading: profileLoading,
    error: profileError,
    refetch : profileRefecth
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`${REPORTS?.profile}?username=${getUserName}`);
      return data;
    },
  });

  const {
    data: teamData,
    isLoading: teamLoading,
    error: teamError,
    refetch : teamRefetch
  } = useQuery({
    queryKey: ["teamData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `${REPORTS?.teamInfo}?username=${getUserName}&rank=${rank}&date_from=${date?.from}&date_to=${date?.to}`
      );
      return data;
    },
  });

  const { data: levelData, isLoading: levelLoading, refetch : levelRefetch } = useQuery({
    queryKey: ["levelData", ],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`${REPORTS?.LevelReport}?username=${getUserName}&rank=${rank}&date_from=${date?.from}&date_to=${date?.to}`);
      return data;
    },
  });

  const { data: levelWiseData, isLoading: levelWiseLoading, refetch : levelWiseRefetch } = useQuery({
    queryKey: ["levelWiseData"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`${REPORTS?.levelWiseReport}?username=${getUserName}&rank=${rank}&date_from=${date?.from}&date_to=${date?.to}`);
      return data.data;
    },
  });

  const reportPool = [
    {
      title: "Self Vol",
      value: `$${
        (profileData &&
          parseFloat(
            parseFloat(profileData?.data?.total_invested).toFixed(2)
          )) ||
        0
      }`,
    },
    {
      title: "Rank",
      value: ` ⭐${
        (profileData && Number(profileData?.data?.rank_id).toFixed(0)) || 0
      }`,
    },
    {
      title: "Directs",
      value: `${
        (profileData && Number(profileData?.data?.total_directs).toFixed(0)) ||
        0
      }`,
    },
    {
      title: "Direct Vol",
      value: `$${
        (teamData && Number(profileData?.data?.direct_business).toFixed(0)) || 0
      }`,
    },
    {
      title: "Direct Reward",
      value: `$${
        (profileData &&
          parseFloat(
            parseFloat(profileData?.data?.direct_income)?.toFixed(2)
          )) ||
        0
      }`,
    },
    {
      title: "Total Team",
      value: `${
        (teamData && Number(profileData?.data?.total_team).toFixed(0)) || 0
      }`,
    },
    {
      title: "Total Team Vol",
      value: `$${
        (teamData && Number(profileData?.data?.total_business).toFixed(0)) || 0
      }`,
    },
    {
      title: "Level Open",
      value: `${
        (profileData &&
          parseFloat(
            parseFloat(profileData?.data?.eligible_level).toFixed(2)
          )) ||
        0
      }`,
    },
    {
      title: "Level Reward",
      value: `$${
        (profileData &&
          parseFloat(parseFloat(profileData?.data?.level_income).toFixed(2))) ||
        0
      }`,
    },
    {
      title: "UNI-Pool Reward",
      value: `$${
        (profileData &&
          parseFloat(parseFloat(profileData?.data?.uni_income).toFixed(2))) ||
        0
      }`,
    },
    {
      title: `Capping`,
      value: `${
        (profileData &&
          parseFloat(
            parseFloat(
              (profileData?.data?.used_capping /
                profileData?.data?.total_capping) *
                100
            ).toFixed(2)
          )) ||
        0
      }%`,
    },
    {
      title: "Total Gain",
      value: `$${
        (profileData && Number(profileData?.data?.total_income)) || 0
      }`,
    },
  ];

  const userInfoLoading = false;
  const tableDataKeys = [
    "Level",
    "Active",
    "In-Active",
    "Stake Vol",
    "Level Reward",
    "Total Level Reward",
  ];

  const levels = [
    {
      level: 1,
      levelReward: "20%",
    },
    {
      level: 2,
      levelReward: "10%",
    },
    {
      level: 3,
      levelReward: "10%",
    },
    {
      level: 4,
      levelReward: "10%",
    },
    {
      level: 5,
      levelReward: "10%",
    },
    {
      level: 6,
      levelReward: "5%",
    },
    {
      level: 7,
      levelReward: "5%",
    },
    {
      level: 8,
      levelReward: "5%",
    },
    {
      level: 9,
      levelReward: "5%",
    },
    {
      level: 10,
      levelReward: "5%",
    },
    {
      level: 11,
      levelReward: "2%",
    },
    {
      level: 12,
      levelReward: "2%",
    },
    {
      level: 13,
      levelReward: "2%",
    },
    {
      level: 14,
      levelReward: "2%",
    },
    {
      level: 15,
      levelReward: "2%",
    },
  ];

  let apiLevel = levelData?.data ? levelData?.data : [];

  const tableLevel = apiLevel.map((el) => {
    el.level_reward = levels[el.level - 1].levelReward;
    return el;
  });

  const allTeamData = levelWiseData?.allUsers;

  // const tableLevel = [...levels, ...apiLevel];

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
    <div className="w-full h-full min-h-screen bg-[#e5ffd5] p-2">
      <div className="w-full max-w-[1360px] mx-auto text-xl">
        <div className="w-full max-w-[1360px] mx-auto  flex items-center justify-center gap-2 p-3">
          <span className="blink-text">{taskNote?.title}</span>
          <marquee behavior="alternate" scrollamount="10" direction="">
            {taskNote?.des}
          </marquee>
        </div>

        <div className="bg-[#efffe3] border-2 border-[#5b5bac] rounded-md mt-10 p-7 px-1 xl:px-11">
          <div className="grid items-center justify-between grid-cols-2 gap-5 text-sm md:text-xl lg:text-sm md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2">
            {reportPool?.map((pool, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-[#c4ffa1] p-2  border border-[#68a12b] rounded-md shadow"
              >
                <span>{pool?.title != "Capping" ? pool.title : `${pool.title}${(profileData?.data?.rank_id >0 && profileData?.data?.rank_id<=2) && "(2X)" || (profileData?.data?.rank_id >=3) && "(3X)"}`}</span>
                {pool?.value ? (
                  <span>{pool?.title != "Capping" && pool?.value}</span>
                ) : (
                  <Load />
                )}
                {pool?.title == "Capping" && (
                  <div className="mt-2">
                    <MaxCapProgress
                      maxCap={false}
                      value={pool?.title == "Capping" && pool?.value}
                      percent={pool?.title == "Capping" && pool?.value}
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="p-2 px-5  border  border-[#68a12b] rounded-md shadow bg-[#c4ffa1] btn-primary lg:col-start-1 lg:row-start-3 col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-center "  onClick={() => {
                              setShowPopUp(true),
                                setLevelUsersData(
                                 allTeamData
                                ),
                                // setInactiveIndex(index);
                              setAllTeam({...allTeam, team : true})}} >
         
             <span>All Team</span>
             <span>{allTeamData?.length || 0}</span>
       
            </div>

            <div className="p-4 md:p-2 lg:p-4 px-5  border  border-[#68a12b] rounded-md shadow bg-[#c4ffa1] lg:col-start-3 lg:row-start-3 col-span-2 md:col-span-1 lg:col-span-2 text-center">
              Primary Team Volume 40%
            </div>

            <div className="p-4 md:p-2 px-5 lg:p-4 rounded-md border border-[#68a12b] shadow bg-[#c4ffa1] lg:col-start-5 lg:row-start-3 col-span-2 md:col-span-1 lg:col-span-2 text-center">
              Combined Team Volume 60%
            </div>

            {/* <button
              className="p-4 px-5 rounded-md border border-black bg-[#c4ffa1] lg:col-start-2 lg:row-start-4 col-span-2 md:col-span-1"
              onClick={() => goBack()}
            >
              Back
            </button> */}

         
              <input type="text" className="col-span-2 p-4 px-5 text-center border border-gray-300 rounded-md lg:col-start-2 lg:row-start-4 md:col-span-1 lg:col-span-1" placeholder="Search Username" value={getUserName} onChange={(e)=>setGetUserName(e.target.value)} />
       

            <DatePicker
              value={date?.from}
              onChange={(newValue) => setDate({ ...date, from: newValue })}
              label="From Date"
              className="lg:col-start-3 lg:row-start-4 "
              format="DD/MM/YYYY"
            />
            <DatePicker
              value={date?.to}
              onChange={(newValue) => setDate({ ...date, to: newValue })}
              label="To Date"
              className="lg:col-start-4 lg:row-start-4"
              format="DD/MM/YYYY"
            />

            {/* <button
              className="p-4 px-2 rounded-md border border-black bg-[#c4ffa1] lg:col-start-5 lg:row-start-4 col-span-2 md:col-span-1"
              onClick={() => {
                setGetUserName("");
                setDate({
                  from: null,
                  to: null,
                });
                setRank("");
              }}
            >
              Reset
            </button> */}

            <div className="col-span-2 mx-auto md:col-start-2 lg:col-start-3 lg:row-start-5 md:col-span-1 lg:col-span-2">
              <button className="p-4 px-20 rounded-md border border-black bg-[#c4ffa1] btn-primary" onClick={()=>{teamRefetch();levelRefetch();levelWiseRefetch();profileRefecth()}}>
                submit
              </button>
            </div>
          </div>
        </div>

        <div
          id="scroll-bar"
          className="w-full   overflow-auto custom-scrollbar scroll-smooth  max-h-[700px] cursor-pointer mt-10  "
        >
          <div className="  w-full max-w-[100px] min-w-full ">
            {userInfoLoading ? (
              <div className="flex justify-center">loading....</div>
            ) : (
              <table className="w-full border-collapse rounded-lg">
                <thead className="sticky top-0 text-black ">
                  <tr className="flex justify-between w-full text-left text-black rounded-lg btn-primary">
                    {tableDataKeys?.map((data, index) => {
                      return (
                        <th
                          className={`capitalize text-center font-medium p-5  ${
                            data === "Total Level Reward"
                              ? "w-[250px]"
                              : " w-[180px]"
                          }`}
                          key={index}
                        >
                          {data}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="flex flex-col mt-2 space-y-1 overflow-y-auto flex-nowrap">
                  {levelLoading ? (
                    <TableSkeleton rows={3} cols={8} />
                  ) : !tableLevel ||  tableLevel?.length == 0 ? (
                    <tr className="mx-auto text-center ">
                      <td
                        colSpan={9}
                        className="w-full p-10 rounded-lg bg-midgray hover:bg-border-color group/item"
                      >
                        No Data Found
                      </td>
                    </tr>
                  ) : (
                    tableLevel?.map((data, index) => {
                      return (
                        <tr
                          key={data?.level}
                          className="rounded-lg  hover:bg-border-color bg-[#c4ffa1]  group/item flex gap-2 justify-between items-center shadow"
                        >
                          <td className="capitalize w-full md:max-w-[180px] text-sm font-normal px-5   text-black text-center">
                            {data?.level}
                          </td>
                          <td
                            className={` w-full md:max-w-[180px] text-center  text-sm font-normal  text-black capitalize `}
                          >
                            <span
                              className={`p-2 py-1 border-2 border-black rounded-md ${
                                activeIndex === index &&
                                "bg-[#6ba632] text-white"
                              } `}
                              onClick={() => {
                                setShowPopUp(true),
                                  setLevelUsersData(
                                    levelWiseData.active_users[data?.level]
                                  ),
                                  setDataType("Active");
                                setActiveIndex(index);
                                setAllTeam({ ...allTeam, team: false });
                              }}
                            >
                              {data?.active_users} VIEW
                            </span>
                          </td>
                          <td
                            className={`capitalize w-full md:max-w-[180px] text-sm font-normal   text-black text-center `}
                          >
                            <span
                              className={`p-2 py-1 border-2 border-black rounded-md ${
                                inactiveIndex === index &&
                                "bg-[#6ba632] text-white"
                              }`}
                              onClick={() => {
                                setShowPopUp(true),
                                  setLevelUsersData(
                                    levelWiseData.inactive_users[data?.level]
                                  ),
                                  setInactiveIndex(index);
                                setDataType("Inactive");
                                setAllTeam({ ...allTeam, team: false });
                              }}
                            >
                              {data?.inactive_users} VIEW
                            </span>
                          </td>
                          {/* <td
                            className={`capitalize w-full md:max-w-[180px] text-sm font-normal  text-black text-center $`}
                           
                          >
                            <span className={`p-2 py-1 border-2 border-black rounded-md ${
                              inactiveIndex === index &&
                              "bg-[#6ba632] text-white"
                            }`}  onClick={() => {
                              setShowPopUp(true),
                                setLevelUsersData(
                                 allTeamData
                                ),
                                // setInactiveIndex(index);
                              setAllTeam({...allTeam, index : index, team : true})
                            }}>
                             {allTeamData?.length} VIEW
                            </span>
                          </td> */}
                          <td className="capitalize w-full md:max-w-[180px] text-sm font-normal p-5 py-2   text-black text-center">
                            ${" "}
                            {parseFloat(
                              parseFloat(data?.stake_amount).toFixed(2)
                            )}
                          </td>
                          <td className="capitalize w-full md:max-w-[180px] text-sm font-normal p-5 py-2   text-black text-center">
                            {data?.level_reward}
                          </td>
                          <td className="capitalize w-full md:max-w-[250px] text-sm font-normal p-5 py-2   text-black text-center">
                            $ {parseFloat(parseFloat(data?.income).toFixed(2))}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {showPopUp && (
          <LevelWiseReport
            data={levelUsersData}
            type={dataType}
            setShowPopUp={setShowPopUp}
            setActiveIndex={setActiveIndex}
            setInactiveIndex={setInactiveIndex}
            allTeam={allTeam}
            setAllTeam={setAllTeam}
          />
        )}
      </div>
    </div>
  );
};

export default Report;
