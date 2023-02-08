import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCom = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Shipping cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>These are the items in your cart</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCom;
