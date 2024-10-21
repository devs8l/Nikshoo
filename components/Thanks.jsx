import React from 'react';
import '../components/Thanks.css'; 

export function Thanks({ message, onClose, buttonText }) {
  return (
    <div className="custom-popup-overlay">
      <div className="custom-popup-content">
        {/* Close button */}
        <button className="custom-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>{message.title}</h2>
        <p>{message.body}</p>
        <button className="custom-explore-btn" onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
