import React from 'react';
import { companyData } from '../../data/company';

export const Statistics = () => {
  return (
    <section className="statistics-section" aria-label="Key Performance Statistics">
      <div className="statistics-overlay" />
      <div className="container">
        <div className="stats-grid">
          {companyData.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                {stat.value}
              </div>
              <div className="stat-title">
                {stat.label ? `${stat.label} ${stat.title}` : stat.title}
              </div>
              <div className="stat-description">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
