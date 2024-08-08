import React from 'react';
import scoopsImage from '../assets/logo1.png'; // Replace with the actual path to the image
import img2 from '../assets/logo2.png'; // Replace with the actual path to the image
import img3 from '../assets/logo3.png'; // Replace with the actual path to the image
import cup from "../assets/cup.png"
import bg from "../assets/bg-features.png"
import rupee from "../assets/rupee.png"
import bottle from "../assets/bottle.png"
import { ScrollParallax } from "react-just-parallax";

const Features: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-6 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-10">Features</h1>
            <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
            
                <div className="md:w-1/2 mb-72 flex justify-center">
                     <img src={bg} alt="" className=' h-60 w-96 relative top-56 bg-teal-700' />
                  
                    <img src={scoopsImage} alt="Scoops Calculator" className=" h-4/6 absolute" />
                    
                    
                </div>
                <div className="md:w-1/2 p-6">
                    <div className='flex'>
                        <h2 className="text-4xl w-80 font-bold mb-4">Scoops Formula Calculator</h2>
                        <img src={cup} alt="" className=' h-16' />
                    </div>
                   
                    <p className="text-gray-700 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className="bg-white mt-20 flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
                
                <div className="md:w-1/2 p-6">
                <ScrollParallax>
                    <div className='flex'>
                        <h2 className="text-4xl w-80 font-bold mb-4">Cost Calculator</h2>
                        <img src={rupee} alt="" className=' h-28 relative bottom-14 right-7' />
                    </div>
                    <p className="text-gray-700 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    </ScrollParallax>
                </div>
                <div className="md:w-1/2 flex justify-center mb-96">
                    <img src={bg} alt="" className=' h-60 w-96 relative top-56 bg-teal-700' />
                    <img src={img2} alt="Scoops Calculator" className="h-4/6 absolute" />
                </div>
            </div>
            <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
                <div className="md:w-1/2 mb-72 flex justify-center">
                    <img src={bg} alt="" className=' h-60 w-96 relative top-56 bg-teal-700' />
                    <img src={img3} alt="Scoops Calculator" className=" h-4/6 absolute" />
                </div>
                <div className="md:w-1/2 p-6">
                <ScrollParallax>
                    <div className='flex'>
                        <h2 className="text-4xl w-80 font-bold mb-4">Feed Formula Calculator</h2>
                        <img src={bottle} alt="" className=' h-28 relative bottom-8 right-16' />
                    </div>
                    <p className="text-gray-700 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    </ScrollParallax>
                </div>
            </div>
        </div>
    );
};

export default Features;
