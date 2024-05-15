import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import '../Styles/HomeTopSection.css';

const DiscoverSection = () => {
  const { t } = useTranslation();

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
        <section className="topSection-pc">
          <div className="homeTop-pc">
            <h1 className="home-title-pc">{t('homeTop.title')}</h1>
            <h3 className="home-dsc-pc">{t('homeTop.description')}</h3>
            <button className="home-btn-pc" onClick={() => { scrollToSection('gallery-section') }}>{t('homeTop.discover')}</button>
          </div>
        </section>
      )}
      {/* Mobile Structure */}
      {isTabletOrMobile && (
        <section className="topSection-mobile">
          <div className="homeTop-mobile">
            <h1 className="home-title-mobile">{t('homeTop.title')}</h1>
            <h3 className="home-dsc-mobile">{t('homeTop.description')}</h3>
            <button className="home-btn-mobile" onClick={() => { scrollToSection('gallery-section') }}>{t('homeTop.discover')}</button>
          </div>
        </section>
      )}
    </div>
  );
}

export default DiscoverSection;
