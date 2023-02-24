import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Button, Form, Container } from "react-bootstrap";
import "../Links.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
      style={{ backgroundColor: "gray" }}
      className="flex-wrapper"
    >
      <NavbarComp />
      <Container style={{ display: "flex" }}>
        <div className="subscription contact-page">
          <Form className="contactpage-content">
            <h1>Give Us Feedback</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                <p> We'll never share your email with anyone else.</p>
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <FooterPage />
    </motion.div>
  );
};

export default ContactUs;
