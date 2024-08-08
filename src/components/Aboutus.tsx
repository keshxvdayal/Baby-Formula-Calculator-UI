import React from 'react';
import profileImage from '../assets/aboutimg.png'; // Replace with the actual path to the image

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-10">About Me</h1>
      <div className="rounded-lg flex flex-col md:flex-row items-center md:items-start justify-center p-6 w-full sm:w-3/4">
        
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img src={profileImage} alt="Profile" className="h-80 sm:h-64 md:h-96 shadow-lg shadow-black rounded-lg" />
        </div>
       
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">Dr. Name Here</h2>
          <h3 className="text-lg sm:text-xl text-gray-500 mb-4">Pediatrician</h3>
          <p className="text-gray-700 text-sm sm:text-base md:w-96">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
