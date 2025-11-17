import Features from "../components/ui/Home/Features"
import Banner from "../components/ui/Home/Banner"
import Header from "../components/Header"
import Tokenomics from "../components/ui/Home/TokenomicsChart"
import Marquee from "../components/Marquee"
import Trust from "../components/ui/Home/Trust"

const Home = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <Features/>
        <Tokenomics/>
        <Marquee/>
        <Trust/>
        </>
    )
}

export default Home