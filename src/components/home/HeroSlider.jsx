import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { homepageData } from '../../data/homepage';

export const HeroSlider = () => {
  const slides = homepageData.heroSlides;
  const totalSlides = slides.length;

  // Extended slides with clones at both boundaries for seamless one-directional infinite loop
  // [Clone of Last, Slide 0, Slide 1, Slide 2, Slide 3, Clone of First]
  const extendedSlides = [
    { ...slides[totalSlides - 1], id: `clone-last-${slides[totalSlides - 1].id}` },
    ...slides,
    { ...slides[0], id: `clone-first-${slides[0].id}` }
  ];

  // Start at index 1 (the first real slide)
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isSlidingRef = useRef(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Active indicator dot index (0 to totalSlides - 1)
  const activeDot =
    currentSlide === 0
      ? totalSlides - 1
      : currentSlide === totalSlides + 1
      ? 0
      : currentSlide - 1;

  const nextSlide = () => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (idx) => {
    if (isSlidingRef.current || activeDot === idx) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentSlide(idx + 1);
  };

  const handleTransitionEnd = (e) => {
    // Only respond to transitions on the sliding track itself
    if (e.target !== e.currentTarget) return;

    isSlidingRef.current = false;

    // If we transitioned forward past the last slide onto the clone of the first slide,
    // seamlessly snap back to the actual first slide (index 1) with transition disabled
    if (currentSlide === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    }
    // If we transitioned backward before the first slide onto the clone of the last slide,
    // seamlessly snap to the actual last slide with transition disabled
    else if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(totalSlides);
    }
  };

  // Auto-advance slides every 4.5 seconds in one continuous direction (never rewinds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTouchStart = (e) => {
    if (isSlidingRef.current) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null || isSlidingRef.current) return;
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
          {/* Continuous Sliding Track with seamless boundary reset */}
          <div
            className="hero-slides-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning
                ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none'
            }}
          >
            {extendedSlides.map((slide, idx) => (
              <div
                key={`${slide.id}-${idx}`}
                className={`hero-slide-item ${slide.id ? `hero-slide-${slide.id}` : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.backgroundPosition || 'center'
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
                className={`hero-dot ${idx === activeDot ? 'is-active' : ''}`}
                onClick={() => goToSlide(idx)}
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
