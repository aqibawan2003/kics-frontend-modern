import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBookOpen, FiCpu, FiUsers, FiStar } from 'react-icons/fi';
import { heroSlides } from '../data/siteData';

const stats = [
  { icon: FiAward,    value: '22+',   label: 'Years' },
  { icon: FiBookOpen, value: '500+',  label: 'Publications' },
  { icon: FiCpu,      value: '25+',   label: 'Labs' },
  { icon: FiUsers,    value: '1000+', label: 'Trained' },
];

export default function Hero() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible]     = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((i) => {
    if (animating) return;
    setAnimating(true);
    setImageLoaded(false); // Reset for new image
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 450);
  }, [animating]);

  // FIX: Stable next function that doesn't recreate interval
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // FIX: Add keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
      if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  useEffect(() => {
    const id = setInterval(nextSlide, 5500);
    return () => clearInterval(id);
  }, [nextSlide]);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(380px, 65vh, 680px)' }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero slider showcasing KICS highlights"
    >
      {/* ACCESSIBILITY: Screen reader announcement */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {heroSlides.length}: {slide.title}
      </div>
      {/* ── Deep navy-to-blue background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1833] via-blue-900 to-blue-800" />

      {/* ── Decorative blobs ── */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/3 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Floating geometric shapes ── */}
      <div className="absolute top-10 left-[42%] w-14 h-14 border-2 border-blue-400/30 rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-14 left-[36%] w-8 h-8 bg-amber-400/20 rounded-lg rotate-45 pointer-events-none" />
      <div className="absolute top-16 right-[14%] w-5 h-5 bg-amber-400/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[28%] w-10 h-10 border-2 border-blue-400/30 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[30%] w-3 h-3 bg-amber-300/40 rounded-full pointer-events-none" />

      {/* ── Main content ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex items-center py-8 sm:py-12 md:py-16"
        style={{ minHeight: 'inherit' }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">

          {/* ══════════════════════════════
              LEFT — Text & CTA
          ══════════════════════════════ */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Gradient badge */}
            <div className={`inline-flex items-center gap-2 mb-5 transition-all duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                <FiStar size={10} />
                {slide.badge}
              </span>
            </div>

            {/* Heading with gradient on second line */}
            <h1
              className={`font-extrabold leading-[1.1] text-white mb-4 sm:mb-5 transition-all duration-500 text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] ${
                animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              {(() => {
                const words = slide.title.split(' ');
                const mid   = Math.ceil(words.length / 2);
                return (
                  <>
                    {words.slice(0, mid).join(' ')}
                    <br />
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #D97706)' }}
                    >
                      {words.slice(mid).join(' ')}
                    </span>
                  </>
                );
              })()}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 transition-all duration-500 delay-75 ${
                animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm"
                style={{ background: 'linear-gradient(135deg, #B45309, #D97706)' }}
              >
                Discover KICS
                <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-white/30 hover:border-white/60 hover:-translate-y-1 transition-all duration-300 text-sm backdrop-blur-sm"
              >
                Our Research
              </Link>
            </div>

            {/* Stats row with dividers */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 justify-center lg:justify-start">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={label} className="flex items-center gap-2.5">
                  {i > 0 && <span className="hidden sm:block w-px h-8 bg-blue-600/50" />}
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm leading-none">{value}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT — Image panel
          ══════════════════════════════ */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full max-w-[480px]">

              {/* Rotated decorative frame layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-blue-600/30 rounded-3xl rotate-3 scale-105" />
              <div className="absolute inset-0 bg-white/10 rounded-3xl -rotate-1 scale-[1.02]" />

              {/* Outer glow */}
              <div className="absolute -inset-5 bg-gradient-to-br from-amber-400/20 via-blue-500/15 to-amber-300/10 rounded-[2rem] blur-2xl pointer-events-none" />

              {/* Floating badge — top-left */}
              <div className="absolute -top-4 sm:-top-6 -left-3 sm:-left-6 z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 border border-amber-200 animate-bounce-gentle hidden xs:flex">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #B45309, #D97706)' }}
                >
                  <FiAward size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold text-xs leading-none">Est. 2002</p>
                  <p className="text-primary-600 text-[10px] mt-0.5 font-semibold">22 Years Strong</p>
                </div>
              </div>

              {/* Floating badge — bottom-right */}
              <div
                className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 z-20 bg-white rounded-xl sm:rounded-2xl shadow-xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 border border-blue-100 animate-bounce-gentle hidden xs:flex"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-sm">
                  <FiBookOpen size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold text-xs leading-none">500+ Papers</p>
                  <p className="text-blue-600 text-[10px] mt-0.5 font-semibold">IEEE · ACM · Elsevier</p>
                </div>
              </div>

              {/* Side pill badge — right edge */}
              <div
                className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 rounded-xl px-2.5 py-3 shadow-lg hidden lg:flex flex-col items-center gap-1"
                style={{ background: 'linear-gradient(180deg, #0B1833, #1d4ed8)' }}
              >
                <FiUsers size={13} className="text-amber-300" />
                <p className="text-white font-extrabold text-sm leading-none">1000+</p>
                <p className="text-amber-300 text-[9px] font-semibold uppercase tracking-wide" style={{ writingMode: 'vertical-rl' }}>Trained</p>
              </div>

              {/* Main image — floating */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white animate-float">
                {/* Loading skeleton - shown until image loads */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 animate-shimmer" />
                )}

                <div className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width="600"
                    height="400"
                    fetchPriority={current === 0 ? "high" : "low"}
                    loading={current === 0 ? "eager" : "lazy"}
                    className={`w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={e => {
                      e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop';
                      setImageLoaded(true);
                    }}
                  />
                </div>
                {/* Bottom gradient overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-950/50 to-transparent" />
              </div>

              {/* Slide dot indicators */}
              <div
                className="flex justify-center gap-2 mt-5"
                role="group"
                aria-label="Carousel navigation"
              >
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current ? 'true' : 'false'}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? 'w-7 h-2.5 bg-amber-500'
                        : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Wave bottom divider - transitions to dark announcements bar */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-8 sm:h-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0B1833"></path>
        </svg>
      </div>
    </section>
  );
}

