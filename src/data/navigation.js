export const navigationData = {
  logo: {
    src: "/images/branding/fxtrade-consulting-logo-trans.png",
    alt: "FXTrade Consulting Pvt. Ltd. Logo",
    fallbackSrc: "/images/branding/logo.png"
  },
  actionButton: {
    label: "Corporate PPT",
    sublabel: "Company Profile",
    downloadName: "FXTrade_Corporate_Profile.pdf"
  },
  links: [
    {
      id: "home",
      label: "Home",
      path: "/"
    },
    {
      id: "about",
      label: "About Us",
      path: "/about-us",
      dropdown: [
        { label: "Overview", path: "/about-us", desc: "Our 9+ year track record, mission and banking exposure" },
        { label: "Leadership Team", path: "/leadership-team", desc: "Meet our managing directors and corporate finance architects" },
        { label: "Our Values", path: "/our-values", desc: "Core institutional pillars: integrity, agility, and client focus" }
      ]
    },
    {
      id: "services",
      label: "Services",
      path: "/services",
      dropdown: [
        { label: "Debt Syndication", path: "/debt-syndication", desc: "Consortium loans, working capital, project finance & term loans" },
        { label: "Domestic Trade Finance", path: "/domestic-trade-finance", desc: "Inland LC discounting, BG limits & vendor financing" },
        { label: "International Trade Finance", path: "/international-trade-finance", desc: "Supplier's credit, SBLC buyer's credit & foreign funding" },
        { label: "Instant Funding", path: "/instant-funding", desc: "Fast private funding ₹1 Cr - ₹100 Cr with 24-48 hr TAT" }
      ]
    },
    {
      id: "careers",
      label: "Join Us",
      path: "/join-us",
      dropdown: [
        { label: "Current Openings", path: "/join-us", desc: "Explore active roles in corporate finance & syndication" },
        { label: "Life at FXTrade", path: "/life-at-fxtrade", desc: "Our culture, professional growth, and vibrant workplace" }
      ]
    },
    {
      id: "contact",
      label: "Contact Us",
      path: "/contact-us"
    }
  ]
};
