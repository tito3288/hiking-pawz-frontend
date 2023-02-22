import React from "react";
import ItemComp from "../components/ItemComp";
import FooterPage from "../components/FooterPage";
import { productArray } from "../productArray";
import NavbarComp from "../components/NavbarComp";

const ItemPage = () => {
  const product1 = productArray.find(
    (value) => value.id === "price_1Mb7rFL8hk1dUwiAIvZ3qZbV"
  );

  return (
    <div
      style={{
        backgroundColor: "#121212",
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/shley-tree-2.png)",
        height: "100%",
      }}
    >
      <NavbarComp />
      <ItemComp id={product1.id} />
      <FooterPage></FooterPage>
    </div>
  );
};

export default ItemPage;
