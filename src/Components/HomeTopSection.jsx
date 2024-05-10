import '../Styles/HomeTopSection.css'
import { useMediaQuery } from 'react-responsive'

const HomeTopSection = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <section className="topSection-pc">
                    <div className="homeTop-pc">
                        <h1 className="home-title-pc">Guesthouse Nostalgia</h1>
                        <h3 className="home-dsc-pc">Your tranquil escape begins here.</h3>
                        <button className="home-btn-pc">Discover More</button>
                    </div>
                </section>
            </>}
            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <section className="topSection-mobile">
                    <div className="homeTop-mobile">
                        <h1 className="home-title-mobile">Guesthouse Nostalgia</h1>
                        <h3 className="home-dsc-mobile">Your tranquil escape begins here.</h3>
                        <button className="home-btn-mobile">Discover More</button>
                    </div>
                </section>
            </>}
        </div>
    )
}

export default HomeTopSection