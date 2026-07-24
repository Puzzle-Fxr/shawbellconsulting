import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, BookOpen, Scale, ChevronRight, Star, Target, MapPin, Phone, AtSign } from 'lucide-react';
import { briefs, people, partners, accolades } from '../lib/data';

export default function Home() {
  const founder = people.find(p => p.isFounder)!;
  const latestArticle = briefs[0];
  const marqueePartners = [...partners, ...partners];

  const serviceGroups = [
    {
      title: 'Legal Advisory (Private Sector)',
      icon: Scale,
      items: [
        'Pre-establishment/start-up advisory',
        'Business registration',
        'Compliance and due diligence',
        'Licensing/permits',
        'Statutory services (Nominee Director, Company Secretarial, Registered Office)',
        'Notarizations',
        'Corporate liquidations',
        'Shareholder structuring',
        'Tax compliance support',
        'Immigration support',
        'Employment/labour advisory',
        'Litigation advisory',
        'SEC advisory',
        'Cross-cultural services',
      ],
    },
    {
      title: 'Legal & Policy Advisory (Government/Public Sector)',
      icon: BookOpen,
      items: [
        'Drafting policy and legislation',
        'Justice/human rights and public-sector reform',
        'Legal research and opinions',
        'Standard operating procedures',
        'Contract drafting/review',
        'Agreement negotiation',
      ],
    },
    {
      title: 'Institutional Reform',
      icon: Target,
      items: [
        'Governance evaluations',
        'Institutional and legal reviews',
        'Capacity building',
        'Sector mandate reviews and restructuring',
      ],
    },
    {
      title: 'Corporate Governance Systems',
      icon: Award,
      items: [
        'Governance frameworks',
        'Board peer-evaluation tools',
        'Compensation structures',
        'Oversight/monitoring systems',
      ],
    },
    {
      title: 'Public Financial Management',
      icon: BookOpen,
      items: [
        'PFM legislation development',
        'Implementation support',
        'Budget accountability tooling',
      ],
    },
    {
      title: 'Transaction Advisory',
      icon: Target,
      items: [
        'Value-for-money reviews',
        'Due diligence on major infrastructure/PPP projects',
        'Accra redevelopment and water supply reforms',
        'Venture Capital Trust Fund reform',
      ],
    },
    {
      title: 'Investor & Intermediary Services',
      icon: Users,
      items: [
        'Linking foreign investors to local partners',
        'Liaison with regulators',
        'Sector guides for new investors',
      ],
    },
  ];

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-steel via-steel-dark to-steel min-h-[80vh] flex items-center">
        {/* Watermark motifs */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 text-[280px] font-heading font-bold text-white leading-none select-none">⚖</div>
          <div className="absolute bottom-20 left-20 text-[180px] font-heading font-bold text-white leading-none select-none">§</div>
        </div>
        {/* Geometric accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ocean/8 to-transparent"></div>
        <div className="absolute bottom-20 right-40 w-32 h-32 bg-pumpkin/15 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-40 w-48 h-48 bg-ocean/10 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ocean-light font-heading font-medium text-sm uppercase tracking-wider mb-4">
                ♕ Legal Excellence & Strategic Insight Since 2002 ♕
              </p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
                Boutique <span className="text-pumpkin">expertise</span>,
              </h1>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
                <span className="text-pumpkin">Unique</span> insight
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                ShawbellConsulting bridges the gap between legal expertise and business advisory, delivering integrated counsel that drives results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/legal-services"
                  className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-light text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-ocean/30"
                >
                  Legal Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/business-advisory"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-200"
                >
                  Business Advisory <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="bg-gradient-to-b from-white to-platinum/40 border-b border-platinum py-14 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-heading font-medium text-xs uppercase tracking-[0.28em] text-ocean mb-3">Trusted Partners</p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-steel leading-tight">
                Strategic collaborations that move business forward
              </h2>
            </div>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-steel font-heading font-semibold text-sm hover:text-ocean transition-colors"
            >
              View All Partners <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-platinum bg-white/80 py-3">
            <div className="partner-marquee flex w-max items-center gap-6">
              {marqueePartners.map((p, i) => (
                <div
                  key={`${p}-${i}`}
                  className="shrink-0 w-[220px] rounded-2xl border border-platinum bg-white px-4 py-3 shadow-sm shadow-slate-200/60"
                >
                  <div className="h-16 rounded-xl bg-gradient-to-br from-platinum to-white border border-platinum flex items-center justify-center mb-3">
                    <span className="text-xs font-heading font-bold uppercase tracking-[0.24em] text-gray-400">
                      Logo
                    </span>
                  </div>
                  <p className="text-[13px] font-heading font-semibold text-steel tracking-[0.16em] uppercase leading-snug whitespace-normal break-words">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Firm History */}
      <section className="bg-gradient-to-b from-white to-platinum/30 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-left pointer-events-none">
          <span className="font-heading text-[7rem] md:text-[20rem] font-bold tracking-[0.25em] text-steel/5 select-none">
            HISTORY
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">Our Legacy</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel leading-tight mb-6">
                A Quarter Century of
                <span className="text-pumpkin"> Distinction</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ShawbellConsulting was established in Ghana in 2002 as a hybrid firm combining legal and management consultancy services. It was founded by Phyllis Maria Christian, who — after 13 years at Price Waterhouse Associates and its successor firm Ernst & Young in Ghana — set out to build a firm delivering superior professional standards locally. In 2009, the firm established the Ghana Institute of Consulting (GIC) to support capacity building and business performance nationally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Over more than two decades, the firm has built deep experience across government, multinationals, development partners, and the local private sector — including a 10-year run as Local Manager for Amazon.com in Ghana (2002–2012) and representation of global players like Transocean and a consortium of five global petroleum corporations. Today the firm comprises three entities: The Law Practice, The Consultancy Practice, and the GIC, staffed by permanent professionals across law, finance, economics, IT, and social development.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline visual */}
              <div className="bg-white rounded-2xl border border-platinum p-8 shadow-lg">
                <div className="space-y-6">
                  {[
                    { year: '2002', event: 'Founded by Phyllis Maria Christian in Ghana as a hybrid legal and management consultancy.' },
                    { year: '2002', event: 'Selected as the Local Manager for Amazon.com in Ghana.' },
                    { year: '2009', event: 'Established the Ghana Institute of Consulting to support national capacity building.' },
                    { year: '2012', event: 'Concluded its 10-year run managing operations for Amazon.com in Ghana.' },
                    { year: 'Present', event: 'Operates via The Law Practice, The Consultancy Practice, and the GIC.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-16 text-right">
                        <span className="font-heading font-bold text-ocean">{item.year}</span>
                      </div>
                      <div className="w-3 h-3 bg-pumpkin rounded-full mt-1.5 shadow-sm shadow-pumpkin/30"></div>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-ocean/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-left pointer-events-none">
          <span className="font-heading text-[6rem] md:text-[20rem] font-bold tracking-[0.24em] text-steel/5 select-none">
            SERVICES
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">What We Do</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel leading-tight mb-4">
              Integrated Legal & Advisory Services
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Our work spans private-sector legal counsel, government and public-sector reform, institutional strengthening, public financial management, transaction support, and investor intermediary services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {serviceGroups.map((group, i) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className={`bg-platinum/40 rounded-2xl border border-platinum p-6 h-full ${i === 0 ? 'lg:col-span-2 xl:col-span-3' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-steel to-ocean rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-steel">{group.title}</h3>
                  </div>
                  <ul className={i === 0 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600' : 'space-y-2 text-sm text-gray-600'}>
                    {group.items.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-2 h-2 bg-pumpkin rounded-full shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/legal-services"
              className="inline-flex items-center gap-2 text-steel font-heading font-semibold hover:text-ocean transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="bg-gradient-to-r from-steel to-steel-dark py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-heading text-[6rem] md:text-[12rem] font-bold tracking-[0.24em] text-white/5 select-none">
            RECOGNITION
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean-light mb-4">Recognition</p>
            <h2 className="font-heading font-bold text-3xl text-white">Industry Accolades</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {accolades.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-6 text-center"
              >
                <Star className="w-8 h-8 text-pumpkin mx-auto mb-3" />
                <h4 className="font-heading font-bold text-white text-lg mb-1">{a.title}</h4>
                <p className="text-gray-300 text-sm mb-2">{a.org}</p>
                <p className="text-ocean-light text-xs font-heading font-medium">{a.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-left pointer-events-none">
          <span className="font-heading text-[6rem] md:text-[20rem] font-bold tracking-[0.24em] text-steel/5 select-none">
            LEADERSHIP
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Founder image placeholder */}
              <div className="bg-gradient-to-br from-steel to-steel-dark rounded-2xl w-full aspect-[3/4] max-w-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]">
                  <div className="absolute top-10 right-10 text-[120px] font-heading font-bold text-white">§</div>
                </div>
                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                    <span className="font-heading font-bold text-3xl text-white">MS</span>
                  </div>
                  <p className="font-heading font-semibold text-white text-lg">Dr. Marcus Shawbell</p>
                  <p className="text-ocean-light text-sm">Managing Consultant</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-pumpkin/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ocean/15 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">Leadership</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel leading-tight mb-6">
                {founder.name}
              </h2>
              <p className="text-pumpkin font-heading font-medium text-sm mb-6">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {founder.specialties.map(s => (
                  <span key={s} className="bg-platinum text-steel font-heading font-medium text-xs px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to="/people"
                className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-platinum/30 to-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-left pointer-events-none">
          <span className="font-heading text-[6rem] md:text-[20rem] font-bold tracking-[0.24em] text-steel/5 select-none">
            CONTACT
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">Get in Touch</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel leading-tight mb-6">
                Let's Discuss Your Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you require legal representation, strategic business advice, or integrated counsel, our team is ready to assist. Reach out to schedule a consultation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">Our Office</p>
                    <p className="text-gray-500 text-sm">No. 7 Klottey Crescent, Ring Road East,<br /> Labone Junction By-Pass, North Labone,<br /> Accra – GHANA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">Call Us</p>
                    <p className="text-gray-500 text-sm">+233 (0)302 774 112 <br />+233 (0)302 767 498</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <AtSign className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">Email</p>
                    <p className="text-gray-500 text-sm">pchristian@shawbellghana.com</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-pumpkin/20"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-platinum shadow-lg overflow-hidden h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5092424452691!2d-0.17662286119857806!3d5.56427739860406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9cffef610b%3A0x8d188c78ae9001b0!2sShawbellConsulting!5e0!3m2!1sen!2sgh!4v1784898281494!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ShawbellConsulting Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
