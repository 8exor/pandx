import { useState, useEffect, useref } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { headerLogos, taskNote } from "@constants/index";
import useCopyToClipBaord from "@hooks/useCopyToClipBoard";

const Banner = ({ aboutRef, homeRef }) => {
  const truncateMiddle = (str, max) => {
    if (str.length <= max) return str;
    const keep = Math.floor(max / 2);
    return `${str.slice(0, keep)} … ${str.slice(str.length - keep)}`;
  };

  const [isCopied, handleCopy] = useCopyToClipBaord();

  // const copyText = () => {
  //   navigator.clipboard.writeText("0x2170Ed0880ac9A755fd29B2688956BD959F933F8");
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 4000);
  // };
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const address = "Coming Soon";

  return (
    <>
      <div ref={homeRef} className="pt-[96px] bg-[#edffe1]">
        <div className="w-full max-w-[1360px] mx-auto flex items-center justify-center gap-2 p-3 text-xl ">
          <marquee behavior="" scrollamount="10" direction="">
            {taskNote?.des2}
          </marquee>
        </div>
        <div className="mx-2 mb-[-60px]">
          <div className="w-full max-w-[800px] mt-5  border-2 rounded-lg border-[#5eb10d]  sm:mx-auto flex items-center justify-center gap-2 p-3 text-xl">
            <marquee behavior="alternate" scrollamount="8" direction="">
              {taskNote?.des3}
            </marquee>
          </div>
        </div>
        <section className="relative pt-20 bg-bottom bg-no-repeat bg-cover ">
         <ul
  className="fixed bg-[#eaffe2] border-[2px] border-[#75ac3f]
  flex-col gap-4 rounded-lg px-[5px] md:px-[10px]
  py-[20px] md:py-[25px] z-20 left-[1.5%]"
  data-aos="slide-up"
>
  {headerLogos.map((item, index) => {
    const Content = (
      <li
        className="md:h-9 md:w-9 h-6 w-6 animate-float flex items-center
        justify-center border mt-2 rounded-full border-[#00d990]
        hover:drop-shadow-[0_0_10px_#00d990]
        hover:scale-120 duration-300 ease-in-out"
      >
        <img
          className="w-2 h-2 cursor-pointer md:h-5 md:w-5"
          src={item.img}
          alt="logo icon"
        />
      </li>
    )

    return item.link ? (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Content}
      </a>
    ) : (
      <div key={index}>{Content}</div>
    )
  })}
</ul>


          <div className="mycontainer ">
            <div className="absolute top-30 max-w-[400px]   sm:left-10 lg:left-[6%] lg:top-[9%] xl:top-[14%]  xl:left-[11%] left-0">
              <img
                className="w-[90px] sm:w-[130px] lg:w-[200px]    2xl:w-[400px]"
                src="/assets/images/Cloud01.svg"
                alt="img-cloud"
              />
            </div>

            <div className="absolute xl:bottom-[35%] bottom-[40%] 2xl:bottom-[40%] max-w-[230px]   left-[25%] md:left-[20%]  lg:left-[22%] xl:left-[25%]">
              <img
                className="w-0 sm:w-[130px] lg:w-[100px] lg:w-[200px]"
                src="/assets/images/Cloud01.svg"
                alt="img-cloud"
              />
            </div>

            <div className="absolute top-[20%] max-w-[200px] right-0">
              <img
                className="w-[70px] lg:w-[100px] xl:w-[200px]"
                src="/assets/images/Cloud03.svg"
                alt="img-cloud"
              />
            </div>

            <div className="py-20 mycontainer">
              <div
                className="animate__animated animate__zoomIn"
                data-aos="zoom-in"
              >
                <h1 className="text-4xl  relative sm:text-[64px]  lg:text-6xl xl:text-9xl text-center leading-[1.1]">
                  The People’s Pandx Coin
                </h1>
                <div className="text-[#4c4c4c] text-center text-xl sm:pt-6 pt-4 max-w-[620px] w-full m-auto">
                  <p className="font-bold">
                    {" "}
                    Experience Redefined Real DeFi Staking Protocol — Powered by
                    IPFS
                  </p>
                  <p className="">
                    Welcome to a movement where finance meets fun and community
                    drives growth — where staking meets influence, earn more,
                    grow faster, and win together.
                  </p>
                </div>
                <a
                  href="https://swap.qerra.network/"
                  target="blank"
                  className="flex justify-center pt-8"
                >
                  {" "}
                  <button className="flex gap-2 sm:px-6 [@media_(max-width:330px)]:text-[13px] px-2 py-3 text-sm sm:text-lg items-center  text-white btn-primary justify-center">
                    <img src="/assets/images/panda.svg" alt="panda" />
                    Buy $PANDX{" "}
                    <img
                      className="sm:h-[20px] h-[15px] w-[15px] sm:w-[20px]"
                      src="/assets/images/qerra.png"
                      alt="panda"
                    />
                    qerraSWAP
                  </button>
                </a>
              </div>
              <div className="relative w-full max-w-[1200px] md:mt-[40px] mx-auto">
                {/* Floor Image */}
                <div className="pt-20">
                  <img src="/assets/images/floor.svg" alt="floor" />
                </div>

                {/* Panda 1 */}
                <div
                  className="absolute [@media_(min-width:375px)_and_(max-width:425px)]:top-[38%]  top-[45%] sm:top-[40%] md:top-[37%] lg:top-[12%] xl:top-[7%] lg:left-[1%] sm:left-[6%] left-[3%]  w-[23%]  sm:w-[15%] lg:w-[22%]"
                  data-aos="zoom-in"
                >
                  <img
                    src="/assets/images/panda-1.svg"
                    alt="panda 1"
                    className="w-full h-auto"
                  />
                </div>

                {/* Panda 2 */}
                <div
                  className="absolute [@media_(min-width:375px)_and_(max-width:425px)]:top-[44%]  top-[50%] md:top-[22%] sm:top-[27%]  lg:top-[21%] right-[36%] w-[14%] lg:w-[12%] sm:w-[15%]"
                  data-aos="zoom-in"
                >
                  <img
                    src="/assets/images/panda02.svg"
                    alt="panda 2"
                    className="w-full h-auto"
                  />
                </div>

                {/* Panda 3 */}
                <div
                  className="absolute [@media_(min-width:375px)_and_(max-width:425px)]:top-[14%] top-[24%] sm:top-[19%] md:top-[14%]   lg:-top-[18%] lg:right-[8%] lg:right-[11%] right-[10%] w-[28%] lg:w-[25%] sm:w-[18%]"
                  data-aos="zoom-in"
                >
                  <img src="/assets/images/panda03.svg" alt="panda 3" />
                </div>

                {/* Tree */}
                <div className="absolute [@media_(min-width:375px)_and_(max-width:425px)]:top-[15%] top-[24%] sm:top-[-10%]  md:top-[-20%] lg:top-[-45%] lg:-top-[52%] right-0  lg:-right-[2%] lg:-right-[2%] w-[15%] lg:w-[18%] sm:w-[15%]">
                  <img src="/assets/images/Tree.svg" alt="Tree" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="mycontainer !mt-20 bg-[#edffe1]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="py-3 px-6 bg-[#72A314] rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-2xl   text-white      ">HOLDERS</h2>
              <h2 className="text-xl   text-white      ">500</h2>
            </div>

            <div className="py-3 px-6 bg-[#72A314] rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-2xl   text-white      ">STAKERS</h2>
              <h2 className="text-xl   text-white      ">700</h2>
            </div>

            <div className="py-3 px-6 bg-[#72A314] rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-2xl   text-white      ">TRANSACTIONS</h2>
              <h2 className="text-xl   text-white      ">1000</h2>
            </div>

            <div className="py-3 px-6 bg-[#72A314] rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-2xl   text-white      ">TVL</h2>
              <h2 className="text-xl   text-white      ">$100,100</h2>
            </div>
          </div>
        </section> */}

        <section className="mycontainer !mt-20 bg-[#edffe1]">
          <div className="bg-[#f7fff1] border border-[#cfe6b8] rounded-2xl px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center divide-x divide-[#cfe6b8]">
              <div className="px-4 sm:mt-0 mt-5">
                <p className="text-sm uppercase tracking-wide text-[#5f7f2b]">
                  Holders
                </p>
                <h3 className="lg:text-3xl text-xl font-semibold text-[#2f4f0e] mt-1">
                  500
                </h3>
              </div>

              <div className="px-4 sm:mt-0 mt-5">
                <p className="text-sm uppercase tracking-wide text-[#5f7f2b]">
                  Stakers
                </p>
                <h3 className="lg:text-3xl text-xl font-semibold text-[#2f4f0e] mt-1">
                  700
                </h3>
              </div>

              <div className="px-4 sm:mt-0 mt-5">
                <p className="text-sm uppercase tracking-wide text-[#5f7f2b]">
                  Transactions
                </p>
                <h3 className="lg:text-3xl text-xl font-semibold text-[#2f4f0e] mt-1">
                  1,000
                </h3>
              </div>

              <div className="px-4 sm:mt-0 mt-5">
                <p className="text-sm uppercase tracking-wide text-[#5f7f2b]">
                  TVL
                </p>
                <h3 className="lg:text-3xl text-xl font-semibold text-[#2f4f0e] mt-1">
                  $10,000,000
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="mycontainer !mt-20 bg-[#edffe1]">
          <div className="bg-[#6ba632] rounded-2xl px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-[#EAEAEA]">
              <div className="px-4">
                <h3 className="text-4xl font-bold text-[#ffffff]">1000</h3>
                <p className="text-md uppercase tracking-[2px] text-[#EAEAEA] font-bold mt-2">
                  Holders
                </p>
              </div>

              <div className="px-4">
                <h3 className="text-4xl font-bold text-[#ffffff]">700</h3>
                <p className="text-md uppercase tracking-[2px] text-[#EAEAEA] font-bold mt-2">
                  Stakers
                </p>
              </div>

              <div className="px-4">
                <h3 className="text-4xl font-bold text-[#ffffff]">10000</h3>
                <p className="text-md uppercase tracking-[3px] text-[#EAEAEA] font-bold mt-2">
                  Transactions
                </p>
              </div>

              <div className="px-4">
                <h3 className="text-4xl font-bold text-[#ffffff]"> $10,000,000</h3>
                <p className="text-md uppercase tracking-[2px] text-[#EAEAEA] font-bold mt-2">
                  TVL
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      {/* banner end  */}

      {/*   About  us section start here */}
      <section
        ref={aboutRef}
        className="bg-[url('/assets/images/about_bg.svg')]  bg-bottom pb-[170px] sm:pb-40 lg:pb-30 xl:pb-10 bg-no-repeat bg-cover "
      >
        <div className="relative mycontainer"></div>
        <div className="relative mycontainer">
          <div className="absolute hidden sm:block  bottom-[-4%] xl:left-[-11%]  left-0">
            <img
              className="w-[60px] sm:w-[150px] lg:w-[200px]"
              src="/assets/images/Tree-about.png"
              alt="tree-side"
            />
          </div>
          <div className="grid items-center justify-between grid-cols-1 gap-8 py-6 lg:grid-cols-1 xl:grid-cols-2 sm:py-20">
            <div className="animate" data-aos="slide-up">
              <h2 className="lg:text-[82px] xl:text-left  text-[30px] text-center lg:text-center sm:text-[40px]   sm:leading-10 leading-20">
                About Us
              </h2>
              <p className="text-[#4c4c4c] xl:text-left sm:pt-8 text-center lg:text-center   text-xl lg:pt-8">
                Pandx is a fast, eco-friendly staking project with meme vibes
                and real-world muscle — fun, functional, and powered by a real
                community
              </p>
              <div className="bg-white shadow-sm border border-[#dbdbdb] py-2 mt-6 px-6  rounded-2xl  lg:rounded-full flex items-center justify-center sm:justify-between m-auto gap-3 w-full max-w-3xl flex-wrap sm:flex-nowrap">
                <p className=" border-2 font-bold text-sm !text-[#000000] border-[#78ad42] p-2 rounded-lg">
                  <a href="https://bscscan.com" target="blank">
                    $PANDX Contract
                  </a>
                </p>
                <p className="text-center">
                  <a href="https://bscscan.com" target="blank">
                    {/* {`${address.substring(0, 10)}.......${address.substring(30, 48)}`} */}
                    {address}
                  </a>
                </p>
                <button
                  onClick={() => handleCopy(address)}
                  className="btn-primary  !text-center sm:w-fit text-white font-semibold px-6 py-2 rounded-full shadow-sm transition"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="relative mx-auto lg:ml-auto" data-aos="zoom-in">
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

      {/*   About  us section end here */}
    </>
  );
};

export default Banner;
