const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-graydient relative pb-8 pt-20">
          <div className="mycontainer text-center">
            <div className="md:py-15 pt-15" data-aos="slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-tight md:leading-[90px] text-center">
                Join the Movement
              </h2>
              <p className="lg:text-2xl text-xl text-[#4a4a4a] w-full lg:max-w-[700px] max-w-[500px] m-auto pt-2">
              PANDX is more than a token — it’s a community-powered platform delivering accessible, fun, and fair finance, backed by true DeFi power and IPFS technology
              </p>

              {/* mobile view */}
              <div className="md:hidden block">
               <button className="bg-graydient-box mx-auto mt-5  hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-md font-medium">
                    <img src="/assets/images/panda.svg" alt="Pandx" />
                    Buy $Pandxxx
                  </button>
                
                    <img className="mx-auto mt-4" src="assets/images/panda_face.svg" alt="Pandx" />
                     <div className="flex justify-center gap-4 mt-4">
                   <div className=" bg-white w-fit hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
                  <a href="https://t.me/pandxdao" target="blank">
                  <img
                    className="w-[20px] h-[20]"
                    src="/assets/images/Icon.svg"
                    alt="telegram"
                  />
                    </a>
                </div>
                <div className="bg-white w-fit  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow rotate-6">
                  <a href="https://t.me/pandxdao" target="blank"><img src="/assets/images/telegram.svg" alt="telegram" /></a>
                </div>
                 </div>
                     <div className="logo mt-5">
                <a href=" https://swap.qerra.network/" target="blank"><img  className="md:w-[180px] mx-auto  w-[120px]" src="/assets/images/Logo.png" alt="logo" />
                </a>
              </div>
              </div>
              {/* mobile view end  */}
              <div className="flex items-center justify-center gap-2  md:gap-8 pt-10">
                <div>
                  <a href="https://swap.qerra.network/" target="blank">
                   <button className="bg-graydient-box  md:block hidden hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 md:flex gap-2 text-white text-md font-medium">
                    <img src="/assets/images/panda.svg" alt="Pandx" />
                   Buy $Pandx
                  </button>
                  </a>
                </div>
                <div className="md:block hidden">
                  <img src="assets/images/panda_face.svg" alt="Pandx" />
                </div>
                <div className="md:block hidden bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
                  <a href="https://t.me/pandxdao" target="blank">
                  <img
                    className="w-[20px] h-[20]"
                    src="/assets/images/Icon.svg"
                    alt="telegram"
                  />
                    </a>
                </div>
                <div className="bg-white md:block hidden  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow rotate-6">
                  <a href="https://t.me/pandxdao" target="blank"><img src="/assets/images/telegram.svg" alt="telegram" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* copyright   terms & Conditions  */}
          <div className="mycontainer">
            <div className="flex flex-wrap justify-between items-center gap-5 pt-8  border-graydient" >
              
              <div className="logo md:block hidden">
                <a href=" https://swap.qerra.network/" target="blank"><img className="md:w-[180px] w-[120px]" src="/assets/images/Logo.png" alt="logo" />
                </a>
              </div>
              <div>
                <ul className="flex items-center gap-4">
                  <li>
                    <a
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[16px]  md:text-[20px] font-bold"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[16px]  md:text-[20px] font-bold"
                      href="#"
                    >
                      Terms And Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* images panda  */}
          <div className="absolute  top-[10%] lg:top-[32%] lg:right-[0%] xl:right-[12%] xl:top-[20%] mac-mr-10 right-[5%]" data-aos="zoom-in">
            <img
              className="hidden lg:block mac-right-3 lg:w-[50%] xl:w-[80%] md:ml-auto xl:ml-[10%]"
              src="assets/images/Character_builder.svg"
              alt=""
            />
          </div>
          <div className="absolute top-0 left-[5%] " data-aos="zoom-in">
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
