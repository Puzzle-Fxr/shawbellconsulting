import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ChevronLeft } from 'lucide-react';
import { publications } from '../lib/data';
import PageHero from '../components/PageHero';

type ArticleSection = {
  heading: string;
  body: string;
  imageUrl?: string;  // Matches path inside public/ (e.g. '/images/articles/img.jpg')
  imageAlt?: string;
  sources?: string[]; // Optional: List of sources for this section
};

type ArticleContent = {
  title: string;
  summary: string;
  bannerUrl?: string; // Optional main top banner
  bannerAlt?: string;
  sections: ArticleSection[];
};

const articleModules: Record<string, () => Promise<{ default: ArticleContent }>> = {
  'navigating-regulatory-change': () => import('../assets/articles/how-sunshine-can-come-from-rain'),
  'the-impact-of-the-current-iran-situation': () => import('../assets/articles/the-impact-of-the-current-iran-situation'),
};

export default function ArticleDetail() {
  const { id: slug } = useParams();
  const publication = publications.find((article) => article.id === slug);
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

  if (!publication) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl text-steel mb-4">Publication Not Found</h2>
          <Link to="/publications" className="text-ocean font-heading font-medium">← Back to Publications</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <PageHero
        title={articleContent?.title ?? publication.title}
        subtitle={publication.category}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-platinum">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> {publication.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {publication.readTime}
            </div>
            <span>{publication.date}</span>
          </div>

          {isLoading ? (
            <div className="rounded-xl border border-platinum bg-platinum/20 p-8 text-center text-gray-600">
              Loading article content...
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              {articleContent?.bannerUrl && (
                <div className="mb-8 overflow-hidden rounded-xl border border-platinum">
                  <img 
                    src={articleContent.bannerUrl} 
                    alt={articleContent.bannerAlt || ''} 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {articleContent?.summary ?? publication.excerpt}
              </p>

              {articleContent?.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-heading font-bold text-xl text-steel mb-4">{section.heading}</h3>
                  <p className="body-text-container" dangerouslySetInnerHTML={{ __html: section.body }} />

                  {section.imageUrl && (
                    <div className="my-6 overflow-hidden rounded-lg border border-platinum/60">
                      <img 
                        src={section.imageUrl} 
                        alt={section.imageAlt || ''} 
                        loading="lazy" // Ensures asset is only downloaded when scrolled into viewport
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {section.sources && section.sources.length > 0 && (
                    <div className="mt-4 mb-6 text-sm text-gray-500">
                      <strong>Sources:</strong>
                      <ul className="list-disc list-inside">
                        {section.sources.map((source, index) => (
                          <li key={index}>{source}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="pt-8 border-t border-platinum mt-8">
            <Link to="/publications" className="inline-flex items-center gap-2 text-steel font-heading font-medium hover:text-ocean transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to All Publications
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-platinum/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-steel mb-4">Discuss This Topic With Our Team</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Our consultants can provide deeper insight and practical guidance on the issues discussed in this publication.</p>
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
