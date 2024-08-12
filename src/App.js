import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Aboutus from "./components/Aboutus.tsx"
import Features from "./components/Features.tsx"
import Footer from "./components/Footer.tsx"
import Home from "./components/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import Testimonials from "./components/Testimonials.tsx"
const App = () => {
	return (
		<Router>
			<Navbar />
			<Home />
			<Aboutus />
			<Features />
			<Testimonials />
			<Footer />
			<Routes>
				<Route path='/aboutus' element={<Aboutus />} />
				<Route path='/features' element={<Features />} />
				<Route path='/testimonials' element={<Testimonials />} />
			</Routes>
		</Router>
	)
}

export default App

