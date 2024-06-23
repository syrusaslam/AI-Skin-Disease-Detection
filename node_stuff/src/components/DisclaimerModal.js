import React from 'react';
import './DisclaimerModal.css';

function DisclaimerModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Disclaimer</h2>
        <p>
          The AI-powered skin disease detection tool is designed to assist in identifying potential skin conditions. However, it is not a substitute for professional medical advice, diagnosis, or treatment. The AI may make mistakes, and its predictions should not be treated as a definitive diagnosis. Always consult a qualified healthcare provider for any concerns regarding your skin health.
        </p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DisclaimerModal;
