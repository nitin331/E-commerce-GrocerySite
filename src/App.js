
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Grocery/Home/Home';
import About from './Grocery/About/About';
import Review from './Grocery/Review/Review';
import Blog from './Grocery/Blog/Blog';
import Contact from './Grocery/Contact/Contact';
import Footer from './Grocery/Footer/Footer';


const Grocery = () => {
  
  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About/>
      <Review/>
      <Blog/>
      <Contact/>
      <Footer />
      
    </BrowserRouter>
  );
};

export default Grocery;
