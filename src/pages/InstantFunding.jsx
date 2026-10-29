import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Ship, 
  Coins, 
  Briefcase, 
  FileText, 
  TrendingUp,
  MapPin,
  Calendar,
  Percent,
  Check
} from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import CorporateProfileModal from '../components/shared/CorporateProfileModal';
import { servicesData } from '../data/services';
import { contactData } from '../data/contact';

export const InstantFunding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = servicesData.instantFunding;

  return (
    <div className="instant-funding-page">
      {/* 1. Header Banner */}
      <PageBanner
        title={data.hero.title}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Instant Funding', path: null }
        ]}
      />

      {/* 2. Overview Section (2-Column Grid) */}
      <section id="overview" className="if-section if-overview-section">
        <div className="container">
          <div className="if-overview-grid">
            {/* Left Image Column */}
            <div className="if-image-col">
              <div className="if-image-card">
                <img
                  src="/images/about/advisory-meeting.jpg"
                  alt="FXTrade Instant Funding Financial Consultant"
                  className="if-main-img"
                  onError={(e) => {
                    e.target.src = '/images/about/about-consulting.jpg';
                  }}
                />
                <div className="if-img-floating-badge">
                  <Zap size={20} className="if-badge-icon" />
                  <div>
                    <span className="if-badge-title">24–48 Hr TAT</span>
                    <span className="if-badge-sub">PAN-India Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="if-content-col">
              <span className="if-eyebrow">FAST & FLEXIBLE DEBT</span>
              <h2 className="if-section-title">{data.overview.heading}</h2>
              <div className="if-title-underline" />

              {data.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="if-text">{p}</p>
              ))}

              <div className="if-highlight-pills">
                <div className="if-pill"><CheckCircle2 size={16} /> ₹1 Cr – ₹100 Cr Ticket Size</div>
                <div className="if-pill"><CheckCircle2 size={16} /> 24–48 Hr Fast-Track TAT</div>
                <div className="if-pill"><CheckCircle2 size={16} /> Non-Banking Liquidity</div>
                <div className="if-pill"><CheckCircle2 size={16} /> High-Growth Capital Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blue Contact Us Now Strip */}
      <section className="if-contact-strip-section">
        <div className="container">
          <div className="if-contact-strip-card">
            <div className="if-contact-strip-text">
              <h3 className="if-strip-title">{data.overview.contactBanner.title}</h3>
              <p className="if-strip-sub">Direct access to institutional liquidity desks with zero bureaucratic delays</p>
            </div>
            <Link to="/contact-us" className="btn btn-pill-white">
              Contact Us Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services Offered by Us (4-Card Grid) */}
      <section className="if-section if-services-offered-section">
        <div className="container">
          <div className="if-section-header text-center">
            <h2 className="if-section-title">Services Offered by Us</h2>
            <div className="if-title-underline center" />
            <p className="if-section-subtitle">
              We as premier financial consultants in India offer these specialized corporate & trade finance services
            </p>
          </div>

          <div className="if-services-grid-4">
            {data.servicesOffered.map((svc) => (
              <div key={svc.id} className="if-service-box">
                <div className="if-service-icon-wrap">
                  {svc.id === 'trade-finance' && <Ship size={28} />}
                  {svc.id === 'project-finance' && <Building2 size={28} />}
                  {(svc.id === 'equity-debt' || svc.id === 'private-equity') && <Coins size={28} />}
                  {svc.id === 'business-advisory' && <Briefcase size={28} />}
                </div>
                <h4 className="if-service-box-title">{svc.title}</h4>
                <p className="if-service-box-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Achievements Counter Strip */}
      <section className="if-achievements-section">
        <div className="container">
          <div className="if-achievements-header text-center">
            <h2 className="if-achievements-title">Our Achievements</h2>
            <div className="if-title-underline center light" />
          </div>

          <div className="if-achievements-grid">
            {data.achievements.map((item, idx) => (
              <div key={idx} className="if-achievement-card">
                <div className="if-achievement-number">{item.number}</div>
                <div className="if-achievement-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Facility Parameters (Highlight Box) */}
      <section id="parameters" className="if-section if-parameters-section">
        <div className="container">
          <div className="if-parameters-card">
            <div className="if-parameters-header text-center">
              <span className="if-eyebrow">FACILITY HIGHLIGHTS</span>
              <h2 className="if-section-title">{data.parameters.title}</h2>
              <div className="if-title-underline center" />
              <p className="if-section-subtitle">{data.parameters.subtitle}</p>
            </div>

            <div className="if-parameters-grid">
              {data.parameters.cards.map((c, idx) => (
                <div key={idx} className="if-param-box">
                  <div className="if-param-top">
                    {c.label === "Ticket Size" && <Coins size={24} className="if-param-icon" />}
                    {c.label === "Tenure" && <Calendar size={24} className="if-param-icon" />}
                    {(c.label.includes("Time Duration") || c.label.includes("TAT")) && <Clock size={24} className="if-param-icon" />}
                    <span className="if-param-label">{c.label}</span>
                  </div>
                  <div className="if-param-value">{c.value}</div>
                  <p className="if-param-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Instant Funding from FXTrade */}
      <section id="why-instant-funding" className="if-section if-why-section">
        <span id="why-private-funding" style={{ display: 'none' }} />
        <div className="container">
          <div className="if-section-header">
            <span className="if-eyebrow">COMPETITIVE ADVANTAGE</span>
            <h2 className="if-section-title">Why Choose Instant Funding from FXTrade Consulting?</h2>
            <div className="if-title-underline" />
          </div>

          <div className="if-why-list">
            {data.whyChoose.map((item) => (
              <div key={item.num} className="if-why-item">
                <div className="if-why-num-badge">{item.num}</div>
                <div className="if-why-content">
                  <h4 className="if-why-title">{item.title}</h4>
                  <p className="if-why-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Eligibility Criteria & Required Documents */}
      <section id="eligibility" className="if-section if-eligibility-section">
        <div className="container">
          <div className="if-section-header">
            <span className="if-eyebrow">DOCUMENTATION CHECKLIST</span>
            <h2 className="if-section-title">Eligibility Criteria & Checklist</h2>
            <div className="if-title-underline" />
            <p className="if-section-subtitle">
              To avail Instant Funding from FXTrade Consulting, your company should meet the following basic requirements:
            </p>
          </div>

          <div className="if-eligibility-grid">
            {data.eligibility.map((el, idx) => (
              <div key={idx} className="if-eligibility-card">
                <div className="if-el-icon-wrap">
                  <Check size={20} />
                </div>
                <div className="if-el-info">
                  <h5 className="if-el-title">{idx + 1}. {el.title}</h5>
                  <p className="if-el-desc">{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. How The Process Works (4 Steps) */}
      <section id="process" className="if-section if-process-section">
        <div className="container">
          <div className="if-section-header text-center">
            <span className="if-eyebrow">FAST-TRACK WORKFLOW</span>
            <h2 className="if-section-title">How The Process Works</h2>
            <div className="if-title-underline center" />
            <p className="if-section-subtitle">
              From application to direct disbursement within 24 hours
            </p>
          </div>

          <div className="if-process-grid">
            {data.processSteps.map((s, idx) => (
              <div key={idx} className="if-process-card">
                <div className="if-process-step-pill">{s.step}</div>
                <h4 className="if-process-card-title">{s.title}</h4>
                <p className="if-process-card-desc">{s.desc}</p>
                <div className="if-process-step-num">{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Who Should Apply & Trust Pillars */}
      <section id="who-should-apply" className="if-section if-audience-section">
        <div className="container">
          <div className="if-audience-grid">
            {/* Left: Who Should Apply */}
            <div className="if-audience-col">
              <h3 className="if-section-title">Who Should Apply?</h3>
              <div className="if-title-underline" />
              <p className="if-text" style={{ marginBottom: '20px' }}>
                Our instant funding facilities are tailored for enterprises with high capital velocity:
              </p>

              <div className="if-target-cards-list">
                {data.whoShouldApply.map((t, idx) => (
                  <div key={idx} className="if-target-card">
                    <span className="if-target-num">{idx + 1}.</span>
                    <div>
                      <h5 className="if-target-name">{t.title}</h5>
                      <p className="if-target-desc">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Why Businesses Trust FXTrade */}
            <div className="if-trust-col">
              <div className="if-trust-card">
                <div className="if-trust-badge">
                  <ShieldCheck size={28} />
                  <span>INSTITUTIONAL INTEGRITY</span>
                </div>
                <h3 className="if-trust-title">Why Businesses Trust FXTrade Consulting</h3>
                <div className="if-title-underline light" />

                <ul className="if-trust-list">
                  {data.trustReasons.map((reason, idx) => (
                    <li key={idx} className="if-trust-item">
                      <CheckCircle2 size={18} className="if-trust-check" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>

                <div className="if-trust-footer">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    View Corporate Credentials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Conversion & Call CTA Strip */}
      <section className="if-final-cta-section">
        <div className="container">
          <div className="if-final-cta-card">
            <div className="if-final-cta-content">
              <h2 className="if-final-cta-title">Apply for Instant Funding Today</h2>
              <p className="if-final-cta-desc">
                Looking for quick business capital between <strong>₹1 crore to ₹100 crore</strong>? Get in touch now and receive your sanction within 24 hours.
              </p>

              <div className="if-final-contact-bar">
                <a href={`tel:${contactData.phones[0].tel}`} className="if-contact-chip">
                  <Phone size={18} />
                  <span>Call: {contactData.phones[0].display}</span>
                </a>
                <a href={`mailto:${contactData.emails[0].address}`} className="if-contact-chip">
                  <Mail size={18} />
                  <span>Email: {contactData.emails[0].address}</span>
                </a>
              </div>
            </div>

            <div className="if-final-cta-action">
              <Link to="/contact-us" className="btn btn-pill-red">
                Apply for Instant Sanction
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Profile Modal */}
      <CorporateProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default InstantFunding;
