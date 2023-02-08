import React from "react";
import ItemComp from "../../components/ItemComp";
import NavbarComp from "../../components/NavbarComp";
import { productArray } from "../../productArray";

const Page1 = () => {
  const product1 = productArray.find((value) => value.id === "1");

  return (
    <div
      style={{
        backgroundColor: "#171717",
        minHeight: "100vh",
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/black-paper.png)",
      }}
    >
      <NavbarComp></NavbarComp>
      <ItemComp id={product1.id} />
    </div>
  );
};

export default Page1;
