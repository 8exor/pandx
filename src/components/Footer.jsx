import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-graydient relative pb-4 pt-20">
          <div className="mycontainer text-center">
            <div className="md:py-15 pt-15" >
              <h2 className="text-[30px] sm:text-5xl md:text-[40px] lg:text-[82px] leading-tight md:leading-[60px] lg:leading-[90px] text-center" >
                Join the Movement
              </h2>
              <p className="lg:text-2xl text-xl text-[#4a4a4a] w-full lg:max-w-[700px] max-w-[500px] m-auto pt-2">
                PANDX is more than a token — it’s a community-powered platform
                delivering accessible, fun, and fair finance, backed by true
                DeFi power and IPFS technology
              </p>

              {/* mobile view */}
              <div className="md:hidden block">
                <div className="mt-5">
                  <a
                    href="https://swap.qerra.network/"
                    target="blank"
                    className="flex justify-center "
                  >
                    {" "}
                    <button className="flex gap-2 sm:px-6 px-2 py-3 text-sm sm:text-lg items-center  text-white btn-primary justify-center">
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

                <img
                  className="mx-auto mt-4"
                  src="assets/images/panda_face.svg"
                  alt="Pandx"
                />
                <div className="flex justify-center gap-4 mt-4">
                  <div className=" bg-white w-fit hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
                    <a href="https://t.me/pandxxyz" target="blank">
                      <img
                        className="w-[20px] h-[20]"
                        src="/assets/images/Icon.svg"
                        alt="telegram"
                      />
                    </a>
                  </div>
                  <div className="bg-white w-fit  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow rotate-6">
                    <a href="https://gleam.io/DxkrP/qerra-mega-airdrop-" target="blank">
                      <img src="/assets/images/telegram.svg" alt="telegram" />
                    </a>
                  </div>
                </div>
                <div className="logo mt-5">
                  <a href=" https://swap.qerra.network/" target="blank">
                    <img
                      className="md:w-[180px] mx-auto  w-[120px]"
                      src="/assets/images/Logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              {/* mobile view end  */}
              <div className="flex items-center justify-center gap-2 mt-5  md:gap-8">
                <div className="hidden md:block">
                  <a
                    href="https://swap.qerra.network/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x617c0440334bb4a63b75847345f906c782b419ab&chain=56/"
                    target="blank"
                    className="flex justify-center "
                  >
                    {" "}
                    <button className="flex gap-2 sm:px-6 px-2 py-3 text-sm sm:text-lg items-center  text-white btn-primary justify-center">
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
                <div className="md:block hidden">
                  <img src="assets/images/panda_face.svg" alt="Pandx" />
                </div>
                <div className="md:block hidden bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
                  <a href="https://t.me/pandxxyz" target="blank">
                    <img
                      className="w-[20px] h-[20]"
                      src="/assets/images/Icon.svg"
                      alt="telegram"
                    />
                  </a>
                </div>
                <div className="bg-white md:block hidden  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black transform-gpu shadow rotate-6">
                  <a href="https://gleam.io/DxkrP/qerra-mega-airdrop-" target="blank">
                    <img src="/assets/images/telegram.svg" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* copyright   terms & Conditions  */}
          <div className="mycontainer">
            <div className="flex flex-wrap justify-between items-center gap-5 pt-8  border-graydient">
              <div className="logo md:block hidden">
                <a href="https://pandx.xyz/" target="blank">
                  <img
                    className="md:w-[180px] w-[120px]"
                    src="/assets/images/Logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="hidden xl:block">
                  <li className="list-none">
                    <Link
                      to="/terms-and-conditions"
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out text-[16px] md:text-[20px] font-bold"
                    >
                      Terms And Conditions
                    </Link>
                  </li>
              </div>
              <div className="w-full sm:w-auto">
                <ul className="flex items-center gap-4 justify-center">
                  {/* <li>
                    <a
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[16px]  md:text-[20px] font-bold"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li> */}
                  <li className="xl:hidden block">
                    <Link
                      to="/terms-and-conditions"
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out text-[16px] md:text-[20px] font-bold"
                    >
                      Terms And Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* images panda  */}
          <div
            className="absolute  top-[10%] lg:top-[32%] lg:right-[0%] xl:right-[12%] xl:top-[20%] mac-mr-10 right-[5%]"
           
            
          >
            <img
              className="hidden lg:block mac-right-3 lg:w-[50%] xl:w-[80%] md:ml-auto xl:ml-[10%]"
              src="assets/images/Character_builder.svg"
              alt=""
            />
          </div>
          <div className="absolute top-0 left-[5%] " >
            <img
              className="lg:[60%] w-[50%] xl:w-full"
              src="assets/images/Charactertree.svg"
              alt=""
            />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
