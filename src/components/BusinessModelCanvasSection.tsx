import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Sparkles, Share2, HeartHandshake, DollarSign, 
  Layers, Activity, Handshake, PieChart, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { bmcBlocks, BMCBlock } from '../data/bmcData';

export const BusinessModelCanvasSection: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-4 h-4 text-solara-gold" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-solara-gold" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-solara-gold" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 text-solara-gold" />;
      case 'DollarSign': return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-solara-gold" />;
      case 'Activity': return <Activity className="w-4 h-4 text-solara-gold" />;
      case 'Handshake': return <Handshake className="w-4 h-4 text-solara-gold" />;
      case 'PieChart': return <PieChart className="w-4 h-4 text-rose-400" />;
      default: return <Sparkles className="w-4 h-4 text-solara-gold" />;
    }
  };

  return (
    <section id="bmc" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 09 — THE 9-BOX BUSINESS MODEL ARCHITECTURE ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Strategic Venture Blueprint (BMC)</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          مخطط نموذج العمل التجاري <span className="gold-gradient-text">لبراند SOLARA</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          تحويل العلامة التجارية من مجرد فكرة حرفية إلى نموذج عمل مستدام وقابل للتوسع (Scalable Business Model) يربط الورش المحلية المصرية بالأسواق الساحلية والعالمية.
        </p>
      </div>

      {/* 9-Box Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bmcBlocks.map((block: BMCBlock) => {
          const isSelected = selectedBlock === block.id;
          return (
            <div
              key={block.id}
              onClick={() => setSelectedBlock(isSelected ? null : block.id)}
              className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer shadow-luxury flex flex-col justify-between space-y-4 text-right group ${
                isSelected
                  ? 'border-solara-gold bg-solara-gold/10 scale-102 ring-1 ring-solara-gold/50'
                  : 'border-white/10 hover:border-solara-gold/40 hover:-translate-y-1'
              }`}
            >
              {/* Block Header */}
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                  {getIcon(block.iconName)}
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-solara-gold font-mono font-bold block">
                    BLOCK {block.number}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {block.titleEn}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-solara-gold-light transition-colors font-display mb-3">
                  {block.titleAr}
                </h3>

                {/* Points List */}
                <div className="space-y-2 text-xs text-slate-300">
                  {block.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-solara-gold/80 shrink-0 mt-0.5" />
                      <span className="leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insight Bottom */}
              <div className="pt-3 border-t border-white/10 text-[11px] text-solara-gold-light/90 bg-black/30 p-3 rounded-xl">
                <strong>الرؤية الجوهرية:</strong> {block.keyInsightAr}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
