import React from 'react';
import underline from "../assets/new/Discalimer Underline.png"
import button from "../assets/new/Testimonial end.png"
import circles from "../assets/new/circles.png"
import semicircle from "../assets/new/Semicircle.png"

const Disclaimer: React.FC = () => {
    return (
        <div className=" md:items-center p-8">
            <div className=" mx-auto">
                <div className='md:items-center text-center'>
                    <h1 className=" font-bold text-center text-teal-600 text-6xl">Disclaimer</h1>
                    <img src={circles} alt="" className=' w-0 md:absolute md:w-44'/>
                    <img src={underline} alt="" className=' w-80 md:relative md:ml-40 md:left-96' />
                </div>
                <div className=' w-full items-center'>
                    <div className="md:w-4/6 md:relative md:left-52  md:items-center">
                        <p className="mt-4  text-gray-700">
                            This app provides only information, is not medical or treatment advice and may not be treated as such by the user.
                            As such, this app may not be relied upon for the purposes of medical diagnosis or as a recommendation for medical care treatment.
                            All content, including text, graphics, images, and information, contained on or available through this app is for general information purposes only.
                        </p>
                        <p className="mt-4 text-gray-700">
                            You are strongly encouraged to confirm any information from or through this app with your physician or another professional healthcare provider
                            and to review all information regarding any medical condition or treatment with your physician or other professional healthcare provider.
                        </p>
                        <img src={semicircle} alt="" className=' w-0 absolute md:mb-96 md:top-1 md:items-end text-right md:left-3/4 md:ml-96 md:w-36  '/>
                        <p className="mt-4 text-gray-700">
                            You must never rely on any information obtained using this app for any diagnosis or recommendation for medical treatment.
                            You must never rely on the information received from this app as an alternative to medical advice from your physician or other professional healthcare provider.
                            You must never disregard professional medical advice or delay seeking medical treatment as a result of any information you have seen or accessed through this app.
                            If you have any specific questions about any medical matter, you should consult your physician or other professional healthcare provider.
                            You think you might be suffering from any medical condition. You should seek immediate medical attention.
                        </p>

                    </div>
                 
                    <img src={button} alt="" className=' w-24 m-5 ml-28 md:relative md:left-72 md:ml-96 ' />
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;
