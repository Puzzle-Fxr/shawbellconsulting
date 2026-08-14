import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Shield, Cpu } from 'lucide-react';
import { advisoryServices } from '../lib/data';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const iconMap: Record<string, React.ElementType> = { Target, TrendingUp, Shield, Cpu };

export default function BusinessAdvisoryDetail() {
  const { id } = useParams();
  const service = advisoryServices.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl text-steel mb-4">Service Not Found</h2>
          <Link to="/business-advisory" className="text-ocean font-heading font-medium">← Back to Business Advisory</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Target;

  return (
    <div className="page-enter">
      <SEO
        title={service.title}
        description={service.short}
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + `/business-advisory/${service.id}`}
      />
      <PageHero
        title={service.title}
        subtitle="Business Advisory Services"
        image="images/businessadvise.jpg"
        description={service.long}
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {/* Features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-steel mb-8">What We Offer</h2>
              <div className="space-y-4">
                {service.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 bg-platinum/30 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-pumpkin rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-steel">{f}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-pumpkin/5 to-ocean/5 rounded-2xl p-8 border border-platinum">
                <h3 className="font-heading font-bold text-xl text-steel mb-6">The ShawbellConsulting Difference</h3>
                <div className="space-y-4">
                  {[
                    'Integrated advisory combining strategy, finance, risk, and technology',
                    'Proven frameworks backed by rigorous data analysis',
                    'Deep cross-industry expertise and benchmarking',
                    'Implementation-focused, not just advisory',
                    'Measurable outcomes and continuous value tracking',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pumpkin rounded-full"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl border border-platinum p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-steel mb-4">Ready to Transform?</h3>
                <p className="text-gray-600 text-sm mb-6">Contact our advisory team to discuss how {service.title.toLowerCase()} can drive your organization forward.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-platinum/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-heading font-semibold text-xl text-steel mb-6">Other Advisory Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {advisoryServices.filter(s => s.id !== id).map(s => (
              <Link
                key={s.id}
                to={`/business-advisory/${s.id}`}
                className="card-lift bg-white rounded-xl border border-platinum p-5 hover:border-ocean/30"
              >
                <h4 className="font-heading font-semibold text-steel mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm line-clamp-2">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
