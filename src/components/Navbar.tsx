import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { legalServices, advisoryServices } from '../lib/data';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false);
  const [advisoryDropdown, setAdvisoryDropdown] = useState(false);
  const [mobileLegalDropdown, setMobileLegalDropdown] = useState(false);
  const [mobileAdvisoryDropdown, setMobileAdvisoryDropdown] = useState(false);
  const legalRef = useRef<HTMLDivElement>(null);
  const advisoryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setLegalDropdown(false);
    setAdvisoryDropdown(false);
    setMobileLegalDropdown(false);
    setMobileAdvisoryDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) setLegalDropdown(false);
      if (advisoryRef.current && !advisoryRef.current.contains(e.target as Node)) setAdvisoryDropdown(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `link-hover font-medium transition-colors duration-200 ${
      isActive(path) ? 'text-steel' : 'text-gray-700 hover:text-ocean'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-platinum shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/favicon.png"
              alt="Shawbell Consulting logo"
              className="w-10 h-10 rounded-full group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-steel tracking-tight">Shawbell<span className="font-heading font-medium text-xl text-pumpkin -mt-0.5 tracking-wider">Consulting</span></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Legal Services Dropdown */}
            <div ref={legalRef} className="relative">
              <button
                onClick={() => { setLegalDropdown(!legalDropdown); setAdvisoryDropdown(false); }}
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  location.pathname.startsWith('/legal-services') ? 'text-steel' : 'text-gray-700 hover:text-ocean'
                }`}
              >
                Legal Services <ChevronDown className={`w-4 h-4 transition-transform ${legalDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {legalDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[42rem] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-[0_22px_60px_rgba(15,23,42,0.16)] border border-platinum py-4 z-50"
                  >
                    <div className="px-4 pb-3 border-b border-platinum/70">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ocean">Practice Areas</p>
                          <h3 className="font-heading font-bold text-lg text-steel">Legal Services</h3>
                        </div>
                        <Link to="/legal-services" className="text-sm font-semibold text-ocean hover:text-steel transition-colors">
                          View overview
                        </Link>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-3">
                      {legalServices.map(s => (
                        <Link
                          key={s.id}
                          to={`/legal-services/${s.id}`}
                          className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:text-ocean hover:bg-platinum/60 transition-colors"
                        >
                          <span className="font-semibold text-steel">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business Advisory Dropdown */}
            <div ref={advisoryRef} className="relative">
              <button
                onClick={() => { setAdvisoryDropdown(!advisoryDropdown); setLegalDropdown(false); }}
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  location.pathname.startsWith('/business-advisory') ? 'text-steel' : 'text-gray-700 hover:text-ocean'
                }`}
              >
                Business Advisory <ChevronDown className={`w-4 h-4 transition-transform ${advisoryDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {advisoryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[42rem] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-[0_22px_60px_rgba(15,23,42,0.16)] border border-platinum py-4 z-50"
                  >
                    <div className="px-4 pb-3 border-b border-platinum/70">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ocean">Practice Areas</p>
                          <h3 className="font-heading font-bold text-lg text-steel">Business Advisory</h3>
                        </div>
                        <Link to="/business-advisory" className="text-sm font-semibold text-ocean hover:text-steel transition-colors">
                          View overview
                        </Link>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-3">
                      {advisoryServices.map(s => (
                        <Link
                          key={s.id}
                          to={`/business-advisory/${s.id}`}
                          className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:text-ocean hover:bg-platinum/60 transition-colors"
                        >
                          <span className="font-semibold text-steel">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/people" className={navLinkClass('/people')}>People</Link>
            <Link to="/briefs" className={navLinkClass('/briefs')}>Briefs</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>

            {/* Get in Touch */}
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-pumpkin/20"
            >
              <Phone className="w-4 h-4" /> Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-700">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-platinum max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="px-6 py-4 space-y-1">
              <button
                type="button"
                onClick={() => setMobileLegalDropdown(!mobileLegalDropdown)}
                className="flex w-full items-center justify-between py-2.5 text-left"
              >
                <span className="font-medium text-steel">Legal Services</span>
                <ChevronDown className={`w-4 h-4 text-steel transition-transform ${mobileLegalDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileLegalDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <Link to="/legal-services" className="block py-2 text-gray-700 font-medium pl-4">Overview</Link>
                    {legalServices.map(s => (
                      <Link key={s.id} to={`/legal-services/${s.id}`} className="block py-2 text-gray-600 pl-6">— {s.title}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-px bg-platinum my-2"></div>

              <button
                type="button"
                onClick={() => setMobileAdvisoryDropdown(!mobileAdvisoryDropdown)}
                className="flex w-full items-center justify-between py-2.5 text-left"
              >
                <span className="font-medium text-steel">Business Advisory</span>
                <ChevronDown className={`w-4 h-4 text-steel transition-transform ${mobileAdvisoryDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileAdvisoryDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <Link to="/business-advisory" className="block py-2 text-gray-700 font-medium pl-4">Overview</Link>
                    {advisoryServices.map(s => (
                      <Link key={s.id} to={`/business-advisory/${s.id}`} className="block py-2 text-gray-600 pl-6">— {s.title}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-px bg-platinum my-2"></div>
              <Link to="/people" className="block py-2.5 font-medium text-gray-700">People</Link>
              <Link to="/briefs" className="block py-2.5 font-medium text-gray-700">Briefs</Link>
              <Link to="/about" className="block py-2.5 font-medium text-gray-700">About Us</Link>
              <Link to="/contact" className="block py-2.5 font-semibold text-pumpkin">Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
