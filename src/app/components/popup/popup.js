import React from 'react';
import './popup.scss';

const Popup = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-overlay__content">
        <button className="popup-overlay__content--close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
