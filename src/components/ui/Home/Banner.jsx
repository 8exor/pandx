import { useState } from "react";
const Banner = () => {
  const [copied, setCopied] = useState(false);
  const copyText = () => {
    navigator.clipboard.writeText("0x2170Ed0880ac9A755fd29B2688956BD959F933F8");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
    
  };

  return (
    <>
      <div className="sm:pt-[96px] bg-[#edffe1]">
        <section className=" bg-[url('src/assets/images/BG_mask.svg')]  bg-no-repeat bg-bottom bg-cover pt-20 relative">
          <div className="absolute top-30 max-w-[400px]  md:left-20 sm:left-10 left-0">
            <img className="w-[90px] sm:w-[130px] md:w-full" src="/assets/images/Cloud01.svg" alt="img-cloud" />
          </div>
          <div className="absolute bottom-[40%] max-w-[250px] left-[25%]">
            <img className="w-0 sm:w-[130px] md:w-full" src="/assets/images/Cloud01.svg" alt="img-cloud" />
          </div>
          <div className="absolute top-[20%] max-w  -[200px] right-0">
            <img className="w-[100px] md:w-full" src="/assets/images/Cloud03.svg" alt="img-cloud" />
          </div>
          <div className="py-20 mycontainer">
            <h1 className="text-5xl sm:text-[64px] md:text-[120px] text-center leading-[1.1]">
              The People’s <br /> Panda Coin
            </h1>
            <p className="text-[#4c4c4c] text-center text-xl pt-8">
              Welcome to a movement where finance meets fun, &<br /> community
              drives currency.
            </p>
            <button className="bg-graydient-box hover:!bg-[#5b5ca9] m-auto mt-8  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
              <img src="/assets/images/panda.svg" alt="panda" />
              Buy Panda
            </button>
            <div className="relative w-full max-w-[1200px] mx-auto">

              {/* Floor Image */}
              <div className="pt-20">
                <img
                  src="/assets/images/floor.svg"
                  alt="floor"
                />
              </div>

              {/* Panda 1 */}
              <div className="absolute top-[37%] md:left-[9%] left-[3%]  w-[23%] md:w-[12%] sm:w-[15%]">
                <img src="/assets/images/panda-1.svg" alt="panda 1" className="w-full h-auto" />
              </div>

              {/* Panda 2 */}
              <div className="absolute top-[45%] sm:top-[22%]  lg:top-[20%] right-[36%] w-[14%] md:w-[12%] sm:w-[15%]">
                <img src="/assets/images/panda02.svg" alt="panda 2" className="w-full h-auto" />
              </div>

              {/* Panda 3 */}
              <div className="absolute top-[14%] md:top-[20%] lg:top-[11%] lg:right-[11%] right-[10%] w-[28%] md:w-[15%] sm:w-[18%]">
                <img src="/assets/images/panda03.svg" alt="panda 3" />
              </div>

              {/* Tree */}
              <div className="absolute top-[17%] lg:top-[-17%] sm:top-[-20%] md:top-[-20%] lg:top-[-73] right-0  md:right-[8%] lg:right-[2%] w-[15%] md:w-[12%] sm:w-[15%]">
                <img src="/assets/images/Tree.svg" alt="Tree"/>
              </div>
            </div>

          </div>
        </section>
      </div>
      <section className="bg-[url('/assets/images/about_bg.svg')]  bg-bottom pb-[170px] lg:pb-0 bg-no-repeat bg-cover relative">
        <div className="absolute md:bottom-[-50px] bottom-[130px] lg:w-full w-[50px]">
          <img src="/assets/images/Tree-about.svg" alt="tree-side" />
        </div>
        <div className="mycontainer">
          <div className="grid grid-cols-1 md:grid-cols-2 py-6 sm:py-20 gap-8 items-center justify-between">
            <div>
              <h2 className="lg:text-[82px]  text-[40px] sm:text-center lg:text-left sm:text-[40px] text-left sm:leading-10 leading-20">About Us</h2>
              <p className="text-[#4c4c4c] sm:pt-8 sm:text-center lg:text-left   text-xl lg:pt-8">
                Panda is a fast, eco-friendly crypto with meme vibes and
                real-world muscle fun, functional, and fueled by community.
              </p>
              <div className="bg-white shadow-sm border border-[#dbdbdb] py-3 mt-6 px-6   rounded-full flex items-center gap-3 w-full max-w-2xl">
                <input
                  type="text"
                  value="0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
                  className=" w-full outline-none text-[#4c4c4c] text-lg font-medium"
                  readOnly
                />
                <button
                  onClick={copyText}
                  className="bg-graydient-box hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-sm transition"
                >
                  {copied ? "copied" : "copy"}

                </button>
              </div>
            </div>
            <div className="md:ml-auto mx-auto relative">
              <img src="/assets/images/tree_bg.svg" alt="tree-background" />
              <div className="absolute sm:bottom-[112px] left-[60px] bottom-[66px] sm:left-[112px] sm:bottom-[70px] bottom:[148px] left-[20px] w-[60%]">
                <img className="w-[60%] sm:w-[55%]" src="/assets/images/Character_tree.svg" alt="tree-background" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Banner;