import React from 'react';
import { useMediaQuery } from 'react-responsive';

const MapEmbed = ({width = 550}) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const deviceType = isDesktopOrLaptop ? 'google-map-desktop' : 'google-map-mobile';
  const mapDeviceType = isDesktopOrLaptop ? 'map-iframe-desktop' : 'map-iframe-mobile';

  return (
    <div className={`google-map ${deviceType}`}>
      <iframe className={`map-iframe ${mapDeviceType}`}
        title="Google Map"
        width={width}
        height="500"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121907.94400442487!2d42.3767005!3d41.9024464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d184b9b10326b%3A0xb78400028765c37c!2sChkhakoura!5e0!3m2!1sen!2s!4v1640385142927!5m2!1sen!2s&amp;t=k"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
