import React from "react";
import { productArray } from "../../productArray";
import FooterPage from "../../components/FooterPage";
import NavbarComp from "../../components/NavbarComp";
import ItemComp from "../../components/ItemComp";
import { motion } from "framer-motion";

const Col4 = () => {
  const product4 = productArray.find((value) => {
    return value.id === "";
  });

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: { duration: 0.1, type: "spring", bounce: 0.5 },
      }}
      style={{
        backgroundColor: "#121212",
        backgroundImage: "url(dark-leather.png)",
        height: "100%",
      }}
    >
      <NavbarComp />
      <ItemComp id={product4.id} />
      <FooterPage></FooterPage>
    </motion.div>
  );
};

export default Col4;
