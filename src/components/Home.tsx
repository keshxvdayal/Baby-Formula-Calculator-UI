import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import appStore from '../assets/app_store.png'; // Example path for App Store logo
import googlePlay from '../assets/googleplay.png'; // Example path for Google Play logo
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Navbar from './Navbar.tsx';
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const BabyFormulaCalculator: React.FC = () => {
    const parallaxRef = useRef(null);
    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-500 to-white p-6">
            <Navbar/>
        <header className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold w-full sm:w-3/4 lg:w-1/2 text-white drop-shadow-lg">
            Baby Formula Calculator Application
          </h1>
          <p className="text-white mt-4 text-center w-3/4 sm:w-1/2 lg:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's the 1500s, unknown printer took a galley of type and scrambled.
          </p>
        </header>
      
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="relative md:absolute md:left-0  mb-4 ">
            <div className="space-x-4">
              <FaFacebookF className="text-teal-800 m-4 text-xl" />
              <FaTwitter className="text-teal-800 m-4 text-xl" />
              <FaLinkedinIn className="text-teal-800 m-4 text-xl" />
            </div>
          </div>
      
          <ScrollParallax>
            <div className="flex justify-center space-x-6 mb-10">
              <img src={logo1} alt="Logo 1" className="h-40 sm:h-60 lg:h-80 mt-10" />
              <img src={logo2} alt="Logo 2" className="h-48 sm:h-72 lg:h-96" ref={parallaxRef} />
              <img src={logo3} alt="Logo 3" className="h-40 sm:h-60 lg:h-80 mt-10" />
            </div>
      
            <div className="text-center mb-10">
              <div className="flex justify-center space-x-6">
                <img src={appStore} alt="App Store" className="h-8 sm:h-10 mt-3" />
                <img src={googlePlay} alt="Google Play" className="h-12 sm:h-16 mb-8" />
              </div>
            </div>
          </ScrollParallax>
        </div>
      </div>
      
    );
};

export default BabyFormulaCalculator;
