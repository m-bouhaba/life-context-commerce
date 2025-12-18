import React from 'react'
import { useState } from "react";
import CartSidebar from './CartSidebar';

export default function Navbar() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-left">
    <img
        src="/images/logo.png"
        alt="Logo"
        className="logo"
      />
  </div>

  <div className="navbar-right">
    <button className="icon-btn" aria-label="Catalogue">
      <img
        src="/images/catalog.png"
        alt="Cart"
        className="nav-icon-img"
      />
    </button>

  
    <button className="icon-btn" aria-label="Wishlist">
      <svg
        className="nav-icon heart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>

  
    <button className="icon-btn" aria-label="Cart" onClick={() => setOpenCart(true)}>
      <img
        src="/images/cart.png"
        alt="Cart"
        className="nav-icon-img"
      />
    </button>
  </div>
  <CartSidebar isOpen={openCart} onClose={() => setOpenCart(false)} />
</nav>

  )
}
