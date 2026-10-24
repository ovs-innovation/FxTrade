import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceLayout from '../components/services/ServiceLayout';
import { servicesData } from '../data/services';

export const OtherServices = () => {
  const { otherServices } = servicesData;

  return (
    <ServiceLayout
      title="Corporate Finance & Allied Services"
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Corporate Finance & Allied', path: null }
      ]}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2 className="service-main-heading">{otherServices.title}</h2>
        <div className="service-heading-underline" />
        <p className="service-text">
          {otherServices.subtitle}. FXTrade Consulting delivers specialized solutions bridging immediate cash flow gaps, monetizing government export scrips, enhancing corporate credit scores, and hedging currency exposures.
        </p>
      </div>

      {otherServices.servicesList.map((srv) => (
        <section key={srv.id} id={srv.id} className="service-section-block">
          <h3 className="service-main-heading">{srv.title}</h3>
          <div className="service-heading-underline" />
          <p className="service-text">{srv.desc}</p>

          <div className="service-feature-checklist">
            {srv.points.map((pt, idx) => (
              <div key={idx} className="checklist-item">
                <CheckCircle2 size={18} className="checklist-icon" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div style={{ marginTop: '20px', textAlign: 'center', background: 'var(--blue-subtle)', padding: '24px', borderRadius: '8px' }}>
        <h4 style={{ color: 'var(--primary-navy)', fontSize: '16px', marginBottom: '8px', fontWeight: 700 }}>
          Need Immediate Liquidity or Credit Limit Advisory?
        </h4>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Connect with our corporate finance specialists to receive tailored solutions within 24 hours.
        </p>
        <Link to="/contact-us" className="btn btn-primary">
          <span>Connect With Advisory Team</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </ServiceLayout>
  );
};

export default OtherServices;
