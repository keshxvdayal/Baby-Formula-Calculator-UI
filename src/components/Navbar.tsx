import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png'; // Update with the correct path to your logo
import "./style/nav.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full rounded-full isolate bg-nav shadow-lg ring-1 ring-black/5 mb-16 transition-transform duration-300 ${sticky ? 'sticky top-0 z-50' : ''}`}>
      <div className="flex justify-between rounded-full items-center pl-5 pr-5">
        <div className="img">
          <img src={Logo} alt="Logo" className='h-16 mr-5 rounded-full' />
        </div>
        <div className="hidden md:flex">
          <ul className='flex'>
            <li className='p-7 text text-white text-1xl'><a href="#home">Home</a></li>
            <li className='p-7 text text-white text-1xl'><a href="#aboutus">About Us</a></li>
            <li className='p-7 text text-white text-1xl'><a href="#history">Features</a></li>
            <li className='p-7 text text-white text-1xl'><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className='text-white pr-6 pl-6 pt-3 pb-3 button rounded-full bg-teal-500'>
            Download Now
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <MinusIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {/* Full-Screen Blur Background */}
      <div className={` h-full backdrop-blur-lg bg-black transition-opacity duration-300 ${isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`}></div>
      {/* Sliding Menu */}
      <div className={`fixed inset-y-0 right-0 w-full bg-nav text-white transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center relative">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-white">
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className='flex flex-col items-center'>
            <li className='p-4 text-white'><a href="#home">Home</a></li>
            <li className='p-4 text-white'><a href="#aboutus">About Us</a></li>
            <li className='p-4 text-white'><a href="#history">History</a></li>
            <li className='p-4 text-white'><a href="#testimonials">Testimonials</a></li>
            <li className='p-4'>
              <button className='text-white pr-5 pl-5 pt-1 pb-1 rounded-full button bg-teal-600'>
                Download Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
