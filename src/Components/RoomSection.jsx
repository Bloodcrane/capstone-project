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
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png' Price='$59' onCardClick={handleCardClick} />
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png' Price='$79' onCardClick={handleCardClick} />
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png' Price='$99' onCardClick={handleCardClick} />
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png' Price='$119' onCardClick={handleCardClick} />
          </section>
        )}

        {isTabletOrMobile && (
          <section className='cardSection-mobile'>
            <div className='slider-container'>
              <Slider {...mobileSettings}>
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png' Price='$59' onCardClick={handleCardClick} />
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png' Price='$79' onCardClick={handleCardClick} />
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png' Price='$99' onCardClick={handleCardClick} />
                <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png' Price='$119' onCardClick={handleCardClick} />
              </Slider>
            </div>
          </section>
        )}
      </div>

      {modalContent && (
        <Modal show={modalContent !== null} onClose={handleCloseModal} className={modalContent.className}>
          <img className="room-image" src={modalContent.Image} alt="RoomImage" />
          <div className="room-info">
            <div className="room-type">{t('rooms.doubleroom')}</div>
            <div className="price">
              <span className="starting-from">{t('rooms.starting')}</span>
              <span className="price-value">{modalContent.Price}</span>
            </div>
            <div className="room-amenities">
              <div className="guests"></div>
              <div className="area">
                <span>{modalContent.Area}</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default RoomSection;
