import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  Hammer, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  MessageCircle, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { foundingTeamMembers, originStoryMilestones, teamSynergyMetrics, TeamMember } from '../data/teamData';
import { useLanguage } from '../context/LanguageContext';

export const FoundingTeamSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeMilestone, setActiveMilestone] = useState<number>(0);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2200);
  };

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

  const getInitial = (member: TeamMember) => {
    if (language === 'en') {
      return member.nameEn.split(' ')[0][0] || '★';
    }
    if (member.nameAr.startsWith('أحمد')) return 'أ';
    if (member.nameAr.startsWith('محمد')) return 'م';
    if (member.nameAr.startsWith('خالد')) return 'خ';
    if (member.nameAr.startsWith('يوسف')) return 'ي';
    if (member.nameAr.startsWith('أدهم')) return 'أ';
    return member.nameAr[0] || '★';
  };

  return (
    <section id="founding-team" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Module Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/50 uppercase mb-4 text-center">
        [ {t('MODULE 10 — THE FIVE ADVENTURERS & COLLECTIVE GENESIS', 'الوحدة 10 — فريق المغامرون الخمسة وملحمة التأسيس الجماعي')} ]
      </div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>{t('Equal Partnership & Shared Brotherhood', 'شراكة وتكامل أخوي متكافئ')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Team <span className="gold-gradient-text">"The Five Adventurers"</span> — The Architects
            </>
          ) : (
            <>
              فريق <span className="gold-gradient-text">"المغامرون الخمسة"</span> — صناع القصة
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'An authentic testament to collective leadership and synergy where no individual took solitary credit. Five minds united from day zero—when the project was merely an empty Shopify store—collaborating through 3,885+ intensive discussions to deliver an enduring benchmark at the Information Technology Institute (ITI), Ministry of Communications & Information Technology.',
            'شهادة توثيق حقيقية لجهد جماعي متكامل لم ينفرد به شخص دون الآخر؛ فريق آمن بالفكرة منذ أن كانت مجرد اسم ومتجر شوبيفاي فارغ، وتكاملت عقولهم وسواعدهم في أكثر من 3,885 رسالة ونقاش حي لتحويلها إلى دراسة حالة مؤسسية رائدة بمعهد تكنولوجيا المعلومات (ITI) التابع لوزارة الاتصالات.'
          )}
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
              {language === 'en' ? metric.labelEn : metric.labelAr}
            </div>
            <div className="text-[11px] text-slate-400 leading-tight">
              {language === 'en' ? metric.descEn : metric.descAr}
            </div>
          </div>
        ))}
      </div>

      {/* Origin Timeline: From Blank Store to Masterpiece */}
      <div className="mb-24">
        <div className={`flex items-center justify-between mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div>
            <span className="text-xs font-bold text-solara-gold font-mono uppercase tracking-wider block">
              {t('Evolution Timeline', 'محطات التطور')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {t('From Empty Storefront to Capstone Benchmark', 'محطات بناء البراند وتطوير المنظومة')}
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:block">
            {t('2025 – 2026 ITI Graduation Capstone', 'مشروع تخرج ITI دفعة 2025 – 2026')}
          </span>
        </div>

        {/* Milestone Steps Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {originStoryMilestones.map((m, idx) => {
            const isSelected = activeMilestone === idx;
            return (
              <button
                key={m.step}
                onClick={() => setActiveMilestone(idx)}
                className={`p-5 rounded-3xl transition-all border text-xs relative overflow-hidden ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  isSelected
                    ? 'bg-solara-gold/15 border-solara-gold text-white shadow-luxury scale-102'
                    : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                    {getMilestoneIcon(m.iconType)}
                  </div>
                  <span className="font-mono font-bold text-solara-gold text-xs">
                    {t('Phase', 'المرحلة')} {m.step}
                  </span>
                </div>
                <div className="font-bold text-sm text-white mb-1">
                  {language === 'en' ? m.titleEn : m.titleAr}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {language === 'en' ? m.dateTagEn : m.dateTagAr}
                </div>
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
          className={`glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/40 shadow-luxury space-y-4 bg-gradient-to-br from-solara-gold/10 via-solara-navy-dark/90 to-solara-obsidian ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs bg-solara-gold text-solara-navy-dark px-3 py-1 rounded-full font-bold">
              {language === 'en' 
                ? originStoryMilestones[activeMilestone].dateTagEn 
                : originStoryMilestones[activeMilestone].dateTagAr}
            </span>
            <span className="text-xs text-solara-gold font-mono tracking-wider">
              {language === 'en'
                ? originStoryMilestones[activeMilestone].titleEn
                : originStoryMilestones[activeMilestone].titleAr}
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {language === 'en'
              ? originStoryMilestones[activeMilestone].titleEn
              : originStoryMilestones[activeMilestone].titleAr}
          </h4>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
            {language === 'en'
              ? originStoryMilestones[activeMilestone].descriptionEn
              : originStoryMilestones[activeMilestone].descriptionAr}
          </p>
        </motion.div>
      </div>

      {/* The 5 Founding Members Luxury Cards Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-solara-gold font-bold uppercase tracking-wider block mb-1">
            {t('Equal Partnership & Shared Passion', 'شراكة متكافئة وشغف مشترك')}
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            {t('The 5 Founding Partners & Direct Contacts', 'صناع القصة وأعضاء الفريق وبيانات التواصل المباشر')}
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            {t(
              'Five distinct minds covering the full lifecycle of brand building: Market research, positioning, marketing mix, AI content creation, and digital platform engineering.',
              'خمسة عقول تكاتفت لتغطية كافة أركان التسويق الرقمي وبناء العلامة التجارية: من الأبحاث والاستراتيجية، إلى التكتيكات والذكاء الاصطناعي وهندسة المنظومة الرقمية.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundingTeamMembers.map((member: TeamMember) => {
            const isPhoneCopied = copiedPhone === member.phone;
            return (
              <div
                key={member.id}
                className={`glass-panel p-7 rounded-3xl border border-white/10 hover:border-solara-gold/50 transition-all hover:-translate-y-1.5 shadow-luxury flex flex-col justify-between group space-y-6 relative overflow-hidden ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {/* Top Subtle Ambient Spotlight */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-solara-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card Top: Avatar & Badge */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-solara-gold/30 to-solara-navy-dark border border-solara-gold/50 flex items-center justify-center text-solara-gold font-serif font-bold text-lg shadow-gold-glow">
                      {getInitial(member)}
                    </div>
                    <span className="text-[10px] bg-solara-gold/20 text-solara-gold-light border border-solara-gold/30 px-3 py-1 rounded-full font-mono font-bold">
                      {language === 'en' ? member.badgeEn : member.badgeAr}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-solara-gold-light transition-colors font-display">
                      {language === 'en' ? member.nameEn : member.nameAr}
                    </h4>
                    <p className="text-xs text-solara-gold font-semibold leading-snug">
                      {language === 'en' ? member.roleEn : member.roleAr}
                    </p>
                    
                    {/* ITI Affiliation Pill */}
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono pt-1">
                      <GraduationCap className="w-3.5 h-3.5 text-solara-gold shrink-0" />
                      <span>{language === 'en' ? member.affiliationEn : member.affiliationAr}</span>
                    </div>
                  </div>

                  {/* Contribution Detail */}
                  <div className="space-y-1.5 text-xs bg-black/40 p-4 rounded-2xl border border-white/5 shadow-inner">
                    <span className="text-slate-400 font-bold block text-[10px]">
                      {t('Core Responsibility & Contribution:', 'المسؤولية والمساهمة في بناء المشروع:')}
                    </span>
                    <p className="text-slate-200 leading-relaxed text-[11px]">
                      {language === 'en' ? member.contributionEn : member.contributionAr}
                    </p>
                  </div>
                </div>

                {/* Interactive Contact Strip */}
                <div className="pt-2 space-y-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {t('Direct Connect & Collaboration:', 'بيانات وقنوات التواصل المباشر:')}
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    
                    {/* WhatsApp Action */}
                    <a
                      href={member.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all hover:scale-105 group/btn"
                      title={t('Chat via WhatsApp', 'محادثة عبر واتساب')}
                    >
                      <MessageCircle className="w-4 h-4 mb-1 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-[9px] font-bold">WhatsApp</span>
                    </a>

                    {/* Email Action */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-solara-gold/10 hover:bg-solara-gold/20 text-solara-gold-light border border-solara-gold/30 transition-all hover:scale-105 group/btn"
                      title={t('Send an Email', 'إرسال بريد إلكتروني')}
                    >
                      <Mail className="w-4 h-4 mb-1 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-[9px] font-bold">Email</span>
                    </a>

                    {/* Copy Phone Action */}
                    <button
                      type="button"
                      onClick={() => handleCopyPhone(member.phone)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all hover:scale-105 group/btn relative ${
                        isPhoneCopied
                          ? 'bg-emerald-500 text-white border-emerald-400'
                          : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                      }`}
                      title={t('Copy Phone Number', 'نسخ رقم الهاتف')}
                    >
                      {isPhoneCopied ? (
                        <>
                          <Check className="w-4 h-4 mb-1 text-white" />
                          <span className="text-[9px] font-bold">{t('Copied!', 'تم النسخ!')}</span>
                        </>
                      ) : (
                        <>
                          <Phone className="w-4 h-4 mb-1 text-slate-300 group-hover/btn:text-solara-gold transition-colors" />
                          <span className="text-[9px] font-bold">{t('Copy Tel', 'نسخ الرقم')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Plain text verified indicators for reference */}
                  <div className="bg-black/30 px-3 py-2 rounded-xl border border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-slate-300 font-bold">{member.phone}</span>
                    <span className="text-slate-500 truncate max-w-[150px]">{member.email}</span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {(language === 'en' ? member.skillsEn : member.skillsAr).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[9px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-md font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
