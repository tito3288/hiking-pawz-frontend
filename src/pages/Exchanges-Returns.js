import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Links.css";

const ExchangesReturns = () => {
  return (
    <div>
      <Button href="/" className="backto-store-button">
        Back To Store
      </Button>
      <div className="exchange-logo-outline">
        <img className="exch-logo" src="transparant-logo.png" alt="logo" />
      </div>
      <Form
        //Move all of this CSS to the CSS file
        className="exch-form"
      >
        <div className="exchform-content">
          <h1 className="form-header">
            Exchanges <br /> & Returns
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="exch-textfield"
              type="email"
              placeholder="Order Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="exch-textfield"
              type="password"
              placeholder="Shipping Zip Code or Email"
            />
          </Form.Group>

          <Button className="return-button" variant="primary" type="submit">
            Start Return
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExchangesReturns;
