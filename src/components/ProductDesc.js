import React from "react";
import "./Page.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { style } from "@mui/system";

const ProductDesc = () => {
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        //viewport is used to temper with the view of the element in other words edit what to do when th element is viewed 50% 100% etc or if you want to the animation to be played once.
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5 }}
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
      <Row>
        <Col style={{ marginBottom: "30px" }}>
          <div className="productDescriptionSection2">
            <h1>Our Collars</h1>

            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ rotate: 360, scale: 1 }}
              viewport={{ once: true }}
              //damping slows down the bouciness that the element comes witht the default  type "spring"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
              }}
              style={{ margin: "auto auto" }}
            >
              We care about the environment as much as we care about our pets
              like thousands of other pet owners, our collars webbing is made
              out of recycled plastic bottle caps that also provides a very
              comfortable feel, touch and are also very durable. Let's play a
              part by saving the environment one paw at a time. Our treats are
              made out of Organic roasted peanut flour which is not only healthy
              for ourselves but for our pets as well. With every purchase you
              will also help us add more sustainable products & accessories for
              you and your furry friend 🐾🌍
            </motion.p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDesc;
