import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { FiExternalLink, FiFileText, FiAward, FiCpu, FiDollarSign, FiBook, FiGlobe, FiGitBranch } from 'react-icons/fi';

const pubStats = [
  { value: '500+', label: 'Total Publications',    Icon: FiFileText },
  { value: '200+', label: 'IEEE/ACM Papers',        Icon: FiAward },
  { value: '50+',  label: 'Active Projects',        Icon: FiCpu },
  { value: '30+',  label: 'Funded Research Grants', Icon: FiDollarSign },
];

const journals = [
  'IEEE Transactions on Communications',
  'IEEE Access',
  'ACM Computing Surveys',
  'Elsevier Expert Systems with Applications',
  'Springer Neural Computing and Applications',
  'Journal of Network and Computer Applications',
  'Future Generation Computer Systems',
  'Computers & Security',
];

export default function Publications() {
  return (
    <div>
      <SEO
        title="Publications"
        description="Browse 500+ research publications by KICS UET Lahore in IEEE, ACM, Elsevier and Springer — covering AI, cybersecurity, IoT, and software engineering."
        breadcrumbs={[{ label: 'Research', url: '/research-areas' }, { label: 'Publications', url: '/publications' }]}
      />
      <PageHero
        title="Publications"
        subtitle="KICS researchers publish cutting-edge work in top-tier international journals and conferences."
        breadcrumbs={[{ label: 'Research' }, { label: 'Publications' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-14">
              {pubStats.map((s, i) => (
                <div key={s.label} className="card p-5 sm:p-6 text-center group" style={{ animationDelay: `${i*80}ms` }}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <s.Icon size={20} className="text-primary-600 group-hover:text-white transition-colors duration-300 sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">{s.value}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimateOnScroll animation="reveal-left">
              <h3 className="section-title text-xl sm:text-2xl mb-4 sm:mb-6">Publication Venues</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                KICS researchers regularly publish in leading international venues. Our work appears in:
              </p>
              <ul className="space-y-2">
                {journals.map(j => (
                  <li key={j} className="flex items-center gap-2 text-slate-600 text-sm py-2 border-b border-slate-100 last:border-0">
                    <span className="text-cyan-500">◆</span> {j}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="reveal-right">
              <h3 className="section-title text-xl sm:text-2xl mb-4 sm:mb-6">Access Our Research</h3>
              <div className="space-y-4">
                {[
                  { name: 'IEEE Xplore',       desc: 'Browse KICS papers published in IEEE journals and conference proceedings.', url: 'https://ieeexplore.ieee.org',                                Icon: FiBook },
                  { name: 'Google Scholar',    desc: 'Find all KICS publications and citation metrics on Google Scholar.',          url: 'https://scholar.google.com',                              Icon: FiGlobe },
                  { name: 'KICS Official Portal', desc: 'Download full publication list directly from the KICS website.',           url: 'https://kics.edu.pk/web/research-technology/publications/', Icon: FiFileText },
                  { name: 'ResearchGate',      desc: 'Connect with KICS researchers and access their full profiles.',               url: 'https://researchgate.net',                                Icon: FiGitBranch },
                ].map(item => (
                  <a key={item.name} href={item.url} target="_blank" rel="noreferrer"
                    className="card p-4 flex items-start gap-4 group block">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <item.Icon size={18} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-800 group-hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                        {item.name} <FiExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
