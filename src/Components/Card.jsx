import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Card = ({ Image = "https://via.placeholder.com/260x270", Price = "$59", Area = "20m²" }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const cardClassName = isDesktopOrLaptop ? 'room-card-desktop' : 'room-card-mobile';

  return (
    <div className={`room-card ${cardClassName}`}>
      <img className="room-image" src={Image} alt="RoomImage" />
      <div className="room-details">
        <div className="room-info">
          <div className="room-type">Double Room</div>
          <div className="price">
            <span className="starting-from">Starting from</span>
            <span className="price-value">{Price}</span>
            <div className="price-toggle">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="room-amenities">
          <div className="guests"></div>
          <div className="area">
            <span>{Area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
