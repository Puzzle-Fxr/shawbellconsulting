import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, AtSign } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/e36b38daf5b922fa895a54a106db6411', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          _subject: 'New inquiry from ShawbellConsulting website',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      const data = await response.json();
      if (data?.success === false) {
        throw new Error(data?.message || 'Unable to send your message right now.');
      }

      setStatusMessage({
        type: 'success',
        text: 'Thank you for your inquiry. Your message has been sent successfully, and our team will be in touch shortly.',
      });
      setForm(initialForm);
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: 'We could not send your message at this time. Please email info@shawbellghana.com or call our office directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="text-gray-500 text-sm">No. 9 Klottey Crescent, Ring Road East,<br /> Labone Junction By-Pass, North Labone,<br /> Accra - GHANA<br />GL-0303-9456</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-steel pb-2">Mailing Address</h3>
                    <p className="text-gray-500 text-sm">P.O. Box KIA9022,<br /> Airport, Accra</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">+233 (0)20 814 9262 <br />+233 (0)302 767 498 <br />+233 (0)302 774 112 <br />+233 (0)302 767609 (Ghana Institute of Consulting)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                    <AtSign className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <p className="font-heading font-medium text-steel">info@shawbellghana.com</p>
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
                <>
                    <h2 className="font-heading font-bold text-2xl text-steel mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mb-8">Fill out the form below and we'll get back to you promptly.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Full Name / Company Name</label>
                        <input
                          type="text"
                          value={form.name}
                          name="name"
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
                          name="email"
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
                          name="phone"
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all"
                          placeholder="+44 7700 900000"
                        />
                      </div>
                      <div>
                        <label className="font-heading font-medium text-sm text-steel mb-1 block">Service Interest</label>
                        <select
                          value={form.service}
                          name="service"
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
                          name="message"
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          rows={4}
                          className="w-full bg-white border border-platinum rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:border-ocean focus:ring-1 focus:ring-ocean/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your needs..."
                          required
                        />
                      </div>

                      {statusMessage && (
                        <div
                          className={`rounded-lg border px-4 py-3 text-sm ${
                            statusMessage.type === 'success'
                              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                              : 'border-red-200 bg-red-50 text-red-700'
                          }`}
                          role="status"
                          aria-live="polite"
                        >
                          {statusMessage.text}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-pumpkin hover:bg-pumpkin-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
                      >
                        <Send className="w-4 h-4" /> {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                      </button>
                    </form>
                </>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
