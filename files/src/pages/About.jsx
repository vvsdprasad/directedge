import React from "react";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">About Us</h1>
      <p className="mt-3 text-slate-600 max-w-prose">
        Direct Edge Products Pvt. Ltd. creates stylish lifestyle items and high-quality corporate merchandise that help brands express identity through design, materials, and packaging.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Our Mission</h3>
          <p className="text-sm text-slate-600 mt-1">To craft premium merchandise that elevates brand experiences and builds lasting impressions.</p>
        </div>

        <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Sustainability</h3>
          <p className="text-sm text-slate-600 mt-1">We prioritize responsibly sourced materials and eco-friendly packaging options.</p>
        </div>
      </div>
    </main>
  );
}