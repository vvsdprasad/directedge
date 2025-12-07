import React, { useState, useMemo, useEffect } from "react";
import { UploadCloud } from "lucide-react";

/*
  Customization form for product detail.
  - capacity: 30/50/100
  - finish: label / metal plaque / engraving
  - packaging: standard / premium
  - quantity: number
  - logo upload with preview
  - simple pricing with quantity tiers
*/
export default function CustomizationForm({ product }) {
  // defaults
  const [capacity, setCapacity] = useState("50");
  const [finish, setFinish] = useState("label");
  const [packaging, setPackaging] = useState("standard");
  const [quantity, setQuantity] = useState(25);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [notes, setNotes] = useState("");
  const basePrices = product.basePrices || { "30": 12, "50": 18, "100": 30 };

  // extra cost mapping
  const finishCosts = { label: 0, plaque: 3.5, engraving: 5.0 };
  const packagingCosts = { standard: 1.5, premium: 4.5 };

  useEffect(() => {
    if (!logoFile) {
      setLogoPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setLogoPreview(e.target.result);
    reader.readAsDataURL(logoFile);

    return () => {
      // cleanup if needed
    };
  }, [logoFile]);

  // quantity discount tiers
  const unitPriceBeforeDiscount = useMemo(() => {
    const base = basePrices[capacity] ?? 0;
    const extra = (finishCosts[finish] ?? 0) + (packagingCosts[packaging] ?? 0);
    return +(base + extra).toFixed(2);
  }, [capacity, finish, packaging, basePrices]);

  const discountPercent = useMemo(() => {
    if (quantity >= 500) return 0.30;
    if (quantity >= 200) return 0.20;
    if (quantity >= 100) return 0.12;
    if (quantity >= 50) return 0.08;
    if (quantity >= 25) return 0.04;
    return 0;
  }, [quantity]);

  const unitPrice = useMemo(() => {
    return +(unitPriceBeforeDiscount * (1 - discountPercent)).toFixed(2);
  }, [unitPriceBeforeDiscount, discountPercent]);

  const totalPrice = useMemo(() => +(unitPrice * quantity).toFixed(2), [unitPrice, quantity]);

  function handleLogoChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
    } else {
      setLogoFile(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would normally send data to the backend or create a quote request.
    const payload = {
      productId: product.id,
      capacity,
      finish,
      packaging,
      quantity,
      notes,
      logoFileName: logoFile?.name ?? null,
      unitPrice,
      totalPrice
    };

    // For demo: open mailto/contact or console.log
    console.log("Quote request payload:", payload);
    alert(`Request sent. We'll contact you with a formal quote for ${quantity} units. (See console for payload.)`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-slate-700">Capacity</label>
        <div className="flex gap-2">
          {["30", "50", "100"].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCapacity(c)}
              className={`px-3 py-1 rounded-md text-sm border ${capacity === c ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-200"} transition`}
            >
              {c} ml
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-slate-700">Branding method</label>
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="radio" name="finish" value="label" checked={finish === "label"} onChange={() => setFinish("label")} />
            <span>Label print (cost effective)</span>
          </label>

          <label className="inline-flex items-center gap-2 text-sm">
            <input type="radio" name="finish" value="plaque" checked={finish === "plaque"} onChange={() => setFinish("plaque")} />
            <span>Metal plaque (premium)</span>
          </label>

          <label className="inline-flex items-center gap-2 text-sm">
            <input type="radio" name="finish" value="engraving" checked={finish === "engraving"} onChange={() => setFinish("engraving")} />
            <span>Engraving (elegant & durable)</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-slate-700">Packaging</label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPackaging("standard")}
            className={`px-3 py-1 rounded-md text-sm border ${packaging === "standard" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-200"} transition`}
          >
            Standard gift box
          </button>
          <button
            type="button"
            onClick={() => setPackaging("premium")}
            className={`px-3 py-1 rounded-md text-sm border ${packaging === "premium" ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-200"} transition`}
          >
            Premium luxury box
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        <label className="text-xs text-slate-700">Quantity</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-28 rounded-md border border-slate-200 px-3 py-2 text-sm"
          />
          <div className="text-xs text-slate-500">MOQ 25 recommended</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-slate-700">Upload logo (PNG/SVG)</label>
        <label className="flex items-center gap-2 cursor-pointer justify-start">
          <input onChange={handleLogoChange} type="file" accept="image/*" className="hidden" />
          <span className="inline-flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md text-sm hover:bg-slate-50 transition">
            <UploadCloud size={16} /> Choose file
          </span>
          {logoFile && <span className="text-xs text-slate-500 ml-2">{logoFile.name}</span>}
        </label>
      </div>

      {logoPreview && (
        <div className="grid grid-cols-2 gap-3 items-start">
          <div className="text-xs text-slate-700">Logo preview</div>
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-md">
            <img src={logoPreview} alt="Logo preview" className="max-h-24 object-contain" />
            <p className="text-xs text-slate-500 mt-2">This is a client-side preview — the final mockup will be provided by our design team.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="text-xs text-slate-700">Notes for design team</div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Colors, positioning, or any special instructions" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
        <div className="space-y-1">
          <div className="text-sm text-slate-700">Unit price</div>
          <div className="text-lg font-semibold text-slate-900">₹ {unitPrice.toFixed(2)}</div>
          <div className="text-xs text-slate-500">Discount applied: {Math.round(discountPercent * 100)}%</div>
        </div>

        <div className="text-right">
          <div className="text-sm text-slate-700">Estimated total</div>
          <div className="text-lg font-semibold text-slate-900">₹ {totalPrice.toFixed(2)}</div>
          <div className="text-xs text-slate-500">Excludes taxes and shipping</div>
        </div>
      </div>

      <div className="flex gap-3">
        <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Request Quote
        </button>
        <a href="/contact" className="inline-flex items-center px-4 py-2 border border-slate-200 text-slate-700 rounded-md hover:bg-slate-50 transition">
          Contact Sales
        </a>
      </div>
    </form>
  );
}