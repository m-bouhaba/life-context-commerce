import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  const { cart, wishlist } = store.getState();
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
});
