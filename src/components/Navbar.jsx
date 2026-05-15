import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';

const Dropdown = ({ items, onClose }) => (
  <div className="absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border border-slate-200 z-50 origin-top animate-scaleIn">
    {items.map((item) => (
      <NavLink
        key={item.label}
        to={item.to}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-5 py-2.5 text-sm border-b border-slate-100 last:border-0 transition-colors duration-150 ${
            isActive
              ? 'text-primary-600 bg-primary-50 font-semibold'
              : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50'
          }`
        }
      >
        {item.label}
      </NavLink>
    ))}
  </div>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((label) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="hidden lg:block bg-primary-800 text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-8">
          <span>Al-Khwarizmi Institute of Computer Science — University of Engineering &amp; Technology, Lahore</span>
          <div className="flex items-center gap-4">
            <a href="tel:+924299029450" className="hover:text-white transition-colors">+92 42 99029450</a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@kics.edu.pk" className="hover:text-white transition-colors">info@kics.edu.pk</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        ref={navRef}
        className={`sticky top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-primary-900 ${scrolled ? 'shadow-lg' : ''}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                <img
                  src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                  alt="KICS Logo"
                  width="32"
                  height="32"
                  className="w-8 h-8 object-contain"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-none uppercase tracking-wide text-white">KICS</p>
                <p className="text-[10px] leading-tight mt-0.5 uppercase text-white/70 tracking-wider">UET Lahore</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-stretch h-16">
              {navLinks.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.children && handleMouseLeave()}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-sm font-medium px-4 text-white/90 hover:text-white hover:bg-primary-800 transition-colors duration-150 whitespace-nowrap ${
                          openMenu === item.label ? 'bg-primary-800 text-white' : ''
                        }`}
                        aria-haspopup="true"
                        aria-expanded={openMenu === item.label}
                      >
                        {item.label}
                        <FiChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${openMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openMenu === item.label && (
                        <Dropdown items={item.children} onClose={() => setOpenMenu(null)} />
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center text-sm font-medium px-4 transition-colors duration-150 whitespace-nowrap ${
                          isActive
                            ? 'text-white bg-primary-700 border-b-2 border-white'
                            : 'text-white/90 hover:text-white hover:bg-primary-800'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              <button
                className="hidden md:flex w-9 h-9 rounded bg-white/10 text-white hover:bg-white/20 items-center justify-center transition-colors"
                aria-label="Search"
              >
                <FiSearch size={16} />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-primary-900 shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <img
                src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                alt="KICS"
                width="32"
                height="32"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-bold text-sm uppercase">KICS</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Close navigation"
            >
              <FiX size={16} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {navLinks.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobile(expandedMobile === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-5 py-3 text-white/90 hover:text-white hover:bg-primary-800 text-sm font-medium transition-colors"
                    >
                      {item.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          expandedMobile === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedMobile === item.label &&
                      item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `block pl-9 pr-5 py-2.5 text-sm border-b border-white/5 transition-colors ${
                              isActive
                                ? 'text-white bg-primary-700 font-semibold'
                                : 'text-white/70 hover:text-white hover:bg-primary-800'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                        isActive
                          ? 'text-white bg-primary-700'
                          : 'text-white/90 hover:text-white hover:bg-primary-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
