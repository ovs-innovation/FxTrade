export const servicesData = {
  // Main service categories for navigation and overview
  categories: [
    {
      id: "debt-syndication",
      title: "Debt Syndication",
      slug: "debt-syndication",
      route: "/debt-syndication",
      shortDesc: "Comprehensive debt syndication, working capital limits, term loans, project finance, and balance sheet restructuring through 70+ bank branches.",
      image: "/images/about/debt-structuring.jpg",
      subservices: [
        { id: "overview", title: "Debt Syndication Overview", path: "/debt-syndication#overview" },
        { id: "working-capital", title: "Working Capital Finance", path: "/debt-syndication#working-capital" },
        { id: "project-finance", title: "Project Finance", path: "/debt-syndication#project-finance" },
        { id: "term-loan", title: "Term Loan", path: "/debt-syndication#term-loan" },
        { id: "annual-appraisal", title: "Annual Appraisal of Limits", path: "/debt-syndication#annual-appraisal" },
        { id: "mortgage-loan", title: "Mortgage Loan", path: "/debt-syndication#mortgage-loan" },
        { id: "rating-advisory", title: "Rating Advisory Service", path: "/debt-syndication#rating-advisory" }
      ]
    },
    {
      id: "domestic-trade-finance",
      title: "Domestic Trade Finance",
      slug: "domestic-trade-finance",
      route: "/domestic-trade-finance",
      shortDesc: "Accelerate domestic liquidity with Inland LC discounting, purchase order funding, invoice factoring, and Bank Guarantee (BG) limits.",
      image: "/images/about/domestic-lc.jpg",
      subservices: [
        { id: "overview", title: "Domestic Trade Finance Overview", path: "/domestic-trade-finance#overview" },
        { id: "inland-lc", title: "Negotiation / Discounting of Inland LC", path: "/domestic-trade-finance#inland-lc" },
        { id: "process-flow", title: "Inland LC Process Flow", path: "/domestic-trade-finance#process-flow" },
        { id: "benefits", title: "Working Capital Impact & Benefits", path: "/domestic-trade-finance#benefits" },
        { id: "bank-guarantee", title: "Financing Against Bank Guarantee", path: "/domestic-trade-finance#bank-guarantee" }
      ]
    },
    {
      id: "international-trade-finance",
      title: "International Trade Finance",
      slug: "international-trade-finance",
      route: "/international-trade-finance",
      shortDesc: "End-to-end cross-border solutions: Supplier's Credit, SBLC-backed Buyer's Credit, Export LC discounting, and global correspondent bank networks.",
      image: "/images/about/intl-cargo.jpg",
      subservices: [
        { id: "overview", title: "International Trade Overview", path: "/international-trade-finance#overview" },
        { id: "suppliers-credit", title: "Supplier's Credit", path: "/international-trade-finance#suppliers-credit" },
        { id: "buyers-credit", title: "SBLC-backed Buyer's Credit", path: "/international-trade-finance#buyers-credit" },
        { id: "trade-benefits", title: "Global Trade Benefits", path: "/international-trade-finance#trade-benefits" },
        { id: "advantages", title: "FXTrade Advantage Cards", path: "/international-trade-finance#advantages" }
      ]
    },
    {
      id: "instant-funding",
      title: "Instant Funding",
      slug: "instant-funding",
      route: "/instant-funding",
      shortDesc: "Fast, flexible & high-ticket funding solutions (₹1 Cr – ₹100 Cr) sanctioned within 24 hours PAN-India.",
      image: "/images/about/advisory-meeting.jpg",
      subservices: [
        { id: "overview", title: "Instant Funding Overview", path: "/instant-funding#overview" },
        { id: "parameters", title: "Facility Parameters (₹1 Cr - ₹100 Cr)", path: "/instant-funding#parameters" },
        { id: "why-instant-funding", title: "Why Choose Instant Funding", path: "/instant-funding#why-instant-funding" },
        { id: "eligibility", title: "Eligibility & Required Documents", path: "/instant-funding#eligibility" },
        { id: "process", title: "How The Process Works", path: "/instant-funding#process" },
        { id: "who-should-apply", title: "Who Should Apply", path: "/instant-funding#who-should-apply" }
      ]
    }
  ],

  // Detailed content for Debt Syndication
  debtSyndication: {
    title: "Debt Syndication",
    subtitle: "Strategic Debt Structuring, Consortium Financing & Capital Advisory",
    overview: {
      heading: "DEBT SYNDICATION OVERVIEW",
      paragraphs: [
        "Debt syndication is a specialized financial process wherein FXTrade Consulting structures and raises large-scale capital requirements by mobilizing a consortium of banking institutions, NBFCs, and financial entities. By orchestrating a single, synchronized credit facility, corporate borrowers obtain sizable funding with balanced risk distribution and optimized interest covenants.",
        "We handle the complete syndication lifecycle: from preliminary financial health checks, preparing institutional-grade Information Memorandums (IM), formulating financial models, to negotiating commercial terms, documentation, and final loan disbursement."
      ],
      highlights: [
        "Consortium syndication across 70+ domestic PSU, private, and foreign banks",
        "Optimized Weighted Average Cost of Capital (WACC) with lowest interest spreads",
        "Bespoke debt amortization schedules tailored to underlying corporate cash flows",
        "Assistance in restructuring covenants, escrow mechanisms, and collateral pooling"
      ]
    },
    workingCapital: {
      heading: "WORKING CAPITAL FINANCE",
      paragraphs: [
        "Working capital is the lifeline of any enterprise. FXTrade arranges comprehensive fund-based (Cash Credit, Overdraft, Working Capital Demand Loans) and non-fund-based (Letter of Credit, Bank Guarantee) facilities tailored to your operating cycle.",
        "We analyze drawing power, inventory holding periods, and debtor turnaround to secure maximum credit enhancement from banking consortia."
      ],
      // 9-step process diagram data
      steps: [
        { step: 1, title: "Initial Assessment", desc: "Review of balance sheet, CMA data, and operating cash cycles" },
        { step: 2, title: "Limit Structuring", desc: "Determining optimal Fund-Based & Non-Fund Based limit mix" },
        { step: 3, title: "Information Memorandum", desc: "Drafting detailed credit appraisal docket for banking syndicates" },
        { step: 4, title: "Consortium Outreach", desc: "Presenting proposals to lead banks and consortium member branches" },
        { step: 5, title: "Credit Sanction", desc: "Liaison with bank credit committees for sanctioned term sheets" },
        { step: 6, title: "Term Harmonization", desc: "Negotiating interest margins, collateral haircuts, and covenants" },
        { step: 7, title: "Documentation", desc: "Consortium loan agreements, personal/corporate guarantees, mortgages" },
        { step: 8, title: "Disbursement & Setup", desc: "Account activation, drawing power registration, and limit release" },
        { step: 9, title: "Ongoing Monitoring", desc: "Quarterly stock audits, DP review, and smooth annual limit renewals" }
      ]
    },
    projectFinance: {
      heading: "PROJECT FINANCE",
      paragraphs: [
        "Financing long-gestation greenfield and brownfield projects requires specialized cash flow modeling, debt-equity ratio structuring, and risk ring-fencing. We assist sponsors in securing long-term capital where debt service is primarily backed by project cash flows.",
        "Our expertise spans EPC contracting, manufacturing setups, logistics hubs, renewable energy, and commercial real estate."
      ],
      // Horizontal multi-stage timeline
      stages: [
        { stage: "Stage 01", title: "Feasibility & DPR", desc: "Detailed Project Report validation & technical viability study", color: "blue" },
        { stage: "Stage 02", title: "Financial Modeling", desc: "DSCR, IRR, sensitivity analysis & equity-debt ratio alignment", color: "teal" },
        { stage: "Stage 03", title: "Lender Syndication", desc: "Lead bank underwriting & consortium partner placement", color: "navy" },
        { stage: "Stage 04", title: "Security & Legal", desc: "Charge creation on assets, escrow setup & concession agreements", color: "grey" },
        { stage: "Stage 05", title: "Milestone Drawdowns", desc: "Phased capital release aligned with engineer certification", color: "red" }
      ]
    },
    termLoan: {
      heading: "TERM LOAN FACILITY",
      paragraphs: [
        "We assist mid-corporates and expanding businesses in securing Capex Term Loans for plant and machinery acquisition, factory expansion, and modernizing industrial equipment.",
        "With tenure options ranging from 3 to 10 years, we structure moratorium periods during installation to prevent cash flow strain prior to commercial operation."
      ],
      benefits: [
        "Repayment moratorium during project gestation & commissioning",
        "Competitive MCLR / Repo linked interest spreads",
        "Minimal collateral requirement via asset charge pooling",
        "Prepayment flexibility with transparent exit covenants"
      ]
    },
    annualAppraisal: {
      heading: "ANNUAL APPRAISAL OF LIMITS",
      paragraphs: [
        "Periodic review and enhancement of credit limits is essential for growing firms. FXTrade manages the full annual renewal process, preventing ad-hoc limit freezes or punitive interest penalties.",
        "We prepare updated CMA data, justify drawing power expansions based on higher turnover, and negotiate lower commission rates on bank guarantees and letters of credit."
      ],
      stages: [
        { phase: "Phase 1", name: "CMA Preparation", text: "Compiling past 3 years audited financials and next 2 years realistic projections" },
        { phase: "Phase 2", name: "Bank Interaction", text: "Direct discussions with bank relationship managers and risk underwriters" },
        { phase: "Phase 3", name: "Enhancement Approval", text: "Securing committee approval for higher limits and lower collateral" }
      ]
    },
    mortgageLoan: {
      heading: "MORTGAGE LOAN (LAP & LRD)",
      paragraphs: [
        "Unlock dormant equity trapped in commercial and industrial properties. We structure Loan Against Property (LAP) and Lease Rental Discounting (LRD) facilities with high loan-to-value (LTV) ratios and extended tenures of up to 15 years.",
        "LRD solutions discount future rental streams from AAA corporate tenants, providing instant multi-crore liquidity for business growth."
      ],
      points: [
        "High LTV financing up to 75% on commercial / industrial property",
        "Extended tenure up to 15 years for comfortable EMI outlays",
        "Lease Rental Discounting for office parks, warehouses, and retail assets",
        "Funds can be deployed for business expansion, debt consolidation, or capex"
      ]
    },
    ratingAdvisory: {
      heading: "CREDIT RATING ADVISORY SERVICE",
      paragraphs: [
        "A superior credit rating directly translates into hundreds of basis points saved on bank interest margins and wider access to institutional bond markets. FXTrade provides strategic rating advisory before approaching agencies like CRISIL, ICRA, CARE, and India Ratings.",
        "We conduct diagnostic balance sheet audits, address financial gearing concerns, and advise on optimal capital structures to achieve rating upgrades."
      ],
      deliverables: [
        "Gap analysis against credit agency scoring methodology",
        "Financial ratio re-alignment (Total Outside Liabilities / Net Worth, DSCR, Interest Coverage)",
        "Assistance during agency management meetings and credit committee presentations",
        "Measurable reduction in borrowing spreads post-upgrade"
      ]
    }
  },

  // Detailed content for Domestic Trade Finance
  domesticTrade: {
    title: "Domestic Trade Finance",
    subtitle: "Inland LC Discounting, Bank Guarantees & Working Capital Acceleration",
    overview: {
      heading: "DOMESTIC TRADE FINANCE OVERVIEW",
      paragraphs: [
        "Domestic trade finance encompasses the suite of financial instruments designed to lubricate domestic commerce, eliminate counterparty credit risk, and unlock working capital trapped in trade receivables. In India's fast-moving business landscape, timely liquidity between buyers and sellers is the defining factor for sustainable growth.",
        "FXTrade Consulting is recognized for its specialized capability in Inland Letter of Credit (Inland LCBD) discounting, Invoice Financing, and Bank Guarantee (BG) arrangement, enabling seamless business transactions across Indian states."
      ]
    },
    inlandLC: {
      heading: "NEGOTIATION / DISCOUNTING OF INLAND LETTER OF CREDIT",
      paragraphs: [
        "Inland LC Discounting (Inland LCBD) allows suppliers to receive immediate funds against irrevocable inland letters of credit opened by buyers, without waiting for the credit period (such as 60, 90, or 180 days) to expire.",
        "FXTrade leverages its consortium of 70+ bank branches to obtain the most competitive discounting quotes in the market. Since the discounting bank relies on the creditworthiness of the issuing bank, funds are released at ultra-competitive commercial paper rates without blocking the seller's working capital limits."
      ],
      benefits: [
        "Immediate cash flow within 24 to 48 hours of compliant document presentation",
        "Non-recourse or limited-recourse options shielding sellers from buyer defaults",
        "Discounting rates substantially lower than standard cash credit interest rates",
        "Zero strain on seller's existing bank limits since financing is backed by issuing bank"
      ]
    },
    // Original SVG bank-to-bank process diagram data
    processDiagram: {
      title: "INLAND LETTER OF CREDIT TRANSACTION FLOW",
      description: "Step-by-step transaction architecture between Buyer, Seller, Issuing Bank, and Discounting Bank",
      parties: [
        { id: "buyer", role: "Applicant (Buyer)", desc: "Initiates purchase contract and applies for LC issuance at its bank", pos: "top-left" },
        { id: "issuingBank", role: "Issuing Bank", desc: "Issues Irrevocable Inland LC on behalf of the buyer", pos: "top-right" },
        { id: "discountingBank", role: "Discounting Bank / FXTrade", desc: "Verifies documents, discounts bill, and disburses early liquidity", pos: "bottom-right" },
        { id: "seller", role: "Beneficiary (Seller)", desc: "Ships goods, submits compliant documents, and receives immediate funds", pos: "bottom-left" }
      ],
      stages: [
        { num: 1, from: "Applicant (Buyer)", to: "Beneficiary (Seller)", label: "Commercial Sales Agreement & Purchase Order agreed" },
        { num: 2, from: "Applicant (Buyer)", to: "Issuing Bank", label: "Buyer requests Inland LC issuance within sanctioned limits" },
        { num: 3, from: "Issuing Bank", to: "Discounting Bank / FXTrade", label: "LC transmitted electronically with structured terms" },
        { num: 4, from: "Beneficiary (Seller)", to: "Applicant (Buyer)", label: "Goods dispatched via certified transport / logistics" },
        { num: 5, from: "Beneficiary (Seller)", to: "Discounting Bank / FXTrade", label: "Compliant invoices, lorry receipts (LR), and bills presented" },
        { num: 6, from: "Discounting Bank / FXTrade", to: "Beneficiary (Seller)", label: "Immediate payment disbursed at discounted market rate (T+1)" },
        { num: 7, from: "Discounting Bank / FXTrade", to: "Issuing Bank", label: "Original documents sent to Issuing Bank for acceptance" },
        { num: 8, from: "Issuing Bank", to: "Discounting Bank", label: "Maturity reimbursement settlement paid on due date" }
      ]
    },
    bankGuarantee: {
      heading: "FINANCING AGAINST ISSUANCE OF BANK GUARANTEE",
      paragraphs: [
        "EPC contractors, infrastructure developers, and large vendors regularly require Non-Fund Based (NFB) Bank Guarantees—including Performance Guarantees, Advance Payment Guarantees, and Financial Guarantees—to bid and execute major government and private tenders.",
        "FXTrade specializes in syndicating standalone Bank Guarantee facilities with minimized cash margin (down to 5-10%) and reduced collateral requirements, freeing contractor capital for active site execution."
      ],
      guaranteeTypes: [
        { type: "Performance Bank Guarantee (PBG)", desc: "Assures tender authorities that contractual deliverables will be fulfilled" },
        { type: "Advance Payment Guarantee (APG)", desc: "Secures mobilization advances released by project principals to contractors" },
        { type: "Financial Bank Guarantee", desc: "Guarantees financial obligations under judicial, tax, or statutory arrangements" },
        { type: "Bid Bond / EMD Guarantee", desc: "Satisfies earnest money deposit norms during high-value public procurement" }
      ],
      processFlow: [
        { step: 1, title: "Tender Review", desc: "Assessment of contract terms, BG format, and required tenure" },
        { step: 2, title: "Bank Allocation", desc: "Selecting lenders offering minimal margin money and quick issuance" },
        { step: 3, title: "Limit Mobilization", desc: "Sanctioning standalone or consortium NFB limits with low fees" },
        { step: 4, title: "Issuance & SFMS", desc: "Swift generation via SFMS directly to the beneficiary's bank" }
      ]
    }
  },

  // Detailed content for International Trade Finance
  internationalTrade: {
    title: "International Trade Finance",
    subtitle: "Supplier's Credit, SBLC-Backed Buyer's Credit & Cross-Border Advisory",
    overview: {
      heading: "INTERNATIONAL TRADE FINANCE OVERVIEW",
      paragraphs: [
        "International trade brings unique challenges: cross-border currency volatility, differing legal jurisdictions, overseas supplier risk, and high foreign financing costs. FXTrade Consulting provides structured trade finance bridges connecting Indian corporate importers and exporters with top overseas financial centers including Singapore, Dubai, London, and Frankfurt.",
        "Through our extensive correspondent bank network of over 50 overseas branches, we arrange foreign currency trade credit at razor-thin SOFR-linked interest margins, significantly reducing the cost of imported raw materials and capital machinery."
      ]
    },
    suppliersCredit: {
      heading: "SUPPLIER'S CREDIT (FOREIGN CURRENCY FINANCING)",
      paragraphs: [
        "Supplier's Credit is an arrangement where an overseas supplier agrees to extend deferred payment terms (typically 90 to 360 days) to an Indian importer, backed by an Indian bank's Letter of Credit (LC) or Letter of Comfort, while an overseas funding bank finances the transaction upfront.",
        "The overseas supplier receives payment immediately upon shipment, while the Indian importer pays only at maturity, enjoying low foreign currency interest rates that are substantially cheaper than domestic Indian rupee working capital loans."
      ],
      benefits: [
        "Ultra-low interest costs benchmarked to Term SOFR + tight credit margin",
        "Preserves domestic working capital lines for active local operations",
        "Enhances commercial bargaining power with foreign suppliers through spot payment",
        "Repayment tenure aligned with the production and sale of finished goods"
      ],
      // Process diagram data
      diagramSteps: [
        { num: "01", actor: "Indian Importer", action: "Signs import contract with overseas exporter with 90-360 days credit term" },
        { num: "02", actor: "Indian Importer's Bank", action: "Issues Usance Letter of Credit (LC) / Standby LC in favor of overseas seller" },
        { num: "03", actor: "Overseas Supplier", action: "Ships machinery/raw materials and submits shipping documents (BL, Invoice)" },
        { num: "04", actor: "Overseas Funding Bank", action: "Arranged by FXTrade to discount docs and pay supplier on day one" },
        { num: "05", actor: "FXTrade Syndication", action: "Negotiates competitive overseas quote & oversees swift settlement" },
        { num: "06", actor: "Maturity Settlement", action: "Importer pays the funding bank at maturity via Indian bank LOU/SFMS" }
      ]
    },
    buyersCredit: {
      heading: "SBLC-BACKED BUYER'S CREDIT",
      paragraphs: [
        "Under the SBLC (Standby Letter of Credit) structure, an overseas lender extends buyer's credit to the Indian importer directly, against the security of an SBLC issued by the importer's Indian bank.",
        "FXTrade arranges the overseas funding leg through its correspondent bank relationships, structuring the loan in USD, EUR, or GBP with seamless compliance with RBI Trade Credit Master Directions."
      ],
      steps: [
        { step: 1, title: "Import Contract", desc: "Commercial agreement specifying SBLC payment structure" },
        { step: 2, title: "SBLC Issuance", desc: "Indian bank issues SBLC via SWIFT MT760 to overseas funding bank" },
        { step: 3, title: "Direct Funding", desc: "Overseas bank disburses foreign currency directly to the seller's bank" },
        { step: 4, title: "Maturity Payoff", desc: "Importer reimburses foreign bank on due date including SOFR interest" }
      ]
    },
    advantageCards: [
      {
        id: "blue",
        title: "50+ Overseas Bank Branches",
        colorClass: "card-blue",
        desc: "Direct access to treasury desks across Singapore, UAE, UK, and European banking hubs ensures instant funding quotes."
      },
      {
        id: "cyan",
        title: "SOFR-Linked Pricing",
        colorClass: "card-cyan",
        desc: "Transparent benchmark margins that slash effective borrowing costs compared to high domestic rupee interest."
      },
      {
        id: "grey",
        title: "Strict RBI & FEMA Compliance",
        colorClass: "card-grey",
        desc: "Comprehensive advisory on permissible trade credit tenures, capital goods ceilings, and reporting norms."
      },
      {
        id: "teal",
        title: "End-to-End SWIFT Tracking",
        colorClass: "card-teal",
        desc: "Active tracking of MT700, MT760, and MT103 messages ensuring no delays in supplier release and cargo clearance."
      }
    ]
  },

  // Detailed content for Corporate Finance & Other Services
  otherServices: {
    title: "Corporate Finance & Allied Advisory",
    subtitle: "Supply Chain Finance, Instant Funding, MEIS/SEIS Trading & Treasury Consulting",
    servicesList: [
      {
        id: "scf",
        title: "Supply Chain Finance (SCF) & Invoice Factoring",
        desc: "Optimize liquidity across your vendor and dealer networks. We set up structured Vendor Financing (Reverse Factoring) and Dealer Financing programs that allow suppliers to receive early payment on approved invoices, while buyers maintain extended payment terms.",
        points: ["Early payment to vendors at competitive bank rates", "Off-balance-sheet factoring options where permitted", "Digital onboarding and automated invoice discounting"]
      },
      {
        id: "instant-funding",
        title: "Instant Funding (24–48 Hour Disbursals)",
        desc: "When urgent corporate liquidity is required to seize high-margin business opportunities or meet sudden cash flow gaps, FXTrade arranges high-velocity bridge facilities against verified trade invoices, confirmed work orders, and government receivables.",
        points: ["Rapid underwriting with minimum bureaucratic paperwork", "Disbursal within 24 to 48 hours directly into business escrow", "Ideal for bridging working capital till long-term limits are sanctioned"]
      },
      {
        id: "credit-rating",
        title: "Credit Rating Enhancement & NFB Limits",
        desc: "We specialize in structuring balance sheets to upgrade credit ratings from BBB to A/AA brackets. We also arrange Non-Fund Based (NFB) limits including Bank Guarantees, Letters of Credit, and statutory bonds without heavy cash margins.",
        points: ["Diagnostic analysis of financial ratios and rating methodology", "Significant savings in bank interest margins post-rating upgrade", "Substantial enhancement in bidding capacity for EPC contractors"]
      },
      {
        id: "meis-seis",
        title: "MEIS / SEIS Licence Trading",
        desc: "Monetize and transfer export incentive scrips under Government of India schemes (MEIS / SEIS / RoDTEP / RoSCTL). We assist exporters in selling surplus duty credits at the most favorable market rates, and enable importers to offset customs duty with considerable savings.",
        points: ["Immediate liquidity for exporters holding duty credit scrips", "Duty savings for importers through discounted scrip purchase", "100% compliant transfer via DGFT and ICEGATE online portals"]
      },
      {
        id: "forex-consulting",
        title: "Forex & Treasury Consulting (FTPO)",
        desc: "Comprehensive foreign exchange risk management and Forex Transaction Process Outsourcing (FTPO). We assist CFOs in designing FX hedging policies, monitoring currency exposures, and negotiating competitive FX conversion spreads with bank dealing rooms.",
        points: ["Formulation of tailored Corporate FX Risk Management Policy", "Live rate checks and dealing room margin benchmark audits", "Structured options, forwards, and currency swap advisory"]
      }
    ]
  },

  // Detailed content for Instant Funding (Replicating Chandra Credit reference layout)
  instantFunding: {
    hero: {
      badge: "Fast, Flexible & High Ticket Funding",
      title: "Best Instant Funding Provider Firm In India",
      subtitle: "Instant Funding Solutions for Growing Enterprises Across India",
      ticketSize: "₹1 Cr – ₹100 Cr",
      turnaround: "TAT: 24 – 48 Hours",
      panIndia: "PAN-India Coverage"
    },
    overview: {
      heading: "FXTrade Consulting - The Premier Instant Funding & Debt Partner in India",
      paragraphs: [
        "At FXTrade Consulting, we understand that businesses frequently encounter critical inflection points where immediate capital is indispensable to seize time-sensitive market opportunities, bridge working capital cycles, purchase bulk inventory at high discounts, or fuel rapid operational expansion. Our Instant Funding Services are engineered to deliver fast, flexible, reliable, and high-ticket financial liquidity with minimal waiting time and maximum convenience.",
        "Unlike conventional banking channels that take months for multi-stage appraisal and bureaucratic documentation, our specialized debt and bridge funding solutions operate on high-velocity credit evaluation. We partner with established corporate lenders, institutional debt funds, family offices, and NBFC consortiums to ensure prompt sanction directly into your company's bank account."
      ],
      contactBanner: {
        title: "Ready To Grow? Discover The Benefits Of Instant Funding For Your Business!",
        buttonText: "Contact Us Now",
        link: "/contact-us"
      }
    },
    servicesOffered: [
      {
        id: "trade-finance",
        title: "Trade Finance",
        desc: "Letter of Credit, Bank Guarantee, SBLC, and Export/Import structured facilities.",
        icon: "Ship"
      },
      {
        id: "project-finance",
        title: "Project Finance",
        desc: "Financing large infrastructure, hotels, manufacturing, healthcare, and education capex.",
        icon: "Building2"
      },
      {
        id: "equity-debt",
        title: "Equity & Structured Debt",
        desc: "Arranging structured equity and bridge debt through active investors across India.",
        icon: "Coins"
      },
      {
        id: "business-advisory",
        title: "Business Advisory",
        desc: "Expert consulting before seeking investments or debt to optimize financial balance sheets.",
        icon: "Briefcase"
      }
    ],
    achievements: [
      { number: "1200+", label: "Finishing Projects & Deals" },
      { number: "195+", label: "Institutional Lenders" },
      { number: "850+", label: "Happy Corporate Clients" },
      { number: "9+", label: "Years Experience" }
    ],
    parameters: {
      title: "Get Instant Funding Services by FXTrade Consulting",
      subtitle: "Fast, Flexible & High Ticket Funding Solutions for Businesses Across India",
      cards: [
        { label: "Ticket Size", value: "₹1 Cr – ₹100 Cr", desc: "Catering to MSMEs, corporates, traders, and high-growth contractors" },
        { label: "Tenure", value: "4 – 6 Months", desc: "Short-term bridge tenure ideal for working capital without debt burdens" },
        { label: "Time Duration (TAT)", value: "24 Hrs – 48 Hrs", desc: "Fast-track assessment and sanction turnaround within 24 to 48 hours" }
      ]
    },
    whyChoose: [
      {
        num: "1",
        title: "Ultra-Fast Processing (TAT: 24 - 48 Hours)",
        desc: "We specialize in super-fast approvals, ensuring your funds are sanctioned within 24 to 48 hours, subject to document verification."
      },
      {
        num: "2",
        title: "High Ticket Funding for Growing Businesses",
        desc: "With a funding range of ₹1 crore to ₹100 crore, we cater to MSMEs, corporates, traders, and businesses seeking immediate capital for medium-term business needs."
      },
      {
        num: "3",
        title: "PAN-India Fast-Track Access",
        desc: "We provide seamless access across India, connecting your business with established lenders and institutional liquidity."
      },
      {
        num: "4",
        title: "Short-Term Tenure with Flexible Usage",
        desc: "Our 4–6 month tenure is ideal for short-term capital requirements without long-term repayment burdens."
      },
      {
        num: "5",
        title: "Available for All Business Sectors",
        desc: "Whether you're in manufacturing, trading, logistics, EPC, import-export, or services—we support all sectors with quick funding solutions."
      }
    ],
    eligibility: [
      { title: "Registered Business Entity in India", desc: "Pvt Ltd, Public Ltd, LLP, or registered Partnership firm." },
      { title: "Minimum Turnover Criteria", desc: "Financial track record aligned with the requested bridge funding amount." },
      { title: "12 Months Bank Statements", desc: "For assessing cash flow consistency and banking operational health." },
      { title: "GST Returns (4–6 Months)", desc: "Recent GST-3B / GSTR-1 filings to verify ongoing active business." },
      { title: "Audited & Provisional Financials", desc: "Audited balance sheet for FY 2023-24 & provisional FY 2024-25." },
      { title: "Company & Promoter KYC", desc: "PAN, Aadhaar, Certificate of Incorporation, and compliance docs." },
      { title: "Loan / OD Statements (If any)", desc: "To review existing liabilities and regular debt servicing track record." }
    ],
    processSteps: [
      {
        step: "Step 1",
        title: "Share Required Documents",
        desc: "Submit the necessary preliminary documents for rapid credit review."
      },
      {
        step: "Step 2",
        title: "Quick Assessment & Sanction",
        desc: "Our credit team evaluates your file and provides sanction within 24 hours."
      },
      {
        step: "Step 3",
        title: "Fund Release",
        desc: "Approved funds are credited directly to your company account PAN-India."
      },
      {
        step: "Step 4",
        title: "Utilize Funds for Growth",
        desc: "Use the capital for working capital, expansion, inventory purchase, or business opportunities."
      }
    ],
    whoShouldApply: [
      { title: "MSMEs & Corporates", desc: "Entities looking for quick working capital expansion without collateral lockup." },
      { title: "Import-Export Businesses", desc: "Exporters & importers fulfilling time-sensitive international shipments." },
      { title: "Traders & Manufacturers", desc: "Wholesalers and factories purchasing raw materials with cash discounts." },
      { title: "Logistics, EPC & Infrastructure", desc: "Contractors executing state/central project milestones and mobilization." },
      { title: "Urgent Working Capital Needs", desc: "Firms needing urgent short-term liquidity to manage operational cash flow." },
      { title: "Bridge Funding Seekers", desc: "Businesses exploring fast-track lending over traditional banking delays." }
    ],
    trustReasons: [
      "Over 9+ years of premier corporate and structured finance advisory expertise",
      "Robust network of trusted institutional lenders, family offices & capital partners",
      "Transparent process with no hidden deductions or conditions",
      "Fastest turnaround time in the industry (TAT: 24 to 48 hours)",
      "Relationship-first approach tailored to your enterprise's cash flow"
    ]
  }
};
