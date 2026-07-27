import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { partners } from '../lib/data';

export default function Partners() {
  return (
    <div className="page-enter">
      <PageHero
        title="Our Partners"
        subtitle="Our firm has served the following business groups, clients, and sectors"
        description="Our firm has provided services to many governmental bodies and their development partners on policy, strategic planning, governance and organizational development, establishment of operational systems, standard operating procedures for process optimization, monitoring and evaluation, risk management, capacity building and other projects. "
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flow md:flow-row gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-100 mb-4 p-6 rounded-lg">
                  <img src={partner.logo} alt={partner.name} className="w-auto h-15 tracking-[0.24em] object-cover mb-4" />
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: partner.detail }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
