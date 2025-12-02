import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText("0x2170Ed0880ac9A755fd29B2688956BD959F933F8");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="pt-[96px] bg-[#edffe1]">
        <section className=" bg-[url('src/assets/images/BG_mask.svg')]  bg-no-repeat bg-bottom bg-cover pt-20 relative">
         <div className="mycontainer ">
           <div className="absolute top-30 max-w-[400px]   sm:left-10 lg:left-[6%] lg:top-[9%] xl:top-[14%]  xl:left-[11%] left-0">            
            <img className="w-[90px] sm:w-[130px] lg:w-[200px]    2xl:w-[400px]" src="/assets/images/Cloud01.svg" alt="img-cloud" />
          </div>

          <div className="absolute xl:bottom-[35%] bottom-[40%] 2xl:bottom-[40%] max-w-[230px]   left-[25%] md:left-[20%]  lg:left-[22%] xl:left-[25%]">
            <img className="w-0 sm:w-[130px] lg:w-[100px] lg:w-[200px] " src="/assets/images/Cloud01.svg" alt="img-cloud" />
          </div>

          <div className="absolute top-[20%] max-w-[200px] right-0">
            <img className="w-[70px] lg:w-[100px] xl:w-[200px]" src="/assets/images/Cloud03.svg" alt="img-cloud" />
          </div>

          <div className="py-20 mycontainer">
           <div className="animate__animated animate__zoomIn" data-aos="zoom-in">
             <h1 className="text-3xl  relative sm:text-[64px] lg:text-[40px] lg:text-6xl xl:text-9xl text-center leading-[1.1]">
              The People’s Pandx Coin
            </h1>
            <p className="text-[#4c4c4c] text-center text-xl sm:pt-8 pt-4 max-w-[600px] w-full m-auto">
            Welcome to a movement where finance meets fun and community drives growth — where staking meets influence, earn more, grow faster, and win together
            </p>
            <a href="https://swap.qerra.network/" target="_blank">
              <button className=" btn-primary shine mt-6 mx-auto  py-3 px-6 flex gap-2 text-white text-lg font-medium">
              <img src="/assets/images/panda.svg" alt="panda" />
              Buy Pandx
            </button>
            </a>
           </div>
            <div className="relative w-full max-w-[1200px] md:mt-[40px] mx-auto">

              {/* Floor Image */}
              <div className="pt-20">
                <img src="/assets/images/floor.svg" alt="floor" />
              </div>

              {/* Panda 1 */}
              <div className="absolute  top-[45%] sm:top-[37%] lg:top-[12%] lg:left-[1%] sm:left-[6%] left-[3%]  w-[23%]  sm:w-[15%] lg:w-[22%]" data-aos="zoom-in">
                <img src="/assets/images/panda-1.svg" alt="panda 1" className="w-full h-auto" />
              </div>

              {/* Panda 2 */}
              <div className="absolute top-[50%] sm:top-[22%]   lg:top-[20%] right-[36%] w-[14%] lg:w-[12%] sm:w-[15%]" data-aos="zoom-in">
                <img src="/assets/images/panda02.svg" alt="panda 2" className="w-full h-auto" />
              </div>

              {/* Panda 3 */}
              <div className="absolute top-[24%]  lg:-top-[11%] lg:-top-[20%] lg:right-[8%] lg:right-[11%] right-[10%] w-[28%] lg:w-[25%] sm:w-[18%]" data-aos="zoom-in">
                <img src="/assets/images/panda03.svg" alt="panda 3" />
              </div>

              {/* Tree */}
              <div className="absolute top-[24%]  sm:top-[-20%] lg:top-[-45%] lg:-top-[52%] right-0  lg:-right-[2%] lg:-right-[2%] w-[15%] lg:w-[18%] sm:w-[15%]">
                <img src="/assets/images/Tree.svg" alt="Tree"/>
              </div>
            </div>
          </div>
         </div>
        </section>
      </div>
      <section className="bg-[url('/assets/images/about_bg.svg')]  bg-bottom pb-[170px] sm:pb-40 lg:pb-30 xl:pb-10 bg-no-repeat bg-cover relative">
        <div className="absolute   bottom-[18%] sm:bottom-[14%] md:bottom-[11%] lg:bottom-[5%] xl:bottom-[6%]">
          <img className="w-[60px] sm:w-[150px] lg:w-[200px]" src="/assets/images/Tree-about.png" alt="tree-side" />
        </div>
        <div className="mycontainer">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 py-6 sm:py-20 gap-8 items-center justify-between">
            <div className=" animate__animated animate__fadeInUp" data-aos="slide-up">
              <h2 className="lg:text-[82px] xl:text-left  text-[40px] text-center lg:text-center sm:text-[40px]   sm:leading-10 leading-20">About Us</h2>
              <p className="text-[#4c4c4c] xl:text-left sm:pt-8 text-center lg:text-center   text-xl lg:pt-8">
                Pandx is a fast, eco-friendly staking project with meme vibes and real-world muscle — fun, functional, and powered by a real community
              </p>
              <div className="bg-white shadow-sm border border-[#dbdbdb] py-2 mt-6 px-6  rounded-2xl  lg:rounded-full flex items-center justify-center sm:justify-between m-auto gap-3 w-full max-w-2xl flex-wrap lg:flex-nowrap">
                <p className="break-all">0x2170Ed0880ac9A755fd29B2688956BD959F933F8</p>
                  
              
                <button
                  onClick={copyText}
                  className="bg-[#5f5f81] rounded-full shine hover:scale-110 w-full sm:w-fit text-white font-semibold px-6 py-2 rounded-full shadow-sm transition"
                >
                  {copied ? "copied" : "copy"}
                </button>
              </div>
            </div>
            <div className="lg:ml-auto mx-auto relative" data-aos="zoom-in">
              <img src="/assets/images/tree_bg.svg" alt="tree-background" />
              <div
                className="absolute sm:bottom-[21%] left-[21%] bottom-[21%] sm:left-[24%] lg:bottom-[21%] lg:left-[110px] bottom:[148px] w-[60%]"
                data-aos="zoom-in"
              >
                <img
                  className="w-[60%] sm:w-[55%]"
                  src="/assets/images/Character_tree.svg"
                  alt="tree-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
