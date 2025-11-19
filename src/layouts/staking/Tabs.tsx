import React, { useState } from "react";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("stake");

    return (
        <div>

            {/* TAB BUTTONS */}
            <div className='flex justify-between items-center'>

                <button
                    onClick={() => setActiveTab("stake")}
                    className={`p-3 w-full max-w-[110px] m-2 mt-10 rounded-sm
            ${activeTab === "stake" ? "bg-green-300" : "bg-[#BFFEB0]"}
            hover:bg-white`}
                >
                    Stake
                </button>

                <button
                    onClick={() => setActiveTab("unstake")}
                    className={`p-3 w-full max-w-[110px] m-2 mt-10 rounded-sm
            ${activeTab === "unstake" ? "bg-green-300" : "bg-[#BFFEB0]"}
            hover:bg-white`}
                >
                    Unstake
                </button>

                <button
                    onClick={() => setActiveTab("withdrawal")}
                    className={`p-3 w-full max-w-[120px] m-2 mt-10 rounded-sm
            ${activeTab === "withdrawal" ? "bg-green-300" : "bg-[#BFFEB0]"}
            hover:bg-white`}
                >
                    Withdrawal
                </button>

                <button
                    onClick={() => setActiveTab("p2p")}
                    className={`p-3 w-full max-w-[110px] m-2 mt-10 rounded-sm
            ${activeTab === "p2p" ? "bg-green-300" : "bg-[#BFFEB0]"}
            hover:bg-white`}
                >
                    P2P
                </button>

                <button
                    onClick={() => setActiveTab("income report")}
                    className={`p-1.5 w-full max-w-[140px] m-2 mt-10 rounded-sm
            ${activeTab === "income report" ? "bg-white" : "bg-[#BFFEB0]"}
            hover:bg-white`}
                >
                    Income Report
                </button>
            </div>

            {/* ---------------- TAB CONTENT ---------------- */}
            <div className="mx-5 mt-5 mb-12 font-semibold text-black">

                {activeTab === "stake" && (
                    <div className="mt-10 mb-10">
                        <div className='flex justify-between items-center mx-5 my-4 mb-10'>
                            <div>
                                <p>$PANDX in wallet</p>
                                <div className='w-full max-w-[200px] bg-[#BFFEB0] px-2 py-2 rounded-sm'>0.00</div>
                            </div>
                            <div>
                                <p>Current Worth</p>
                                <div className='w-full max-w-[200px] bg-[#BFFEB0] px-2 py-2 rounded-sm'>$0</div>
                            </div>
                        </div>

                        {/* White Box */}
                        <div className='w-full max-w-[600px] m-auto flex justify-between bg-white px-2 py-2 rounded-sm'>
                            <div className='flex items-center gap-3'>
                                <img src="/assets/images/pandalogofinalcopy.svg" alt="panda" className='w-8 h-8 rounded-full' />
                                <p>0</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#72A314] p-2 rounded-sm'>MAX</div>
                                <p className='font-bold'>$PANDX</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "unstake" && (
                    <div className="">
                        <div className="bg-white rounded-sm flex justify-between items-center mz-5 my-3">
                            <button className="bg-[#72A314] w-full max-w-[200px] p-3 m-3 rounded-sm text-white font-semibold ">My Stake $1000</button>
                            <button className="bg-[#72A314] w-full max-w-[200px] p-3 m-3 rounded-sm text-white font-semibold ">Unstake 100%</button>
                        </div>
                        <div className="flex justify-center items-center mt-10">
                            <button className="bg-[#72A314] text-white  px-10 py-4 rounded-sm border border-gray-300">Submit</button>
                        </div>
                    </div>
                )}

                {activeTab === "withdrawal" && (
                    <div className="">
                        <div className="flex justify-between items-center bg-white p-1 rounded-sm mt-10">
                            <p>Available $90</p>
                            <button className="bg-[#72A314] px-6 py-3 rounded-sm ">Max</button>
                        </div>
                        <p className="mt-3">5% Pool Free</p>
                        <div className="flex justify-center items-center mt-10">
                            <button className="bg-[#72A314] text-white  px-10 py-4 rounded-sm border border-gray-300">Submit</button>
                        </div>
                    </div>
                )}

                {activeTab === "p2p" && (
                    <div className="">
                       <div className="flex justify-between items-center bg-white p-1 rounded-sm mt-10">
                           <input type="text" placeholder="Enter UserName" />
                            <button className="bg-[#72A314] px-6 py-3 rounded-sm ">Validate</button>
                        </div>
                        <div className="flex justify-between items-center bg-white p-1 rounded-sm mt-5">
                            <p>Available $60</p>
                            <button className="bg-[#72A314] px-6 py-3 rounded-sm ">Max</button>
                        </div>
                        <p className="mt-3 uppercase">P2P unliited and free</p>
                         <div className="flex justify-center items-center mt-5">
                            <button className="bg-[#72A314] text-white  px-10 py-4 rounded-sm border border-gray-300">Submit</button>
                        </div>
                    </div>
                )}

                {activeTab === "income report" && (
                        <div className="bg-white flex justify-between items-center p-2 rounded-sm" >
                            <button className="bg-[#72A314] px-1 py-2 w-full max-w-[200px] mx-2 text-white rounded-sm">Direct Income</button>
                            <button className="bg-[#72A314] px-1 py-2 w-full max-w-[200px] mx-2 text-white rounded-sm">ROI</button>
                            <button className="bg-[#72A314] px-1 py-2 w-full max-w-[200px] mx-2 text-white rounded-sm">Level Income</button>
                            <button className="bg-[#72A314] px-1 py-2 w-full max-w-[200px] mx-2 text-white rounded-sm">Rank Income</button>
                        </div>
                )}

            </div>

        </div>
    );
};

export default Tabs;