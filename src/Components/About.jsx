import { useMediaQuery } from 'react-responsive'
import aboutFamilyImg from "../Styles/Images/paper.png"
import { React, useState } from 'react'

import "../Styles/AboutSection.css"

const About = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [showPopupMobile, setShowPopupMobile] = useState(false);

    const handleContinueClick = () => {
        setShowPopupMobile(true);
    };

    return (
        <div>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className="aboutFamily">
                    <div className="aboutFamily-title">
                        <h3>About Our Family</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt=""></img>
                    </div>
                    <div className="aboutFamily-history">
                        <h4>Family History</h4>
                        <p>In the village of Chkhakoura, the compact settlement of the population who migrated from Zemoachara
                            began at the beginning of the 20th century. One of the first settlers was
                            Suleiman Beridze, the ancestor of our family, who purchased land plots between 1913 and 1915
                            from Ivane Sikos dze Eristavi, the prince of the Fartkhmi community residing in Chokhatauri.
                            This is confirmed by documents from that time, some of which are now museum exhibits,
                            with a portion of them belonging to our family. Presently, we represent the fifth generation of the Suleiman Beridze
                            lineage.
                        </p>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && (
                <div className="aboutFamily-mobile">
                    <div className={showPopupMobile ? "aboutFamily-title-mobile hidden" : "aboutFamily-title-mobile"}>
                        <h3>About Our Family</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt="" />
                        {!showPopupMobile && <button onClick={handleContinueClick}>Continue To Story</button>}
                    </div>
                    {showPopupMobile && (
                        <div className="aboutFamily-popup-mobile">
                            <h4>Family History</h4>
                            <p>In the village of Chkhakoura, the compact settlement of the population who migrated from Zemoachara
                                began at the beginning of the 20th century. One of the first settlers was
                                Suleiman Beridze, the ancestor of our family, who purchased land plots between 1913 and 1915
                                from Ivane Sikos dze Eristavi, the prince of the Fartkhmi community residing in Chokhatauri.
                                This is confirmed by documents from that time, some of which are now museum exhibits,
                                with a portion of them belonging to our family. Presently, we represent the fifth generation of the Suleiman Beridze
                                lineage.
                            </p>
                            <button onClick={() => setShowPopupMobile(false)}>Back To The Picture</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default About
