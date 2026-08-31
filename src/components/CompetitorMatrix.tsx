import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Check, X, Award } from 'lucide-react';
import { competitorBenchmarks } from '../data/competitorsData';

export const CompetitorMatrix: React.FC = () => {
  const [activeCompetitor, setActiveCompetitor] = useState(competitorBenchmarks[0]);

  const metricKeys = [
    { key: 'personalization' as const, labelAr: 'التخصيص بالاسم', angle: 0 },
    { key: 'coastalAesthetics' as const, labelAr: 'جماليات الساحل', angle: 60 },
    { key: 'craftQuality' as const, labelAr: 'جودة الحرفية', angle: 120 },
    { key: 'priceAccessibility' as const, labelAr: 'ملاءمة السعر', angle: 180 },
    { key: 'digitalExperience' as const, labelAr: 'التجربة الرقمية', angle: 240 },
    { key: 'emotionalGifting' as const, labelAr: 'الإهداء العاطفي', angle: 300 }
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
        [ MODULE 03 — BLUE OCEAN STRATEGY & COMPETITIVE BENCHMARKING ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
          <Target className="w-3.5 h-3.5" />
          <span>Competitive Intelligence & Blue Ocean Strategy</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          مصفوفة تحليل المنافسين <span className="gold-gradient-text">وفجوة المحيط الأزرق</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          دراسة إحصائية مقارنة بين SOLARA وأبرز اللاعبين في السوق المصري (KOFFA, Khoos, Fast Fashion) تكشف سبب تفرد وتميز الموقع التنافسي للعلامة التجارية.
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
                  ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-105'
                  : 'bg-white/15 text-white border-white/30 shadow-md scale-105'
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
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-luxury space-y-8">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-solara-gold" />
                <span>الرادار التنافسي: {activeCompetitor.name}</span>
              </h3>
              <p className="text-xs text-slate-400">مبني على تحليلات Rival IQ واستطلاعات الجمهور</p>
            </div>
            <span className="text-xs font-mono font-bold bg-solara-gold/10 border border-solara-gold/25 px-3 py-1 rounded-full text-solara-gold">
              {activeCompetitor.category}
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
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
              ))}

              {/* Axis Spoke Lines */}
              {metricKeys.map(({ angle }, i) => {
                const rad = (angle - 90) * (Math.PI / 180);
                const x2 = radarCenter + radarRadius * Math.cos(rad);
                const y2 = radarCenter + radarRadius * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={radarCenter}
                    y1={radarCenter}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                );
              })}

              {/* Morphing Radar Polygon */}
              <polygon
                points={getPolygonPoints(activeCompetitor)}
                fill={activeCompetitor.name === 'SOLARA' ? 'rgba(212, 175, 55, 0.25)' : 'rgba(148, 163, 184, 0.2)'}
                stroke={activeCompetitor.name === 'SOLARA' ? '#D4AF37' : '#94A3B8'}
                strokeWidth="2.5"
                className="transition-all duration-700 ease-out"
              />

              {/* Labels around chart */}
              {metricKeys.map(({ labelAr, angle }, i) => {
                const rad = (angle - 90) * (Math.PI / 180);
                const lx = radarCenter + (radarRadius + 24) * Math.cos(rad);
                const ly = radarCenter + (radarRadius + 24) * Math.sin(rad);
                return (
                  <text
                    key={i}
                    x={lx}
                    y={ly}
                    fill="#CBD5E1"
                    fontSize="9"
                    fontWeight="600"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-arabic"
                  >
                    {labelAr}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* Metric Rows */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            {metricKeys.map(({ key, labelAr }) => {
              const value = activeCompetitor.metrics[key];

              return (
                <div key={key} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-200">{labelAr}</span>
                    <span className="font-bold font-mono text-solara-gold">{value}%</span>
                  </div>
                  
                  <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        activeCompetitor.name === 'SOLARA'
                          ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark shadow-gold-glow'
                          : 'bg-gradient-to-r from-slate-400 to-slate-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right: Strengths, Weaknesses & Solara Advantage */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Solara Advantage Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/15 to-transparent shadow-luxury space-y-3">
            <div className="flex items-center gap-2 text-solara-gold font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>ميزة SOLARA الاستراتيجية الحاسمة</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display">
              {activeCompetitor.name === 'SOLARA'
                ? 'الريادة المطلقة في قطاع التخصيص الصيفي'
                : `كيف تتفوق SOLARA على ${activeCompetitor.name}؟`}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {activeCompetitor.solaraAdvantage}
            </p>
          </div>

          {/* Strengths Card */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-3">
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4" />
              نقاط القوة لدى المنافس
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCompetitor.strengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses Card */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-3">
            <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <X className="w-4 h-4" />
              نقاط الضعف والفجوات المستغلة
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCompetitor.weaknesses.map((weak, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span>{weak}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};
