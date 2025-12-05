import React from "react";
import LaunchBanner from "../../Core/Notifications/LaunchBanner";
import Navber from "../../Shared/Components/Navbar/Navbar";
import NewCard from "../../Shared/Components/NewCard/NewCard";
import Temp from "../../Shared/Components/HeroFooter/Temp";
import Footer from "../../Shared/Components/Footer/Footer";

const TokenPage = () => {
  return (
    <div>
      <LaunchBanner text="TOKEN LIVE! BUY NOW!" />
      <Navber />
      <NewCard />
      <Temp />
      <Footer />
    </div>
  );
};

export default TokenPage;
