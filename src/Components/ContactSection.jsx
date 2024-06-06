import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';
import MapEmbed from './Details/MapEmbed';
import '../Styles/ContactSection.css';

import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
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

  const [isGeorgian, setIsGeorgian] = useState(i18n.language === 'ge');

  useEffect(() => {
    // Function to update the state when language changes
    const handleLanguageChange = (lng) => {
      setIsGeorgian(lng === 'ge');
    };

    // Set initial state based on the current language
    handleLanguageChange(i18n.language);

    // Subscribe to language change events
    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup function to unsubscribe from language change events
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div>
      {/* Desktop Structure */}
      <h1 className="CTitle">{t('contact.title')}</h1>
      {isDesktopOrLaptop && (
        <section id='contact-section' className="contactSection-desktop">
          <div className='map-container-desktop'>
            <MapEmbed width={660}/>
          </div>
          <div className={`contact-form ${isGeorgian ? 'ge' : ''}`}>
            <h2 className={`gefont ${isGeorgian ? 'ge' : ''}`}>{t('contact.title')}</h2>
            <h4 className={`gefont ${isGeorgian ? 'ge' : ''}`}>{t('contact.qa')}</h4>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder={t('contact.email')} />
              </div>
              <div className="form-group">
                <input type="tel" id="number" name="number" required placeholder={t('contact.phone')} />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" required placeholder={t('contact.message')}></textarea>
              </div>
              <button type="submit" className={`gefont ${isGeorgian ? 'ge' : ''}`}>{t('contact.submit')}</button>
            </form>
          </div>
        </section>
      )}
      {/* Mobile Structure */}
      {isTabletOrMobile && (
        <section id='contact-section' className="contactSection-mobile">
          <div className="contact-form-mobile">
            <h2 className={`gefont-mobile ${isGeorgian ? 'ge' : ''}`}>{t('contact.title')}</h2>
            <h4 className={`gefont ${isGeorgian ? 'ge' : ''}`}>{t('contact.qa')}</h4>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input className={`gefont ${isGeorgian ? 'ge' : ''}`} type="email" id="email" name="email" required placeholder={t('contact.email')} />
              </div>
              <div className="form-group">
                <input className={`gefont ${isGeorgian ? 'ge' : ''}`} type="tel" id="number" name="number" required placeholder={t('contact.phone')} />
              </div>
              <div className="form-group">
                <textarea className={`gefont ${isGeorgian ? 'ge' : ''}`} id="message" name="message" required placeholder={t('contact.message')}></textarea>
              </div>
              <button className={`gefont ${isGeorgian ? 'ge' : ''}`} type="submit">{t('contact.submit')}</button>
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
