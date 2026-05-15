import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { conferences } from '../data/siteData';
import { FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Conferences() {
  return (
    <div>
      <SEO
        title="Conferences"
        description="KICS organizes ICOSST and other IEEE conferences on open-source systems, AI, cybersecurity, and more. Past and upcoming events at UET Lahore."
        breadcrumbs={[{ label: 'Events' }, { label: 'Conferences', url: '/conferences' }]}
      />
      <PageHero
        title="Conferences"
        subtitle="KICS hosts and co-organizes international conferences to advance open science and technology."
        breadcrumbs={[{ label: 'Events' }, { label: 'Conferences' }]}
      />

      {/* ICOSST feature */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="bg-hero-gradient rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <span className="badge mb-4 inline-block">Flagship Conference</span>
                  <h2 className="text-3xl font-heading font-bold text-white mb-4 leading-tight">
                    International Conference on Open Source Systems &amp; Technologies
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed mb-6">
                    ICOSST is KICS's premier annual international conference, bringing together researchers,
                    practitioners, and policymakers to share advances in open-source systems,
                    software, AI, cybersecurity, cloud computing, and more. Co-organized with the
                    IEEE Computer &amp; Communication Societies Lahore Section (R10).
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/icosst" className="btn-primary">Explore ICOSST</Link>
                    <a href="http://icosst.kics.edu.pk" target="_blank" rel="noreferrer"
                      className="btn-outline flex items-center gap-2">Official Site <FiExternalLink size={14} /></a>
                  </div>
                </div>
                <div className="relative h-56 lg:h-auto">
                  <img src="https://kics.edu.pk/web/wp-content/uploads/2024/12/banner-1.jpg"
                    alt="ICOSST" className="w-full h-full object-cover"
                    onError={e => { e.target.src='https://via.placeholder.com/600x400/1a3a6b/c8972a?text=ICOSST'; }} />
                  <div className="absolute inset-0 bg-navy/30" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Conference list */}
          <div className="mt-14">
            <AnimateOnScroll>
              <h3 className="section-title mb-8">All Conferences</h3>
            </AnimateOnScroll>
            <div className="space-y-5">
              {conferences.map((conf, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div className="card p-6 flex flex-col sm:flex-row sm:items-center gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center text-white font-heading font-bold text-xs text-center leading-tight flex-shrink-0 group-hover:shadow-gold transition-shadow">
                      ICOSST
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-navy group-hover:text-gold transition-colors">{conf.full}</h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {conf.date}</span>
                        <span className="flex items-center gap-1.5"><FiMapPin size={13} /> {conf.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`badge ${conf.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                        {conf.status === 'upcoming' ? 'Upcoming' : 'Concluded'}
                      </span>
                      {conf.url !== '#' && (
                        <a href={conf.url} target="_blank" rel="noreferrer"
                          className="w-9 h-9 rounded-lg bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors">
                          <FiExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll animation="reveal-scale">
            <span className="eyebrow">Participate</span>
            <h2 className="section-title mb-4">Submit Your Research</h2>
            <p className="text-slate-500 mb-8">
              ICOSST welcomes original research papers on open-source systems, AI applications,
              cybersecurity, cloud, networks, and related technology domains.
            </p>
            <a href="http://icosst.kics.edu.pk" target="_blank" rel="noreferrer" className="btn-navy">
              Visit Conference Portal
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
