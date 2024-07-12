import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const Card = ({ Image = "https://via.placeholder.com/260x270", Price = "$59", Area = "20m²", onCardClick, Guests = "2" }) => {
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

  const handleCardClick = () => {
    onCardClick({ Image, Price: displayedPrice, Area });
  };

  return (
    <div className={`room-card ${cardClassName}`}>
      <img className="room-image" onClick={handleCardClick} src={Image} alt=" " />
      <div className="room-details">
        <div className="room-info">
          <div className="room-type" onClick={handleCardClick}>{t('rooms.doubleroom')}</div>
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
          <div className="guests">
            <span>{Guests}</span>
          </div>
          <div className="area">
            <span>{Area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
