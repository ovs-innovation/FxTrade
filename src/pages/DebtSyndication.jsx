import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceLayout from '../components/services/ServiceLayout';
import WorkingCapitalDiagram from '../components/services/WorkingCapitalDiagram';
import ProjectFinanceTimeline from '../components/services/ProjectFinanceTimeline';
import { servicesData } from '../data/services';

export const DebtSyndication = () => {
  const { debtSyndication } = servicesData;

  return (
    <ServiceLayout
      title="Debt Syndication"
      breadcrumbs={[
        { label: 'Services', path: '/services' },
        { label: 'Debt Syndication', path: null }
      ]}
    >
      {/* 12.1 Overview */}
      <section id="overview" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.overview.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.overview.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {debtSyndication.overview.highlights.map((h, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12.2 Working Capital Finance */}
      <section id="working-capital" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.workingCapital.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.workingCapital.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        {/* 9-Step Process Diagram Component */}
        <WorkingCapitalDiagram />
      </section>

      {/* 12.3 Project Finance */}
      <section id="project-finance" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.projectFinance.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.projectFinance.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        {/* Multi-Stage Horizontal Timeline Component */}
        <ProjectFinanceTimeline />
      </section>

      {/* 12.4 Term Loan */}
      <section id="term-loan" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.termLoan.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.termLoan.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {debtSyndication.termLoan.benefits.map((b, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12.5 Annual Appraisal of Limits */}
      <section id="annual-appraisal" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.annualAppraisal.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.annualAppraisal.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="appraisal-stages-grid">
          {debtSyndication.annualAppraisal.stages.map((st, idx) => (
            <div key={idx} className="appraisal-stage-card">
              <span className="appraisal-stage-phase">{st.phase}</span>
              <h5 className="appraisal-stage-name">{st.name}</h5>
              <p className="appraisal-stage-desc">{st.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12.6 Mortgage Loan */}
      <section id="mortgage-loan" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.mortgageLoan.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.mortgageLoan.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {debtSyndication.mortgageLoan.points.map((pt, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12.7 Rating Advisory Service */}
      <section id="rating-advisory" className="service-section-block">
        <h2 className="service-main-heading">{debtSyndication.ratingAdvisory.heading}</h2>
        <div className="service-heading-underline" />
        {debtSyndication.ratingAdvisory.paragraphs.map((p, idx) => (
          <p key={idx} className="service-text">{p}</p>
        ))}

        <div className="service-feature-checklist">
          {debtSyndication.ratingAdvisory.deliverables.map((d, idx) => (
            <div key={idx} className="checklist-item">
              <CheckCircle2 size={18} className="checklist-icon" />
              <span>{d}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center', background: 'var(--blue-subtle)', padding: '24px', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--primary-navy)', fontSize: '16px', marginBottom: '8px', fontWeight: 700 }}>
            Ready to Structure Your Next Consortium Limit?
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Our debt syndication directors are ready to review your CMA data and sanction terms.
          </p>
          <Link to="/contact-us" className="btn btn-primary">
            <span>Schedule Syndication Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default DebtSyndication;
