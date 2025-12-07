import React from "react";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Contact Us</h1>
      <p className="mt-3 text-slate-600 max-w-prose">Get in touch with our sales team for custom quotes, samples, and bulk ordering information.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm">
          <label className="block text-sm text-slate-700">Name</label>
          <input className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" placeholder="Your name" />

          <label className="block text-sm text-slate-700 mt-4">Email</label>
          <input className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" placeholder="you@example.com" />

          <label className="block text-sm text-slate-700 mt-4">Message</label>
          <textarea className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" rows="4" placeholder="Tell us about your project"></textarea>

          <div className="mt-4">
            <button type="button" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Send Message
            </button>
          </div>
        </form>

        <div className="bg-white rounded-lg p-6 border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-slate-800">Sales & Accounts</h3>
          <p className="text-sm text-slate-600 mt-2">sales@directedge.example</p>
          <p className="text-sm text-slate-600 mt-4">Phone: +91 12345 67890</p>
          <h4 className="mt-6 font-semibold text-slate-800">Office</h4>
          <p className="text-sm text-slate-600 mt-2">Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </main>
  );
}