import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { services, clients } from '../data/siteData';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

export default function Services() {
  return (
    <div>
      <PageHero
        title="Services"
        subtitle="KICS offers world-class technology solutions, ERP systems, AI services, and professional training."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="eyebrow">What We Offer</span>
              <h2 className="section-title">Technology Solutions &amp; Services</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimateOnScroll key={svc.title} delay={i * 70}>
                <div className="card p-6 group h-full flex flex-col">
                  <span className="text-4xl mb-4 block group-hover:animate-float">{svc.icon}</span>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                        <FiCheck size={14} className="text-gold flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ERP highlight */}
      <section className="py-16 bg-hero-gradient bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="reveal-left">
              <span className="eyebrow">Flagship Product</span>
              <h2 className="section-title-white mb-4">Campus Solution 360</h2>
              <div className="divider" />
              <p className="text-white/70 leading-relaxed mb-6">
                Campus Solution 360 is KICS's comprehensive university management ERP system,
                designed and developed for higher-education institutions across Pakistan.
                It covers student information management, HR, finance, library, hostel, and more.
              </p>
              <ul className="space-y-3 mb-8">
                {['Student Information System', 'Human Resources & Payroll', 'Financial Management',
                  'Library Management System', 'Examination & Results', 'Online Admission Portal'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <FiCheck size={11} className="text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Request a Demo</Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="reveal-right">
              <div className="card p-6">
                <h4 className="font-heading font-bold text-navy text-lg mb-4">Why Choose KICS Services?</h4>
                {[
                  { icon: '🏛️', title: 'Academic Credibility', desc: 'Backed by UET Lahore, one of Pakistan\'s top engineering universities.' },
                  { icon: '🔬', title: 'Research-Driven', desc: 'Solutions built on cutting-edge research with continuous innovation.' },
                  { icon: '🤝', title: 'Long-term Partnership', desc: 'We provide full lifecycle support from deployment to maintenance.' },
                  { icon: '💰', title: 'Cost Effective', desc: 'Competitive pricing with world-class quality and local expertise.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 mb-4 last:mb-0">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-navy text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="eyebrow">Trusted By</span>
              <h2 className="section-title">Our Clients</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="reveal-scale">
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map(client => (
                <div key={client}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-slate-700 font-medium text-sm hover:border-gold hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                  {client}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="text-center mt-10">
              <Link to="/contact" className="btn-navy">Become a Client</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
