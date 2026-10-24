import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { homepageData } from '../../data/homepage';

export const WhyChooseUs = () => {
  const { whyChooseUs } = homepageData;

  return (
    <section className="why-choose-us-section" aria-label="Why Choose FXTrade Consulting">
      <div className="container">
        <div className="why-choose-grid">
          
          {/* Left Column: 4 Benefits */}
          <div className="why-choose-content">
            <SectionHeading
              title={whyChooseUs.heading}
              subtitle={whyChooseUs.description}
              align="left"
              variant="white"
            />

            <div className="why-choose-points">
              {whyChooseUs.benefits.map((benefit) => (
                <div key={benefit.id} className="why-point-row">
                  <div className="why-point-icon">
                    <ArrowUpRight size={18} />
                  </div>
                  <div>
                    <h3 className="why-point-title">{benefit.title}</h3>
                    <p className="why-point-desc">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Business Image */}
          <div className="why-choose-media">
            <img
              src={whyChooseUs.image}
              alt="FXTrade Corporate Consulting Advantage"
              loading="eager"
              onError={(e) => { e.target.src = '/images/about/real-corporate-consulting.jpg'; }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
