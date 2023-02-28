import React from "react";
import CardComp from "./CardComp";
import { productArray } from "../productArray";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductComp = () => {
  return (
    <Container>
      <Row xs={2} sm={1} md={3} lg={3}>
        {productArray.map((value, index) => {
          return (
            <Col key={index} align="center" className="g-3">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <CardComp
                  title={value.title}
                  price={value.price}
                  img={value.img}
                  id={value.id}
                  page={value.page}
                />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductComp;
