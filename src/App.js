import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemPage from "./pages/ItemPage";
import CartProvider from "./CartContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact-Us";
import ExchangesReturns from "./pages/Exchanges-Returns";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
