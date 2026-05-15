import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import { FiMenu, FiX, FiChevronDown, FiSearch, FiPhone, FiMail } from 'react-icons/fi';

/* ── Glass dropdown ── */
const Dropdown = ({ items, onClose }) => (
  <div
    className="absolute top-full left-0 mt-2 w-56 rounded-xl z-50 origin-top animate-scaleIn overflow-hidden"
    style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,120,80,0.18)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(37,99,235,0.08)',
    }}
  >
    {items.map((item) => (
      <NavLink
        key={item.label}
        to={item.to}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-5 py-3 text-sm border-b border-blue-50 last:border-0 transition-all duration-150 ${
            isActive
              ? 'text-primary-600 bg-primary-50/80 font-semibold'
              : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/60'
          }`
        }
      >
        {item.label}
      </NavLink>
    ))}
  </div>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [openMenu, setOpenMenu]             = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [scrolled, setScrolled]             = useState(false);
  const navRef     = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  /* Dynamic glass styles based on scroll */
  const glassStyle = scrolled
    ? {
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(255,120,80,0.22)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(37,99,235,0.10)',
      }
    : {
        background: 'rgba(255,255,255,0.60)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,120,80,0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
      };

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="hidden lg:block bg-primary-900 text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-8">
          <span className="font-medium tracking-wide">
            Al-Khwarizmi Institute of Computer Science — University of Engineering &amp; Technology, Lahore
          </span>
          <div className="flex items-center gap-5">
            <a href="tel:+924299029450" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FiPhone size={10} /> +92 42 99029450
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@kics.edu.pk" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FiMail size={10} /> info@kics.edu.pk
            </a>
          </div>
        </div>
      </div>

      {/* ── FLOATING GLASS NAVBAR ── */}
      <div className="sticky top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-2 pb-1">
        <header
          ref={navRef}
          className="max-w-7xl mx-auto rounded-2xl transition-all duration-400"
          style={glassStyle}
        >
          <nav className="px-4 sm:px-6" aria-label="Main navigation">
            <div className="flex items-center justify-between h-14">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.12)',
                  }}
                >
                  <img
                    src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                    alt="KICS Logo"
                    width="28"
                    height="28"
                    className="w-7 h-7 object-contain"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none uppercase tracking-wide text-primary-900">KICS</p>
                  <p className="text-[10px] leading-tight mt-0.5 uppercase text-slate-500 tracking-wider">UET Lahore</p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-0.5 h-14">
                {navLinks.map((item) => (
                  <div
                    key={item.label}
                    className="relative flex items-center"
                    onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                    onMouseLeave={() => item.children && handleMouseLeave()}
                  >
                    {item.children ? (
                      <>
                        <button
                          className={`flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                            openMenu === item.label
                              ? 'text-primary-700 bg-primary-50/70'
                              : 'text-slate-700 hover:text-primary-600 hover:bg-white/50'
                          }`}
                          style={
                            openMenu === item.label
                              ? { boxShadow: '0 0 0 1px rgba(37,99,235,0.2), 0 0 12px rgba(37,99,235,0.15)' }
                              : {}
                          }
                          aria-haspopup="true"
                          aria-expanded={openMenu === item.label}
                        >
                          {item.label}
                          <FiChevronDown
                            size={12}
                            className={`transition-transform duration-200 ${openMenu === item.label ? 'rotate-180 text-primary-600' : ''}`}
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
                          `flex items-center text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                            isActive
                              ? 'text-primary-700 bg-primary-50/70'
                              : 'text-slate-700 hover:text-primary-600 hover:bg-white/50'
                          }`
                        }
                        style={({ isActive }) =>
                          isActive
                            ? { boxShadow: '0 0 0 1px rgba(37,99,235,0.2), 0 0 12px rgba(37,99,235,0.18)' }
                            : {}
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              {/* Right — Search + Apply Now + Mobile toggle */}
              <div className="flex items-center gap-2">
                {/* Glass search button */}
                <button
                  className="hidden md:flex w-8 h-8 rounded-lg items-center justify-center text-slate-600 hover:text-primary-600 transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(37,99,235,0.15)',
                  }}
                  aria-label="Search"
                >
                  <FiSearch size={15} />
                </button>

                {/* Apply Now CTA */}
                <a
                  href="https://kics.edu.pk/web/admissions/"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:flex items-center text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #06b6d4)',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
                  }}
                >
                  Apply Now
                </a>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:text-primary-600 transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(37,99,235,0.15)',
                  }}
                  aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                >
                  {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* ══════════════════════════════════════════
          GLASS SIDEBAR — Premium mobile drawer
      ══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Dark blurred overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`absolute right-0 top-0 h-full flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            width: '85%',
            maxWidth: '340px',
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            borderLeft: '1px solid rgba(255,255,255,0.35)',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.12), -2px 0 12px rgba(37,99,235,0.06)',
          }}
        >
          {/* Decorative glow blobs inside sidebar */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'rgba(37,99,235,0.08)', filter: 'blur(32px)' }} />
          <div className="absolute bottom-20 -left-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(6,182,212,0.07)', filter: 'blur(28px)' }} />

          {/* ── Header ── */}
          <div
            className="relative flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(37,99,235,0.10)' }}
          >
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(37,99,235,0.18)', boxShadow: '0 2px 8px rgba(37,99,235,0.12)' }}
              >
                <img
                  src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                  alt="KICS"
                  width="28"
                  height="28"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-none uppercase tracking-wide text-primary-900">KICS</p>
                <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider">UET Lahore</p>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 hover:text-primary-600 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(37,99,235,0.15)' }}
              aria-label="Close navigation"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* ── Nav links ── */}
          <nav className="flex-1 overflow-y-auto px-3 py-3">
            {navLinks.map((item) => (
              <div key={item.label} className="mb-1">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        expandedMobile === item.label
                          ? 'text-primary-700'
                          : 'text-slate-800 hover:text-primary-600'
                      }`}
                      style={
                        expandedMobile === item.label
                          ? { background: 'rgba(37,99,235,0.08)', borderLeft: '3px solid #2563eb' }
                          : { background: 'transparent', borderLeft: '3px solid transparent' }
                      }
                    >
                      {item.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${expandedMobile === item.label ? 'rotate-180 text-primary-600' : 'text-slate-400'}`}
                      />
                    </button>
                    {expandedMobile === item.label && (
                      <div className="ml-3 mt-1 mb-1 space-y-0.5">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.to}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                isActive
                                  ? 'text-primary-700 font-semibold'
                                  : 'text-slate-600 hover:text-primary-600'
                              }`
                            }
                            style={({ isActive }) =>
                              isActive
                                ? { background: 'rgba(37,99,235,0.08)', borderLeft: '2px solid #2563eb' }
                                : { background: 'rgba(255,255,255,0.4)', borderLeft: '2px solid transparent' }
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive ? 'text-primary-700' : 'text-slate-800 hover:text-primary-600'
                      }`
                    }
                    style={({ isActive }) =>
                      isActive
                        ? { background: 'rgba(37,99,235,0.08)', borderLeft: '3px solid #2563eb' }
                        : { background: 'transparent', borderLeft: '3px solid transparent' }
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* ── Bottom CTA + contact ── */}
          <div
            className="px-4 pb-6 pt-4 flex-shrink-0 space-y-3"
            style={{ borderTop: '1px solid rgba(37,99,235,0.10)' }}
          >
            {/* Search bar */}
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(37,99,235,0.12)' }}
            >
              <FiSearch size={14} className="text-slate-400 flex-shrink-0" />
              <span className="text-slate-400 text-sm">Search KICS...</span>
            </div>

            {/* Apply Now */}
            <a
              href="https://kics.edu.pk/web/admissions/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-white text-sm font-bold py-3 rounded-xl w-full hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #2563eb, #06b6d4)',
                boxShadow: '0 6px 20px rgba(37,99,235,0.38)',
              }}
            >
              Apply Now
            </a>
            <div className="text-xs text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5"><FiPhone size={10} /> +92 42 99029450</p>
              <p className="flex items-center gap-1.5"><FiMail size={10} /> info@kics.edu.pk</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
