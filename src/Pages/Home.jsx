import React, { useState, useEffect } from 'react';
import HeaderNav from "../Components/HeaderNav";
import DiscoverSection from "../Components/DiscoverSection";
import RoomsSection from "../Components/RoomSection"
import AboutSection from "../Components/AboutSection";
import ActivitiesSection from "../Components/ActivitiesSection";
import ExploreSection from "../Components/ExploreSection";
import GallerySection from "../Components/GallerySection";
import ContactSection from "../Components/ContactSection";
import SiteFooter from "../Components/SiteFooter";

import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t, i18n } = useTranslation();

    const [isGeorgian, setIsGeorgian] = useState(i18n.language === 'ge');

    useEffect(() => {
        // Function to update the state when language changes
        const handleLanguageChange = (lng) => {
            setIsGeorgian(lng === 'ge');
        };

        // Set initial state based on the current language
        handleLanguageChange(i18n.language);

        // Subscribe to language change events
        i18n.on('languageChanged', handleLanguageChange);

        // Cleanup function to unsubscribe from language change events
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    return (
        <div className={`main ${isGeorgian ? 'ge' : ''}`}>
            <DiscoverSection/>
            <HeaderNav/>
            <RoomsSection/>
            <div className="separator"></div>
            <div className="comingSoon">
                <div className="comingSoonContent">
                    <h2>{t('comingsoon.title')}</h2>
                    <h1>{t('comingsoon.description')}</h1>
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