import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import aboutFamilyImg from "../Styles/Images/paper.png";
import "../Styles/AboutSection.css";

const About = () => {
    const { t } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [showPopupMobile, setShowPopupMobile] = useState(false);

    const handleContinueClick = () => {
        setShowPopupMobile(true);
    };

    return (
        <div id="about-section">
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className="aboutFamily">
                    <div className="aboutFamily-title">
                        <h3>{t('about.title')}</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt="" />
                    </div>
                    <div className="aboutFamily-history">
                        <h4>{t('about.history')}</h4>
                        <p>{t('about.text')}</p>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && (
                <div className="aboutFamily-mobile">
                    <div className={showPopupMobile ? "aboutFamily-title-mobile hidden" : "aboutFamily-title-mobile"}>
                        <h3>{t('about.title')}</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt="" />
                        {!showPopupMobile && <button onClick={handleContinueClick}>{t('about.continue')}</button>}
                    </div>
                    {showPopupMobile && (
                        <div className="aboutFamily-popup-mobile">
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