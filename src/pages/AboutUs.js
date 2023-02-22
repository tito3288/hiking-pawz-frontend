import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Stack, Container } from "react-bootstrap";

const AboutUs = () => {
  //Move all of the styling on the css page

  return (
    <div>
      <NavbarComp />
      <div
        className="aboutus-section"
        style={{
          display: "flex",
          paddingBottom: "10%",
        }}
      >
        <Container style={{ textAlign: "center" }}>
          <Stack>
            <h1
              style={{
                color: "black",
                marginTop: "20%",
              }}
            >
              About Us
            </h1>
            <img
              src="about-us.jpg"
              alt="about-us"
              className="aboutus-img"
              style={{ width: "60%", margin: "auto auto" }}
            />
            <h4
              className="aboutus-text"
              style={{ color: "black", marginTop: "30px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </Stack>
        </Container>
      </div>
      <FooterPage />
    </div>
  );
};

export default AboutUs;
