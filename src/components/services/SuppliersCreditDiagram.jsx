import React from 'react';
import { servicesData } from '../../data/services';

export const SuppliersCreditDiagram = () => {
  const steps = servicesData.internationalTrade.suppliersCredit.diagramSteps;
  const cards = servicesData.internationalTrade.advantageCards;

  return (
    <div style={{ margin: '30px 0' }} aria-label="International Supplier Credit Flow & Advantages">
      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '14px', textTransform: 'uppercase' }}>
        Cross-Border Supplier's Credit Architecture (SOFR-Linked)
      </h4>

      {/* 6-Step Table / Flow */}
      <div className="process-table-box">
        <div className="process-table-row" style={{ background: 'var(--primary-navy)', color: 'var(--white)', fontWeight: 700 }}>
          <span>Step</span>
          <span>Key Actor</span>
          <span>Execution Action</span>
        </div>
        {steps.map((st) => (
          <div key={st.num} className="process-table-row">
            <span className="process-table-num">Step {st.num}</span>
            <span className="process-table-actor">{st.actor}</span>
            <span className="process-table-action">{st.action}</span>
          </div>
        ))}
      </div>

      {/* Row of 4 Colored Advantage Cards: Blue, Cyan, Grey-blue, Teal */}
      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', margin: '30px 0 14px', textTransform: 'uppercase' }}>
        FXTrade International Trade Advantages
      </h4>
      <div className="intl-advantage-row">
        {cards.map((c) => (
          <div key={c.id} className={`intl-card ${c.colorClass}`}>
            <div className="intl-card-header">{c.title}</div>
            <div className="intl-card-body">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersCreditDiagram;
