import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { homepageData } from '../../data/homepage';

export const Clients = () => {
  return (
    <section className="clients-section" aria-label="Our Clients & Portfolio Sectors">
      <div className="container">
        <SectionHeading
          title="Our Corporate Client Base"
          subtitle="Partnering with leading infrastructure developers, manufacturing giants, and export houses across India."
        />

        <div className="clients-grid">
          {homepageData.clientSectors.map((sector, idx) => (
            <div key={idx} className="client-box">
              <h4 className="client-sector-title">{sector.name}</h4>
              <span className="client-sector-count">{sector.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
