import React from 'react';
import Card from './Card';
import { useMediaQuery } from 'react-responsive';

const RoomSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className="RoomsContainer">
      <div className="RContentWrapper">
        <h1 className="RTitle">Rooms</h1>
        {isDesktopOrLaptop && (
          // Desktop Structure
          <section className='cardSection desktop'>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png'/>
            <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png'/>
          </section>
        )}
        
        {isTabletOrMobile && (
          // Mobile Structure
          <section className='cardSection mobile'>
            <div className='mobileContainer'>
              <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094270/Room1_dsuv5f.png'/>
              {/* <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094318/Room2_cnoyzd.png'/>
              <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room3_hnqmmi.png'/>
              <Card Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715094320/Room4_rn95nw.png'/> */}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default RoomSection;
