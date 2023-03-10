import React, { useState } from "react";
import {
  Row,
  Col,
  Stack,
  Button,
  Container,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./Page.css";
import { getProductData } from "../productArray";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion, useAnimation } from "framer-motion";

const ItemComp = (props) => {
  const control = useAnimation();
  const controlDes = useAnimation();

  const productData = getProductData(props.id);
  const cart = useContext(CartContext);

  const [numInCart, numInCartFunc] = React.useState(1);
  const [disabled, disabledFunc] = React.useState(false);

  function handleSubtractFromCart() {
    if (numInCart <= 0) {
      numInCart = 0;
    } else {
      numInCartFunc(numInCart - 1);
    }

    control.start({
      scale: [1.3, 1],
    });
  }

  function handleAddToFromCart() {
    numInCartFunc(numInCart + 1);

    control.start({
      scale: [1.3, 1],
    });
  }

  function handleAddToCart() {
    cart.addXAmountToCart(props.id, numInCart);
    numInCartFunc(1);
  }

  return (
    <Container style={{ display: "flex" }}>
      <div
        style={{
          backgroundImage: "url(dark-tire.png)",
          backgroundColor: "#171717",
        }}
        className="item-page-outline"
      >
        <Row className="item-row" xs={1} sm={1} md={1} lg={2}>
          <Col className="item-page-border-right">
            <img
              className="item-image"
              src={productData.img}
              alt="collar"
            ></img>
          </Col>
          <Col
            style={{ marginTop: "6%", color: "white", padding: "30px 30px" }}
          >
            <Stack gap={3}>
              <h1 className="collar-title">{productData.title}</h1>
              <h4 className="price-title">${productData.price}</h4>
              <p className="shipping-title">
                <LocalShippingIcon className="shipping-car" /> Free Domestic
                Shipping
              </p>
              <hr />
              <h5 className="size-title">SIZE</h5>
              <h5 className="checkout-size-title">Select Size At Checkout</h5>

              <ul>
                <li>Large (1-inch Width 18-23-inch Length)</li>
                <li>Medium (1-inch Width 12-18-inch Length)</li>
                <li>Small (5/8-inch Width 8-15-Length)</li>
              </ul>

              <h5 className="quantity-title">QUANTITY</h5>
              <motion.div
                animate={control}
                transition={{ type: "spring" }}
                className="wrapper"
              >
                <span onClick={handleSubtractFromCart} className="minus">
                  -
                </span>
                <span className="num">{numInCart}</span>
                <span onClick={handleAddToFromCart} className="plus">
                  +
                </span>
              </motion.div>

              <Button
                onClick={handleAddToCart}
                variant="primary"
                style={{
                  backgroundColor: "#6b011f",
                  border: "none",
                  fontSize: "20px",
                  fontFamily: "Amatic SC, cursive",
                }}
              >
                Add To Cart
              </Button>
              <OverlayTrigger
                trigger="click"
                placement={"top"}
                overlay={
                  <Popover
                    style={{
                      backgroundColor: "#121212",
                      color: "#6b011f",
                      borderRadius: "20px",
                      textAlign: "center",
                      boxShadow: "15px 15px 10px rgb(0,0,0,0.4)",
                    }}
                  >
                    <Popover.Header
                      style={{
                        backgroundColor: "#171717",
                        fontFamily: "Tilt Neon, cursive",
                      }}
                      as="h3"
                    >
                      {productData.title}
                    </Popover.Header>
                    <Popover.Body
                      style={{
                        color: "white",
                        fontFamily: "Tilt Neon, cursive",
                      }}
                    >
                      <p>{productData.description}</p>
                    </Popover.Body>
                  </Popover>
                }
              >
                <motion.div
                  animate={controlDes}
                  transition={{ type: "spring" }}
                >
                  <Button
                    style={{
                      backgroundColor: "#121212",
                      color: "#6b011f",
                      fontSize: "23px",
                      fontFamily: "Amatic SC, cursive",
                      border: "solid rgb(0,0,0,0.3",
                      width: "100%",
                    }}
                    variant="secondary"
                    onClick={() => controlDes.start({ scale: [1.1, 1] })}
                  >
                    Collar Information
                  </Button>
                </motion.div>
              </OverlayTrigger>
            </Stack>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ItemComp;
