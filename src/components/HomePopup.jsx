import React, { useEffect, useState } from "react";

const HomePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup when user enters website
    setShow(true);
  }, []);

  // Close popup
  const closePopup = () => setShow(false);

  if (!show) return null;

  return (
    <div
      className="fixed z-50 w-full h-full max-md:p-2 left-0 top-0 bg-[#000000ed] flex justify-center items-center"
      onClick={closePopup} // click outside closes
    >
      <div
        className="bg-[#000000a1] border border-white p-6 rounded-2xl shadow-xl w-fit text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
         <div className="text-end  mb-2">
          <button
          onClick={closePopup}
          className=" text-white rounded-full ">
          <img src="assets/images/close.png" alt="close icon"/>
        </button>
        </div>
        <h2 className="text-2xl text-white mb-3">Please Connect Your Wallet</h2>
       <ul className="flex justify-center gap-5 items-center mt-5">
        <li> <button  onClick={() => navigate("/login")} className="flex gap-2 px-6 py-3 text-lg  text-white btn-primary">
                    Login
                  </button></li>
     
       <li>
         <button className="flex gap-2 px-6 py-3 text-lg  text-white btn-primary">
                    
                    Sign up
                  </button>
       </li>
         </ul>
        <a href="https://swap.qerra.network/" target="blank"> <button className="flex gap-2 sm:px-6 px-2 py-3 text-sm sm:text-lg items-center  text-white btn-primary justify-center w-full mt-5">
                    <img src="/assets/images/panda.svg" alt="panda" />
                   Buy $PANDX <img  className="sm:h-[20px] h-[15px] w-[15px] sm:w-[20px]" src="/assets/images/qerra.png" alt="panda"/>qerraSWAP
                  </button></a>
        {/* <button
          onClick={closePopup}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button> */}
      </div>
    </div>
  );
};

export default HomePopup;
