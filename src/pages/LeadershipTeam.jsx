import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import { companyData } from '../data/company';
import { contactData } from '../data/contact';

export const LeadershipTeam = () => {
  const { leadership } = companyData;

  return (
    <>
      <PageBanner
        title="Leadership Team"
        breadcrumbs={[
          { label: 'About Us', path: '/about-us' },
          { label: 'Leadership Team', path: null }
        ]}
      />

      <div className="leadership-page-wrapper">
        <div className="container">
          <div className="leadership-layout-grid">
            
            {/* Left Sidebar */}
            <aside className="leadership-sidebar">
              <h3 className="sidebar-heading">About FXTrade</h3>
              <ul className="sidebar-nav-list" style={{ marginBottom: '24px' }}>
                <li className="sidebar-nav-item">
                  <Link to="/about-us" className="sidebar-nav-link">
                    <span className="sidebar-bullet" />
                    <span>Company Overview</span>
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/leadership-team" className="sidebar-nav-link is-active">
                    <span className="sidebar-bullet" />
                    <span>Leadership Team</span>
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/our-values" className="sidebar-nav-link">
                    <span className="sidebar-bullet" />
                    <span>Our Core Values</span>
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/join-us" className="sidebar-nav-link">
                    <span className="sidebar-bullet" />
                    <span>Careers & Openings</span>
                  </Link>
                </li>
                <li className="sidebar-nav-item">
                  <Link to="/life-at-fxtrade" className="sidebar-nav-link">
                    <span className="sidebar-bullet" />
                    <span>Life at FXTrade</span>
                  </Link>
                </li>
              </ul>

              <div className="sidebar-cta-widget">
                <h4>Institutional Connect</h4>
                <p>Discuss syndicate participation or debt mandates with our principals.</p>
                <span className="sidebar-cta-phone">{contactData.phones[0].display}</span>
                <a
                  href={`mailto:${contactData.emails[0].address}`}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '8px 12px', fontSize: '12px' }}
                >
                  <Mail size={14} />
                  Email Leadership
                </a>
              </div>
            </aside>

            {/* Main Profiles Stack */}
            <div className="leadership-profiles-stack">
              <div style={{ marginBottom: '10px' }}>
                <h2 className="service-main-heading">MANAGEMENT & STRATEGIC ADVISORY BOARD</h2>
                <div className="service-heading-underline" />
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Our leadership team consists of seasoned corporate finance strategists, banking consortium directors, and treasury advisors with over 9+ years of proven institutional transaction experience across Indian and international credit markets.
                </p>
              </div>

              {leadership.map((leader) => (
                <div key={leader.id} className="leader-profile-card">
                  
                  {/* Photo */}
                  <div className="leader-photo-wrap">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      onError={(e) => { e.target.src = '/images/team/leader-kaushal.jpg'; }}
                    />
                  </div>

                  {/* Info */}
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <span className="leader-designation">{leader.designation}</span>
                    <span className="leader-experience">{leader.experience}</span>
                    <p className="leader-bio">{leader.bio}</p>

                    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--primary-navy)', marginBottom: '8px', fontWeight: 700 }}>
                      Key Focus Areas:
                    </h5>
                    <div className="leader-expertise-tags">
                      {leader.expertise.map((exp, idx) => (
                        <span key={idx} className="expertise-tag">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipTeam;
