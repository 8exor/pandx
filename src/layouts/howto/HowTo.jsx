import React from "react";
import { howTOLogos } from "@constants/index";
import { Link } from "react-router-dom";
const HowTo = () => {
  return (
    <>
    <section className="bg-[#e5ffd5]  min-h-screen pt-25">
     <div className="mycontainer">
       <div className="bg-[#e5ffd5] rounded-sm   w-full border ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 p-5">
        {howTOLogos.map((item) => {
          return (
            <>
              <div key={item} className="bg-[#c4ffa1] text-center p-4  border border-[#68a12b] rounded-md shadow m-2 ">
              
                <Link to={item.link} target="blank">
                <img className="w-10  mx-auto h-10" src={item.img} alt="img" />
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
