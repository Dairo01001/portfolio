import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Download from "./components/Download";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
