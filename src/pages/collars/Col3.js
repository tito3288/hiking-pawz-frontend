import React from "react";
import { productArray } from "../../productArray";
import FooterPage from "../../components/FooterPage";
import NavbarComp from "../../components/NavbarComp";
import ItemComp from "../../components/ItemComp";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop";

const Col3 = () => {
  const product3 = productArray.find((value) => {
    return value.id === "price_1MlNn1L8hk1dUwiALHRExa94";
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
        backgroundImage: "url(./backgrounds/dark-leather.png)",
        height: "100%",
      }}
    >
      <ScrollToTop />
      <NavbarComp />
      <ItemComp id={product3.id} />
      <FooterPage></FooterPage>
    </motion.div>
  );
};

export default Col3;
