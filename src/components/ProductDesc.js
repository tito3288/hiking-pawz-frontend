import React from "react";
import "./Page.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductDesc = () => {
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
      >
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
      </motion.div>
      <div
        //When moving elements from the right to the left it wiil temper with the offcanvas menu
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 0.9 }}
      >
        <Row>
          <Col style={{ marginBottom: "30px", height: "100%" }}>
            <div className="productDescriptionSection2">
              <p style={{ margin: "auto auto" }}>
                Collar story or description like what its made out of, we make
                ou rcollar by hand etc etc and more, we will also give out gifts
                to any of our subs
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProductDesc;
