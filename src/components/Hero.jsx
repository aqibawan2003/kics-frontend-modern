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

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((i) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 450);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(520px, 78vh, 720px)' }}
    >
      {/* ── Rich warm background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/60 to-primary-50" />

      {/* ── Decorative blobs ── */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/3 w-72 h-72 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* ── Floating geometric shapes ── */}
      <div className="absolute top-10 left-[42%] w-14 h-14 border-2 border-primary-200/70 rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-14 left-[36%] w-8 h-8 bg-amber-300/50 rounded-lg rotate-45 pointer-events-none" />
      <div className="absolute top-16 right-[14%] w-5 h-5 bg-primary-400/50 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[28%] w-10 h-10 border-2 border-amber-300/60 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[30%] w-3 h-3 bg-primary-300/60 rounded-full pointer-events-none" />

      {/* ── Main content ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex items-center py-12 sm:py-16"
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
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-700 to-primary-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-primary">
                <FiStar size={10} />
                {slide.badge}
              </span>
            </div>

            {/* Heading with gradient on second line */}
            <h1
              className={`font-extrabold leading-[1.1] text-slate-900 mb-5 transition-all duration-500 text-4xl sm:text-5xl lg:text-[3.2rem] ${
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
                      style={{ backgroundImage: 'linear-gradient(135deg, #8a2818, #c94f3a, #d97706)' }}
                    >
                      {words.slice(mid).join(' ')}
                    </span>
                  </>
                );
              })()}
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
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full shadow-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm"
                style={{ background: 'linear-gradient(135deg, #8a2818, #c94f3a)' }}
              >
                Discover KICS
                <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/research-areas"
                className="inline-flex items-center gap-2 bg-white hover:bg-primary-50 text-primary-800 font-semibold px-7 py-3.5 rounded-full border-2 border-primary-200 hover:border-primary-500 hover:text-primary-700 hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm"
              >
                Our Research
              </Link>
            </div>

            {/* Stats row with dividers */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 justify-center lg:justify-start">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={label} className="flex items-center gap-2.5">
                  {i > 0 && <span className="hidden sm:block w-px h-8 bg-primary-200" />}
                  <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-extrabold text-sm leading-none">{value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{label}</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/50 to-amber-300/40 rounded-3xl rotate-3 scale-105" />
              <div className="absolute inset-0 bg-white/60 rounded-3xl -rotate-1 scale-[1.02]" />

              {/* Outer glow */}
              <div className="absolute -inset-5 bg-gradient-to-br from-primary-300/30 via-amber-200/20 to-primary-200/30 rounded-[2rem] blur-2xl pointer-events-none" />

              {/* Floating badge — top-left */}
              <div className="absolute -top-6 -left-6 z-20 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 border border-primary-100 animate-bounce-gentle">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #8a2818, #c94f3a)' }}
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
                className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 border border-amber-100 animate-bounce-gentle"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-sm">
                  <FiBookOpen size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold text-xs leading-none">500+ Papers</p>
                  <p className="text-amber-600 text-[10px] mt-0.5 font-semibold">IEEE · ACM · Elsevier</p>
                </div>
              </div>

              {/* Side pill badge — right edge */}
              <div
                className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 rounded-xl px-2.5 py-3 shadow-lg hidden lg:flex flex-col items-center gap-1"
                style={{ background: 'linear-gradient(180deg, #4a1209, #8a2818)' }}
              >
                <FiUsers size={13} className="text-primary-300" />
                <p className="text-white font-extrabold text-sm leading-none">1000+</p>
                <p className="text-primary-300 text-[9px] font-semibold uppercase tracking-wide" style={{ writingMode: 'vertical-rl' }}>Trained</p>
              </div>

              {/* Main image — floating */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float">
                <div className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width="600"
                    height="400"
                    className="w-full h-[260px] sm:h-[320px] object-cover"
                    onError={e => {
                      e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop';
                    }}
                  />
                </div>
                {/* Bottom gradient overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-950/50 to-transparent" />
              </div>

              {/* Slide dot indicators */}
              <div className="flex justify-center gap-2 mt-5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? 'w-7 h-2.5 bg-primary-600'
                        : 'w-2.5 h-2.5 bg-primary-200 hover:bg-primary-400'
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
