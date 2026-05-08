import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Brain, Code, Shield, GraduationCap, TrendingUp, CheckCircle, Award, Globe, Mail, Users, Building, Zap, Target, Linkedin } from 'lucide-react';
import DotGrid from '../components/DotGrid/DotGrid';
import BorderGlow from '../components/BorderGlow/BorderGlow';
import CardSwap, { Card } from '../components/CardSwap/CardSwap';
import MagicBento from '../components/MagicBento/MagicBento';
import ServiceModal from '../components/ServiceModal/ServiceModal';
import SEO from '../components/SEO/SEO';

// Import data
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';
import teamData from '../data/team.json';

// Icon mapping
const iconMap = {
  Cloud,
  Brain,
  Code,
  Shield,
  GraduationCap,
  TrendingUp
};

function Home() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const selectedService = selectedServiceIndex !== null ? servicesData[selectedServiceIndex] : null;
  const SelectedIcon = selectedService ? iconMap[selectedService.icon] : null;
  const serviceColors = ['#004058', '#006890', '#2E94AE', '#002D3E', '#004058', '#006890'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Cirronyx Consulting",
    "image": "https://cirronyx.com/logo.png",
    "url": "https://cirronyx.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global",
      "addressCountry": "US"
    },
    "serviceType": ["Cloud Consulting", "AI Implementation", "DevOps Engineering"],
    "description": "Enterprise-grade cloud, AI, and DevOps solutions for global businesses."
  };

  const stats = [
    { number: "50+", label: "Enterprise Clients" },
    { number: "15+", label: "Countries Served" },
    { number: "100%", label: "Project Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const clients = [
    { name: "Fortune 500 Enterprises", sector: "Multiple Industries" },
    { name: "Global Technology Leaders", sector: "Cloud & Software" },
    { name: "Financial Services", sector: "Banking & Insurance" },
    { name: "Automotive Industry", sector: "Manufacturing & Digital" }
  ];

  return (
    <main>
      <SEO 
        title="Home"
        description="Transform your business with enterprise-grade cloud, AI, and DevOps solutions. Proven expertise in cloud infrastructure and modern software delivery."
        schemaData={serviceSchema}
      />
      {/* Hero Section with DotGrid Background */}
      <section className="pt-32 pb-20 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* DotGrid Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <DotGrid
            dotSize={8}
            gap={20}
            baseColor="#b3dbe9"
            activeColor="#006890"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                  <Building className="w-4 h-4 inline mr-2" />
                  Trusted by Global Enterprises
                </span>
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Business with Cloud, AI & DevOps
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We architect enterprise-grade solutions that accelerate innovation, enhance security, 
                and optimize operational efficiency across your technology landscape.
              </p>
              <div className="flex gap-4 mb-8">
                <a href="#contact" className="bg-blue-600 text-white px-7 py-2.5 font-medium hover:bg-blue-700 hover:shadow-lg transition" style={{ borderRadius: '50px' }}>
                  Start Your Project
                </a>
                <a href="#services" className="bg-white text-slate-800 border border-slate-300 px-7 py-2.5 font-medium hover:border-blue-600 hover:text-blue-600 transition" style={{ borderRadius: '50px' }}>
                  Explore Services
                </a>
              </div>
            </div>
            <div className="relative h-[350px] w-full max-w-[320px] mx-auto mt-12 md:mt-0">
              <CardSwap
                width={320}
                height={350}
                cardDistance={20}
                verticalDistance={25}
                delay={3500}
                pauseOnHover={true}
              >
                <Card className="bg-[#004058] text-white rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-center border border-blue-800">
                  <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Enterprise Proven</h4>
                  <p className="text-base text-blue-100">Solutions deployed across Fortune 500 organizations</p>
                </Card>
                <Card className="bg-[#006890] text-white rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-center border border-blue-700">
                  <div className="w-14 h-14 bg-blue-800/50 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-cyan-200" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Rapid Deployment</h4>
                  <p className="text-base text-blue-50">Agile methodologies that deliver results quickly</p>
                </Card>
                <Card className="bg-[#2E94AE] text-white rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-center border border-cyan-700">
                  <div className="w-14 h-14 bg-cyan-800/30 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Expert Team</h4>
                  <p className="text-base text-cyan-50">Certified professionals with deep technical expertise</p>
                </Card>
                <Card className="bg-[#5CB8CE] text-slate-900 rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-center border border-cyan-300">
                  <div className="w-14 h-14 bg-white/50 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-slate-800" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Global Reach</h4>
                  <p className="text-base text-slate-800">Serving clients across North America, Europe and Asia</p>
                </Card>
              </CardSwap>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <BorderGlow
                key={idx}
                className="w-full"
                backgroundColor="rgba(255, 255, 255, 0.9)"
                colors={['#006890', '#2E94AE', '#5CB8CE']}
                glowColor="195 100 28"
                borderRadius={12}
                edgeSensitivity={30}
              >
                <div className="p-6 text-center h-full">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology solutions that drive business transformation
            </p>
          </div>
          
          <div className="w-full" style={{ position: 'relative' }}>
            <MagicBento 
              cards={servicesData.map((service, index) => {
                const Icon = iconMap[service.icon];
                return {
                  title: service.title,
                  description: service.description,
                  label: service.tagline,
                  color: serviceColors[index % serviceColors.length],
                  iconNode: <Icon className="w-6 h-6 text-cyan-400" />
                };
              })}
              glowColor="46, 148, 174"
              onCardClick={(index) => setSelectedServiceIndex(index)}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Partner with Cirronyx</h2>
            <p className="text-xl text-slate-600">
              We combine deep technical expertise with proven delivery methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-20">
            <div className="bg-[#004058] text-white rounded-xl p-8 shadow-2xl border border-blue-800">
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Certifications</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our team holds top-tier certifications from Google Cloud, AWS, Microsoft Azure, Red Hat, and leading security organizations.
              </p>
              <div className="text-sm font-semibold text-cyan-300 bg-blue-900/40 py-2 px-4 rounded-lg inline-block">
                Professional Cloud Architect & DevOps Engineers
              </div>
            </div>
            
            <div className="bg-[#006890] text-white rounded-xl p-8 shadow-2xl border border-blue-700">
              <div className="w-14 h-14 bg-blue-800/50 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-cyan-200" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Experience</h3>
              <p className="text-blue-50 mb-6 leading-relaxed">
                Proven track record delivering complex solutions for Fortune 500 companies across automotive, technology, retail, and financial sectors.
              </p>
              <div className="text-sm font-semibold text-cyan-200 bg-blue-800/40 py-2 px-4 rounded-lg inline-block">
                Deployed in North America and Europe
              </div>
            </div>
            
            <div className="bg-[#2E94AE] text-white rounded-xl p-8 shadow-2xl border border-cyan-700">
              <div className="w-14 h-14 bg-cyan-800/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Support</h3>
              <p className="text-cyan-50 mb-6 leading-relaxed">
                From initial strategy through implementation to ongoing optimization, we provide comprehensive support at every stage of your journey.
              </p>
              <div className="text-sm font-semibold text-white bg-cyan-800/30 py-2 px-4 rounded-lg inline-block">
                Training & Knowledge Transfer Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from enterprise engagements across industries
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((study, idx) => {
              const gradients = [
                'linear-gradient(135deg, #004058 0%, #006890 50%, #2E94AE 100%)',
                'linear-gradient(135deg, #002D3E 0%, #004058 50%, #006890 100%)',
                'linear-gradient(135deg, #006890 0%, #2E94AE 50%, #5CB8CE 100%)',
                'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #004058 100%)',
                'linear-gradient(135deg, #2E94AE 0%, #006890 50%, #004058 100%)',
                'linear-gradient(135deg, #004058 0%, #002D3E 50%, #0f172a 100%)'
              ];

              return (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                >
                  {/* Image / Preview Area */}
                  <div className="relative overflow-hidden">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div
                        className="w-full h-64 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-700"
                        style={{ background: gradients[idx % gradients.length] }}
                      >
                        {/* Decorative elements */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-6 left-6 w-20 h-20 border border-white/30 rounded-xl"></div>
                          <div className="absolute bottom-8 right-8 w-32 h-32 border border-white/20 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-1 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="relative z-10 text-center px-8">
                          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                            <Building className="w-7 h-7 text-white/80" />
                          </div>
                          <div className="text-white/90 text-sm font-medium">{study.client}</div>
                        </div>
                      </div>
                    )}

                    {/* Industry Badge — overlaid on image */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
                        <Building className="w-3 h-3" />
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Title row with arrow */}
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug pr-4 group-hover:text-blue-700 transition-colors">{study.title}</h3>
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all">
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-sm text-slate-500 mb-4">{study.date}</div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{study.description}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">Trusted by global enterprise leaders</p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">What our happy clients say</h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a href="#portfolio" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all success stories </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2 w-full">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“Working alongside Cirronyx's DevOps team was a breeze. Their CI/CD pipeline automation made deploying our frontend apps incredibly fast and error-free.”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Dan M.</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“Cirronyx's data analytics and AI tools gave our marketing team actionable insights we never had before. We've seen a huge boost in campaign ROI.”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">James O.</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Digital Marketer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“The cloud storage solutions Cirronyx implemented allowed our design team to collaborate on massive files seamlessly without any latency issues.”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Elena C.</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Graphic Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Leadership Team */}
      <section id="team" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">
              Experienced technology leaders driving innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamData.map((leader) => (
              <div key={leader.id} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden h-full border border-slate-100">
                {/* Media Section */}
                <div className="md:w-2/5 relative overflow-hidden bg-slate-100 min-h-[250px] md:min-h-full">
                  {leader.photo ? (
                    <img 
                      src={leader.photo} 
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback for missing photo */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-[#004058] to-[#2E94AE] flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                    style={{ display: leader.photo ? 'none' : 'flex' }}
                  >
                    <div className="text-center p-6">
                      <Users className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <div className="text-white/80 font-medium text-sm tracking-widest uppercase">Cirronyx Leadership</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{leader.name}</h3>
                    <div className="text-blue-600 font-semibold tracking-wide text-sm uppercase mt-1">{leader.title}</div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm mt-4 mb-6 flex-grow line-clamp-3">
                    {leader.bio}
                  </p>
                  
                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    {leader.linkedin ? (
                      <a 
                        href={leader.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        aria-label={`${leader.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="w-10 h-10"></div>
                    )}
                    <Link 
                      to="/team" 
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/link"
                    >
                      Read full profile 
                      <span className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="capabilities" className="py-20 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-slate-300">
              We work with cutting-edge tools and platforms to deliver modern solutions
            </p>
          </div>
        </div>
        
        <div className="relative flex overflow-hidden group py-4">
          <div className="animate-marquee flex gap-4 px-2">
            {[
              "Google Cloud Platform", "Amazon Web Services", "Microsoft Azure", "OpenShift", "Kubernetes", "Multi-cloud",
              "Generative AI", "LLMs", "Machine Learning", "MLOps", "Computer Vision", "NLP & Analytics",
              "Terraform", "Ansible", "GitHub", "GitLab", "ArgoCD", "Flux", "Docker", "Containerd", "CI/CD",
              "Cloud Security", "DevSecOps", "IAM", "Compliance Tools", "Vulnerability Scanning",
              "Google Cloud Platform", "Amazon Web Services", "Microsoft Azure", "OpenShift", "Kubernetes", "Multi-cloud",
              "Generative AI", "LLMs", "Machine Learning", "MLOps", "Computer Vision", "NLP & Analytics",
              "Terraform", "Ansible", "GitHub", "GitLab", "ArgoCD", "Flux", "Docker", "Containerd", "CI/CD",
              "Cloud Security", "DevSecOps", "IAM", "Compliance Tools", "Vulnerability Scanning"
            ].map((tech, i) => (
              <div 
                key={i} 
                className="px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-300 font-semibold border border-slate-700 whitespace-nowrap hover:bg-slate-700 hover:text-white hover:scale-105 transition-all cursor-default shadow-lg flex items-center"
              >
                {tech}
              </div>
            ))}
          </div>
          {/* Gradient fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-slate-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <div className="font-semibold text-lg text-white mb-2">{client.name}</div>
                <div className="text-sm text-slate-400">{client.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Connect with our team to discuss your project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:info@cirronyx.com" className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Email Us</div>
              <div className="text-sm text-blue-100">info@cirronyx.com</div>
            </a>
            <a 
              href="https://calendar.app.google/5TfmhVHB2pd24i8B9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition cursor-pointer"
            >
              <Globe className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Schedule a Call</div>
              <div className="text-sm text-blue-100">Book a consultation</div>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-left">
            <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
            <p className="text-blue-100 mb-6">
              We offer complimentary initial consultations for enterprise clients. Let's explore how we can 
              help you achieve your technology goals.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Fast response</span>
              </div>
            </div>
            <a href="mailto:info@cirronyx.com?subject=Project%20Inquiry" className="inline-block bg-white text-blue-600 border border-slate-200 px-7 py-2.5 rounded-full font-medium hover:shadow-lg transition">
              Get in Touch
            </a>
          </div>
        </div>
       </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          iconNode={SelectedIcon ? <SelectedIcon className="w-6 h-6 text-cyan-400" /> : null}
          color={serviceColors[selectedServiceIndex % serviceColors.length]}
          onClose={() => setSelectedServiceIndex(null)}
        />
      )}
    </main>
  );
}

export default Home;
