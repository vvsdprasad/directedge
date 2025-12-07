import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="rounded-md bg-indigo-600 p-2">
                <ShoppingBag className="text-white" size={18} />
              </div>
              <span className="font-semibold text-slate-900">Direct Edge</span>
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link to="/" className="text-slate-700 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/catalog" className="text-slate-700 hover:text-indigo-600 transition-colors">Catalog</Link>
            <Link to="/corporate-solutions" className="text-slate-700 hover:text-indigo-600 transition-colors">Corporate Solutions</Link>
            <Link to="/about" className="text-slate-700 hover:text-indigo-600 transition-colors">About Us</Link>
            <Link to="/contact" className="text-slate-700 hover:text-indigo-600 transition-colors">Contact</Link>
            <Link to="/catalog" className="ml-3 inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
              Order Now
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 transition"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transform-gpu transition-all duration-200 origin-top ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <div className="px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md text-slate-800 hover:bg-slate-100 transition">Home</Link>
            <Link to="/catalog" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md text-slate-800 hover:bg-slate-100 transition">Catalog</Link>
            <Link to="/corporate-solutions" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md text-slate-800 hover:bg-slate-100 transition">Corporate Solutions</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md text-slate-800 hover:bg-slate-100 transition">About Us</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md text-slate-800 hover:bg-slate-100 transition">Contact</Link>
            <Link to="/catalog" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Order Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}