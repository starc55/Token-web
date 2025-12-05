import React from "react";
// import LaunchBanner from "../../Core/Notifications/LaunchBanner.jsx";
// import CoomingSoon from "../layout/Coomingsoon.jsx";
import CardStyle from "../../Shared/Components/Cardinfo/CardStyle.jsx";
import SlideBrand from "../../Shared/Components/Slide/SlideBrand.jsx";
import Home from "./Home.jsx";
import UpgradeCards from "./UpgradeCard.jsx";
import Herofooter from "../../Shared/Components/HeroFooter/Temp.jsx";
import Footer from "../../Shared/Components/Footer/Footer.jsx";
// import About from "./About.jsx";

const HomePage = () => {
  return (
    <div>
      <Home />
      <UpgradeCards />
      {/* <About /> */}
      <SlideBrand title="Our services" subtitle="Integrated with"/>
      <CardStyle />
      <Herofooter />
      <Footer />
      {/* <CoomingSoon /> */}
    </div>
  );
};

export default HomePage;
