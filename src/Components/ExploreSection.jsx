import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';
import "../Styles/ExploreSection.css";

import beach from "../Styles/Images/Nearby/sea.png";
import mountains from "../Styles/Images/Nearby/mountains.png";
import sightseeing from "../Styles/Images/Nearby/sightseeing.png";
import cuisine from "../Styles/Images/Nearby/cuisine.png";
import CollapsableCard from './Details/CollapsableCard';

const ExploreSection = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const [openCardId, setOpenCardId] = useState(null);

    const handleToggle = (id) => {
        setOpenCardId(prevOpenCardId => prevOpenCardId === id ? null : id);
    };

    return (
        <div id="nearby-section">
            <h2>Explore Nearby</h2>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className='explore-section-desktop'>
                    <div className='explore-card'>
                        <h4 className='explore-card-title'>Sandy and rocky beaches</h4>
                        <img src={beach} alt=''></img>
                        <div className='explore-card-details'>
                            <p>Batumi Beach 103km</p>
                            <p>Grigoleti 86km</p>
                            <p>Ureki 82km</p>
                        </div>
                    </div>

                    <div className='explore-card'>
                        <h4 className='explore-card-title'>Georgian Mountains</h4>
                        <img src={mountains} alt=''></img>
                        <div className='explore-card-details'>
                            <p>Nabeghlavi 12km</p>
                            <p>Bakhmaro 20km</p>
                            <p>Gomismta 77km</p>
                        </div>
                    </div>

                    <div className='explore-card'>
                        <h4 className='explore-card-title'>Sightseeing</h4>
                        <img src={sightseeing} alt=''></img>
                        <div className='explore-card-details'>
                            <p>Miniature park 79km</p>
                            <p>Musicians park 76km</p>
                            <p>Batumi City 12km</p>
                        </div>
                    </div>

                    <div className='explore-card'>
                        <h4 className='explore-card-title'>Cuisine</h4>
                        <img src={cuisine} alt=''></img>
                        <div className='explore-card-details'>
                            <p>Gurian Pie</p>
                            <p>Brinjula - Gurian crepe</p>
                            <p>Beans with Pkhali</p>
                        </div>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <div className='explore-section-mobile'>
                    <CollapsableCard id={1} isOpen={openCardId === 1} handleToggle={handleToggle} title='Sandy and rocky beaches' image={beach} textUpper='Batumi Beach 103km' textMiddle='Grigoleti 86km' textLower='Ureki 82km'/>
                    <CollapsableCard id={2} isOpen={openCardId === 2} handleToggle={handleToggle} title='Georgian Mountains' image={mountains} textUpper='Nabeghlavi 12km' textMiddle='Bakhmaro 20km' textLower='Gomismta 77km'/>
                    <CollapsableCard id={3} isOpen={openCardId === 3} handleToggle={handleToggle} title='Sightseeing' image={sightseeing} textUpper='Miniature park 79km' textMiddle='Musicians park 76km' textLower='Batumi City 12km'/>
                    <CollapsableCard id={4} isOpen={openCardId === 4} handleToggle={handleToggle} title='Cuisine' image={cuisine} textUpper='Gurian Pie' textMiddle='Brinjula - Gurian crepe' textLower='Beans with Pkhali'/>
                </div>
            </>}
        </div>
    );
}

export default ExploreSection;
