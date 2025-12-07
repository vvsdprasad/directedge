import React from "react";
import { Link } from "react-router-dom";
import { Truck, Layers, Percent, Package } from "lucide-react";

/*
  Home page with hero, feature section, and a product preview grid.
  Emphasizes "Style Meets Brand Identity" and links to Catalog.
*/
export default function Home() {
  const productPlaceholder = "/assets/product-placeholder-1.jpg";

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Style Meets Brand Identity
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-prose">
                Premium lifestyle products and bespoke corporate-branded merchandise. Tailor-made for events, employee gifting, and promotional campaigns.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/catalog"
                  className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition"
                >
                  Explore Catalog
                </Link>
                <Link
                  to="/corporate-solutions"
                  className="inline-flex items-center px-5 py-3 border border-slate-200 text-slate-700 rounded-md hover:bg-slate-50 transition"
                >
                  Corporate Solutions
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={productPlaceholder}
                  alt="Hero product preview"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm font-medium text-slate-700">Sample Premium Tote</div>
                  <div className="mt-2 text-sm text-slate-500">High-quality imagery and clear customization paths help buyers convert.</div>
                  <div className="mt-4 flex gap-3">
                    <Link to="/catalog" className="text-sm inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      View Customization Options
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Why choose us */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">Corporate Customization Service</h2>
          <p className="mt-2 text-slate-600 max-w-prose">We help brands translate their identity into premium merchandise — from concept to delivery.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-indigo-50 text-indigo-600">
                <Layers size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-800">Design & Prototyping</h3>
              <p className="mt-1 text-sm text-slate-600">Collaborative mockups, samples and approval cycles.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-indigo-50 text-indigo-600">
                <Truck size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-800">Bulk Fulfillment</h3>
              <p className="mt-1 text-sm text-slate-600">Scalable production with reliable supply chain partners.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-indigo-50 text-indigo-600">
                <Percent size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-800">Competitive Pricing</h3>
              <p className="mt-1 text-sm text-slate-600">Transparent quotes for volumes and recurring orders.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-indigo-50 text-indigo-600">
                <Package size={18} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-800">Quality Assurance</h3>
              <p className="mt-1 text-sm text-slate-600">Strict QA checks throughout production and before dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product preview grid (emphasis on imagery) */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Featured products</h3>
            <Link to="/catalog" className="text-indigo-600 hover:underline text-sm">View full catalog</Link>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <article key={i} className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                <div className="aspect-w-4 aspect-h-3 bg-slate-100">
                  <img src={productPlaceholder} alt={`Product ${i + 1}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-medium text-slate-800">Product {i + 1}</h4>
                  <p className="mt-1 text-xs text-slate-500">Clean imagery-first card with CTA focused on customization.</p>
                  <div className="mt-3">
                    <Link to="/catalog" className="text-sm inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      View Customization Options
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}