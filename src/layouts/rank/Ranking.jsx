import React from 'react';

const Ranking = () => {

    const tableHeadings = [
        "Rank",
        "Self VOL",
        "max cap",
        "daily yield",
        "directs",
        "level open",
        "team req",
        "total team"
    ];

    const tableData = [
        {
            rank: 1,
            vol: "$200",
            maxCap: 5000,
            dailyYield: "7%",
            directs: 3,
            levelOpen: "Level 2",
            teamReq: 100,
            totalTeam: 250
        },
        {
            rank: 2,
            vol: "$300",
            maxCap: 7000,
            dailyYield: "8%",
            directs: 4,
            levelOpen: "Level 3",
            teamReq: 150,
            totalTeam: 350
        },
        {
            rank: 3,
            vol: "$300",
            maxCap: 7000,
            dailyYield: "8%",
            directs: 4,
            levelOpen: "Level 3",
            teamReq: 150,
            totalTeam: 350
        }
        ,
        {
            rank: 4,
            vol: "$300",
            maxCap: 7000,
            dailyYield: "8%",
            directs: 4,
            levelOpen: "Level 3",
            teamReq: 150,
            totalTeam: 350
        }
    ];

    return (
        <div className="bg-[#F7FFF2] min-h-screen py-10 px-2">
            <div className="w-full max-w-[1340px] bg-[#E6FFD5] m-auto border border-black rounded-xl overflow-hidden">

                {/* DESKTOP TABLE */}
                <div className="hidden md:block w-full overflow-x-auto">
                    <table className="w-full border-collapse">

                        <thead className="bg-[linear-gradient(90deg,rgba(191,254,175,1)_0%,rgba(194,255,166,1)_50%,rgba(196,255,160,1)_100%)]">
                            <tr className="border-b-2 border-black">
                                {tableHeadings.map((heading, index) => (
                                    <th
                                        key={index}
                                        className="px-5 py-8 text-[18px] uppercase text-black text-center"
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
                                                hover:bg-green-200">
                                                {key === "rank" ? (
                                                    <>
                                                        <img src="./assets/images/star 1.svg" alt="star" className="w-4 h-4" />
                                                        <span>{value}</span>
                                                    </>
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
                <div className="md:hidden p-3 space-y-4">
                    {tableData.map((row, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black rounded-xl p-4 shadow"
                        >
                            {Object.entries(row).map(([key, value], i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center py-1 border-b last:border-none"
                                >
                                    <span className="font-semibold capitalize text-sm">{key.replace(/([A-Z])/g, ' $1')}</span>

                                    <span className="text-sm flex items-center gap-1">
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