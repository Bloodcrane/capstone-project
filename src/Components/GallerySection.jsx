import { React } from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/GallerySection.css";
import ImageCard from './ImageCard';


const GallerySection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  // Settings for the mobile slider
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div id="gallery-section" className="galleryContainer">
      <div className="GContentWrapper">
        <h1 className="GTitle">Gallery</h1>
        {isDesktopOrLaptop && (
          // Desktop Structure
          <section className='gallerySection-desktop'>
            <div className='slider-container'>
              <Slider {...settings}>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616836/GalleryView/homeView_e0lywc.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616825/GalleryView/waterfall_wpteer.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616819/GalleryView/woodenHut_n6iryg.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616815/GalleryView/rainbow_mekkwf.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616814/GalleryView/snowyMountains_jadqif.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616806/GalleryView/winter_xlrnxg.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616806/GalleryView/khachapuriMountainView_ojbs0a.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616804/GalleryView/greenField_l9rgfc.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616801/GalleryView/makingVodka_rg23ze.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616800/GalleryView/sunMist_pwlkg5.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616798/GalleryView/windowView_pbcisw.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715618123/GalleryView/grannyAndKid_ucvaye_x6kcns.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616788/GalleryView/winter2_pm13az.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616788/GalleryView/homeView2_j1nopx.png'/>
                </Slider>
            </div>
          </section>
        )}

        {isTabletOrMobile && (
          // Mobile Structure with Slider
          <section className='cardSection-mobile'>
            <div className='slider-container'>
              <Slider {...settings}>
              <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616836/GalleryView/homeView_e0lywc.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616825/GalleryView/waterfall_wpteer.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616819/GalleryView/woodenHut_n6iryg.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616815/GalleryView/rainbow_mekkwf.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616814/GalleryView/snowyMountains_jadqif.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616806/GalleryView/winter_xlrnxg.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616806/GalleryView/khachapuriMountainView_ojbs0a.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616804/GalleryView/greenField_l9rgfc.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616801/GalleryView/makingVodka_rg23ze.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616800/GalleryView/sunMist_pwlkg5.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616798/GalleryView/windowView_pbcisw.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715618123/GalleryView/grannyAndKid_ucvaye_x6kcns.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616788/GalleryView/winter2_pm13az.png'/>
                    <ImageCard Image='https://res.cloudinary.com/dja1ebgeq/image/upload/v1715616788/GalleryView/homeView2_j1nopx.png'/>
                </Slider>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default GallerySection;
