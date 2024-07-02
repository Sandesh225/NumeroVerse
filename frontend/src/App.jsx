import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Astrology from "./components/Astrology/Astrology";

import Numerology from "./components/Numerology/Numerology";
import FeatureSection from "./components/FeatureSection/FeatureSection";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="astrology" element={<Astrology />}></Route>
        <Route path="/numerology" element={<Numerology />}></Route>
        <Route path="/feature" element={<FeatureSection />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}
