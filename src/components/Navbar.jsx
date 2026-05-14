import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';

function Dropdown({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50 animate-scaleIn origin-top">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={onClose}
          className={({ isActive }) =>
            `block px-5 py-3 text-sm transition-all duration-200 border-b border-slate-700/50 last:border-0 ${
              isActive
                ? 'text-cyan-400 bg-slate-700/80 font-semibold'
                : 'text-white hover:text-cyan-400 hover:bg-slate-700/50'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // Detect scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* GLASSMORPHISM NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-2xl shadow-lg border-b border-slate-700/50'
            : 'bg-slate-900/80 backdrop-blur-md'
        }`}
        ref={navRef}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 border border-white/20">
                <img
                  src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                  alt="KICS"
                  className="w-9 h-9 object-contain"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-sm leading-none uppercase tracking-wide transition-colors text-white drop-shadow-lg">
                  KICS
                </p>
                <p className="text-[10px] leading-tight mt-0.5 uppercase transition-colors text-white/80 drop-shadow-md">
                  UET Lahore
                </p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      className={`relative font-medium text-sm transition-all duration-200 px-4 py-2 rounded-lg flex items-center gap-1 text-white drop-shadow-md hover:bg-white/20 ${openMenu === item.label ? 'bg-white/20' : ''}`}
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    >
                      {item.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `relative text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg block ${
                          isActive
                            ? 'text-cyan-400 bg-white/20'
                            : 'text-white drop-shadow-md hover:bg-white/20 hover:text-cyan-400'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                  {item.children && openMenu === item.label && (
                    <Dropdown items={item.children} onClose={() => setOpenMenu(null)} />
                  )}
                </div>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-10 h-10 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm items-center justify-center transition-all duration-200 hover:scale-110">
                <FiSearch size={18} />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-2xl shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="https://kics.edu.pk/web/wp-content/uploads/2018/02/unnamed.png"
                alt="KICS"
                className="w-9 h-9 object-contain"
              />
              <span className="text-white font-bold text-base uppercase">KICS</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FiX size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-3">
            {navLinks.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobile(expandedMobile === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-6 py-3.5 text-white hover:text-cyan-400 hover:bg-slate-800/80 text-sm font-medium transition-colors"
                    >
                      {item.label}
                      <FiChevronDown
                        size={16}
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
                            `block pl-10 pr-6 py-3 text-sm border-b border-slate-700/50 transition-colors ${
                              isActive
                                ? 'text-cyan-400 bg-slate-800/80 font-semibold'
                                : 'text-white/80 hover:text-cyan-400'
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
                      `block px-6 py-3.5 text-sm font-medium border-b border-slate-700/50 transition-colors ${
                        isActive
                          ? 'text-cyan-400 bg-slate-800/80'
                          : 'text-white hover:text-cyan-400 hover:bg-slate-800/80'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
