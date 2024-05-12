import React from "react";
// import { useMediaQuery } from 'react-responsive'
import HeaderNav from "../Components/HeaderNav";
import HomeTopSection from "../Components/HomeTopSection";
import RoomsSection from "../Components/RoomSection"
import About from "../Components/About";
import Activities from "../Components/Activities";
import ExploreSection from "../Components/ExploreSection";


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
            <div className="comingSoon">
                <div className="comingSoonContent">
                    <h2>Discover Our Sustainable Cottages Opening June 2024</h2>
                    <h1>Coming Soon!</h1>
                </div>
            </div>
            <About/>
            <div className="separator"></div>
            <Activities/>
            <div className="separator"></div>
            <ExploreSection/>
        </div>
    )
}

export default Home