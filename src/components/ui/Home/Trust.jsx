
const Trust = () => {
  return (
    <>
      <section >
         
        <div 
  className="relative w-full bg-[url('/assets/images/trust_bg.svg.svg')] bg-cover bg-center py-10 md:py-50">
 <h2 className="lg:text-[82px] py-6  text-[30px] sm:text-[40px]  absolute top-10 left-0 right-0 text-center" data-aos="slide-up">
            Why Trust Pandx?
          </h2>
  {/* cards wrapper */}
  <div className="flex flex-col items-center gap-16 pt-[80px] sm:pt-[10px] lg:pt-[50px]" data-aos="zoom-in">

    {/* CARD 1 */}
    <div className="relative">
      <img
        className="w-[300px] sm:w-[400px]  relative z-2 md:w-[500px] lg:w-full" 
        src="assets/images/rectangle.svg" 
        alt="rectangle" 
      />
      <div className="absolute z-2 top-[30px] md:top-[50px] lg:top-[60px] inset-0 flex flex-col items-center justify-center px-[36px] sm:px-[52px]">
        <h3 className="text-[18px] md:text-[28px] lg:text-[38px]">About Contracts</h3>
        <p className="text-[14px] px-[5px] lg:text-[24px] md:text-[22px] text-center text-[#4c4c4c]">
         Fully Verified & Renounced Smart Contracts + User Can Stake/Unstake Anytime
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative mt-[-100px]">
      <img 
        className="w-[320px] relative z-1 sm:w-[400px] md:w-[500px] lg:w-full" 
        src="assets/images/rectangle-2.svg" 
        alt="rectangle" 
      />
      <div className="absolute top-[44px] Sm:top-[30px] md:top-[80px] lg:top-[30%] z-2 inset-0 flex flex-col items-center justify-center px-[36px] lg:px-[52px]">
        <h3 className="text-[18px] md:text-[24px] lg:text-[38px] text-center">Power by IPFS </h3>
        <p className="text-[14px] lg:text-[24px] md:text-[22px] text-center text-[#4c4c4c]">
        IPFS is a 100% Decentralized peer-to-peer system for storing and sharing files across the web – UNSTOPPABLE
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="relative mt-[-100px]">
      <img 
        className="w-[320px] sm:w-[400px] md:w-[500px] lg:w-full" 
        src="assets/images/rectangle-2.svg" 
        alt="rectangle" 
      />
      <div className="absolute  top-[40px] md:top-[80px] lg:top-[30%] inset-0 flex flex-col items-center justify-center px-[36px] sm:px-[52px]">
        <h3 className="text-[18px] md:text-[28px] lg:text-[38px]">100% Real & Transparent</h3>
        <p className="text-[14px] md:text-[22px] lg:text-[24px]  text-center text-[#4c4c4c]">
          Open source system – Nobody can STOP, HIDE or CHANGE anything
        </p>
      </div>
    </div>

  </div>

  {/* bottom characters */}
  <div className="absolute mac-l-19 bottom-0 left-[2%] sm:left-[20%] md:left-[5%] lg:left-[8%] xl:left-[25%] xl:left-[27%] " data-aos="zoom-in">
    <img className="w-[60px] sm:w-[145px] md:w-[200px] lg:w-[220px]" src="assets/images/Character_run.svg" alt="character" />
  </div>

  <div className="absolute bottom-0 right-[2%] sm:right-[22%] md:right-[10%] mac-ml-80 lg:right-[16%] xl:right-[26%]  xl:right-[29%]" data-aos="zoom-in">
    <img className="w-[60px] sm:w-[145px] md:w-[180px] lg:w-[200px]" src="/assets/images/Character_bag.svg" alt="half-panda" />
  </div>
</div>

      </section>




      {/* <section className="relative bg-[#efffe5] h-screen xl:h-full xl:bg-transparent">
              <img src="/assets/images/trustBg.svg" alt="" className="w-full  object-contain md:object-cover bg-no-repeat absolute bottom-0  xl:static" />
           <h2 className="text-4xl md:text-7xl absolute top-13 xl:top-20 text-center w-full">Why Trust Panda ?</h2>
          <div className="mycontainer xl:absolute xl:top-75 xl:left-1/2 xl:transform xl:-translate-x-1/2">
           <div className="relative ">
            <img src="/assets/images/rectangle.svg" className="absolute top-30 w-full md:w-sm md:left-[24%] lg:left-[30%] xl:top-30 xl:w-[500px] text-center z-10" alt="" />
            <h2 className="absolute top-52 w-full text-center text-2xl z-20 xl:text-3xl xl:top-60">Public Team</h2>
            <p className="absolute top-62 w-full text-center text-xl z-20 xl:top-70 ">No anonymous founders verified</p>
             <img src="/assets/images/rectangle-2.svg" className="absolute top-60 w-full md:w-sm md:left-[24%] lg:left-[30%] xl:w-[500px] xl:top-71  text-center z-7" alt="" />
            <h2 className="absolute top-86 w-full text-center text-2xl z-8 xl:top-105 xl:text-3xl">Transparent</h2>
            <p className="absolute top-96 w-full text-center text-xl z-8 xl:top-117">Milestones tracked in real time</p>
               <img src="/assets/images/rectangle-2.svg" className="absolute top-97 w-full md:w-sm md:left-[24%] lg:left-[30%] xl:w-[500px] xl:top-120 text-center " alt="" />
            <h2 className="absolute top-123 w-full text-center text-2xl xl:text-3xl xl:top-153">Open Source</h2>
            <p className="absolute top-133 w-full text-center text-xl xl:top-165">Open code you can verify by yourself</p>
           </div>
           </div>
   <div className=""> 
         
             <div className="absolute bottom-0 left-0 lg:left-30 xl:left-20 ">
                <img className="w-[130px] md:w-40 xl:w-[300px]" src="assets/images/Character_run.svg" alt="" />
             </div>
             <div className="absolute bottom-0 right-10 lg:right-30 xl:right-30">
                <img className="w-[130px] md:w-40 xl:w-[300px]" src="assets/images/Character_bag.svg" alt="" />
             </div>
         </div>
        
       
      </section> */}

  
  
    </>
  );
};
export default Trust;
