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
                    <img src={fishing} alt=''></img>
                    <img src={museum} alt=''></img>
                    <img src={hiking} alt=''></img>
                    <img src={harvesting} alt=''></img>
                    <img src={cooking} alt=''></img>
                    <img src={riding} alt=''></img>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>

            </>}
        </div>
    )
}

export default Activities