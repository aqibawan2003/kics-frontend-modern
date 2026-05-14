import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { workshops } from '../data/siteData';
import { FiCalendar, FiTag } from 'react-icons/fi';
import { useState } from 'react';

const types = ['All', 'Summit', 'Workshop', 'Conference'];

export default function Workshops() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? workshops : workshops.filter(w => w.type === filter);

  return (
    <div>
      <PageHero
        title="Workshops & Seminars"
        subtitle="Hands-on training, expert seminars, and professional development events at KICS."
        breadcrumbs={[{ label: 'Events' }, { label: 'Workshops' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-10">
              {types.map(t => (
                <button key={t} onClick={() => setFilter(t)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filter === t ? 'bg-navy text-white shadow-card' : 'bg-slate-100 text-slate-600 hover:bg-navy/10'
                  }`}>
                  {t}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((ws, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="card group h-full flex flex-col">
                  {ws.image && (
                    <div className="relative h-44 overflow-hidden">
                      <img src={ws.image} alt={ws.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={e => { e.target.parentElement.style.display='none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge">{ws.type}</span>
                      {ws.status === 'upcoming' && <span className="badge bg-green-100 text-green-700">Upcoming</span>}
                    </div>
                    <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-gold transition-colors">{ws.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">
                      <FiCalendar size={11} /> {ws.date}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{ws.description}</p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:text-gold transition-colors">
                      <FiTag size={13} /> Learn More →
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars */}
      <section className="py-16 bg-hero-gradient bg-dot-pattern" id="seminars">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="reveal-scale">
            <span className="eyebrow">Knowledge Exchange</span>
            <h2 className="section-title-white mb-4">Seminars &amp; Guest Talks</h2>
            <div className="divider-center" />
            <p className="text-white/65 mb-8 max-w-xl mx-auto">
              KICS regularly hosts expert seminars, guest lectures, and panel discussions featuring
              leading researchers and industry practitioners from Pakistan and around the world.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left mt-8">
              {[
                { icon: '🎙️', title: 'Guest Lectures', desc: 'Renowned academics and industry leaders share their expertise.' },
                { icon: '🔬', title: 'Research Talks', desc: 'KICS researchers present their latest findings and work-in-progress.' },
                { icon: '🤝', title: 'Panel Discussions', desc: 'Multi-stakeholder discussions on critical technology policy issues.' },
              ].map(item => (
                <div key={item.title} className="card-dark rounded-xl p-5 border border-white/12">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4 className="text-white font-bold text-sm mb-1.5">{item.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
