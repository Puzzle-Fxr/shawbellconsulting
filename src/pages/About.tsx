import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users, Scale, Star } from 'lucide-react';
import PageHero from '../components/PageHero';
import { accolades } from '../lib/data';

export default function About() {
  return (
    <div className="page-enter">
      <PageHero
        title="About ShawbellConsulting"
        subtitle="Our Story & Values"
        image="images/deskscale.jpg"
        description="Founded in 2002, ShawbellConsulting is a leading integrated advisory firm in Ghana, combining legal and management consultancy services. We are committed to delivering excellence, integrity, and client-centered solutions across diverse sectors."
      />

      {/* History */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">Our Journey</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel leading-tight mb-6">
                ShawbellConsulting - an award-winning 
                <span className="text-pumpkin"> boutique </span>Consulting firm in Ghana
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ShawbellConsulting was established in Ghana in 2002 as a hybrid firm combining legal and management consultancy services. It was founded by Phyllis Maria Christian, who — after 13 years at Price Waterhouse Associates and its successor firm Ernst & Young in Ghana — set out to build a firm delivering superior professional standards locally. In 2009, the firm established the Ghana Institute of Consulting (GIC) to support capacity building and business performance nationally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over more than two decades, the firm has built deep experience across government, multinationals, development partners, and the local private sector — including a 10-year run as Local Manager for Amazon.com in Ghana (2002–2012) and representation of global players like Transocean and a consortium of five global petroleum corporations. Today the firm comprises three entities: The Law Practice, The Consultancy Practice, and the GIC, staffed by permanent professionals across law, finance, economics, IT, and social development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, ShawbellConsulting is recognized as a leading integrated advisory firm, trusted by Fortune 500 corporations, financial institutions, and government agencies across 30+ jurisdictions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-steel/5 to-ocean/5 rounded-2xl p-8 border border-platinum"
            >
              <h3 className="font-heading font-bold text-xl text-steel mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { year: '2002', event: 'Founded by Phyllis Maria Christian in Ghana as a hybrid legal and management consultancy.' },
                    { year: '2002', event: 'Selected as the Local Manager for Amazon.com in Ghana.' },
                    { year: '2009', event: 'Established the Ghana Institute of Consulting to support national capacity building.' },
                    { year: '2012', event: 'Concluded its 10-year run managing operations for Amazon.com in Ghana.' },
                    { year: 'Present', event: 'Operates via The Law Practice, The Consultancy Practice, and the GIC.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-heading font-bold text-ocean w-12 text-right">{item.year}</span>
                    <div className="w-3 h-3 bg-pumpkin rounded-full mt-1.5"></div>
                    <p className="text-gray-600 text-sm flex-1">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-white to-platinum/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean mb-4">What Defines Us</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-steel">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Scale, title: 'Excellence', desc: 'We hold ourselves to the highest standards of professional excellence, delivering counsel that is rigorous, insightful, and actionable.' },
              { icon: Users, title: 'Client-Centered', desc: "Every engagement begins and ends with our clients' needs. We listen, understand, and deliver solutions tailored to their unique challenges." },
              { icon: Globe, title: 'Integrated Perspective', desc: 'We bridge legal and business advisory, providing the holistic perspective that leads to better decisions and superior outcomes.' },
              { icon: Award, title: 'Integrity', desc: 'Trust is the foundation of every relationship we build. We operate with transparency, honesty, and unwavering ethical standards.' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-lift bg-white rounded-2xl border border-platinum p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-steel to-ocean rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-heading font-bold text-lg text-steel mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="bg-gradient-to-r from-steel to-steel-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-medium text-xs uppercase tracking-wider text-ocean-light mb-4">Recognition</p>
            <h2 className="font-heading font-bold text-3xl text-white">Industry Recognition</h2>
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

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Ready to Experience the ShawbellConsulting Difference?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Discover how our integrated approach can deliver superior outcomes for your organization.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
