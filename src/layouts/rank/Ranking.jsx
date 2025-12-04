import React from 'react';

const Ranking = () => {

    const tableHeadings = [
        "Rank",
        "Self VOL",
        "max cap",
        "daily %",
        "directs",
        "current level",
        "boostx",
        "team req",
        "total team"
    ];

    const tableData = [
        {
            rank: 1,
            vol: "$50",
            maxCap: "x2",
            "daily %": "0.50%",
            directs: "-",
            "  current level": "-",
            boostx: "-",
            teamReq: "-",
            totalTeam: "-"
        },
        {
            rank: 2,
            vol: "$250",
            maxCap: "x2",
            "daily %": "0.60%",
            directs: "3",
            " current level": "Level 3",
            boostx: "right",
            teamReq: 7,
            totalTeam: 10
        },
        {
            rank: 3,
            vol: "$500",
            maxCap: "x3",
            "daily %": "0.70%",
            directs: 5,
            " current level": "Level 5",
            boostx: "cross",
            teamReq: 20,
            totalTeam: 25
        }
        ,
        {
            rank: 4,
            vol: "$1000",
            maxCap: "x3",
            "daily %": "0.80%",
            directs: 8,
            " current level": "Level 10",
            boostx: "cross",
            teamReq: 50,
            totalTeam: 58
        },
           {
            rank: 5,
            vol: "$2500",
            maxCap: "x3",
            "daily %": "0.90%",
            directs: 12,
            " current level": "Level 12",
            boostx: "cross",
            teamReq: 75,
            totalTeam: 87
        },
           {
            rank: 6,
            vol: "$5000",
            maxCap: "x3",
            "daily %": "1.00%",
            directs: 15,
            "current level": "Level 15",
            boostx: "cross",
            teamReq: 135,
            totalTeam: 150
        }
    ];

    return (
        <div className="bg-[#F7FFF2] min-h-screen py-10 px-2">
            <div className="w-full max-w-[1340px] bg-[#E6FFD5] m-auto border border-black rounded-xl overflow-hidden">

                {/* DESKTOP TABLE */}
                <div className="hidden w-full overflow-x-auto md:block">
                    <table className="w-full border-collapse">

                        <thead className="bg-[linear-gradient(90deg,rgba(191,254,175,1)_0%,rgba(194,255,166,1)_50%,rgba(196,255,160,1)_100%)]">
                            <tr className="border-b-2 border-black">
                                {tableHeadings.map((heading, index) => (
                                    <th
                                        key={index}
                                        className="px-5 py-8 text-[18px] uppercase text-black text-center font-[Russo One]"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.entries(row).map(([key, value], cellIndex) => (
                                        <td key={cellIndex} className="p-1">
                                            <div className="mx-2 my-2 p-2 border border-black shadow rounded-md 
                                                text-center flex justify-center items-center gap-1 
                                                hover:bg-green-200 font-[Lato] font-bold">
                                                {key === "rank" ? (
                                                    <>
                                                        <img src="./assets/images/star 1.svg" alt="star" className="w-4 h-4" />
                                                        <span>{value}</span>
                                                    </>
                                                ) : key === "boostx" ? (
                                                    <img
                                                        src={value === "right"
                                                            ? "/assets/images/check 1.svg"
                                                            : "/assets/images/cancel 1.svg"}
                                                        alt='boostx'
                                                        className='w-8 h-8'

                                                    />
                                                ) : (
                                                    value
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
                                        {key === "rank" ? (
                                            <>
                                                <img src="./assets/images/star 1.svg" alt="star" className="w-4 h-4 " />
                                                {value}
                                            </>
                                        ) : (
                                            value
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