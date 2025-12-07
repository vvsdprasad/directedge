import React from "react";

export default function CorporateSolutions() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Corporate Solutions</h1>
      <p className="mt-3 text-slate-600 max-w-prose">Direct Edge partners with organizations to deliver custom-branded merchandise at scale. Our services include:</p>

      <ul className="mt-6 space-y-4">
        <li className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Dedicated Account Management</h3>
          <p className="text-sm text-slate-600 mt-1">A single point of contact for planning, samples and ongoing orders.</p>
        </li>

        <li className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Bulk Ordering & Logistics</h3>
          <p className="text-sm text-slate-600 mt-1">Competitive pricing, warehousing and fulfillment across regions.</p>
        </li>

        <li className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Custom Branding</h3>
          <p className="text-sm text-slate-600 mt-1">Embroidery, screen print, engraving and packaging tailored to your brief.</p>
        </li>
      </ul>

      <div className="mt-8">
        <a href="/contact" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Request a Quote
        </a>
      </div>
    </main>
  );
}