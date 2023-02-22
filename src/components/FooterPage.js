import React from "react";
import "./Page.css";
import { Stack } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FooterPage = () => {
  const year = new Date().getFullYear();

  const navigate = useNavigate();

  function handleExchangesReturns() {
    navigate("/Exchanges-Returns");
  }

  return (
    <div className="footer">
      <div className="footer-policies">
        <p style={{ marginBottom: "1px" }} onClick={handleExchangesReturns}>
          Exchanges and Returns
        </p>
        <p style={{ marginBottom: "1px" }}>Contact</p>
        <p style={{ marginBottom: "1px" }}>Terms and Policys</p>
      </div>
      <div className="social-media">
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <h6 className="footer-content">© {year} Hiking Pawz</h6>
    </div>
  );
};

export default FooterPage;
