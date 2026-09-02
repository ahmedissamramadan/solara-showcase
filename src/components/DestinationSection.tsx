import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Sparkles, CheckCircle2, DollarSign, Tag, ArrowRight } from 'lucide-react';
import { destinationsData, Destination } from '../data/destinationData';
import { useLanguage } from '../context/LanguageContext';

export const DestinationSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeDestination, setActiveDestination] = useState<string>('sahel-premium');

  const currentDest = destinationsData.find((d) => d.id === activeDestination) || destinationsData[0];

  return (
    <section id="destinations" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 08 — REGIONAL SUMMER DESTINATION ARCHITECTURE', 'الوحدة 08 — معمارية الوجهات الصيفية الإقليمية')} ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>{t('Micro-Market Coastal Destination Strategy', 'استراتيجية الوجهات الصيفية والميكرو-ماركت')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Egyptian Coastal Destinations & <span className="gold-gradient-text">Lifestyle Mapping</span>
            </>
          ) : (
            <>
              استراتيجية <span className="gold-gradient-text">الوجهات الصيفية المصرية</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'The Egyptian summer is not monolithic. Each coastal enclave possesses distinct visual cultures, spending appetites, and product requirements. How we tailored SOLARA across Sahel, El Gouna, and Dahab.',
            'سوق الصيف المصري ليس كتلة واحدة؛ كل وجهة ساحلية تمتلك هويتها البصرية، سلوكها الشرائي، ومواصفات منتج فريدة. كيف هندسنا منتجات SOLARA لتلائم خصوصية الساحل، الجونة، ودهب؟'
          )}
        </p>
      </div>

      {/* Destination Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {destinationsData.map((dest) => {
          const isSelected = dest.id === activeDestination;
          return (
            <button
              key={dest.id}
              onClick={() => setActiveDestination(dest.id)}
              className={`p-4 sm:p-5 rounded-2xl transition-all border text-xs flex flex-col justify-between space-y-2 relative overflow-hidden ${
                isRTL ? 'text-right' : 'text-left'
              } ${
                isSelected
                  ? 'bg-solara-gold/20 border-solara-gold text-white shadow-luxury scale-102 font-bold'
                  : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${isSelected ? 'text-solara-gold' : 'text-slate-400'}`} />
                  <span className="font-bold text-xs sm:text-sm">
                    {language === 'en' ? dest.nameEn.split('—')[0] : dest.nameAr.split('—')[0]}
                  </span>
                </div>
                <div className="flex gap-1">
                  {dest.colorPalette.slice(0, 2).map((c, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-mono truncate block">
                {language === 'en' ? dest.nameEn.split('—')[1] || dest.nameEn : dest.nameAr.split('—')[1] || dest.nameAr}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Destination Deep Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDest.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className={`glass-panel p-8 sm:p-12 rounded-3xl border border-solara-gold/40 shadow-luxury bg-gradient-to-br ${currentDest.bgGradient} relative overflow-hidden ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs text-solara-gold font-mono tracking-widest uppercase block mb-1">
                  {currentDest.nameEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {language === 'en' ? currentDest.nameEn : currentDest.nameAr}
                </h3>
              </div>

              {/* Vibe & Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
                  <span className="text-[10px] text-solara-gold font-bold uppercase tracking-wider block">
                    {t('Resort Vibe & Coastal Mood', 'الأجواء والمزاج (Vibe)')}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {language === 'en' ? currentDest.vibeEn : currentDest.vibeAr}
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
                  <span className="text-[10px] text-solara-gold font-bold uppercase tracking-wider block">
                    {t('Primary Demographic Segment', 'الجمهور المستهدف (Audience)')}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {language === 'en' ? currentDest.targetAudienceEn : currentDest.targetAudienceAr}
                  </p>
                </div>
              </div>

              {/* Product Requirements */}
              <div className="bg-solara-gold/10 p-5 rounded-2xl border border-solara-gold/20 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-solara-gold" />
                  <span className="text-xs font-bold text-solara-gold uppercase tracking-wider">
                    {t('Engineered Product Requirements for this Enclave', 'مواصفات وتجهيز المنتج المخصص لهذه الوجهة')}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {(language === 'en' ? currentDest.productRequirementsEn : currentDest.productRequirementsAr).map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-solara-gold shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Micro Pricing & Palettes */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                  {t('Coastal Basket Economics', 'المعايير المالية والتسعير')}
                </span>
                <div className="flex justify-between items-center text-xs text-slate-300 border-b border-white/10 pb-2">
                  <span>{t('Average Basket (AOV):', 'متوسط قيمة السلة:')}</span>
                  <span className="text-solara-gold font-bold font-mono">{currentDest.avgOrderValue}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>{t('Curated Collection:', 'المجموعة المقترحة:')}</span>
                  <span className="text-emerald-400 font-mono text-xs">
                    {currentDest.recommendedCollection}
                  </span>
                </div>
              </div>

              {/* Destination Color Palette */}
              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  {t('Harmonized Palette Tokens', 'لوحة ألوان الوجهة')}
                </span>
                <div className="flex gap-2">
                  {currentDest.colorPalette.map((col, idx) => (
                    <div key={idx} className="flex-1 text-center">
                      <div className="h-7 rounded-lg border border-white/20 mb-1" style={{ backgroundColor: col }} />
                      <span className="text-[9px] text-slate-400 font-mono">{col}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
