import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png'; // Update with the correct path to your logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='w-full rounded-full isolate bg-white/20 shadow-lg ring-1 ring-black/5 mb-16'>
      <div className="flex justify-between rounded-full items-center pl-5 pr-5 backdrop-blur-md ">
        <div className="img">
          <img src={Logo} alt="Logo" className='h-16 mr-5 rounded-full' />
        </div>
        <div className="hidden md:flex">
          <ul className='flex'>
            <li className='p-7 text-white'><Link to="/home">Home</Link></li>
            <li className='p-7 text-white'><Link to="/aboutus">About Us</Link></li>
            <li className='p-7 text-white'><Link to="/history">History</Link></li>
            <li className='p-7 text-white'><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className='text-white pr-5 pl-5 pt-3 pb-3 rounded-full bg-teal-500 shadow-white shadow-md'>
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
      {isOpen && (
        <div className="md:hidden">
          <ul className='flex flex-col items-center'>
            <li className='p-4 text-white'><Link to="/home">Home</Link></li>
            <li className='p-4 text-white'><Link to="/aboutus">About Us</Link></li>
            <li className='p-4 text-white'><Link to="/history">History</Link></li>
            <li className='p-4 text-white'><Link to="/testimonials">Testimonials</Link></li>
            <li className='p-4'>
              <button className='text-white pr-4 pl-4 pt-1 pb-1 rounded-full bg-teal-600 shadow-white shadow-md'>
                Download Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
