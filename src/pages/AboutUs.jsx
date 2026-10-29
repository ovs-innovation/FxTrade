import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import { companyData } from '../data/company';

export const AboutUs = () => {
  const { aboutPage } = companyData;

  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: 'About Us', path: null }]}
      />

      <div className="about-page-wrapper">
        <div className="container">

          {/* Section 1: About the Company */}
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 className="service-main-heading">{aboutPage.overviewHeading}</h2>
              <div className="service-heading-underline" />
              <p>{aboutPage.overviewText1}</p>
              <p>{aboutPage.overviewText2}</p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact-us" className="btn btn-primary">
                  <span>Speak With Our Advisors</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="about-intro-media">
              {/* Placeholder for future client-provided corporate image */}
              {/* When new image arrives, replace with: <img src="/images/about/your-new-image.jpg" alt="About FXTrade" /> */}
              <div className="about-media-placeholder">
                <div className="placeholder-content">
                  <ImageIcon size={44} strokeWidth={1.5} className="placeholder-icon" />
                  <span>Corporate Image Space</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Strategic Pillars */}
          <div className="about-pillars-grid">
            {aboutPage.pillars.map((pillar) => (
              <div key={pillar.id} className="about-pillar-card">
                <span className="pillar-num">{pillar.id}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 2: Experience, Exposure and Expertise */}
          <div className="exposure-section-block">
            <h2 className="exposure-title">{aboutPage.exposure.heading}</h2>
            <div className="exposure-underline" />
            <p className="exposure-lead">{aboutPage.exposure.text}</p>

            <div className="exposure-points-list">
              {aboutPage.exposure.points.map((pt, idx) => (
                <div key={idx} className="exposure-point-item">
                  <CheckCircle2 size={18} className="exposure-point-icon" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Serving Business Goals */}
          <div className="serving-goals-grid">
            <div>
              <h2 className="service-main-heading">{aboutPage.servingGoals.heading}</h2>
              <div className="service-heading-underline" />
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                {aboutPage.servingGoals.text}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {aboutPage.servingGoals.checklist.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={18} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '30px' }}>
                <Link to="/services" className="btn btn-navy">
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/p3.jpeg"
                alt="FXTrade Serving Business Financial Goals"
                onError={(e) => { e.target.src = '/p5.jpeg'; }}
                style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;
