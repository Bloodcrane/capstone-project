import { useMediaQuery } from 'react-responsive'
import "../Styles/ExploreSection.css"

const ExploreSection = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div id="nearby-section">
            <h2>Explore Nearby</h2>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className='explore-section-desktop'>
                    <div className='explore-card'>
                        <h4 className='explore-card-title'>Sandy and rocky beaches</h4>
                        <p>Batumi Beach</p>
                        <label>103km</label>
                        <p>Grigoleti</p>
                        <label>86km</label>
                        <p>Ureki</p>
                        <label>82km</label>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <div  className='explore-section-mobile'>

                </div>
            </>}
        </div>
    )
}

export default ExploreSection