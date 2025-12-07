import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../utils/products";
import CustomizationForm from "../components/CustomizationForm";

/*
  Product detail page for a product (perfume bottle).
  Shows images, description, and the customization form.
*/
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-slate-900">Product not found</h2>
        <p className="mt-3 text-slate-600">Go back to the <Link to="/catalog" className="text-indigo-600 hover:underline">catalog</Link>.</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.images.map((src, idx) => (
                <img key={idx} src={src} alt={`${product.name} ${idx}`} className="w-full h-20 object-cover rounded-md border border-slate-100" />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{product.name}</h1>
          <p className="mt-3 text-slate-600">{product.description}</p>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-800">Customization</h3>
            <p className="text-xs text-slate-500 mt-1">Select capacity, branding method, packaging and upload your logo to preview a simulated result. For large volumes we provide bulk discounts and dedicated account management.</p>

            <div className="mt-4">
              <CustomizationForm product={product} />
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p><strong>Lead times:</strong> Sample / prototyping 7–10 business days. Production timelines vary by quantity.</p>
            <p className="mt-2"><strong>MOQ:</strong> Typical minimum order 25 units. We offer flexibility for pilot orders — contact us for details.</p>
          </div>
        </div>
      </div>
    </main>
  );
}