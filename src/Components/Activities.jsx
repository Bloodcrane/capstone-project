import { useMediaQuery } from 'react-responsive'

import fishing from "../Styles/Images/Activities/fishing.png"
import museum from "../Styles/Images/Activities/museum.png"
import hiking from "../Styles/Images/Activities/hiking.png"
import harvesting from "../Styles/Images/Activities/harvesting.png"
import cooking from "../Styles/Images/Activities/cookingmasterclass.png"
import riding from "../Styles/Images/Activities/horsebackriding.png"

const Activities = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className='activities-desktop'>
                    <div style={{backgroundImage: `url(${fishing})`}}>
                        <p>Fishing</p>
                    </div>
                    <div style={{backgroundImage: `url(${museum})`}}>
                        <p>Museum</p>
                    </div>
                    <div style={{backgroundImage: `url(${hiking})`}}>
                        <p>Hiking</p>
                    </div>
                    <div style={{backgroundImage: `url(${harvesting})`}}>
                        <p>Harvesting</p>
                    </div>
                    <div style={{backgroundImage: `url(${cooking})`}}>
                        <p>Cooking Masterclass</p>
                    </div>
                    <div style={{backgroundImage: `url(${riding})`}}>
                        <p>Horseback Riding</p>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <div className='activities-mobile'>
                    <div style={{backgroundImage: `url(${fishing})`}}>
                        <p>Fishing</p>
                    </div>
                    <div style={{backgroundImage: `url(${museum})`}}>
                        <p>Museum</p>
                    </div>
                    <div style={{backgroundImage: `url(${hiking})`}}>
                        <p>Hiking</p>
                    </div>
                    <div style={{backgroundImage: `url(${harvesting})`}}>
                        <p>Harvesting</p>
                    </div>
                    <div style={{backgroundImage: `url(${cooking})`}}>
                        <p>Cooking Masterclass</p>
                    </div>
                    <div style={{backgroundImage: `url(${riding})`}}>
                        <p>Horseback Riding</p>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Activities