import React from "react";
import {
  Navbar,
  Button,
  Modal,
  Nav,
  Offcanvas,
  OffcanvasTitle,
  Form,
  Stack,
} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import ModalCartComp from "./ModalCartComp";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchIcon from "@mui/icons-material/Search";
import "./Page.css";
import { motion } from "framer-motion";

const NavbarComp = () => {
  //to show the modal
  const [show, showFunc] = React.useState(false);

  const cart = useContext(CartContext);

  //to get ahold of products in cart
  const productsOnCart = cart.items.reduce((sum, value) => {
    return sum + value.quantity;
  }, 0);

  //to connect to node stripe api
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const [click, clickFunc] = React.useState(false);

  function handleClick() {
    clickFunc(!click);
  }

  //change the color while scrolling

  const [color, colorFunc] = React.useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      colorFunc(true);
    } else {
      colorFunc(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div
    // style={{
    //   backgroundColor: "#171717",
    //   position: "fixed",
    //   zIndex: "20",
    //   width: "100%",
    // }}
    >
      <Navbar expand="sm" style={{ position: "fixed" }} className="navbar">
        <Navbar.Brand href="/">
          <div className="logo-outline">
            <img src="transparant-logo.png" className="logo" alt="logo"></img>
          </div>
        </Navbar.Brand>
        <Stack direction="horizontal" className="nav-cart-toggle">
          {productsOnCart > 0 ? (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [2, 1] }}
              transition={{ type: "spring" }}
            >
              <Button
                className="shopping-cart"
                style={{
                  backgroundColor: "#171717",
                  color: "#6B011F",
                  border: "none",
                }}
                onClick={() => showFunc(true)}
              >
                <ShoppingCartRoundedIcon /> {productsOnCart}
              </Button>
            </motion.div>
          ) : (
            <Button
              className="shopping-cart"
              style={{
                backgroundColor: "#171717",
                color: "#6B011F",
                border: "none",
              }}
              onClick={() => showFunc(true)}
            >
              <ShoppingCartRoundedIcon /> {productsOnCart}
            </Button>
          )}

          <Navbar.Toggle
            className="nav-toggle"
            style={{
              border: "none",
              backgroundColor: "#121212",
            }}
            aria-controls={`offcanvasNavbar-expand-md`}
          />
        </Stack>

        {/* offcanvas start */}
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          style={{ width: "90%", backgroundColor: "#171717" }}
        >
          <Offcanvas.Header closeButton>
            <OffcanvasTitle
              style={{ color: "white" }}
              id={`offcanvasNavbar-expand-sm`}
            ></OffcanvasTitle>
          </Offcanvas.Header>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0 }}
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="AboutUs">
                  <p className="home-link">About Us</p>
                </Nav.Link>
                <Nav.Link href="Contact-Us">
                  <p className="home-link">Contact Us</p>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  style={{ margin: "auto auto" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  //this search class has to be moved to page css
                  style={{
                    backgroundColor: "#121212",
                    border: "none",
                    color: "#6B011F",
                    opacity: "0.8",
                    margin: "auto auto",
                    boxShadow: "5px 10px 5px rgb(0, 0, 0, 0.5)",
                  }}
                >
                  <SearchIcon />
                </Button>
              </Form>
            </Offcanvas.Body>
          </motion.div>
        </Navbar.Offcanvas>

        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => showFunc(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsOnCart > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <ModalCartComp
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></ModalCartComp>
              ))}

              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

              <Button onClick={checkout} variant="success">
                Checkout
              </Button>
            </>
          ) : (
            <h1>Your Cart Is Empty</h1>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComp;
