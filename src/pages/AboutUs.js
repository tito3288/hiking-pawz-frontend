import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Stack, Container } from "react-bootstrap";
import "../Links.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  //Move all of the styling on the css page

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
    >
      <NavbarComp />

      <Container style={{ display: "flex" }}>
        <Stack className="aboutus-container">
          <h1
            style={{
              color: "black",
              padding: "10px 10px",
            }}
          >
            About Us
          </h1>
          <img
            src="about-us.jpg"
            alt="about-us"
            style={{ borderRadius: "20px" }}
            className="aboutus-img"
          />
          <h4 className="aboutus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h4>
        </Stack>
      </Container>
      <FooterPage />
    </motion.div>
  );
};

export default AboutUs;
