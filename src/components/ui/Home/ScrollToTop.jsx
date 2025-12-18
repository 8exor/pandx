import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // ✅ ROUTE CHANGE PE TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // ✅ BUTTON VISIBILITY
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className="fixed bottom-20 right-5 z-50">
      <span className="relative flex">
        <span className="absolute inline-flex sm:h-12 sm:w-12 w-10 h-10 animate-ping rounded-full bg-[#5b5ca9] opacity-70"></span>

        <span className="relative inline-flex p-3 bg-[#5b5ca9] rounded-full shadow-lg">
          <img
            src="/assets/images/arrow.svg"
            alt="Scroll to top"
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </span>
      </span>
    </button>
  );
};

export default ScrollToTop;
