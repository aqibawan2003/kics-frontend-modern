import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiUser } from 'react-icons/fi';
import SEO from '../components/SEO';

export default function DirectorMessage() {
  return (
    <div>
      <SEO
        title="Director's Message"
        description="Read the Director's message from Prof. Dr. Hafiz Shahzad Asif about KICS vision, mission and Pakistan's technological future."
        breadcrumbs={[{ label: 'About', url: '/about' }, { label: "Director's Message", url: '/director-message' }]}
      />
      <PageHero
        title="Director's Message"
        subtitle="A vision for research excellence, innovation, and Pakistan's technological future."
        breadcrumbs={[{ label: 'About', to: '/about' }, { label: "Director's Message" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Profile card */}
            <AnimateOnScroll animation="reveal-left">
              <div className="card p-6 text-center sticky top-28">
                <div className="w-28 h-28 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <FiUser size={48} className="text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg">Prof. Dr. Hafiz Muhammad Shahzad Asif</h3>
                <p className="text-gold text-sm font-medium mt-1">Director, KICS</p>
                <p className="text-slate-400 text-xs mt-1">UET Lahore, Pakistan</p>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 text-left">
                  <p className="flex items-center gap-2"><FiMail size={12} className="text-primary-600 flex-shrink-0" /> director@kics.edu.pk</p>
                  <p className="flex items-center gap-2"><FiPhone size={12} className="text-primary-600 flex-shrink-0" /> +92 42 99029450</p>
                  <p className="flex items-center gap-2"><FiMapPin size={12} className="text-primary-600 flex-shrink-0" /> KICS, UET G.T. Road, Lahore</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Message */}
            <AnimateOnScroll animation="reveal-right" className="lg:col-span-2">
              <span className="eyebrow">A Word from our Director</span>
              <h2 className="section-title mb-3">Welcome to KICS</h2>
              <div className="divider" />

              <div className="prose prose-slate max-w-none space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  KICS is on a fast track to become a premier research and advanced technology organization
                  in Pakistan. We are recognized as one of the leading computer science research centers in the
                  country, focusing on applied research across multiple IT domains including software systems,
                  embedded systems, wireless and networking technologies, information security, and industrial
                  automation.
                </p>
                <p>
                  Our vision is clear: to achieve regional recognition as a technology innovation center. We
                  leverage our unique position at UET Lahore to foster collaboration with both domestic and
                  international research centers, creating synergies that amplify our impact and reach.
                </p>
                <p>
                  What sets KICS apart is our team of capable and competent researchers working in a favorable
                  and motivational environment. We have created an ecosystem that nurtures creativity, encourages
                  innovation, and rewards excellence. Our researchers are not just conducting experiments—they
                  are solving real problems that affect Pakistan's development and prosperity.
                </p>
                <p>
                  Through strategic partnerships with leading organizations such as Huawei, MIT, IEEE, HEC, and
                  various government bodies, we ensure that our research has practical applications and contributes
                  to socio-economic advancement. These collaborations enable knowledge exchange, resource sharing,
                  and joint initiatives that benefit both academia and industry.
                </p>
                <p>
                  I am proud of what KICS has achieved and excited about our future. We are committed to
                  advancing Pakistan's technological capabilities, training the next generation of innovators,
                  and creating solutions that make a meaningful difference in people's lives.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600">
                <p className="text-slate-700 font-medium italic text-lg">
                  "We strive to gather capable and competent researchers at one platform and provide them with
                  favorable and motivational environment for creating innovative technologies."
                </p>
                <p className="text-navy font-bold mt-3 text-base">— Prof. Dr. Hafiz Muhammad Shahzad Asif</p>
                <p className="text-slate-500 text-sm">Director, KICS — UET Lahore</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/staff" className="btn-navy">Meet Our Team</Link>
                <Link to="/about" className="btn-navy">About KICS</Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
