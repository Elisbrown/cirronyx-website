import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO/SEO';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("access_key", "82c7883d-2cc4-4258-9920-be7e5e6ca74b");
    data.append("subject", "New Contact Form Submission");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title="Contact" description="Get in touch with Cirronyx. Schedule a consultation or start your project today." canonical="/contact" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full blur-[140px]"></div>
          <div className="absolute top-10 left-10 w-60 h-60 bg-blue-300 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md mb-4">
            <Mail className="w-4 h-4 inline mr-2" />Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Something <span className="text-cyan-300">Great</span></h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Ready to accelerate your digital transformation? Connect with our team.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href="mailto:info@cirronyx.com" className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-sm text-slate-600">info@cirronyx.com</p>
            </a>

            <a href="https://calendar.app.google/5TfmhVHB2pd24i8B9" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-600 transition-colors">
                <Globe className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Schedule a Call</h3>
              <p className="text-sm text-slate-600">Book a free consultation</p>
            </a>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Global Presence</h3>
              <p className="text-sm text-slate-600">North America, Europe & Asia</p>
            </div>
          </div>

          {/* Form + Info */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Start Your Project</h2>
              <p className="text-slate-600 mb-8 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We have received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">How can we help? *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 group">
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-[#004058] to-[#002D3E] text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Why Cirronyx?</h3>
                <ul className="space-y-3">
                  {['Free initial consultation', 'No obligation assessment', 'Fast 24-hour response', 'Enterprise-grade solutions', 'Certified expert team'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3">Prefer a direct call?</h3>
                <p className="text-sm text-slate-600 mb-4">Book a free 30-minute discovery session with our team.</p>
                <a href="https://calendar.app.google/5TfmhVHB2pd24i8B9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition group">
                  Book a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
