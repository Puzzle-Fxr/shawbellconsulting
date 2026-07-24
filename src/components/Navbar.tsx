import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { legalServices, advisoryServices } from '../lib/data';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false);
  const [advisoryDropdown, setAdvisoryDropdown] = useState(false);
  const legalRef = useRef<HTMLDivElement>(null);
  const advisoryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setLegalDropdown(false);
    setAdvisoryDropdown(false);
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
            <div className="w-10 h-10 bg-steel rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-heading font-bold text-lg">S</span>
            </div>
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
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-platinum py-3 z-50"
                  >
                    <Link to="/legal-services" className="block px-5 py-2.5 text-sm font-medium text-steel hover:bg-platinum/50 transition-colors rounded-lg mx-1">
                      Overview
                    </Link>
                    <div className="h-px bg-platinum mx-3 my-1"></div>
                    {legalServices.map(s => (
                      <Link
                        key={s.id}
                        to={`/legal-services/${s.id}`}
                        className="block px-5 py-2 text-sm text-gray-600 hover:text-ocean hover:bg-platinum/50 transition-colors rounded-lg mx-1"
                      >
                        {s.title}
                      </Link>
                    ))}
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
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-platinum py-3 z-50"
                  >
                    <Link to="/business-advisory" className="block px-5 py-2.5 text-sm font-medium text-steel hover:bg-platinum/50 transition-colors rounded-lg mx-1">
                      Overview
                    </Link>
                    <div className="h-px bg-platinum mx-3 my-1"></div>
                    {advisoryServices.map(s => (
                      <Link
                        key={s.id}
                        to={`/business-advisory/${s.id}`}
                        className="block px-5 py-2 text-sm text-gray-600 hover:text-ocean hover:bg-platinum/50 transition-colors rounded-lg mx-1"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/people" className={navLinkClass('/people')}>People</Link>
            <Link to="/articles" className={navLinkClass('/articles')}>Articles</Link>
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
            className="lg:hidden bg-white border-t border-platinum overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              <Link to="/legal-services" className="block py-2.5 font-medium text-steel">Legal Services Overview</Link>
              {legalServices.map(s => (
                <Link key={s.id} to={`/legal-services/${s.id}`} className="block py-2 text-gray-600 pl-4">— {s.title}</Link>
              ))}
              <div className="h-px bg-platinum my-2"></div>
              <Link to="/business-advisory" className="block py-2.5 font-medium text-steel">Business Advisory Overview</Link>
              {advisoryServices.map(s => (
                <Link key={s.id} to={`/business-advisory/${s.id}`} className="block py-2 text-gray-600 pl-4">— {s.title}</Link>
              ))}
              <div className="h-px bg-platinum my-2"></div>
              <Link to="/people" className="block py-2.5 font-medium text-gray-700">People</Link>
              <Link to="/articles" className="block py-2.5 font-medium text-gray-700">Articles</Link>
              <Link to="/about" className="block py-2.5 font-medium text-gray-700">About Us</Link>
              <Link to="/contact" className="block py-2.5 font-semibold text-pumpkin">Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
