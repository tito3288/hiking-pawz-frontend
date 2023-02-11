import React from "react";
import {
  Row,
  Col,
  Stack,
  Dropdown,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import "./Page.css";
import { getProductData } from "../productArray";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./Page.css";

const ItemComp = (props) => {
  const productData = getProductData(props.id);
  const cart = useContext(CartContext);

  const [numInCart, numInCartFunc] = React.useState(1);

  function handleSubtractFromCart() {
    if (numInCart <= 0) {
      numInCart = 0;
    } else {
      numInCartFunc(numInCart - 1);
    }
  }

  function handleAddToCart() {
    cart.addXAmountToCart(props.id, numInCart);
    numInCartFunc(0);
  }

  return (
    <Container>
      <div className="item-page-outline">
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
              <h1 className="collar-title">{productData.title}</h1>
              <h4 className="price-title">${productData.price}</h4>
              <p className="shipping-title">
                <LocalShippingIcon className="shipping-car" /> Free Domestic
                Shipping
              </p>
              <hr />
              <h5 className="size-title">SIZE</h5>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Sizes</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Large</Dropdown.Item>
                  <Dropdown.Item>Medium</Dropdown.Item>
                  <Dropdown.Item>Small</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <h5 className="quantity-title">QUANTITY</h5>
              <div className="wrapper">
                <span onClick={handleSubtractFromCart} className="minus">
                  -
                </span>
                <span className="num">{numInCart}</span>
                <span
                  onClick={() => numInCartFunc(numInCart + 1)}
                  className="plus"
                >
                  +
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                variant="primary"
                style={{
                  backgroundColor: "#6B011F",
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
