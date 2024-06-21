import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ImageCard = ({ Image = "https://via.placeholder.com/260x270", Price = "$59", Area = "20m²" }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const cardClassName = isDesktopOrLaptop ? 'gallery-card-desktop' : 'gallery-card-mobile';

  return (
    <div className={`gallery-card ${cardClassName}`}>
      <img className="gallery-image" src={Image} alt="RoomImage" />
    </div>
  );
}

export default ImageCard;
