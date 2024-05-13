import React from "react";
import HeaderNav from "../Components/HeaderNav";
import DiscoverSection from "../Components/DiscoverSection";
import RoomsSection from "../Components/RoomSection"
import AboutSection from "../Components/AboutSection";
import ActivitiesSection from "../Components/ActivitiesSection";
import ExploreSection from "../Components/ExploreSection";
import GallerySection from "../Components/GallerySection";
import ContactSection from "../Components/ContactSection";
import SiteFooter from "../Components/SiteFooter";


const Home = () => {

    return (
        <div>
            <DiscoverSection/>
            <HeaderNav/>
            <RoomsSection/>
            <div className="separator"></div>
            <div className="comingSoon">
                <div className="comingSoonContent">
                    <h2>Discover Our Sustainable Cottages Opening June 2024</h2>
                    <h1>Coming Soon!</h1>
                </div>
            </div>
            <AboutSection/>
            <div className="separator"></div>
            <ActivitiesSection/>
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