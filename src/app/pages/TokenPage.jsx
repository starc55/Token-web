import React from "react";
import LaunchBanner from "../../Core/Notifications/LaunchBanner";
import Navber from "../../Shared/Components/Navbar/Navbar";
import NewCard from "../../Shared/Components/NewCard/NewCard";
import Herofooter from "../../Shared/Components/HeroFooter/herofooter";
import Footer from "../../Shared/Components/Footer/Footer";

const TokenPage = () => {
  return (
    <div>
      <LaunchBanner text="TOKEN LIVE! BUY NOW!" />
      <Navber />
      <NewCard />
      <Herofooter />
      <Footer />
    </div>
  );
};

export default TokenPage;
