import React from "react";
import { howTOLogos } from "@constants/index";
import { Link } from "react-router-dom";
import { taskNote } from "@constants/index";
const HowTo = () => {
  return (
    <>
      <section className="bg-[#e5ffd5]  min-h-screen pt-20">
        <div className="max-w-[1360px] mx-auto  flex items-center justify-center gap-2 mb-1 p-3 text-xl">
          {/* <span className="blink-text">{taskNote?.title}</span> */}
          <marquee behavior="alternate" scrollamount="10" direction="">
            {taskNote?.des4}
          </marquee>
        </div>
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-[#e5ffd5] rounded-sm  mx-2  border ">
            <div className="grid p-5 lg:grid-cols-5 md:grid-cols-2">
              {howTOLogos.map((item) => {
                return (
                  <>
                    <div
                      key={item}
                      className="hover:shadow-[inset_0_0_5px_#ffffff96,inset_0_35px_30px_#72a315,0_5px_10px_#00000070] bg-[#c4ffa1] shadow-none hover:bg-[linear-gradient(90deg,_#ffffff,_#edfee1,_#ffffff)] hover:shadow-[inset_0_0_5px_#ffffff96,inset_0_70px_30px_#72a315,0_5px_10px_#00000070] flex items-center justify-center text-center p-4 border border-[#68a12b] rounded-md m-2 transition-all duration-300"
                    >
                      <Link to={item.link} target="blank">
                        <img
                          className="w-10 h-10 mx-auto"
                          src={item.img}
                          alt="img"
                        />
                        <h3 className="pt-2"> {item.title}</h3>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowTo;
