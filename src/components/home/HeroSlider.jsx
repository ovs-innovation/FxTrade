import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { homepageData } from '../../data/homepage';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = homepageData.heroSlides;

  // Auto-advance slides every 6.5 seconds, resets on slide interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const [touchStartX, setTouchStartX] = useState(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section className="hero-slider-section" aria-label="Hero Showcase">
      <div className="hero-slider-container">
        <div
          className="hero-slide-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Continuous Sliding Track */}
          <div
            className="hero-slides-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id || idx}
                className="hero-slide-item"
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              >
                {/* Dark Overlay */}
                <div className="hero-slide-overlay" />

                {/* Slide Content */}
                <div className="hero-slide-content">
                  <span className="hero-badge">{slide.badge}</span>
                  <h1 className="hero-headline">{slide.heading}</h1>
                  <p className="hero-description">{slide.description}</p>

                  <div className="hero-btn-group">
                    <Link to={slide.primaryCta.path} className="btn btn-primary">
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link to={slide.secondaryCta.path} className="btn btn-outline-white">
                      <span>{slide.secondaryCta.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            className="hero-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="hero-nav-btn next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Indicators */}
          <div className="hero-pagination-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-dot ${idx === currentSlide ? 'is-active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
