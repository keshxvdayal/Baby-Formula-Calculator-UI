import React, { useState } from "react";
import logo from "../assets/logo.png";
// import Popup from "./Popup";
import Popup from "./Popup.tsx"

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <footer className='bg-teal-500 py-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6'>
          <div className='flex items-center mb-4 md:mb-0'>
            <img className='w-8 h-8 mr-2 rounded-full' src={logo} alt='Logo' />
            <p className='text-white text-sm text-center md:text-left'>
              &copy; 2024 Baby Formula Calculator App. All Rights Reserved.
            </p>
          </div>
          <div className='flex flex-wrap justify-center md:justify-end space-x-4 text-white text-sm'>
            <a href='#home' className='hover:underline'>
              Home
            </a>
            <span className='hidden md:inline'>|</span>
            <a href='#aboutus' className='hover:underline'>
              About Us
            </a>
            <span className='hidden md:inline'>|</span>
            <a href='#features' className='hover:underline'>
              Features
            </a>
            <span className='hidden md:inline'>|</span>
            <a href='#testimonials' className='hover:underline'>
              Testimonials
            </a>
            <span className='hidden md:inline'>|</span>
            <a href='#privacy' onClick={handlePrivacyClick} className='hover:underline'>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      <Popup show={showPopup} onClose={closePopup} />
    </>
  );
};

export default Footer;
