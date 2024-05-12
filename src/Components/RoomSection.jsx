import React from 'react';
import Card from './Card';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/RoomSection.css";

const RoomSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  // Settings for the mobile slider
  const mobileSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true
  };

  return (
    <div className="RoomsContainer">
      <div className="RContentWrapper">
        <h1 className="RTitle">Rooms</h1>
        {isDesktopOrLaptop && (
          // Desktop Structure
          <section className='cardSection-desktop'>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png'/>
          </section>
        )}
        
        {isTabletOrMobile && (
          // Mobile Structure with Slider
          <section className='cardSection-mobile'>
            <div className='slider-container'>
              <Slider {...mobileSettings}>
                  <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png'/>
                  <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png'/>
                  <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png'/>
                  <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png'/>
                </Slider>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default RoomSection;
