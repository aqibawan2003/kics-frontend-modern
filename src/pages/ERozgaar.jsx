import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { FiCheckCircle, FiAlertCircle, FiExternalLink, FiClock, FiUsers, FiAward } from 'react-icons/fi';

const courses = [
  { name: 'Technical Skills Training', icon: '💻', description: 'Learn coding, programming, and software development' },
  { name: 'Creative Design', icon: '🎨', description: 'Graphic design, UI/UX, and visual communication' },
  { name: 'Content Marketing & Advertising', icon: '📱', description: 'Digital marketing, SEO, and social media strategy' },
  { name: 'E-Commerce', icon: '🛒', description: 'Online business, dropshipping, and marketplace management' },
  { name: 'Freelancing', icon: '🌐', description: 'Included with all programs - learn to work independently' },
];

const eligibility = [
  { text: 'Must be a resident of Punjab', valid: true },
  { text: 'Age limit: Maximum 35 years', valid: true },
  { text: 'Minimum education: 16 years of schooling (Bachelor degree)', valid: true },
  { text: 'Currently unemployed', valid: true },
];

const processSteps = [
  { step: '1', title: 'Apply Online', desc: 'Submit your application through the e-Rozgar portal' },
  { step: '2', title: 'MCQ Test', desc: '72 hours to complete online test (30 questions, 30 minutes)' },
  { step: '3', title: 'Selection', desc: 'Shortlisted candidates will be notified via email/SMS' },
  { step: '4', title: 'Training', desc: 'Complete 3-month technical course (physical or online)' },
];

export default function ERozgaar() {
  return (
    <div>
      <SEO
        title="e-Rozgar Program"
        description="Apply for free 3-month technical training courses at e-Rozgar Center UET Lahore. Learn freelancing, design, marketing, e-commerce and technical skills."
        breadcrumbs={[{ label: 'Programs' }, { label: 'e-Rozgar', url: '/e-rozgaar' }]}
      />
      <PageHero
        title="e-Rozgar Technical Training Program"
        subtitle="Free 3-month professional courses in tech, design, marketing and freelancing"
        breadcrumbs={[{ label: 'Programs' }, { label: 'e-Rozgar' }]}
      />

      {/* Alert Banner */}
      <section className="py-4 bg-cyan-50 border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3">
            <FiAlertCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
            <div className="text-sm">
              <p className="text-cyan-900 font-semibold">Government Initiative</p>
              <p className="text-cyan-700">This program is managed by Punjab Information Technology Board (PITB). Applications are submitted through the official government portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Program */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimateOnScroll animation="reveal-left">
              <span className="eyebrow">About the Program</span>
              <h2 className="section-title mb-4">e-Rozgar Center at UET Lahore</h2>
              <div className="divider mb-6" />
              <p className="text-slate-600 leading-relaxed mb-4">
                The e-Rozgar Program is a government initiative by the Punjab Information Technology Board (PITB)
                in collaboration with UET Lahore and KICS. The program provides <strong>free 3-month technical
                training courses</strong> to unemployed youth of Punjab.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The program equips participants with in-demand digital skills including freelancing, e-commerce,
                digital marketing, graphic design, and technical development — empowering them to earn online
                and build sustainable careers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {[
                  { icon: FiClock, label: '3 Months', desc: 'Duration' },
                  { icon: FiUsers, label: 'Free', desc: 'No Fee' },
                  { icon: FiAward, label: 'Certificate', desc: 'PITB Certified' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="text-primary-600" size={18} />
                    </div>
                    <p className="text-slate-900 font-bold text-xs sm:text-sm">{item.label}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.erozgaar.pitb.gov.pk/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now <FiExternalLink size={16} />
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll animation="reveal-right">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="https://kics.edu.pk/web/wp-content/uploads/2024/07/SUMMER-TECH-POSTER-DESIGN.jpg"
                  alt="e-Rozgar Program"
                  className="w-full h-80 object-cover"
                  onError={e => { e.target.src='https://placehold.co/600x400/1E40AF/EFF6FF?text=e-Rozgar+Program'; }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="eyebrow">Training Tracks</span>
              <h2 className="section-title">Available Courses</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {courses.map((course, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="card p-5 sm:p-6 text-center group">
                  <div className="text-3xl sm:text-4xl mb-3">{course.icon}</div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">{course.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">{course.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="eyebrow">Who Can Apply</span>
              <h2 className="section-title">Eligibility Criteria</h2>
              <div className="divider-center mt-3" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-primary-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-primary-100">
              <div className="space-y-4">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary-200">
                <p className="text-sm text-slate-600">
                  <strong>Note:</strong> All information must be accurate. Once submitted, course and center
                  selection cannot be changed. You will have 72 hours to complete the online MCQ test after signup.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 sm:py-16 bg-primary-900 bg-dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="text-primary-300 font-semibold uppercase tracking-[0.2em] text-xs mb-3 block">
                How to Apply
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">Application Process</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {processSteps.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 text-white font-bold text-lg sm:text-xl flex items-center justify-center mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 sm:mb-4">Ready to Start Your Digital Career?</h2>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">
              Apply now for free technical training and join thousands of successful freelancers from Punjab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.erozgaar.pitb.gov.pk/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-primary-600 hover:bg-white/90 inline-flex items-center gap-2 justify-center"
              >
                Apply Online Now <FiExternalLink size={16} />
              </a>
              <a
                href="https://www.erozgaar.pitb.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white/10 inline-flex items-center gap-2 justify-center"
              >
                Visit e-Rozgar Portal <FiExternalLink size={16} />
              </a>
            </div>
            <p className="text-white/70 text-sm mt-6">
              Applications are managed by Punjab Information Technology Board (PITB)
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
