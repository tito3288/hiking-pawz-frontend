import React from "react";
import ProductComp from "../components/ProductComp";
import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import FooterPage from "../components/FooterPage";
import ProductDesc from "../components/ProductDesc";
import MissionCom from "../components/MissionCom";
import SubscriptionComp from "../components/SubscriptionComp";

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
        <MissionCom />
        <ProductDesc />
        <ProductComp />
        <SubscriptionComp />
        <FooterPage></FooterPage>
      </div>
    </div>
  );
};

export default LandingPage;
