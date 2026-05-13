import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "82c7883d-2cc4-4258-9920-be7e5e6ca74b");
    formData.append("subject", "New Newsletter Submission");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setSubmitted(true);
      event.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="py-12 bg-white sm:pt-16 lg:pt-20 border-t border-slate-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-start items-center">
           <img className="h-10 w-auto" src="/logo.png" alt="Cirronyx Logo" style={{ filter: 'brightness(0) invert(0)' }} />
        </div>

        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-12 mt-12">
          {/* Services */}
          <div>
            <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Services</p>
            <ul className="mt-6 space-y-4">
              <li><Link to="/services" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Cloud Migration</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">AI/ML Solutions</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">DevOps</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              <li><Link to="/about" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">About Us</Link></li>
              <li><Link to="/team" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Team</Link></li>
              <li><Link to="/careers" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Careers</Link></li>
              <li><Link to="/how-we-work" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">How We Work</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Resources</p>
            <ul className="mt-6 space-y-4">
              <li><Link to="/blog" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Blog & Articles</Link></li>
              <li><Link to="/#portfolio" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Success Stories</Link></li>
              <li><Link to="/contact" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Subscribe to newsletter</p>
            
            <div className="mt-6 relative max-w-md">
              {/* Gradient border effect from snippet */}
              <div className="absolute -inset-1.5">
                <div className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
              </div>
              <form onSubmit={onSubmit} className="relative mt-2 rounded-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter email address" className="block w-full px-4 py-3 text-base text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" required />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                    {submitted ? "Joined!" : "Join"}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-10">
              {/* <div>
                <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Call Us</p>
                <p className="mt-2 text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <a href="tel:2395550108">(239) 555-0108</a>
                </p>
              </div> */}
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">Email Us</p>
                <p className="mt-2 text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <a href="mailto:info@cirronyx.com">info@cirronyx.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-16 mb-8 border-slate-200" />

        <div className="flex flex-col items-center justify-between sm:flex-row pb-4">
          <p className="text-sm text-slate-500 order-2 sm:order-1 mt-6 sm:mt-0">
            © Copyright 2026, All Rights Reserved
          </p>

          <ul className="flex items-center space-x-3 order-1 sm:order-2">
            <li>
              <a href="https://twitter.com/cirronyx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-400 transition-all duration-200 bg-white border border-slate-200 rounded-full w-10 h-10 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/cirronyx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-400 transition-all duration-200 bg-white border border-slate-200 rounded-full w-10 h-10 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/cirronyx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-400 transition-all duration-200 bg-white border border-slate-200 rounded-full w-10 h-10 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://github.com/cirronyx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-400 transition-all duration-200 bg-white border border-slate-200 rounded-full w-10 h-10 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
