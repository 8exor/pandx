const Features = () => {
  return (
    <>
      <section className="sm:pt-20 pt-0 relative">
        <div>
            <div className="absolute top-[30px] left-0 w-0 lg:w-[100%]"><img src="/assets/images/box-cloud.svg" alt="cloud" /></div>
            <div className="absolute top-[70px] right-0 hidden lg:block"><img src="/assets/images/cloud-left.svg" alt="cloud" /></div>
        </div>
        <div className="mycontainer">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="bg-[#e5ffe6] shadow-bottom p-[36px] rounded-lg h-fit relative">
              <h3 className="text-4xl leading-[40px]">
                Speed and <br />
                Security
              </h3>
              <p className="text-2xl pt-2 leading-[29px] text-[#4c4c4c]">
                Panda lives on a high-performance blockchain with ultra-low fees
                and lightning-fast transaction speeds.
              </p>
              <div className="absolute top-0 right-[-21%] top-[-14%]">
                <img src="/assets/images/box_tree.svg" alt="box-tree" />
              </div>
            </div>
            {/* box-2 */}
            <div className=" h-fit w-full">
              <h2 className="text-[82px] lg:block hidden ml-[60px]  w-full min-w-[480px] leading-[82px]">
                How Panda Works
              </h2>
              <div className="bg-[#e5ffe6] shadow-bottom p-[36px] rounded-lg mt-15 relative">
                <h3 className="text-4xl leading-[40px]">
                  Real Yield,
                  <br /> Not Hype
                </h3>
                <p className="text-2xl pt-2 leading-[29px] text-[#4c4c4c]">
                  With staking and DeFi tools, Panda earns while you chill
                  liquidity pools, yield farming, and more.
                </p>
                <div className="absolute top-0 right-[-21%] top-[-14%]">
                  <img src="/assets/images/box_tree.svg" alt="box-tree" />
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div class="bg-[#e5ffe6] shadow-bottom p-[36px] rounded-lg h-fit mt-[380px] relative">
              <h3 className="text-4xl leading-[40px]">
                Community
                <br /> First
              </h3>
              <p className="text-2xl leading-[29px] pt-2 text-[#4c4c4c]">
                PANDA DAO puts power in your hands every holder votes, every
                voice counts, all out in the open.
              </p>{" "}
              <div className="absolute top-0 right-[-21%] top-[-14%]">
                <img src="/assets/images/box_tree.svg" alt="box-tree" />
              </div>
            </div>
             <h2 className="text-[40px] md:text-[62] lg:hidden block  w-full leading-[82px]">
                How Panda Works
              </h2>
          </div>
        </div>
      </section>
      <section className="color-shadow relative">
        <div className="relative">
                <img className="w-full" src="/assets/images/bg.svg" alt="bg-img" />
            <div className="absolute top-[6%] left-[21%] z-[-1]">
                <img className="w-[300px]" src="/assets/images/box-cloud.svg" alt="cloud.svg" />
            </div>
            <div className="absolute top-[44%] left-[4%]">
                <img src="assets/images/Charactertree.svg" alt="Charactertree.svg" />
            </div>
              <div className="absolute top-[60%] left-[4%]">
                <img src="/assets/images/Character_bag.svg" alt="Character_bag.svg"/>
            </div>
             <div className="absolute top-[54%] left-[35%]">
                <img src="assets/images/Character_run.svg" alt="Character_run.svg"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Features;
