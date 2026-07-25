import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ChevronLeft } from 'lucide-react';
import { briefs } from '../lib/data';
import PageHero from '../components/PageHero';

type ArticleContent = {
  title: string;
  summary: string;
  sections: Array<{ heading: string; body: string }>;
};

const articleModules: Record<string, () => Promise<{ default: ArticleContent }>> = {
  'navigating-regulatory-change': () => import('../assets/articles/navigating-regulatory-change'),
  'strategic-ma-considerations': () => import('../assets/articles/strategic-ma-considerations'),
  'digital-transformation-governance': () => import('../assets/articles/digital-transformation-governance'),
  'corporate-compliance-best-practices': () => import('../assets/articles/corporate-compliance-best-practices'),
  'risk-management-frameworks': () => import('../assets/articles/risk-management-frameworks'),
};

export default function ArticleDetail() {
  const { id: slug } = useParams();
  const brief = briefs.find((article) => article.id === slug);
  const [articleContent, setArticleContent] = useState<ArticleContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      setArticleContent(null);
      return;
    }

    const loader = articleModules[slug];
    if (!loader) {
      setArticleContent(null);
      setIsLoading(false);
      return;
    }

    let isActive = true;
    setIsLoading(true);
    setArticleContent(null);

    loader()
      .then((module) => {
        if (isActive) {
          setArticleContent(module.default);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isActive) {
          setArticleContent(null);
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [slug]);

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
        title={articleContent?.title ?? brief.title}
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

          {isLoading ? (
            <div className="rounded-xl border border-platinum bg-platinum/20 p-8 text-center text-gray-600">
              Loading article content...
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {articleContent?.summary ?? brief.excerpt}
              </p>

              {articleContent?.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-heading font-bold text-xl text-steel mb-4">{section.heading}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{section.body}</p>
                </div>
              ))}
            </div>
          )}

          <div className="pt-8 border-t border-platinum mt-8">
            <Link to="/briefs" className="inline-flex items-center gap-2 text-steel font-heading font-medium hover:text-ocean transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to All Briefs
            </Link>
          </div>
        </div>
      </section>

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
