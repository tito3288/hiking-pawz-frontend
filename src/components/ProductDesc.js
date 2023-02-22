import React from "react";
import "./Page.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductDesc = () => {
  return (
    <Container>
      <Row>
        <Col style={{ height: "100%" }}>
          <div className="productDescriptionSection">
            <img
              className="productDescriptionSection-img"
              src="product-description.jpg"
              alt="Cool collar pic"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginBottom: "30px", height: "100%" }}>
          <div className="productDescriptionSection2">
            <p style={{ margin: "auto auto" }}>
              Collar story or description like what its made out of, we make ou
              rcollar by hand etc etc and more, we will also give out gifts to
              any of our subs
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDesc;
