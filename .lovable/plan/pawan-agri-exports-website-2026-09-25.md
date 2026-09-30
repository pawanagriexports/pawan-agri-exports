# Pawan Agri Exports website

## Goal
Build a complete, responsive corporate export website for Pawan Agri Exports, using the catalogue as the source of truth and the NK Agro site as the structural reference—not copying NK Agro’s branding or content.

## Pages
- **Home:** Strong product-led opening, sourcing/export positioning, featured products, quality/process highlights, packaging support, and enquiry calls to action.
- **About:** Company story, sourcing model, international trade support, and partnership approach from the catalogue.
- **Products:** Searchable/filterable overview of all 10 catalogue products with origin and key uses.
- **Product details:** Dedicated shareable page for each product with catalogue imagery, description, industry uses, grades, and technical specifications.
- **Packaging:** Pack sizes, materials, private-label/OEM support, storage, and shelf-life details.
- **Contact:** Click-to-call, email, WhatsApp, address, and an enquiry form that opens a prefilled email so it works without storing submissions.

## Design
- Recreate the reference site’s polished agricultural-export feel and clear product navigation while using Pawan Agri’s own navy, vivid green, amber, and white identity.
- Use the catalogue’s product photography and logo artwork throughout; optimize extracted images for web delivery.
- Use an editorial display face with a clean, highly readable sans-serif body face.
- Add a responsive header, mobile menu, active navigation, subtle motion, accessible controls, and a consistent footer.

## Content and functionality
- Preserve the catalogue’s company details, product origins, uses, technical specifications, packaging sizes, and compliance wording.
- Add product search and category/origin filters on the products page.
- Add contextual “Request a quote” actions that carry the selected product into the enquiry form.
- Provide WhatsApp and email links using the catalogue contact details.
- Include unique search/social metadata for every page.

## Technical approach
- Build with the existing TanStack Start setup and separate routes for major sections.
- Create shared site navigation, footer, product data, and reusable product/detail components.
- Extract and optimize the catalogue’s embedded product images, then serve them through the project asset system.
- Keep the contact flow frontend-only; no account, database, or stored submissions are required.

## Verification
- Check the full navigation and enquiry flow on desktop and mobile.
- Confirm all catalogue products, images, specifications, telephone, WhatsApp, email, and address appear correctly.
- Verify there are no layout overlaps, broken links, console errors, or failed builds.