import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { staffMembers } from '../data/siteData';
import { FiMail, FiSearch } from 'react-icons/fi';

const departments = ['All', ...new Set(staffMembers.map(s => s.dept))];

export default function Staff() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const visible = staffMembers.filter(s =>
    (filter === 'All' || s.dept === filter) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) ||
     s.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <SEO
        title="Our Staff"
        description="Meet the researchers, engineers, and professionals at KICS UET Lahore — the team driving innovation in AI, cybersecurity and enterprise software."
        breadcrumbs={[{ label: 'About', url: '/about' }, { label: 'Staff', url: '/staff' }]}
      />
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated researchers, engineers, and professionals who make KICS a center of excellence."
        breadcrumbs={[{ label: 'About', to: '/about' }, { label: 'Staff' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1 max-w-sm">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search by name or title…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map(d => (
                  <button key={d} onClick={() => setFilter(d)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      filter === d ? 'bg-navy text-white shadow-card' : 'bg-slate-100 text-slate-600 hover:bg-navy/10'
                    }`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map((person, i) => (
              <AnimateOnScroll key={person.name} delay={i * 50}>
                <div className="card p-5 group text-center h-full flex flex-col">
                  <div className="w-20 h-20 rounded-full bg-hero-gradient mx-auto mb-4 flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    👤
                  </div>
                  <h3 className="font-heading font-bold text-navy text-sm mb-0.5 group-hover:text-gold transition-colors">{person.name}</h3>
                  <p className="text-gold text-xs font-semibold">{person.title}</p>
                  <span className="badge-navy mt-2 mb-3 mx-auto">{person.dept}</span>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{person.bio}</p>
                  <a href={`mailto:${person.email}`}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 text-navy text-xs font-medium hover:text-gold transition-colors">
                    <FiMail size={12} /> {person.email}
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <FiSearch size={44} className="mx-auto mb-3 text-slate-300" />
              <p className="text-lg font-medium">No staff members found</p>
              <p className="text-sm mt-1">Try a different search or filter</p>
            </div>
          )}

          <AnimateOnScroll>
            <p className="text-center text-slate-400 text-sm mt-10">
              Showing {visible.length} of {staffMembers.length} staff members. For the complete directory visit{' '}
              <a href="https://www.kics.edu.pk/people/all_staff" target="_blank" rel="noreferrer"
                className="text-navy hover:text-gold transition-colors underline">
                kics.edu.pk/people/all_staff
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
