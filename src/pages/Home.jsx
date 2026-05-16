import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiBell, FiArrowRight, FiCalendar, FiBookOpen, FiAward, FiGlobe, FiUsers,
  FiCpu, FiZap, FiGitBranch, FiMonitor, FiMapPin, FiTrendingUp, FiTarget,
  FiPhone, FiMail, FiNavigation,
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
      <span className="text-white/90 text-xs sm:text-sm font-medium mt-1.5 sm:mt-2 leading-snug max-w-[100px] sm:max-w-[120px]">
        {label}
      </span>
    </div>
  );
});

/* ── Announcements Ticker ─────────────────────────────────── */
const Announcements = memo(function Announcements() {
  const doubled = [...announcements, ...announcements];
  return (
    <div className="bg-[#0f1e3d] border-b-2 border-primary-600 flex items-stretch overflow-hidden">
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
    <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 bg-[#0f1e3d]">
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
            <p className="text-white/90 mt-4 text-sm max-w-xl mx-auto">
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
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating accent circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1" />
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
    <section className="relative py-20 bg-[#0f1e3d] overflow-hidden">
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white" id="about">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-r from-primary-500/5 to-cyan-500/5 transform -skew-y-2 origin-top-left" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center">
          <AnimateOnScroll animation="reveal-left">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title mb-4">Al-Khwarizmi Institute of Computer Science</h2>
            <div className="divider" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Named after the legendary 9th-century mathematician Muhammad ibn Musa Al-Khwarizmi — whose
              work laid the foundations of algebra and algorithmic thinking — KICS was established in 2002
              at the University of Engineering &amp; Technology (UET) Lahore.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {aboutItems.map((item) => (
                <div key={item.label} className="card p-4 sm:p-5 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-300">
                    <item.Icon size={18} className="text-primary-600 group-hover:text-white transition-colors duration-300 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1 sm:mb-1.5 leading-snug">{item.label}</h4>
                  <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-cyan-50/30 to-primary-50" id="research">
      {/* Curved divider top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-10 sm:h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#ffffff"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title mb-3">Our Research Areas</h2>
            <div className="divider-center" />
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {researchAreas.map((area, i) => (
            <AnimateOnScroll key={area.title} animation="reveal" delay={i * 80}>
              <article className="card group h-full flex flex-col">
                <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden" style={{ aspectRatio: '16/9' }}>
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
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-2 group-hover:text-primary-600 transition-colors leading-snug">{area.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed flex-1">{area.desc}</p>
                  <Link to="/research-areas" className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-primary-600 text-xs sm:text-sm font-semibold hover:text-primary-700 transition-colors group/link">
                    Explore <FiArrowRight size={12} className="transition-transform group-hover/link:translate-x-1 sm:w-[13px] sm:h-[13px]" />
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-8 sm:mt-10">
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <AnimateOnScroll animation="reveal-left">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title mb-4">Director's Message</h2>
            <div className="divider" />
            <blockquote className="relative border-l-4 sm:border-l-8 border-primary-600 pl-4 sm:pl-6 leading-relaxed text-sm sm:text-base md:text-lg mb-6 bg-gradient-to-r from-primary-50 to-transparent p-4 sm:p-6 rounded-r-xl shadow-lg">
              <div className="absolute -left-2 sm:-left-3 top-4 sm:top-6 w-4 h-4 sm:w-6 sm:h-6 bg-primary-600 rounded-full" />
              <span className="text-slate-900 font-bold text-base sm:text-lg md:text-xl block mb-2 sm:mb-3">
                "KICS is on a fast track to become a premier research and advanced technology organization in Pakistan.
              </span>
              <span className="text-slate-600 text-sm sm:text-base italic">
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
                { title: 'Vision', text: 'To be a globally recognized center of excellence in computer science research and technology innovation, contributing to national development.', icon: FiTarget, color: 'from-blue-500 to-cyan-500' },
                { title: 'Mission', text: 'To conduct high-impact applied research, develop cutting-edge technologies, and forge industry-academia partnerships that drive innovation.', icon: FiTrendingUp, color: 'from-purple-500 to-pink-500' },
                { title: 'Values', text: 'Integrity, innovation, collaboration, and impact — creating an open culture of curiosity and a relentless pursuit of excellence.', icon: FiAward, color: 'from-green-500 to-teal-500' },
              ].map((item) => (
                <div key={item.title} className="group relative bg-white rounded-2xl p-6 border-2 border-primary-100 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-primary-600 font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-cyan-50 via-primary-50 to-white overflow-hidden">
      {/* Diagonal accent top */}
      <div className="absolute top-0 right-0 w-full h-24 sm:h-32 md:h-40 bg-gradient-to-l from-cyan-100/50 to-transparent transform skew-y-3 origin-top-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="eyebrow">Latest Updates</span>
              <h2 className="section-title">News &amp; Events</h2>
              <div className="divider mt-3" />
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group">
              All News <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          <AnimateOnScroll animation="reveal-left" className="lg:col-span-3">
            <Link to="/news" className="group block h-full relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 sm:hover:-translate-y-2">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-primary-600 to-cyan-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">{featured.category}</span>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="text-[10px] sm:text-xs text-primary-600 font-semibold flex items-center gap-1">
                    <FiCalendar size={10} className="sm:w-[11px] sm:h-[11px]" /> {featured.date}
                  </span>
                  <h3 className="font-bold text-slate-800 text-base sm:text-lg md:text-xl mt-1 mb-2 group-hover:text-primary-600 transition-colors leading-snug">{featured.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{featured.excerpt}</p>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="reveal-right" className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            {rest.map((item, i) => (
              <Link to="/news" key={i} className="group bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl flex gap-3 sm:gap-4 p-3 sm:p-4 items-start border-2 border-transparent hover:border-primary-200 hover:bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all">
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
                  <span className="text-xs text-primary-600 font-semibold flex items-center gap-1">
                    <FiCalendar size={10} /> {item.date}
                  </span>
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
  // Duplicate logos for seamless infinite loop (only need 2x for -50% translateX)
  const duplicatedLogos = [...collaborators, ...collaborators];

  // FIX: Adjust marquee speed based on network connection
  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && (connection.effectiveType === '3g' || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      const marqueeTrack = document.querySelector('.marquee-track');
      if (marqueeTrack) {
        marqueeTrack.style.animationDuration = '40s'; // Slower on slow networks
      }
    }
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-[#0f1e3d] overflow-hidden">
      {/* Radial dot pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Animated glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Partners &amp; Collaborations</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">Proudly Collaborating With Leading Organizations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-primary-400 rounded-full mx-auto" />
            <p className="text-white/90 text-sm max-w-2xl mx-auto mt-6">
              Working alongside global tech giants, academic institutions, and government bodies to drive innovation and technological advancement.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Infinite Marquee with CSS Mask for Fade */}
        <div
          className="marquee-container overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="marquee-track flex gap-6 sm:gap-8 items-center py-4">
            {duplicatedLogos.map((collab, idx) => (
              <a
                key={idx}
                href={collab.url}
                target="_blank"
                rel="noreferrer"
                title={collab.name}
                className="group flex-shrink-0 relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-center border border-white/20 hover:border-cyan-400/60 hover:bg-white/20 transition-all duration-300 min-w-[130px] sm:min-w-[160px] cursor-pointer"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-primary-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

                {/* Logo */}
                <div className="relative flex flex-col items-center gap-2.5">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="h-10 sm:h-14 w-auto object-contain filter grayscale brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-white/70 text-[10px] sm:text-xs font-semibold group-hover:text-cyan-400 transition-colors text-center whitespace-nowrap">
                    {collab.name}
                  </span>
                </div>
              </a>
            ))}

            {/* Partnership Badge - In Marquee */}
            <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500/20 to-primary-500/20 backdrop-blur-md border-2 border-cyan-400/40 rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <FiAward className="text-cyan-400" size={18} />
                <span className="text-white font-bold text-sm sm:text-base">50+ INDUSTRY PARTNERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership stats - Professional Cards */}
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
            {[
              { value: '50+', label: 'Industry Partners', icon: FiUsers },
              { value: '20+', label: 'Countries', icon: FiGlobe },
              { value: '100+', label: 'Joint Projects', icon: FiTarget },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-cyan-400/60 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-primary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

                <div className="relative text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-primary-500/30 border border-cyan-400/40 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/80 transition-all duration-300 shadow-lg">
                    <stat.icon size={24} className="text-cyan-400 sm:w-7 sm:h-7" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-2 leading-none">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Divider on desktop (not on last item) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2" />
                )}
              </div>
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
    <section className="relative py-20 bg-[#0f1e3d]">
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Don't Miss Out</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Upcoming Events</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-primary-400 rounded-full mt-3" />
            </div>
            <Link to="/conferences" className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
              All Events <FiArrowRight />
            </Link>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="relative group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${event.color} text-white flex flex-col items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
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
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Large decorative quote mark */}
      <div className="absolute top-20 left-10 text-[200px] font-serif text-primary-100 leading-none select-none">"</div>
      <div className="absolute bottom-20 right-10 text-[200px] font-serif text-primary-100 leading-none select-none rotate-180">"</div>
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
              <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group border-l-4 border-primary-500">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-base leading-relaxed mb-6 relative z-10">
                  {t.text}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-3 border-primary-200 group-hover:border-primary-400 transition-colors object-cover flex-shrink-0"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + t.name; }}
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-primary-600 text-xs font-semibold mt-0.5">{t.role}</p>
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
    <section className="relative py-20 sm:py-24 bg-[#0f1e3d] overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Innovation Hub</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              Featured Student Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-primary-400 to-cyan-400 rounded-full mx-auto" />
            <p className="text-white/90 text-sm max-w-2xl mx-auto mt-6">
              Showcasing groundbreaking innovations from KICS labs and incubation center.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-primary-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                      loading="lazy"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071224] via-primary-900/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg backdrop-blur-sm">
                        <FiAward size={10} className="inline mr-1" /> {project.award}
                      </span>
                    </div>
                  </div>
                  <div className="relative bg-white/95 backdrop-blur-sm p-6">
                    <span className="text-xs text-cyan-600 font-bold uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-bold text-slate-900 text-base mt-2 mb-2 group-hover:text-cyan-600 transition-colors leading-snug">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold group-hover:text-cyan-700 transition-colors cursor-pointer">
                      <FiTarget size={12} />
                      <span>View Details</span>
                      <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(37,99,235,1) 1.5px, transparent 1.5px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border-4 border-white shadow-xl hover:shadow-2xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-2" style={{ aspectRatio: '4/3' }}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'; }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      <h4 className="font-bold text-white text-sm">{photo.title}</h4>
                    </div>
                    <p className="text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{photo.description}</p>
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
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Floating accent circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-title">Find KICS</h2>
            <div className="divider-center mt-3" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-4">
              Located at the heart of UET Lahore, one of Pakistan's leading engineering universities.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info */}
          <AnimateOnScroll animation="reveal-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-cyan-600 rounded-full" />
                  Get in Touch
                </h3>

                {/* Address */}
                <div className="group relative bg-white rounded-2xl p-6 mb-4 border-2 border-primary-100 hover:border-primary-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <FiMapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Address</h4>
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
                <div className="group relative bg-white rounded-2xl p-6 mb-4 border-2 border-cyan-100 hover:border-cyan-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-50 to-transparent rounded-bl-full" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <FiPhone size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Phone</h4>
                      <a href="tel:+924299029450" className="text-primary-600 hover:text-primary-700 font-bold text-sm sm:text-base md:text-lg transition-colors">
                        +92 42 99029450
                      </a>
                      <p className="text-slate-500 text-xs mt-1">Mon - Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group relative bg-white rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-full" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <FiMail size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Email</h4>
                      <a href="mailto:info@kics.edu.pk" className="text-primary-600 hover:text-primary-700 font-bold text-sm sm:text-base md:text-lg transition-colors">
                        info@kics.edu.pk
                      </a>
                      <p className="text-slate-500 text-xs mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary-50 to-cyan-50 rounded-2xl p-6 border-2 border-primary-100 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FiNavigation size={16} className="text-primary-600" />
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/contact" className="btn-outline text-xs justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600">
                    Contact Form
                  </Link>
                  <Link to="/jobs" className="btn-outline text-xs justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600">
                    Career Portal
                  </Link>
                  <Link to="/e-rozgaar" className="btn-outline text-xs justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600">
                    Apply Now
                  </Link>
                  <Link to="/conferences" className="btn-outline text-xs justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600">
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Google Map */}
          <AnimateOnScroll animation="reveal-right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-white ring-2 sm:ring-4 ring-primary-100 h-64 sm:h-80 md:h-96 lg:h-[500px]">
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
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 flex items-center gap-2 sm:gap-3 border-2 border-primary-200 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-600 to-cyan-600 flex items-center justify-center shadow-lg animate-pulse-slow flex-shrink-0">
                  <FiMapPin size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm md:text-base truncate">KICS, UET Lahore</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs">Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

/* ── CTA Banner — WOW Section with premium effects ──── */
const CTABanner = memo(function CTABanner() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#0f1e3d] overflow-hidden">
      {/* Subtle animated background particles - matching footer style */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute bottom-32 left-[25%] w-1 h-1 bg-cyan-300 rounded-full animate-pulse animation-delay-4000" />
        <div className="absolute bottom-20 right-[30%] w-2 h-2 bg-primary-300 rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimateOnScroll animation="reveal-scale">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6 shadow-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-semibold text-xs uppercase tracking-wider">Join KICS Today</span>
          </div>

          {/* Main heading with gradient */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-primary-200 animate-gradient">
              Ready to Innovate Together?
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/80 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            Whether you are a researcher, student, or industry partner — KICS offers the environment
            and resources to turn <span className="text-cyan-400 font-semibold">bold ideas</span> into <span className="text-cyan-400 font-semibold">impactful technology</span>.
          </p>

          {/* CTA Buttons with glow effects */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 px-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative">Get in Touch</span>
              <FiArrowRight className="relative group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link
              to="/jobs"
              className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-105 shadow-xl"
            >
              <span>View Open Positions</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-8 sm:pt-10 border-t border-white/10">
            {[
              { icon: FiUsers, value: '1000+', label: 'Professionals Trained' },
              { icon: FiAward, value: '500+', label: 'Research Papers' },
              { icon: FiGlobe, value: '50+', label: 'Global Partners' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon size={16} className="text-cyan-400 sm:w-5 sm:h-5" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
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
