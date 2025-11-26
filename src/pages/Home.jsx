
import Header from "@components/Header.jsx"
import Banner from "@components/ui/Home/Banner"
import Features from "@components/ui/Home/Features"
import Marquee from "@components/Marquee"
import Trust from "@components/ui/Home/Trust"
import Roadmap from "@components/ui/Home/Roadmap"
import Footer from "@components/Footer"
import Tokenomics from "@components/ui/Home/TokenomicsChart"
import PieChart3D from "../hooks/PieChart3D"
import Chart from "@components/ui/Home/Chart"



const Home = () => {
    return (
        <>
        <Header/>   
        <Banner/>
        <Features/>
        {/* <Tokenomics/>  */}
        <Chart/>
        <Marquee/>
        <Trust/>
        <Roadmap/>
        <Marquee/>
        <Footer/>
        </>
    )
}

export default Home