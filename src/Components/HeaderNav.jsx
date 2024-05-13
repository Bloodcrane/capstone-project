import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../Styles/HeaderNavigation.css';

import rooms_icon from '../Styles/Images/rooms.png'
import nearby_icon from '../Styles/Images/nearby.png'
import contact_icon from '../Styles/Images/contact.png'
import about_icon from '../Styles/Images/about.png'
import activities_icon from '../Styles/Images/activities-1.png'

const HeaderNav = () => {
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
        <header>
          <h3 className="pcLogo">Nostalgia</h3>
          <nav>
            <button className='nav-button-desktop' onClick={() => scrollToSection('rooms-section')}>Rooms</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('about-section')}>About Family</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('activities-section')}>Activities</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('nearby-section')}>Nearby</button>
            <button className='nav-button-desktop' onClick={() => scrollToSection('contact-section')}>Contact Us</button>
          </nav>
          <div>
            <select id="language-dropdown">
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
        <header>
          <nav>
            <button className="mobileShowButton" onClick={toggleMobileNav}></button>
            <div className={showMobileNav ? 'mobile-nav show' : 'mobile-nav'}>
            <button className="mobileHideButton" onClick={toggleMobileNav}></button>
                <button className="mobileCloseButton" onClick={toggleMobileNav}></button>
                <div className='navButton-mobile' onClick={() => {scrollToSection('rooms-section'); toggleMobileNav()}}>
                    <img src={rooms_icon} alt="" />
                    <span>Rooms</span>
                </div>
                <div className='navButton-mobile' onClick={() => {scrollToSection('about-section'); toggleMobileNav()}}>
                    <img src={about_icon} alt="" />
                    <span>About Family</span>
                </div>
                <div className='navButton-mobile' onClick={() => {scrollToSection('activities-section'); toggleMobileNav()}}>
                    <img src={activities_icon} alt="" />
                    <span>Activities</span>
                </div>
                <div className='navButton-mobile' onClick={() => {scrollToSection('nearby-section'); toggleMobileNav()}}>
                    <img src={nearby_icon} alt="" />
                    <span>Nearby</span>
                </div>
                <div className='navButton-mobile' onClick={() => {scrollToSection('contact-section'); toggleMobileNav()}}>
                    <img src={contact_icon} alt="" />
                    <span>Contact Us</span>
                </div>
            </div>
          </nav>
          <h3 className="mobileLogo">Nostalgia</h3>
          <div>
            <select id="language-dropdown">
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
