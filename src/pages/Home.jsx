import products from "../data/products";
import ProductCard from "../components/ProductCard";


export default function Home() {
  return (
     <div className="home-page">

      {/* ---------------- Hero Section ---------------- */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Shop based on your life situation</h1>
          <p>
            Choose your context and discover products tailored to your needs. 
            No more endless browsing – just what matters for your lifestyle.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">Start Shopping</button>
            <button className="secondary-button">Discover Contexts</button>
          </div>
        </div>

        <div className="hero-video">
          <video
            src="/images/Video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* ---------------- Products Grid ---------------- */}
      {/* <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section> */}

    </div>
  );
}


