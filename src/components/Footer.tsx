import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-slate-900 rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                CLEARLINE <span className="font-light">CAPITAL</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Investing with clarity. Creating long-term value. Clearline Capital is a private equity fund focused on strategic, sustainable growth in niche markets.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Focus Areas</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Latest Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulatory Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2026 Clearline Capital. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span>Registered in England & Wales</span>
            <span>FCA Regulated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
