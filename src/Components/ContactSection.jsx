import React from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';
import MapEmbed from './Details/MapEmbed';
import '../Styles/ContactSection.css';

const ContactSection = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send the message. It seems that the site developer has not set the default email address or there is an issue with the email service configuration. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <div>
      {/* Desktop Structure */}
      <h1 className="CTitle">Contact Us</h1>
      {isDesktopOrLaptop && (
        <section id='contact-section' className="contactSection-desktop">
          <div className='map-container-desktop'>
            <MapEmbed width={660}/>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <h4>Questions? Let's talk.</h4>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder="Your Email Here*" />
              </div>
              <div className="form-group">
                <input type="tel" id="number" name="number" required placeholder="Your Number Here*" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" required placeholder="Your Message Here*"></textarea>
              </div>
              <button type="submit">Send Your Message!</button>
            </form>
          </div>
        </section>
      )}
      {/* Mobile Structure */}
      {isTabletOrMobile && (
        <section id='contact-section' className="contactSection-mobile">
          <div className="contact-form-mobile">
            <h2>Contact Us</h2>
            <h4>Questions? Let's talk.</h4>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder="Your Email Here*" />
              </div>
              <div className="form-group">
                <input type="tel" id="number" name="number" required placeholder="Your Number Here*" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" required placeholder="Your Message Here*"></textarea>
              </div>
              <button type="submit">Send Your Message!</button>
            </form>
          </div>
          <div className='map-container-mobile'>
            <MapEmbed width={400} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ContactSection;
