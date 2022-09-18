import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Home from "./components/Home";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
