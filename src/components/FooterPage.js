import React from "react";
import "./Page.css";

const FooterPage = () => {
  const year = new Date().getFullYear();

  return (
    <div style={{ height: "80px", backgroundColor: "#121212" }}>
      <h6 style={{ textAlign: "center" }}>© {year} Hiking Pawz</h6>
    </div>
  );
};

export default FooterPage;
