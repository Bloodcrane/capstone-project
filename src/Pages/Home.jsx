import React from "react";
import HeaderNav from "../Components/HeaderNav";
import HomeTopSection from "../Components/HomeTopSection";
import RoomsSection from "../Components/RoomSection"
import About from "../Components/About";
import Activities from "../Components/Activities";
import ExploreSection from "../Components/ExploreSection";
import GallerySection from "../Components/GallerySection";
import ContactSection from "../Components/ContactSection";
import SiteFooter from "../Components/SiteFooter";


const Home = () => {

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
            <div className="separator"></div>
            <GallerySection/>
            <div className="separator"></div>
            <ContactSection/>
            <div className="separator"></div>
            <SiteFooter/>
        </div>
    )
}

export default Home