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
        transition: { duration: 0.1 },
      }}
    >
      <NavbarComp />

      <Container style={{ display: "flex", backgroundColor: "#F9F9F9" }}>
        <Stack className="aboutus-container">
          <h1
            style={{
              color: "black",
              padding: "20px 20px",
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
            The safety of animals and the environment is our number one
            priority. We have created collars that gives your pet not only a
            unique look from any other collar but we've also integrated
            sustainable materials into the webbing. Instead of using regular
            nylon webbing, we make ours out of recycled plastic bottle caps
            thats also creates a comfortable feel for your pet. Your purchase
            helps reuse recycled materials for something as simple but yet
            durable GUARANTEED. Everyone in the team is a Certified Food
            Handlers as we care about the knowledge and regulations to making
            the delicious Organic treats for you furry friends. We also donate
            10% of each purchase to North Shore Animal League Organization the
            biggest non kill rescue and adoption organization in the world here
            in America.
          </h4>
        </Stack>
      </Container>
      <FooterPage />
    </motion.div>
  );
};

export default AboutUs;
