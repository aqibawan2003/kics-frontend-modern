export default function Conference() {
  return (
    <section id="conferences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-subtitle">Academic Events</p>
          <h2 className="section-title">Conferences &amp; Workshops</h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ICOSST featured */}
          <div className="md:col-span-2 bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 text-white flex flex-col md:flex-row gap-8 items-center shadow-xl card-hover">
            <div className="flex-1">
              <span className="inline-block bg-accent-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Flagship Conference
              </span>
              <h3 className="text-2xl font-heading font-bold mb-3 leading-tight">
                17th International Conference on Open Source Systems &amp; Technologies (ICOSST) 2023
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                ICOSST is KICS's flagship annual international conference bringing together researchers,
                practitioners and policymakers to discuss the latest advances in open source systems
                and technologies. The conference features keynotes, paper presentations, workshops,
                and networking sessions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary text-sm py-2 px-4">Submit Paper</a>
                <a href="#" className="border border-white/40 hover:border-white text-white text-sm py-2 px-4 rounded-md font-semibold transition-all hover:bg-white/10">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-48">
              <img
                src="https://kics.edu.pk/web/wp-content/uploads/2024/06/WEB-BANNER-AI-SUMMIT.jpg"
                alt="ICOSST 2023"
                className="rounded-xl w-full h-40 object-cover shadow-lg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Past events */}
          {[
            { title: 'ICOSST 2020', date: 'December 16–17, 2020', type: 'Conference' },
            { title: 'AI Summit 2024', date: 'June 2024', type: 'Summit' },
            { title: 'Summer Tech Program 2024', date: 'July 2024', type: 'Workshop' },
            { title: 'IEEE COMSOC Lahore Chapter Meet-up 2024', date: '2024', type: 'Seminar' },
          ].map((event) => (
            <div
              key={event.title}
              className="border border-gray-200 rounded-xl p-6 card-hover group bg-white shadow-sm"
            >
              <span className="text-xs text-accent-600 font-bold uppercase tracking-wider">{event.type}</span>
              <h4 className="font-heading font-bold text-primary-800 text-lg mt-1 mb-2 group-hover:text-accent-600 transition-colors">
                {event.title}
              </h4>
              <p className="text-gray-400 text-sm">{event.date}</p>
              <a href="#" className="inline-flex items-center gap-1 mt-4 text-primary-700 text-sm font-semibold hover:text-accent-600 transition-colors group/link">
                View Details <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
