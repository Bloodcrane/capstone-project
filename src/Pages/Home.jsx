import React from "react";
// import { useMediaQuery } from 'react-responsive'
import HeaderNav from "../Components/HeaderNav";
import HomeTopSection from "../Components/HomeTopSection";
import RoomsSection from "../Components/MidSection"
import About from "../Components/About";
import Activities from "../Components/Activities";


const Home = () => {
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-width: 1224px)'
    //   })
    //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <div>
            <HomeTopSection/>
            <HeaderNav/>
            <RoomsSection/>
            <div className="separator"></div>
            <div className="comingSoon"><h2>Discover Our Sustainable Cottages Opening June 2024</h2> <h1>Coming Soon!</h1></div>
            <About/>
            <div className="separator"></div>
            <Activities/>
        </div>
    )
}

export default Home