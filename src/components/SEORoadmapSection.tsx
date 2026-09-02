import React from 'react';
import { Search, CheckCircle, Globe, Zap, Database, TrendingUp } from 'lucide-react';
import { seoBlueprintData } from '../data/contentFunnelData';
import { useLanguage } from '../context/LanguageContext';

export const SEORoadmapSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 06 — ORGANIC SEARCH & AI DISCOVERY ARCHITECTURE', 'الوحدة 06 — البحث العضوي ومعمارية محركات الـ AI')} ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
          <Search className="w-3.5 h-3.5" />
          <span>{t('Organic Growth & SEO Strategic Blueprint', 'النمو العضوي واستراتيجية تصدر محركات البحث')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              SEO Roadmap & <span className="gold-gradient-text">Organic Search Dominance</span>
            </>
          ) : (
            <>
              استراتيجية الـ SEO <span className="gold-gradient-text">والتصدر العضوي لمحركات البحث</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'Engineering evergreen digital authority ensuring a compounding baseline of zero-CAC orders from search engines and emerging AI answer engines.',
            'بناء أصول رقمية مستدامة تضمن تدفق طلبات ومبيعات مجانية من محركات البحث والـ AI Search دون الاعتماد الحصري على الإنفاق الإعلاني المدفوع.'
          )}
        </p>
      </div>

      {/* Grid: Keyword Clusters & Technical Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Keyword Clusters */}
        <div className={`lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-luxury space-y-6 ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-solara-gold" />
              <span>{t('High-Intent Transactional Keyword Clusters', 'مجموعات الكلمات المفتاحية ذات النية الشرائية العالية')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Egypt Market</span>
          </div>

          <div className="space-y-4">
            {seoBlueprintData.keywordClusters.map((cluster, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">
                    {language === 'en' ? cluster.clusterEn : cluster.clusterAr}
                  </h4>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded font-mono font-semibold">
                      {cluster.intent}
                    </span>
                    <span className="text-[10px] bg-solara-gold/15 text-solara-gold-light px-2 py-0.5 rounded font-mono font-semibold">
                      Vol: {cluster.volume}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cluster.keywords.map((kw, kidx) => (
                    <span key={kidx} className="text-xs bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-lg font-mono">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Technical Checklist & Strategy */}
        <div className={`lg:col-span-5 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          
          {/* Domain Strategy Card */}
          <div className="glass-panel p-6 rounded-3xl border border-solara-gold/30 space-y-3 bg-gradient-to-br from-solara-gold/10 to-transparent">
            <div className="flex items-center gap-2 text-solara-gold font-bold text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>{t('Domain Architecture & Indexing Strategy', 'هندسة النطاق والسرعة')}</span>
            </div>
            <div className="text-lg font-bold text-white font-mono">{seoBlueprintData.domainStrategy}</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'en' ? seoBlueprintData.coreFocusEn : seoBlueprintData.coreFocusAr}
            </p>
          </div>

          {/* Technical Checklist */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>{t('Technical SEO Checklist & Core Web Vitals', 'المعايير التقنية المطبقة (Technical SEO)')}</span>
            </h4>
            <div className="space-y-2.5">
              {seoBlueprintData.technicalChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-black/30 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'en' ? item.itemEn : item.itemAr}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
