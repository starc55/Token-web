import React from "react";
import SectionTitle from "../../Shared/Components/Title/SectionTitle";
import InteractiveSlider from "../../Shared/Components/Slider/InteractiveSlider";
import "./page.css"

const About = () => {
  return (
    <div className="about-section-container">
      <SectionTitle
        title="Upgrade your tradings with"
        strong="Predictive AI"
        subtitle="Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius"
      />
      <InteractiveSlider />
    </div>
  );
};

export default About;
