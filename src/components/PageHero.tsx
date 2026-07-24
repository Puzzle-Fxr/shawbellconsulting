import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta?: { label: string; href: string };
  bgPattern?: boolean;
}

export default function PageHero({ title, subtitle, description, cta, bgPattern = true }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${bgPattern ? 'bg-gradient-to-br from-steel via-steel-dark to-steel' : 'bg-steel'} py-24 lg:py-32`}>
      {/* Watermark pattern */}
      {bgPattern && (
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-10 right-10 text-[200px] font-heading font-bold text-white leading-none">⚖</div>
          <div className="absolute bottom-10 left-10 text-[150px] font-heading font-bold text-white leading-none">§</div>
          <div className="absolute top-1/2 right-1/3 text-[100px] font-heading font-bold text-white leading-none rotate-12">¶</div>
        </div>
      )}
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ocean/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pumpkin/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-ocean-light font-heading font-medium text-sm uppercase tracking-wider mb-4">{subtitle}</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl">{title}</h1>
          {description && (
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">{description}</p>
          )}
          {cta && (
            <Link
              to={cta.href}
              className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-pumpkin/30"
            >
              {cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
