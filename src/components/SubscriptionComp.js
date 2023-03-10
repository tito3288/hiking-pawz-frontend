import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const SubscriptionComp = () => {
  //this useState under was used to create onClick animation without the framer motion component useAnimation() ⬇️
  // const [animate, animateFunc] = React.useState(false);

  //this is another way of creating an animation using framer motion instead of using react hooks we use *useAnimation()
  const control = useAnimation();
  const navigate = useNavigate();

  const [state, handleSubmit] = useForm("mwkjbjzo");
  if (state.succeeded) {
    navigate("/SuccessSubscription");
  }

  // const [email, setEmail] = React.useState("");

  // const handleClick = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:4000/subscription", {
  //       email,
  //     });
  //     if (response.status === 200) {
  //       <SuccessSubscription />;
  //       // Redirect to success page or show success message
  //     } else {
  //       console.log("Failed to subscribe");
  //       // Show error message to the user
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // Show error message to the user
  //   }
  // };

  return (
    <Container>
      <div
        className="subscription"
        style={{ backgroundImage: "url(black-felt.png)" }}
      >
        <Form
          onSubmit={handleSubmit}
          style={{ margin: "auto auto", width: "60%", textAlign: "center" }}
        >
          <h1 className="subscription-header" style={{ color: "white" }}>
            Subscribe for Updates & Sneak Peaks!
          </h1>

          <Form.Group className="mb-3">
            <Form.Label
              className="subscription-email-title"
              style={{ color: "white" }}
            >
              Email address
            </Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Form.Text className="text-muted text">
              <p className="sub-text">
                We'll never share your email with anyone else.
              </p>
            </Form.Text>
          </Form.Group>
          <motion.div animate={control} transition={{ duration: 0.5 }}>
            <Button
              //this is where the click animation starts after the click
              onClick={() => control.start({ scale: [1.5, 1] })}
              type="submit"
              disabled={state.submitting}
              className="subscription-submit-btn"
              variant="primary"
              style={{ backgroundColor: "#6b011f", border: "none" }}
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
