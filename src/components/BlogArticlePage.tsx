import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { BLOG_POSTS } from './BlogPage';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !BLOG_ARTICLES[slug]) {
    return (
      <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
        <Navbar alwaysSolid />
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
          <h1
            className="text-4xl font-bold mb-4 text-brand-primary"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Artiklen blev ikke fundet
          </h1>
          <p className="text-charcoal/60 mb-8 max-w-md">
            Vi kunne desværre ikke finde den artikel, du leder efter. Den kan være flyttet eller slettet.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#224C4F] text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform"
          >
            <ArrowLeft size={16} />
            Tilbage til blog
          </Link>
        </div>
      </div>
    );
  }

  const article = BLOG_ARTICLES[slug];

  // Pick 3 related posts excluding current
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
      <Navbar alwaysSolid />

      {/* Hero */}
      <section className="relative max-h-[50vh] overflow-hidden" style={{ height: '50vh' }}>
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-6 pb-10 w-full left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={14} />
              Tilbage til blog
            </Link>

            {/* Category tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-brand-secondary/90 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <Tag size={10} />
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4 max-w-3xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>{article.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readTime} læsning
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Intro */}
        <motion.p
          className="text-xl leading-relaxed text-charcoal/80 mb-12 border-l-4 border-brand-secondary pl-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {article.intro}
        </motion.p>

        {/* Sections */}
        <div className="space-y-12">
          {article.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-[#224C4F] mb-4 leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {section.heading}
              </h2>
              <p className="text-charcoal/75 leading-relaxed mb-4">{section.content}</p>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-charcoal/70">
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-brand-secondary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        {/* Key takeaways */}
        <motion.div
          className="mt-16 bg-[#224C4F] rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-xl font-bold text-white mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Vigtigste pointer
          </h3>
          <ul className="space-y-3">
            {article.keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-secondary flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FAF7F2] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold text-charcoal mb-10"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Relaterede artikler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <article className="bg-white rounded-2xl overflow-hidden border border-charcoal/5 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-brand-secondary text-[11px] font-medium uppercase tracking-widest mb-2">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-base leading-snug mb-3 group-hover:text-brand-primary transition-colors flex-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between pt-3 border-t border-charcoal/5">
                          <span className="text-xs text-charcoal/30 flex items-center gap-1">
                            <Clock size={11} />
                            {post.readTime}
                          </span>
                          <span className="text-brand-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Læs mere <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#224C4F] py-20">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Har du brug for{' '}
            <span className="italic text-brand-secondary">professionel</span> hjælp?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Vores erfarne fysioterapeuter er klar til at hjælpe dig med at komme smerterne til livs.
            Book en tid eller ring til os i dag.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://system.easypractice.net/overview/aktiv-fysioterapi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-charcoal px-8 py-4 rounded font-bold hover:scale-105 transition-transform"
            >
              Book tid
            </a>
            <a
              href="tel:77414444"
              className="bg-brand-secondary text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform"
            >
              Ring til os
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#224C4F] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-white/50 text-sm hover:text-white transition-colors">
            Tilbage til forsiden
          </Link>
          <Link to="/blog" className="text-white/50 text-sm hover:text-white transition-colors">
            Alle blogindlag
          </Link>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Aktiv Fysioterapi. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  );
}
