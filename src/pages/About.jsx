import React from 'react';
import { Building, Target, Globe, Zap, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

function About() {
  const values = [
    {
      icon: Target,
      title: 'Business-First Approach',
      description: 'We start by understanding your business goals, then architect solutions that align technology with strategy. Every engagement includes knowledge transfer to empower your teams.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Global Delivery',
      description: 'With experience across North America and Europe, we understand the complexities of international deployments and regulatory requirements.',
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'Continuous Innovation',
      description: 'We stay at the forefront of technology trends, continuously evaluating emerging tools and practices to bring you the most effective solutions.',
      color: 'purple'
    }
  ];

  const highlights = [
    { number: '50+', label: 'Enterprise Clients Served' },
    { number: '15+', label: 'Countries Worldwide' },
    { number: '100%', label: 'Project Success Rate' },
    { number: '24/7', label: 'Dedicated Support' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="About"
        description="Cirronyx is a technology consulting firm specializing in enterprise cloud infrastructure, AI, and modern software delivery practices."
        canonical="/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#004058] to-[#002D3E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-white/10 border border-white/20 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md">
              <Building className="w-4 h-4 inline mr-2" />
              Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-cyan-400">Cirronyx</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We partner with organizations to transform their technology landscape and accelerate digital innovation through enterprise-grade cloud, AI, and DevOps solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 border border-slate-100">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Cirronyx is a technology consulting firm specializing in enterprise cloud infrastructure,
                  artificial intelligence, and modern software delivery practices. We partner with organizations
                  to transform their technology landscape and accelerate digital innovation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team brings deep expertise from leading technology companies and successful delivery
                  across multiple industries. We combine strategic thinking with hands-on technical implementation
                  to deliver solutions that drive measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              const colors = {
                blue: { bg: 'bg-blue-100', text: 'text-blue-600', card: 'from-blue-50' },
                cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', card: 'from-cyan-50' },
                purple: { bg: 'bg-purple-100', text: 'text-purple-600', card: 'from-purple-50' }
              };
              const c = colors[val.color];
              return (
                <div key={idx} className={`bg-gradient-to-br ${c.card} to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#004058] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Certified professionals from Google Cloud, AWS, Azure & Red Hat',
              'Proven track record with Fortune 500 enterprises',
              'End-to-end support from strategy to optimization',
              'Training & knowledge transfer included in every engagement',
              'Agile methodologies with rapid deployment focus',
              'Global reach across North America, Europe & Asia'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="thought-leadership" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thought Leadership</h2>
            <p className="text-xl text-slate-600">
              Sharing insights at industry conferences and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Conference Speaking & Seminars</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our team regularly participates in and leads technical discussions on DevOps, 
                    Security, Big Data, and AI at industry conferences and corporate events.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>DevOps transformation strategies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cloud security best practices</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Enterprise AI implementation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Big data architecture patterns</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Training & Educational Content</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Delivering training content to thousands of professionals worldwide through 
                    partnerships with leading educational platforms.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <a 
                  href="https://www.riseupp.com/instructor/dr-fortem-mbah/6679" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition"
                >
                  <div className="text-sm font-semibold text-slate-900 mb-1">IoT Security Specialization</div>
                  <div className="text-xs text-slate-600">Coursera - 1,000+ students worldwide</div>
                </a>
                <a 
                  href="https://vnclagoon.com/vnc-google-cloud-doit-webinar-2021-available-on-demand-now/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition"
                >
                  <div className="text-sm font-semibold text-slate-900 mb-1">Google Cloud Webinar</div>
                  <div className="text-xs text-slate-600">DoiT International Partnership Event</div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Interested in having our team speak at your event or deliver custom training?
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-7 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss how Cirronyx can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
