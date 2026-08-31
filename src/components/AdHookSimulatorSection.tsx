import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Trophy, Sparkles, TrendingUp, Target, Eye, ShoppingCart } from 'lucide-react';

interface AdVariation {
  id: string;
  nameAr: string;
  hookAr: string;
  hookEn: string;
  angleAr: string;
  ctr: string;
  cac: string;
  roas: string;
  cpm: string;
  conversionRate: string;
  isWinner: boolean;
  whyItWorksAr: string;
}

export const AdHookSimulatorSection: React.FC = () => {
  const [selectedVariation, setSelectedVariation] = useState<string>('var-b');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const variations: AdVariation[] = [
    {
      id: 'var-a',
      nameAr: 'الزاوية الأولى: زاوية الفضول والـ FOMO',
      hookAr: '"الشنطة الوحيدة اللي مستحيل تتوه منك في شواطئ الساحل..."',
      hookEn: 'Curiosity & Beach Distinction Hook',
      angleAr: 'تعتمد على إثارة الفضول حول تميز الشنطة والبحث عنها بين آلاف الشنط المتشابهة.',
      ctr: '3.8%',
      cac: '240 EGP',
      roas: '5.2x',
      cpm: '95 EGP',
      conversionRate: '4.1%',
      isWinner: false,
      whyItWorksAr: 'حققت نسبة نقر عالية (High CTR) ولكن نسبة الشراء كانت متوسطة لأنها جذبت فضول المشاهدين أكثر من نية الشراء الحقيقية.'
    },
    {
      id: 'var-b',
      nameAr: 'الزاوية الثانية: زاوية الهوية والقيمة الذاتية 🏆 (الفائز)',
      hookAr: '"ليه تشتري شنطة عادية يقدر أي حد يشتريها، لما ممكن تملكي قطعة معمولة باسمك؟"',
      hookEn: 'Self-Identity & Exclusivity Hook (Winner)',
      angleAr: 'تخاطب الشعور بالتميز والأناقة والملكية الفردية المباشرة (Ego & Distinction).',
      ctr: '4.6%',
      cac: '185 EGP',
      roas: '6.4x',
      cpm: '88 EGP',
      conversionRate: '5.8%',
      isWinner: true,
      whyItWorksAr: 'حققت أعلى معدل تحويل وأقل تكلفة استحواذ لأنها ربطت قرار الشراء بالهوية الذاتية للمرأة المصرية، مما جعل السعر يبدو استثماراً شخصياً وليس مجرد شراء شنطة.'
    },
    {
      id: 'var-c',
      nameAr: 'الزاوية الثالثة: زاوية الحرفية المصرية والذهب',
      hookAr: '"سر خوص النخيل المصري المطلي بذهب 18k اللي أبهر مصممي أوروبا..."',
      hookEn: 'Craftsmanship & Luxury Heritage Hook',
      angleAr: 'التركيز على أصالة الخامات وجودة التقفيل اليدوي المقاوم لمياه البحر.',
      ctr: '2.9%',
      cac: '310 EGP',
      roas: '4.1x',
      cpm: '110 EGP',
      conversionRate: '3.4%',
      isWinner: false,
      whyItWorksAr: 'جذبت فئة كبار السن وعشاق التراث، ولكن تفاعلها كان أبطأ على تيك توك وموجات السوشيال السريعة.'
    }
  ];

  const current = variations.find((v) => v.id === selectedVariation) || variations[1];

  const runSimulation = (varId: string) => {
    setIsSimulating(true);
    setSelectedVariation(varId);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section id="ad-simulator" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 10 — CREATIVE STRATEGY & AD HOOK SIMULATOR ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Target className="w-3.5 h-3.5" />
          <span>A/B Testing Meta & TikTok Lab</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          محاكي اختبار <span className="gold-gradient-text">الإعلانات والـ Creative Hooks</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          جرب دور مدير الحملات الإعلانية (Media Buyer & Creative Strategist)؛ اختر زاوية الإعلان وشاهد كيف يؤثر النص الافتتاحي (First 3 Seconds Hook) على مؤشرات الـ CTR والـ CAC ومضاعف الـ ROAS.
        </p>
      </div>

      {/* Ad Variations Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {variations.map((v) => {
          const isSelected = v.id === selectedVariation;
          return (
            <button
              key={v.id}
              onClick={() => runSimulation(v.id)}
              className={`p-5 rounded-3xl text-right transition-all border text-xs flex flex-col justify-between space-y-3 relative overflow-hidden ${
                isSelected
                  ? 'bg-solara-gold/20 border-solara-gold text-white shadow-luxury scale-102 ring-1 ring-solara-gold/40'
                  : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] text-solara-gold font-mono font-bold">
                  {v.nameAr.split('—')[0]}
                </span>
                {v.isWinner && (
                  <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-amber-500/30">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    <span>الأعلى ربحية</span>
                  </span>
                )}
              </div>

              <div className="font-bold text-sm text-white font-serif leading-snug">
                {v.hookAr}
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {v.angleAr}
              </p>
            </button>
          );
        })}
      </div>

      {/* Live Simulation Results Display Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-solara-gold/40 shadow-luxury bg-gradient-to-br from-solara-navy-dark/95 via-solara-obsidian to-black relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Stats Column */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-solara-gold/20 text-solara-gold text-xs font-mono font-bold">
                    Active Creative Test
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {current.hookEn}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {current.hookAr}
                </h3>
              </div>

              {/* 4 KPIs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-black/50 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">CTR (معدل النقر)</span>
                  <div className="text-xl font-bold text-white font-mono">{current.ctr}</div>
                </div>

                <div className="bg-black/50 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">CAC (تكلفة الاستحواذ)</span>
                  <div className="text-xl font-bold text-slate-300 font-mono">{current.cac}</div>
                </div>

                <div className="bg-black/50 p-4 rounded-2xl border border-solara-gold/40 text-center space-y-1 bg-solara-gold/10">
                  <span className="text-[10px] text-solara-gold font-mono block font-bold">ROAS (العائد)</span>
                  <div className="text-2xl font-extrabold text-solara-gold font-mono">{current.roas}</div>
                </div>

                <div className="bg-black/50 p-4 rounded-2xl border border-emerald-500/40 text-center space-y-1 bg-emerald-500/10">
                  <span className="text-[10px] text-emerald-400 font-mono block font-bold">Conv. Rate (التحويل)</span>
                  <div className="text-xl font-bold text-emerald-400 font-mono">{current.conversionRate}</div>
                </div>
              </div>

              {/* Psychological Analysis */}
              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-2">
                <span className="text-xs font-bold text-solara-gold block">تحليل سلوك المستهلك وسر النتيجة:</span>
                <p className="text-xs text-slate-200 leading-relaxed">{current.whyItWorksAr}</p>
              </div>

            </div>

            {/* Right/Mockup Preview Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-black/60 border border-white/10 relative">
              <div className="w-full max-w-[260px] aspect-[9/16] rounded-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-solara-gold/40 p-4 flex flex-col justify-between relative shadow-gold-glow">
                
                {/* Simulated Reel Overlay */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Reels Sponsored</span>
                  <span className="text-solara-gold">SOLARA</span>
                </div>

                <div className="space-y-2 text-right">
                  <div className="bg-solara-gold/20 text-solara-gold px-2.5 py-1 rounded-md text-[10px] font-bold inline-block">
                    {current.isWinner ? '🏆 Highest Converting Hook' : 'Tested Variation'}
                  </div>
                  <div className="text-xs font-bold text-white leading-snug drop-shadow-md">
                    {current.hookAr}
                  </div>
                </div>

                <div className="w-full py-2 bg-solara-gold text-solara-navy-dark text-[11px] font-bold rounded-lg text-center shadow-md">
                  اطلبي قطعتك المخصصة الآن ☀️
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
