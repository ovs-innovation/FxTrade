import React from 'react';
import PageBanner from '../components/layout/PageBanner';
import ContactSection from '../components/home/ContactSection';
import { contactData } from '../data/contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactUs = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us', path: null }]}
      />

      <div style={{ padding: '60px 0 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="service-main-heading">CONNECT WITH FXTRADE CONSULTING</h2>
            <div className="service-heading-underline" style={{ margin: '0 auto 16px' }} />
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {contactData.subtitle}
            </p>
          </div>

          {/* Quick department contact boxes */}
          <div className="contact-dept-grid">
            {contactData.departments.map((dept, idx) => (
              <div key={idx} className="contact-dept-card">
                <h4 className="contact-dept-title">
                  {dept.name}
                </h4>
                <a href={`mailto:${dept.email}`} className="contact-dept-email">
                  {dept.email}
                </a>
                <a href={`tel:${dept.phone}`} className="contact-dept-phone">
                  {dept.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main 3-column Contact Component */}
      <ContactSection />
    </>
  );
};

export default ContactUs;
