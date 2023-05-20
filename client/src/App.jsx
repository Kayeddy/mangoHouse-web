import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import { useSnapshot } from "valtio";

import { Home, Marketplace, ApartmentSection, GolfCarSection } from "./pages";
import state from "./context";
import CookieBanner from "./components/CookieBanner";

function App() {
  const snap = useSnapshot(state);

  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted) {
      state.acceptCookies();
    }
  }, []);

  return (
    <main className="app transition-all ease-in min-h-screen">
      <div className="customBackground">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/hospedaje" element={<ApartmentSection />} />
        <Route path="/transporte" element={<GolfCarSection />} />
      </Routes>
      {snap.cookiesAccepted === false && (
        <div className="absolute bottom-0 w-full z-10">
          <CookieBanner />
        </div>
      )}
    </main>
  );
}

export default App;
