import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Trophy, Sparkles, TrendingUp, Target, Eye, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AdVariation {
  id: string;
  nameEn: string;
  nameAr: string;
  hookEn: string;
  hookAr: string;
  angleEn: string;
  angleAr: string;
  ctr: string;
  cac: string;
  roas: string;
  cpm: string;
  conversionRate: string;
  isWinner: boolean;
  whyItWorksEn: string;
  whyItWorksAr: string;
}

export const AdHookSimulatorSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [selectedVariation, setSelectedVariation] = useState<string>('var-b');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const variations: AdVariation[] = [
    {
      id: 'var-a',
      nameEn: 'Angle 1: The Beach FOMO & Distinction Vector',
      nameAr: 'الزاوية الأولى: زاوية الفضول والـ FOMO',
      hookEn: '"The only tote you will never confuse on Sahel beach clubs..."',
      hookAr: '"الشنطة الوحيدة اللي مستحيل تتوه منك في شواطئ الساحل..."',
      angleEn: 'Curiosity-driven distinction among sea of identical mass-market totes.',
      angleAr: 'تعتمد على إثارة الفضول حول تميز الشنطة والبحث عنها بين آلاف الشنط المتشابهة.',
      ctr: '3.8%',
      cac: '240 EGP',
      roas: '5.2x',
      cpm: '95 EGP',
      conversionRate: '4.1%',
      isWinner: false,
      whyItWorksEn: 'Generated remarkable click curiosity (high CTR), but moderate checkout conversion as intent was exploratory rather than self-identification.',
      whyItWorksAr: 'حققت نسبة نقر عالية (High CTR) ولكن نسبة الشراء كانت متوسطة لأنها جذبت فضول المشاهدين أكثر من نية الشراء الحقيقية.'
    },
    {
      id: 'var-b',
      nameEn: 'Angle 2: Self-Identity & Bespoke Exclusivity 🏆 (Winner)',
      nameAr: 'الزاوية الثانية: زاوية الهوية والقيمة الذاتية 🏆 (الفائز)',
      hookEn: '"Why carry a generic bag anyone can buy, when you can own one bearing your bespoke name?"',
      hookAr: '"ليه تشتري شنطة عادية يقدر أي حد يشتريها، لما ممكن تملكي قطعة معمولة باسمك؟"',
      angleEn: 'Appeals directly to personal ego, prestige, and bespoke self-expression.',
      angleAr: 'تخاطب الشعور بالتميز والأناقة والملكية الفردية المباشرة (Ego & Distinction).',
      ctr: '4.6%',
      cac: '185 EGP',
      roas: '6.4x',
      cpm: '88 EGP',
      conversionRate: '5.8%',
      isWinner: true,
      whyItWorksEn: 'Delivered lowest CAC and highest ROAS by framing the purchase as an emotional investment in personal identity rather than disposable fashion.',
      whyItWorksAr: 'حققت أعلى معدل تحويل وأقل تكلفة استحواذ لأنها ربطت قرار الشراء بالهوية الذاتية للمرأة المصرية، مما جعل السعر يبدو استثماراً شخصياً وليس مجرد شراء شنطة.'
    },
    {
      id: 'var-c',
      nameEn: 'Angle 3: Heritage Artisanship & 18K Craft Vector',
      nameAr: 'الزاوية الثالثة: زاوية الحرفية المصرية والذهب',
      hookEn: '"The Egyptian palm wicker secret coated in 18k gold that captivated European ateliers..."',
      hookAr: '"سر خوص النخيل المصري المطلي بذهب 18k اللي أبهر مصممي أوروبا..."',
      angleEn: 'Emphasis on artisanal heritage, saltwater durability, and master finishing.',
      angleAr: 'التركيز على أصالة الخامات وجودة التقفيل اليدوي المقاوم لمياه البحر.',
      ctr: '2.9%',
      cac: '310 EGP',
      roas: '4.1x',
      cpm: '110 EGP',
      conversionRate: '3.4%',
      isWinner: false,
      whyItWorksEn: 'Resonated deeply with connoisseurs and gift-buyers, but lagged on rapid TikTok algorithmic scale.',
      whyItWorksAr: 'جذبت فئة كبار السن وعشاق التراث، ولكن تفاعلها كان أبطأ على تيك توك وموجات السوشيال السريعة.'
    }
  ];

  const current = variations.find((v) => v.id === selectedVariation) || variations[1];

  const runSimulation = (varId: string) => {
    setIsSimulating(true);
    setSelectedVariation(varId);
    setTimeout(() => {
      setIsSimulating(false);
    }, 350);
  };

  return (
    <section id="ad-simulator" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 11 — CREATIVE STRATEGY & AD HOOK SIMULATOR', 'الوحدة 11 — الاستراتيجية الإبداعية ومحاكي الـ Hooks الإعلانية')} ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Target className="w-3.5 h-3.5" />
          <span>{t('A/B Creative Lab & Conversion Benchmarks', 'معمل اختبارات A/B الإعلانية')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Ad Hook Simulator & <span className="gold-gradient-text">Creative A/B Testing</span>
            </>
          ) : (
            <>
              محاكي اختبار <span className="gold-gradient-text">الإعلانات والـ Creative Hooks</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'Step into the shoes of a Creative Strategist and Media Buyer: choose different opening 3-second video hooks and evaluate their direct impact on CTR, CAC, and ROAS.',
            'جرب دور مدير الحملات الإعلانية (Media Buyer & Creative Strategist)؛ اختر زاوية الإعلان وشاهد كيف يؤثر النص الافتتاحي (First 3 Seconds Hook) على مؤشرات الـ CTR والـ CAC ومضاعف الـ ROAS.'
          )}
        </p>
      </div>

      {/* Angles Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {variations.map((v) => {
          const isSelected = v.id === selectedVariation;
          return (
            <button
              key={v.id}
              onClick={() => runSimulation(v.id)}
              className={`p-5 rounded-2xl transition-all border text-xs flex flex-col justify-between space-y-3 relative overflow-hidden ${
                isRTL ? 'text-right' : 'text-left'
              } ${
                isSelected
                  ? 'bg-solara-gold/20 border-solara-gold text-white shadow-luxury scale-102 font-bold'
                  : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-solara-gold text-[10px] uppercase font-bold">
                  {v.id.toUpperCase()}
                </span>
                {v.isWinner && (
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    <span>{t('Winning Angle', 'الزاوية الرابحة')}</span>
                  </span>
                )}
              </div>

              <div className="text-sm font-bold text-white">
                {language === 'en' ? v.nameEn : v.nameAr}
              </div>

              <p className="text-[11px] text-slate-400 italic">
                {language === 'en' ? v.hookEn : v.hookAr}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Angle Deep Dive Results */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className={`glass-panel p-8 sm:p-12 rounded-3xl border border-solara-gold/40 shadow-luxury space-y-8 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs text-solara-gold font-mono tracking-widest uppercase block mb-1">
                {language === 'en' ? current.nameEn : current.nameAr}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {language === 'en' ? current.hookEn : current.hookAr}
              </h3>
            </div>
            <div className="shrink-0">
              <span className="text-xs text-slate-400 block mb-1">
                {t('Underlying Angle:', 'الزاوية التسويقية:')}
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {language === 'en' ? current.angleEn : current.angleAr}
              </span>
            </div>
          </div>

          {/* Performance Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <span className="text-slate-500 block text-[10px] mb-1 font-mono uppercase">Click-Through Rate (CTR)</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">{current.ctr}</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <span className="text-slate-500 block text-[10px] mb-1 font-mono uppercase">Customer Acq. (CAC)</span>
              <span className="text-xl sm:text-2xl font-bold text-solara-gold font-mono">{current.cac}</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <span className="text-slate-500 block text-[10px] mb-1 font-mono uppercase">Return on Ad Spend (ROAS)</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">{current.roas}</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5">
              <span className="text-slate-500 block text-[10px] mb-1 font-mono uppercase">Cost Per Mille (CPM)</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-200 font-mono">{current.cpm}</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block text-[10px] mb-1 font-mono uppercase">Checkout Conversion</span>
              <span className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">{current.conversionRate}</span>
            </div>
          </div>

          {/* Why it works diagnostic */}
          <div className="bg-black/40 p-6 rounded-2xl border border-solara-gold/20 space-y-2">
            <div className="flex items-center gap-2 text-solara-gold font-bold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>{t('Algorithmic & Psychological Diagnostic', 'التشخيص الخوارزمي والنفسي للنتيجة')}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {language === 'en' ? current.whyItWorksEn : current.whyItWorksAr}
            </p>
          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
};
