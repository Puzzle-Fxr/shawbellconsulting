import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="page-enter">
      <SEO
        title="Privacy Policy"
        description="ShawbellConsulting's privacy policy explaining how we collect, use, and protect personal information submitted via our website."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/privacy-policy'}
      />
      <PageHero
        title={<>Privacy <span className="text-pumpkin">Policy</span></>}
        subtitle="Your information matters"
        image="/images/shawbellhero.jpg"
        description="This policy explains how Shawbell Consulting collects, uses, and protects the personal information you share with us."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8 text-gray-700">
          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Information we collect</h2>
            <p className="leading-relaxed">
              We may collect basic contact details such as your name, email address, phone number, and any information you voluntarily provide through our website forms or communications with us.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">How we use your information</h2>
            <p className="leading-relaxed">
              Your information helps us respond to enquiries, provide services, improve our website experience, and maintain lawful business operations. We do not sell or rent your personal data to third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Data protection</h2>
            <p className="leading-relaxed">
              We take reasonable administrative and technical measures to protect your information from unauthorized access, disclosure, loss, or misuse. However, no transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Cookies and analytics</h2>
            <p className="leading-relaxed">
              Our website may use cookies or similar technologies to understand visitor behavior and improve performance. You may disable cookies in your browser settings, though some parts of the site may function less effectively.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Your rights</h2>
            <p className="leading-relaxed">
              You may contact us to request access to, correction of, or deletion of your personal information where applicable. Please reach out to us using the contact details on our website.
            </p>
          </div>

          <div className="border-t border-platinum pt-6">
            <p className="text-sm text-gray-500">
              This privacy policy may be updated from time to time. Please revisit this page for the latest version.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-platinum/30 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Questions about your privacy?</h3>
          <p className="text-gray-600 mb-6">We are happy to help with any privacy-related questions or requests.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pumpkin hover:bg-pumpkin-dark text-white font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
