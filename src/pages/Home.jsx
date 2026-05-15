import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  FiBell, FiArrowRight, FiCalendar, FiBookOpen, FiAward, FiGlobe, FiUsers,
  FiCpu, FiZap, FiGitBranch, FiMonitor,
} from 'react-icons/fi';
import AnimateOnScroll from '../components/AnimateOnScroll';
import useCounter from '../hooks/useCounter';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import {
  announcements, researchAreas, newsItems, collaborators,
} from '../data/siteData';

/* ── Stats ────────────────────────────────────────────────── */
const kicsStats = [
  { Icon: FiCalendar, value: 22,   suffix: '+', label: 'Years of Excellence',     color: 'from-primary-700 to-primary-500' },
  { Icon: FiBookOpen, value: 500,  suffix: '+', label: 'Research Publications',   color: 'from-cyan-700 to-cyan-500' },
  { Icon: FiAward,    value: 25,   suffix: '+', label: 'Specialized Labs',         color: 'from-primary-800 to-primary-600' },
  { Icon: FiGlobe,    value: 50,   suffix: '+', label: 'Industry Partners',        color: 'from-cyan-600 to-cyan-400' },
  { Icon: FiUsers,    value: 1000, suffix: '+', label: 'Professionals Trained',    color: 'from-primary-600 to-primary-400' },
  { Icon: FiMonitor,  value: 17,   suffix: '+', label: 'ICOSST Editions',          color: 'from-cyan-800 to-cyan-600' },
];

const StatItem = memo(function StatItem({ Icon, value, suffix, label, color, index }) {
  const { count, ref } = useCounter(value);
  return (
    <div
      ref={ref}
      className="group flex flex-col items-center text-center cursor-default"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon circle */}
      <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-2.5 sm:mb-3 md:mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
        <Icon size={18} className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </div>
      {/* Number */}
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tabular-nums leading-none">
        {count.toLocaleString()}{suffix}
      </span>
      {/* Label */}
      <span className="text-primary-200 text-xs sm:text-sm font-medium mt-1.5 sm:mt-2 leading-snug max-w-[100px] sm:max-w-[120px]">
        {label}
      </span>
    </div>
  );
});

/* ── Announcements Ticker ─────────────────────────────────── */
const Announcements = memo(function Announcements() {
  const doubled = [...announcements, ...announcements];
  return (
    <div className="bg-primary-900 border-b-2 border-primary-600 flex items-stretch overflow-hidden">
      <div className="flex-shrink-0 flex items-center gap-2 bg-primary-600 px-4 py-2.5 z-10">
        <FiBell size={14} className="animate-pulse text-white" />
        <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">Latest</span>
      </div>
      <div className="flex-1 overflow-hidden marquee-wrap">
        <div className="marquee-inner flex animate-marquee whitespace-nowrap py-2.5">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center text-white/85 text-sm mx-10">
              <span className="text-primary-300 mr-2.5 text-xs">&#9670;</span>{item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

/* ── Stats Bar ───────────────────────────────────────────── */
const StatsBar = memo(function StatsBar() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 bg-primary-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateOnScroll animation="reveal">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-primary-300 font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs mb-2 sm:mb-3 block">By The Numbers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3">KICS at a Glance</h2>
            <div className="w-14 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full mx-auto" />
            <p className="text-primary-200 mt-4 text-sm max-w-xl mx-auto">
              Two decades of applied research, innovation, and technology excellence at UET Lahore.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {kicsStats.map((item, i) => (
            <AnimateOnScroll key={item.label} animation="reveal" delay={i * 80}>
              <StatItem {...item} index={i} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom divider line with text */}
        <AnimateOnScroll animation="reveal" delay={300}>
          <div className="mt-12 pt-8 border-t border-primary-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-300">
            <span className="flex items-center gap-2"><FiAward size={12} className="text-cyan-400" /> IEEE Technical Collaborator</span>
            <span className="w-px h-4 bg-primary-600 hidden sm:block" />
            <span className="flex items-center gap-2"><FiGlobe size={12} className="text-cyan-400" /> 20+ Countries Represented</span>
            <span className="w-px h-4 bg-primary-600 hidden sm:block" />
            <span className="flex items-center gap-2"><FiBookOpen size={12} className="text-cyan-400" /> Indexed in IEEE Xplore &amp; ACM DL</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

/* ── About Strip ─────────────────────────────────────────── */
const aboutItems = [
  { Icon: FiCpu,       label: 'Applied Research',     desc: 'Real-world impact through collaborative, industry-aligned R&D.' },
  { Icon: FiZap,       label: 'Technology Transfer',  desc: 'Commercializing innovations through our Technology Incubation Center.' },
  { Icon: FiGitBranch, label: 'Human Capital',        desc: 'Training the next generation of technologists via professional programs.' },
  { Icon: FiGlobe,     label: 'Global Collaboration', desc: 'Partnerships with IEEE, Huawei, MIT, HEC, and government bodies.' },
];

const AboutStrip = memo(function AboutStrip() {
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
              <Link to="/about" className="btn-primary">Learn More</Link>
              <Link to="/director-message" className="inline-flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-primary-600 transition-colors">
                Director's Message <FiArrowRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {aboutItems.map((item) => (
                <div key={item.label} className="card p-5 group">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-3 transition-colors duration-300">
                    <item.Icon size={20} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5">{item.label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

/* ── Research Section ────────────────────────────────────── */
const ResearchSection = memo(function ResearchSection() {
  return (
    <section className="py-20 bg-primary-50" id="research">
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
              <article className="card group h-full flex flex-col">
                <div className="relative h-44 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={area.image}
                    alt={area.title}
                    width="400"
                    height="220"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=220&fit=crop'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-primary-600 transition-colors">{area.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{area.desc}</p>
                  <Link to="/research-areas" className="inline-flex items-center gap-1 mt-4 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors group/link">
                    Explore <FiArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Link to="/research-areas" className="btn-primary">View All Labs &amp; Centers</Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

/* ── Director Quote ──────────────────────────────────────── */
const DirectorQuote = memo(function DirectorQuote() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll animation="reveal-left">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title mb-4">Director's Message</h2>
            <div className="divider" />
            <blockquote className="border-l-4 border-primary-500 pl-6 leading-relaxed text-lg mb-6 bg-primary-50 p-6 rounded-r-xl">
              <span className="text-slate-900 font-bold text-xl block mb-3">
                "KICS is on a fast track to become a premier research and advanced technology organization in Pakistan.
              </span>
              <span className="text-slate-600 text-base italic">
                Today, KICS is recognized as one of the leading computer science research centers in the country."
              </span>
            </blockquote>
            <p className="text-slate-900 font-bold">Prof. Dr. Hafiz Shahzad Asif</p>
            <p className="text-primary-600 text-sm">Director, KICS — UET Lahore</p>
            <Link to="/director-message" className="btn-primary mt-6">Read Full Message</Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right">
            <div className="space-y-4">
              {[
                { title: 'Vision', text: 'To be a globally recognized center of excellence in computer science research and technology innovation, contributing to national development.' },
                { title: 'Mission', text: 'To conduct high-impact applied research, develop cutting-edge technologies, and forge industry-academia partnerships that drive innovation.' },
                { title: 'Values', text: 'Integrity, innovation, collaboration, and impact — creating an open culture of curiosity and a relentless pursuit of excellence.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-primary-100 shadow-card hover:shadow-card-hover transition-shadow">
                  <h4 className="text-primary-600 font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

/* ── News Section ────────────────────────────────────────── */
const NewsSection = memo(function NewsSection() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1, 4);
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="eyebrow">Latest Updates</span>
              <h2 className="section-title">News &amp; Events</h2>
              <div className="divider mt-3" />
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
              All News <FiArrowRight />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-6">
          <AnimateOnScroll animation="reveal-left" className="lg:col-span-3">
            <Link to="/news" className="card group block h-full">
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=450&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                <span className="absolute top-4 left-4 badge">{featured.category}</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-600 font-semibold">{featured.date}</span>
                <h3 className="font-bold text-slate-800 text-xl mt-1 mb-2 group-hover:text-primary-600 transition-colors">{featured.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
              </div>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right" className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((item, i) => (
              <Link to="/news" key={i} className="card group flex gap-4 p-4 items-start">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="80"
                    height="80"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=80&h=80&fit=crop'; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary-600 font-semibold">{item.date}</span>
                  <h4 className="font-bold text-slate-800 text-sm mt-0.5 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

/* ── Collaborators ───────────────────────────────────────── */
const CollabSection = memo(function CollabSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="eyebrow">Partners &amp; Allies</span>
            <h2 className="section-title">Our Collaborations</h2>
            <div className="divider-center mt-3" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="reveal-scale">
          <div className="flex flex-wrap justify-center gap-4">
            {collaborators.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                title={c.name}
                className="bg-white rounded-xl px-6 py-4 flex flex-col items-center justify-center shadow-card border border-primary-100 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-300 transition-all duration-300 min-w-[120px] group cursor-pointer"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  width="90"
                  height="36"
                  className="max-h-9 max-w-[90px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="text-slate-500 text-xs mt-2 font-medium group-hover:text-primary-600 transition-colors">{c.name}</span>
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

/* ── CTA Banner — Waseda-style: dark green with pattern ──── */
const CTABanner = memo(function CTABanner() {
  return (
    <section className="py-16 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll animation="reveal-scale">
          <span className="text-primary-300 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">Join KICS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Innovate Together?
          </h2>
          <p className="text-white/75 mb-8 text-base sm:text-lg">
            Whether you are a researcher, student, or industry partner — KICS offers the environment
            and resources to turn bold ideas into impactful technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg text-sm"
            >
              Get in Touch
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:bg-white/10 hover:border-white"
            >
              View Open Positions
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="KICS — Al-Khwarizmi Institute of Computer Science at UET Lahore. Leading applied research in AI, cybersecurity, IoT, software engineering and more."
        breadcrumbs={[]}
      />
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
