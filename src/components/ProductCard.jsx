import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  console.log("helloo");
  
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">
      {/* Wishlist icon */}
      <button
        className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
        onClick={() =>
          isInWishlist
            ? dispatch(removeFromWishlist(product.id))
            : dispatch(addToWishlist(product))
        }
      >
        <Heart size={20} />
      </button>

      {/* Product image */}
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      {/* Product info */}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
      </div>

      {/* Add to cart */}
      <button
        className="add-to-cart"
        onClick={() => dispatch(addToCart(product))}
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}

