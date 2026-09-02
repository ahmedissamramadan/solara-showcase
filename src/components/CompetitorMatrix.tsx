import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Check, X, Award } from 'lucide-react';
import { competitorBenchmarks } from '../data/competitorsData';
import { useLanguage } from '../context/LanguageContext';

export const CompetitorMatrix: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeCompetitor, setActiveCompetitor] = useState(competitorBenchmarks[0]);

  const metricKeys = [
    { key: 'personalization' as const, labelEn: 'Bespoke Personalization', labelAr: 'التخصيص بالاسم', angle: 0 },
    { key: 'coastalAesthetics' as const, labelEn: 'Sahel Resort Aesthetic', labelAr: 'جماليات الساحل', angle: 60 },
    { key: 'craftQuality' as const, labelEn: 'Craft & Finishing Quality', labelAr: 'جودة الحرفية', angle: 120 },
    { key: 'priceAccessibility' as const, labelEn: 'Price Accessibility', labelAr: 'ملاءمة السعر', angle: 180 },
    { key: 'digitalExperience' as const, labelEn: 'Digital D2C Experience', labelAr: 'التجربة الرقمية', angle: 240 },
    { key: 'emotionalGifting' as const, labelEn: 'Keepsake Gifting', labelAr: 'الإهداء العاطفي', angle: 300 }
  ];

  // Helper to generate SVG polygon points for radar
  const radarCenter = 150;
  const radarRadius = 110;

  const getPolygonPoints = (comp: typeof competitorBenchmarks[0]) => {
    return metricKeys
      .map(({ key, angle }) => {
        const val = comp.metrics[key] / 100;
        const rad = (angle - 90) * (Math.PI / 180);
        const x = radarCenter + radarRadius * val * Math.cos(rad);
        const y = radarCenter + radarRadius * val * Math.sin(rad);
        return `${x},${y}`;
      })
      .join(' ');
  };

  return (
    <section id="competitors" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 03 — BLUE OCEAN STRATEGY & COMPETITIVE BENCHMARKING', 'الوحدة 03 — استراتيجية المحيط الأزرق والمقارنة المعيارية للمنافسين')} ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
          <Target className="w-3.5 h-3.5" />
          <span>{t('Competitive Intelligence & Blue Ocean Strategy', 'استخبارات المنافسين واستراتيجية المحيط الأزرق')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Competitor Benchmark Matrix & <span className="gold-gradient-text">The Blue Ocean Void</span>
            </>
          ) : (
            <>
              مصفوفة تحليل المنافسين <span className="gold-gradient-text">وفجوة المحيط الأزرق</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'A data-driven comparative audit between SOLARA and major Egyptian players (KOFFA, Khoos, Fast Fashion Retailers) uncovering why SOLARA commands an uncontested market moat.',
            'دراسة إحصائية مقارنة بين SOLARA وأبرز اللاعبين في السوق المصري (KOFFA, Khoos, Fast Fashion) تكشف سبب تفرد وتميز الموقع التنافسي للعلامة التجارية.'
          )}
        </p>
      </div>

      {/* Competitor Switcher */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {competitorBenchmarks.map((comp) => (
          <button
            key={comp.name}
            onClick={() => setActiveCompetitor(comp)}
            className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2.5 ${
              activeCompetitor.name === comp.name
                ? comp.name === 'SOLARA'
                  ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-105 font-bold'
                  : 'bg-white/15 text-white border-white/30 shadow-md scale-105 font-bold'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            <span>{comp.name}</span>
            <span className="text-[10px] opacity-75 font-mono">({comp.priceRange})</span>
          </button>
        ))}
      </div>

      {/* Main Grid: Radar Chart + Metric Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Radar Chart & Bars */}
        <div className={`lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-luxury space-y-8 ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-solara-gold" />
                <span>{t('Competitive Radar:', 'الرادار التنافسي:')} {activeCompetitor.name}</span>
              </h3>
              <p className="text-xs text-slate-400">
                {t('Calibrated via social telemetry & consumer interviews', 'مبني على تحليلات بيانات السوشيال ومقابلات المستهلكين')}
              </p>
            </div>
            <span className="text-xs font-mono font-bold bg-solara-gold/10 border border-solara-gold/25 px-3 py-1 rounded-full text-solara-gold">
              {language === 'en' ? activeCompetitor.categoryEn : activeCompetitor.categoryAr}
            </span>
          </div>

          {/* SVG Animated Radar Chart */}
          <div className="relative w-full aspect-[4/3] max-w-sm mx-auto flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              {/* Concentric Circles */}
              {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                <circle
                  key={i}
                  cx={radarCenter}
                  cy={radarCenter}
                  r={radarRadius * scale}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray={i < 3 ? "2 2" : "none"}
                />
              ))}

              {/* Axis Lines */}
              {metricKeys.map(({ angle }, i) => {
                const rad = (angle - 90) * (Math.PI / 180);
                const x = radarCenter + radarRadius * Math.cos(rad);
                const y = radarCenter + radarRadius * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={radarCenter}
                    y1={radarCenter}
                    x2={x}
                    y2={y}
                    stroke="rgba(255,255,255,0.12)"
                  />
                );
              })}

              {/* Data Polygon */}
              <motion.polygon
                key={activeCompetitor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                points={getPolygonPoints(activeCompetitor)}
                fill={activeCompetitor.name === 'SOLARA' ? 'rgba(212, 175, 55, 0.35)' : 'rgba(255, 255, 255, 0.15)'}
                stroke={activeCompetitor.name === 'SOLARA' ? '#D4AF37' : '#94A3B8'}
                strokeWidth="2.5"
                style={{ transformOrigin: '150px 150px' }}
              />

              {/* Data Point Dots */}
              {metricKeys.map(({ key, angle }, i) => {
                const val = activeCompetitor.metrics[key] / 100;
                const rad = (angle - 90) * (Math.PI / 180);
                const x = radarCenter + radarRadius * val * Math.cos(rad);
                const y = radarCenter + radarRadius * val * Math.sin(rad);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4.5"
                    fill={activeCompetitor.name === 'SOLARA' ? '#F4D06F' : '#FFFFFF'}
                    stroke="#0A1424"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
          </div>

          {/* Metric Score Linear Sliders */}
          <div className="space-y-3 pt-2">
            {metricKeys.map(({ key, labelEn, labelAr }) => (
              <div key={key} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    {language === 'en' ? labelEn : labelAr}
                  </span>
                  <span className="text-solara-gold font-mono font-bold">
                    {activeCompetitor.metrics[key]}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeCompetitor.metrics[key]}%` }}
                    transition={{ duration: 0.6 }}
                    className={`h-full rounded-full ${
                      activeCompetitor.name === 'SOLARA'
                        ? 'bg-gradient-to-r from-solara-gold-light to-solara-gold-dark shadow-gold-glow'
                        : 'bg-slate-400'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Strengths, Weaknesses, & Solara Advantage */}
        <div className={`lg:col-span-5 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          
          {/* Solara Advantage Card */}
          <div className="glass-panel p-6 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/15 to-transparent space-y-3 shadow-luxury">
            <div className="flex items-center gap-2 text-solara-gold font-bold text-xs font-mono uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{t('The SOLARA Market Disruption Advantage', 'الفارق التنافسي الجوهري لـ SOLARA')}</span>
            </div>
            <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
              {language === 'en' ? activeCompetitor.solaraAdvantageEn : activeCompetitor.solaraAdvantageAr}
            </p>
          </div>

          {/* Strengths Box */}
          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 bg-emerald-950/[0.06] space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{t('Core Strengths of', 'نقاط القوة لدى')} {activeCompetitor.name}</span>
            </h4>
            <div className="space-y-2">
              {(language === 'en' ? activeCompetitor.strengthsEn : activeCompetitor.strengthsAr).map((str, idx) => (
                <div key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weaknesses Box */}
          <div className="glass-panel p-6 rounded-3xl border border-red-500/20 bg-red-950/[0.06] space-y-3">
            <h4 className="text-xs font-bold text-red-400 font-mono uppercase tracking-wider flex items-center gap-2">
              <X className="w-4 h-4" />
              <span>{t('Systemic Weaknesses of', 'نقاط الضعف الجوهرية لدى')} {activeCompetitor.name}</span>
            </h4>
            <div className="space-y-2">
              {(language === 'en' ? activeCompetitor.weaknessesEn : activeCompetitor.weaknessesAr).map((weak, idx) => (
                <div key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span>{weak}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
