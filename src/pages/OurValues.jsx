import React from 'react';
import {
  ShieldCheck,
  Users,
  Zap,
  Handshake,
  Lightbulb,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import { companyData } from '../data/company';

const valueIconMap = {
  ShieldCheck: ShieldCheck,
  Users: Users,
  Zap: Zap,
  Handshake: Handshake,
  Lightbulb: Lightbulb,
  TrendingUp: TrendingUp
};

export const OurValues = () => {
  const { values } = companyData;

  return (
    <>
      <PageBanner
        title="Our Values"
        breadcrumbs={[
          { label: 'About Us', path: '/about-us' },
          { label: 'Our Values', path: null }
        ]}
      />

      <div className="values-page-wrapper">
        <div className="container">
          
          {/* Introductory Section */}
          <div className="values-intro-section">
            <div>
              <h2 className="service-main-heading">OUR FOUNDATIONAL PRINCIPLES</h2>
              <div className="service-heading-underline" />
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                At FXTrade Consulting Pvt. Ltd., our core values govern every financial structure we design, every banking relationship we nurture, and every client interaction we undertake. They are not abstract ideals; they are operating tenets that protect client capital and guarantee long-term corporate prosperity.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                In institutional finance, trust is forged through unwavering transparency, intellectual rigor, and consistent transaction delivery. These six pillars define our commitment to Indian enterprise.
              </p>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/images/about/hero-indian-deal-handshake.jpg"
                alt="FXTrade Corporate Values and Trust"
                onError={(e) => { e.target.src = '/images/about/about-hero-team-meeting.jpg'; }}
                style={{ width: '100%', height: '340px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* 6 Colored Values Cards in Diverse Blue Shades */}
          <div className="values-cards-grid">
            {values.map((val) => {
              const IconComp = valueIconMap[val.icon] || ShieldCheck;

              return (
                <div key={val.id} className={`values-card ${val.colorClass}`}>
                  <div className="values-card-icon">
                    <IconComp size={24} />
                  </div>
                  <h3 className="values-card-title">{val.title}</h3>
                  <span className="values-card-subtitle">{val.subtitle}</span>
                  <p className="values-card-desc">{val.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default OurValues;
