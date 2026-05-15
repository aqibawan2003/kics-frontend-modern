import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  FiBell, FiArrowRight, FiCalendar, FiBookOpen, FiAward, FiGlobe, FiUsers,
  FiCpu, FiZap, FiGitBranch, FiMonitor, FiMapPin, FiTrendingUp, FiTarget,
  FiPhone, FiMail, FiClock, FiNavigation,
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

/* ── Video Section ────────────────────────────────────────── */
const VideoSection = memo(function VideoSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="eyebrow">Discover KICS</span>
            <h2 className="section-title">Innovation in Action</h2>
            <div className="divider-center mt-3" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-4">
              Watch our journey of transforming ideas into impactful technology through cutting-edge research and industry collaboration.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="reveal-scale">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto border-4 border-white">
            {/* Placeholder for actual video - replace with your YouTube video ID */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-cyan-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-white font-semibold">KICS Overview Video</p>
                <p className="text-white/70 text-sm mt-1">Coming Soon</p>
              </div>
            </div>
            {/* Uncomment and add your video ID when ready:
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="KICS Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

/* ── Achievement Badges ───────────────────────────────────── */
const AchievementBadges = memo(function AchievementBadges() {
  const achievements = [
    { icon: '🏆', title: 'IEEE Gold Award', desc: 'Best Research Paper 2024', color: 'from-yellow-500 to-orange-500' },
    { icon: '🎖️', title: 'HEC Recognition', desc: 'Category X University', color: 'from-blue-500 to-cyan-500' },
    { icon: '⭐', title: 'NVC Winner 2026', desc: '$20K Prize', color: 'from-purple-500 to-pink-500' },
    { icon: '🌟', title: 'Top 10 Institute', desc: 'CS in Pakistan', color: 'from-green-500 to-teal-500' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-900 via-primary-800 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="text-primary-300 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">Recognition</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Awards & Achievements</h2>
            <div className="w-14 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full mx-auto mt-3" />
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 cursor-default group">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl sm:text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-white font-bold text-xs sm:text-sm mb-1">{item.title}</h4>
                <p className="text-white/70 text-[10px] sm:text-xs">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
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

/* ── Upcoming Events ──────────────────────────────────────── */
const UpcomingEvents = memo(function UpcomingEvents() {
  const events = [
    {
      date: { month: 'Jun', day: '15' },
      title: 'AI & Machine Learning Summit 2026',
      location: 'Main Auditorium, KICS',
      category: 'Conference',
      color: 'from-blue-600 to-cyan-500',
      spots: '200 seats'
    },
    {
      date: { month: 'Jul', day: '05' },
      title: 'ICOSST 2026 - Call for Papers',
      location: 'Hybrid: Virtual + Physical',
      category: 'Conference',
      color: 'from-purple-600 to-pink-500',
      spots: 'Open now'
    },
    {
      date: { month: 'Jul', day: '20' },
      title: 'IoT Security Workshop',
      location: 'Lab 3, KICS',
      category: 'Workshop',
      color: 'from-green-600 to-teal-500',
      spots: '50 seats'
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="eyebrow">Don't Miss Out</span>
              <h2 className="section-title">Upcoming Events</h2>
              <div className="divider mt-3" />
            </div>
            <Link to="/conferences" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
              All Events <FiArrowRight />
            </Link>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="card group overflow-hidden hover:shadow-2xl transition-all">
                <div className={`h-1.5 bg-gradient-to-r ${event.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${event.color} text-white flex flex-col items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <span className="text-[10px] font-semibold uppercase">{event.date.month}</span>
                      <span className="text-2xl font-bold leading-none">{event.date.day}</span>
                    </div>
                    <div className="flex-1">
                      <span className="badge text-[10px]">{event.category}</span>
                      <h3 className="font-bold text-slate-900 text-sm mt-2 leading-snug group-hover:text-primary-600 transition-colors">{event.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-slate-600 text-xs flex items-center gap-2">
                      <FiMapPin size={12} className="text-primary-600" /> {event.location}
                    </p>
                    <p className="text-slate-600 text-xs flex items-center gap-2">
                      <FiUsers size={12} className="text-primary-600" /> {event.spots}
                    </p>
                  </div>
                  <Link to="/conferences" className="btn-primary w-full text-xs justify-center">
                    Learn More <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ── Success Stories / Testimonials ───────────────────────── */
const TestimonialsSection = memo(function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Ali Hassan',
      role: 'Research Associate, MIT Media Lab',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'KICS gave me the foundation to pursue AI research at MIT. The hands-on lab experience and mentorship were invaluable.',
      rating: 5,
    },
    {
      name: 'Sara Ahmed',
      role: 'Software Engineer, Google',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'The practical exposure to real-world projects at KICS prepared me for my career at Google. Forever grateful!',
      rating: 5,
    },
    {
      name: 'Muhammad Usman',
      role: 'Founder, TechStartup (YC S23)',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'KICS\'s incubation center helped me turn my idea into a successful startup. The support was phenomenal.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">Success Stories</span>
            <h2 className="section-title">What Our Alumni Say</h2>
            <div className="divider-center mt-3" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-4">
              Hear from KICS graduates making waves in academia, industry, and entrepreneurship worldwide.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="card p-6 text-center hover:shadow-2xl transition-all group">
                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">
                  "{t.text}"
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mb-3 border-4 border-primary-100 group-hover:border-primary-300 transition-colors object-cover"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + t.name; }}
                  />
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-primary-600 text-xs font-semibold mt-1">{t.role}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ── Featured Projects ────────────────────────────────────── */
const FeaturedProjects = memo(function FeaturedProjects() {
  const projects = [
    {
      title: 'AquaTech - Smart Water Management',
      category: 'IoT & Sustainability',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      award: 'NVC 2026 Winner',
      description: 'IoT-based water quality monitoring system with real-time analytics.',
    },
    {
      title: 'CyberGuard AI',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      award: 'Best Innovation',
      description: 'ML-powered threat detection system for enterprise networks.',
    },
    {
      title: 'EduConnect Platform',
      category: 'EdTech',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      award: 'Social Impact',
      description: 'Connecting rural students with quality online education resources.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">Innovation Hub</span>
            <h2 className="section-title">Featured Student Projects</h2>
            <div className="divider-center mt-3" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-4">
              Showcasing groundbreaking innovations from KICS labs and incubation center.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="card group overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-green-500 text-white text-[10px] border-none">
                      <FiAward size={10} className="inline mr-1" /> {project.award}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary-600 font-bold uppercase tracking-wide">{project.category}</span>
                  <h3 className="font-bold text-slate-900 text-base mt-2 mb-2 group-hover:text-primary-600 transition-colors leading-snug">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 text-xs font-semibold group-hover:text-primary-700 transition-colors cursor-pointer">
                    <FiTarget size={12} />
                    <span>View Details</span>
                    <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ── Campus Life Gallery ──────────────────────────────────── */
const CampusGallery = memo(function CampusGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      title: 'Research Labs',
      description: 'State-of-the-art facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      title: 'Collaborative Spaces',
      description: 'Modern workspaces'
    },
    {
      url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop',
      title: 'Tech Events',
      description: 'Regular workshops'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      title: 'Student Projects',
      description: 'Innovation showcase'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      title: 'Team Collaboration',
      description: 'Group work sessions'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      title: 'Conference Rooms',
      description: 'ICOSST & seminars'
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">Campus Life</span>
            <h2 className="section-title">Experience KICS</h2>
            <div className="divider-center mt-3" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-4">
              Explore our world-class facilities, vibrant research environment, and collaborative spaces.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {photos.map((photo, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-sm mb-1">{photo.title}</h4>
                    <p className="text-xs text-white/90">{photo.description}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-primary">
              Explore More <FiArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
});

/* ── Interactive Map & Contact ────────────────────────────── */
const MapSection = memo(function MapSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-title">Find KICS</h2>
            <div className="divider-center mt-3" />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info */}
          <AnimateOnScroll animation="reveal-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>

                {/* Address */}
                <div className="card p-6 mb-4 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiMapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Al-Khwarizmi Institute of Computer Science (KICS)<br />
                        University of Engineering & Technology<br />
                        G.T. Road, Lahore, Punjab<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="card p-6 mb-4 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiPhone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <a href="tel:+924299029450" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                        +92 42 99029450
                      </a>
                      <p className="text-slate-500 text-xs mt-1">Mon - Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card p-6 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiMail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <a href="mailto:info@kics.edu.pk" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                        info@kics.edu.pk
                      </a>
                      <p className="text-slate-500 text-xs mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FiNavigation size={16} className="text-primary-600" />
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/contact" className="btn-outline text-xs justify-center">
                    Contact Form
                  </Link>
                  <Link to="/jobs" className="btn-outline text-xs justify-center">
                    Career Portal
                  </Link>
                  <Link to="/e-rozgaar" className="btn-outline text-xs justify-center">
                    Apply Now
                  </Link>
                  <Link to="/conferences" className="btn-outline text-xs justify-center">
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Google Map */}
          <AnimateOnScroll animation="reveal-right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8528753749445!2d74.35353831511826!3d31.578933981326868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5e9e8f48ed%3A0x5e8f8e8f8e8f8e8f!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KICS Location Map"
                />
              </div>

              {/* Floating badge on map */}
              <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-primary-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-cyan-600 flex items-center justify-center">
                  <FiMapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">KICS, UET Lahore</p>
                  <p className="text-slate-500 text-xs">Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
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
      <VideoSection />
      <StatsBar />
      <AchievementBadges />
      <AboutStrip />
      <ResearchSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <UpcomingEvents />
      <DirectorQuote />
      <NewsSection />
      <CampusGallery />
      <CollabSection />
      <MapSection />
      <CTABanner />
    </>
  );
}
