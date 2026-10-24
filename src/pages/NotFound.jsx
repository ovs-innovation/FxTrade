import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';

export const NotFound = () => {
  return (
    <>
      <PageBanner
        title="Page Not Found"
        breadcrumbs={[{ label: '404', path: null }]}
      />

      <div className="notfound-wrapper">
        <div className="container">
          <div className="notfound-code">404</div>
          <h2 className="notfound-title">Page Not Found</h2>
          <p className="notfound-text">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Please return to our homepage or explore our services.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Back to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-navy">
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
