import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiBookOpen, FiCpu } from 'react-icons/fi';
import { heroSlides } from '../data/siteData';

const stats = [
  { icon: FiAward,    value: '22+', label: 'Years' },
  { icon: FiBookOpen, value: '500+', label: 'Publications' },
  { icon: FiCpu,      value: '25+', label: 'Labs' },
];

export default function Hero() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible]     = useState(false);

  /* Entrance animation on mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Auto-cycle slides */
  const next = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + 1) % heroSlides.length);
      setAnimating(false);
    }, 400);
  }, [animating]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-amber-50"
      style={{ minHeight: 'clamp(580px, 90vh, 880px)' }}
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Grid dots pattern ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ════════════════════════════════
              LEFT COLUMN — Text & CTA
          ════════════════════════════════ */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-primary-700 text-xs font-bold uppercase tracking-widest">
                {slide.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 mb-6 transition-all duration-500 ${
                animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.title.split(' ').map((word, i, arr) =>
                i >= arr.length - 2 ? (
                  <span key={i} className="text-primary-600"> {word}</span>
                ) : (
                  <span key={i}>{i === 0 ? word : ' ' + word}</span>
                )
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-500 delay-75 ${
                animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 justify-center lg:justify-start mb-10 transition-all duration-500 delay-150 ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-7 py-3.5 rounded-full shadow-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Discover KICS
                <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 font-semibold px-7 py-3.5 rounded-full border border-slate-200 hover:border-primary-300 hover:text-primary-700 hover:-translate-y-0.5 transition-all duration-200 shadow-sm text-sm"
              >
                Our Research
              </Link>
            </div>

            {/* Mini stats row */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Icon size={14} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm leading-none">{value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════
              RIGHT COLUMN — Image
          ════════════════════════════════ */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-lg">

              {/* Glow ring behind image */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary-300/50 to-amber-200/50 rounded-3xl blur-2xl" />

              {/* Floating card decoration — top-left */}
              <div className="absolute -top-5 -left-5 z-20 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-primary-100">
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                  <FiAward size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xs leading-none">Top Ranked</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">Research Institute</p>
                </div>
              </div>

              {/* Floating card decoration — bottom-right */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2 border border-primary-100">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <FiBookOpen size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xs leading-none">500+ Papers</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">IEEE &amp; ACM Indexed</p>
                </div>
              </div>

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float">
                <div
                  className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width="600"
                    height="420"
                    className="w-full h-[300px] sm:h-[380px] object-cover"
                    onError={e => {
                      e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=420&fit=crop';
                    }}
                  />
                </div>
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-950/40 to-transparent" />
              </div>

              {/* Slide dots */}
              <div className="flex justify-center gap-2 mt-5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 400); }}
                    aria-label={`Slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? 'w-6 h-2 bg-primary-600'
                        : 'w-2 h-2 bg-primary-200 hover:bg-primary-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
