import React from "react";
import { Carousel } from "react-bootstrap";
import "./Page.css";

function CarouselComp() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="carousel.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ marginBottom: "30%" }}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="carousel2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
