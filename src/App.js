import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import FreeServicesMain from './OurFreeServices/FreeServicesMain';
import ServicesMain from './Services/ServicesMain';
import AboutUsMain from './About-Us/AboutUsMain';
import ContactUs from './ContactUs/ContactUs'
import OrderNow from './OrderNow/OrderNow';
import Footer from './Footer/Footer';
import PricingMain from './PricingComponent/PricingMain';
import OrderNowMain from './OrderComponents/OrderNowMain';


function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-free-services" element={<FreeServicesMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/about" element={<AboutUsMain/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/pricing" element={<PricingMain />} />
          <Route path="/order-now-main" element={<OrderNowMain />} />



        </Routes>
        <Footer/>
        
        
      </div>
      
    </Router>
  );
}

export default App;