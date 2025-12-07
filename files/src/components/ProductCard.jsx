import React from "react";
import { Link } from "react-router-dom";

/*
  Image-first product card focused on showcasing imagery.
  CTA text: "View Customization Options"
  Links to product detail at /product/:id
*/
export default function ProductCard({ product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-smooth">
      <Link to={`/product/${product.id}`} className="block">
        <div className="w-full h-44 bg-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </Link>

      <div className="p-3">
        <h4 className="text-sm font-medium text-slate-800">
          <Link to={`/product/${product.id}`} className="hover:text-indigo-600 transition">
            {product.name}
          </Link>
        </h4>
        <p className="mt-1 text-xs text-slate-500">{product.short}</p>
        <div className="mt-3">
          <Link to={`/product/${product.id}`} className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
            View Customization Options
          </Link>
        </div>
      </div>
    </article>
  );
}