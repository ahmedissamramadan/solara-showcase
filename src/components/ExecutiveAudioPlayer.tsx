import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, FastForward, Sparkles, X, ChevronUp, ChevronDown, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ExecutiveAudioPlayer: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const chapters = [
    {
      titleEn: 'Chapter 1: The Origin & Strategic Rebirth of SOLARA',
      titleAr: 'المقدمة: فكرة براند SOLARA والتحول الاستراتيجي',
      textEn: 'Welcome to the executive briefing of the SOLARA Brand case study. Initiated when it was merely an empty Shopify storefront, the project was forged through the synergy of The Five Adventurers into an aspirational summer identity brand harmonizing authentic Egyptian crafts with bespoke personalization.',
      textAr: 'مرحباً بكم في دراسة حالة براند سولارا. بدأ المشروع عندما كان مجرد متجر شوبيفاي فارغ، وتحول بجهود فريق المغامرون الخمسة إلى علامة هوية صيفية فاخرة تجمع الحرفية اليدوية والتخصيص بالاسم.'
    },
    {
      titleEn: 'Chapter 2: Market Discovery & The 70-Question Survey',
      titleAr: 'أبحاث السوق: استبيان الـ 70 سؤالاً وسلوك عملاء الساحل',
      textEn: 'The team executed exhaustive field discovery featuring 70 analytical survey questions dissecting vacationers across Sahel, El Gouna, and Dahab. This research exposed core pain points in mass-market wicker and inspired our signature 18k gold foil and laser monogramming studio.',
      textAr: 'أجرى الفريق أبحاثاً ميدانية معمقة شملت سبعين سؤالاً تحليلياً لدراسة سلوك عملاء الساحل الشمالي والجونة ودهب، واكتشاف مشاكل الشنط التقليدية وابتكار نظام الحفر بالليزر والطلاء بذهب ثمانية عشر قيراط.'
    },
    {
      titleEn: 'Chapter 3: Generative AI Lab & 80% Cost Efficiency',
      titleAr: 'معمل الذكاء الاصطناعي: إنتاج أصول 2K وتوفير 80% من التكاليف',
      textEn: 'Harnessing generative AI pipelines, the founding team synthesized over 40 high-resolution commercial lookbook assets, slashing legacy photoshoot expenditure by over 80% while establishing an enviable luxury standard.',
      textAr: 'من خلال معمل الذكاء الاصطناعي التوليدي، نجح الفريق في إنتاج أكثر من أربعين أصلاً إعلانياً فائق الدقة، وتوفير ثمانين بالمائة من ميزانيات جلسات التصوير التقليدية.'
    },
    {
      titleEn: 'Chapter 4: The Five Adventurers & Collective ITI Defense',
      titleAr: 'فريق المغامرون الخمسة: ملحمة العمل الجماعي المتكامل',
      textEn: 'An authentic testament to collective leadership and brotherly synergy: Khaled Hassan, Mohamed Abd El Dayem, Youssef Hisham, Ahmed Issam Ramadan, and Adham Mahmoud. Over 3,885 messages and strategy sessions culminating in an acclaimed ITI Capstone defense.',
      textAr: 'توثيق حقيقي لجهود خالد حسن، ومحمد عبد الدايم، ويوسف هشام، وأحمد عصام رمضان، وأدهم محمود. أكثر من ثلاثة آلاف وثمانمائة رسالة وميتنج خلدت مجهود الفريق بالتساوي في مناقشة معهد تكنولوجيا المعلومات.'
    }
  ];

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const startSpeaking = (chapterIdx: number) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const chapter = chapters[chapterIdx];
    const textToSpeak = language === 'en' ? chapter.textEn : chapter.textAr;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = language === 'en' ? 'en-US' : 'ar-SA';
    utterance.rate = playbackSpeed;

    utterance.onend = () => {
      if (chapterIdx < chapters.length - 1) {
        setActiveChapter(chapterIdx + 1);
        startSpeaking(chapterIdx + 1);
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
    setIsPlaying(true);
    setActiveChapter(chapterIdx);
  };

  const togglePlay = () => {
    if (!synthRef.current) return;
    if (isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
    } else {
      if (synthRef.current.paused) {
        synthRef.current.resume();
        setIsPlaying(true);
      } else {
        startSpeaking(activeChapter);
      }
    }
  };

  const changeSpeed = () => {
    const nextSpeed = playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1;
    setPlaybackSpeed(nextSpeed);
    if (isPlaying) {
      startSpeaking(activeChapter);
    }
  };

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div className={`fixed bottom-6 z-40 ${isRTL ? 'right-6' : 'left-6'}`}>
      
      {/* Minimized Pill Button */}
      {isMinimized ? (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-3 px-5 py-3 rounded-full glass-panel border border-solara-gold/40 text-solara-gold shadow-luxury hover:border-solara-gold hover:scale-105 transition-all bg-solara-navy-dark/95 backdrop-blur-xl group"
        >
          <div className="relative">
            <Headphones className="w-5 h-5 text-solara-gold" />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            )}
          </div>
          <div className={`text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="font-bold text-white block group-hover:text-solara-gold-light transition-colors">
              {t('Executive Audio Dossier', 'الموجز الصوتي التنفيذي')}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {isPlaying ? t('Speaking Now...', 'جارٍ الاستماع...') : t('Voice Synthesis Ready', 'استمع للدراسة بصوت ذكي')}
            </span>
          </div>
          <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-white" />
        </motion.button>
      ) : (
        /* Expanded Player Window */
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`glass-panel p-6 rounded-3xl border border-solara-gold/40 shadow-luxury w-80 sm:w-96 bg-solara-navy-dark/95 backdrop-blur-2xl space-y-4 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-solara-gold" />
              <span className="text-xs font-bold text-white font-mono uppercase">
                {t('SOLARA Voice Narrative', 'السرد الصوتي لـ SOLARA')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title={t('Minimize', 'تصغير')}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  stopAudio();
                  setIsMinimized(true);
                }}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title={t('Close', 'إغلاق')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Current Chapter Info */}
          <div>
            <span className="text-[10px] text-solara-gold font-mono block mb-1">
              {t('CHAPTER', 'المحطة')} {activeChapter + 1} / {chapters.length}
            </span>
            <h4 className="text-sm font-bold text-white leading-snug">
              {language === 'en' ? chapters[activeChapter].titleEn : chapters[activeChapter].titleAr}
            </h4>
          </div>

          {/* Chapters Quick Select */}
          <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => startSpeaking(idx)}
                className={`w-full p-2 rounded-xl text-xs transition-all border ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  activeChapter === idx
                    ? 'bg-solara-gold/20 border-solara-gold text-solara-gold-light font-bold'
                    : 'bg-white/5 border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="truncate block">
                  {idx + 1}. {language === 'en' ? ch.titleEn : ch.titleAr}
                </span>
              </button>
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <button
              onClick={changeSpeed}
              className="text-[11px] font-mono font-bold text-solara-gold bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
              title={t('Playback Speed', 'سرعة القراءة')}
            >
              {playbackSpeed}x
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-solara-gold hover:bg-solara-gold-light text-solara-navy-dark flex items-center justify-center shadow-gold-glow transition-all"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
              </button>

              <button
                onClick={stopAudio}
                className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-red-400 transition-colors"
                title={t('Stop Audio', 'إيقاف')}
              >
                <VolumeX className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[10px] text-slate-500 font-mono">
              Web Speech API
            </span>
          </div>

        </motion.div>
      )}

    </div>
  );
};
