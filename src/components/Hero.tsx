import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
            Private Equity Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Investing with <span className="text-slate-500 italic font-serif">Clarity</span><br />
            Creating Long Term Value.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Clearline Capital is building the UK’s leading group of B2B services businesses through thoughtful acquisitions and hands-on operational stewardship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#focus" 
              className="group bg-slate-900 text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
            >
              Explore Opportunities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#insights" 
              className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-sm font-medium hover:bg-slate-50 transition-all text-center"
            >
              Latest Insights
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex gap-4 items-center text-slate-400 text-xs tracking-widest uppercase vertical-rl rotate-180">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
