import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Partners in Strategic Growth
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Founded in 2025, Clearline Capital is on a mission to build the UK’s leading group of B2B services businesses. Our strategy is focused and deliberate - we aim to acquire 1 to 2 business units per year, ensuring cultural alignment and long-term potential.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1974" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900 hidden md:flex items-center justify-center p-6">
              <span className="text-white text-xs font-bold tracking-tighter leading-none">
                BUILT ON <br />TRUST
              </span>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Our Leadership</h2>
            <h3 className="text-3xl font-bold text-slate-900">The Minds Behind Clearline</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-full md:w-48 h-64 flex-shrink-0 bg-slate-100 rounded-sm overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-500 font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
