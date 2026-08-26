import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { people } from '../lib/data';
import SEO from '../components/SEO';

type Person = (typeof people)[number];
type MemberCardTheme = 'team' | 'experts';

function MemberCard({ person, index, onOpen, theme }: { person: Person; index: number; onOpen: (person: Person) => void; theme: MemberCardTheme }) {
  const isTeamCard = theme === 'team';

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onOpen(person)}
      className={`card-lift w-60 h-68 mx-auto rounded-2xl border p-6 text-left cursor-pointer flex flex-col relative overflow-hidden ${
        isTeamCard
          ? 'bg-pumpkin/5 border-pumpkin/50 hover:border-pumpkin/60'
          : 'bg-ocean/5 border-ocean/20 hover:border-ocean/50'
      }`}
    >
      <img
        src="/favicon.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-3 right-3 z-0 w-16 h-16 object-contain opacity-25 pointer-events-none"
      />
      <div className={`relative z-10 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
        isTeamCard ? 'bg-gradient-to-br from-pumpkin to-pumpkin/20' : 'bg-gradient-to-br from-ocean to-steel/20'
      }`}>
        <img src={person.imageUrl} alt={person.name} className="w-18 h-18 rounded-full object-cover" />
      </div>
      <h4 className="relative z-10 font-heading font-bold text-lg text-steel text-center mb-1">{person.name}</h4>
      <p className={`relative z-10 font-heading font-medium text-sm text-center ${isTeamCard ? 'text-pumpkin' : 'text-ocean'}`}>{person.role}</p>
      <p className="relative z-10 mt-auto pt-2 text-xs text-gray-500 text-center">Click for More Info</p>
    </motion.button>
  );
}

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState<(typeof people)[number] | null>(null);
  const previousScrollY = useRef(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openPerson = (person: (typeof people)[number]) => {
    previousScrollY.current = window.scrollY;
    setSelectedPerson(person);

    requestAnimationFrame(() => {
      modalRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  };

  const closePerson = () => {
    const returnScrollY = previousScrollY.current;
    setSelectedPerson(null);

    requestAnimationFrame(() => {
      window.scrollTo({ top: returnScrollY, behavior: 'auto' });
    });
  };

  const members = people.filter(person => !person.isFounder);
  const ourTeam = members.filter(person => ['kofi-amorin', 'priscilla-andoh', 'daniellina-essel', 'kojo-kwakwa', 'oheneba', 'johanna-ntow', 'karsten-avogo', 'audrey-fenuku', 'david-asare-manu'].includes(person.id));
  const poolOfExperts = members.filter(person => ['estelle-appiah', 'cephas-galley', 'gheysika-agambila', 'henry-paidoo', 'tracie-annan'].includes(person.id));

  return (
    <div className="page-enter">
      <SEO
        title="Our People"
        description="Meet the team at ShawbellConsulting — experienced legal and advisory professionals delivering integrated counsel."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/people'}
      />
      <PageHero
        title="Our People"
        subtitle="The Team Behind ShawbellConsulting"
        image="images/people.jpg"
        description="Our team of experienced legal and business professionals brings decades of combined expertise, a commitment to excellence, and the integrated perspective that defines our firm."
      />

      <section className="bg-white py-10 lg:py-18" aria-labelledby="founder-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
        {/* Founder - card */}
          <h3 className="font-heading font-semibold text-2xl text-steel text-center mb-8">Our Founder</h3>
          <div className="flex justify-center md:flex-col items-center gap-8 mb-16">
            {people.filter(p => p.isFounder).map(founder => (
              <motion.button
                key={founder.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => openPerson(founder)}
                className="card-lift rounded-2xl border mb-16 p-8 bg-ocean/5 border-ocean/20 hover:border-ocean/50 text-left cursor-pointer w-full max-w-lg mx-auto relative overflow-hidden"
              >
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '240px',
                  height: '240px',
                  backgroundImage: 'url(/favicon.png)',
                  backgroundSize: 'contain',
                  opacity: 0.10,
                  pointerEvents: 'none'
                }} />
                {/* Corrected image div */}
                <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-pumpkin to-pumpkin/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                    <img src={founder.imageUrl} alt={founder.name} className="w-28 h-28 rounded-full object-cover" />
                </div>
                <h4 className="relative z-10 font-heading font-bold text-lg text-steel text-center mb-1">{founder.name}</h4>
                <p className="relative z-10 text-ocean font-heading font-medium text-sm text-center mb-4">{founder.role}</p>
                <p className="relative z-10 text-gray-600 text-sm leading-relaxed mb-4">{founder.bio}</p>
                <p className="relative z-10 mt-4 mb-6 text-sm text-gray-500 text-center"> - Click for More Info - </p>
                <div className="relative z-10 flex flex-wrap gap-1.5 justify-center">
                  {founder.specialties.map(s => (
                    <span key={s} className="bg-platinum/50 text-steel font-heading font-medium text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-5 lg:py-8" aria-labelledby="team-and-experts-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="team-and-experts-heading" className="font-heading font-bold text-3xl text-steel text-center mb-12">Team and Experts</h2>
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            <div className="lg:col-span-3">
              <h3 className="font-heading font-semibold text-2xl text-steel mb-8">Our Team</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourTeam.map((person, index) => <MemberCard key={person.id} person={person} index={index} onOpen={openPerson} theme="experts" />)}
              </div>
            </div>

            <div className="lg:col-span-1 rounded-2xl border border-pumpkin/20 bg-pumpkin/10 p-4">
              <h3 className="font-heading font-semibold text-2xl text-center text-steel mb-4">Our Pool of Experts</h3>
              <div className="grid grid-cols-1 gap-6">
                {poolOfExperts.map((person, index) => <MemberCard key={person.id} person={person} index={index} onOpen={openPerson} theme="team" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for selected person */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-6"
            onClick={closePerson}
          >
            <motion.div
              ref={modalRef}
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
                  onClick={closePerson}
                  className="w-10 h-10 rounded-full bg-platinum hover:bg-ocean/20 text-steel flex items-center justify-center"
                  aria-label="Close profile details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div className="w-60 h-60 bg-gradient-to-br from-pumpkin/20 to-pumpkin rounded-full mx-auto md:mx-0 flex items-center justify-self-center">
                    <img src={selectedPerson.imageUrl} alt={selectedPerson.name} className="w-58 h-58 rounded-full object-cover" />
                  </div>
                  <div className="basis-2/3">
                    <div className="text-sm text-gray-700">
                      <div className="bg-platinum/50 rounded-xl p-3">
                        <p className="font-heading font-semibold text-steel mb-1">Qualifications</p>
                        <p 
                          className="columns-1 sm:columns-2 gap-4 text-gray-600 [column-fill:_balance] [&_ul]:m-0 [&_li]:break-inside-avoid" 
                          dangerouslySetInnerHTML={{ __html: selectedPerson.qualifications }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
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
                <img src="/favicon.png" alt="" aria-hidden="true" className="block w-24 h-24 mx-auto object-cover opacity-75 pointer-events-none" />
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