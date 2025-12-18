import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { addToCart } from "../features/cart/cartSlice";


export default function Catalogue() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const dispatch = useDispatch();

  const filteredProducts = mode
    ? products.filter((p) => p.contexts.includes(mode))
    : products;

  return (
    <div className="catalog-page">
      {/* Header */}
      <div className="catalog-header">
        <h1>
          {mode
            ? `Products for "${mode.replace("-", " ")}"`
            : "All Products"}
        </h1>

        <p className="catalog-subtitle">
          {mode
            ? "Selected products that match your current life situation"
            : "Browse all our curated products"}
        </p>
      </div>

      {/* Products */}
      <div className="catalog-grid">
        {filteredProducts.length === 0 && (
          <p className="empty-state">
            No products found for this situation.
          </p>
        )}

        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-description">
                {product.description}
              </p>

              <div className="product-footer">
                <span className="product-price">${product.price}</span>

                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

