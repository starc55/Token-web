import React from "react";
import LaunchBanner from "../../Core/Notifications/LaunchBanner";
import Navbar from "../../Shared/Components/Navbar/Navbar";
import "./page.css";
import coinLeft from "../../assets/images/coin-left.png";
import coinRight from "../../assets/images/coin-right.png";
import solana from "../../assets/images/solana.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/buytoken");
  };

  return (
    <div className="home-container">
      <LaunchBanner text="LAUNCHING SOON! UP TO 10% REFFERAl BONUS" />
      <Navbar />

      <section className="hero">
        <img src={coinLeft} alt="coin" className="floating-coin left-coin" />
        <img src={coinRight} alt="coin" className="floating-coin right-coin" />

        <div className="hero-content">
          <h1 className="hero-title">
            Upgrade your tradings
            <br />
            with <span className="highlight">Predictive AI</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="hero-btn" onClick={handleBuyClick}>
            Join Waitlist
          </button>
        </div>
      </section>

      {/* FEATURES CARD – ENDI MOTION BILAN PREMIUM KIRIB KELADI */}
      <motion.section
        className="features-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Matn qismi – chapdan kirib keladi */}
          <motion.div
            className="card_text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="small-text">Our Futures</p>
            <h2>
              All Agents Builts to Think
              <br />
              Like Degen Traders
            </h2>
            <div className="card-buttons">
              <button className="waitlist-btn">
                <p className="waitlist-text">Join Waitlist</p>
              </button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </motion.div>

          {/* Orqa bubble (blurred) – uzoqdan kichrayib kirib keladi */}
          <motion.div
            className="prediction-bubble2 blurred-bg-bubble"
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ opacity: 0.7, scale: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <img src={solana} alt="SOL" />
            <div>
              <div className="bubble-header">
                <span>AI Prediction :</span>
              </div>
              <div className="bubble-content">
                $SOL is <strong className="bullish">Bullish</strong> today
                <strong className="bullish"> +15%</strong> in last week
                <br />
                The market will go into correction within
                <span className="bullish"> 7 days</span>. Our prediction:
                <strong className="bearish"> Short</strong> to the 142.563
              </div>
            </div>
          </motion.div>

          {/* Oldingi bubble – yaqinroq, kattaroq, silliq kirib keladi */}
          <motion.div
            className="prediction-bubble"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "backOut",
              rotate: { duration: 1.2 }
            }}
          >
            <img src={solana} alt="SOL" />
            <div>
              <div className="bubble-header">
                <span>AI Prediction :</span>
              </div>
              <div className="bubble-content">
                $SOL is <strong className="bullish">Bullish</strong> today
                <strong className="bullish"> +15%</strong> in last week
                <br />
                The market will go into correction within
                <span className="bullish"> 7 days</span>. Our prediction:
                <strong className="bearish"> Short</strong> to the 142.563
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;