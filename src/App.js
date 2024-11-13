import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import FreeServicesMain from './OurFreeServices/FreeServicesMain';
import ServicesMain from './Services/ServicesMain';
import AboutUsMain from './About-Us/AboutUsMain';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import PricingMain from './PricingComponent/PricingMain';
import SamplePapers from './Samples/SamplePapers';
import BlogList from './Blogs/BlogList';
import PostPage from './Blogs/PostPage';
import OrderDisplay from './OrderComponents/OrderDisplay';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';


function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-free-services" element={<FreeServicesMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/about" element={<AboutUsMain/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/samples" element={<SamplePapers/>} />
          <Route path="/pricing" element={<PricingMain />} />
          <Route path="/order-display" element={<OrderDisplay />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/post/:id" element={<PostPage />} />



        </Routes>
        <Footer/>
        
        
      </div>
      
    </Router>
  );
}

export default App;