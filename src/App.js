import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemPage from "./pages/ItemPage";
import CartProvider from "./CartContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact-Us";
import ExchangesReturns from "./pages/Exchanges-Returns";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="ItemPage" element={<ItemPage />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Contact-Us" element={<ContactUs />} />
          <Route path="Exchanges-Returns" element={<ExchangesReturns />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
