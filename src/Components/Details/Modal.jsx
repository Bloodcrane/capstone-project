// Modal.js
import React from 'react';

const Modal = ({ show, onClose, className, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          {children}
          <label htmlFor="">დასამთავრებელია!</label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
