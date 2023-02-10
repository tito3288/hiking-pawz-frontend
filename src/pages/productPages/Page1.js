import React from "react";
import ItemComp from "../../components/ItemComp";
import NavbarComp from "../../components/NavbarComp";
import { productArray } from "../../productArray";
import FooterPage from "../../components/FooterPage";

const Page1 = () => {
  const product1 = productArray.find(
    (value) => value.id === "price_1M0C3vL8hk1dUwiAxouMZOjt"
  );

  return (
    <div className="product-background">
      <NavbarComp></NavbarComp>
      <ItemComp id={product1.id} />
      <FooterPage></FooterPage>
    </div>
  );
};

export default Page1;
