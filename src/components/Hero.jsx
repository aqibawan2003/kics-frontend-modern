import { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../data/siteData';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800" id="home">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms]"
            style={{ transform: i === current ? 'scale(1)' : 'scale(1.05)' }}
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=900&fit=crop'; }}
          />
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-primary-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div
            key={current}
            className={`max-w-3xl transition-all duration-700 ${
              transitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 text-white text-sm font-semibold shadow-xl">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              {slide.badge || 'Al-Khwarizmi Institute'}
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                {slide.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary-600/50 hover:scale-105 hover:-translate-y-1"
              >
                Discover KICS
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                Our Research
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Glassmorphism */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-2xl group"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={26} className="transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-2xl group"
        aria-label="Next slide"
      >
        <FiChevronRight size={26} className="transition-transform group-hover:translate-x-1" />
      </button>

      {/* Modern Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="group relative"
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-12 h-3 bg-gradient-to-r from-primary-400 to-cyan-400'
                  : 'w-3 h-3 bg-white/40 group-hover:bg-white/70 group-hover:scale-125'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-10 hidden md:flex flex-col items-center gap-3 text-white/60">
        <span className="text-[10px] tracking-[0.3em] font-bold rotate-90 mb-4">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent animate-pulse" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
