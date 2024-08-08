// Footer.tsx
import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-teal-500 py-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6">
    <div className="flex items-center mb-4 md:mb-0">
      <img className="w-8 h-8 mr-2 rounded-full" src={logo} alt="Logo" />
      <p className="text-white text-sm text-center md:text-left">
        &copy; 2024 Baby Formula Calculator App. All Rights Reserved.
      </p>
    </div>
    <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-white text-sm">
      <a href="#home" className="hover:underline">
        Home
      </a>
      <span className="hidden md:inline">|</span>
      <a href="#about" className="hover:underline">
        About Us
      </a>
      <span className="hidden md:inline">|</span>
      <a href="#history" className="hover:underline">
        History
      </a>
      <span className="hidden md:inline">|</span>
      <a href="#testimonials" className="hover:underline">
        Testimonials
      </a>
      <span className="hidden md:inline">|</span>
      <a href="#privacy" className="hover:underline">
        Privacy Policy
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
