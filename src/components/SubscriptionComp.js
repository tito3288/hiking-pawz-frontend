import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const SubscriptionComp = () => {
  return (
    <Container>
      <div className="subscription">
        <Form
          style={{ margin: "auto auto", width: "60%", textAlign: "center" }}
        >
          <h1 style={{ color: "white" }}>Subscribe for Updates</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted text">
              <p className="sub-text">
                We'll never share your email with anyone else.
              </p>
            </Form.Text>
          </Form.Group>
          <Button
            style={{ width: "50%", backgroundColor: "#6b011f", border: "none" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SubscriptionComp;
