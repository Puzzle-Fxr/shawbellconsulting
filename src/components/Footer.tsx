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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-ocean rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xl text-white">Shawbell</span>
                  <span className="font-heading font-medium text-xs text-ocean ml-1 uppercase">Consulting</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging legal expertise and strategic business counsel since 1999. Trusted by leading organizations worldwide.
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
                  <MapPin className="w-4 h-4 text-ocean" /> 1250 Harbour Ave, Suite 400, London, EC2R 8AH
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-ocean" /> +44 (0) 20 7123 4567
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-ocean" /> info@shawbellconsulting.com
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-700 mt-12 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2024 ShawbellConsulting. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-gray-500 hover:text-ocean transition-colors">About</Link>
              <Link to="/people" className="text-sm text-gray-500 hover:text-ocean transition-colors">People</Link>
              <Link to="/publications" className="text-sm text-gray-500 hover:text-ocean transition-colors">Publications</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-ocean transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
