import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import { articles } from '../lib/data';

export default function Articles() {
  return (
    <div className="page-enter">
      <PageHero
        title="Articles & Insights"
        subtitle="Thought Leadership"
        description="Explore our latest analysis, commentary, and strategic perspectives on the legal and business issues shaping today's landscape."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-steel/5 to-ocean/5 rounded-2xl border border-platinum p-8 lg:p-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-pumpkin/10 text-pumpkin font-heading font-medium text-xs px-3 py-1.5 rounded-full mb-4">
                  Featured
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-steel mb-4">{articles[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {articles[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {articles[0].readTime}
                  </div>
                  <span>{articles[0].date}</span>
                </div>
                <Link
                  to={`/articles/${articles[0].id}`}
                  className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-steel to-steel-dark rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]">
                  <div className="absolute top-5 right-5 text-[80px] font-heading font-bold text-white">¶</div>
                  <div className="absolute bottom-5 left-5 text-[60px] font-heading font-bold text-white">§</div>
                </div>
                <div className="text-center z-10">
                  <p className="font-heading font-bold text-white text-lg">Thought Leadership</p>
                  <p className="text-ocean-light text-sm mt-1">Legal & Business Insights</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Articles */}
          <h3 className="font-heading font-semibold text-2xl text-steel mb-8">All Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/articles/${article.id}`}
                  className="card-lift block bg-white rounded-xl border border-platinum p-6 hover:border-ocean/30 group"
                >
                  <div className="inline-flex items-center gap-1 bg-steel/10 text-steel font-heading font-medium text-xs px-2.5 py-1 rounded-full mb-3">
                    {article.category}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-steel mb-3 group-hover:text-ocean transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
