import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import '../Styles/HeaderNavigation.css';
import useFontSwitcher from './FontSwitcher';

import rooms_icon from '../Styles/Images/rooms.png';
import nearby_icon from '../Styles/Images/nearby.png';
import contact_icon from '../Styles/Images/contact.png';
import about_icon from '../Styles/Images/about.png';
import activities_icon from '../Styles/Images/activities-1.png';

const HeaderNav = () => {
  const { t, i18n } = useTranslation();
  const { getFontFamily } = useFontSwitcher();

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [showMobileNav, setShowMobileNav] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      {/* Desktop Structure */}
      {isDesktopOrLaptop && (
        <header style={{ fontFamily: getFontFamily() }}>
          <h3 className="pcLogo">Nostalgia</h3>
          <nav>
            <button className='nav-button-desktop' onClick={() => scrollToSection('rooms-section')}>{t('nav.rooms')}</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('about-section')}>{t('nav.about')}</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('activities-section')}>{t('nav.activities')}</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('nearby-section')}>{t('nav.nearby')}</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('contact-section')}>{t('nav.contact')}</button>
          </nav>
          <div>
            <select id="language-dropdown" onChange={(e) => i18n.changeLanguage(e.target.value)}>
              <option value="en">ENG</option>
              <option value="ge">GEO</option>
            </select>
            <select id="currency-dropdown">
              <option value="usd">USD</option>
              <option value="gel">GEL</option>
            </select>
          </div>
        </header>
      )}

      {/* Mobile Structure */}
      {isTabletOrMobile && (
        <header style={{ fontFamily: getFontFamily() }}>
          <nav>
            <button className="mobileShowButton" onClick={toggleMobileNav}></button>
            <div className={showMobileNav ? 'mobile-nav show' : 'mobile-nav'}>
              <button className="mobileHideButton" onClick={toggleMobileNav}></button>
              <button className="mobileCloseButton" onClick={toggleMobileNav}></button>
              <div className='navButton-mobile' onClick={() => { scrollToSection('rooms-section'); toggleMobileNav() }}>
                <img src={rooms_icon} alt="" />
                <span>{t('nav.rooms')}</span>
              </div>
              <div className='navButton-mobile' onClick={() => { scrollToSection('about-section'); toggleMobileNav() }}>
                <img src={about_icon} alt="" />
                <span>{t('nav.about')}</span>
              </div>
              <div className='navButton-mobile' onClick={() => { scrollToSection('activities-section'); toggleMobileNav() }}>
                <img src={activities_icon} alt="" />
                <span>{t('nav.activities')}</span>
              </div>
              <div className='navButton-mobile' onClick={() => { scrollToSection('nearby-section'); toggleMobileNav() }}>
                <img src={nearby_icon} alt="" />
                <span>{t('nav.nearby')}</span>
              </div>
              <div className='navButton-mobile' onClick={() => { scrollToSection('contact-section'); toggleMobileNav() }}>
                <img src={contact_icon} alt="" />
                <span>{t('nav.contact')}</span>
              </div>
            </div>
          </nav>
          <h3 className="mobileLogo">Nostalgia</h3>
          <div>
            <select id="language-dropdown" onChange={(e) => i18n.changeLanguage(e.target.value)}>
              <option value="en">ENG</option>
              <option value="ge">GEO</option>
            </select>
          </div>
        </header>
      )}
    </div>
  );
};

export default HeaderNav;
