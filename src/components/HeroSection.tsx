import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, Sun, ChevronDown, GraduationCap, ShoppingBag } from 'lucide-react';
import { caseStudyOverview } from '../data/caseStudyData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreCaseStudy: () => void;
  onGoToStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCaseStudy, onGoToStudio }) => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-noise">
      
      {/* Editorial Watermark Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[20vw] font-cinzel font-bold text-white whitespace-nowrap z-0">
        SOLARA
      </div>

      {/* Atmospheric Organic Light Gradients (Hardware-accelerated Radial Glow) */}
      <div 
        className="absolute top-1/4 -right-28 w-[500px] h-[500px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)' }} 
      />
      <div 
        className="absolute bottom-10 -left-28 w-[500px] h-[500px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, transparent 70%)' }} 
      />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Editorial Subtitle Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-solara-gold/30 text-solara-gold-light text-xs font-semibold mb-8 backdrop-blur-xl shadow-glass"
        >
          <GraduationCap className="w-3.5 h-3.5 text-solara-gold" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-solara-gold/90">
            {t('ITI Capstone Defense — Digital Marketing', 'مناقشة تخرج معهد تكنولوجيا المعلومات (ITI)')}
          </span>
          <span className="w-1 h-1 rounded-full bg-solara-gold" />
          <span className="font-medium text-slate-200">
            {t('Modern Identity & Resort Lifestyle', 'هندسة علامات الهوية واللايف ستايل الصيفي')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-solara-gold animate-ping" />
        </motion.div>

        {/* Grand Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.15] mb-8 tracking-tight font-display"
        >
          {language === 'en' ? (
            <>
              Elevating Egyptian Crafts into a{' '}
              <span className="gold-gradient-text italic font-serif block sm:inline">
                Bespoke Summer Icon
              </span>
            </>
          ) : (
            <>
              تحويل المشغولات اليدوية إلى{' '}
              <span className="gold-gradient-text italic font-serif block sm:inline">
                أيقونة هوية صيفية
              </span>
            </>
          )}
        </motion.h1>

        {/* Editorial Manifesto Prose */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-12 font-normal"
        >
          {t(
            'An authoritative strategic case study dissecting how SOLARA was architected from zero: from market void discovery in Sahel to live 18k laser monogramming, 2K generative AI lookbooks, and high-margin unit economics.',
            'دراسة حالة استراتيجية تفكك الرحلة الكاملة لبناء براند SOLARA في مصر: من رصد الفجوة التنافسية في الساحل، إلى هندسة استوديو التخصيص بالليزر والذهب، وصناعة المحتوى التوليدي بالذكاء الاصطناعي، وتحقيق أعلى هوامش ربحية مستدامة.'
          )}
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
            <span>{t('Launch Live Customization Studio', 'تجربة استوديو التخصيص الحي')}</span>
          </button>

          <button
            onClick={onExploreCaseStudy}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 font-semibold text-sm border border-white/10 hover:border-solara-gold/40 backdrop-blur-xl transition-all flex items-center justify-center gap-2.5"
          >
            <span>{t('Explore Case Study Chapters', 'استكشاف فصول دراسة الحالة')}</span>
            {isRTL ? (
              <ArrowLeft className="w-4 h-4 text-solara-gold" />
            ) : (
              <ArrowRight className="w-4 h-4 text-solara-gold" />
            )}
          </button>

          <a
            href="#live-store"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-solara-gold/15 hover:bg-solara-gold/25 text-solara-gold-light font-bold text-sm border border-solara-gold/40 backdrop-blur-xl transition-all flex items-center justify-center gap-2.5 shadow-gold-glow hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4 text-solara-gold" />
            <span>{t('Live Store & Social Channels', 'المتجر والمنظومة الحية')}</span>
          </a>
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
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {language === 'en' ? metric.labelEn : metric.labelAr}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {language === 'en' ? metric.subtextEn : metric.subtextAr}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Floating Bottom Ambient Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-solara-gold/40 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>

    </section>
  );
};
