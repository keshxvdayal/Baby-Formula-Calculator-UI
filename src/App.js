import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import Aboutus from './components/Aboutus.tsx';
import History from './components/History.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import Navbar from "./components/Navbar.tsx"

const App = () => {
  return (
    <Router>
      <Navbar  />
      <Home/>
      <Aboutus/>
      <History/>
      <Testimonials/>
      <Footer/>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/history" element={<History />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
