import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceLayout from '../components/services/ServiceLayout';
import InlandLCDiagram from '../components/services/InlandLCDiagram';
import { servicesData } from '../data/services';

export const DomesticTradeFinance = () => {
  const { domesticTrade } = servicesData;

  return (
    <ServiceLayout
      title="Domestic Trade Finance"
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Domestic Trade Finance', path: null }
      ]}
    >
      {/* 13.1 Overview */}
      <section id="overview" className="service-section-block">
        <h2 className="service-main-heading">{domesticTrade.overview.heading}</h2>
        <div className="service-heading-underline" />
        {domesticTrade.overview.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}
      </section>

      {/* 13.2 Negotiation / Discounting of Inland Letter of Credit */}
      <section id="inland-lc" className="service-section-block">
        <h2 className="service-main-heading">{domesticTrade.inlandLC.heading}</h2>
        <div className="service-heading-underline" />
        {domesticTrade.inlandLC.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {domesticTrade.inlandLC.benefits.map((b, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 13.3 Financial Process Diagram (Bank-to-Bank SVG Flow) */}
      <section id="process-flow" className="service-section-block">
        <h2 className="service-main-heading">INLAND LC TRANSACTION FLOW & BANK SETTLEMENT</h2>
        <div className="service-heading-underline" />
        <p className="service-text">
          Our specialized Inland LC Discounting desk interfaces directly with discounting branches across 70+ banks, achieving instant verification and same-day fund release.
        </p>

        {/* Original Bank-to-Bank SVG Diagram */}
        <InlandLCDiagram />
      </section>

      {/* 13.4 Service Benefits */}
      <section id="benefits" className="service-section-block">
        <h2 className="service-main-heading">WORKING CAPITAL ACCELERATION BENEFITS</h2>
        <div className="service-heading-underline" />
        <div className="dtf-benefits-grid">
          <div className="dtf-benefit-card border-red">
            <h4 className="dtf-benefit-title">
              Off-Balance Sheet Advantage
            </h4>
            <p className="dtf-benefit-desc">
              Inland LC discounting relies on the credit standing of the buyer's issuing bank. Your company's primary working capital cash credit lines remain 100% free for core procurement.
            </p>
          </div>
          <div className="dtf-benefit-card border-blue">
            <h4 className="dtf-benefit-title">
              T+1 Accelerated Disbursal
            </h4>
            <p className="dtf-benefit-desc">
              Avoid 60-120 day debtor collection delays. Once compliant transport documentation and bills of exchange are verified, funds are credited within 24 to 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 13.5 Financing Against Bank Guarantee */}
      <section id="bank-guarantee" className="service-section-block">
        <h2 className="service-main-heading">{domesticTrade.bankGuarantee.heading}</h2>
        <div className="service-heading-underline" />
        {domesticTrade.bankGuarantee.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', margin: '24px 0 12px', textTransform: 'uppercase' }}>
          Bank Guarantee Categories Arranged:
        </h4>
        <div className="dtf-guarantees-grid">
          {domesticTrade.bankGuarantee.guaranteeTypes.map((bg, idx) => (
            <div key={idx} className="dtf-guarantee-card">
              <h5 className="dtf-guarantee-type">{bg.type}</h5>
              <p className="dtf-guarantee-desc">{bg.desc}</p>
            </div>
          ))}
        </div>

        {/* Curved / Step Horizontal Process Layout */}
        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '14px', textTransform: 'uppercase' }}>
          Bank Guarantee Arrangement Workflow:
        </h4>
        <div className="bg-curved-flow">
          {domesticTrade.bankGuarantee.processFlow.map((flow) => (
            <div key={flow.step} className="bg-step-card">
              <div className="bg-step-num">{flow.step}</div>
              <h5 className="bg-step-title">{flow.title}</h5>
              <p className="bg-step-desc">{flow.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center', background: 'var(--blue-subtle)', padding: '24px', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--primary-navy)', fontSize: '16px', marginBottom: '8px', fontWeight: 700 }}>
            Have an Inland LC Ready for Immediate Discounting?
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Send us the LC copy for an instantaneous, competitive discounting quote.
          </p>
          <Link to="/contact-us" className="btn btn-primary">
            <span>Request Instant LC Quote</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default DomesticTradeFinance;
