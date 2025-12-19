import { createSlice } from "@reduxjs/toolkit";

// Charger wishlist depuis localStorage
const loadWishlistFromStorage = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const initialState = loadWishlistFromStorage();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (exists) {
        // retirer si déjà présent
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        // ajouter si absent
        state.items.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// Persistance automatique
export const persistWishlist = (store) => {
  store.subscribe(() => {
    const { wishlist } = store.getState();
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });
};
