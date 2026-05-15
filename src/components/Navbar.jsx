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
      boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(201,79,58,0.08)',
    }}
  >
    {items.map((item) => (
      <NavLink
        key={item.label}
        to={item.to}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-5 py-3 text-sm border-b border-orange-50 last:border-0 transition-all duration-150 ${
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
        boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(201,79,58,0.10)',
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
                    border: '1px solid rgba(201,79,58,0.2)',
                    boxShadow: '0 2px 8px rgba(201,79,58,0.12)',
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
                              ? { boxShadow: '0 0 0 1px rgba(201,79,58,0.2), 0 0 12px rgba(201,79,58,0.15)' }
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
                            ? { boxShadow: '0 0 0 1px rgba(201,79,58,0.2), 0 0 12px rgba(201,79,58,0.18)' }
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
                    border: '1px solid rgba(201,79,58,0.15)',
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
                    background: 'linear-gradient(135deg, #8a2818, #c94f3a, #d97706)',
                    boxShadow: '0 4px 14px rgba(201,79,58,0.35)',
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
                    border: '1px solid rgba(201,79,58,0.15)',
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

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderLeft: '1px solid rgba(201,79,58,0.15)',
          }}
        >
          <div
            className="flex items-center justify-between p-4 border-b"
            style={{ borderColor: 'rgba(201,79,58,0.12)', background: 'rgba(253,242,240,0.8)' }}
          >
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <img
                src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                alt="KICS"
                width="32"
                height="32"
                className="w-8 h-8 object-contain"
              />
              <span className="text-primary-900 font-bold text-sm uppercase">KICS</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg border border-primary-200 text-primary-700 flex items-center justify-center hover:bg-primary-100 transition-colors"
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
                      className="w-full flex items-center justify-between px-5 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50/70 text-sm font-medium transition-colors border-b border-slate-100"
                    >
                      {item.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          expandedMobile === item.label ? 'rotate-180 text-primary-600' : ''
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
                            `block pl-9 pr-5 py-2.5 text-sm border-b border-slate-100 transition-colors ${
                              isActive
                                ? 'text-primary-600 bg-primary-50/80 font-semibold'
                                : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50/60'
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
                      `block px-5 py-3 text-sm font-medium border-b border-slate-100 transition-colors ${
                        isActive
                          ? 'text-primary-600 bg-primary-50/80 font-semibold'
                          : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/60'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Apply Now + contact */}
          <div className="p-4 border-t space-y-3" style={{ borderColor: 'rgba(201,79,58,0.12)', background: 'rgba(253,242,240,0.8)' }}>
            <a
              href="https://kics.edu.pk/web/admissions/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center text-white text-sm font-bold px-4 py-2.5 rounded-xl w-full"
              style={{ background: 'linear-gradient(135deg, #8a2818, #c94f3a)', boxShadow: '0 4px 14px rgba(201,79,58,0.3)' }}
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
