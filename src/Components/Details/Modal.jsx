import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Modal = ({ show, onClose, className, children }) => {
  if (!show) {
    return null;
  }

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      onClose()
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      {isDesktopOrLaptop && (
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
      )}
    </section>
  );
};

export default Modal;
