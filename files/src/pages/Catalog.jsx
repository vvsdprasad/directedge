import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../utils/products";

/*
  Catalog page: responsive image-first grid, mobile-first
*/
export default function Catalog() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Catalog</h1>
          <p className="mt-2 text-slate-600 max-w-prose">Explore our curated selection of lifestyle and corporate merchandise. Click a product to view customization options and bulk pricing.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}