import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Modal = ({ show, onClose, className, children }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  if (!show || !isDesktopOrLaptop) {
    return null;
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      onClose();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className={`modal-overlay ${className}`}>
        <div className="modal">
          <button className="close-button" onClick={onClose}>×</button>
          <div className="modal-content">
            {children}
            <div className='modal-bottom-content'>
              <button className='modal-contact-button' onClick={() => scrollToSection('contact-section')}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
