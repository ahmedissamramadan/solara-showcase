import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Sun, ChevronDown } from 'lucide-react';
import { caseStudyOverview } from '../data/caseStudyData';

interface HeroSectionProps {
  onExploreCaseStudy: () => void;
  onGoToStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCaseStudy, onGoToStudio }) => {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-noise">
      
      {/* Editorial Watermark Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[20vw] font-cinzel font-bold text-white whitespace-nowrap z-0">
        SOLARA
      </div>

      {/* Atmospheric Organic Light Gradients */}
      <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-solara-gold/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -left-28 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Editorial Subtitle Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-solara-gold/30 text-solara-gold-light text-xs font-semibold mb-8 backdrop-blur-xl shadow-glass"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-solara-gold/80">
            [ ITI Digital Marketing Archive ]
          </span>
          <span className="w-1 h-1 rounded-full bg-solara-gold" />
          <span className="font-medium text-slate-200">هندسة علامات الهوية واللايف ستايل الصيفي</span>
          <span className="w-1.5 h-1.5 rounded-full bg-solara-gold animate-ping" />
        </motion.div>

        {/* Grand Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.15] mb-8 tracking-tight font-display"
        >
          تحويل المشغولات اليدوية إلى{' '}
          <span className="gold-gradient-text italic font-serif block sm:inline">أيقونة هوية صيفية</span>
        </motion.h1>

        {/* Editorial Manifesto Prose */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-12 font-normal"
        >
          دراسة حالة استراتيجية تفكك الرحلة الكاملة لبناء براند <strong className="text-solara-gold font-bold">SOLARA</strong> في مصر: 
          من رصد الفجوة التنافسية في الساحل، إلى هندسة استوديو التخصيص بالليزر والذهب، وصناعة المحتوى التوليدي بالذكاء الاصطناعي، وتحقيق أعلى هوامش ربحية مستدامة.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={onGoToStudio}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark font-bold text-sm shadow-gold-glow hover:shadow-luxury hover:scale-105 transition-all flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-solara-navy-dark group-hover:rotate-12 transition-transform" />
            <span>تجربة استوديو التخصيص الحي (Live Studio)</span>
          </button>

          <button
            onClick={onExploreCaseStudy}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 font-semibold text-sm border border-white/10 hover:border-solara-gold/40 backdrop-blur-xl transition-all flex items-center justify-center gap-2.5"
          >
            <span>استكشاف فصول دراسة الحالة</span>
            <ArrowLeft className="w-4 h-4 text-solara-gold" />
          </button>
        </motion.div>

        {/* Architectural Live Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {caseStudyOverview.heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-3xl text-center border border-white/[0.06] hover:border-solara-gold/40 transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text mb-1 font-serif group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {metric.subtext}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-14 text-slate-500 flex flex-col items-center gap-1.5 text-[11px] tracking-wider"
        >
          <span>مرر للأسفل لقراءة الفصول الاستراتيجية</span>
          <ChevronDown className="w-4 h-4 text-solara-gold" />
        </motion.div>

      </div>
    </section>
  );
};
