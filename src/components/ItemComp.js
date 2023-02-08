import React from "react";
import { Row, Col, Stack, Dropdown, Button, Container } from "react-bootstrap";
import "./Page.css";
import { getProductData } from "../productArray";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ItemComp = (props) => {
  const productData = getProductData(props.id);
  const cart = useContext(CartContext);

  return (
    <Container>
      <div
        style={{ backgroundColor: "#171717", paddingBottom: "90px" }}
        className="item-page-outline"
      >
        <Row
          className="item-row"
          style={{
            marginTop: "8%",
            padding: "20px 20px",
          }}
          xs={1}
          sm={2}
          md={2}
          lg={2}
        >
          <Col className="item-page-border-right">
            <img
              className="item-image"
              // style={{ width: "80%", marginTop: "10%", marginLeft: "8%" }}
              src="testCollar3.jpeg"
              alt="collar"
            ></img>
          </Col>
          <Col style={{ marginTop: "6%", color: "white" }}>
            <Stack gap={3}>
              <h1>{productData.title}</h1>
              <h4>${productData.price}</h4>
              <p>Free Domestic Shipping</p>
              <hr />
              <h3>SIZE</h3>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Sizes</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Large</Dropdown.Item>
                  <Dropdown.Item>Medium</Dropdown.Item>
                  <Dropdown.Item>Small</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                onClick={() => cart.addOneToCart(props.id)}
                variant="primary"
                style={{
                  backgroundColor: "#6B011F",
                  border: "none",
                }}
              >
                Add To Cart
              </Button>
            </Stack>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ItemComp;
