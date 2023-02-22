import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const SubscriptionComp = () => {
  return (
    <Container>
      <div className="subscription">
        <Form style={{ margin: "auto auto", width: "60%" }}>
          <h1 style={{ textAlign: "center" }}>Subscribe for Updates</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted text">
              <p className="sub-text">
                We'll never share your email with anyone else.
              </p>
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SubscriptionComp;
