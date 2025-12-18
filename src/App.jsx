import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wishlist from "./pages/Wishlist";
import "./app.css"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Catalogue from "./pages/Catalogue";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
    {/*   <CartSidebar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalogue />} />
        {/* <Route path="/catalogue" element={<Catalogue />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

