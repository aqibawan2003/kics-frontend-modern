import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
const footerCols = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'About Us', to: '/about' },
      { label: "Director's Message", to: '/director-message' },
      { label: 'Our Staff', to: '/staff' },
      { label: 'Jobs at KICS', to: '/jobs' },
      { label: 'Research Areas', to: '/research-areas' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Publications', to: '/publications' },
      { label: 'Projects', to: '/research-areas#projects' },
      { label: 'Collaborations', to: '/research-areas#collaborations' },
    ],
  },
  {
    heading: 'Events',
    links: [
      { label: 'Conferences', to: '/conferences' },
      { label: 'Workshops', to: '/workshops' },
      { label: 'ICOSST', to: '/icosst' },
      { label: 'News & Media', to: '/news' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-primary-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <img
                    src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                    alt="KICS"
                    className="w-10 h-10 object-contain"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none uppercase">KICS</p>
                  <p className="text-white/80 text-xs mt-1 uppercase">
                    UET Lahore
                  </p>
                </div>
              </Link>
              <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-sm">
                Al-Khwarizmi Institute of Computer Science<br />
                University of Engineering & Technology<br />
                G.T. Road, Lahore - 54890, Pakistan
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+924299029450"
                  className="flex items-center gap-3 text-white/90 hover:text-white text-sm transition-colors"
                >
                  <FiPhone size={14} />
                  +92 42 99029450
                </a>
                <a
                  href="mailto:info@kics.edu.pk"
                  className="flex items-center gap-3 text-white/90 hover:text-white text-sm transition-colors"
                >
                  <FiMail size={14} />
                  info@kics.edu.pk
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white font-bold text-sm mb-5">{col.heading}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-white/80 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Follow Us */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-white font-bold text-sm mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, href: 'https://facebook.com/kics.official' },
                    { Icon: FaTwitter, href: 'https://twitter.com/KICSUETLAHORE' },
                    { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/kics' },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-primary-600 text-white flex items-center justify-center transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <FiArrowUp size={20} />
                </div>
                <span className="text-xs font-semibold uppercase">Top</span>
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-white/70 text-xs">
              © {new Date().getFullYear()} KICS — Al-Khwarizmi Institute of Computer Science, UET
              Lahore. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-2">
              <em>Seeking Truth, Pursuing Innovation</em>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
