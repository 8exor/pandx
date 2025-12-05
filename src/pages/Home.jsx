
import Header from "@components/Header.jsx"
import Banner from "@components/ui/Home/Banner"
import Features from "@components/ui/Home/Features"
import Marquee from "@components/Marquee"
import Trust from "@components/ui/Home/Trust"
import Roadmap from "@components/ui/Home/Roadmap"
import Footer from "@components/Footer"
import Chart from "@components/ui/Home/Chart"
import ScrollToTop from "@components/ui/Home/ScrollToTop"
import HomePopup from '@components/HomePopup';
import { useRef } from "react";
import HomePopup from "@components/HomePopup"
const Home = () => {
    const aboutRef = useRef(null);
    const tokenomicsRef = useRef(null);
    const getStartedRef = useRef(null);
    const roadmapRef = useRef(null);
    const homeRef = useRef(null);
    return (
        <>
        <HomePopup/>
        <Header  getStartedRef={getStartedRef} roadmapRef={roadmapRef} tokenomicsRef={tokenomicsRef} aboutRef={aboutRef} homeRef={homeRef}/>   
        <Banner homeRef={homeRef} aboutRef={aboutRef} />
        <Features/>
        <Chart tokenomicsRef={tokenomicsRef}/>
        <Marquee/>
        <Trust/>
        <Roadmap roadmapRef={roadmapRef} getStartedRef={getStartedRef}/>
        <Marquee/>
        <Footer/>
        <ScrollToTop/>
          <HomePopup/>
        </>
    )
}

export default Home