import React from 'react';
import { ArrowUp, Sun } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-solara-obsidian py-20 px-4 sm:px-6 lg:px-8 text-right relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Details */}
        <div className="space-y-3 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center font-bold font-cinzel text-base border border-solara-gold/40 shadow-gold-glow">
              <Sun className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-[0.25em] text-white font-cinzel">SOLARA</span>
            <span className="text-xs bg-solara-gold/15 text-solara-gold px-3 py-1 rounded-full border border-solara-gold/30 font-mono">
              [ MASTER BRAND CASE STUDY ]
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            مشروع تخرج التسويق الرقمي — معهد تكنولوجيا المعلومات (ITI). تم بناؤه وتوثيقه كمرجع استراتيجي لتأسيس علامات الهوية الصيفية والتخصيص في مصر.
          </p>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all hover:text-solara-gold hover:border-solara-gold/40 shadow-glass"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© 2025–2026 SOLARA Brand. All Strategic Materials & Case Study Rights Reserved.</span>
        <span className="font-mono text-[10px] text-solara-gold/70">Engineered with Coastal Luxury Aesthetics & Modern Web Standards ☀️</span>
      </div>
    </footer>
  );
};
