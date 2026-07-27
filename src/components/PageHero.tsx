import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  description?: string;
  cta?: { label: string; href: string };
  bgPattern?: boolean;
}

export default function PageHero({ title, subtitle, image, description, cta, bgPattern = true }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${bgPattern ? 'bg-gradient-to-br from-steel via-steel-dark to-steel' : 'bg-steel'} py-24 lg:py-32`}>
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} // 2. Removed the string quotes
          alt={title} // Best practice: Use the title for better accessibility (SEO)
          className="w-full h-full object-cover"
        />
        {/* Your custom multi-stop gradient overlay sitting right on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-steel-dark via-steel-dark/90 via-steel-dark/60 via-steel-dark/40 to-transparent z-10"></div>
      </div>
      
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
