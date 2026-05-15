import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { newsItems } from '../data/siteData';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const categories = ['All', 'Achievement', 'Partnership', 'Appointment', 'Event', 'Program', 'Conference'];

const newsletters = [
  { issue: 'Issue 12', date: 'Q1 2026', title: 'KICS Times — Spring 2026', desc: 'AquaTech wins NVC, new director appointment, and AI Summit highlights.' },
  { issue: 'Issue 11', date: 'Q4 2025', title: 'KICS Times — Winter 2025', desc: 'ICOSST 2025 recap, new lab launches, and industry partnerships.' },
  { issue: 'Issue 10', date: 'Q3 2025', title: 'KICS Times — Fall 2025', desc: 'Research publications, Summer Tech program outcomes, and more.' },
];

export default function News() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? newsItems : newsItems.filter(n => n.category === filter);

  return (
    <div>
      <SEO
        title="News & Events"
        description="Latest news, achievements, partnerships, and events from KICS UET Lahore. Research breakthroughs, appointments, and upcoming conferences."
        breadcrumbs={[{ label: 'News & Events', url: '/news' }]}
      />
      <PageHero
        title="News & Events"
        subtitle="Stay up to date with the latest achievements, partnerships, and events at KICS."
        breadcrumbs={[{ label: "What's New" }, { label: 'News & Events' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filter === c ? 'bg-navy text-white shadow-card' : 'bg-slate-100 text-slate-600 hover:bg-navy/10'
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 60}>
                <div className="card group flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={e => { e.target.src='https://via.placeholder.com/400x200/0b1f4b/c8972a?text=KICS+News'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <span className="absolute top-3 left-3 badge">{item.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-gold font-semibold flex items-center gap-1.5 mb-2">
                      <FiCalendar size={10} /> {item.date}
                    </span>
                    <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-gold transition-colors leading-snug">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{item.excerpt}</p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:text-gold transition-colors group/link">
                      Read More <FiArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50" id="newsletter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">KICS Times</span>
              <h2 className="section-title">Newsletter</h2>
              <div className="divider-center mt-3" />
              <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
                The KICS Times newsletter keeps you informed about research breakthroughs, events,
                achievements, and opportunities at KICS.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {newsletters.map((nl, i) => (
              <AnimateOnScroll key={nl.issue} delay={i * 80}>
                <div className="card p-5 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-navy">{nl.issue}</span>
                    <span className="text-xs text-slate-400">{nl.date}</span>
                  </div>
                  <h4 className="font-heading font-bold text-navy mb-2 group-hover:text-gold transition-colors">{nl.title}</h4>
                  <p className="text-slate-500 text-sm">{nl.desc}</p>
                  <button className="mt-4 text-navy text-sm font-semibold hover:text-gold transition-colors flex items-center gap-1.5">
                    📥 Download PDF
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Media placeholder */}
      <section className="py-16 bg-primary-900 bg-dot-pattern" id="media">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="reveal-scale">
            <span className="text-primary-300 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">Media</span>
            <h2 className="section-title-white mb-4">Photo &amp; Video Gallery</h2>
            <div className="divider-center" />
            <p className="text-primary-100 mb-8">
              Browse photos and videos from KICS events, conferences, workshops, and research activities.
            </p>
            <a href="https://facebook.com/kics.official" target="_blank" rel="noreferrer" className="btn-primary">
              Visit Our Facebook Page
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
