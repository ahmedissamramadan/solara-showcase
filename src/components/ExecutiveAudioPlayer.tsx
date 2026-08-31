import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, FastForward, Sparkles, X, ChevronUp, ChevronDown, Mic } from 'lucide-react';

export const ExecutiveAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const chapters = [
    {
      titleAr: 'المقدمة: فكرة براند SOLARA والتحول الاستراتيجي',
      text: 'مرحباً بكم في دراسة حالة براند سولارا. بدأ المشروع عندما كان مجرد متجر شوبيفاي فارغ، وتحول بجهود فريق المغامرون الخمسة إلى علامة هوية صيفية فاخرة تجمع الحرفية اليدوية والتخصيص بالاسم.'
    },
    {
      titleAr: 'أبحاث السوق: استبيان الـ 70 سؤالاً وسلوك عملاء الساحل',
      text: 'أجرى الفريق أبحاثاً ميدانية معمقة شملت سبعين سؤالاً تحليلياً لدراسة سلوك عملاء الساحل الشمالي والجونة ودهب، واكتشاف مشاكل الشنط التقليدية وابتكار نظام الحفر بالليزر والطلاء بذهب ثمانية عشر قيراط.'
    },
    {
      titleAr: 'معمل الذكاء الاصطناعي: إنتاج أصول 2K وتوفير 80% من التكاليف',
      text: 'من خلال معمل الذكاء الاصطناعي التوليدي، نجح الفريق في إنتاج أكثر من أربعين أصلاً إعلانياً فائق الدقة، وتوفير ثمانين بالمائة من ميزانيات جلسات التصوير التقليدية.'
    },
    {
      titleAr: 'فريق المغامرون الخمسة: ملحمة العمل الجماعي المتكامل',
      text: 'توثيق حقيقي لجهود خالد حسن، ومحمد عبد الدايم، ويوسف هشام، وأحمد عصام رمضان، وأدهم. أكثر من ثلاثة آلاف وثمانمائة رسالة وميتنج خلدت مجهود الفريق بالتساوي.'
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

    const utterance = new SpeechSynthesisUtterance(chapters[chapterIdx].text);
    utterance.lang = 'ar-SA';
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
    <div className="fixed bottom-6 left-6 z-40">
      
      {/* Minimized Pill Button */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-solara-obsidian/90 border border-solara-gold/40 text-solara-gold-light backdrop-blur-xl shadow-luxury hover:scale-105 transition-all text-xs font-semibold group"
        >
          <div className="w-5 h-5 rounded-full bg-solara-gold/20 flex items-center justify-center">
            <Mic className="w-3 h-3 text-solara-gold animate-pulse" />
          </div>
          <span>دليل الكواليس الصوتي (Audio Guide)</span>
          {isPlaying && (
            <span className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 h-3 bg-solara-gold animate-bounce" />
              <span className="w-0.5 h-2 bg-solara-gold animate-bounce delay-100" />
              <span className="w-0.5 h-3 bg-solara-gold animate-bounce delay-200" />
            </span>
          )}
        </button>
      ) : (
        /* Expanded Luxury Audio Bar */
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          className="w-[320px] sm:w-[380px] bg-solara-obsidian/95 border border-solara-gold/40 rounded-3xl p-5 shadow-luxury backdrop-blur-2xl text-right space-y-3 relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={stopAudio}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-white font-display">
                سرد قصة التأسيس بالذكاء الاصطناعي
              </span>
              <Mic className="w-3.5 h-3.5 text-solara-gold" />
            </div>
          </div>

          {/* Active Chapter Info */}
          <div className="space-y-1">
            <div className="text-[10px] text-solara-gold font-mono uppercase">
              Chapter {activeChapter + 1} / {chapters.length}
            </div>
            <div className="text-xs font-bold text-slate-200 truncate">
              {chapters[activeChapter].titleAr}
            </div>
          </div>

          {/* Animated Waveform Bars */}
          <div className="flex items-center justify-center gap-1 h-6 bg-black/40 rounded-xl p-1 border border-white/5">
            {[40, 70, 30, 90, 50, 80, 45, 95, 60, 30, 85, 40, 75, 55, 90].map((h, idx) => (
              <span
                key={idx}
                className="w-1 bg-solara-gold rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(20, Math.round(h * Math.random()))}%` : '20%',
                  opacity: isPlaying ? 0.9 : 0.3
                }}
              />
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pt-1">
            
            {/* Speed Toggle Button */}
            <button
              onClick={changeSpeed}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-slate-300 font-mono border border-white/10"
            >
              {playbackSpeed}x Speed
            </button>

            {/* Play / Pause Main Button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-solara-gold hover:bg-solara-gold-light text-solara-navy-dark flex items-center justify-center shadow-gold-glow font-bold hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {/* Chapter Navigator Dropdown */}
            <button
              onClick={() => {
                const next = (activeChapter + 1) % chapters.length;
                startSpeaking(next);
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-slate-300 font-mono border border-white/10"
            >
              التالي →
            </button>

          </div>

        </motion.div>
      )}

    </div>
  );
};
