// Testimonials.tsx
import React from "react"
import { ScrollParallax } from "react-just-parallax"
import appstore from "../assets/app_store.png"
import playstore from "../assets/googleplay.png"
import circle from "../assets/new/circle.png"
import circles from "../assets/new/circles.png"
import ring from "../assets/new/Semicircles.png"
import option from "../assets/new/Testimonial end.png"
import phone from "../assets/phone.png"

const testimonials = [
	{
		text: "This app is a lifesaver! The Scoop Calculator feature makes feeding time so much easier. No more guessing or struggling with the formula can—just input the amount of water, and it does the rest. I love how it accounts for volume displacement too. Highly recommended!",
		name: "Sarah L.",
		profile:
			"https://www.shutterstock.com/image-photo/close-portrait-beautiful-young-african-600nw-2196955391.jpg",
		title: "New Mom",
	},
	{
		text: "As a first-time parent, I was overwhelmed with making sure my baby was getting the right amount of formula. The Feed Calculator feature takes all the stress out of feeding. It’s so simple to use, and now I feel confident that my baby is getting exactly what she needs.Thank you for creating this!",
		name: "James M.",
		profile:
			"https://t4.ftcdn.net/jpg/04/78/83/03/360_F_478830371_ztwskJGrKEX2drsFaLJ6dAar9ohgM1bc.jpg",
		title: "New Dad",
	},
	{
		text: "The Feed Calculator has been a game changer for us. It’s reassuring to know exactly how much formula to add to my breastmilk. The app even helps us track whether our baby is getting the right nutrition, which is such a relief. This app is a must-have for any parent!",
		name: "David R.",
		profile:
			"https://img.freepik.com/premium-photo/portrait-young-hispanic-male-pediatrician-doctor-sitting-office-table-with-documents_321831-13694.jpg",
		title: "Pediatrician and Father of Two",
	},
	{
		text: "This app has simplified feeding time for our family. The Scoop Calculator takes all the confusion out of preparing formula, and the Feed Calculator ensures my baby is getting the right nutrition. I can't imagine going back to the old way of doing things. It's a game-changer!",
		name: "Lily K.",
		profile: "https://nestingstory.ca/wp-content/uploads/2016/05/joanna085.jpg",
		title: "Busy Mom of Twins",
	},
]

const Testimonials = () => {
	return (
		<section className='bg-white mt-16 py-12' id='testimonials'>
			<div className='max-w-6xl mx-auto px-4 w-full items-center'>
				<ScrollParallax strength={0.09}>
					<div className='text-center flex flex-col items-center'>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>Testimonials</h2>
						<p className='text-gray-600 mb-8 sm:mb-12 w-full sm:w-3/4'>
							See what our users have to say about us
						</p>
					</div>
				</ScrollParallax>
				<img src={ring} alt='' className='absolute left-1 mt-96 md:w-44 w-28' />
				<div className='grid gap-6 md:left-36 relative sm:grid-cols-1 md:grid-cols-2 md:w-3/4 lg:grid-cols-2 '>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-teal-200 p-6 rounded-lg shadow-md hover:bg-white transition duration-200'
						>
							<p className='text-gray-700 mb-6 italic'>{testimonial.text}</p>
							<div className='flex items-center'>
								<img
									className='w-12 h-12 rounded-full mr-4 shadow-md object-cover'
									src={testimonial.profile}
									alt='Profile'
								/>
								<div className='text-left'>
									<p className='text-gray-900 font-bold'>{testimonial.name}</p>
									<p className='text-gray-600'>{testimonial.title}</p>
								</div>
							</div>
						</div>
					))}

					<img src={option} alt='' className='w-16 md:w-20 relative md:left-96  left-36' />
				</div>

				<div>
					<img src={circles} alt='' className=' absolute right-1 md:w-48 w-20' />
				</div>

				{/* Download Component */}
				<div className='flex flex-col items-center mt-20'>
					<div className='bg-white flex flex-col md:flex-row items-center justify-between w-full sm:w-5/6 md:w-3/4 p-6 rounded-lg'>
						<div className='md:w-full p-6'>
							<h2 className='text-4xl sm:text-5xl md:text-6x w-1/2 l font-bold mb-4'>
								Download App
							</h2>
							<p className='text-gray-700 w-full mb-4'>
								Feeding your baby shouldn’t be stressful. Our app takes care of the calculations so
								you can focus on what matters most to your baby’s well-being. Download the Baby
								Formula Calculator App and relax, knowing you’ve got it covered.
							</p>
							<div className='text-center relative md:right-20 md:bottom-10 md:mt-20'>
								<div className='flex justify-center space-x-4 md:space-x-6'>
									<a
										href='https://apps.apple.com/us/app/baby-formula-calc/id6499473129?platform=iphone'
										target='_/'
									>
										<img src={appstore} alt='App Store' className='h-8 mt-2 sm:h-10' />
									</a>
									<a href='https://play.google.com/' target='_/'>
										<img src={playstore} alt='Google Play' className='h-12 sm:h-14' />
									</a>
								</div>
							</div>
						</div>
						<div className='md:w-1/2 flex justify-center'>
							<img
								src={phone}
								alt='App'
								className='h-64 sm:h-80 md:h-96 drop-shadow-[0px_35px_35px_rgba(0,0,0,0.39)] rounded-3xl shadow-lg object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center mt-20 sm:mt-32 lg:mt-44'>
				{/* <div className="bg-teal-600 md:w-16 w-24 h-16 md:h-16 relative bottom-24 right-10 rounded-full"></div> */}
				<section className='bg-teal-100 py-8 sm:py-12 w-3/4 sm:w-5/6 md:w-3/4 rounded-3xl'>
					<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6'>
						<div className='flex items-center mb-6 md:mb-0'>
							<img src={circle} alt='' className='w-16 absolute left-4 mb-48 md:left-40' />
							<div className='ml-4 w-full'>
								<h2 className='text-xl sm:text-2xl w-full font-bold pb-3'>
									Get the App Now, Say Goodbye to Formula Calculation Stress!
								</h2>
								<p className='text-gray-700 w-full sm:w-3/4'>
									Make feeding time a breeze with our Baby Formula Calculator App. No more
									second-guessing or stressful calculations just the perfect feed, every time.
									Download now and enjoy peace of mind!
								</p>
							</div>
						</div>
						<a
							href='https://apps.apple.com/us/app/baby-formula-calc/id6499473129?platform=iphone'
							target='_/'
						>
							<button className='bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-4 sm:px-6 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition duration-300 w-36 sm:w-44'>
								Download Now
							</button>
						</a>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Testimonials

