
import Header from "@components/Header.jsx"
import Banner from "@components/ui/Home/Banner"
import Features from "@components/ui/Home/Features"
import Marquee from "@components/Marquee"
import Trust from "@components/ui/Home/Trust"
import Roadmap from "@components/ui/Home/Roadmap"
import Footer from "@components/Footer"
import Chart from "@components/ui/Home/Chart"
import ScrollToTop from "@components/ui/Home/ScrollToTop"
import { useEffect, useRef } from "react";
import HomePopup from "@components/HomePopup"
import { useLocation } from "react-router-dom"
const Home = () => {
   const location = useLocation();
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const getStartedRef = useRef(null);
  const roadmapRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section) {
      const refs = { home: homeRef, about: aboutRef, tokenomics: tokenomicsRef, getStarted: getStartedRef, roadmap: roadmapRef };
      const element = refs[section]?.current;
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
    return (
        <>
        <HomePopup/>
        <Header  getStartedRef={getStartedRef} roadmapRef={roadmapRef} tokenomicsRef={tokenomicsRef} aboutRef={aboutRef} homeRef={homeRef} currentPage="home"/>   
        <Banner homeRef={homeRef} aboutRef={aboutRef} />
        <Features/>
        <Chart tokenomicsRef={tokenomicsRef}/>
        <Marquee/>
        <Trust/>
        <Roadmap roadmapRef={roadmapRef} getStartedRef={getStartedRef}/>
        <Marquee/>
        <Footer/>
        <ScrollToTop/>
        </>
    )
}

export default Home