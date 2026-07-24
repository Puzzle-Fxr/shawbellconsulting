import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { people } from '../lib/data';

export default function People() {
  return (
    <div className="page-enter">
      <PageHero
        title="Our People"
        subtitle="The Team Behind ShawbellConsulting"
        description="Our team of experienced legal and business professionals brings decades of combined expertise, a commitment to excellence, and the integrated perspective that defines our firm."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Founder - Large card */}
          {people.filter(p => p.isFounder).map(founder => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-steel to-steel-dark rounded-2xl aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute top-10 right-10 text-[100px] font-heading font-bold text-white">§</div>
                  </div>
                  <div className="text-center z-10">
                    <div className="w-28 h-28 bg-white/20 rounded-full mx-auto mb-5 flex items-center justify-center border-2 border-white/30">
                      <span className="font-heading font-bold text-4xl text-white">MS</span>
                    </div>
                    <p className="font-heading font-bold text-white text-xl">{founder.name}</p>
                    <p className="text-ocean-light text-sm mt-1">{founder.role}</p>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-pumpkin/10 text-pumpkin font-heading font-medium text-xs px-3 py-1.5 rounded-full mb-4">
                    Founder & Managing Consultant
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel mb-6">{founder.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {founder.specialties.map(s => (
                      <span key={s} className="bg-steel/10 text-steel font-heading font-medium text-xs px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
                  >
                    Schedule a Meeting <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other team members */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {people.filter(p => !p.isFounder).map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-lift bg-white rounded-2xl border border-platinum p-6 hover:border-ocean/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean/20 to-steel/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-steel">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-steel text-center mb-1">{person.name}</h4>
                <p className="text-ocean font-heading font-medium text-sm text-center mb-4">{person.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{person.bio.slice(0, 150)}...</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {person.specialties.map(s => (
                    <span key={s} className="bg-platinum text-steel font-heading font-medium text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gradient-to-r from-steel to-steel-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-white mb-4">Interested in Joining Our Team?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">We're always looking for exceptional professionals who share our commitment to integrated, client-centered excellence.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
