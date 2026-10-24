import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { navigationData } from '../../data/navigation';
import { companyData } from '../../data/company';
import { contactData } from '../../data/contact';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Logo, Company Brief & Social Links */}
          <div className="footer-col footer-col-about">
            <Link to="/" className="footer-logo-link" aria-label="FXTrade Consulting Home">
              <img
                src={navigationData.logo.src}
                alt="FXTrade Consulting Pvt. Ltd."
                className="footer-logo-img"
                onError={(e) => { e.target.src = navigationData.logo.fallbackSrc; }}
              />
            </Link>
            <p className="footer-about-text">
              FXTrade was founded in the year 2017, driven by the aspiration to create a hub of Finance professionals in the space of Corporate Finance. The main objective is to provide prompt, professional and committed Fund Raising services by way of varied short term and long-term financial products at an optimal cost and terms.
            </p>

            {/* Social Media Links Matching Reference Image */}
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/company/fx-trade-consulting-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="FXTrade on LinkedIn"
                title="FXTrade Consulting on LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                className="footer-social-btn"
                aria-label="FXTrade on Facebook"
                title="FXTrade on Facebook"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="footer-social-btn"
                aria-label="FXTrade on Instagram"
                title="FXTrade on Instagram"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#youtube"
                className="footer-social-btn"
                aria-label="FXTrade on YouTube"
                title="FXTrade on YouTube"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="footer-social-btn"
                aria-label="FXTrade on X"
                title="FXTrade on X (Twitter)"
                onClick={(e) => e.preventDefault()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: The Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">The Company</h3>
            <div className="footer-title-underline" />
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/about-us">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Overview</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/leadership-team">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Leadership Team</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/our-values">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Our Values</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/life-at-fxtrade">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Life At FXTrade</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/join-us">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Current Openings</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact-us">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h3 className="footer-col-title">Services</h3>
            <div className="footer-title-underline" />
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/debt-syndication">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Debt Syndication</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/domestic-trade-finance">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Domestic Trade Finance</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/international-trade-finance">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>International Trade Finance</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/instant-funding">
                  <span className="footer-arrow-symbol">&rarr;</span>
                  <span>Instant Funding</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className="footer-col">
            <h3 className="footer-col-title">Address</h3>
            <div className="footer-title-underline" />
            
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon-red" />
              <span className="footer-contact-text">
                Joy Tower by Assotech Realty Pvt. Ltd., Altf Noida 62, Sector 62, Noida, Uttar Pradesh - 201301, India
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon-red" />
              <div className="footer-contact-text">
                <a href={`tel:${contactData.phones[0].tel}`} className="footer-contact-link">
                  {contactData.phones[0].display}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon-red" />
              <div className="footer-contact-text">
                <a href={`mailto:${contactData.emails[0].address}`} className="footer-contact-link">
                  {contactData.emails[0].address}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Full-Width Black Copyright Strip */}
      <div className="footer-bottom-strip">
        <div className="container">
          <div className="footer-bottom-row">
            <div className="footer-copyright-text">
              &copy; {currentYear} {companyData.name}. All rights reserved.
            </div>
            <div className="footer-dev-credit">
              Website Developed by <strong>Vastora Tech</strong> &bull; Banking & Financial Services
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
