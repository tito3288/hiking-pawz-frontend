import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

//Apply MailChimp to subscription component

const SubscriptionComp = () => {
  //this useState under was used to create onClick animation without the framer motion component useAnimation() ⬇️
  // const [animate, animateFunc] = React.useState(false);

  //this is another way of creating an animation using framer motion instead of using react hooks we use *useAnimation()
  const control = useAnimation();

  return (
    <Container>
      <div className="subscription">
        <Form
          style={{ margin: "auto auto", width: "60%", textAlign: "center" }}
        >
          <h1 className="subscription-header" style={{ color: "white" }}>
            Subscribe for Updates & Sneak Peaks!
          </h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted text">
              <p className="sub-text">
                We'll never share your email with anyone else.
              </p>
            </Form.Text>
          </Form.Group>
          <motion.div animate={control} transition={{ duration: 0.5 }}>
            <Button
              //this is where the click animation starts after the click
              onClick={() =>
                control.start({
                  scale: [1.5, 1],
                })
              }
              className="subscription-submit-btn"
              variant="primary"
              style={{ backgroundColor: "#6b011f", border: "none" }}
              // type="submit"
            >
              Submit
            </Button>
          </motion.div>
        </Form>
      </div>
    </Container>
  );
};

export default SubscriptionComp;
