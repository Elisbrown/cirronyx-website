import React, { useState } from 'react';
import { Cloud, Brain, Code, Shield, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import MagicBento from '../components/MagicBento/MagicBento';
import ServiceModal from '../components/ServiceModal/ServiceModal';
import servicesData from '../data/services.json';

const iconMap = { Cloud, Brain, Code, Shield, GraduationCap, TrendingUp };
const colors = ['#004058', '#006890', '#2E94AE', '#002D3E', '#004058', '#006890'];

function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedService = selectedIndex !== null ? servicesData[selectedIndex] : null;
  const SelectedIcon = selectedService ? iconMap[selectedService.icon] : null;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title="Services" description="Cloud, AI, DevOps, Cybersecurity, FinOps and Training solutions." canonical="/services" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#004058] to-[#006890] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-[160px] -translate-x-1/2"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md mb-4">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-cyan-400">Services</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">Comprehensive technology solutions that drive business transformation.</p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <MagicBento
            cards={servicesData.map((s, i) => {
              const Icon = iconMap[s.icon];
              return { title: s.title, description: s.description, label: s.tagline, color: colors[i % colors.length], iconNode: <Icon className="w-6 h-6 text-cyan-400" /> };
            })}
            glowColor="46, 148, 174"
            onCardClick={(i) => setSelectedIndex(i)}
          />
        </div>
      </section>

      {/* List view */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">All Services at a Glance</h2>
          <div className="space-y-6">
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all cursor-pointer group hover:border-blue-300" onClick={() => setSelectedIndex(idx)}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: colors[idx % colors.length] }}>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-cyan-700 font-medium mb-2">{service.tagline}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#004058] to-[#002D3E] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">Let's discuss how our services can accelerate your digital transformation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#004058] px-8 py-3 rounded-full font-bold hover:shadow-xl transition group">
            Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          iconNode={SelectedIcon ? <SelectedIcon className="w-6 h-6 text-cyan-400" /> : null}
          color={colors[selectedIndex % colors.length]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
}

export default Services;
