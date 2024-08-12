import React, { useEffect, useState } from "react"
import { MinusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "../assets/logo.png" // Update with the correct path to your logo
import "./style/nav.css"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setSticky(true)
			} else {
				setSticky(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleSmoothScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<header
			className={`md:w-5/6 w-full md:relative md:left-32 top-3 md:rounded-full bg-black isolate bg-nav shadow-lg ring-1 ring-black/5 mb-16 transition-transform duration-300 ${
				sticky ? "sticky top-0 z-50" : ""
			}`}
		>
			<div className='flex justify-between rounded-full items-center pl-5 pr-5'>
				<div className='img'>
					<img src={Logo} alt='Logo' className='h-16 mr-5 rounded-full' />
				</div>
				<div className='hidden md:flex'>
					<ul className='flex'>
						<li className='p-7 text text-white text-1xl'>
							<a href='#home' onClick={(e) => handleSmoothScroll(e, 'home')}>
								Home
							</a>
						</li>
						<li className='p-7 text text-white text-1xl'>
							<a href='#aboutus' onClick={(e) => handleSmoothScroll(e, 'aboutus')}>
								About Us
							</a>
						</li>
						<li className='p-7 text text-white text-1xl'>
							<a href='#features' onClick={(e) => handleSmoothScroll(e, 'features')}>
								Features
							</a>
						</li>
						<li className='p-7 text text-white text-1xl'>
							<a href='#testimonials' onClick={(e) => handleSmoothScroll(e, 'testimonials')}>
								Testimonials
							</a>
						</li>
					</ul>
				</div>
				<div className='hidden md:block'>
					<a
						href='https://apps.apple.com/us/app/baby-formula-calc/id6499473129?platform=iphone'
						target='_/'
					>
						<button className='text-white pr-6 pl-6 pt-3 pb-3 button rounded-full bg-teal-500'>
							Download Now
						</button>
					</a>
				</div>
				<div className='md:hidden flex items-center'>
					<button onClick={() => setIsOpen(!isOpen)} className='text-white'>
						{isOpen ? (
							<XMarkIcon className='h-8 mark w-8' />
						) : (
							<MinusIcon className='h-8 mark w-8' />
						)}
					</button>
				</div>
			</div>
			{isOpen && (
				<div className='md:hidden backdrop-blur-lg rounded-none'>
					<ul className='flex flex-col items-center'>
						<li className='p-4 text text-white'>
							<a href='#home' onClick={(e) => handleSmoothScroll(e, 'home')}>
								Home
							</a>
						</li>
						<li className='p-4 text text-white'>
							<a href='#aboutus' onClick={(e) => handleSmoothScroll(e, 'aboutus')}>
								About Us
							</a>
						</li>
						<li className='p-4 text text-white'>
							<a href='#features' onClick={(e) => handleSmoothScroll(e, 'features')}>
								Features
							</a>
						</li>
						<li className='p-4 text text-white'>
							<a href='#testimonials' onClick={(e) => handleSmoothScroll(e, 'testimonials')}>
								Testimonials
							</a>
						</li>
						<li className='p-4 '>
							<a
								href='https://apps.apple.com/us/app/baby-formula-calc/id6499473129?platform=iphone'
								target='_/'
							>
								<button className='text-white pr-5 pl-5 pt-1 pb-1 rounded-full button bg-teal-600'>
									Download Now
								</button>
							</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	)
}

export default Header
