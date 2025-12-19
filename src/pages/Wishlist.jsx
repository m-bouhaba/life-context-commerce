import { useSelector, useDispatch } from "react-redux";
// import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Heart, ShoppingCart } from "lucide-react";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (id) => {
    // dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-page">
      {/* HERO */}
      <div className="wishlist-hero">
        <h1>Wishlist 2026</h1>
        <p>Your favorite products, saved for later</p>
      </div>

      {/* CONTENT */}
      <div className="wishlist-content">
        {/* Empty state */}
        {wishlistItems.length === 0 && (
          <div className="wishlist-empty">
            <Heart size={48} />
            <p>Your wishlist is empty</p>
          </div>
        )}

        {/* List */}
        {wishlistItems.length > 0 && (
          <ul className="wishlist-list">
            {wishlistItems.map((item) => (
              <li key={item.id} className="wishlist-item">
                {/* Image */}
                <img src={item.image} alt={item.name} />

                {/* Info */}
                <div className="wishlist-info">
                  <h3>{item.name}</h3>
                  <span className="wishlist-price">
                    {item.price} MAD
                  </span>
                </div>

                {/* Actions */}
                <div className="wishlist-actions">
                  <button
                    className="wishlist-add-cart"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart size={16} />
                    Add to cart
                  </button>

                  <button
                    className="wishlist-remove"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Heart size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
