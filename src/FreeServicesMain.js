import React, { useEffect } from "react";
import AssignmentFreeServices from "./AssignmentFreeServices";

function FreeServicesMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AssignmentFreeServices />
    </>
  );
}

export default FreeServicesMain;