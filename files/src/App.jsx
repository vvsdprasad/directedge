import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CorporateSolutions from "./pages/CorporateSolutions";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[color:var(--bg)] text-slate-900 antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/corporate-solutions" element={<CorporateSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="border-t border-slate-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-600">
            © {new Date().getFullYear()} Direct Edge Products Pvt. Ltd. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}