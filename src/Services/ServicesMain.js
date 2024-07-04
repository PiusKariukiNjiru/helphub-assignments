import React, { useEffect } from "react";
import Services from "./Services";

function ServicesMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Services />
    </>
  );
}

export default ServicesMain;