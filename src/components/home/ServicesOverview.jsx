import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { homepageData } from '../../data/homepage';

export const ServicesOverview = () => {
  return (
    <section className="services-overview-section" aria-label="Our Services">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="Specialized corporate finance, syndicated credit facilities, and trade liquidity solutions engineered for ambitious mid-corporates and enterprises."
        />

        <div className="services-grid-2col">
          {homepageData.serviceCards.map((card) => (
            <div key={card.id} className="service-overview-card">
              
              {/* Rectangular Image on Left */}
              <div className="service-card-media">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="eager"
                  onError={(e) => { e.target.src = '/images/about/debt-consortium.jpg'; }}
                />
              </div>

              {/* Text & Button on Right */}
              <div className="service-card-body">
                <div>
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-desc">{card.description}</p>

                  <ul className="service-features-list">
                    {card.features.map((feat, idx) => (
                      <li key={idx} className="service-feature-item">
                        <span className="service-feature-bullet" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link to={card.link} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
