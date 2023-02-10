import React from "react";
import ProductComp from "../components/ProductComp";
import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#121212",
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/cartographer.png)",
        }}
      >
        <NavbarComp />
        <CarouselComp />
        <ProductComp />
      </div>
    </div>
  );
};

export default LandingPage;
