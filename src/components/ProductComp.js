import React from "react";
import CardComp from "./CardComp";
import { productArray } from "../productArray";
import { Row, Col, Container, ThemeProvider } from "react-bootstrap";

const ProductComp = () => {
  return (
    <Container>
      <Row xs={2} sm={1} md={3} lg={3}>
        {productArray.map((value, index) => {
          return (
            <Col key={index} align="center" className="g-4">
              <CardComp
                title={value.title}
                price={value.price}
                img={value.img}
                id={value.id}
                page={value.page}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductComp;
