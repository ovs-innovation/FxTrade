import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Factory,
  Activity,
  Layers,
  ShieldAlert,
  Compass,
  Cpu,
  Globe
} from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { homepageData } from '../../data/homepage';

const iconMap = {
  Building2: Building2,
  Factory: Factory,
  Activity: Activity,
  Layers: Layers,
  ShieldAlert: ShieldAlert,
  Compass: Compass,
  Cpu: Cpu,
  Globe: Globe
};

export const Reachability = () => {
  const industries = homepageData.reachabilityIndustries;
  const [startIndex, setStartIndex] = useState(0);

  // We display 4 cards at a time on desktop
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, industries.length - itemsPerPage);

  const prevItem = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextItem = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Slice visible items
  const visibleIndustries = industries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="reachability-section" aria-label="Our Reachability Across Industries">
      <div className="container">
        <SectionHeading
          title="Our Reachability"
          subtitle="Delivering tailored debt syndication, trade finance limits, and institutional liquidity across critical economic sectors pan-India."
        />

        <div className="reachability-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={prevItem}
            aria-label="Previous industry cards"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards Track */}
          <div className="reachability-track">
            {visibleIndustries.map((item) => {
              const IconComponent = iconMap[item.icon] || Building2;

              return (
                <div key={item.id} className="reachability-card">
                  <span className="reachability-number">{item.number}</span>
                  
                  <div className="reachability-icon-wrap">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="reachability-card-title">{item.title}</h3>
                  <p className="reachability-card-desc">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={nextItem}
            aria-label="Next industry cards"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Indicator dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '35px' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              style={{
                width: idx === startIndex ? '24px' : '10px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: idx === startIndex ? 'var(--primary-red)' : 'var(--border-light)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reachability;
