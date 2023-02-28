import React from "react";
import { Row, Col, Stack, Button, Container } from "react-bootstrap";
import "./Page.css";
import { getProductData } from "../productArray";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion, useAnimation } from "framer-motion";

const ItemComp = (props) => {
  const control = useAnimation();

  const productData = getProductData(props.id);
  const cart = useContext(CartContext);

  const [numInCart, numInCartFunc] = React.useState(1);

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
    numInCartFunc(0);
  }

  return (
    <Container style={{ display: "flex" }}>
      <div className="item-page-outline">
        <Row className="item-row" xs={1} sm={2} md={2} lg={2}>
          <Col className="item-page-border-right">
            <img
              className="item-image"
              src="testCollar3.jpeg"
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
              <h5>Select Size At Checkout</h5>

              <ul>
                <li>Large (1-inch Width 18-26-inch Length)</li>
                <li>Medium (1-inch Width 12-18-inch Length)</li>
                <li>Small (5/8-inch Width 8-12-Length)</li>
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
                  backgroundColor: "#6a0000",
                  border: "none",
                  opacity: "0.8",
                  fontSize: "20px",
                  fontFamily: "Amatic SC, cursive",
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
