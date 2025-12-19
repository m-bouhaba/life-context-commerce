import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const steps = [
    {
      number: 1,
      title: "Choose Your Context",
      description:
        "Select your current life situation from our curated contexts.",
    },
    {
      number: 2,
      title: "Browse Smart Picks",
      description:
        "Discover products specifically tailored to your situation.",
    },
    {
      number: 3,
      title: "Shop with Confidence",
      description:
        "Get exactly what you need without the endless scrolling.",
    },
  ];

  return (
    <div className="home-page">
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
      <section className="learn-more-section">
      <div className="learn-more-header">
        <h2>How LifeMode Store Works</h2>
        <p>
          Three simple steps to discover products that actually match your current
          needs
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}


