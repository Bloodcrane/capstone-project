import '../Styles/ContactSection.css'
import { useMediaQuery } from 'react-responsive'
import MapEmbed from './Details/MapEmbed'

const ContactSection = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
        <div>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <section section id='contact-section' className="contactSection-desktop">
                    <div className='map-container-desktop'>
                    <MapEmbed/>
                    </div>
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <h4>Questions? Let's talk.</h4>
                        <form>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder="Your Email Here*" />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="number" required placeholder="Your Number Here*" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" required placeholder="Your Message Here*"></textarea>
                            </div>
                            <button type="submit">Send Your Message!</button>
                        </form>
                    </div>
                </section>
            </>}
            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <section id='contact-section' className="contactSection-mobile">
                    <div className="contact-form-mobile">
                        <h2>Contact Us</h2>
                        <h4>Questions? Let's talk.</h4>
                        <form>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder="Your Email Here*" />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="number" required placeholder="Your Number Here*" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" required placeholder="Your Message Here*"></textarea>
                            </div>
                            <button type="submit">Send Your Message!</button>
                        </form>
                    </div>
                    <div className='map-container-mobile'>
                        <MapEmbed width={400}/>
                    </div>
                </section>
            </>}
        </div>
    )
}

export default ContactSection