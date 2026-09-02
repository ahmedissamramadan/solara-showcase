import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, XCircle, CheckCircle2, User, Heart, Target } from 'lucide-react';
import { caseStudyOverview } from '../data/caseStudyData';
import { solaraPersonas } from '../data/competitorsData';
import { useLanguage } from '../context/LanguageContext';

export const StrategicShiftSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [selectedPersona, setSelectedPersona] = useState(solaraPersonas[0]);

  return (
    <section id="strategic-shift" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 02 — STRATEGIC POSITIONING & BUYER PSYCHOLOGY', 'الوحدة 02 — التموضع الاستراتيجي وسيكولوجية المستهلك')} ]
      </div>

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>{t('Strategic Positioning & Consumer Psychology', 'التموضع الاستراتيجي وسيكولوجية المشتري')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              The Fundamental Strategic Shift <span className="gold-gradient-text">Behind SOLARA</span>
            </>
          ) : (
            <>
              التحول الاستراتيجي الجوهري <span className="gold-gradient-text">لبراند SOLARA</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'The secret of brand differentiation is never rooted solely in physical materials, but in the psychological positioning anchoring the product to the consumer’s aspirational identity.',
            'السر في نجاح أي علامة تجارية لا يكمن في المنتج بحد ذاته، بل في التموضع النفسي (Psychological Positioning) الذي يربط القطعة بهوية العميل الاجتماعية.'
          )}
        </p>
      </div>

      {/* Part 1: The Shift Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        
        {/* The Old Way (Trap) */}
        <div className={`glass-panel p-8 sm:p-10 rounded-3xl border border-red-500/20 bg-red-950/[0.08] relative overflow-hidden group hover:border-red-500/40 transition-all ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <XCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-200">
                {language === 'en' ? caseStudyOverview.theShift.from.titleEn : caseStudyOverview.theShift.from.titleAr}
              </h3>
              <p className="text-xs text-red-400/80">
                {t('A low-barrier model causing rapid margin depletion', 'نموذج يؤدي سريعاً لتآكل الهوامش والتوقف')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {(language === 'en' 
              ? caseStudyOverview.theShift.from.traitsEn 
              : caseStudyOverview.theShift.from.traitsAr
            ).map((trait, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The SOLARA Way (Identity Brand) */}
        <div className={`glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/[0.07] to-transparent relative overflow-hidden shadow-luxury group hover:border-solara-gold transition-all ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center shrink-0 shadow-gold-glow">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-solara-gold-light">
                {language === 'en' ? caseStudyOverview.theShift.to.titleEn : caseStudyOverview.theShift.to.titleAr}
              </h3>
              <p className="text-xs text-solara-gold/80">
                {t('A high-moat system creating compound perceived value & retention', 'نموذج يصنع قيمة مدركة متضاعفة وولاءً طويل الأمد')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {(language === 'en'
              ? caseStudyOverview.theShift.to.traitsEn
              : caseStudyOverview.theShift.to.traitsAr
            ).map((trait, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-medium">
                <Sparkles className="w-4 h-4 text-solara-gold shrink-0 mt-0.5" />
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Part 2: Interactive Buyer Personas */}
      <div className="mt-20">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div>
            <span className="text-xs text-solara-gold font-bold uppercase tracking-wider block mb-1">
              {t('STP Framework Calibration', 'هندسة إطار الـ STP')}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {t('Target Buyer Personas', 'الشخصيات الشرائية المستهدفة (Target Personas)')}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            {t(
              'Three curated archetypes covering primary acquisition vectors: Digital-first trendsetters, sentimental gifters, and mindful eco-minimalists.',
              'تم تفصيل 3 شخصيات رئيسية تغطي كافة دوافع الشراء: الاستعراض الصيفي، الإهداء العاطفي، والبحث عن الحرفية النظيفة.'
            )}
          </p>
        </div>

        {/* Persona Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {solaraPersonas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona)}
              className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-3 ${
                selectedPersona.id === persona.id
                  ? 'bg-solara-gold text-solara-navy-dark border-solara-gold shadow-gold-glow scale-102 font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{language === 'en' ? persona.nameEn.split('—')[0] : persona.nameAr.split('—')[0]}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                selectedPersona.id === persona.id ? 'bg-solara-navy-dark text-solara-gold font-mono' : 'bg-white/10 text-slate-400'
              }`}>
                {language === 'en' ? persona.archetypeEn.split(' ')[0] : persona.archetypeAr.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <motion.div
          key={selectedPersona.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`glass-panel p-8 sm:p-12 rounded-3xl border border-solara-gold/40 shadow-luxury bg-gradient-to-br from-solara-navy-glass via-solara-navy-dark to-solara-obsidian space-y-8 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-solara-gold uppercase tracking-wider block mb-1">
                {t('Archetype Profile', 'النمط الشخصي')}
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {language === 'en' ? selectedPersona.nameEn : selectedPersona.nameAr}
              </h4>
              <p className="text-sm text-slate-400 font-serif italic mt-0.5">
                "{language === 'en' ? selectedPersona.archetypeEn : selectedPersona.archetypeAr}"
              </p>
            </div>
            
            <div className={`flex flex-wrap gap-4 text-xs text-slate-300 font-mono ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              <div>
                <span className="text-slate-500 block text-[10px]">{t('Age', 'العمر')}</span>
                <span className="font-bold">{selectedPersona.demographics.age}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">{t('Income Bracket', 'الشريحة المالية')}</span>
                <span className="font-bold text-solara-gold">
                  {language === 'en' ? selectedPersona.demographics.incomeBracketEn : selectedPersona.demographics.incomeBracketAr}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">{t('Est. Basket AOV', 'متوسط السلة')}</span>
                <span className="font-bold text-emerald-400">{selectedPersona.avgOrderValue}</span>
              </div>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="bg-solara-gold/10 p-5 rounded-2xl border border-solara-gold/20 flex items-start gap-4">
            <Heart className="w-5 h-5 text-solara-gold shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-solara-gold-light italic font-serif leading-relaxed">
              "{language === 'en' ? selectedPersona.quoteEn : selectedPersona.quoteAr}"
            </p>
          </div>

          {/* Grid: Psychographics vs Pain Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 bg-black/30 p-6 rounded-2xl border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 font-mono">
                <Target className="w-4 h-4 text-blue-400" />
                {t('Psychographics & Coastal Drivers', 'السمات النفسية والاهتمامات')}
              </h5>
              <div className="space-y-2">
                {(language === 'en' ? selectedPersona.psychographicsEn : selectedPersona.psychographicsAr).map((psy, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{psy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 bg-black/30 p-6 rounded-2xl border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-2 font-mono">
                <XCircle className="w-4 h-4 text-red-400" />
                {t('Market Friction & Current Pain Points', 'نقاط الألم والمشاكل السوقية')}
              </h5>
              <div className="space-y-2">
                {(language === 'en' ? selectedPersona.painPointsEn : selectedPersona.painPointsAr).map((pain, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solara Solution Box */}
          <div className="bg-gradient-to-r from-solara-gold/15 via-solara-gold/5 to-transparent p-6 rounded-2xl border border-solara-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-solara-gold font-bold uppercase tracking-wider block mb-1">
                {t('The SOLARA Value Proposition Match', 'حل ومعادلة SOLARA المصممة لها')}
              </span>
              <p className="text-xs sm:text-sm text-white font-medium max-w-2xl leading-relaxed">
                {language === 'en' ? selectedPersona.solaraSolutionEn : selectedPersona.solaraSolutionAr}
              </p>
            </div>
            <div className="shrink-0 flex gap-2">
              {(language === 'en' ? selectedPersona.preferredProductsEn : selectedPersona.preferredProductsAr).map((p, idx) => (
                <span key={idx} className="text-[10px] bg-black/50 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl font-mono">
                  {p}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
