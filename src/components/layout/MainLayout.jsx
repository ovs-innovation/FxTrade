import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../shared/ScrollToTop';
import FloatingWhatsApp from '../shared/FloatingWhatsApp';

export const MainLayout = () => {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>
      <Footer />
      <div className="floating-actions-container">
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default MainLayout;
