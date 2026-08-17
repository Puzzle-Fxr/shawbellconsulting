import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight, AtSign } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      <SEO
        title="Contact"
        description="Contact ShawbellConsulting for legal services, business advisory, and consultations. Reach our Accra office or send an inquiry online."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/contact'}
      />
      <PageHero
        title="Get in Touch"
        subtitle="Contact Us"
        image="images/investorcall.jpg"
        description="Whether you require legal representation, strategic business advice, or integrated counsel, our team is ready to assist. Schedule a consultation today."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl text-steel mb-6">We are Here to Help</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you require legal representation, strategic business advice, or integrated counsel, our team is ready to assist. Reach out to schedule a consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-steel pb-2">Our Office</h3>
                    <p className="text-gray-500 text-sm">No. 9 Klottey Crescent, Ring Road East,<br /> Labone Junction By-Pass, North Labone,<br /> Accra – GHANA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-steel pb-2">Mailing Address</h3>
                    <p className="text-gray-500 text-sm">DTD 76, Cantonments Post Office, Accra, GHANA <br />Or<br />P.O. Box KIA9022, Airport, Accra</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">+233 (0)302 774 112 <br />+233 (0)302 767 498 <br />+233 (0)27 5724540 <br />+233 (0)302 767609 (Ghana Institute of Consulting)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <AtSign className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">pchristian@shawbellghana.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-white rounded-2xl border border-platinum shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5092424452691!2d-0.17662286119857806!3d5.56427739860406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9cffef610b%3A0x8d188c78ae9001b0!2sShawbellConsulting!5e0!3m2!1sen!2sgh!4v1784898281494!5m2!1sen!2sgh"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Accra Office"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-steel/5 to-ocean/5 rounded-2xl border border-platinum p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-pumpkin/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-pumpkin" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-steel mb-4">Thank You</h3>
                    <p className="text-gray-600">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-2xl text-steel mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mb-8">Fill out the form below and we'll get back to you promptly.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Full Name / Company Name</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all"
                          placeholder="John Smith / Company A"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all"
                          placeholder="+44 7700 900000"
                        />
                      </div>
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Service Interest</label>
                        <select
                          value={form.service}
                          onChange={e => setForm({ ...form, service: e.target.value })}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all"
                          required
                        >
                          <option value="">Select a service...</option>
                          <option value="corporate-law">Corporate Law</option>
                          <option value="commercial-litigation">Commercial Litigation</option>
                          <option value="regulatory-compliance">Regulatory Compliance</option>
                          <option value="mergers-acquisitions">Mergers & Acquisitions</option>
                          <option value="strategy-consulting">Strategy Consulting</option>
                          <option value="financial-advisory">Financial Advisory</option>
                          <option value="risk-management">Risk Management</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Message</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          rows={4}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your needs..."
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
                      >
                        <Send className="w-4 h-4" /> Submit Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
