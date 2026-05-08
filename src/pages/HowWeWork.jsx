import React from 'react';
import { Target, TrendingUp, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO/SEO';

const HowWeWork = () => {
  return (
    <div className="bg-white min-h-screen pt-24">
      <SEO 
        title="How We Work | Cirronyx"
        description="Our proven engagement methodology for delivering enterprise AI and cloud transformations."
      />
      {/* Engagement Model */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Engagement Model</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
    </div>
  );
};

export default HowWeWork;
