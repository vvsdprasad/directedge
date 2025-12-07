```markdown
# Direct Edge Products — Frontend (React + Vite)

This repository contains the frontend for Direct Edge Products Pvt. Ltd. — a corporate gifting & branded merchandise site (focused on perfume bottle branding for corporate gifting).

This README contains:
- Quick local setup & run instructions for new team members
- How to run tests
- A simple, non-technical explainer of each UI component/page
- How to add or edit product listings (configuration files to edit)

---

## Prerequisites (what you need locally)

- Node.js (LTS recommended, e.g. v18+)
- npm (comes with Node) OR Yarn / pnpm if you prefer
- Git (to clone the repo)
- Optional: An editor like VS Code

---

## Quick local setup (step-by-step)

1. Clone the repository:
   - git clone https://github.com/vvsdprasad/directedge.git
   - cd directedge

2. Install dependencies:
   - npm install
   - (or `yarn` / `pnpm install` if you use Yarn/pnpm)

3. Run the development server:
   - npm run dev
   - Open the printed URL in your browser (default: http://localhost:5173)

4. Build for production:
   - npm run build
   - Preview a production build:
   - npm run preview

---

## Running tests

Tests use Vitest + React Testing Library.

- Run tests once:
  - npm run test
- Run tests in watch mode:
  - npm run test:watch

Note: If you see errors due to environment versions, ensure your Node is up-to-date (v18+ recommended).

---

## Files you can edit to add more products

Primary product configuration file (JSON) for non-technical editors:
- src/config/products.json

Why JSON? It is human-readable and can be edited by non-developers using any text editor or a JSON editor.

The runtime product list is imported from:
- src/utils/products.js (this file loads and exports the JSON)

To add a product:
1. Open src/config/products.json
2. Add an object to the array with required fields. Example product entry:

{
  "id": "perf1",
  "name": "Signature Eau de Parfum",
  "short": "Elegant glass perfume bottle with premium atomizer — perfect for corporate gifting.",
  "description": "Detailed description for designers and sales.",
  "basePrices": { "30": 12.0, "50": 18.0, "100": 30.0 },
  "image": "https://images.unsplash.com/... (single image shown on listing)",
  "images": ["https://images.unsplash.com/...","..."],
  "tags": ["perfume","corporate","branding","gifting"]
}

Save the file and the dev server will hot-reload (Vite auto-refreshes). If you're running a production build, rebuild after modifying products.json.

Important: `id` must be unique and used by product detail routes (e.g. `/product/perf1`).

---

## Where to find product code and UI

- Product config: src/config/products.json (edit this to add products)
- Product loader: src/utils/products.js (imports the JSON and exports for use in the app)
- ProductCard component (product listing UI): src/components/ProductCard.jsx
- Product detail and customization flow: src/pages/ProductDetail.jsx and src/components/CustomizationForm.jsx
- Catalog page (grid view): src/pages/Catalog.jsx

---

## Non-technical explainer — What each page/component does

Below is a plain-language, non-technical description of the website structure and components. This is written so marketing or operations people can understand what's where.

Top-level layout:
- Navbar (Top menu)
  - A sticky navigation bar that stays at the top while scrolling. Contains links: Home, Catalog, Corporate Solutions, About Us, Contact. On phones it collapses to a hamburger menu (three lines) to save space.

Pages:
- Home
  - Hero: A large banner with company message "Style Meets Brand Identity" and buttons to explore the catalog or corporate solutions.
  - Feature section: Describes the Corporate Customization Service (design, bulk fulfillment, pricing, QA).
  - Featured products grid: Image-focused preview of a few products with a clear "View Customization Options" action.

- Catalog
  - A grid/listing of all products. Each product card shows an image, a short description, and a CTA "View Customization Options."

- Product Detail
  - A product-specific page that shows larger images, a detailed description and a "Customization" form where customers can choose bottle capacity, branding method (label/metal plaque/engraving), packaging, quantity, and upload their logo for a preview and a quote.

- Corporate Solutions
  - Page describing B2B services: dedicated account manager, bulk ordering & logistics, custom branding options. CTA to request a quote.

- About & Contact
  - Standard company info and a contact form to reach sales.

Components (simple description):
- Navbar: top navigation controls and brand logo.
- ProductCard: a box highlighting a product image and short details with a clear button to start customization.
- ProductDetail: shows product images and detailed info; next to it the customization form.
- CustomizationForm: interactive form used by clients to configure their branded perfume bottle order. Lets users:
  - Choose capacity (30 / 50 / 100 ml)
  - Choose branding finish (label, metal plaque, engraving)
  - Choose packaging (standard / premium)
  - Enter quantity (with simple discounts shown)
  - Upload logo file (client-side preview)
  - See unit and total price estimates, then request a quote
- Footer: small footer with copyright.

---

## Tests — what we added

We added component test files for:
- Navbar rendering & menu behavior (src/components/__tests__/Navbar.test.jsx)
- Home page hero & CTAs (src/pages/__tests__/Home.test.jsx)
- ProductCard renders image and links (src/components/__tests__/ProductCard.test.jsx)
- CustomizationForm basic price calculation and form elements (src/components/__tests__/CustomizationForm.test.jsx)

Run with:
- npm run test

---

## Editing configuration for environments and visuals

- Tailwind config: tailwind.config.cjs — change theme colors, fonts and other Tailwind settings.
- Global styles: src/index.css — adjust global colors (the `--bg` and `--primary` CSS variables are defined here).
- Product data: src/config/products.json — add/edit product listings (recommended for non-technical editors).

---

## Helpful tips and next steps for the team

- To add product photography, store images under `src/assets/` and update the `image` and `images` fields in `src/config/products.json` to use relative imports (you may need to import them in src/utils/products.js).
- If you want an admin UI for adding products instead of editing JSON, we can scaffold a small admin panel and local persistence (file or mock server).
- For production CD/CI, add a basic GitHub Actions workflow that runs `npm run build` and `npm test`.

---

If you'd like, I can:
- Commit these test files and README to a branch and open a PR.
- Add a small admin UI to add products via the browser.
- Add server endpoints to accept quote requests (file uploads) and persist them to a database or email.
```