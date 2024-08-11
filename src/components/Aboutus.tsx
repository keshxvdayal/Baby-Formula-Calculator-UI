import React from 'react';
import profileImage from '../assets/aboutimg.png'; // Replace with the actual path to the image

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen p-6  flex flex-col items-center" id='aboutus'>
      <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-10">About Me</h1>
      <div className="rounded-lg flex flex-col md:flex-row items-center md:items-start justify-center p-6 w-full sm:w-3/4">
        
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img src={profileImage} alt="Profile" className="h-96  sm:h-64 md:h-96 shadow-lg shadow-black rounded-lg" />
        </div>
       
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">Dr. Name Here</h2>
          <h3 className="text-lg sm:text-xl text-gray-500 mb-4">Pediatrician</h3>
          <p className="text-gray-700 text-sm sm:text-base md:w-full">
          Dr. Diaz-Calderon is the founder of Baby Formula Calc. She graduated from residency in Nicklaus Children's Hospital in Miami, did her Fellowship at Children’s National in Washington DC and is currently working as a pediatric gastroenterologist at University of Maryland.
With the goal of providing better care, she envisioned an app that would help pediatric healthcare providers in their daily consults. Dr. Diaz-Calderon focused her efforts on developing an app that could calculate baby formula preparations immediately. 
Deploying Baby Formula Calc lead to a hidden time savings all while improving the quality of care in her consults, now she was able to discuss with her patients how much calories they were getting, how to prepare the baby bottles, or how to fortify breastmilk, a calculation that could last 10-15 minutes would now be done in a couple of seconds. Baby Formula Calc is now being used at hospitals and practices across the nation saving hundreds of hours to health care providers and allowing them to improve the quality of their consults
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
