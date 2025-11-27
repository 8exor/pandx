import { useState } from "react";
const Roadmap = () => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText("0x2170Ed0880ac9A755fd29B2688956BD959F933F8");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const roadmapArray = [
    {
      title: "Q2 – 2025 – Preparation",
      p1: "Website on IPFS",
      p2: "Smart Contracts",
      p3: "Final Testings",
    },
    {
      title: "Q3 – 2025 – Expansion",
      p1: "Launchpad Finalized",
      p2: "45 Days Launch Campaign",
      p3: "Free $QRA Airdrop",
    },
    {
      title: "Q4 – 2025 – Growth",
      p1: "Preparation for Presale",
      p2: "Listing on qerraSWAP",
      p3: "Global Marketing Push",
    },
    {
      title: "Q1 – 2026 – Growth",
      p1: "Mobile App Testing",
      p2: "Mobile App Roll–out",
      p3: "Global Marketing Push",
    },
  ];

  return (
    <>
      <section className="md:py-20 py-10 bg-[url(assets/images/Get_Started_bg.svg)] bg-cover bg-no-repeat   bg-top">
        <div className="mycontainer">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-tight md:leading-[90px] text-center" data-aos="slide-up" >
            Getting Started <br /> is Simple
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 pt-10 pb-8">
            {/* box 1 */}
            <div className="w-full md:flex-1 rotate-0 lg:rotate-[-3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl" data-aos="zoom-in">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img className="m-auto" src="assets/images/wallet.svg" alt="" />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
               Fund with $QRA/$HLDR
              </h3>
            </div>
            {/* box-2 */}
            <div className="w-full md:flex-1 rotate-0 lg:rotate-[3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl" data-aos="zoom-in">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img className="m-auto" src="assets/images/fund.svg" alt="" />
              </div>
              <a href="https://swap.qerra.network/" target="blank">
                <h3 className="text-[24px] pt-4 leading-[26px]">
                Connect to our
            Partner DEX – qerraSWAP
              </h3>
              </a>
            </div>
            {/* box-3 */}
            <div className="w-full md:flex-1 rotate-0 lg:rotate-[-3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl" data-aos="zoom-in">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img
                  className="m-auto"
                  src="assets/images/connect.svg"
                  alt=""
                />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
               Buy $PANDX & join
               the hYBRID Ecosystem
              </h3>
            </div>



            {/* temprory comment out  */}



            {/* box-4 */}
            {/* <div className="w-full md:flex-1 rotate lg:rotate-[3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl" data-aos="zoom-in">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img
                  className="m-auto"
                  src="assets/images/BuyPANDE.svg "
                  alt=""
                />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
                Buy $Pandx & join the family
              </h3>
            </div> */}
          </div>
          <div className="bg-white shadow-sm border border-[#dbdbdb] py-2 mt-6 px-6  rounded-2xl  md:rounded-full flex items-center justify-center sm:justify-between m-auto gap-3 w-full max-w-2xl flex-wrap md:flex-nowrap">
             <p className="break-all">0x2170Ed0880ac9A755fd29B2688956BD959F933F8</p>

            <button
              onClick={copyText}
              className="bg-graydient-box w-full sm:w-fit hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full shadow-sm transition"
            >
              {copied ? "copied" : "copy"}
            </button>
          </div>
          <h2 className="text-4xl hidden xl:block   sm:text-5xl md:text-6xl lg:text-[82px] leading-tight md:leading-[90px] text-center pb-[20px] pt-[90px]" data-aos="slide-up">
            Pandx Roadmap
          </h2>
        </div>
      </section>

      <section className=" pb-2 bg-[#d8feccab]">
        <div className="relative">
          {/* DESKTOP VERSION */}
          <div className="hidden xl:block relative">
            <img
              className=" w-full"
              src="assets/images/Roadmap_ground.svg"
              alt=""
            />
            {/* card 1 */}
            <div className="absolute top-[-5%] left-[36%]" data-aos="zoom-in">
              <div className="relative z-9">
                <img className="w-full h-[280px]" src="assets/images/card_board.svg" alt="rectangle" />
                <div className="absolute top-[20%]  px-[60px]">
                  <h3 className="text-[26px]">Q2 – 2025 – Preparation</h3>
                  <div className="flex items-center gap-2 px-2 mt-2">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">
                     Website on IPFS
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">
                      Smart Contracts
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Final Testings</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="absolute top-[4%] right-[11%]" data-aos="zoom-in">
              <div className="relative z-9">
                <img className="w-full h-[280px]" src="assets/images/card_board.svg" alt="rectangle" />
                <div className="absolute top-[20%] px-[60px]">
                  <h3 className="text-[26px]">Q3 – 2025 – Expansion</h3>
                  <div className="flex items-center gap-2 px-2 mt-2">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">
                     Launchpad Finalized
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">45 Days Launch Campaign</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Free $QRA Airdrop</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="absolute top-[37%] left-[10%]" data-aos="zoom-in">
              <div className="relative z-9">
                <img className="w-full h-[280px]"  src="assets/images/card_board.svg" alt="rectangle" />
                <div className="absolute top-[20%] px-[60px]">
                  <h3 className="text-[26px]">Q4 – 2025 – Growth</h3>
                  <div className="flex items-center gap-2 px-2 mt-2">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">
                      Preparation for Presale
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Listing on qerraSWAP</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Global Marketing Push</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="absolute top-[49%] right-[36%]" data-aos="zoom-in">
              <div className="relative z-9">
                <img className="w-full h-[280px]"  src="assets/images/card_board.svg" alt="rectangle" />
                <div className="absolute top-[20%] px-[60px]">
                  <h3 className="text-[26px]">Q1 – 2026 – Growth</h3>
                  <div className="flex items-center gap-2 px-2 mt-2">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Mobile App Testing</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">Mobile App Roll–out</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 mt-1">
                    <img src="assets/images/white_star.svg" alt="" />
                    <p className="text-[22px] text-[#4c4c4c]">
                      Global Marketing Push
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET VERSION */}

        </div>
         <div className="bg-[#d8feccab]">
           <h2 className="text-4xl pt-[60px] block xl:hidden sm:text-5xl md:text-6xl lg:text-[82px] leading-tight  text-center">
            Pandx Roadmap
          </h2>
         <div className="bg-[url(assets/images/Roadmap_ground.svg)] py-0 md:py-20 bg-no-repeat xl:hidden bg-center">
         
        <div className="  mycontainer h-full  grid grid-cols-1 sm:grid-cols-2 !py-10 !gap-5">
          {/* card 1 */}

          {roadmapArray?.map((road, i) => (
            <div className="relative  w-full  mx-auto" key={i} >
              <img
                src="assets/images/card_board.svg"
                className=" mx-auto" data-aos="zoom-in"
                alt=""
              />
              <div className="absolute top-0 left-5 md:left-[20px] lg:left-[80px] p-6 sm:p-8" data-aos="zoom-in" >
                <h3 className="text-md sm:text-xl mb-3">{road?.title}</h3>
                <ul className="space-y-2 text-[#4c4c4c] sm:px-4 px-0 text-sm">
                  <li className="flex items-center gap-2">
                    <img src="assets/images/white_star.svg" />
                    {road?.p1}
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="assets/images/white_star.svg" />
                    {road?.p2}
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="assets/images/white_star.svg" />
                    {road?.p3}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
         </div>
         </div>
      </section>
    </>
  );
};

export default Roadmap;
