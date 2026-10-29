import React from 'react';
import PageBanner from '../components/layout/PageBanner';
import ContactSection from '../components/home/ContactSection';
import { contactData } from '../data/contact';
import { Building2, Ship, TrendingUp, Briefcase, Phone, Mail } from 'lucide-react';

export const ContactUs = () => {
  const deskIcons = [Building2, Ship, TrendingUp, Briefcase];

  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us', path: null }]}
      />

      <div style={{ padding: '60px 0 30px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <h2 className="service-main-heading">CONNECT WITH FXTRADE CONSULTING</h2>
            <div className="service-heading-underline" style={{ margin: '0 auto 16px' }} />
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '22px' }}>
              {contactData.subtitle}
            </p>

            {/* All-in-one Specialized Advisory Desks List */}
            <div className="contact-desks-list-bar">
              {contactData.departments.map((dept, idx) => {
                const IconComponent = deskIcons[idx] || Building2;
                return (
                  <div key={idx} className="contact-desk-pill">
                    <IconComponent size={16} />
                    <span>{dept.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Unified Direct Contact Channels (Phone & Email Shown Once) */}
            <div className="contact-quick-channels-bar">
              <a href={`tel:${contactData.phones[0].tel}`} className="quick-channel-card">
                <div className="quick-channel-icon-wrap phone">
                  <Phone size={18} />
                </div>
                <div className="quick-channel-info">
                  <span className="quick-channel-label">Direct Advisory Desk</span>
                  <span className="quick-channel-val">{contactData.phones[0].display}</span>
                </div>
              </a>

              <a href={`mailto:${contactData.emails[0].address}`} className="quick-channel-card">
                <div className="quick-channel-icon-wrap mail">
                  <Mail size={18} />
                </div>
                <div className="quick-channel-info">
                  <span className="quick-channel-label">Official Advisory Email</span>
                  <span className="quick-channel-val">{contactData.emails[0].address}</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main 3-column Contact Component */}
      <ContactSection />
    </>
  );
};

export default ContactUs;
