import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import aboutFamilyImg from "../Styles/Images/paper.png";
import "../Styles/AboutSection.css";

const About = () => {
    const { t, i18n } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [showPopupMobile, setShowPopupMobile] = useState(false);
    const [isGeorgian, setIsGeorgian] = useState(i18n.language === 'ge');

    const handleContinueClick = () => {
        setShowPopupMobile(true);
    };

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
        <div id="about-section">
            {/* Desktop Structure */}
            {isDesktopOrLaptop && (
                <div className="aboutFamily">
                    <div className="aboutFamily-title">
                        <h4>{t('about.title')}</h4>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt="" />
                    </div>
                    <div className={`aboutFamily-history ${isGeorgian ? 'ge' : ''}`}>
                        <h4>{t('about.history')}</h4>
                        <p>{t('about.text')}</p>
                    </div>
                </div>
            )}

            {/* Mobile Structure */}
            {isTabletOrMobile && (
                <div className="aboutFamily-mobile">
                    <div className={showPopupMobile ? "aboutFamily-title-mobile hidden" : "aboutFamily-title-mobile"}>
                        <h3>{t('about.title')}</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt="" />
                        {!showPopupMobile && <button onClick={handleContinueClick}>{t('about.continue')}</button>}
                    </div>
                    {showPopupMobile && (
                        <div className={`aboutFamily-popup-mobile ${isGeorgian ? 'ge' : ''}`}>
                            <h4>{t('about.history')}</h4>
                            <p>{t('about.text')}</p>
                            <button onClick={() => setShowPopupMobile(false)}>{t('about.back')}</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default About;
