// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchBanner from "./Core/Notifications/LaunchBanner.jsx";
import ComingSoon from "./app/layout/Coomingsoon.jsx";
import HomePage from "./app/pages/HomePage.jsx";
import BuyTokenPage from "./app/pages/BuyTokenPage.jsx";
import TokenPage from "./app/pages/TokenPage.jsx";
// import NotFound from "./app/pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/launch" element={<LaunchBanner />} />
        {/* <Route path="*" element={<NotFound />} /> */}
         <Route path="/buytoken" element={<BuyTokenPage />} />
         <Route path="/token" element={<TokenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
