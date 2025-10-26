import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import UnderConstruction from "./pages/UnderConstruction ";

const AppContent = () => {
  const location = useLocation();
  const isUnderConstruction = location.pathname !== "/";

  return (
    <>
      {!isUnderConstruction && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>

      {!isUnderConstruction && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
