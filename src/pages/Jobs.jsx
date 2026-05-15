import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { sampleJobs, departments } from '../data/siteData';
import { FiBriefcase, FiClock, FiChevronDown, FiChevronUp, FiSearch, FiCpu, FiCode, FiBookOpen } from 'react-icons/fi';

function JobCard({ job, index }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateOnScroll delay={index * 60}>
      <div className="card overflow-hidden">
        <button className="w-full flex items-start sm:items-center gap-4 p-6 text-left group" onClick={() => setOpen(!open)}>
          <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center flex-shrink-0">
            <FiBriefcase size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-navy group-hover:text-gold transition-colors">{job.title}</h3>
            <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-slate-500">
              <span className="badge-navy">{job.dept}</span>
              <span className="flex items-center gap-1"><FiClock size={10} /> {job.type}</span>
              <span className="text-gold font-semibold">{job.deadline}</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-2 text-slate-400">
            {open ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </div>
        </button>
        {open && (
          <div className="px-6 pb-6 border-t border-slate-100 pt-5 animate-fadeIn">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.description}</p>
            <h4 className="font-semibold text-navy text-sm mb-2">Requirements:</h4>
            <ul className="space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span> {req}
                </li>
              ))}
            </ul>
            <a href="mailto:info@kics.edu.pk?subject=Job Application"
              className="btn-navy mt-5 inline-flex">Apply Now</a>
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}

export default function Jobs() {
  const [dept, setDept] = useState('All');
  const visible = dept === 'All' ? sampleJobs : sampleJobs.filter(j => j.dept === dept);

  return (
    <div>
      <SEO
        title="Jobs at KICS"
        description="Explore career opportunities at KICS — research, engineering, and academic roles at UET Lahore's leading computer science research institute."
        breadcrumbs={[{ label: 'Jobs', url: '/jobs' }]}
      />
      <PageHero
        title="Jobs at KICS"
        subtitle="Join our team of researchers, engineers, and educators building Pakistan's technological future."
        breadcrumbs={[{ label: 'Jobs' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Intro cards */}
          <AnimateOnScroll>
            <div className="grid sm:grid-cols-3 gap-5 mb-12">
              {[
                { Icon: FiCpu,      title: 'Research Roles',     desc: 'Research Associates, Post-docs, and Lab Managers.' },
                { Icon: FiCode,     title: 'Engineering Roles',  desc: 'Software, Network, and Embedded Systems Engineers.' },
                { Icon: FiBookOpen, title: 'Academic Roles',     desc: 'Instructors and trainers for professional development.' },
              ].map(item => (
                <div key={item.title} className="card p-5 text-center group">
                  <div className="w-12 h-12 rounded-full bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <item.Icon size={22} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Department filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-8">
              {departments.slice(0, 10).map(d => (
                <button key={d} onClick={() => setDept(d)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    dept === d ? 'bg-navy text-white' : 'bg-slate-100 text-slate-600 hover:bg-navy/10'
                  }`}>
                  {d}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Job listings */}
          <div className="space-y-4">
            {visible.map((job, i) => <JobCard key={job.title} job={job} index={i} />)}
            {visible.length === 0 && (
              <div className="text-center py-12 text-slate-400">
                <FiSearch size={40} className="mx-auto mb-3 text-slate-300" />
                <p>No positions found for this department.</p>
              </div>
            )}
          </div>

          {/* Note */}
          <AnimateOnScroll>
            <div className="mt-10 p-5 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <p className="text-slate-600 text-sm">
                For all current openings and dynamic listings, visit the official KICS Jobs portal at{' '}
                <a href="https://kics.edu.pk/web/jobs/" target="_blank" rel="noreferrer"
                  className="text-navy font-semibold hover:text-gold transition-colors underline">
                  kics.edu.pk/web/jobs/
                </a>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
