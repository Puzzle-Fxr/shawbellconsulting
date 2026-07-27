import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { people } from '../lib/data';

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState<(typeof people)[number] | null>(null);

  return (
    <div className="page-enter">
      <PageHero
        title="Our People"
        subtitle="The Team Behind ShawbellConsulting"
        image="images/handshake.jpg"
        description="Our team of experienced legal and business professionals brings decades of combined expertise, a commitment to excellence, and the integrated perspective that defines our firm."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Founder - card */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Founder</h3>
          <div className="flex justify-center md:flex-col items-center gap-8 mb-16">
            {people.filter(p => p.isFounder).map(founder => (
              <motion.button
                key={founder.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedPerson(founder)}
                className="card-lift mb-16 bg-white rounded-2xl border border-platinum p-6 hover:border-ocean/30 text-left cursor-pointer w-full max-w-lg mx-auto"
              >
                {/* Corrected image div */}
                <div className="w-32 h-32 bg-gradient-to-br from-ocean/20 to-steel/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                    <img src={founder.imageUrl} alt={founder.name} className="w-28 h-28 rounded-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-lg text-steel text-center mb-1">{founder.name}</h4>
                <p className="text-ocean font-heading font-medium text-sm text-center mb-4">{founder.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{founder.bio}</p>
                <p className="mt-4 mb-6 text-sm text-gray-500 text-center"> - Click for More Info - </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {founder.specialties.map(s => (
                    <span key={s} className="bg-platinum text-steel font-heading font-medium text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Other team members */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {people.filter(p => !p.isFounder).map((person, i) => (
              <motion.button
                key={person.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedPerson(person)}
                className="card-lift bg-white rounded-2xl border border-platinum p-6 hover:border-ocean/30 text-left cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-ocean/20 to-steel/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src={person.imageUrl} alt={person.name} className="w-15 h-15 rounded-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-lg text-steel text-center mb-1">{person.name}</h4>
                <p className="text-ocean font-heading font-medium text-sm text-center mb-4">{person.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                <p className="mt-4 mb-6 text-sm text-gray-500 text-center"> - Click for More Info - </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {person.specialties.map(s => (
                    <span key={s} className="bg-platinum text-steel font-heading font-medium text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPerson(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-6xl rounded-3xl bg-white border border-platinum shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 p-6 border-b border-platinum">
                <div>
                  <p className="font-heading font-medium text-xs uppercase tracking-[0.28em] text-ocean mb-2">Team Profile</p>
                  <h3 className="font-heading font-bold text-2xl text-steel">{selectedPerson.name}</h3>
                  <p className="text-ocean font-heading font-medium text-sm mt-1">{selectedPerson.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPerson(null)}
                  className="w-10 h-10 rounded-full bg-platinum hover:bg-ocean/20 text-steel flex items-center justify-center"
                  aria-label="Close profile details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-60 h-60 bg-gradient-to-br from-ocean/20 to-steel/20 rounded-full mx-auto md:mx-0 flex items-center justify-center">
                    <img src={selectedPerson.imageUrl} alt={selectedPerson.name} className="w-58 h-58 rounded-full object-cover" />
                  </div>
                  <div className="basis-2/3 ">
                    <div className="text-sm text-gray-700">
                      <div className="bg-platinum/50 rounded-xl p-3">
                        <p className="font-heading font-semibold text-steel mb-1">Focus Areas</p>
                        <p 
                          className="columns-1 sm:columns-2 gap-4 text-gray-600 [column-fill:_balance] [&_ul]:m-0 [&_li]:break-inside-avoid" 
                          dangerouslySetInnerHTML={{ __html: selectedPerson.focusAreas }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-heading font-semibold text-sm text-steel uppercase tracking-[0.2em] mb-3">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.specialties.map(s => (
                      <span key={s} className="bg-steel/10 text-steel font-heading font-medium text-xs px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-heading font-semibold text-sm text-steel uppercase tracking-[0.2em] mb-3">Career History</p>
                  <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: selectedPerson.details }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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