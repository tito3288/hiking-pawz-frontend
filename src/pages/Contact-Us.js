import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterPage from "../components/FooterPage";
import { Button, Form, Container } from "react-bootstrap";
import "../Links.css";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mjvdrkdj");
  if (state.succeeded) {
    return (
      //Edit the success page to look better, the go back to home page button works
      <div>
        <Button style={{ margin: "3px 3px" }} href="/" variant="primary">
          Go Back to Home Page
        </Button>
        <h1 style={{ textAlign: "center" }}>
          We'll get back to you as soon as possible!
        </h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
      className="flex-wrapper"
      style={{
        backgroundColor: "#171717",
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/cartographer.png)",
      }}
    >
      <NavbarComp />
      <Container style={{ display: "flex" }}>
        <div className="subscription contact-page">
          <Form onSubmit={handleSubmit} className="contactpage-content">
            <h1>Give Us A Bark!</h1>
            <p>
              Let us know how we can do better, have any questions or just
              simply want to talk to us.
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                style={{ marginBottom: "30px" }}
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* change the text area width for mobile and desktop */}
              <textarea
                className="contact-us-textarea"
                id="message"
                name="message"
                placeholder="Description"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#6b011f",
                border: "none",
                width: "100%",
              }}
              variant="primary"
              type="submit"
              disabled={state.submitting}
            >
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
