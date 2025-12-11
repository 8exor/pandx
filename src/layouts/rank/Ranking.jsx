import Marquee from '@components/Marquee';
import { taskNote } from '@constants/index';
import { UserInfoContext } from '@contexts/UserInfoContext';
import MaxCapProgress from '@layouts/staking/components/MaxCapProgress';
import { REPORTS } from '@services/panda.api.services';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axiosInstance';
import { get } from 'animejs';
import React, { useContext } from 'react';

const Ranking = () => {

    const {userData} = useContext(UserInfoContext);

    const tableHeadings = [
        "Rank",
        "Self STAKING",
        "daily %",
        "directs referrals",
        "level open",
        // "boostx",
        "team",
        "total team",
        "capping",
    ];

    const tableData = [
        {
            rank: 1,
            vol: "$100",
            "daily %": "0.50%",
            directs: "-",
            "current level": "-",
            // boostx: "-",
            teamReq: "-",
            totalTeam: "-",
            capping : "2X",
        },
        {
            rank: 2,
            vol: "$250",
            "daily %": "0.60%",
            directs: "3",
            "current level": "3 Levels",
            // boostx: "right",
            teamReq: "7 ",
            totalTeam: 10,
            capping: "2X",
        },
        {
            rank: 3,
            vol: "$500",
            "daily %": "0.70%",
            directs: 5,
            " current level": "5 Levels",
            // boostx: "cross",
            teamReq: "20",
            totalTeam: 25,
            capping: "3X",
        }
        ,
        {
            rank: 4,
            vol: "$1000",
            "daily %": "0.80%",
            directs: 8,
            "current level": "8 Levels",
            // boostx: "cross",
            teamReq: "62",
            totalTeam: 70,
            capping: "3X",
        },
           {
            rank: 5,
            vol: "$2500",
            "daily %": "0.90%",
            directs: 10,
            "current level": "10 Levels",
            // boostx: "cross",
            teamReq: "115",
            totalTeam: 125,
            capping: "3X",
        },
           {
            rank: 6,
            vol: "$5000",
            "daily %": "1.00%",
            directs: 15,
            "current level": "15 Levels",
            // boostx: "cross",
            teamReq: "185",
            totalTeam: 200,
            capping: "3X",
        }
    ];


    const {data:rankData} = useQuery({
        queryKey : ["rankData"],
        queryFn : async()=>{
            const {data} = await axiosInstance.get(REPORTS?.rankInfo);
            return data;
        }
    })

    // console.log("what is rank infor : ",rankData?.data?.user?.overall_team );
  
    const getNextRank = rankData?.data?.current_rank?.rank + 1;
 


    return (
        <div className="bg-[#F7FFF2] min-h-screen  px-2 py-10">
            <div className='w-full max-w-[1340px] mx-auto  flex items-center justify-center gap-2 p-3 mt-8 text-xl'>
                <span className='blink-text'>{taskNote?.title}</span>
               <marquee behavior="alternate" scrollamount="10" direction="">
              {taskNote?.des}
              </marquee>
            </div>
            <div className="w-full max-w-[1340px] bg-[#E6FFD5] m-auto border border-black rounded-xl overflow-hidden mt-5">

                {/* DESKTOP TABLE */}
                <div className="hidden w-full overflow-x-auto md:block">
                    <table className="w-full border-collapse">

                        <thead className="bg-[linear-gradient(90deg,rgba(191,254,175,1)_0%,rgba(194,255,166,1)_50%,rgba(196,255,160,1)_100%)]">
                            <tr className="w-full border-b-2 border-black ">
                                {tableHeadings.map((heading, index) => (
                                    <th
                                        key={index}
                                        className="px-5 py-2 text-[18px] uppercase text-black text-center font-[Russo One] lg:max-w-20 md:max-w-40"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((row, rowIndex) => (
                                <tr className='' key={rowIndex}>
                                    {Object.entries(row).map(([key, value], cellIndex) => (
                                        <td key={cellIndex} className="p-1 ">
                                            <div className="mx-2 my-2 p-2  border border-black shadow rounded-md 
                                                text-center flex justify-center items-center gap-2 
                                                hover:bg-green-200 font-[Lato] font-bold">
                                                 
                                                {key !== "capping" ? (
                                                    <>

                                              
                                                       { key === "rank" && <img src="./assets/images/star 1.svg" alt="star" className="w-4 h-4" />}
                                                        <span>{value}</span>
                                                    {((key === "rank" || key ==="daily %" || key === "current level" ) && row.rank ==rankData?.data?.current_rank?.rank)  && <img src="/assets/images/check 1.svg" className='w-6' alt="check" />  }
                                                    
                                                      {(key=="vol" && rankData?.data?.user?.total_invested >= value.slice(1) ) && <img className='w-6' src="/assets/images/check 1.svg" alt="check" /> }

                                                       {(key=="directs" && rankData?.data?.user?.total_directs >= (parseInt(value)||0)) ? <img className='w-6 '  src="/assets/images/check 1.svg" alt="check" />
                                                            :
                                                            ( key=="directs" && rowIndex == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                        }

                                                         {(key=="teamReq" && rankData?.data?.user?.total_team >= (parseInt(value)||0)) ? <img className='w-6'  src="/assets/images/check 1.svg" alt="check" /> 
                                                         :
                                                           ( key=="teamReq" && rowIndex == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                        }

                                                          {(key=="totalTeam" && rankData?.data?.user?.overall_team >= (parseInt(value)||0)) ? <img className='w-6'  src="/assets/images/check 1.svg" alt="check" />
                                                          :
                                                          ( key=="totalTeam" && rowIndex == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                        }
                                                    </>
                                                ) :  (

                                                 <div className='flex items-center gap-2' >
                                                    {value}
                                                    {key === "capping" && <MaxCapProgress maxCap={false} value={userData?.data?.used_capping}/>}
                                                 </div>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* MOBILE CARD VIEW */}
                <div className="p-3 space-y-4 md:hidden">
                    {tableData.map((row, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white border border-black shadow rounded-xl"
                        >
                            {Object.entries(row).map(([key, value], i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between py-1 border-b last:border-none"
                                >
                                    <span className="text-sm font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>

                                    <span className="flex items-center gap-1 text-sm">
                                       {key !== "capping" ? (
                                                    <>
                                                       { key === "rank" && <img src="./assets/images/star 1.svg" alt="star" className="w-4 h-4" />}
                                                        <span>{value}</span>
                                                    {((key === "rank" || key ==="daily %" || key === "current level" ) && row.rank ==rankData?.data?.current_rank?.rank)  && <img src="/assets/images/check 1.svg" className='w-6' alt="check" />  }
                                                    
                                                      {(key=="vol" && rankData?.data?.user?.total_invested >= value.slice(1) ) && <img className='w-6' src="/assets/images/check 1.svg" alt="check" /> }

                                                       {(key=="directs" && rankData?.data?.user?.total_directs >= (parseInt(value)||0)) ? <img className='w-6'  src="/assets/images/check 1.svg" alt="check" />
                                                       :
                                                            ( key=="directs" && index == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                    }

                                                         {(key=="teamReq" && rankData?.data?.user?.total_team >= (parseInt(value)||0)) ? <img className='w-6'  src="/assets/images/check 1.svg" alt="check" />
                                                         :
                                                           ( key=="teamReq" && index == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                         }

                                                          {(key=="totalTeam" && rankData?.data?.user?.overall_team >= (parseInt(value)||0)) ? <img className='w-6'  src="/assets/images/check 1.svg" alt="check" />
                                                          :
                                                             ( key=="totalTeam" && index == rankData?.data?.current_rank?.rank) &&
                                                        <img className='w-6 '  src="/assets/images/cancel 1.svg" alt="" />
                                                        }
                                                    </>
                                                ) :  (

                                                 <div className='flex items-center gap-2' >
                                                    {value}
                                                    {key === "capping" && <MaxCapProgress maxCap={false} value={userData?.data?.used_capping}/>}
                                                 </div>
                                                )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Ranking;