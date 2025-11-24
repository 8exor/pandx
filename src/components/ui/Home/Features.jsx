const Features = () => {
  return (
    <>
      <section className="md:pt-20 pt-0 relative">
        <div>
            <div className="absolute top-[30px] left-0 w-0 lg:w-[100%]"><img src="/assets/images/box-cloud.svg" alt="cloud" /></div>
            <div className="absolute top-[70px] right-0 hidden lg:block"><img src="/assets/images/cloud-left.svg" alt="cloud" /></div>
        </div>
     
        <div className="mycontainer ">
             <h2 className="text-4xl flex items-center justify-center flex-wrap lg:hidden  mb-25  w-full  ">
                How Panda Works
              </h2>
          <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mt-[-80px] lg:mt-0">
            <div class="bg-[#e5ffe6] shadow-bottom overflow-x-clip xl:overflow-x-visible p-[36px] rounded-lg h-fit relative">
              <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                Speed and <br />
                Security
              </h3>
              <p className="lg:text-2xl text-xl pt-2 leading-[26px] lg:leading-[29px] text-[#4c4c4c]">
                Panda lives on a high-performance blockchain with ultra-low fees
                and lightning-fast transaction speeds.
              </p>
              <div className="absolute top-[20px] sm:top-0 right-[-100px] lg:right-[-23%] lg:top-[-14%]">
                <img className="w-[80%] lg:w-full" src="/assets/images/box_tree.svg" alt="box-tree" />
              </div>
            </div>
            {/* box-2 */}
            <div className=" h-fit w-full">
              <h2 className="text-[82px] lg:block hidden ml-[60px]  w-full min-w-[480px] leading-[82px]">
                How Panda Works
              </h2>
              <div className="bg-[#e5ffe6] overflow-x-clip xl:overflow-x-visible shadow-bottom p-[36px] rounded-lg mt-[10px] lg:mt-15 relative">
                <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                  Real Yield,
                  <br /> Not Hype
                </h3>
                <p className="lg:text-2xl text-xl pt-2 leading-[26px] lg:leading-[29px] text-[#4c4c4c]">
                  With staking and DeFi tools, Panda earns while you chill
                  liquidity pools, yield farming, and more.
                </p>
                <div className="absolute  right-[-100px] top-[20px] sm:top-0  lg:right-[-23%] lg:top-[-14%]">
                  <img className="w-[80%] lg:w-full" src="/assets/images/box_tree.svg" alt="box-tree" />
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div class="bg-[#e5ffe6] overflow-x-clip xl:overflow-x-visible shadow-bottom p-[36px] rounded-lg h-fit mt-[10px] lg:mt-[380px] relative">
              <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                Community
                <br /> First
              </h3>
              <p className="lg:text-2xl text-xl leading-[26px] lg:leading-[29px] pt-2 text-[#4c4c4c]">
                PANDA DAO puts power in your hands every holder votes, every
                voice counts, all out in the open.
              </p>
              <div className="absolute right-[-100px] top-[20px] sm:top-0  lg:top-[-14%]">
                <img className="w-[80%] lg:w-full" src="/assets/images/box_tree.svg" alt="box-tree" />
              </div>
            </div>
            
          </div>
        </div>
         {/* <h2 className="text-[32px] text-center  sm:text-[62px] lg:hidden block py-10 sm:py-15 w-full leading-[52px]">
                How Panda Works
              </h2> */}
      </section>
      <section className="color-shadow relative">
        <div className="relative">
                <img className="w-full" src="/assets/images/bg.svg" alt="bg-img" />
            <div className="absolute top-[6%] left-[21%] z-[-1]">
                <img className="w-[300px] hidden md:block" src="/assets/images/box-cloud.svg" alt="cloud.svg" />
            </div>
            <div className="absolute top-[44%] left-[4%]">
                <img className="w-[65px] sm:w-[130px] lg:w-full" src="assets/images/Charactertree.svg" alt="Charactertree.svg" />
            </div>
              <div className="absolute top-[60%] left-[4%]">
                <img className="w-[55px] sm:w-[120px] lg:w-full" src="/assets/images/Character_bag.svg" alt="Character_bag.svg"/>
            </div>
             <div className="absolute top-[54%] left-[35%]">
                <img className="w-[50px] sm:w-[110px] lg:w-full" src="assets/images/Character_run.svg" alt="Character_run.svg"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Features;
