import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [added, setAdded] = useState(false);

  const isInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);

    if (navigator.vibrate) navigator.vibrate(80);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {/* Wishlist */}
        <button
          className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
          aria-label="Add to wishlist"
          onClick={handleToggleWishlist}
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="product-footer">
          <span className="product-price">{product.price} MAD</span>

          {/* Add to cart */}
          <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? (
              <>
                <Check size={16} />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

