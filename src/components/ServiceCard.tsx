import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Scale, ShieldCheck, ArrowRightLeft, Target, TrendingUp, Shield, Cpu, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Building2, Scale, ShieldCheck, ArrowRightLeft, Target, TrendingUp, Shield, Cpu, BookOpen,
};

interface ServiceCardProps {
  id: string;
  title: string;
  short: string;
  icon: string;
  href: string;
  index: number;
}

export default function ServiceCard({ id, title, short, icon, href, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="card-lift block bg-white rounded-xl border border-platinum p-6 lg:p-8 group hover:border-ocean/30"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-steel to-ocean rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-ocean/20 transition-shadow">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-heading font-bold text-xl text-steel mb-3 group-hover:text-ocean transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{short}</p>
        <div className="flex items-center gap-1 text-ocean font-heading font-medium text-sm group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
