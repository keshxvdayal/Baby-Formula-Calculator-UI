import React, { useRef } from "react"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { ScrollParallax } from "react-just-parallax"
import appStore from "../assets/app_store.png" // Example path for App Store logo
import googlePlay from "../assets/googleplay.png" // Example path for Google Play logo
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import "./style/home.css"

const BabyFormulaCalculator: React.FC = () => {
	const parallaxRef = useRef(null)
	return (
		<div className=' background bg-none md:bg-cover' id='home'>
			<div className='text-center mb-10 flex flex-col pt-28 items-center'>
				<h1 className='text-4xl  sm:text-5xl md:text-6xl font-bold w-5/6 sm:w-3/4 lg:w-1/2 text-white md:drop-shadow-lg'>
					Baby Formula Calculator Application
				</h1>
				<p className='text-white mt-4 text-center w-3/4 sm:w-1/2 lg:w-1/2'>
					Simplify the task of feeding your infant with our Baby Formula Calculator App ensuring
					your little one gets just the right amount, every time.
				</p>
			</div>

			<div className='flex flex-col md:flex-row justify-center items-center'>
				<div className='md:relative md:bottom-80 md:left-10 bottom-20 '>
					<div className='space-x-4 logo relative z-10'>
						<a href='https://www.facebook.com'>
							<FaFacebookF className='text-teal-800 m-4 text-xl' />
						</a>
						<a href='https://www.x.com'>
							<FaTwitter className='text-teal-800  m-4 text-xl' />
						</a>
						<a href='https://www.linkedin.com'>
							<FaLinkedinIn className='text-teal-800 m-4 text-xl' />
						</a>
					</div>
				</div>

				<ScrollParallax>
					<div className='flex justify-center space-x-6 mb-10 mt-9'>
						<img src={logo1} alt='Logo 1' className='h-40 sm:h-60 lg:h-80 mt-10' />
						<img src={logo2} alt='Logo 2' className='h-48 sm:h-72 lg:h-96' ref={parallaxRef} />
						<img src={logo3} alt='Logo 3' className='h-40 sm:h-60 lg:h-80 mt-10' />
					</div>

					<div className='text-center mb-10'>
						<div className='flex justify-center space-x-6'>
							<a href='https://apps.apple.com/us/app/baby-formula-calc/id6499473129?platform=iphone'>
								<img src={appStore} alt='App Store' className='h-8 sm:h-10 mt-3' />
							</a>
							<a href='https://play.google.com/store/games'>
								<img src={googlePlay} alt='Google Play' className='h-12 sm:h-16 mb-8' />
							</a>
						</div>
					</div>
				</ScrollParallax>
			</div>
		</div>
	)
}

export default BabyFormulaCalculator

