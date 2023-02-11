import React from "react";
import ProductComp from "../components/ProductComp";
import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import FooterPage from "../components/FooterPage";

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
        <FooterPage></FooterPage>
      </div>
    </div>
  );
};

export default LandingPage;
