import React from 'react';
import PageBanner from '../layout/PageBanner';
import ServiceSidebar from './ServiceSidebar';

export const ServiceLayout = ({ title, breadcrumbs, children }) => {
  return (
    <>
      <PageBanner title={title} breadcrumbs={breadcrumbs} />

      <div className="service-page-wrapper">
        <div className="container">
          <div className="service-layout-grid">
            <ServiceSidebar />
            <div className="service-content-col">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;
