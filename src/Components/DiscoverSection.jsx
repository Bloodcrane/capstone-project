import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import '../Styles/HomeTopSection.css';

import backgroundImage1 from '../Styles/Images/Background_Home_1.png';
import backgroundImage2 from '../Styles/Images/Background_Home_2.png';

const DiscoverSection = () => {
  const { t } = useTranslation();
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const backgrounds = [backgroundImage1, backgroundImage2]; // List of background images
  const colors = ["white", "#244135"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgrounds.length]); // Include backgrounds.length in the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // Change background every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [colors.length]); // Include colors.length in the dependency array

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    {/* Desktop Structure */}
    {isDesktopOrLaptop && (
      <section className="topSection-pc" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
        <div className="homeTop-pc">
          <h1 className="home-title-pc" style={{ color: colors[currentColorIndex] }}>{t('homeTop.title')}</h1>
          <h3 className="home-dsc-pc" style={{ color: colors[currentColorIndex] }}>{t('homeTop.description')}</h3>
          <button className="home-btn-pc" onClick={() => { scrollToSection('gallery-section') }}>{t('homeTop.discover')}</button>
        </div>
      </section>
    )}
    {/* Mobile Structure */}
    {isTabletOrMobile && (
      <section className="topSection-mobile" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
        <div className="homeTop-mobile">
          <h1 className="home-title-mobile" style={{ color: colors[currentColorIndex] }}>{t('homeTop.title')}</h1>
          <h3 className="home-dsc-mobile" style={{ color: colors[currentColorIndex] }}>{t('homeTop.description')}</h3>
          <button className="home-btn-mobile" onClick={() => { scrollToSection('gallery-section') }}>{t('homeTop.discover')}</button>
        </div>
      </section>
    )}
  </div>
  );
}

export default DiscoverSection;
