import React from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import { homepageData } from '../data/homepage';
import { contactData } from '../data/contact';

export const JoinUs = () => {
  const { careers } = homepageData;

  return (
    <>
      <PageBanner
        title="Join Us"
        breadcrumbs={[{ label: 'Join Us', path: null }]}
      />

      <div className="join-us-page-wrapper">
        <div className="container">
          
          {/* Two-Column Intro */}
          <div className="join-intro-grid">
            <div>
              <h2 className="service-main-heading">{careers.heading}</h2>
              <div className="service-heading-underline" />
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                {careers.intro}
              </p>
              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Whether structuring multi-bank syndications or negotiating complex cross-border trade transactions, your contributions will directly impact corporate balance sheets. Explore our active positions below.
              </p>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/images/about/about-hero-team-meeting.jpg"
                alt="FXTrade Corporate Finance Team Collaboration"
                onError={(e) => { e.target.src = '/images/about/about-team.jpg'; }}
                style={{ width: '100%', height: '340px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Openings Table */}
          <div className="openings-table-container">
            <table className="openings-table">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Experience</th>
                  <th>Location</th>
                  <th>Last Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {careers.openings.map((job) => (
                  <tr key={job.id}>
                    <td><strong>{job.sNo}</strong></td>
                    <td style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>{job.title}</td>
                    <td>{job.department}</td>
                    <td>{job.experience}</td>
                    <td>{job.location}</td>
                    <td>{job.deadline}</td>
                    <td>
                      <a
                        href={`mailto:${careers.recruitmentEmail}?subject=Application for ${job.title}&body=Hello FXTrade Talent Team, Please find attached my CV for the position of ${job.title}.`}
                        className="btn btn-primary"
                        style={{ padding: '6px 14px', fontSize: '12px' }}
                      >
                        Apply Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submission Requirements Section */}
          <div className="openings-submit-box">
            <h3>How to Apply & General Inquiries</h3>
            <p>
              Interested candidates should submit their updated resume along with a brief synopsis of relevant transaction experience, deal sizes handled, and current location.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', padding: '10px 20px', borderRadius: '50px', border: '1px solid var(--border-light)' }}>
              <Mail size={18} color="var(--primary-red)" />
              <span style={{ fontSize: '13.5px' }}>Send Resume to: </span>
              <a href={`mailto:${careers.recruitmentEmail}`} className="recruitment-email-link">
                {careers.recruitmentEmail}
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default JoinUs;
