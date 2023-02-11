import React from "react";
import "./Page.css";

const FooterPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h6 className="footer-content">© {year} Hiking Pawz</h6>
    </div>
  );
};

export default FooterPage;
