import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { legalServices } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, BookOpen } from 'lucide-react';

export default function LegalServices() {
  return (
    <div className="page-enter">
      <PageHero
        title="Legal Services"
        subtitle="Expert Legal Counsel"
        description="Our legal practice delivers strategic, results-oriented counsel across the full spectrum of corporate and commercial law. From formation to litigation, compliance to transactions, we protect your interests with precision and insight."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl text-steel mb-6">Comprehensive Legal Expertise</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At ShawbellConsulting, our legal services practice is built on decades of experience and a deep understanding of the regulatory and commercial landscapes our clients navigate. We don't just provide legal advice—we deliver strategic legal counsel that aligns with your business objectives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of experienced legal consultants combines rigorous legal analysis with practical business insight, ensuring that every recommendation is both legally sound and commercially viable. Whether you're navigating a complex transaction, managing regulatory compliance, or resolving a commercial dispute, we provide the integrated perspective you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-platinum/50 rounded-lg px-4 py-2">
                  <Scale className="w-5 h-5 text-steel" />
                  <span className="font-heading font-medium text-steel text-sm">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-platinum/50 rounded-lg px-4 py-2">
                  <BookOpen className="w-5 h-5 text-steel" />
                  <span className="font-heading font-medium text-steel text-sm">30+ Jurisdictions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-steel/5 to-ocean/5 rounded-2xl p-8 border border-platinum">
              <h3 className="font-heading font-bold text-xl text-steel mb-4">Our Approach</h3>
              <ul className="space-y-3">
                {['Strategic legal analysis', 'Business-aligned counsel', 'Proactive risk management', 'Cross-border expertise', 'Client-centered solutions'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-pumpkin rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Cards */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Legal Practice Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {legalServices.map((s, i) => (
              <ServiceCard key={s.id} {...s} href={`/legal-services/${s.id}`} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-platinum/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Need Legal Counsel?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Our legal team is ready to discuss your needs and provide strategic guidance tailored to your situation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
