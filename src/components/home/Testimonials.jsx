import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homepageData } from '../../data/homepage';

export const Testimonials = () => {
  const testimonials = homepageData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(null);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextTestimonial();
    } else if (diff < -45) {
      prevTestimonial();
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="testimonials-section" aria-label="Client Testimonials">
      <div className="container">
        {/* Simple, Human Header Matching Reference */}
        <div className="testimonial-header">
          <h2 className="testimonial-section-title">What Our Client Says</h2>
          <div className="testimonial-section-line" />
        </div>

        {/* Carousel Viewport with Fixed Height & Smooth Horizontal Slide */}
        <div
          className="testimonials-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonials-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div className="testimonial-slide" key={item.id || idx}>
                {/* Subtle outline quote icon at top-left of text block */}
                <div className="testimonial-quote-icon-container">
                  <svg className="testimonial-quote-outline" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2H3C1.89543 2 1 2.89543 1 4V13C1 14.1046 1.89543 15 3 15H7V18C7 21.3137 4.31371 24 1 24" stroke="#c0c6ce" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2V13C12 14.1046 11.1046 15 10 15H7" stroke="#c0c6ce" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M29 2H20C18.8954 2 18 2.89543 18 4V13C18 14.1046 18.8954 15 20 15H24V18C24 21.3137 21.3137 24 18 24" stroke="#c0c6ce" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29 2V13C29 14.1046 28.1046 15 27 15H24" stroke="#c0c6ce" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="testimonial-text-box">
                  <p className="testimonial-text">
                    "{item.quote}"
                  </p>
                </div>

                <div className="testimonial-author-wrap">
                  <h4 className="testimonial-author-name">{item.clientName}</h4>
                  <p className="testimonial-author-company">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls: Red Chevrons & Navy/Red Square Dots (Stationary outside track) */}
        <div className="testimonial-nav-row">
          <button
            type="button"
            className="testimonial-chevron-btn"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          <div className="testimonial-square-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`testimonial-square-dot ${idx === currentIndex ? 'active' : ''}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonial-chevron-btn"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
