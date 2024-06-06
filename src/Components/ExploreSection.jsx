import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';
import "../Styles/ExploreSection.css";

import { useTranslation } from 'react-i18next';

import beach from "../Styles/Images/Nearby/sea.png";
import mountains from "../Styles/Images/Nearby/mountains.png";
import sightseeing from "../Styles/Images/Nearby/sightseeing.png";
import cuisine from "../Styles/Images/Nearby/cuisine.png";
import CollapsableCard from './Details/CollapsableCard';

import phBeach from "../Styles/Images/Nearby/phBeach.png"
import phCuisine from "../Styles/Images/Nearby/phCuisine.png"
import phMountains from "../Styles/Images/Nearby/phMountains.png"
import phBatumi from "../Styles/Images/Nearby/phBatumi.png"

const ExploreSection = () => {
    const { t } = useTranslation();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [openCardId, setOpenCardId] = useState(null);
    const [permanentVisibleCards, setPermanentVisibleCards] = useState([]);

    const handleToggle = (id) => {
        setOpenCardId(prevOpenCardId => prevOpenCardId === id ? null : id);
    };

    const handleMouseEnter = (id) => {
        if (!permanentVisibleCards.includes(id)) {
            setPermanentVisibleCards(prevVisibleCards => [...prevVisibleCards, id]);
        }
    };

    const handleClick = (id) => {
        if (permanentVisibleCards.includes(id)) {
            setPermanentVisibleCards(prevVisibleCards => prevVisibleCards.filter(cardId => cardId !== id));
        } else {
            setPermanentVisibleCards(prevVisibleCards => [...prevVisibleCards, id]);
        }
    };

    return (
        <div id="nearby-section">
            <h2>{t('explore.title')}</h2>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className='explore-section-desktop'>
                    <div
                        className={`explore-card ${permanentVisibleCards.includes(1) ? 'visible' : ''}`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onClick={() => handleClick(1)}
                    >
                        <div className='popup-Image'><img src={phBeach} alt="" /></div>
                        <h4 className='explore-card-title'>{t('explore.1')}</h4>
                        <img className='icon' src={beach} alt=''></img>
                        <div className='explore-card-details'>
                            <p>{t('explore.batumiBeach')} <br></br>103km</p>
                            <p>{t('explore.grigoleti')} <br></br>86km</p>
                            <p>{t('explore.ureki')} <br></br>82km</p>
                        </div>
                    </div>

                    <div
                        className={`explore-card-r ${permanentVisibleCards.includes(3) ? 'visible' : ''}`}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onClick={() => handleClick(3)}
                    >
                        <div className='popup-Image-r'><img src={phMountains} alt="" /></div>
                        <h4 className='explore-card-title'>{t('explore.2')}</h4>
                        <img className='icon' src={mountains} alt=''></img>
                        <div className='explore-card-details-r'>
                            <p>{t('explore.nabeglavi')} <br></br>12km</p>
                            <p>{t('explore.bakmaro')} <br></br>20km</p>
                            <p>{t('explore.gomismta')} <br></br>77km</p>
                        </div>
                    </div>

                    <div
                        className={`explore-card ${permanentVisibleCards.includes(2) ? 'visible' : ''}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onClick={() => handleClick(2)}
                    >
                        <div className='popup-Image'><img src={phBatumi} alt="" /></div>
                        <h4 className='explore-card-title'>{t('explore.3')}</h4>
                        <img className='icon' src={sightseeing} alt=''></img>
                        <div className='explore-card-details'>
                            <p>{t('explore.minipark')} <br></br>79km</p>
                            <p>{t('explore.musiciansPark')} <br></br>76km</p>
                            <p>{t('explore.batumiCity')} <br></br>12km</p>
                        </div>
                    </div>

                    <div
                        className={`explore-card-r ${permanentVisibleCards.includes(4) ? 'visible' : ''}`}
                        onMouseEnter={() => handleMouseEnter(4)}
                        onClick={() => handleClick(4)}
                    >
                        <div className='popup-Image-r'><img src={phCuisine} alt="" /></div>
                        <h4 className='explore-card-title'>{t('explore.4')}</h4>
                        <img className='icon' src={cuisine} alt=''></img>
                        <div className='explore-card-details-r'>
                            <p>{t('explore.gurianPie')}</p>
                            <p>{t('explore.brinjula1')} - <br></br>{t('explore.brinjula2')}</p>
                            <p>{t('explore.beans1')} <br></br>{t('explore.beans2')}</p>
                        </div>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <div className='explore-section-mobile'>
                    <CollapsableCard
                        id={1}
                        isOpen={openCardId === 1}
                        handleToggle={handleToggle}
                        title={t('explore.1')}
                        image={beach}
                        textUpper={`${t('explore.batumiBeach')} 103km`}
                        textMiddle={`${t('explore.grigoleti')} 86km`}
                        textLower={`${t('explore.ureki')} 82km`}
                    />
                    <CollapsableCard
                        id={2}
                        isOpen={openCardId === 2}
                        handleToggle={handleToggle}
                        title={t('explore.2')}
                        image={mountains}
                        textUpper={`${t('explore.nabeglavi')} 12km`}
                        textMiddle={`${t('explore.bakmaro')} 20km`}
                        textLower={`${t('explore.gomismta')} 77km`}
                    />
                    <CollapsableCard
                        id={3}
                        isOpen={openCardId === 3}
                        handleToggle={handleToggle}
                        title={t('explore.3')}
                        image={sightseeing}
                        textUpper={`${t('explore.minipark')} 79km`}
                        textMiddle={`${t('explore.musiciansPark')} 76km`}
                        textLower={`${t('explore.batumiCity')} 12km`}
                    />
                    <CollapsableCard
                        id={4}
                        isOpen={openCardId === 4}
                        handleToggle={handleToggle}
                        title={t('explore.4')}
                        image={cuisine}
                        textUpper={t('explore.gurianPie')}
                        textMiddle={`${t('explore.brinjula1')} - ${t('explore.brinjula2')}`}
                        textLower={`${t('explore.beans1')} ${t('explore.beans2')}`}
                    />
                </div>
            </>}
        </div>
    );
}

export default ExploreSection;
