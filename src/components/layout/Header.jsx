import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, FileText } from 'lucide-react';
import { navigationData } from '../../data/navigation';
import CorporateProfileModal from '../shared/CorporateProfileModal';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (id) => {
    setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
  };

  const isActiveLink = (path, dropdown) => {
    if (location.pathname === path) return true;
    if (dropdown && dropdown.some(item => location.pathname === item.path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`site-header ${
          isHomePage ? 'home-variant' : 'inner-variant'
        } ${isScrolled ? 'is-scrolled' : ''}`}
      >
        <div className={isHomePage ? 'container' : 'container'}>
          <div className={isHomePage ? 'navbar-pill-wrapper' : 'navbar-inner-wrapper'}>
            
            {/* Brand Logo */}
            <Link to="/" className="nav-brand" aria-label="FXTrade Consulting Home">
              <img
                src={navigationData.logo.src}
                alt={navigationData.logo.alt}
                className="nav-brand-img"
                onError={(e) => {
                  e.target.src = navigationData.logo.fallbackSrc;
                }}
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="nav-menu-wrapper" aria-label="Main Navigation">
              <ul className="nav-menu">
                {navigationData.links.map((link) => {
                  const hasDropdown = link.dropdown && link.dropdown.length > 0;
                  const active = isActiveLink(link.path, link.dropdown);

                  return (
                    <li key={link.id} className="nav-item">
                      <Link
                        to={link.path}
                        className={`nav-link ${active ? 'active' : ''}`}
                      >
                        {link.label}
                        {hasDropdown && <ChevronDown size={16} strokeWidth={2} className="nav-caret" />}
                      </Link>

                      {/* Dropdown Panel */}
                      {hasDropdown && (
                        <div className="dropdown-panel">
                          {link.dropdown.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className={`dropdown-link ${
                                location.pathname === subItem.path ? 'is-active' : ''
                              }`}
                            >
                              <span>{subItem.label}</span>
                              {subItem.desc && (
                                <span className="dropdown-link-desc">{subItem.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Action Button: Corporate PPT */}
            <div className="nav-actions">
              <button
                type="button"
                className="btn-nav-ppt"
                onClick={() => setIsModalOpen(true)}
                title="View FXTrade Corporate Presentation"
              >
                <span>{navigationData.actionButton.label}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu size={26} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`} aria-label="Mobile Menu">
        <div className="mobile-drawer-header">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src={navigationData.logo.src}
              alt="FXTrade Logo"
              style={{ height: '38px' }}
              onError={(e) => { e.target.src = navigationData.logo.fallbackSrc; }}
            />
          </Link>
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navigationData.links.map((link) => {
            const hasDropdown = link.dropdown && link.dropdown.length > 0;
            const isExpanded = expandedMobileMenu === link.id;

            return (
              <li key={link.id} className="mobile-nav-item">
                <div className="mobile-nav-row">
                  <Link
                    to={link.path}
                    className="mobile-nav-link"
                    onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {hasDropdown && (
                    <button
                      className="mobile-dropdown-btn"
                      onClick={() => toggleMobileDropdown(link.id)}
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>
                  )}
                </div>

                {hasDropdown && isExpanded && (
                  <ul className="mobile-dropdown-list">
                    {link.dropdown.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.path}
                          className={`mobile-subnav-link ${
                            location.pathname === sub.path ? 'active' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div style={{ padding: '20px', marginTop: 'auto' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
          >
            <FileText size={16} />
            {navigationData.actionButton.label}
          </button>
        </div>
      </aside>

      {/* Corporate Profile PPT Modal */}
      <CorporateProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
