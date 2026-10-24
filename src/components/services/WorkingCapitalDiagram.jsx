import React from 'react';
import { servicesData } from '../../data/services';

export const WorkingCapitalDiagram = () => {
  const steps = servicesData.debtSyndication.workingCapital.steps;

  return (
    <div style={{ margin: '30px 0' }} aria-label="9-Step Working Capital Limit Syndication Architecture">
      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '14px', textTransform: 'uppercase' }}>
        9-Step Working Capital Limit Appraisal & Syndication Flow
      </h4>

      <div className="steps-9-grid">
        {steps.map((item) => (
          <div key={item.step} className="step-9-card">
            <div className="step-9-num">{item.step}</div>
            <h5 className="step-9-title">{item.title}</h5>
            <p className="step-9-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingCapitalDiagram;
