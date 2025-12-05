import React from "react";
import "../../assets/styles/LaunchBanner.css";

const LaunchBanner = ({ text }) => {
  return (
    <div
      className="launch-banner"
      onClick={() => (window.location.href = "/coming-soon")}
    >
      <p className="banner-text">{text}</p>
    </div>
  );
};

export default LaunchBanner;
