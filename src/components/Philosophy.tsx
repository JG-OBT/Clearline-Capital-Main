import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_POINTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">How We Invest</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">
                A Disciplined Approach to <br />
                <span className="text-slate-400 italic font-serif">Value Creation.</span>
              </h3>
              <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                Our investment philosophy is built on the belief that sustainable growth requires more than just capital. It requires a shared vision, operational excellence, and a commitment to integrity.
              </p>
            </motion.div>

            <div className="space-y-8">
              {PHILOSOPHY_POINTS.map((point, index) => (
                <motion.div 
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{point.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-slate-800 rounded-sm p-8 flex flex-col justify-end">
                  <div className="text-4xl font-bold mb-2">01</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Discovery</div>
                </div>
                <div className="aspect-square bg-slate-700 rounded-sm p-8 flex flex-col justify-end">
                  <div className="text-4xl font-bold mb-2">02</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">Analysis</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-slate-600 rounded-sm p-8 flex flex-col justify-end">
                  <div className="text-4xl font-bold mb-2">03</div>
                  <div className="text-xs uppercase tracking-widest text-slate-300">Partnership</div>
                </div>
                <div className="aspect-square bg-slate-500 rounded-sm p-8 flex flex-col justify-end">
                  <div className="text-4xl font-bold mb-2">04</div>
                  <div className="text-xs uppercase tracking-widest text-slate-200">Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
