// RoomSection.js
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/RoomSection.css";
import "../Styles/Modal.css";
import Card from './Details/Card';
import Modal from './Details/Modal';

const RoomSection = () => {
  const { t } = useTranslation();
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent({ ...content, className: 'modal-open' }); // Set a unique className
    const section = document.getElementById('rooms-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseModal = () => {
    setModalContent({...null, className: 'modal-closed'});
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000
  };

  return (
    <div id="rooms-section" className="RoomsContainer">
      <div className="RContentWrapper">
        <h1 className="RTitle">{t('rooms.title')}</h1>
        {isDesktopOrLaptop && (
          <section className='cardSection-desktop'>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png' Price='$59' onCardClick={handleCardClick} Area="12m²" Guests="2"/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png' Price='$79' onCardClick={handleCardClick} Area="20m²" Guests="3"/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png' Price='$59' onCardClick={handleCardClick} Area="15m²" Guests="2"/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png' Price='$59' onCardClick={handleCardClick} Area="12m²" Guests="2"/>
          </section>
        )}

        {isTabletOrMobile && (
          <section className='cardSection-mobile'>
            <div className='slider-container'>
              <Slider {...mobileSettings}>
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png' Price='$59' onCardClick={handleCardClick} Area="12m²" Guests="2"/>
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png' Price='$79' onCardClick={handleCardClick} Area="20m²" Guests="3"/>
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png' Price='$59' onCardClick={handleCardClick} Area="15m²" Guests="2"/>
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png' Price='$59' onCardClick={handleCardClick} Area="12m²" Guests="2"/>
              </Slider>
            </div>
          </section>
        )}
      </div>

      {modalContent && (
        <Modal show={modalContent !== null} onClose={handleCloseModal} className={modalContent.className}>
          <img className="room-image-modal" src={modalContent.Image} alt="RoomImage" />
          <div className="room-info-modal">
            <div className="room-type-modal">{t('rooms.doubleroom')}</div>
            <label className='room-description-modal'>Room Description</label>
            <div className="price-modal">
              <span className="price-value-modal">{modalContent.Price}</span>
            </div>
            <div className="room-amenities-modal">
              <div className="area-modal">
                <span>{modalContent.Area}</span>
              </div>
              <div className="guests-modal"></div>
                <span>{modalContent.Guests}</span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default RoomSection;
