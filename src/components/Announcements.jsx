import { announcements } from '../data/siteData';
import { FiBell } from 'react-icons/fi';

export default function Announcements() {
  const items = [...announcements, ...announcements];

  return (
    <div className="relative bg-primary-600 text-white py-3.5 flex items-center overflow-hidden border-y border-primary-700 shadow-sm">
      <div className="relative flex-shrink-0 flex items-center gap-3 bg-primary-700 px-6 py-2 mr-0 z-10 h-full self-stretch min-h-[3rem]">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
          <FiBell size={16} className="text-primary-600 animate-pulse" />
        </div>
        <span className="text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
          Latest Updates
        </span>
      </div>

      <div className="flex-1 overflow-hidden relative marquee-container">
        <div className="marquee-track flex whitespace-nowrap animate-marquee">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center text-base font-medium mx-10">
              <span className="w-2 h-2 rounded-full bg-white/70 mr-3 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
