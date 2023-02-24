import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page.css";

const CardComp = (props) => {
  const secondary = "Dark";
  const white = "White";

  return (
    <Card
      className="card"
      style={{
        boxShadow: "9px 8px 10px rgba(0,0,0,0.5",
      }}
      bg={secondary.toLocaleLowerCase()}
      text={white.toLocaleLowerCase()}
    >
      <Link to={props.page}>
        <Card.Img src={props.img} />
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
