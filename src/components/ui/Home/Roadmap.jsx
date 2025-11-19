import { useState } from "react";
const Roadmap = () => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText("0x2170Ed0880ac9A755fd29B2688956BD959F933F8");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  return (
    <>
      <section className="py-20 bg-[url(assets/images/Get_Started_bg.svg)] bg-cover bg-no-repeat bg-cover  bg-top">
        <div className="mycontainer">
          <h2 className="text-[82px] leading-[90px] text-center">
            Getting Started <br /> is Simple
          </h2>
          <div className="flex items-stretch items-center gap-10 justify-between pt-15 pb-8">
            {/* box 1 */}
            <div className="flex-1 rotate-[-3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img className="m-auto" src="assets/images/wallet.svg" alt="" />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
                Install Wallet
              </h3>
            </div>
            {/* box-2 */}
            <div className="flex-1 rotate-[3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img className="m-auto" src="assets/images/fund.svg" alt="" />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
                Fund with ETH/BNB
              </h3>
            </div>
            {/* box-3 */}
            <div className="flex-1 rotate-[-3.3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img
                  className="m-auto"
                  src="assets/images/connect.svg"
                  alt=""
                />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
                Connect to our partner DEX
              </h3>
            </div>
            {/* box-4 */}
            <div className="flex-1 rotate-[3deg] border-[#66a22a] bg-white border-[5px] px-4 py-6 rounded-xl">
              <div className="border-[#66a22a] bg-[#5b5ca9] border-[5px] px-15 py-5 rounded-xl p-4">
                <img
                  className="m-auto"
                  src="assets/images/BuyPANDE.svg "
                  alt=""
                />
              </div>
              <h3 className="text-[24px] pt-4 leading-[26px]">
                Buy $PANDE & join the family
              </h3>
            </div>
          </div>
          <div className="bg-white shadow-sm border border-[#dbdbdb] py-3 mt-6 px-6   rounded-full flex items-center m-auto gap-3 w-full max-w-2xl">
            <input
              type="text"
              value="0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
              className=" w-full outline-none text-[#4c4c4c] text-lg font-medium"
              readOnly
            />
            <button
              onClick={copyText}
              className="bg-graydient hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-sm transition"
            >
              {copied ? "copied" : "copy"}
            </button>
          </div>
          <h2 className="text-center text-[82px] pt-30">PANDE Roadmap</h2>
        </div>
      </section>
      <section className=" pb-2 bg-[#edffe1]">
        <div className="relative">
          <img
            className="h-auto w-full"
            src="assets/images/Roadmap_ground.svg"
            alt=""
          />
          {/* card 1 */}
          <div className="absolute top-[-5%] left-[40%]">
            <div className="relative z-9">
              <img src="assets/images/card_board.svg" alt="rectangle" />
              <div className="absolute top-[20%] left-10">
                <h3 className="text-[24px]">Q1. Launch</h3>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">
                    Website + Whitepaper
                  </p>
                </div>

                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">
                    Token Launch & Airdrop
                  </p>
                </div>

                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">DEX Listings</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 2  */}
          <div className="absolute top-[3%] right-[20%] ">
            <div className="relative z-9">
              <img src="assets/images/card_board.svg" alt="rectangle" />
              <div className="absolute top-[20%] left-10">
                <h3 className="text-[24px]">Q2. Expansion</h3>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">
                    DAO Governance Live
                  </p>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">PandeSwap Beta</p>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">Merch Drop</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 3  */}
          <div className="absolute top-[40%] left-[20%] ">
            <div className="relative z-9">
              <img src="assets/images/card_board.svg" alt="rectangle" />
              <div className="absolute top-[20%] left-10">
                <h3 className="text-[24px]">Q3. Growth</h3>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">
                    Cross-chain Bridge
                  </p>
                </div>

                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">Mobile App</p>
                </div>

                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">NFT Launch</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 4  */}
          <div className="absolute top-[48%] right-[38%] ">
            <div className="relative z-9">
              <img src="assets/images/card_board.svg" alt="rectangle" />
              <div className="absolute top-[20%] left-10">
                <h3 className="text-[24px]">Q4. Global Push</h3>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">CEX Listings</p> 
                </div>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">Pande Games</p>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <img src="assets/images/white_star.svg" alt="" />
                  <p className="text-[22px] text-[#4c4c4c]">
                    Real-World Partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
