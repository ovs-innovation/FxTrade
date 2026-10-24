import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceLayout from '../components/services/ServiceLayout';
import SuppliersCreditDiagram from '../components/services/SuppliersCreditDiagram';
import { servicesData } from '../data/services';

export const InternationalTradeFinance = () => {
  const { internationalTrade } = servicesData;

  return (
    <ServiceLayout
      title="International Trade Finance"
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'International Trade Finance', path: null }
      ]}
    >
      {/* 14.1 Overview */}
      <section id="overview" className="service-section-block">
        <h2 className="service-main-heading">{internationalTrade.overview.heading}</h2>
        <div className="service-heading-underline" />
        {internationalTrade.overview.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}
      </section>

      {/* 14.2 Supplier's Credit */}
      <section id="suppliers-credit" className="service-section-block">
        <h2 className="service-main-heading">{internationalTrade.suppliersCredit.heading}</h2>
        <div className="service-heading-underline" />
        {internationalTrade.suppliersCredit.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {internationalTrade.suppliersCredit.benefits.map((b, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* Process Flow & 4-Colored Advantage Cards Component */}
        <SuppliersCreditDiagram />
      </section>

      {/* 14.3 SBLC-backed Buyer's Credit */}
      <section id="buyers-credit" className="service-section-block">
        <h2 className="service-main-heading">{internationalTrade.buyersCredit.heading}</h2>
        <div className="service-heading-underline" />
        {internationalTrade.buyersCredit.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="buyers-credit-steps-grid">
          {internationalTrade.buyersCredit.steps.map((st) => (
            <div key={st.step} className="buyers-credit-step-card">
              <span className="buyers-credit-step-num">
                {st.step}
              </span>
              <h5 className="buyers-credit-step-title">{st.title}</h5>
              <p className="buyers-credit-step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 14.4 Global Trade Benefits */}
      <section id="trade-benefits" className="service-section-block">
        <h2 className="service-main-heading">WHY CHOOSE FXTRADE FOR CROSS-BORDER FUNDING</h2>
        <div className="service-heading-underline" />
        <div className="itf-benefits-grid">
          <div className="itf-benefit-card border-red">
            <h4 className="itf-benefit-title">
              Substantial Interest Arbitrage
            </h4>
            <p className="itf-benefit-desc">
              Borrowing in foreign currency against Term SOFR benchmark yields an effective financing cost dramatically lower than Indian domestic working capital lending rates (9.5% - 12%).
            </p>
          </div>
          <div className="itf-benefit-card border-blue">
            <h4 className="itf-benefit-title">
              Global Correspondent Reach
            </h4>
            <p className="itf-benefit-desc">
              Our direct presence and correspondent desks in Singapore, Dubai, London, and Frankfurt guarantee immediate credit lines from top-tier international lending institutions.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center', background: 'var(--blue-subtle)', padding: '24px', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--primary-navy)', fontSize: '16px', marginBottom: '8px', fontWeight: 700 }}>
            Importing Raw Materials or Heavy Machinery?
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Allow our international trade desk to structure a low-cost Supplier's Credit facility.
          </p>
          <Link to="/contact-us" className="btn btn-primary">
            <span>Inquire for Overseas Quote</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default InternationalTradeFinance;
