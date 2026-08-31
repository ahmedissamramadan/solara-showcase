import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Store, Hammer, Award, CheckCircle2, HeartHandshake, MessageSquare } from 'lucide-react';
import { foundingTeamMembers, originStoryMilestones, teamSynergyMetrics, TeamMember } from '../data/teamData';

export const FoundingTeamSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'store':
        return <Store className="w-5 h-5 text-solara-gold" />;
      case 'hammer':
        return <Hammer className="w-5 h-5 text-solara-gold" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-solara-gold" />;
      case 'award':
        return <Award className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-solara-gold" />;
    }
  };

  const getInitial = (name: string) => {
    if (name.startsWith('أحمد')) return 'أ';
    if (name.startsWith('محمد')) return 'م';
    if (name.startsWith('خالد')) return 'خ';
    if (name.startsWith('يوسف')) return 'ي';
    if (name.startsWith('أدهم')) return 'أ';
    return name[0] || '★';
  };

  return (
    <section id="founding-team" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 07 — THE FIVE ADVENTURERS & COLLECTIVE GENESIS ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Shared Dedication & Pure Collective Effort</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          فريق <span className="gold-gradient-text">"المغامرون الخمسة"</span> — صناع القصة
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          شهادة توثيق حقيقية لجهد جماعي متكامل لم ينفرد به شخص دون الآخر؛ فريق آمن بالفكرة منذ أن كانت مجرد اسم ومتجر شوبيفاي فارغ، وتكاملت عقولهم وسواعدهم في أكثر من 3,800 رسالة ونقاش حي لتحويلها إلى دراسة حالة مؤسسية رائدة بمعهد تكنولوجيا المعلومات (ITI).
        </p>
      </div>

      {/* Collective Synergy Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {teamSynergyMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-3xl text-center border border-white/[0.08] hover:border-solara-gold/40 transition-all hover:-translate-y-1 group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text mb-1 font-serif group-hover:scale-105 transition-transform">
              {metric.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mb-1">
              {metric.labelAr}
            </div>
            <div className="text-[11px] text-slate-400 leading-tight">
              {metric.descAr}
            </div>
          </div>
        ))}
      </div>

      {/* Origin Timeline: From Blank Store to Masterpiece */}
      <div className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-solara-gold font-mono uppercase tracking-wider block">Evolution Timeline</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">محطات بناء البراند وتطوير المنظومة</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:block">2025 – 2026 ITI Project</span>
        </div>

        {/* Milestone Steps Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {originStoryMilestones.map((m, idx) => {
            const isSelected = activeMilestone === idx;
            return (
              <button
                key={m.step}
                onClick={() => setActiveMilestone(idx)}
                className={`p-5 rounded-3xl text-right transition-all border text-xs relative overflow-hidden ${
                  isSelected
                    ? 'bg-solara-gold/15 border-solara-gold text-white shadow-luxury scale-102'
                    : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                    {getMilestoneIcon(m.iconType)}
                  </div>
                  <span className="font-mono font-bold text-solara-gold text-xs">Phase {m.step}</span>
                </div>
                <div className="font-bold text-sm text-white mb-1">{m.titleAr}</div>
                <div className="text-[10px] text-slate-400 font-mono">{m.dateTag}</div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Deep Dive Box */}
        <motion.div
          key={activeMilestone}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/40 shadow-luxury space-y-4 bg-gradient-to-br from-solara-gold/10 via-solara-navy-dark/90 to-solara-obsidian text-right"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs bg-solara-gold text-solara-navy-dark px-3 py-1 rounded-full font-bold">
              {originStoryMilestones[activeMilestone].dateTag}
            </span>
            <span className="text-xs text-solara-gold font-mono tracking-wider">
              {originStoryMilestones[activeMilestone].titleEn}
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {originStoryMilestones[activeMilestone].titleAr}
          </h4>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
            {originStoryMilestones[activeMilestone].descriptionAr}
          </p>
        </motion.div>
      </div>

      {/* The 5 Founding Members Cards Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-solara-gold font-bold uppercase tracking-wider block mb-1">Equal Partnership & Shared Passion</span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">صناع القصة وأعضاء الفريق الخمسة</h3>
          <p className="text-xs text-slate-400 mt-2">
            خمسة عقول تكاتفت لتغطية كافة أركان التسويق الرقمي وبناء العلامة التجارية: من الأبحاث والاستراتيجية، إلى التكتيكات والذكاء الاصطناعي والإبداع.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundingTeamMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-solara-gold/40 transition-all hover:-translate-y-1.5 shadow-luxury flex flex-col justify-between group space-y-6"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-solara-gold/30 to-solara-navy-dark border border-solara-gold/40 flex items-center justify-center text-solara-gold font-serif font-bold text-lg shadow-gold-glow">
                    {getInitial(member.name)}
                  </div>
                  <span className="text-[10px] bg-solara-gold/20 text-solara-gold-light border border-solara-gold/30 px-3 py-1 rounded-full font-mono font-bold">
                    {member.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white group-hover:text-solara-gold-light transition-colors font-display">
                    {member.name}
                  </h4>
                  <p className="text-xs text-solara-gold font-semibold leading-snug">{member.roleAr}</p>
                  <p className="text-[10px] text-slate-400 font-mono leading-tight">{member.roleEn}</p>
                </div>

                {/* Contribution Detail */}
                <div className="space-y-1.5 text-xs bg-black/40 p-4 rounded-2xl border border-white/5">
                  <span className="text-slate-400 font-bold block text-[10px]">المسؤولية والمساهمة في بناء المشروع:</span>
                  <p className="text-slate-200 leading-relaxed text-[11px]">{member.contributionAr}</p>
                </div>
              </div>

              {/* Specialty & Skills Bottom */}
              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>نطاق العمل:</strong> {member.specialtyAr}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[9px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
