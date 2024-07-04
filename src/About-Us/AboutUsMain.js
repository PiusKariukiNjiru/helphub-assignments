import React, { useEffect } from "react";
import AboutUsComponent from "./AboutUsComponent";
import WhyChooseUs from "./WhyChooseUs";
import SuccessComponent from "./SuccessComponent";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

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