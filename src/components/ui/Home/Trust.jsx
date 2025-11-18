const Trust = () => {
  return (
    <>
      <section>
        <div className="relative">
          <h2 className="text-[82px] z-999 pt-30 absolute top-0 left-0 right-0 text-center">
            Why Trust PANDE?
          </h2>
         <div className="relative">
             <img src="/assets/images/trust_bg.svg.svg" alt="" />
             <div className="absolute top-[20%] left-[30%]">
                  <div className="relative z-9">
                   <img src="assets/images/rectangle.svg" alt="rectangle" />
                        <div className="absolute top-[45%] left-0 right-0 text-center">
                                <h3 className="text-[36px]">Public Team</h3>
                                <p className="text-[24px] text-[#4c4c4c]">No anonymous founders verified</p>
                        </div>
                  </div>
             </div>

             {/*  */}
              <div className="absolute top-[40%] left-[30%]">
                  <div className="relative z-1">
                   <img src="assets/images/rectangle-2.svg" alt="rectangle" />
                        <div className="absolute top-[50%] left-0 right-0 text-center">
                                <h3 className="text-[36px]">Public Team</h3>
                                <p className="text-[24px] text-[#4c4c4c]">No anonymous founders verified</p>
                        </div>
                  </div>
             </div>
             {/*  */}

             <div className="absolute top-[60%] left-[30%]">
                  <div className="relative">
                   <img src="assets/images/rectangle-2.svg" alt="rectangle" />
                        <div className="absolute top-[50%] left-0 right-0 text-center">
                                <h3 className="text-[36px]">Public Team</h3>
                                <p className="text-[24px] text-[#4c4c4c]">No anonymous founders verified</p>
                        </div>
                  </div>
             </div>
             {/* last panda run & half panda */}
             <div className="absolute bottom-0 left-[20%]">
                <img src="assets/images/Character_run.svg" alt="" />
             </div>
             <div className="absolute bottom-0 right-0">
                <img src="assets/images/half_panda.svg" alt="" />
             </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
