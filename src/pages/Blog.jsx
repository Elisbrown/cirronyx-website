import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import blogPosts from '../data/blogPosts.json';

function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title="Blog" description="Insights on cloud infrastructure, AI, DevOps, and cybersecurity from the Cirronyx team." canonical="/blog" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 to-[#004058] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-cyan-400 rounded-full blur-[140px]"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md mb-4">
            <BookOpen className="w-4 h-4 inline mr-2" />Insights & Articles
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-cyan-400">Blog</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Technical insights, best practices, and thought leadership from the Cirronyx team.</p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to={`/blog/${blogPosts[0].id}`} className="block bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-12 hover:shadow-2xl transition-shadow group">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block bg-white/15 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/10 w-fit backdrop-blur-sm">FEATURED</span>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">{blogPosts[0].category}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{blogPosts[0].title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="h-2" style={{ background: post.color }}></div>
                <div className="h-48 overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay Updated</h2>
          <p className="text-slate-600 mb-6">Get the latest insights on cloud, AI, and DevOps delivered to your inbox.</p>
          <a href="mailto:info@cirronyx.com?subject=Newsletter%20Subscription" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition group">
            Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Blog;
