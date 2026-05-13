import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import blogPosts from '../data/blogPosts.json';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  // Schema for blog posting
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-05-05T08:00:00+08:00", // Would be dynamic in reality
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cirronyx",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cirronyx.com/logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        image={post.image}
        type="article"
        schemaData={blogSchema}
      />
      
      <article className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
        
        <header className="mb-10 text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
          </div>
        </header>
        
        {post.image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover" />
          </div>
        )}
        
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5 prose-li:text-slate-700 prose-li:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-ul:my-4 prose-ul:space-y-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <hr className="my-12 border-slate-200" />
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Looking to transform your enterprise?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate your cloud, AI, and DevOps journey.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            Get in Touch
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
