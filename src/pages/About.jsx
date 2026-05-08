import React from 'react';
import { Building, Target, Globe, Zap, CheckCircle, GraduationCap, Users, Trophy, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import DotGrid from '../components/DotGrid/DotGrid';
import MagicBento from '../components/MagicBento/MagicBento';
import BorderGlow from '../components/BorderGlow/BorderGlow';

function About() {
  const values = [
    {
      title: 'Business-First Approach',
      description: 'We start by understanding your business goals, then architect solutions that align technology with strategy. Every engagement includes knowledge transfer to empower your teams.',
      label: 'Strategy',
      iconNode: <Target className="w-6 h-6 text-blue-400" />,
      color: "#004058"
    },
    {
      title: 'Global Delivery',
      description: 'With experience across North America and Europe, we understand the complexities of international deployments and regulatory requirements.',
      label: 'Scale',
      iconNode: <Globe className="w-6 h-6 text-cyan-400" />,
      color: "#006890"
    },
    {
      title: 'Continuous Innovation',
      description: 'We stay at the forefront of technology trends, continuously evaluating emerging tools and practices to bring you the most effective solutions.',
      label: 'Future',
      iconNode: <Zap className="w-6 h-6 text-purple-400" />,
      color: "#2E94AE",
      className: "lg:col-span-3"
    }
  ];

  const highlights = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Countries Worldwide' },
    { number: '100%', label: 'Project Success' },
    { number: '24/7', label: 'Dedicated Support' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="About Us | Cirronyx"
        description="Cirronyx is a technology consulting firm specializing in enterprise cloud infrastructure, AI, and modern software delivery practices."
        canonical="/about"
      />

      {/* Hero Section with DotGrid Background */}
      <section className="pt-32 pb-20 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <DotGrid
            dotSize={8}
            gap={20}
            baseColor="#e2e8f0"
            activeColor="#006890"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              <Building className="w-4 h-4 inline mr-2" />
              Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            About Cirronyx
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We partner with organizations to transform their technology landscape and accelerate digital innovation through enterprise-grade cloud, AI, and DevOps solutions.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-20 px-4 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Mission Component */}
            <div className="lg:col-span-3">
              <BorderGlow
                className="w-full h-full"
                backgroundColor="#0f172a"
                colors={['#3b82f6', '#60a5fa', '#93c5fd']}
                glowColor="213 100 60"
                borderRadius={16}
              >
                <div className="p-8 md:p-12 h-full flex flex-col justify-center">
                  <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-8">
                    <Target className="w-7 h-7 text-blue-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Cirronyx is a technology consulting firm specializing in enterprise cloud infrastructure,
                    artificial intelligence, and modern software delivery practices. We partner with organizations
                    to transform their technology landscape and accelerate digital innovation.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Our team brings deep expertise from leading technology companies and successful delivery
                    across multiple industries. We combine strategic thinking with hands-on technical implementation
                    to deliver solutions that drive measurable business outcomes.
                  </p>
                </div>
              </BorderGlow>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {highlights.map((stat, idx) => {
                const statColors = [
                  ['#10b981', '#34d399', '#6ee7b7'], // Green
                  ['#8b5cf6', '#a78bfa', '#c4b5fd'], // Purple
                  ['#f59e0b', '#fbbf24', '#fcd34d'], // Amber
                  ['#ef4444', '#f87171', '#fca5a5']  // Red
                ];
                const glowColors = [
                  "160 100 60",
                  "260 100 60",
                  "40 100 60",
                  "0 100 60"
                ];
                return (
                  <BorderGlow
                    key={idx}
                    className="w-full h-full"
                    backgroundColor="#0f172a"
                    colors={statColors[idx % 4]}
                    glowColor={glowColors[idx % 4]}
                    borderRadius={16}
                  >
                    <div className="p-6 h-full flex flex-col justify-center text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm md:text-base text-slate-300 font-medium">{stat.label}</div>
                    </div>
                  </BorderGlow>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (Values) using MagicBento */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The core principles that drive our consulting and implementation methodology.
            </p>
          </div>
          <div className="w-full relative">
            <MagicBento 
              cards={values}
              glowColor="46, 148, 174"
              enableSpotlight={true}
              enableTilt={true}
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Partner With Us</h2>
            <p className="text-xl text-slate-600">
              We bring unparalleled expertise and a proven track record to every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { text: 'Certified professionals from Google Cloud, AWS, Azure & Red Hat', icon: Trophy },
              { text: 'Proven track record with Fortune 500 enterprises', icon: Building },
              { text: 'End-to-end support from strategy to optimization', icon: Briefcase },
              { text: 'Training & knowledge transfer included in every engagement', icon: GraduationCap },
              { text: 'Agile methodologies with rapid deployment focus', icon: Zap },
              { text: 'Global reach across North America, Europe & Asia', icon: Globe }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 font-medium leading-relaxed">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="thought-leadership" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Thought Leadership</h2>
            <p className="text-xl text-slate-300">
              Sharing insights at industry conferences and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BorderGlow
              className="w-full h-full"
              backgroundColor="#0f172a"
              colors={['#3b82f6', '#60a5fa', '#93c5fd']}
              glowColor="213 100 60"
              borderRadius={16}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Conference Speaking</h3>
                    <p className="text-slate-300 text-sm">
                      Leading technical discussions on DevOps, Security, Big Data, and AI at industry events.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>DevOps transformation strategies</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Cloud security best practices</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Enterprise AI implementation</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>Big data architecture patterns</span>
                  </div>
                </div>
              </div>
            </BorderGlow>

            <BorderGlow
              className="w-full h-full"
              backgroundColor="#0f172a"
              colors={['#a855f7', '#c084fc', '#d8b4fe']}
              glowColor="270 100 60"
              borderRadius={16}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Training Content</h3>
                    <p className="text-slate-300 text-sm">
                      Delivering premium technical education to thousands of professionals worldwide.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <a 
                    href="https://www.riseupp.com/instructor/dr-fortem-mbah/6679" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:bg-slate-800 transition"
                  >
                    <div className="text-base font-semibold text-white mb-1">IoT Security Specialization</div>
                    <div className="text-sm text-slate-400">Coursera - 1,000+ students worldwide</div>
                  </a>
                  <a 
                    href="https://vnclagoon.com/vnc-google-cloud-doit-webinar-2021-available-on-demand-now/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:bg-slate-800 transition"
                  >
                    <div className="text-base font-semibold text-white mb-1">Google Cloud Webinar</div>
                    <div className="text-sm text-slate-400">DoiT International Partnership Event</div>
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-300 mb-6 text-lg">
              Interested in having our team speak at your event or deliver custom training?
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004058] via-[#006890] to-[#2E94AE] z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-300 via-transparent to-transparent z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Cirronyx to accelerate your digital journey with enterprise-grade cloud infrastructure, artificial intelligence, and modern software delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#004058] px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
