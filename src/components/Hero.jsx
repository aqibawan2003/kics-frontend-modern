import { useState, useEffect, useCallback, memo } from 'react';
import { heroSlides } from '../data/siteData';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroSlide = memo(({ slide, isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
    aria-hidden={!isActive}
  >
    <img
      src={slide.image}
      alt={slide.title}
      width="1920"
      height="900"
      className="w-full h-full object-cover"
      style={{ transform: isActive ? 'scale(1)' : 'scale(1.04)', transition: 'transform 8s linear' }}
      onError={(e) => {
        e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=900&fit=crop';
      }}
    />
  </div>
));

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 350);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section
      className="relative overflow-hidden bg-primary-900"
      style={{ height: 'clamp(500px, 85vh, 820px)' }}
      id="home"
      aria-label="Hero slideshow"
    >
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <HeroSlide key={i} slide={s} isActive={i === current} />
      ))}

      {/* Gradient overlays — dark enough to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/75 to-primary-800/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5 text-white text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-primary-300 rounded-full" />
              {slide.badge || 'Al-Khwarizmi Institute'}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white drop-shadow-lg">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-xl drop-shadow">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-primary-900 font-bold px-6 py-3 rounded transition-all duration-200 hover:bg-primary-50 hover:-translate-y-0.5 shadow-lg text-sm"
              >
                Discover KICS
                <FiArrowRight size={15} />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white font-bold px-6 py-3 rounded transition-all duration-200 hover:bg-white/15 hover:border-white text-sm"
              >
                Our Research
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors border border-white/20"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors border border-white/20"
        aria-label="Next slide"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center" role="tablist" aria-label="Slide indicators">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === current}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 text-white/60 text-xs font-mono hidden sm:block">
        {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
