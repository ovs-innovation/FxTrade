import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Page Components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LeadershipTeam from './pages/LeadershipTeam';
import OurValues from './pages/OurValues';
import DebtSyndication from './pages/DebtSyndication';
import DomesticTradeFinance from './pages/DomesticTradeFinance';
import InternationalTradeFinance from './pages/InternationalTradeFinance';
import OtherServices from './pages/OtherServices';
import InstantFunding from './pages/InstantFunding';
import JoinUs from './pages/JoinUs';
import LifeAtFXTrade from './pages/LifeAtFXTrade';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="leadership-team" element={<LeadershipTeam />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="debt-syndication" element={<DebtSyndication />} />
          <Route path="domestic-trade-finance" element={<DomesticTradeFinance />} />
          <Route path="international-trade-finance" element={<InternationalTradeFinance />} />
          <Route path="instant-funding" element={<InstantFunding />} />
          <Route path="ipo-advisory" element={<Navigate to="/instant-funding" replace />} />
          <Route path="services" element={<OtherServices />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="life-at-fxtrade" element={<LifeAtFXTrade />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
