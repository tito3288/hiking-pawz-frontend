import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./pages/productPages/Page1";
import CartProvider from "./CartContext";
import Page2 from "./pages/productPages/Page2";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
