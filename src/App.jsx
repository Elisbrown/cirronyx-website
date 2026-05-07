import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CardNav from './components/CardNav/CardNav';
import Home from './pages/Home';
import Careers from './pages/Careers';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Handle scrolling to hash sections when navigating from other pages
function HandleHashScroll() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const target = document.querySelector(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HandleHashScroll />
      <div className="min-h-screen bg-slate-50">
        {/* Header/Navigation — CardNav */}
        <CardNav
          logo="/logo.png"
          logoAlt="Cirronyx Logo"
          items={[
            {
              label: 'Solutions',
              bgColor: '#004058',
              textColor: '#fff',
              links: [
                { label: 'Services', href: '#services', ariaLabel: 'Our Services' },
                { label: 'Portfolio', href: '#portfolio', ariaLabel: 'Success Stories' },
                { label: 'How We Work', href: '#engagement', ariaLabel: 'Engagement Model' },
              ],
            },
            {
              label: 'Company',
              bgColor: '#002D3E',
              textColor: '#fff',
              links: [
                { label: 'About', href: '#about', ariaLabel: 'About Cirronyx' },
                { label: 'Team', href: '#team', ariaLabel: 'Leadership Team' },
                { label: 'Careers', href: '/careers', ariaLabel: 'Career Opportunities' },
              ],
            },
            {
              label: 'Resources',
              bgColor: '#004058',
              textColor: '#fff',
              links: [
                { label: 'Blog', href: '#blog', ariaLabel: 'Blog & Articles' },
                { label: 'Thought Leadership', href: '#thought-leadership', ariaLabel: 'Thought Leadership' },
                { label: 'Contact', href: '#contact', ariaLabel: 'Get in Touch' },
              ],
            },
          ]}
          baseColor="rgba(255,255,255,0.95)"
          menuColor="#004058"
          buttonBgColor="#006890"
          buttonTextColor="#fff"
          ctaLabel="Get Started"
          ctaHref="#contact"
          ease="power3.out"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">Cirronyx</h3>
                <p className="text-slate-400 mb-4">
                  Enterprise Cloud, AI & DevOps Consulting
                </p>
                <p className="text-sm text-slate-500">
                  Transforming businesses through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/#services" className="hover:text-white transition">Cloud Migration</a></li>
                  <li><a href="/#services" className="hover:text-white transition">AI/ML Solutions</a></li>
                  <li><a href="/#services" className="hover:text-white transition">DevOps</a></li>
                  <li><a href="/#services" className="hover:text-white transition">Cybersecurity</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/#about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/#portfolio" className="hover:text-white transition">Portfolio</a></li>
                  <li><a href="/#team" className="hover:text-white transition">Team</a></li>
                  <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
                  <li><a href="/#engagement" className="hover:text-white transition">How We Work</a></li>
                  <li><a href="/#blog" className="hover:text-white transition">Blog</a></li>
                  <li><a href="/#thought-leadership" className="hover:text-white transition">Thought Leadership</a></li>
                  <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm">
              <p>© 2026 Cirronyx. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
