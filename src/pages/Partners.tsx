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
        subtitle="Strategic Collaborations"
        description="We work with aligned organizations and institutions that share our commitment to practical insight, sound governance, and high-quality client delivery."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
        </div>
      </section>
    </div>
  );
}
