import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
            <button className="cta-button">Choose Your Situation</button>
            <button className="secondary-button">Learn More</button>
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
      {/* <section className="grid">
        <h2>Our Products</h2>
        <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
      </section> */}
    <section className="life-mode-section">
  <div className="container">
    <h2>What's Your Current Life Mode?</h2>
    <p className="subtitle">
      Choose the situation that best describes where you are right now
    </p>

    <div className="situations">
  
      <div className="situation-card">
        <h3>Starting a New Job</h3>
        <p>Essential items to make a great first impression and stay organized</p>
        <button className="explore-btn" onClick={() => navigate("/catalog?mode=new-job")}>Explore products →</button>
      </div>

      
      <div className="situation-card">
        <h3>Moving to a New Place</h3>
        <p>Must-have items to set up your new space quickly and efficiently</p>
        <button className="explore-btn" onClick={() => navigate("/catalog?mode=new-place")}>Explore products →</button>
      </div>

    
      <div className="situation-card">
        <h3>Traveling Frequently</h3>
        <p>Travel essentials to stay organized and comfortable on the go</p>
        <button className="explore-btn" onClick={() => navigate("/catalog?mode=traveling")}>Explore products →</button>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}


