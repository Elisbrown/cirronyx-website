import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle } from 'lucide-react';

import SEO from '../components/SEO/SEO';

const JobListing = ({ title, department, location, type, salary, description, requirements }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div 
        className="p-6 md:p-8 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {type}
            </span>
            {department && (
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {department}
              </span>
            )}
            {salary && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {salary}
              </span>
            )}
            <div className="flex items-center text-slate-500 text-sm ml-2">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <div className="ml-4">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-blue-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 md:px-8 pb-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-bold text-slate-900 mb-4">About the Role</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {description}
            </p>
            
            <h4 className="font-bold text-slate-900 mb-4">Requirements</h4>
            <ul className="space-y-3 mb-8">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2 group">
              Apply for this position
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function Careers() {
  const jobs = [
    /*
    {
      title: "Senior Cloud Architect",
      department: "Cloud Engineering",
      location: "Remote / Global",
      type: "Full-time",
      salary: "$150,000 - $190,000",
      description: "We are looking for a Senior Cloud Architect to lead the design and implementation of complex cloud infrastructures for our enterprise clients. You will work closely with stakeholders to understand business requirements and translate them into scalable, secure, and cost-effective cloud solutions.",
      requirements: [
        "10+ years of experience in IT infrastructure and cloud architecture",
        "Expertise in GCP, AWS, or Azure (Professional certifications required)",
        "Deep understanding of Infrastructure as Code (Terraform, Ansible)",
        "Experience with Kubernetes and container orchestration",
        "Strong communication skills and ability to lead technical teams"
      ]
    }
    */
  ];

  // Schema for job postings
  const jobSchema = jobs.map(job => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": "2024-05-01", // Should ideally be dynamic
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Cirronyx",
      "sameAs": "https://cirronyx.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.includes("New York") ? "New York" : "Remote",
        "addressRegion": job.location.includes("New York") ? "NY" : "Global",
        "addressCountry": "US"
      }
    }
  }));

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Careers"
        description="Join Cirronyx and help build the future of enterprise technology. Explore open positions in Cloud Architecture, AI, and DevOps."
        schemaData={jobSchema}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full border-l border-b border-blue-400 rotate-12 transform origin-top-right"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-1 rounded-full text-sm font-medium">
              Join Our Mission
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Build the Future of <span className="text-blue-400">Enterprise Tech</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            We're a team of passionate architects, engineers, and innovators dedicated to solving 
            the world's most complex technology challenges. Join us and make an impact.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#openings" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impactful Work</h3>
              <p className="text-slate-600">Work on mission-critical projects for Fortune 500 companies that shape industries.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexibility</h3>
              <p className="text-slate-600">Remote-first culture with flexible working hours to support your work-life harmony.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-slate-600">Continuous learning budget, certification support, and clear paths for advancement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Current Openings</h2>
          <p className="text-xl text-slate-600">Find your next challenge at Cirronyx</p>
        </div>
        
        <div className="space-y-6">
          {jobs.length > 0 ? (
            jobs.map((job, idx) => (
              <JobListing key={idx} {...job} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No open positions at the moment</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                We're not actively hiring for specific roles right now, but we are always looking for great talent. 
                Please feel free to submit a general application below!
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-16 bg-blue-900 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll keep 
              you in mind for future opportunities.
            </p>
            <a href="mailto:careers@cirronyx.com" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition inline-block">
              Send General Application
            </a>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
