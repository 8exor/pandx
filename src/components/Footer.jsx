const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-graydient relative pb-8 pt-20">
          <div className="mycontainer text-center">
            <div className="py-15">
            <h2 className="text-[82px]">Join the Movement</h2>
            <p className="text-[24px] text-[#4a4a4a]">
              Panda is more than a coin. A community-powered platform pushing{" "}
              <br /> for accessible, fun, and fair finance.
            </p>
            <div className="flex items-center justify-center gap-8 py-10">
              <div>
                <button className="bg-graydient-box hover:!bg-[#5b5ca9]  duration-300 ease-in-out py-3 px-6 flex gap-2 text-white text-lg font-medium">
                  <img src="/assets/images/panda.svg" alt="panda" />
                  Buy Panda
                </button>
              </div>
              <div>
                <img src="assets/images/panda_face.svg" alt="panda" />
              </div>
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
            </div>
            </div>
          </div>
          {/* copyright   terms & Conditions  */}
          <div className="mycontainer">
            <div className="flex justify-between items-center pt-8  border-graydient">
              <ul className="flex gap-4 items-center">
                <li>
                  <a
                    className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[20px] font-bold"
                    href="#"
                  >
                    © Monko
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[20px] font-bold"
                    href="#"
                  >
                    {" "}
                    - Built by Grooic
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[20px] font-bold"
                    href="#"
                  >
                    × Framer
                  </a>
                </li>
              </ul>
              <div>
                <img src="assets/images/Logo.svg" alt="" />
              </div>
              <div>
                <ul className="flex items-center gap-4">
                  <li>
                    <a
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[20px] font-bold"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#4c4c4c] hover:text-[#72a314] transition duration-300 ease-in-out  text-[20px] font-bold"
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
          <div className="absolute top-[10%] right-[5%]">
            <img src="assets/images/Character_builder.svg" alt="" />
          </div>
          <div className="absolute top-0 left-[5%]">
            <img className="w-full" src="assets/images/Charactertree.svg" alt="" />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
