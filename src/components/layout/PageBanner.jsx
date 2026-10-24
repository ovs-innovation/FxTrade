import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const PageBanner = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="page-title-banner">
      <div className="container">
        <div className="banner-content-row">
          <h1 className="banner-heading">{title}</h1>

          <nav className="banner-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  <ChevronRight size={13} className="breadcrumb-separator" />
                  {isLast || !crumb.path ? (
                    <span className="breadcrumb-current">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.path} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
