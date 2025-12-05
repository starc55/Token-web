import React from "react";
import BuyHomePage from "./BuyHomePage";
import UtilsPage from "./UtilsPage";
import SlideBrand from "../../Shared/Components/Slide/SlideBrand";
import AuditPage from "./AuditPage";
import FAQPage from "../../Shared/Components/FAQ/FAQPage";
import HeroFooter from "../../Shared/Components/HeroFooter/Herofooter";
import Footer from "../../Shared/Components/Footer/Footer";

const BuyTokenPage = () => {
  return (
    <div>
      <BuyHomePage />
      <UtilsPage />
      <SlideBrand title="Our token" subtitle="Partnership with" />
      <AuditPage />
      <FAQPage />
      <HeroFooter />
      <Footer />
    </div>
  );
};

export default BuyTokenPage;
