// Testimonials.tsx
import React from 'react';
import profile from "../assets/profile.jpeg"
import phone from "../assets/phone.png"
import appstore from "../assets/app_store.png"
import playstore from "../assets/googleplay.png"
import { ScrollParallax } from "react-just-parallax";


const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.",
        name: "Name Here",
        title: "Product Designer",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.",
        name: "Name Here",
        title: "Product Designer",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.",
        name: "Name Here",
        title: "Product Designer",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type specimen book.",
        name: "Name Here",
        title: "Product Designer",
    },
];


const Testimonials = () => {
    return (
        <section className="bg-white mt-16 py-12">
            <div className="max-w-6xl mx-auto px-4 w-full items-center">
                <ScrollParallax strength={0.09}>
                <div className="text-center flex flex-col items-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Testimonials</h2>
                    <p className="text-gray-600 mb-8 sm:mb-12 w-full sm:w-3/4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                </ScrollParallax>
                <div className="grid gap-6 md:left-36 relative sm:grid-cols-1 md:grid-cols-2 md:w-3/4 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-teal-200 p-6 rounded-lg shadow-md hover:bg-white transition duration-200">
                            <p className="text-gray-700 mb-6">{testimonial.text}</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src={profile} alt="Profile" />
                                <div className="text-left">
                                    <p className="text-gray-900 font-bold">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center mt-20">
                    <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full sm:w-5/6 md:w-3/4 p-6 rounded-lg">
                    <ScrollParallax>
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Download App</h2>
                            <p className="text-gray-700 mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        </ScrollParallax>
                        <div className="md:w-1/2 flex justify-center">
                            <img src={phone} alt="App" className="h-64 sm:h-80 md:h-96 drop-shadow-[0px_35px_35px_rgba(0,0,0,0.39)] rounded-3xl shadow-lg" />
                        </div>
                    </div>
                    <div className="text-center relative mt-10 md:mt-20">
                        <div className="flex justify-center space-x-4 md:space-x-6">
                            <img src={appstore} alt="App Store" className="h-8 mt-2 sm:h-10" />
                            <img src={playstore} alt="Google Play" className="h-12 sm:h-14" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20 sm:mt-32 lg:mt-44">
                <section className="bg-teal-100 py-8 sm:py-12 w-3/4 sm:w-5/6 md:w-3/4 rounded-3xl">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6">
                        <div className="flex items-center mb-6 md:mb-0">
                            <div className="bg-teal-600 w-16 h-16 rounded-full"></div>
                            <div className="ml-4">
                                <h2 className="text-xl sm:text-2xl font-bold pb-3">Subscribe to get updated</h2>
                                <p className="text-gray-700 w-full sm:w-3/4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <button className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-4 sm:px-6 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition duration-300 w-36 sm:w-44">
                            Get Updated
                        </button>
                    </div>
                </section>
            </div>
        </section>



    );
    
};

export default Testimonials;
