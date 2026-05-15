import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const PageHero = memo(function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-primary-900">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-1.5 text-white/60 text-xs mb-5 flex-wrap justify-center" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <FiHome size={11} /> Home
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <FiChevronRight size={11} />
              {b.to ? (
                <Link to={b.to} className="hover:text-white transition-colors">{b.label}</Link>
              ) : (
                <span className="text-white/90">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 max-w-2xl mx-auto text-base sm:text-lg animate-fadeIn" style={{ animationDelay: '150ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
});

export default PageHero;
