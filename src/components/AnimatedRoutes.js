import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemPage from "../pages/ItemPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact-Us";
import LandingPage from "../pages/LandingPage";
import ExchangesReturns from "../pages/Exchanges-Returns";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="ItemPage" element={<ItemPage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Contact-Us" element={<ContactUs />} />
        <Route path="Exchanges-Returns" element={<ExchangesReturns />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
