import React from "react";
import { Form, Button } from "react-bootstrap";

const ExchangesReturns = () => {
  return (
    <div>
      <Button
        href="/"
        style={{ margin: "1% 1%", backgroundColor: "gray", border: "none" }}
      >
        Back To Store
      </Button>
      <div className="exchange-logo-outline">
        <img src="transparant-logo.png" alt="logo" style={{ width: "250px" }} />
      </div>
      <Form
        //Move all of this CSS to the CSS file
        style={{
          width: "50%",
          margin: "auto auto",
          border: "solid white",
          boxShadow: "0px 0px 25px rgb(0,0,0,0.3)",
          borderRadius: "20px",
          padding: "20px 20px",
          height: "600px",
          marginTop: "40px",
          marginBottom: "10%",
          display: "flex",
        }}
      >
        <div style={{ margin: "15% auto", width: "80%" }}>
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
            Exchanges & Returns
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{ height: "70px" }}
              type="email"
              placeholder="Order Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              style={{ height: "70px" }}
              type="password"
              placeholder="Shipping Zip Code or Email"
            />
          </Form.Group>

          <Button
            style={{
              margin: "auto 30%",
              width: "50%",
              backgroundColor: "gray",
              border: "none",
              height: "50px",
            }}
            variant="primary"
            type="submit"
          >
            Start Return
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExchangesReturns;
