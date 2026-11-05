import React from 'react';
import { X, FileText, Download, CheckCircle2, Phone, Mail } from 'lucide-react';
import { contactData } from '../../data/contact';
import { companyData } from '../../data/company';

export const CorporateProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={22} color="#28853b" />
            <h3 className="modal-title">Corporate Profile & Presentation</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src="/images/branding/fxtrade-consulting-logo-trans.png"
              alt="FXTrade Logo"
              style={{ height: '48px', margin: '0 auto 12px' }}
              onError={(e) => { e.target.src = '/images/branding/logo.png'; }}
            />
            <h4 style={{ color: 'var(--primary-navy)', fontSize: '17px', fontWeight: 700 }}>
              {companyData.name}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {companyData.tagline}
            </p>
          </div>

          <div style={{ background: 'var(--background-light)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
            <h5 style={{ fontSize: '13.5px', color: 'var(--primary-navy)', marginBottom: '8px', fontWeight: 700 }}>
              Institutional Capabilities Overview:
            </h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-red)" />
                9+ Years Advisory Track Record in Corporate & Trade Finance
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-red)" />
                Syndication Network with 70+ Domestic and Overseas Banks
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-red)" />
                Inland LC Discounting (LCBD) & Fast-Track Fund Release
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-red)" />
                Supplier's Credit benchmarked to SOFR with 50+ Overseas Branches
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/fxx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <Download size={16} />
              Open Official Corporate Deck (PDF)
            </a>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', color: 'var(--text-secondary)', padding: '8px 4px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} color="var(--primary-navy)" />
                {contactData.phones[0].display}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="var(--primary-navy)" />
                {contactData.emails[0].address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateProfileModal;
