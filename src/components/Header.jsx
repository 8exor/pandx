
import { useState, useEffect } from "react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
// import { useState , useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
    const {open, close } = useAppKit();
    const {isConnected} = useAppKitAccount();
    

     const [openMenu, setOpenMenu] = useState(false);
      const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`py-6 w-full z-50 transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 bg-[#b8fea4] shadow-lg"
            : "absolute bg-[#C5FF9E]"
        }`}
      >
        <nav className="mycontainer ">
          <div className="flex items-center justify-between">
            <div>
              <img src="/assets/images/Logo.svg" alt="logo" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="bg-white hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow">
                <img
                  className="w-[20px] h-[20]"
                  src="/assets/images/Icon.svg"
                  alt="telegram"
                />
              </div>
              <div className="bg-white  hover:bg-[#5b5ca9]  duration-300 ease-in-out p-3 rounded-lg border border-black shadow rotate-6">
                <img src="/assets/images/telegram.svg" alt="telegram" />
              </div>
              <div>

                {/* <button className="bg-graydient-box hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                  <img src="/assets/images/panda.svg" alt="panda" />
                  Buy Panda */}

               
                <button className="bg-graydient hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium" onClick={()=>{
                  open()
                  
                }}>
                  <img src="/assets/images/panda.svg" alt="panda" />
                  Connect

                </button>
            
                  <NavLink to={isConnected ? "/StakingPage" : "/"}>
                <button className="bg-graydient hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium" >
                  <img src="/assets/images/panda.svg" alt="panda" />
                  Staking
                </button>
                </NavLink>
              </div>
              <div className="bg-graydient-box hover:!bg-[#5b5ca9]  duration-300 ease-in-out  h-13 w-13 flex items-center justify-center rounded-full">
                <button
                  onClick={() => setOpenMenu(!openMenu)}

                  className="   relative w-8 h-6 flex flex-col justify-between items-center p-[2px] group"
                >
                  <span
                    className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                      openMenu ? "translate-y-[9px] rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                      openMenu ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${
                      openMenu ? "-translate-y-[9px] -rotate-45" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* {open && (
                <div className="absolute top-20 left-0 w-full right-0 mt-2 p-4 bg-[#C5FF9E] rounded shadow-lg z-50">
                  <ul className="text-center">
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Home</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">About</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Tokenomics</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Get Started</a>
                    </li>
                    <li className="text-3xl text-[#141414] leading-14">
                      <a href="">Roadmap</a>
                    </li>
                  </ul>
                </div>
              )} */}

                    {openMenu && (
                    <div className="absolute top-20 left-0 w-full right-0 mt-2 p-4 bg-[#C5FF9E] rounded shadow-lg z-50">
                       <ul className="text-center">
                        <li className="text-3xl text-[#141414] leading-14"><a href="">Home</a></li>
                        <li className="text-3xl text-[#141414] leading-14"><a href="">About</a></li>
                        <li className="text-3xl text-[#141414] leading-14"><a href="">Tokenomics</a></li>
                        <li className="text-3xl text-[#141414] leading-14"><a href="">Get Started</a></li>
                        <li className="text-3xl text-[#141414] leading-14"><a href="">Roadmap</a></li>
                       </ul>
                    </div>
                    )}

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
