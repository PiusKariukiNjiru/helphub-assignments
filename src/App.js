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


        </Routes>
        
        
      </div>
      
    </Router>
  );
}

export default App;