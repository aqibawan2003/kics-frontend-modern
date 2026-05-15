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
  const [current, setCurrent]           = useState(0);
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
      className="relative overflow-hidden bg-primary-950"
      style={{ height: 'clamp(520px, 88vh, 860px)' }}
      id="home"
      aria-label="Hero slideshow"
    >
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <HeroSlide key={i} slide={s} isActive={i === current} />
      ))}

      {/* Waseda-style gradient: strong left-side dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-900/70 to-primary-800/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent pointer-events-none" />

      {/* Content — left-aligned, clean Waseda style */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Category label — Waseda uses a thin coloured top-bar on text blocks */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-0.5 bg-primary-400" />
              <span className="text-primary-300 text-xs font-bold uppercase tracking-[0.2em]">
                {slide.badge || 'Al-Khwarizmi Institute'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white drop-shadow-lg">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            {/* CTA Buttons — Waseda uses rounded pill buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg text-sm"
              >
                Discover KICS <FiArrowRight size={15} />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:bg-white/15 hover:border-white text-sm"
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
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-primary-600/80 text-white flex items-center justify-center transition-colors border border-white/20"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-primary-600/80 text-white flex items-center justify-center transition-colors border border-white/20"
        aria-label="Next slide"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Bottom bar — slide counter + dots, Waseda style */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 sm:px-10 py-4">
        {/* Dot Indicators */}
        <div className="flex gap-2 items-center" role="tablist" aria-label="Slide indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === current}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-primary-400'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="text-white/60 text-xs font-mono hidden sm:block">
          {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
