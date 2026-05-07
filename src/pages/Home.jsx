import React from 'react';
import { Cloud, Brain, Code, Shield, GraduationCap, TrendingUp, CheckCircle, Award, Globe, Mail, Users, Building, Zap, Target } from 'lucide-react';
import DotGrid from '../components/DotGrid/DotGrid';
import BorderGlow from '../components/BorderGlow/BorderGlow';
import CardSwap, { Card } from '../components/CardSwap/CardSwap';
import MagicBento from '../components/MagicBento/MagicBento';
import SEO from '../components/SEO/SEO';

// Import data
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';
import testimonialsData from '../data/testimonials.json';
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

  const certifications = [
    { name: "Google Cloud Professional Architect", issuer: "Google Cloud", year: "2021" },
    { name: "Google Cloud DevOps Engineer", issuer: "Google Cloud", year: "2023" },
    { name: "Red Hat Accredited Professional - OpenShift", issuer: "Red Hat", year: "2018" },
    { name: "Red Hat Certified Engineer (RHCE)", issuer: "Red Hat", year: "2018" },
    { name: "Red Hat Certified System Administrator", issuer: "Red Hat", year: "2018" },
    { name: "MCSA: Cloud Platform", issuer: "Microsoft", year: "2017" },
    { name: "Azure Solutions Architect", issuer: "Microsoft", year: "2017" },
    { name: "MIT Blockchain Technologies", issuer: "MIT Sloan", year: "2022" },
    { name: "SAP Data Architect", issuer: "SAP", year: "2025" },
    { name: "Microsoft Certified Trainer", issuer: "Microsoft", year: "2023" },
    { name: "Microsoft Certified Cyber Security Architect", issuer: "Microsoft", year: "2026" },
    { name: "AWS Certified Solution Architect", issuer: "AWS", year: "2023" }
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
                const colors = ['#004058', '#006890', '#2E94AE', '#002D3E', '#004058', '#006890'];
                return {
                  title: service.title,
                  description: service.description,
                  label: service.tagline,
                  color: colors[index % colors.length],
                  iconNode: <Icon className="w-6 h-6 text-cyan-400" />
                };
              })}
              glowColor="46, 148, 174" 
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
            <p className="text-xl text-slate-600">
              Real results from enterprise engagements across industries
            </p>
          </div>
          
          <div className="space-y-8">
            {projectsData.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                        <div className="flex gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {study.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Challenge</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Solution</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Results</h4>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-600">
              What enterprise leaders say about working with Cirronyx
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-md">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.company}</div>
                  <div className="text-xs text-slate-500 mt-2">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-slate-600">
              Industry-recognized expertise from leading technology organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{cert.name}</h3>
                <div className="text-xs text-slate-600 mb-1">{cert.issuer}</div>
                <div className="text-xs text-slate-500">{cert.year}</div>
              </div>
            ))}
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
              <div key={leader.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                {/* Photo Section */}
                <div className="mb-6">
                  {leader.photo ? (
                    <img 
                      src={leader.photo} 
                      alt={leader.name}
                      className="w-32 h-32 rounded-xl object-cover mx-auto shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-32 h-32 bg-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-lg"
                    style={{ display: leader.photo ? 'none' : 'flex' }}
                  >
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{leader.title}</div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {leader.bio}
                  </p>
                </div>
                
                {/* Details Grid */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Core Expertise</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {leader.expertise.map((exp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Education</h4>
                    <p className="text-sm text-slate-600">{leader.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Key Certifications</h4>
                    <p className="text-sm text-slate-600">{leader.certifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="capabilities" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-slate-300">
              We work with cutting-edge tools and platforms to deliver modern solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Cloud Platforms</h3>
              <div className="space-y-2 text-slate-300">
                <div>• Google Cloud Platform</div>
                <div>• Amazon Web Services</div>
                <div>• Microsoft Azure</div>
                <div>• OpenShift / Kubernetes</div>
                <div>• Multi-cloud Solutions</div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">AI & Data</h3>
              <div className="space-y-2 text-slate-300">
                <div>• Generative AI & LLMs</div>
                <div>• Machine Learning</div>
                <div>• MLOps Platforms</div>
                <div>• Computer Vision</div>
                <div>• NLP & Analytics</div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">DevOps Tools</h3>
              <div className="space-y-2 text-slate-300">
                <div>• Terraform & Ansible</div>
                <div>• GitHub / GitLab</div>
                <div>• ArgoCD / Flux</div>
                <div>• Docker & Containerd</div>
                <div>• CI/CD Pipelines</div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Security</h3>
              <div className="space-y-2 text-slate-300">
                <div>• Cloud Security</div>
                <div>• DevSecOps</div>
                <div>• IAM & Access Control</div>
                <div>• Compliance Tools</div>
                <div>• Vulnerability Scanning</div>
              </div>
            </div>
          </div>

          {/* Client Sectors */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Industries We Serve</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {clients.map((client, idx) => (
                <div key={idx} className="bg-slate-800 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <div className="font-semibold text-white mb-1">{client.name}</div>
                  <div className="text-sm text-slate-400">{client.sector}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="flex items-start gap-4 mb-6">
              <Building className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">About Cirronyx</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Cirronyx is a technology consulting firm specializing in enterprise cloud infrastructure, 
                  artificial intelligence, and modern software delivery practices. We partner with organizations 
                  to transform their technology landscape and accelerate digital innovation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our team brings deep expertise from leading technology companies and successful delivery 
                  across multiple industries. We combine strategic thinking with hands-on technical implementation 
                  to deliver solutions that drive measurable business outcomes.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Our Approach</h4>
                <p className="text-sm text-slate-600">
                  We start by understanding your business goals, then architect solutions that align 
                  technology with strategy. Every engagement includes knowledge transfer to empower your teams.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Global Delivery</h4>
                <p className="text-sm text-slate-600">
                  With experience across North America and Europe, we understand the complexities of 
                  international deployments and regulatory requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Continuous Innovation</h4>
                <p className="text-sm text-slate-600">
                  We stay at the forefront of technology trends, continuously evaluating emerging tools 
                  and practices to bring you the most effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Engagement Model</h2>
            <p className="text-xl text-slate-600">
              A proven methodology for delivering enterprise AI and cloud transformations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Core Principles */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Core Engagement Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Clear Business Need</h4>
                      <p className="text-slate-600 text-sm">
                        Every project must solve a real, recognized pain point. We avoid "AI for AI's sake" 
                        and focus on measurable business outcomes from day one.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Measurable ROI</h4>
                      <p className="text-slate-600 text-sm">
                        Success is defined upfront with concrete metrics: cost reduction percentages, 
                        time savings, accuracy improvements, or revenue impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Contained Scope</h4>
                      <p className="text-slate-600 text-sm">
                        We start with focused pilots that don't require integrating with dozens of legacy 
                        systems, proving value before scaling enterprise-wide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Data Governance First</h4>
                      <p className="text-slate-600 text-sm">
                        All data must be accessible, of reasonable quality, and compliant with security 
                        and regulatory requirements before project initiation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Criteria */}
            <div className="bg-slate-900 text-white rounded-2xl p-10 mb-16">
              <h3 className="text-2xl font-bold mb-6">Multi-Dimensional Success Criteria</h3>
              <p className="text-slate-300 mb-6">
                We define success across multiple dimensions, not just technical delivery:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Technical Metrics</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Model performance (accuracy, latency, F1 score)</li>
                    <li>• Operational stability (uptime, error rates)</li>
                    <li>• System scalability and cost to operate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Business Impact</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Business KPIs (cost saved, revenue generated)</li>
                    <li>• User adoption rates and satisfaction</li>
                    <li>• Qualitative feedback from stakeholders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phased Approach */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Phased Implementation Approach</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Discovery & Foundation (Months 1-4)</h4>
                    <p className="text-slate-600 mb-3">
                      Build core infrastructure, establish security protocols, and select high-impact pilot 
                      project with clear ROI potential. Set up governance frameworks and success metrics.
                    </p>
                    <div className="text-sm text-slate-500">
                      Deliverables: Infrastructure setup, pilot selection, success criteria definition
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Pilot Development & Validation (Months 5-9)</h4>
                    <p className="text-slate-600 mb-3">
                      Develop and deploy pilot solution with dedicated squad. Gather user feedback, measure 
                      against defined KPIs, and iterate based on real-world usage patterns.
                    </p>
                    <div className="text-sm text-slate-500">
                      Deliverables: Working pilot, user feedback, ROI validation
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">Scaling & Enterprise Rollout (Months 10-18)</h4>
                    <p className="text-slate-600 mb-3">
                      Scale proven solutions enterprise-wide, enhance with additional capabilities, and 
                      establish centers of excellence for ongoing innovation and support.
                    </p>
                    <div className="text-sm text-slate-500">
                      Deliverables: Enterprise deployment, team training, operational handoff
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Integration */}
            <div className="mt-16 bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise Architecture Integration</h3>
              <p className="text-slate-600 mb-4">
                We specialize in integrating AI systems with existing enterprise infrastructure through proven patterns:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">AI-Powered API Facade</h4>
                  <p className="text-xs text-slate-600">
                    Intelligent wrappers around legacy systems, translating natural language to complex API calls
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Event-Driven Agents</h4>
                  <p className="text-xs text-slate-600">
                    Asynchronous processing with message queues for scalable, resilient multi-step workflows
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">RAG Knowledge Hubs</h4>
                  <p className="text-xs text-slate-600">
                    Centralized vector databases serving multiple applications with tailored contexts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="thought-leadership" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Thought Leadership</h2>
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
            <a href="#contact" className="inline-block bg-blue-600 text-white px-7 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition">
              Get in Touch
            </a>
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
    </main>
  );
}

export default Home;
