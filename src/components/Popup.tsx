// Popup.tsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './style/popup.css';

const Popup = ({ show, onClose }) => {
  return (
    <CSSTransition in={show} timeout={300} classNames="popup" unmountOnExit>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-black opacity-50 absolute inset-0" onClick={onClose}></div>
        <div className="bg-white popup-bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-auto overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <div className="popup-content">
            <p className="text-gray-700">
              This app provides only information, is not medical or treatment advice and may not be treated as such by the user. As such, this app may not be relied upon for the purposes of medical diagnosis or as a recommendation for medical care treatment. All content, including text, graphics, images and information, contained on or available through this app is for general information purposes only.
              <br /><br />
              You are strongly encouraged to confirm any information from or through this app with your physician or another professional healthcare provider and to review all information regarding any medical condition or treatment with your physician or other professional healthcare provider.
              <br /><br />
              You must never rely on any information obtained using this app for any diagnosis or recommendation for medical treatment. You must never rely on the information received from this app as an alternative to medical advice from your physician or other professional healthcare provider. You must never disregard professional medical advice or delay seeking medical treatment as a result of any information you have seen or accessed through this app. If you have any specific questions about any medical matter, you should consult your physician or other professional healthcare provider. You think you might be suffering from any medical condition. You should seek immediate medical attention.
            </p>
          </div>
          <button onClick={onClose} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 mt-4">
            I Agree
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Popup;
