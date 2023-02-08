import React from "react";
import ItemComp from "../../components/ItemComp";
import NavbarComp from "../../components/NavbarComp";
import { productArray } from "../../productArray";

const Page2 = () => {
  const product2 = productArray.find((value) => value.id === "2");

  return (
    <div>
      <NavbarComp />
      <ItemComp id={product2.id} />
    </div>
  );
};

export default Page2;
