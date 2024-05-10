import '../Styles/HeaderNavigation.css';
import { useMediaQuery } from 'react-responsive'

const HeaderNav = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <header>
                    <h3 className='pcLogo'>Nostalgia</h3>
                    <nav>
                        <button>Rooms</button>
                        <button>About Family</button>
                        <button>Activities</button>
                        <button>Nearby</button>
                        <button>Contact Us</button>
                    </nav>
                    <div>
                        <select id="language-dropdown">
                            <option value="en">ENG</option>
                            <option value="ge">GEO</option>
                        </select>
                        <select id="currency-dropdown">
                            <option value="usd">USD</option>
                            <option value="gel">GEL</option>
                        </select>
                    </div>
                </header>
            </>}
            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <header>
                    <nav>
                        <button className='mobileShowButton'></button>
                    </nav>
                    <h3 className='mobileLogo'>Nostalgia</h3>
                    <div>
                        <select id="language-dropdown">
                            <option value="en">ENG</option>
                            <option value="ge">GEO</option>
                        </select>
                    </div>
                </header>
            </>}
        </div>
    )
}

export default HeaderNav