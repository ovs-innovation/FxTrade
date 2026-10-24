import React from 'react';
import { servicesData } from '../../data/services';

export const ProjectFinanceTimeline = () => {
  const stages = servicesData.debtSyndication.projectFinance.stages;

  return (
    <div style={{ margin: '30px 0' }} aria-label="Project Finance Multi-Stage Execution Timeline">
      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '14px', textTransform: 'uppercase' }}>
        Project Finance Multi-Stage Syndication Timeline
      </h4>

      <div className="project-timeline-horizontal">
        {stages.map((stage, idx) => (
          <div key={idx} className={`timeline-stage-card ${stage.color}`}>
            <span className="stage-badge">{stage.stage}</span>
            <h5 className="stage-title">{stage.title}</h5>
            <p className="stage-desc">{stage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFinanceTimeline;
