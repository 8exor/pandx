
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null; // hide button if not visible

  return (
    <button
      onClick={scrollToTop}
      className="fixed  bottom-20 right-5 p-3 bg-[#C5FF9E]  rounded-full shadow-lg hover:bg-[#5b5ca9]  transition-colors z-50"
    >
      <img
        src="/assets/images/arrow.svg"
        alt="Scroll to top"
        className="w-6 h-6 "
      />
    </button>
  );
};

export default ScrollToTop;
