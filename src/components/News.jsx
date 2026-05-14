import { newsItems } from '../data/siteData';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
              KICS News
            </h2>
            <p className="text-slate-600 text-lg">Latest updates and announcements</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm group"
          >
            FIND OUT MORE{' '}
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {newsItems.slice(0, 4).map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x300/0066cc/ffffff?text=KICS+News`;
                  }}
                />
                {/* Blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-white text-xl leading-snug mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <FiCalendar size={12} /> {item.date}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{item.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
