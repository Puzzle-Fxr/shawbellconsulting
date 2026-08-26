import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { publications, legalServices, advisoryServices } from '../lib/data';

export function LatestArticleCTA() {
  const latest = publications[0];
  return (
    <section className="bg-gradient-to-r from-steel to-steel-dark py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-ocean-light font-heading font-medium text-sm uppercase tracking-wider mb-2">Latest Publication</p>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">{latest.title}</h3>
            <p className="text-gray-300 text-sm max-w-xl">{latest.excerpt.slice(0, 120)}...</p>
          </div>
          <Link
            to="/publications"
            className="flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg whitespace-nowrap"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <>
      <LatestArticleCTA />
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-3 group">
                <img
                src="/favicon.png"
                alt="Shawbell Consulting logo"
                className="w-10 h-10 group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-steel tracking-tight">Shawbell<span className="font-heading font-medium text-xl text-pumpkin -mt-0.5 tracking-wider">Consulting</span></span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Shawbell Consulting is a leading provider of integrated legal and business advisory services, dedicated to helping clients navigate complex challenges and achieve sustainable success.
              </p>
            </div>

            {/* Legal Services */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Legal Services</h4>
              <div className="space-y-2">
                <Link to="/legal-services" className="block text-sm text-gray-400 hover:text-ocean transition-colors">Overview</Link>
                {legalServices.map(service => (
                  <Link
                    key={service.id}
                    to={`/legal-services/${service.id}`}
                    className="block text-sm text-gray-400 hover:text-ocean transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Advisory */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Business Advisory</h4>
              <div className="space-y-2">
                <Link to="/business-advisory" className="block text-sm text-gray-400 hover:text-ocean transition-colors">Overview</Link>
                {advisoryServices.map(service => (
                  <Link
                    key={service.id}
                    to={`/business-advisory/${service.id}`}
                    className="block text-sm text-gray-400 hover:text-ocean transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-ocean" /> No.9 Klottey Crescent-Ring Road East,<br /> Labone Junction By-Pass, North Labone,<br /> Accra – GHANA
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-ocean" /> +233 (0)20 814 9262 <br />+233 (0)302 767 498 <br />+233 (0)302 774 112
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-ocean" /> info@shawbellghana.com
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-700 mt-12 mb-8"></div>

          {/* Footer Bottom */ }
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 ShawbellConsulting. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/about" className="text-sm text-gray-500 hover:text-ocean transition-colors">About</Link>
              <Link to="/people" className="text-sm text-gray-500 hover:text-ocean transition-colors">People</Link>
              <Link to="/publications" className="text-sm text-gray-500 hover:text-ocean transition-colors">Publications</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-ocean transition-colors">Contact</Link>
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-ocean transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-ocean transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
