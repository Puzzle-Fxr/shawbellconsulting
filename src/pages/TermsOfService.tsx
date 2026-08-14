import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="page-enter">
      <SEO
        title="Terms of Service"
        description="Terms governing use of the ShawbellConsulting website and related services."
        canonical={(typeof window !== 'undefined' ? window.location.origin : 'https://www.shawbellconsulting.com') + '/terms-of-service'}
      />
      <PageHero
        title={<>Terms of <span className="text-pumpkin">Service</span></>}
        subtitle="Our website terms"
        image="/images/shawbellhero.jpg"
        description="These terms govern your use of the Shawbell Consulting website and related services."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8 text-gray-700">
          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Use of the website</h2>
            <p className="leading-relaxed">
              By accessing this website, you agree to use it lawfully and responsibly. You may not use the site in a way that disrupts its operation or infringes the rights of others.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Intellectual property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, images, branding, and design elements, is owned or licensed by Shawbell Consulting unless otherwise stated. Reuse of our content without permission is prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Limitation of liability</h2>
            <p className="leading-relaxed">
              Shawbell Consulting provides website information for general informational purposes. We do not guarantee that the site will be free from errors, interruptions, or inaccuracies and shall not be liable for any consequential loss arising from its use.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Third-party links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites for convenience. We are not responsible for the content, privacy practices, or terms of those external sites.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-steel mb-4">Changes to these terms</h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. Continued use of the website after changes are made constitutes acceptance of the revised terms.
            </p>
          </div>

          <div className="border-t border-platinum pt-6">
            <p className="text-sm text-gray-500">
              If you have questions about these terms, please contact us through the contact page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-platinum/30 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Need clarification?</h3>
          <p className="text-gray-600 mb-6">Contact us if you would like help understanding any part of these terms.</p>
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
