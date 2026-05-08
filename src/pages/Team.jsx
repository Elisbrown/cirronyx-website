import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import teamData from '../data/team.json';

function Team() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Team"
        description="Meet the leadership team at Cirronyx — certified professionals with deep expertise in cloud, AI, and DevOps."
        canonical="/team"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#002D3E] to-[#004058] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/10 border border-white/20 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-md">
              <Users className="w-4 h-4 inline mr-2" />
              Our People
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Leadership <span className="text-cyan-400">Team</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experienced technology leaders driving innovation across cloud, AI, security, and DevOps.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {teamData.map((leader) => (
              <div key={leader.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-[#004058] to-[#006890] p-8 text-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="relative z-10">
                    {leader.photo ? (
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-2xl border-2 border-white/20 mb-4"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/20 mb-4"
                      style={{ display: leader.photo ? 'none' : 'flex' }}
                    >
                      <Users className="w-14 h-14 text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                    <div className="text-cyan-300 font-medium text-sm">{leader.title}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">{leader.bio}</p>

                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-2">Core Expertise</h4>
                      <ul className="space-y-1.5">
                        {leader.expertise.map((exp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1">Education</h4>
                      <p className="text-sm text-slate-600">{leader.education}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1">Certifications</h4>
                      <p className="text-sm text-slate-600">{leader.certifications}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We're always looking for talented engineers, architects, and consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View Open Positions
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
