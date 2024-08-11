import React from 'react';
import scoopsImage from '../assets/logo1.png'; // Replace with the actual path to the image
import img2 from '../assets/logo2.png'; // Replace with the actual path to the image
import img3 from '../assets/logo3.png'; // Replace with the actual path to the image
import cup from "../assets/new/Scoop Icon.png"
import feed from "../assets/new/Feed Icon.png"
import bg from "../assets/bg-features.png"
import rupee from "../assets/rupee.png"
import bottle from "../assets/bottle.png"
import { ScrollParallax } from "react-just-parallax";
import phone1 from "../assets/new/Cost Calculator.png";
import phone2 from "../assets/new/Scoop Calculator.png";
import phone3 from "../assets/new/Feed Calculator.png"
import ring from "../assets/new/Semicircle.png"


const Features: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-6 justify-center flex flex-col items-center" id='history'>
            <h1 className="text-6xl font-bold mb-10">Features</h1>
            <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:w-full">

                <div className="md:w-1/2 md:ml-44 flex justify-center">
                    <img src={phone1} alt="Scoops Calculator" className=" md:w-4/5" />
                </div>
                <div className="md:w-3/4 p-6">
                    <div className='flex'>
                        <h2 className="text-4xl w-80 font-bold mb-4">Scoops Formula Calculator</h2>
                        <img src={cup} alt="" className=' h-16 relative md:bottom-10 md:h-28' />
                    </div>

                    <p className="text-gray-700 md:w-3/4 mb-4">
                    Scoops calculator is an easy and fast way to calculate how many scoops you need for a given amount of water. No more going to the formula can and doing some crazy calculations to figure out the correct amount, now simply select the fortification you’re aiming for, input how many oz/ml you want to make and the resulting number of scoops will show with the water needed (accounting for volume displacement). 
                    </p>
                </div>
            </div>
            <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 ">

                <div className="md:w-3/4 p-6 " >
                    <ScrollParallax>
                        <div className='flex'>
                            <h2 className="text-4xl w-80 font-bold mb-4">Cost Calculator</h2>
                            <img src={rupee} alt="" className=' h-28 relative bottom-14 right-7' />
                        </div>
                        <p className="text-gray-700 mb-4 md:w-3/4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </ScrollParallax>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    {/* <img src={bg} alt="" className=' h-60 w-96 relative top-56 bg-teal-700' /> */}
                    <img src={phone2} alt="Scoops Calculator" className="  md:h-4/5" />
                </div>
            </div>
            <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:w-full">

                <div className="md:w-1/2 md:ml-44 flex justify-center">
                    <img src={phone3} alt="Scoops Calculator" className=" md:w-4/5" />
                </div>
                <div className="md:w-3/4 p-6">
                    <div className='flex'>
                        <h2 className="text-4xl w-80 font-bold mb-4">Feed Formula Calculator</h2>
                        <img src={feed} alt="" className=' h-16 relative md:bottom-10 md:h-28' />
                    </div>

                    <p className="text-gray-700 md:w-3/4 mb-4">
                    How many teaspoons to 5 oz of breastmilk? Is the baby getting enough nutrition with the feeding parents are giving? Feed Calculator has a variety of calculations to help talk to your patients and address any issues immediately just the formula you will be using, select if you are using water or breastmilk and then what you want to calculate.
                    </p>
                </div>
            </div>
            <div className=''>
            <img src={ring} alt="" className=' absolute right-1 w-28 md:w-44 ' />
            </div>
        </div>
    );
};

export default Features;
