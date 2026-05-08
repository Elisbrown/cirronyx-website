import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Zap, Shield, CheckCircle, Server, Workflow, Database } from 'lucide-react';
import SEO from '../components/SEO/SEO';
import DotGrid from '../components/DotGrid/DotGrid';
import MagicBento from '../components/MagicBento/MagicBento';
import BorderGlow from '../components/BorderGlow/BorderGlow';

const HowWeWork = () => {
  const principles = [
    {
      title: "Clear Business Need",
      description: "Every project must solve a real, recognized pain point. We avoid \"AI for AI's sake\" and focus on measurable business outcomes from day one.",
      label: "Foundation",
      iconNode: <Target className="w-6 h-6 text-cyan-400" />,
      color: "#004058"
    },
    {
      title: "Measurable ROI",
      description: "Success is defined upfront with concrete metrics: cost reduction percentages, time savings, accuracy improvements, or revenue impact.",
      label: "Value",
      iconNode: <TrendingUp className="w-6 h-6 text-green-400" />,
      color: "#006890"
    },
    {
      title: "Contained Scope",
      description: "We start with focused pilots that don't require integrating with dozens of legacy systems, proving value before scaling enterprise-wide.",
      label: "Agility",
      iconNode: <Zap className="w-6 h-6 text-yellow-400" />,
      color: "#2E94AE"
    },
    {
      title: "Data Governance First",
      description: "All data must be accessible, of reasonable quality, and compliant with security and regulatory requirements before project initiation.",
      label: "Security",
      iconNode: <Shield className="w-6 h-6 text-purple-400" />,
      color: "#002D3E",
      className: "lg:col-span-2"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="How We Work | Cirronyx"
        description="Our proven engagement methodology for delivering enterprise AI and cloud transformations."
      />
      
      {/* Hero Section with DotGrid Background */}
      <section className="pt-32 pb-20 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* DotGrid Background */}
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              <Workflow className="w-4 h-4 inline mr-2" />
              Proven Methodology
            </span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Engagement Model
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            A battle-tested approach for delivering enterprise AI and cloud transformations with precision and measurable impact.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Engagement Principles</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The foundational rules that guide every Cirronyx project to success.
            </p>
          </div>
          <div className="w-full relative">
            <MagicBento 
              cards={principles}
              glowColor="46, 148, 174"
              enableSpotlight={true}
              enableTilt={true}
            />
          </div>
        </div>
      </section>

      {/* Multi-Dimensional Success Criteria */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multi-Dimensional Success Criteria</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We define success across multiple dimensions, not just technical delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BorderGlow
              className="w-full h-full"
              backgroundColor="#0f172a"
              colors={['#3b82f6', '#60a5fa', '#93c5fd']}
              glowColor="213 100 60"
              borderRadius={16}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Technical Metrics</h3>
                <ul className="space-y-4 text-slate-300 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Model performance (accuracy, latency, F1 score)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Operational stability (uptime, error rates)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>System scalability and cost to operate</span>
                  </li>
                </ul>
              </div>
            </BorderGlow>

            <BorderGlow
              className="w-full h-full"
              backgroundColor="#0f172a"
              colors={['#10b981', '#34d399', '#6ee7b7']}
              glowColor="160 100 60"
              borderRadius={16}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Business Impact</h3>
                <ul className="space-y-4 text-slate-300 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Business KPIs (cost saved, revenue generated)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>User adoption rates and satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Qualitative feedback from stakeholders</span>
                  </li>
                </ul>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>

      {/* Phased Approach */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Phased Implementation Approach</h2>
            <p className="text-xl text-slate-600">
              A structured, risk-mitigated path from concept to enterprise rollout.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Discovery & Foundation",
                timeframe: "Months 1-4",
                description: "Build core infrastructure, establish security protocols, and select high-impact pilot project with clear ROI potential. Set up governance frameworks and success metrics.",
                deliverables: "Infrastructure setup, pilot selection, success criteria definition",
                color: "from-blue-600 to-blue-400",
                shadow: "shadow-blue-200"
              },
              {
                step: "2",
                title: "Pilot Development & Validation",
                timeframe: "Months 5-9",
                description: "Develop and deploy pilot solution with dedicated squad. Gather user feedback, measure against defined KPIs, and iterate based on real-world usage patterns.",
                deliverables: "Working pilot, user feedback, ROI validation",
                color: "from-cyan-600 to-cyan-400",
                shadow: "shadow-cyan-200"
              },
              {
                step: "3",
                title: "Scaling & Enterprise Rollout",
                timeframe: "Months 10-18",
                description: "Scale proven solutions enterprise-wide, enhance with additional capabilities, and establish centers of excellence for ongoing innovation and support.",
                deliverables: "Enterprise deployment, team training, operational handoff",
                color: "from-indigo-600 to-indigo-400",
                shadow: "shadow-indigo-200"
              }
            ].map((phase, i) => (
              <div key={i} className="group relative flex gap-8 md:gap-12 items-start bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg ${phase.shadow} transform group-hover:scale-110 transition-transform duration-300`}>
                  {phase.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{phase.timeframe}</span>
                  </div>
                  <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-800 text-sm block mb-1">Key Deliverables:</span>
                    <span className="text-slate-600 text-sm">{phase.deliverables}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Integration */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Architecture Integration</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in integrating AI systems with existing enterprise infrastructure through proven patterns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Workflow className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered API Facade</h3>
              <p className="text-slate-600 leading-relaxed">
                Intelligent wrappers around legacy systems, translating natural language to complex API calls.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                <Zap className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Event-Driven Agents</h3>
              <p className="text-slate-600 leading-relaxed">
                Asynchronous processing with message queues for scalable, resilient multi-step workflows.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <Database className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">RAG Knowledge Hubs</h3>
              <p className="text-slate-600 leading-relaxed">
                Centralized vector databases serving multiple applications with tailored contexts.
              </p>
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
    </div>
  );
};

export default HowWeWork;
