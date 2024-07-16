import React, { useEffect } from "react";
import AboutUsComponent from "./AboutUsComponent";
import WhyChooseUs from "./WhyChooseUs";
import SuccessComponent from "./SuccessComponent";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

function AboutUsMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <AboutUsComponent />
      <WhyChooseUs />
      <SuccessComponent />
      <Testimonials />
      <Footer />
    </>
  );
}

export default AboutUsMain;