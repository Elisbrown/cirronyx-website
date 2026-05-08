import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import CardNav from './components/CardNav/CardNav';
import Home from './pages/Home';
import Careers from './pages/Careers';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import HowWeWork from './pages/HowWeWork';
import SEO from './components/SEO/SEO';
import Footer from './components/Footer/Footer';

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cirronyx",
    "url": "https://cirronyx.com",
    "logo": "https://cirronyx.com/logo.png",
    "description": "Enterprise Cloud, AI & DevOps Consulting",
    "sameAs": [
      "https://www.linkedin.com/company/cirronyx",
      "https://twitter.com/cirronyx"
    ]
  };

  return (
    <Router>
      <SEO 
        description="Transform your business with proven expertise in cloud infrastructure, artificial intelligence, and modern software delivery."
        keywords="Cloud Consulting, AI Solutions, DevOps, Google Cloud, AWS, Azure, Machine Learning, Enterprise Technology"
        schemaData={organizationSchema}
      />
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
                { label: 'Services', href: '/services', ariaLabel: 'Our Services' },
                { label: 'Portfolio', href: '/#portfolio', ariaLabel: 'Success Stories' },
                { label: 'How We Work', href: '/how-we-work', ariaLabel: 'Engagement Model' },
              ],
            },
            {
              label: 'Company',
              bgColor: '#002D3E',
              textColor: '#fff',
              links: [
                { label: 'About', href: '/about', ariaLabel: 'About Cirronyx' },
                { label: 'Team', href: '/team', ariaLabel: 'Leadership Team' },
                { label: 'Careers', href: '/careers', ariaLabel: 'Career Opportunities' },
              ],
            },
            {
              label: 'Resources',
              bgColor: '#004058',
              textColor: '#fff',
              links: [
                { label: 'Blog', href: '/blog', ariaLabel: 'Blog & Articles' },
                { label: 'Thought Leadership', href: '/about#thought-leadership', ariaLabel: 'Thought Leadership' },
                { label: 'Contact', href: '/contact', ariaLabel: 'Get in Touch' },
              ],
            },
          ]}
          baseColor="rgba(255,255,255,0.95)"
          menuColor="#004058"
          buttonBgColor="#006890"
          buttonTextColor="#fff"
          ctaLabel="Get Started"
          ctaHref="/contact"
          ease="power3.out"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
