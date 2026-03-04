import React from 'react';
import { motion } from 'motion/react';
import { FOCUS_AREAS } from '../constants';
import * as LucideIcons from 'lucide-react';

const FocusAreas = () => {
  return (
    <section id="focus" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Our Focus</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              Specialized Expertise in <br />
              High-Growth Sectors.
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
            We focus on B2B services where we can apply hands-on operational stewardship to preserve culture and drive local performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area, index) => {
            const IconComponent = (LucideIcons as any)[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
