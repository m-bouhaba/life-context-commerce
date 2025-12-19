import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
   const lifeModeRef = useRef(null);
  const learnMoreRef = useRef(null);

  const steps = [
    { number: 1, title: "Choose Your Context", description: "Select your current life situation from our curated contexts." },
    { number: 2, title: "Browse Smart Picks", description: "Discover products specifically tailored to your situation." },
    { number: 3, title: "Shop with Confidence", description: "Get exactly what you need without the endless scrolling." },
  ];

  const scrollToLifeMode = () => {
    if (lifeModeRef.current) lifeModeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLearnMore = () => {
    if (learnMoreRef.current) learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <section className="hero-section">
      {/* TEXT */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -120, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Shop based on your life situation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
        >
          Choose your context and discover products tailored to your needs.
          No more endless browsing – just what matters for your lifestyle.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.25, delayChildren: 0.7 },
            },
          }}
        >
          <motion.button
            className="cta-button"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToLifeMode}
          >
            Choose Your Situation
          </motion.button>

          <motion.button
            className="secondary-button"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToLearnMore}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* VIDEO */}
      <motion.div
        className="hero-video"
        initial={{ opacity: 0, x: 140, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <video src="/images/Video.mp4" autoPlay loop muted playsInline />
      </motion.div>
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
      <section className="life-mode-section" ref={lifeModeRef}>
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
      <section className="learn-more-section" ref={learnMoreRef}>
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


