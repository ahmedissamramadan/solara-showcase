import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, XCircle, CheckCircle2, User, Heart } from 'lucide-react';
import { caseStudyOverview } from '../data/caseStudyData';
import { solaraPersonas } from '../data/competitorsData';

export const StrategicShiftSection: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState(solaraPersonas[0]);

  return (
    <section id="strategic-shift" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 02 — STRATEGIC POSITIONING & BUYER PSYCHOLOGY ]
      </div>

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Strategic Positioning & Consumer Psychology</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          التحول الاستراتيجي الجوهري <span className="gold-gradient-text">لبراند SOLARA</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          السر في نجاح أي علامة تجارية لا يكمن في المنتج بحد ذاته، بل في التموضع النفسي (Psychological Positioning) الذي يربط القطعة بهوية العميل الاجتماعية.
        </p>
      </div>

      {/* Part 1: The Shift Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        
        {/* The Old Way (Trap) */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-red-500/20 bg-red-950/[0.08] relative overflow-hidden group hover:border-red-500/40 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <XCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-200">{caseStudyOverview.theShift.from.title}</h3>
              <p className="text-xs text-red-400/80">نموذج يؤدي سريعاً لتآكل الهوامش والتوقف</p>
            </div>
          </div>

          <div className="space-y-4">
            {caseStudyOverview.theShift.from.traits.map((trait, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The SOLARA Way (Identity Brand) */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/[0.07] to-transparent relative overflow-hidden shadow-luxury group hover:border-solara-gold transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center shrink-0 shadow-gold-glow">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-solara-gold-light">{caseStudyOverview.theShift.to.title}</h3>
              <p className="text-xs text-solara-gold/80">نموذج يصنع قيمة مدركة متضاعفة وولاءً طويل الأمد</p>
            </div>
          </div>

          <div className="space-y-4">
            {caseStudyOverview.theShift.to.traits.map((trait, idx) => (
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs text-solara-gold font-bold uppercase tracking-wider block mb-1">STP Architecture</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">الشخصيات الشرائية المستهدفة (Target Personas)</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            تم تفصيل 3 شخصيات رئيسية تغطي كافة دوافع الشراء: الاستعراض الصيفي، الإهداء العاطفي، والبحث عن الحرفية النظيفة.
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
                  ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{persona.name.split('—')[0]}</span>
              <span className="text-[11px] opacity-80 font-normal">({persona.archetypeEn})</span>
            </button>
          ))}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <motion.div
          key={selectedPersona.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-solara-gold/30 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Demographics & Quote */}
          <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-l border-white/10 pb-6 lg:pb-0 lg:pl-8">
            <div>
              <span className="text-xs bg-solara-gold/15 text-solara-gold px-3 py-1 rounded-full font-bold border border-solara-gold/30">
                {selectedPersona.archetypeAr}
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mt-3 font-display">{selectedPersona.name}</h4>
            </div>

            {/* Quote Block */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border-r-4 border-solara-gold italic text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
              "{selectedPersona.quote}"
            </div>

            {/* Demographics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">العمر</span>
                <span className="font-semibold text-slate-200">{selectedPersona.demographics.age}</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">الوظيفة</span>
                <span className="font-semibold text-slate-200">{selectedPersona.demographics.occupation}</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">المستوى المادي</span>
                <span className="font-semibold text-solara-gold">{selectedPersona.demographics.incomeBracket}</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">متوسط قيمة السلة (AOV)</span>
                <span className="font-semibold text-emerald-400 font-mono">{selectedPersona.avgOrderValue}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Psychographics, Pain Points & Solara Solution */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Psychographics & Interests */}
            <div>
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-solara-gold" />
                السمات النفسية والاهتمامات (Psychographics)
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedPersona.psychographics.map((item, idx) => (
                  <span key={idx} className="text-xs bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pain Points */}
            <div>
              <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5" />
                نقاط الألم في السوق الحالي (Pain Points)
              </h5>
              <div className="space-y-2 text-xs text-slate-300">
                {selectedPersona.painPoints.map((pain, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solara Solution Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-solara-gold/20 via-solara-gold/10 to-transparent border border-solara-gold/40 shadow-sm">
              <h5 className="text-xs font-bold text-solara-gold-light uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                حل SOLARA المثالي للشخصية
              </h5>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                {selectedPersona.solaraSolution}
              </p>
            </div>

          </div>

        </motion.div>
      </div>

    </section>
  );
};
