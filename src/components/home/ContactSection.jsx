import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { contactData } from '../../data/contact';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: 'Debt Syndication',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your financing requirement';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Client-side validated submission with explicit mailto fallback or advisory notice
    setIsSubmitted(true);

    // Open user's email client directly with the structured advisory docket
    const subject = encodeURIComponent(`Financing Inquiry: ${formData.serviceInterest} - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.serviceInterest}\n\nRequirement:\n${formData.message}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:${contactData.emails[0].address}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section className="home-contact-section" aria-label="Contact FXTrade Advisory Desk">
      <div className="container">
        <SectionHeading
          title="Contact Us"
          subtitle="Speak directly with our senior corporate finance and trade syndication advisors to discuss your capital requirements."
          variant="white"
        />

        <div className="home-contact-grid">
          
          {/* Column 1: Contact Information */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <MapPin size={22} className="contact-info-icon" />
              <div>
                <h4 className="contact-info-title">Corporate Headquarters</h4>
                <p className="contact-info-detail">
                  {contactData.address.formatted}
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <Phone size={22} className="contact-info-icon" />
              <div>
                <h4 className="contact-info-title">Advisory Desk</h4>
                <p className="contact-info-detail">
                  <a href={`tel:${contactData.phones[0].tel}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                    {contactData.phones[0].display}
                  </a>
                  <span style={{ display: 'block', fontSize: '11.5px', color: 'rgba(255,255,255,0.7)' }}>
                    Direct Consultation & Inquiries
                  </span>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <Mail size={22} className="contact-info-icon" />
              <div>
                <h4 className="contact-info-title">Official Email</h4>
                <p className="contact-info-detail">
                  <a href={`mailto:${contactData.emails[0].address}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                    {contactData.emails[0].address}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <Clock size={22} className="contact-info-icon" />
              <div>
                <h4 className="contact-info-title">Operational Hours</h4>
                <p className="contact-info-detail">
                  {contactData.operatingHours}<br />
                  <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.7)' }}>
                    Sunday: Closed
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: White Form Panel */}
          <div className="contact-form-panel">
            <h3>Request Financial Advisory</h3>
            <p>Submit your details to receive an initial limit appraisal.</p>

            {isSubmitted ? (
              <div className="form-success-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '6px' }}>
                  <CheckCircle2 size={18} />
                  Inquiry Registered
                </div>
                Your email client is opening with your details addressed to {contactData.emails[0].address}. Our advisory team responds within 24 business hours.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Ramesh"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Work Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="serviceInterest">Service of Interest</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  className="form-control"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                >
                  <option value="Debt Syndication">Debt Syndication & Working Capital</option>
                  <option value="Domestic Trade Finance">Domestic Trade Finance & Inland LCBD</option>
                  <option value="International Trade Finance">International Trade & Supplier's Credit</option>
                  <option value="Bank Guarantee Limits">Bank Guarantee Limits (PBG/APG)</option>
                  <option value="Instant Funding">Instant Private Funding (₹2 Cr - ₹100 Cr)</option>
                  <option value="Supply Chain Finance">Supply Chain Finance & Factoring</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Financing Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="form-control"
                  placeholder="Mention limit requirement, company turnover, or current banking bottleneck..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-contact-submit">
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Column 3: Map */}
          <div className="contact-map-col">
            <iframe
              src={contactData.address.mapEmbedUrl}
              title="FXTrade Consulting Office Location"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
