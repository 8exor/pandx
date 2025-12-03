const Features = () => {
  return (
    <>
      <section className="md:pt-20 pt-0 relative">
        <div>
          <div className="absolute top-[30px] left-0 w-0 lg:w-[100%]">
            <img src="/assets/images/box-cloud.svg" alt="cloud" />
          </div>
          <div className="absolute top-[70px] right-0 hidden lg:block">
            <img className="lg:w-[200px] xl:w-full" src="/assets/images/cloud-left.svg" alt="cloud" />
          </div>
        </div>

        <div className="mycontainer ">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mt-[-80px] lg:mt-0">
            <div className="bg-[#e5ffe6] min-h-[280px]  h-fit   shadow-bottom overflow-x-clip xl:overflow-x-visible p-[36px] rounded-lg h-fit relative" data-aos="zoom-in">
              <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                Speed and <br />
                Security
              </h3>
              <p className="lg:text-2xl break-all text-xl pt-2 leading-[26px] lg:leading-[29px] text-[#4c4c4c]">
                Pandx lives on a high-performance blockchain — BSC — offering ultra-low fees and lightning-fast transaction speeds.
              </p>
              <div className="absolute  md:right-[-28%]  [@media_(min-width:375px)_and_(max-width:430px)]:right-[-25%] lg:right-[-26%] xl:right-[-24%] lg:right-[-80px] top-0  right-[-33%] sm:top-[20px] sm:top-0 md:top-[2%] xl:top-[-10%] lg:top-[1%]">
                <img
                  className="sm:w-[88%] xl:w-full lg:w-full w-[90%]"
                  src="/assets/images/box_tree.svg"
                  alt="box-tree"
                />
              </div>
            </div>
            {/* box-2 */}
            <div className=" h-fit w-full">
              <h2 className="text-[82px]  lg:block hidden ml-[60px]  w-full min-w-[480px] leading-[82px]"  data-aos="slide-up" >
                How Pandx Works
              </h2>
              <div className="bg-[#e5ffe6] min-h-[280px]  h-fit   animate__animated animate__zoomIn overflow-x-clip xl:overflow-x-visible shadow-bottom p-[36px] rounded-lg mt-0 md-[10px] lg:mt-15 relative"  data-aos="zoom-in">
                <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                  Real Yield,
                  <br /> Not Hype
                </h3>
                <p className="lg:text-2xl break-all text-xl pt-2 leading-[26px] lg:leading-[29px] text-[#4c4c4c]">
                 With staking and influence marketing, earn PANDX through yield farming and grow yourself.
                </p>
                <div className="absolute [@media_(min-width:375px)_and_(max-width:430px)]:right-[-25%] md:right-[-27%] lg:right-[-26%] xl:right-[-24%] lg:right-[-80px] top-0  right-[-33%] sm:top-[20px] sm:top-0 md:top-[2%] xl:top-[-10%] lg:top-[1%]">
                  <img
                    className="ssm:w-[88%] xl:w-full lg:w-full w-[90%]"
                    src="/assets/images/box_tree.svg"
                    alt="box-tree"
                  />
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div className="bg-[#e5ffe6] min-h-[280px]  h-fit  animate__animated animate__zoomIn overflow-x-clip xl:overflow-x-visible shadow-bottom p-[36px] rounded-lg h-fit mt-[10px] lg:mt-[380px] relative"data-aos="zoom-in">
              <h3 className="lg:text-4xl text-2xl leading:[20px] lg:leading-[40px]">
                Community
                <br /> First
              </h3>
              <p className="lg:text-2xl break-all text-xl leading-[26px] lg:leading-[29px] pt-2 text-[#4c4c4c]">
               PANDX DAO empowers real holders and true rank achievers of helder community who have proven themselves.
              </p>
              <div className="absolute [@media_(min-width:375px)_and_(max-width:430px)]:right-[-25%]  md:right-[-28%] lg:right-[-26%] xl:right-[-24%] lg:right-[-80px] top-0  right-[-33%] sm:top-[20px] sm:top-0 md:top-[2%] xl:top-[-10%] lg:top-[1%]">
                <img
                  className="sm:w-[88%] xl:w-full lg:w-full w-[90%]"
                  src="/assets/images/box_tree.svg"
                  alt="box-tree"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full text-center lg:hidden block py-15">
          {/* STRONGER glow background */}
          <div
            className="absolute inset-0 
               bg-[radial-gradient(circle_at_60%_0%,rgba(200,255,200,0.75)_0px,rgba(200,255,200,0.45)_700px)]
               blur-[85px]
               -z-10"
          ></div>

          <h2 className="relative   z-10 text-[32px] sm:text-[62px] leading-[52px]"   data-aos="zoom-in">
            How Pandx Works
          </h2>
        </div>
      </section>
      <section className="color-shadow relative">
        <div className="relative">
          <img className="w-full" src="/assets/images/bg.svg" alt="bg-img" />
          <div className="absolute top-[-12%] left-[21%] z-[-1]">
            <img
              className="w-[300px] hidden lg:block"
              src="/assets/images/Cloud01.svg"
              alt="cloud.svg"
            />
          </div>
          <div className="absolute top-[44%] left-[4%]">
            <img
              className="w-[65px] sm:w-[130px] mac-w-85 lg:w-[185px] xl:w-full"
              src="assets/images/Charactertree.svg"
              alt="Charactertree.svg"
            />
          </div>
          <div className="absolute top-[61%] left-[4%]" data-aos="zoom-in">
            <img
              className="w-[55px] mac-w-65 sm:w-[120px]  lg:w-[150px] xl:w-[260px]"
              src="/assets/images/Character_bag.svg"
              alt="Character_bag.svg"
            />
          </div>
          <div className="absolute sm:top-[54%] xl:top-[60%] top-[56%] left-[35%]" data-aos="zoom-in">
            <img
              className="w-[50px] mac-w-50 sm:w-[110px] lg:w-[145px] xl:w-[200px]"
              src="assets/images/Character_run.svg"
              alt="Character_run.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
