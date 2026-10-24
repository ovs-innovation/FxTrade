import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { homepageData } from '../../data/homepage';

export const WhatWeDo = () => {
  const { whatWeDo } = homepageData;

  return (
    <section className="what-we-do-section" aria-label="What We Do">
      <div className="container">
        <div className="what-we-do-card">
          <SectionHeading
            title={whatWeDo.heading}
            subtitle={whatWeDo.subheading}
          />

          <p className="what-we-do-text">
            {whatWeDo.description}
          </p>

          <div className="what-we-do-img-wrapper">
            <img
              src={whatWeDo.image}
              alt="FXTrade Corporate Consulting Advisory Meeting"
              className="what-we-do-img"
              loading="eager"
            />
          </div>

          <div>
            <Link to={whatWeDo.ctaLink} className="btn btn-primary">
              <span>{whatWeDo.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
