import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiBell, FiArrowRight, FiCalendar, FiBookOpen, FiAward, FiGlobe, FiUsers } from 'react-icons/fi';
import AnimateOnScroll from '../components/AnimateOnScroll';
import useCounter from '../hooks/useCounter';
import {
  heroSlides, announcements, stats, researchAreas,
  newsItems, collaborators
} from '../data/siteData';

/* ── Animated counter ────────────────────────────────────── */
const kicsStats = [
  { Icon: FiCalendar, value: 22,   suffix: '+',  label: 'Years of Excellence' },
  { Icon: FiBookOpen, value: 500,  suffix: '+',  label: 'Research Publications' },
  { Icon: FiAward,    value: 25,   suffix: '+',  label: 'Labs & Centers',       center: true },
  { Icon: FiGlobe,    value: 50,   suffix: '+',  label: 'Industry Partners' },
  { Icon: FiUsers,    value: 1000, suffix: '+',  label: 'Professionals Trained' },
];

function StatItem({ Icon, value, suffix, label, center, index }) {
  const { count, ref } = useCounter(value);
  return (
    <div
      ref={ref}
      className={[
        'reveal-scale flex flex-col items-center text-center px-5 py-8 rounded-2xl transition-all duration-300 cursor-default group',
        center
          ? 'bg-white shadow-2xl -translate-y-5 border border-slate-100 z-10 relative'
          : 'hover:bg-white hover:shadow-xl hover:-translate-y-3',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Circular icon badge */}
      <div className="w-20 h-20 rounded-full bg-navy/10 group-hover:bg-navy flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:shadow-gold">
        <Icon size={30} className="text-navy group-hover:text-white transition-colors duration-300" />
      </div>
      {/* Animated number */}
      <span className="text-4xl font-heading font-bold text-navy tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      {/* Label */}
      <span className="text-slate-500 text-sm font-medium mt-2 leading-tight">{label}</span>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((next) => {
    setFading(true);
    setTimeout(() => { setIdx(next); setFading(false); }, 400);
  }, []);
  const next = useCallback(() => go((idx + 1) % heroSlides.length), [idx, go]);
  const prev = useCallback(() => go((idx - 1 + heroSlides.length) % heroSlides.length), [idx, go]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[idx];

  return (
    <section className="relative h-screen min-h-[620px] max-h-[900px] overflow-hidden bg-navy-dark">
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms]"
            style={{ transform: i === idx ? 'scale(1)' : 'scale(1.05)' }}
            onError={e => { e.target.src = 'https://via.placeholder.com/1920x900/0b1f4b/ffffff?text=KICS'; }} />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className={`max-w-2xl transition-all duration-500 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <span className="badge mb-5 inline-block">{slide.badge}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
              {slide.title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">Discover KICS <FiArrowRight /></Link>
              <Link to="/research-areas" className="btn-outline">Our Research</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      {[
        { action: prev, label: 'Previous', Icon: FiChevronLeft, pos: 'left-4' },
        { action: next, label: 'Next',     Icon: FiChevronRight, pos: 'right-4' },
      ].map(({ action, label, Icon, pos }) => (
        <button key={label} onClick={action} aria-label={label}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/20 text-white flex items-center justify-center hover:bg-gold transition-all duration-200 hover:scale-110`}>
          <Icon size={20} />
        </button>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Slide ${i+1}`}
            className={`transition-all duration-300 rounded-full ${i === idx ? 'w-8 h-2.5 bg-gold' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.25em] rotate-90 mb-4">SCROLL</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

/* ── Announcements ───────────────────────────────────────── */
function Announcements() {
  const doubled = [...announcements, ...announcements];
  return (
    <div className="bg-navy border-b-2 border-gold flex items-stretch overflow-hidden">
      <div className="flex-shrink-0 flex items-center gap-2 bg-gold px-4 py-2.5 z-10">
        <FiBell size={14} className="animate-pulse text-white" />
        <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">Latest</span>
      </div>
      <div className="flex-1 overflow-hidden marquee-wrap">
        <div className="marquee-inner flex animate-marquee whitespace-nowrap py-2.5">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center text-white/85 text-sm mx-10">
              <span className="text-gold mr-2.5 text-xs">◆</span>{item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Stats bar ───────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="reveal-scale">
          <div className="text-center mb-10">
            <span className="eyebrow">By The Numbers</span>
            <h2 className="section-title">KICS at a Glance</h2>
            <div className="divider-center mt-3" />
          </div>
        </AnimateOnScroll>
        {/* Card row — center item elevated like IU stats section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
          {kicsStats.map((item, i) => (
            <StatItem key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About strip ─────────────────────────────────────────── */
function AboutStrip() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll animation="reveal-left">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title mb-4">Al-Khwarizmi Institute of Computer Science</h2>
            <div className="divider" />
            <p className="text-slate-600 leading-relaxed mb-4">
              Named after the legendary 9th-century mathematician Muhammad ibn Musa Al-Khwarizmi — whose
              work laid the foundations of algebra and algorithmic thinking — KICS was established in 2002
              at the University of Engineering &amp; Technology (UET) Lahore.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              KICS serves as a premier applied research institution, bridging academia and industry through
              high-impact research, technology transfer, and professional development. With over 25 specialized
              labs and centers, KICS drives Pakistan's digital transformation across AI, cybersecurity,
              smart cities, embedded systems, and enterprise software.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-navy">Learn More</Link>
              <Link to="/director-message" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
                Director's Message <FiArrowRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Applied Research', icon: '🔬', desc: 'Real-world impact through collaborative, industry-aligned R&D.' },
                { label: 'Technology Transfer', icon: '🚀', desc: 'Commercializing innovations through our Technology Incubation Center.' },
                { label: 'Human Capital', icon: '🎓', desc: 'Training the next generation of technologists via professional programs.' },
                { label: 'Global Collaboration', icon: '🌐', desc: 'Partnerships with IEEE, Huawei, MIT, HEC, and government bodies.' },
              ].map((item, i) => (
                <div key={i} className="card p-5 group">
                  <span className="text-3xl mb-3 block group-hover:animate-float">{item.icon}</span>
                  <h4 className="font-heading font-bold text-navy text-sm mb-1.5">{item.label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── Research ────────────────────────────────────────────── */
function ResearchSection() {
  return (
    <section className="py-20 bg-slate-50" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title mb-3">Our Research Areas</h2>
            <div className="divider-center" />
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => (
            <AnimateOnScroll key={area.title} animation="reveal" delay={i * 80}>
              <div className="card group h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={area.image} alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => { e.target.src = `https://via.placeholder.com/400x250/0b1f4b/ffffff?text=${encodeURIComponent(area.title)}`; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute top-3 right-3 text-2xl">{area.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{area.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{area.desc}</p>
                  <Link to="/research-areas" className="inline-flex items-center gap-1 mt-4 text-navy text-sm font-semibold hover:text-gold transition-colors group/link">
                    Explore <FiArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Link to="/research-areas" className="btn-navy">View All Labs &amp; Centers</Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── Director quote ──────────────────────────────────────── */
function DirectorQuote() {
  return (
    <section className="py-20 bg-hero-gradient bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll animation="reveal-left">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title-white mb-4">Director's Message</h2>
            <div className="divider" />
            <blockquote className="border-l-4 border-gold pl-6 leading-relaxed text-lg mb-6">
              <span className="text-yellow-300 font-bold text-xl block mb-3">
                "KICS is on a fast track to become a premier research and advanced technology organization in Pakistan.
              </span>
              <span className="text-white/80 text-base italic">
                Today, KICS is recognized as one of the leading computer science research centers in the country."
              </span>
            </blockquote>
            <p className="text-white font-bold">Prof. Dr. Hafiz Shahzad Asif</p>
            <p className="text-gold text-sm">Director, KICS — UET Lahore</p>
            <Link to="/director-message" className="btn-primary mt-6">Read Full Message</Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right">
            <div className="space-y-4">
              {[
                { title: 'Vision', text: 'To be a globally recognized center of excellence in computer science research and technology innovation, contributing to national development.' },
                { title: 'Mission', text: 'To conduct high-impact applied research, develop cutting-edge technologies, and forge industry-academia partnerships that drive innovation.' },
                { title: 'Values', text: 'Integrity, innovation, collaboration, and impact — creating an open culture of curiosity and a relentless pursuit of excellence.' },
              ].map(item => (
                <div key={item.title} className="card-dark rounded-xl p-5 border border-white/12">
                  <h4 className="text-gold font-bold font-heading mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── News ────────────────────────────────────────────────── */
function NewsSection() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1, 4);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="eyebrow">Latest Updates</span>
              <h2 className="section-title">News &amp; Events</h2>
              <div className="divider mt-3" />
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
              All News <FiArrowRight />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <AnimateOnScroll animation="reveal-left" className="lg:col-span-3">
            <Link to="/news" className="card group block h-full">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img src={featured.image} alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={e => { e.target.src = 'https://via.placeholder.com/800x350/0b1f4b/ffffff?text=KICS+News'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="absolute top-4 left-4 badge">{featured.category}</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-gold font-semibold">{featured.date}</span>
                <h3 className="font-heading font-bold text-navy text-xl mt-1 mb-2 group-hover:text-gold transition-colors">{featured.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* List */}
          <AnimateOnScroll animation="reveal-right" className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((item, i) => (
              <Link to="/news" key={i} className="card group flex gap-4 p-4 items-start">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => { e.target.src = 'https://via.placeholder.com/80x80/0b1f4b/ffffff?text=K'; }} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gold font-semibold">{item.date}</span>
                  <h4 className="font-heading font-bold text-navy text-sm mt-0.5 leading-snug group-hover:text-gold transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── Collaborators ───────────────────────────────────────── */
function CollabSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="eyebrow">Partners & Allies</span>
            <h2 className="section-title">Our Collaborations</h2>
            <div className="divider-center mt-3" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="reveal-scale">
          <div className="flex flex-wrap justify-center gap-4">
            {collaborators.map(c => (
              <div key={c.name}
                className="bg-white rounded-xl px-6 py-4 flex items-center justify-center shadow-card border border-slate-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 min-w-[120px] group">
                {c.logo ? (
                  <img src={c.logo} alt={c.name}
                    className="max-h-9 max-w-[90px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                ) : null}
                <span className={`text-navy font-bold text-sm ${c.logo ? 'hidden' : ''}`}>{c.name}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── CTA Banner ──────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll animation="reveal-scale">
          <span className="eyebrow">Join KICS</span>
          <h2 className="section-title-white text-3xl md:text-4xl mb-4">
            Ready to Innovate Together?
          </h2>
          <p className="text-white/65 mb-8 text-base sm:text-lg">
            Whether you're a researcher, student, or industry partner — KICS offers the environment
            and resources to turn bold ideas into impactful technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <Link to="/jobs" className="btn-outline">View Open Positions</Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Announcements />
      <StatsBar />
      <AboutStrip />
      <ResearchSection />
      <DirectorQuote />
      <NewsSection />
      <CollabSection />
      <CTABanner />
    </>
  );
}
