import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wishlist from "./pages/Wishlist";
import "./app.css"
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <CartSidebar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/catalogue" element={<Catalogue />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

