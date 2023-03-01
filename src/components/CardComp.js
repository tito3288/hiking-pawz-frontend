import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page.css";
import { motion, useAnimation } from "framer-motion";

const CardComp = (props) => {
  //THESE COLORS ARE USED TO GIVE THE CARD COMP A DARK COLOR AND THE TEXT BE WHITE
  const secondary = "Dark";
  const white = "White";

  const control = useAnimation();

  return (
    <motion.div animate={control}>
      <Card
        onClick={() =>
          control.start({
            scale: [1.2, 1],
          })
        }
        className="card"
        style={{
          boxShadow: "9px 8px 10px rgba(0,0,0,0.5",
          // border: "solid #121212 5px",
          borderRadius: "20px",
          // padding: "3px 3px",
        }}
        bg={secondary.toLocaleLowerCase()}
        text={white.toLocaleLowerCase()}
      >
        <Link to={props.page}>
          <Card.Img src={props.img} style={{ borderRadius: "20px" }} />
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CardComp;
