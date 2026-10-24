import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import WhatWeDo from '../components/home/WhatWeDo';
import Statistics from '../components/home/Statistics';
import ServicesOverview from '../components/home/ServicesOverview';
import Reachability from '../components/home/Reachability';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import Clients from '../components/home/Clients';
import ContactSection from '../components/home/ContactSection';

export const Home = () => {
  return (
    <>
      {/* 1. Hero Showcase Slider */}
      <HeroSlider />

      {/* 2. What We Do */}
      <WhatWeDo />

      {/* 3. Statistics Strip */}
      <Statistics />

      {/* 4. Our Services (2-Column Cards) */}
      <ServicesOverview />

      {/* 5. Our Reachability Across Sectors */}
      <Reachability />

      {/* 6. Why Choose Us (Deep Navy Section) */}
      <WhyChooseUs />

      {/* 7. Client Testimonials */}
      <Testimonials />

      {/* 8. Our Clients */}
      <Clients />

      {/* 9. Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;
