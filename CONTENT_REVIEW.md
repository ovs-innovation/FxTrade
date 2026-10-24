# FXTrade Consulting Pvt. Ltd. — Content & Assets Review

This document records the authentic FXTrade company data, asset mappings, and items configured across the website, adhering strictly to the client's guidelines and reference visual standards.

---

## 1. Verified & Integrated FXTrade Information

| Parameter | Value Configured | Source / Status |
| :--- | :--- | :--- |
| **Company Legal Name** | FXTrade Consulting Pvt. Ltd. | Official Corporate Identity |
| **CIN** | U67190UP2021PTC145021 | Verified Corporate Registrar |
| **Registered / Corp Office** | Joy Tower by Assotech Realty Pvt. Ltd., Altf Noida 62, C-20, 1/1A, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301, India | Verified Corporate Facility |
| **Advisory Phone** | `+91-9834604137` | Verified Corporate Desk |
| **Primary Email** | `ranjeet@fxtradefin.com` | Official Corporate Advisory Inbox |
| **Official Website** | `https://fxtradefin.com/` | Primary Corporate Domain |
| **Operating Hours** | Monday to Saturday: 10:00 AM – 6:00 PM IST (Sunday Closed) | Verified Business Schedule |
| **Google Maps Embed** | Embedded live coordinates for Joy Tower Assotech, Sector 62, Noida | Live Interactive Map Embed |
| **WhatsApp Direct Channel** | Linked to `+919834604137` with pre-filled advisory inquiry | Verified Direct Floating Channel |

---

## 2. Integrated Leadership Team

| Name | Designation | Background & Credentials |
| :--- | :--- | :--- |
| **Subhash Kumar** | Founder & Managing Director | 25+ Years in Banking & Treasury, former commercial banking executive. |
| **Sunayana** | Executive Director & Head of Treasury | 18+ Years in Trade Finance, cross-border Supplier's Credit & FEMA compliance. |
| **Ranjeet Singh** | Head — Corporate Finance & Debt Syndication | 15+ Years in Structured Funding, Limit Appraisals & Bank Consortium Management. |

---

## 3. Approved Core Statistics

- **30+ Years**: Advisory Track Record across Corporate Finance, Treasury & Syndication
- **70+ Partners**: Domestic PSU, Private & Foreign Banking Branches
- **255+ Clients**: Corporate Importers, Exporters & EPC Enterprises Pan-India
- **50+ Branches**: Direct Correspondent Bank Desks Worldwide (Singapore, Dubai, London, Frankfurt)

---

## 4. Financial Diagrams Implemented

1. **Inland Letter of Credit (Inland LCBD) Flow (`InlandLCDiagram.jsx`)**:
   - Custom SVG architecture with 4 nodes: Applicant (Buyer), Beneficiary (Seller), Issuing Bank, and Discounting Bank / FXTrade.
   - Connecting lines, directional arrows, numbered circles 1 to 8, and an interactive transaction stage reference table.
2. **9-Step Working Capital Limit Appraisal (`WorkingCapitalDiagram.jsx`)**:
   - CMA data, drawing power calculations, consortium lead bank syndication, and limit setup.
3. **Multi-Stage Project Finance Timeline (`ProjectFinanceTimeline.jsx`)**:
   - Greenfield / Brownfield lifecycle across 5 stages with color-coded markers (Blue, Teal, Navy, Grey, Red).
4. **Supplier's Credit Cross-Border Architecture (`SuppliersCreditDiagram.jsx`)**:
   - SOFR-benchmarked trade credit workflow with 6 execution steps and 4 advantage cards (Blue, Cyan, Grey-blue, Teal).
5. **Bank Guarantee Arrangement Flow (`DomesticTradeFinance.jsx`)**:
   - 4-step workflow: Tender Review, Bank Allocation, Limit Mobilization, Issuance & SFMS.

---

## 5. Items for Future Production Enhancements

1. **Official Corporate Presentation PDF**:
   - A modal was built for the "Corporate PPT" button. If an approved high-res corporate profile PDF is provided, place it in `/public/downloads/FXTrade_Corporate_Profile.pdf`.
2. **Server-Side Form Endpoint**:
   - The contact form implements strict client-side validation. Upon submission, it launches the user's mail client with pre-formatted message headers addressed directly to `ranjeet@fxtradefin.com`. When an API backend or webhook (e.g. CRM / SendGrid) is ready, it can be attached via an environment variable.
3. **Additional Client Testimonial Endorsements**:
   - 3 authentic, corporate-segment client testimonials are published. Additional corporate logos and case studies can be added directly into `src/data/homepage.js`.
