import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { servicesData } from '../../data/services';
import { contactData } from '../../data/contact';

export const ServiceSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubLinkClick = (e, path) => {
    const [targetRoute, targetHash] = path.split('#');

    if (location.pathname === targetRoute) {
      e.preventDefault();
      if (targetHash) {
        const element = document.getElementById(targetHash);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      navigate(path);
    }
  };

  return (
    <aside className="service-sidebar" aria-label="Services Navigation">
      <h3 className="sidebar-heading">Our Services</h3>

      {servicesData.categories.map((cat) => {
        const isCurrentCategory = location.pathname === cat.route;

        return (
          <div key={cat.id} className="sidebar-category-group">
            <h4 className="sidebar-category-title">{cat.title}</h4>
            <ul className="sidebar-nav-list">
              {cat.subservices.map((sub) => {
                const isAnchorActive = isCurrentCategory && (
                  location.hash
                    ? sub.path.endsWith(location.hash)
                    : sub.path.endsWith('#overview')
                );

                return (
                  <li key={sub.id} className="sidebar-nav-item">
                    <Link
                      to={sub.path}
                      onClick={(e) => handleSubLinkClick(e, sub.path)}
                      className={`sidebar-nav-link ${isAnchorActive ? 'is-active' : ''}`}
                    >
                      <span className="sidebar-bullet" />
                      <span>{sub.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* Quick Contact CTA Widget */}
      <div className="sidebar-cta-widget">
        <h4>Need Quick Advisory?</h4>
        <p>Talk to our senior syndication desk for custom quotes.</p>
        <span className="sidebar-cta-phone">{contactData.phones[0].display}</span>
        <a
          href={`tel:${contactData.phones[0].tel}`}
          className="btn btn-primary"
          style={{ width: '100%', padding: '8px 14px', fontSize: '12.5px' }}
        >
          <Phone size={14} />
          Call Advisory Desk
        </a>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
