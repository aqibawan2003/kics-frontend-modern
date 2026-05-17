import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiWifi, FiCpu, FiCode, FiZap, FiSettings, FiTarget } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { researchCategories, researchAreas } from '../data/siteData';

const CATEGORY_ICONS = {
  wifi: FiWifi, cpu: FiCpu, code: FiCode,
  zap: FiZap, settings: FiSettings, target: FiTarget,
};

export default function ResearchAreas() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <SEO
        title="Research Areas"
        description="Explore KICS's 25+ specialized labs in AI, cybersecurity, IoT, software systems, power engineering, and industrial automation at UET Lahore."
        breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Research Areas', url: '/research-areas' }]}
      />
      <PageHero
        title="Research Areas"
        subtitle="Discover our 25+ specialized labs and centers driving innovation across five technology domains."
        breadcrumbs={[{ label: 'Research' }, { label: 'Research Areas' }]}
      />

      {/* Featured areas */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="eyebrow">Focus Areas</span>
              <h2 className="section-title">Technology Domains</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {researchAreas.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 70}>
                <div className="card group h-full flex flex-col">
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img src={area.image} alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={e => { e.target.src = `https://placehold.co/400x200/1e40af/ffffff?text=${encodeURIComponent(area.title)}`; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-primary-800 text-sm sm:text-base mb-2 group-hover:text-cyan-500 transition-colors">{area.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{area.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Labs by category */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">Our Infrastructure</span>
              <h2 className="section-title">Specialized Labs &amp; Centers</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {researchCategories.map((cat, i) => {
              const Icon = CATEGORY_ICONS[cat.icon];
              return (
                <button key={i} onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-primary-600 text-white shadow-card'
                      : 'bg-white text-slate-600 hover:bg-primary-50 border border-slate-200'
                  }`}>
                  {Icon && <Icon size={13} />}
                  {cat.category}
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    activeTab === i ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>{cat.labs.length}</span>
                </button>
              );
            })}
          </div>

          {/* Active category — fade in on tab change */}
          <div key={activeTab} className="animate-fadeIn">
            {(() => {
              const cat = researchCategories[activeTab];
              const Icon = CATEGORY_ICONS[cat.icon];
              return (
                <>
                  <div className={`bg-gradient-to-r ${cat.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 mb-5 sm:mb-6 text-white`}>
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && (
                        <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={18} />
                        </div>
                      )}
                      <h3 className="font-bold text-lg sm:text-xl text-white">{cat.category}</h3>
                    </div>
                    <p className="text-white/70 text-sm">{cat.labs.length} specialized labs in this domain</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {cat.labs.map((lab, li) => (
                      <AnimateOnScroll key={li} delay={li * 60}>
                        <div className="card p-4 sm:p-5 group hover:border-amber-600 border border-transparent transition-colors">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                              {lab.short}
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary-800 text-sm group-hover:text-cyan-500 transition-colors leading-snug">{lab.name}</h4>
                            </div>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0B1833] via-blue-950 to-[#0B1833]" id="collaborations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10 sm:mb-14">
              <span className="eyebrow">Global Reach</span>
              <h2 className="section-title text-white mb-3">Research Collaborations</h2>
              <div className="divider-center mt-3" />
              <p className="text-blue-200/70 text-sm max-w-2xl mx-auto mt-4">
                KICS maintains active research partnerships with leading national and international organizations,
                enabling cutting-edge collaborative research and technology development.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="reveal-scale">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {[
                { name: 'IEEE',         logo: '/logos/ieee.png',         link: 'https://ieee.org' },
                { name: 'Huawei',       logo: '/logos/huawei.svg',       link: 'https://huawei.com' },
                { name: 'MIT',          logo: '/logos/mit.svg',          link: 'https://mit.edu' },
                { name: 'UET Lahore',   logo: '/logos/uet-lahore.png',   link: 'https://uet.edu.pk' },
                { name: 'HEC Pakistan', logo: '/logos/hec.png',          link: 'https://hec.gov.pk' },
                { name: 'IGNITE',       logo: '/logos/ignite.gif',       link: 'https://ignite.org.pk' },
                { name: 'Rescue 1122',  logo: '/logos/rescue-1122.png',  link: 'https://rescue.gov.pk' },
                { name: 'Punjab Govt',  logo: '/logos/punjab-govt.svg',  link: 'https://punjab.gov.pk' },
                { name: 'Sports Board', logo: '/logos/sports-board.png', link: 'https://sportsboard.punjab.gov.pk' },
              ].map(c => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${c.name}`}
                  className="group bg-white/8 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-amber-400/40 rounded-2xl px-5 py-5 sm:px-7 sm:py-6 flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/50 cursor-pointer"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="h-10 sm:h-12 w-auto max-w-[90px] sm:max-w-[110px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    onError={e => { e.currentTarget.style.opacity = '0.2'; }}
                  />
                  <span className="text-blue-200/60 group-hover:text-white text-xs mt-3 font-semibold text-center leading-tight transition-colors duration-300 whitespace-nowrap">
                    {c.name}
                  </span>
                </a>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Publications placeholder */}
      <section className="py-16 bg-primary-900 bg-dot-pattern" id="projects">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="reveal-scale">
            <span className="text-primary-300 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">Academic Output</span>
            <h2 className="section-title-white mb-4">Publications &amp; Projects</h2>
            <div className="divider-center" />
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              KICS researchers have authored 500+ publications in top-tier IEEE, ACM, and Elsevier
              journals and conferences. Explore our comprehensive publication database.
            </p>
            <Link to="/publications" className="btn-primary">
              View All Publications →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
