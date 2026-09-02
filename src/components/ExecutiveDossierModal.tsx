import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen, Printer, CheckCircle, Sun } from 'lucide-react';
import { caseStudyChapters } from '../data/caseStudyData';
import { useLanguage } from '../context/LanguageContext';

interface ExecutiveDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveDossierModal: React.FC<ExecutiveDossierModalProps> = ({ isOpen, onClose }) => {
  const { language, isRTL, t } = useLanguage();
  const [activeChapterId, setActiveChapterId] = useState<string>(caseStudyChapters[0].id);

  if (!isOpen) return null;

  const currentChapter = caseStudyChapters.find(c => c.id === activeChapterId) || caseStudyChapters[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className={`glass-panel w-full max-w-5xl h-[92vh] rounded-3xl border border-solara-gold/40 shadow-luxury flex flex-col overflow-hidden ${
          isRTL ? 'text-right' : 'text-left'
        }`}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 sm:px-8 border-b border-white/10 bg-solara-navy-dark/90">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center border border-solara-gold/40 shadow-gold-glow">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-cinzel tracking-wider">
                SOLARA — Master Brand Strategy & Academic Dossier
              </h2>
              <p className="text-xs text-solara-gold">
                {t(
                  'Comprehensive Academic Capstone Documentation | ITI Digital Marketing',
                  'المستند التنفيذي الكامل لدراسة الحالة | معهد تكنولوجيا المعلومات ITI'
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs border border-white/10 transition-all hover:border-solara-gold/40"
            >
              <Printer className="w-3.5 h-3.5 text-solara-gold" />
              <span className="hidden sm:inline">{t('Print / Export PDF', 'طباعة / تصدير PDF')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Sidebar & Content Area */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Sidebar: Chapters Index */}
          <div className={`md:col-span-4 border-b md:border-b-0 p-4 sm:p-6 overflow-y-auto space-y-2.5 bg-black/30 ${
            isRTL ? 'md:border-l border-white/10' : 'md:border-r border-white/10'
          }`}>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3 px-2 font-mono">
              [ {t('CHAPTERS INDEX', 'فهرس الفصول')} ]
            </span>

            {caseStudyChapters.map((chap) => (
              <button
                key={chap.id}
                onClick={() => setActiveChapterId(chap.id)}
                className={`w-full p-4 rounded-2xl transition-all border flex items-start gap-3 ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  activeChapterId === chap.id
                    ? 'bg-solara-gold/20 border-solara-gold text-white shadow-md font-bold'
                    : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                <span className="w-6 h-6 rounded-lg bg-black/50 text-solara-gold text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-solara-gold/20">
                  {chap.number}
                </span>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate text-white">
                    {language === 'en' ? chap.titleEn : chap.titleAr}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {language === 'en' ? chap.subtitleEn : chap.subtitleAr}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Area: Chapter Details */}
          <div className="md:col-span-8 p-6 sm:p-10 overflow-y-auto space-y-8 bg-solara-obsidian/70">
            
            {/* Chapter Header */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <span className="text-xs bg-solara-gold/15 text-solara-gold border border-solara-gold/30 px-3 py-1 rounded-full font-mono font-bold">
                {t('Chapter', 'الفصل')} {currentChapter.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-2">
                {language === 'en' ? currentChapter.titleEn : currentChapter.titleAr}
              </h3>
              <p className="text-sm font-semibold text-solara-gold-light">
                {language === 'en' ? currentChapter.subtitleEn : currentChapter.subtitleAr}
              </p>
            </div>

            {/* Chapter Full Summary */}
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-4">
              <p>{language === 'en' ? currentChapter.summaryEn : currentChapter.summaryAr}</p>
            </div>

            {/* Framework Highlight Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-solara-gold/30 space-y-4 bg-solara-gold/[0.04]">
              <div className="flex items-center gap-2 text-solara-gold font-bold text-xs uppercase tracking-wider font-mono">
                <Sun className="w-4 h-4" />
                <span>
                  {t('Operational Framework:', 'إطار العمل التنفيذي:')}{' '}
                  {language === 'en' ? currentChapter.framework.nameEn : currentChapter.framework.nameAr}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {language === 'en' ? currentChapter.framework.descriptionEn : currentChapter.framework.descriptionAr}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {currentChapter.framework.steps.map((step, idx) => (
                  <div key={idx} className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-1">
                    <span className="text-xs font-bold text-solara-gold-light block">
                      {language === 'en' ? step.titleEn : step.titleAr}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {language === 'en' ? step.descEn : step.descAr}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                {t('Key Strategic Takeaways', 'الدروس المستفادة ونقاط القوة (Key Insights)')}
              </h4>
              <div className="space-y-2">
                {(language === 'en' ? currentChapter.keyInsightsEn : currentChapter.keyInsightsAr).map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};
