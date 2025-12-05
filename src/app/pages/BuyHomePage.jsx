import React from "react";
import LaunchBanner from "../../Core/Notifications/LaunchBanner";
import Navbar from "../../Shared/Components/Navbar/Navbar";

const BuyHomePage = () => {
  return (
    <div>
      <LaunchBanner text="TOKEN LIVE! BUY NOW!" />
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Upgrade your tradings
            <br />
            with <span className="highlight">Predictive AI</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="hero-btn">Buy $VYPEX</button>
        </div>
      </section>
    </div>
  );
};

export default BuyHomePage;
