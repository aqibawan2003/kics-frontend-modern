import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { researchCategories, researchAreas, collaborators } from '../data/siteData';

export default function ResearchAreas() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <SEO
        title="Research Areas"
        description="Explore KICS's 25+ specialized labs in AI, cybersecurity, IoT, software systems, power engineering, and industrial automation at UET Lahore."
        breadcrumbs={[{ label: 'Research', url: '/research-areas' }, { label: 'Research Areas', url: '/research-areas' }]}
      />
      <PageHero
        title="Research Areas"
        subtitle="Discover our 25+ specialized labs and centers driving innovation across five technology domains."
        breadcrumbs={[{ label: 'Research' }, { label: 'Research Areas' }]}
      />

      {/* Featured areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="eyebrow">Focus Areas</span>
              <h2 className="section-title">Technology Domains</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 70}>
                <div className="card group h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={area.image} alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={e => { e.target.src = `https://placehold.co/400x200/4a1209/fae3de?text=${encodeURIComponent(area.title)}`; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{area.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{area.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Labs by category */}
      <section className="py-16 bg-slate-50">
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
            {researchCategories.map((cat, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? 'bg-navy text-white shadow-card'
                    : 'bg-white text-slate-600 hover:bg-navy/8 border border-slate-200'
                }`}>
                {cat.category}
              </button>
            ))}
          </div>

          {/* Selected category */}
          {researchCategories.map((cat, ci) => (
            <div key={ci} className={activeTab === ci ? 'block' : 'hidden'}>
              <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 mb-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-xl text-white">{cat.category}</h3>
                </div>
                <p className="text-white/70 text-sm">{cat.labs.length} specialized labs in this domain</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.labs.map((lab, li) => (
                  <AnimateOnScroll key={li} delay={li * 60}>
                    <div className="card p-5 group hover:border-gold border border-transparent transition-colors">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                          {lab.short}
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors leading-snug">{lab.name}</h4>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-white" id="collaborations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">Global Reach</span>
              <h2 className="section-title">Research Collaborations</h2>
              <div className="divider-center mt-3" />
              <p className="text-slate-500 max-w-2xl mx-auto text-sm mt-4">
                KICS maintains active research partnerships with leading national and international organizations,
                enabling cutting-edge collaborative research and technology development.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="reveal-scale">
            <div className="flex flex-wrap justify-center gap-4">
              {collaborators.map(c => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  title={c.name}
                  className="bg-white rounded-xl px-6 py-4 shadow-card border border-primary-100 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-300 transition-all duration-300 flex flex-col items-center justify-center min-w-[120px] group cursor-pointer"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-10 max-w-[90px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={e => { e.target.style.display='none'; }}
                  />
                  <span className="text-slate-500 text-xs mt-2 font-medium group-hover:text-primary-600 transition-colors">{c.name}</span>
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
              journals and conferences. Explore our full publication record on the official KICS portal.
            </p>
            <a href="https://kics.edu.pk/web/research-technology/publications/" target="_blank" rel="noreferrer"
              className="btn-primary">
              View Publications →
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
