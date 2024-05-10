import { useMediaQuery } from 'react-responsive'
import aboutFamilyImg from "../Styles/Images/paper.png"

const About = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
            {isTabletOrMobile && <>
                <div className="aboutFamily">
                    <div className="aboutFamily-title">
                        <h3>About Our Family</h3>
                        <img className="aboutFamily-img" src={aboutFamilyImg} alt=""></img>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default About