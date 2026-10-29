import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import { homepageData } from '../data/homepage';

export const LifeAtFXTrade = () => {
  const { lifeAtFXTrade } = homepageData;

  return (
    <>
      <PageBanner
        title="Life at FXTrade"
        breadcrumbs={[
          { label: 'Join Us', path: '/join-us' },
          { label: 'Life at FXTrade', path: null }
        ]}
      />

      <div className="life-page-wrapper">
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 50px' }}>
            <h2 className="service-main-heading">CULTURE, PASSION & IMPACT</h2>
            <div className="service-heading-underline" style={{ margin: '0 auto 16px' }} />
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              At FXTrade Consulting, we believe that an empowered, merit-driven culture is the foundation of institutional excellence. We create an environment where intellectual curiosity is rewarded, teamwork is genuine, and professionals take immense pride in powering the growth of Indian industry.
            </p>
          </div>

          {/* Three Large White Cards (The People, The Environment, The Work) */}
          <div className="life-pillars-3col">
            {lifeAtFXTrade.pillars.map((pillar, idx) => (
              <div key={idx} className="life-card">
                <h3 className="life-card-title">{pillar.title}</h3>
                <div className="life-card-underline" />
                <span className="life-card-tagline">{pillar.tagline}</span>
                <p className="life-card-desc">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Infographic Section / Value Highlights */}
          <div style={{ background: 'var(--background-light)', padding: '45px', borderRadius: '12px', margin: '50px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-navy)', textTransform: 'uppercase' }}>
                Why Professionals Choose FXTrade
              </h3>
              <div style={{ width: '40px', height: '2.5px', background: 'var(--primary-red)', margin: '8px auto' }} />
            </div>

            <div className="life-highlights-grid">
              <div className="life-highlight-card border-red">
                <h4 className="life-highlight-title">Direct Promoter Engagement</h4>
                <p className="life-highlight-desc">Interact with promoters, CFOs, and bank sanctioning committees on day one.</p>
              </div>
              <div className="life-highlight-card border-blue">
                <h4 className="life-highlight-title">Meritocratic Recognition</h4>
                <p className="life-highlight-desc">Performance and deal origination drive career progression, not hierarchy.</p>
              </div>
              <div className="life-highlight-card border-navy">
                <h4 className="life-highlight-title">Continuous Professional Learning</h4>
                <p className="life-highlight-desc">Master RBI master directions, CMA modeling, and cross-border trade instruments.</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div style={{ marginTop: '50px' }}>
            <h3 className="service-main-heading" style={{ textAlign: 'center' }}>MOMENTS & WORKPLACE GLIMPSES</h3>
            <div className="service-heading-underline" style={{ margin: '0 auto 24px' }} />
            
            <div className="culture-gallery-grid">
              {lifeAtFXTrade.gallery.map((photo, idx) => (
                <div key={idx} className="gallery-photo-card">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    onError={(e) => { e.target.src = '/images/about/real-corporate-consulting.jpg'; }}
                  />
                  <div className="gallery-caption">{photo.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/join-us" className="btn btn-primary">
              <span>View Open Opportunities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LifeAtFXTrade;
