import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ChevronDown, ChevronUp, Target } from 'lucide-react';
import { funnelStages } from '../data/contentFunnelData';
import { useLanguage } from '../context/LanguageContext';

export const FunnelCalendarSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeStageId, setActiveStageId] = useState<'tofu' | 'mofu' | 'bofu'>('tofu');
  const [expandedPostIdx, setExpandedPostIdx] = useState<number | null>(0);

  const activeStage = funnelStages.find(s => s.id === activeStageId) || funnelStages[0];

  return (
    <section id="funnel" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('Full-Funnel Content Architecture & Calendar', 'معمارية القمع التسويقي وجدول المحتوى')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Marketing Funnel & <span className="gold-gradient-text">Content Cadence</span>
            </>
          ) : (
            <>
              القمع التسويقي <span className="gold-gradient-text">وهندسة المحتوى الشهري</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'A deliberate, synchronized content engine moving prospects from viral curiosity (Awareness), to bespoke craft proof (Consideration), through to high-margin purchase and gifting (Conversion).',
            'نظام محتوى منظم ومدروس ينتقل بالعميل بسلاسة من مرحلة المشاهد والفضول (Awareness)، إلى الرغبة في التخصيص والمقارنة (Consideration)، وصولاً للطلب الفوري والإهداء (Conversion).'
          )}
        </p>
      </div>

      {/* Funnel Stage Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {funnelStages.map((stage) => {
          const isSelected = activeStageId === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-6 rounded-3xl transition-all border relative overflow-hidden ${
                isRTL ? 'text-right' : 'text-left'
              } ${
                isSelected
                  ? 'bg-solara-gold/15 border-solara-gold text-white shadow-luxury scale-102 font-bold'
                  : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-solara-gold uppercase">
                  {stage.id.toUpperCase()}
                </span>
                <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-solara-gold animate-ping' : 'bg-slate-600'}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {language === 'en' ? stage.titleEn : stage.titleAr.split('(')[0]}
              </h3>
              <p className="text-xs text-slate-400 leading-snug">
                {language === 'en' ? stage.objectiveEn.slice(0, 75) + '...' : stage.titleEn}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive */}
      <motion.div
        key={activeStage.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/30 shadow-luxury space-y-8 ${
          isRTL ? 'text-right' : 'text-left'
        }`}
      >
        
        {/* Objective & Hook Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-white/10 pb-8">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-bold text-solara-gold uppercase tracking-wider block">
              {t('Strategic Stage Objective:', 'الهدف الاستراتيجي للمرحلة:')}
            </span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              {language === 'en' ? activeStage.objectiveEn : activeStage.objectiveAr}
            </p>
          </div>

          <div className="lg:col-span-5 bg-black/40 p-5 rounded-2xl border border-solara-gold/20 space-y-2">
            <span className="text-xs font-bold text-solara-gold-light flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-solara-gold" />
              {t('Primary Hook Angle:', 'الـ Hook الرئيسي المعتمد:')}
            </span>
            <p className="text-xs italic text-slate-300">
              "{language === 'en' ? activeStage.keyHookEn : activeStage.keyHookAr}"
            </p>
          </div>
        </div>

        {/* KPIs & Sample Content Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: KPIs & Content Types */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t('Target Success Metrics (KPIs)', 'مؤشرات الأداء المستهدفة (Target KPIs)')}
              </h4>
              <div className="space-y-2.5">
                {activeStage.kpis.map((kpi, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <span className="text-slate-300">
                      {language === 'en' ? kpi.metricEn : kpi.metricAr}
                    </span>
                    <span className="font-bold text-solara-gold font-mono">{kpi.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t('Key Content Formats', 'أنواع المحتوى الأساسية')}
              </h4>
              <div className="space-y-2">
                {(language === 'en' ? activeStage.contentTypesEn : activeStage.contentTypesAr).map((type, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-solara-gold mt-1.5 shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sample Posts Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              {t('Sample High-Converting Ad Scripts', 'نماذج البوستات والإعلانات المنفذة')}
            </h4>

            {activeStage.samplePosts.map((post, idx) => {
              const isExpanded = expandedPostIdx === idx;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 cursor-pointer hover:border-solara-gold/40 transition-all"
                  onClick={() => setExpandedPostIdx(isExpanded ? null : idx)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-solara-gold bg-solara-gold/10 px-2.5 py-0.5 rounded-md border border-solara-gold/20">
                        {post.platform}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {language === 'en' ? post.headlineEn : post.headlineAr}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2.5 pt-2 border-t border-white/10 text-xs"
                    >
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">
                          {t('Video Opening Hook:', 'الـ Hook الافتتاحي:')}
                        </span>
                        <p className="text-slate-200 italic">
                          "{language === 'en' ? post.hookEn : post.hookAr}"
                        </p>
                      </div>

                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">
                          {t('Call To Action (CTA):', 'الدعوة لاتخاذ القرار (CTA):')}
                        </span>
                        <p className="text-solara-gold font-semibold">
                          {language === 'en' ? post.ctaEn : post.ctaAr}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </motion.div>

    </section>
  );
};
