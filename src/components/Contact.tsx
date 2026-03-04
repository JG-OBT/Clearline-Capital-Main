import React from 'react';
import { motion } from 'motion/react';
import { Mail, Youtube, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Let's Build the Future <br />
              <span className="text-slate-400 italic font-serif">Together.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you're a founder looking for a strategic partner or an institutional investor seeking clarity, we'd love to hear from you.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:contact@clearlinecapital.co.uk"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Email Us
                  </div>
                  <div className="text-slate-900 font-medium">
                    contact@clearlinecapital.co.uk
                  </div>
                </div>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@Oscar_Lindhardt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-sm shadow-xl border border-slate-100"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="Investment Inquiry"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-slate-900 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;