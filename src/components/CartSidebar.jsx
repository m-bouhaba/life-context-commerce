import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

export default function CartSidebar({ isOpen, onClose }) {
  console.log('helllooooo');
  
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="cart-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.aside
            className="cart-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="cart-header">
              <h3>Mon panier</h3>
              <button onClick={onClose} className="close-btn">✕</button>
            </div>

            <div className="cart-content">
              {items.length === 0 && <p className="empty-cart">Votre panier est vide.</p>}

              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <p className="title">{item.title}</p>
                    <p className="price">{item.price} MAD</p>
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total">
                <span>Total</span>
                <span>{totalPrice} MAD</span>
              </div>
              <button className="commander-button">Commander</button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

