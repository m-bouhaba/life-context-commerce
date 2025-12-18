import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {/* Wishlist */}
        <button
          className="wishlist-btn"
          aria-label="Add to wishlist"
          onClick={() => console.log("wishlist", product.id)}
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="product-info">
        <h3>{product.name}</h3>
        {/* <p className="product-category">{product.category}</p> */}
        <div className="product-footer">
          <span className="product-price">${product.price}</span>

          {/* Add to cart */}
          <button
            className="add-to-cart-btn"
            aria-label="Add to cart"
            onClick={() => dispatch(addToCart(product))}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

