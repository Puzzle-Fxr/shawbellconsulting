import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { advisoryServices } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Globe } from 'lucide-react';
import SEO from '../components/SEO';

export default function BusinessAdvisory() {
  return (
    <div className="page-enter">
      <SEO
        title="Business Advisory Services"
        description="Strategic business advisory services: strategic planning, sector reviews, PPPs, and capacity building to drive sustainable growth."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/business-advisory'}
      />
      <PageHero
        title="Business Advisory Services"
        subtitle="Strategic Business Counsel"
        image="images/businessadvise.jpg"
        description="Our business advisory practice delivers data-driven strategic insight, financial expertise, and transformation guidance to help organizations navigate complexity, seize opportunity, and achieve sustainable growth."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl text-steel mb-6">Strategic Advisory Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In today's rapidly evolving business landscape, organizations need more than traditional consulting—they need integrated advisory that combines strategic vision with practical execution. ShawbellConsulting's business advisory practice is uniquely positioned at the intersection of strategy, finance, risk, and technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our advisors bring deep industry expertise, proven frameworks, and a commitment to measurable results. We work alongside your leadership team to develop strategies that are not just theoretically sound but practically implementable, ensuring that every recommendation translates into real business value.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-platinum/50 rounded-lg px-4 py-2">
                  <Target className="w-5 h-5 text-pumpkin" />
                  <span className="font-heading font-medium text-steel text-sm">Data-Driven Strategy</span>
                </div>
                <div className="flex items-center gap-2 bg-platinum/50 rounded-lg px-4 py-2">
                  <Globe className="w-5 h-5 text-steel" />
                  <span className="font-heading font-medium text-steel text-sm">Global Perspective</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pumpkin/5 to-ocean/5 rounded-2xl p-8 border border-platinum">
              <h3 className="font-heading font-bold text-xl text-steel mb-4">Our Methodology</h3>
              <ul className="space-y-3">
                {['Rigorous market analysis', 'Stakeholder-aligned strategy', 'Quantified risk assessment', 'Implementation roadmaps', 'Continuous value measurement'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-pumpkin rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Cards */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Advisory Practice Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advisoryServices.map((s, i) => (
              <ServiceCard key={s.id} {...s} href={`/business-advisory/${s.id}`} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-platinum/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Ready for Strategic Transformation?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Our advisory team can help you identify opportunities, manage risk, and chart a path to sustainable growth.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
