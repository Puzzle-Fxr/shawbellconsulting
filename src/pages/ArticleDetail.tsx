import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ChevronLeft } from 'lucide-react';
import { briefs } from '../lib/data';
import PageHero from '../components/PageHero';

export default function ArticleDetail() {
  const { id } = useParams();
  const brief = briefs.find(a => a.id === id);

  if (!brief) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl text-steel mb-4">Brief Not Found</h2>
          <Link to="/briefs" className="text-ocean font-heading font-medium">← Back to Briefs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <PageHero
        title={brief.title}
        subtitle={brief.category}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-platinum">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> {brief.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {brief.readTime}
            </div>
            <span>{brief.date}</span>
          </div>

          {/* Brief body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">{brief.excerpt}</p>
            
            <h3 className="font-heading font-bold text-xl text-steel mb-4">The Current Landscape</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Organizations today face unprecedented complexity in navigating regulatory frameworks, market dynamics, and competitive pressures. The convergence of legal requirements and business strategy has created a new paradigm where integrated counsel is not merely advantageous—it is essential.
            </p>
            
            <h3 className="font-heading font-bold text-xl text-steel mb-4">Key Considerations</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              First, organizations must adopt a proactive stance toward regulatory change, building compliance frameworks that anticipate rather than merely react to new requirements. Second, strategic decision-making must incorporate legal risk analysis as a fundamental input, not an afterthought. Third, cross-functional collaboration between legal and business teams is critical for achieving optimal outcomes.
            </p>
            
            <h3 className="font-heading font-bold text-xl text-steel mb-4">Our Perspective</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At ShawbellConsulting, we believe that the most effective counsel comes from understanding both the legal and business dimensions of every challenge. Our integrated approach ensures that our clients receive advice that is not only legally sound but strategically aligned with their broader objectives.
            </p>
            
            <h3 className="font-heading font-bold text-xl text-steel mb-4">Looking Ahead</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              As the regulatory and business environments continue to evolve, organizations that embrace integrated counsel will be best positioned to navigate complexity, seize opportunity, and achieve sustainable success. We remain committed to providing the strategic, integrated perspective our clients need to thrive.
            </p>
          </div>

          {/* Back link */}
          <div className="pt-8 border-t border-platinum">
            <Link to="/briefs" className="inline-flex items-center gap-2 text-steel font-heading font-medium hover:text-ocean transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to All Briefs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-platinum/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Discuss This Topic With Our Team</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Our consultants can provide deeper insight and practical guidance on the issues discussed in this brief.</p>
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
