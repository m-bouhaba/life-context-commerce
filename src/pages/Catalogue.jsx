
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalogue() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const filteredProducts = mode
    ? products.filter(p => p.contexts.includes(mode))
    : products;

  return (
    <div className="catalog-page">

      <div className="catalog-header">
        <h1>
          {mode ? `Products for "${mode.replace("-", " ")}"` : "All Products"}
        </h1>
        <p className="catalog-subtitle">
          {mode
            ? "Selected products that match your current life situation"
            : "Browse all our curated products"}
        </p>
      </div>

      <div className="catalog-grid">
        {filteredProducts.length === 0 && (
          <p className="empty-state">
            No products found for this situation.
          </p>
        )}

        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}


