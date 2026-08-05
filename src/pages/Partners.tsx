import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import { partners } from '../lib/data';

const collaborations = [
  {
    title: '1. THE FIRM HAS SERVED GOVERNMENTAL AND PUBLIC SECTOR BODIES AND DEVELOPMENT PARTNERS',
    content:
      'We work closely with ministries, departments, agencies, and public institutions to support policy reform, institutional strengthening, governance improvement, and the design of sustainable public systems.',
  },
  {
    title: 'Development Partners and Donors',
    content:
      'Our team has supported donor-funded programmes and strategic initiatives in areas such as economic development, governance, infrastructure, social inclusion, and institutional capacity building across Ghana and other markets.',
  },
  {
    title: 'International Financial Institutions',
    content:
      'We provide advisory support to multilateral and bilateral financial institutions on project preparation, investment facilitation, monitoring frameworks, and the implementation of development-focused programmes.',
  },
  {
    title: 'Private Sector Enterprises',
    content:
      'We advise companies, entrepreneurs, and business groups on market entry, structuring, compliance, governance, strategic planning, and operational improvement to help them grow responsibly and competitively.',
  },
  {
    title: 'Infrastructure and PPP Stakeholders',
    content:
      'Our collaboration with infrastructure agencies, regulators, investors, and project sponsors supports public-private partnership design, transaction advisory, and implementation strategies for critical development projects.',
  },
  {
    title: 'Capacity Building and Training Institutions',
    content:
      'We partner with learning institutions, professional bodies, and sector networks to deliver advisory services, executive training, institutional development support, and skills transfer programmes.',
  },
  {
    title: 'Regional and Global Networks',
    content:
      'Through strong professional and institutional relationships, we connect public, private, and development actors with the expertise needed to deliver cross-border solutions and strategic partnerships.',
  },
];

export default function Partners() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [openPartner, setOpenPartner] = useState<number | null>(0);

  return (
    <div className="page-enter">
      <PageHero
        title="Our Partners"
        subtitle="Our firm has served the following business groups, clients, and sectors"
        image="images/handshake.jpg"
        description="Our firm has provided services to many governmental bodies and their development partners on policy, strategic planning, governance and organizational development, establishment of operational systems, standard operating procedures for process optimization, monitoring and evaluation, risk management, capacity building and other projects. "
      />

      {/* Partners Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {partners.map((partner, i) => {
              const isOpen = openPartner === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenPartner(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <img src={partner.logo} alt={partner.name} className="h-12 w-auto rounded-md bg-white p-2 object-contain shadow-sm" />
                        <div>
                          <h3 className="text-lg font-bold text-slate-800">{partner.name}</h3>
                          <p className="text-sm text-slate-500">View details</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6"
                      >
                        <p className="text-sm leading-relaxed text-slate-600 sm:text-base" dangerouslySetInnerHTML={{ __html: partner.detail }} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Other Partners Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-14 lg:mt-16">
          <div className="mb-8">
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-ocean mb-3">Collaborations</p>
            <h2 className="text-3xl font-bold text-slate-900">Other Collaborations</h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
            We have collaborated with a diverse range of partners, including governmental bodies, development organizations, and private sector entities. Our partnerships have enabled us to deliver impactful solutions and drive positive change across key sectors.
          </p>

          <div className="space-y-4">
            {collaborations.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                        <Building2 size={18} />
                      </span>
                      <span className="text-base font-semibold text-slate-800 sm:text-lg">{item.title}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6"
                    >
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.content}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
