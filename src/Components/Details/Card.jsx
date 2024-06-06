import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const Card = ({ Image = "https://via.placeholder.com/260x270", Price = "$59", Area = "20m²" }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const { t } = useTranslation();

  const conversionRate = 2.8;

  const priceInUSD = parseFloat(Price.replace('$', ''));

  const [showInGEL, setShowInGEL] = useState(false);

  const handleCheckboxChange = () => {
    setShowInGEL(!showInGEL);
  };

  const displayedPrice = showInGEL ? `₾${(priceInUSD * conversionRate).toFixed(2)}` : `$${priceInUSD.toFixed(2)}`;

  const cardClassName = isDesktopOrLaptop ? 'room-card-desktop' : 'room-card-mobile';

  return (
    <div className={`room-card ${cardClassName}`}>
      <img className="room-image" src={Image} alt="RoomImage" />
      <div className="room-details">
        <div className="room-info">
          <div className="room-type">{t('rooms.doubleroom')}</div>
          <div className="price">
            <span className="starting-from">{t('rooms.starting')}</span>
            <span className="price-value">{displayedPrice}</span>
            <div className="price-toggle">
              <label className="switch">
                <input type="checkbox" checked={showInGEL} onChange={handleCheckboxChange} />
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
