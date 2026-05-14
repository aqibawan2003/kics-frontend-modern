import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { FiExternalLink, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const editions = [
  { num: '17th', year: '2023', date: 'December 2023', location: 'KICS, UET Lahore', url: 'http://icosst.kics.edu.pk/2023/' },
  { num: '15th', year: '2021', date: 'December 15, 2021', location: 'KICS, UET Lahore (Hybrid)', url: 'http://icosst.kics.edu.pk/2021/' },
  { num: '14th', year: '2020', date: 'December 16–17, 2020', location: 'KICS, UET Lahore', url: 'http://icosst.kics.edu.pk/2020/' },
];

const topics = [
  'Open Source Software & Applications', 'Artificial Intelligence & Machine Learning',
  'Cybersecurity & Information Security', 'Cloud Computing & Virtualization',
  'Embedded & Distributed Computing', 'Networks & Wireless Communication',
  'Databases & Information Systems', 'AI Applications for Healthcare',
  'IoT & Smart Systems', 'Software Engineering & Agile Methods',
];

export default function ICOSST() {
  return (
    <div>
      <PageHero
        title="ICOSST"
        subtitle="IEEE International Conference on Open Source Systems and Technologies — KICS's flagship annual conference."
        breadcrumbs={[{ label: 'Events' }, { label: 'Conferences', to: '/conferences' }, { label: 'ICOSST' }]}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="reveal-left">
              <span className="eyebrow">About the Conference</span>
              <h2 className="section-title mb-4">International Conference on Open Source Systems &amp; Technologies</h2>
              <div className="divider" />
              <p className="text-slate-600 leading-relaxed mb-4">
                ICOSST is an annual international conference organized by KICS in technical collaboration
                with the IEEE Computer &amp; Communication Societies Lahore Section (Region 10). The conference
                provides a scientific venue for researchers, practitioners, and policymakers to share
                advances in open-source systems and technologies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The conference covers a broad spectrum of topics including AI, cybersecurity, cloud computing,
                embedded systems, wireless networks, databases, and more. Accepted papers are indexed in
                IEEE Xplore and other major digital libraries.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="http://icosst.kics.edu.pk" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
                  Official Portal <FiExternalLink size={14} />
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📄', value: '200+', label: 'Papers Received (2023)' },
                  { icon: '🌍', value: '20+', label: 'Countries Represented' },
                  { icon: '🎤', value: '10+', label: 'Keynote Speakers' },
                  { icon: '📅', value: '17+', label: 'Annual Editions' },
                ].map(s => (
                  <div key={s.label} className="card p-5 text-center group hover:shadow-card-hover">
                    <span className="text-3xl block mb-2 group-hover:animate-float">{s.icon}</span>
                    <p className="text-2xl font-heading font-bold text-navy">{s.value}</p>
                    <p className="text-slate-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">Scope</span>
              <h2 className="section-title">Topics of Interest</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="reveal-scale">
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map(t => (
                <span key={t} className="bg-white border border-slate-200 text-slate-700 rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:border-gold hover:text-navy transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Past editions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">History</span>
              <h2 className="section-title">Past Editions</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {editions.map((ed, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="card p-6 group text-center">
                  <div className="w-16 h-16 rounded-full bg-hero-gradient mx-auto mb-4 flex items-center justify-center">
                    <FiAward size={24} className="text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-1">{ed.num} ICOSST</h3>
                  <p className="text-gold font-semibold text-sm mb-3">{ed.year}</p>
                  <div className="space-y-1.5 text-slate-500 text-xs mb-5">
                    <p className="flex items-center justify-center gap-1.5"><FiCalendar size={11} /> {ed.date}</p>
                    <p className="flex items-center justify-center gap-1.5"><FiMapPin size={11} /> {ed.location}</p>
                  </div>
                  <a href={ed.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:text-gold transition-colors">
                    View Proceedings <FiExternalLink size={12} />
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
