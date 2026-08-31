import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Sparkles, Compass, Users, Layers, TrendingUp, Sun, FileText, CheckCircle2 
} from 'lucide-react';
import { foundingTeamMembers } from '../data/teamData';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  const slides = [
    {
      id: 'cover',
      tag: '01 / 08 — THE VISION',
      titleAr: 'SOLARA: تشريح علامة هوية صيفية مصرية معاصرة',
      titleEn: 'The Anatomy of a Modern Egyptian Identity Brand',
      subtitleAr: 'من متجر شوبيفاي فارغ إلى دراسة حالة معيارية متكاملة لرواد الأعمال',
      content: (
        <div className="space-y-6 text-center max-w-2xl mx-auto py-8">
          <div className="w-20 h-20 rounded-3xl bg-solara-gold/20 border border-solara-gold/50 mx-auto flex items-center justify-center text-solara-gold shadow-gold-glow">
            <Sun className="w-10 h-10 animate-spin-slow" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              SOLARA <span className="gold-gradient-text">SUMMER IDENTITY</span>
            </h2>
            <p className="text-sm text-slate-300">
              مشروع تخرج الدفعة المكثفة لمعهد تكنولوجيا المعلومات (ITI) — مسار التسويق الرقمي
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
              5 Core Pillars
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-solara-gold/15 border border-solara-gold/30 text-xs text-solara-gold font-mono">
              68%+ Gross Margin
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
              Generative AI Pipeline
            </span>
          </div>
        </div>
      ),
      speakerNote: 'ابدأ العرض بتوضيح فكرة أن SOLARA ليست مجرد براند شنط، بل هي تحول استراتيجي من منتج يدوي رخيص إلى هوية شخصية مطلية بذهب 18k.'
    },
    {
      id: 'problem-gap',
      tag: '02 / 08 — MARKET GAP',
      titleAr: 'فجوة السوق: معضلة السلع اليدوية التقليدية في مصر',
      titleEn: 'The Egyptian Summer Lifestyle Market Paradox',
      subtitleAr: 'لماذا يفشل أغلب بائعي الهاند ميد في كسب هوامش ربح مجزية؟',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right py-4">
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-red-400 font-bold font-mono">المنافسة التقليدية الحمراء</span>
              <span className="text-red-400 font-bold text-sm">❌ الفخ السعري</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <li>• بيع شنط خوص غير مخصصة بأسعار 300–450 EGP بهوامش لا تغطي تكاليف الإعلانات.</li>
              <li>• ضعف متانة البطانات الداخلية وتلف اليد عند التعرض للرمال ومياه البحر.</li>
              <li>• انعدام الهوية والشعور بالندرة، واعتماد جلسات تصوير تقليدية باهظة التكلفة.</li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold font-mono">استراتيجية المحيط الأزرق لـ SOLARA</span>
              <span className="text-emerald-400 font-bold text-sm">✓ الفئة الفاخرة المتاحة</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <li>• تخصيص كامل بالاسم عبر الحفر بالليزر واللوحات الذهبية 18k بسعر 1,650–2,800 EGP.</li>
              <li>• بطانات كانفاس عازلة وقواعد جلدية مقواة بمسامير مزدوجة ضد رمال الشاطئ.</li>
              <li>• معمل ذكاء اصطناعي توليدي يوفر 80% من تكاليف التصوير وينتج مشاهد 2K مذهلة.</li>
            </ul>
          </div>
        </div>
      ),
      speakerNote: 'ركز على مصفوفة المحيط الأزرق وكيف نقلنا المنتج من قطاع السلع الرخيصة إلى قطاع الرفاهية المتاحة (Masstige).'
    },
    {
      id: 'personas',
      tag: '03 / 08 — TARGET AUDIENCE',
      titleAr: 'الجمهور المستهدف وشخصيات المشترين (STP)',
      titleEn: 'Precision Audience Segmentation & Personas',
      subtitleAr: 'ثلاث شخصيات رئيسية تحرك 85% من حجم مبيعات العلامة',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right py-4">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 01</span>
            <h4 className="text-sm font-bold text-white">سارة (مسافرة الساحل الفاخر)</h4>
            <p className="text-xs text-slate-300">تبحث عن التميز الاجتماعي في أماكن مثل هاسيندا ومراسي وشنطة تحمل اسمها للتصوير الراقي.</p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 2,800 EGP</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 02</span>
            <h4 className="text-sm font-bold text-white">مايا (عاشقة التريند والموضة)</h4>
            <p className="text-xs text-slate-300">تبحث عن كلاتشات السهرات وقبعات اللؤلؤ لمشاركتها على تيك توك وإنستجرام في الجونة ودهب.</p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 1,950 EGP</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 03</span>
            <h4 className="text-sm font-bold text-white">صاحب الهدية العاطفية</h4>
            <p className="text-xs text-slate-300">يبحث عن هدية لا تُنسى لخطيبته أو زوجته باسمها مع تجربة فتح صندوق ملكية مبهرة.</p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 2,400 EGP</div>
          </div>
        </div>
      ),
      speakerNote: 'شخصية "صاحب الهدية العاطفية" تحقق أعلى معدل تحويل لأن القيمة المضافة للتخصيص الاسمي تزيل التردد في الشراء تماماً.'
    },
    {
      id: 'product-unboxing',
      tag: '04 / 08 — PRODUCT & UNBOXING',
      titleAr: 'هندسة المنتج وتجربة فتح الصندوق (Unboxing Flow)',
      titleEn: '4-Layer Luxury Unboxing Architecture',
      subtitleAr: 'تحويل لحظة الاستلام إلى أداة تسويقية ذاتية الانتشار (Viral Loop)',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-right py-4">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 01</span>
            <h5 className="text-xs font-bold text-white">الصندوق الكحلي الصلب</h5>
            <p className="text-[11px] text-slate-300">صندوق هدايا فاخر بلون كحلي وشعار ذهبي محفور.</p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 02</span>
            <h5 className="text-xs font-bold text-white">الورق الحريري والختم</h5>
            <p className="text-[11px] text-slate-300">تغليف ناعم مع استيكر الشمع الذهبي الملكي.</p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 03</span>
            <h5 className="text-xs font-bold text-white">جراب الـ Dust Bag</h5>
            <p className="text-[11px] text-slate-300">جراب قماشي قطني لحماية الشنطة طوال الصيف.</p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 04</span>
            <h5 className="text-xs font-bold text-white">كارت الشكر الموقع</h5>
            <p className="text-[11px] text-slate-300">بطاقة موقعة يدوياً من الحرفي باسم المشترية.</p>
          </div>
        </div>
      ),
      speakerNote: 'تجربة الـ Unboxing المصممة بعناية تدفع 60% من المشترين لتصوير فيديو Story ومشاركته على إنستجرام دون أي طلب مسبق.'
    },
    {
      id: 'ai-creative',
      tag: '05 / 08 — GENERATIVE AI LAB',
      titleAr: 'معمل الذكاء الاصطناعي التوليدي وهندسة المحتوى',
      titleEn: 'AI-Driven Creative Production & Cost Efficiency',
      subtitleAr: 'إنتاج 40+ أصلاً إعلانياً فائق الدقة وتوفير 80% من ميزانيات التصوير',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right py-4">
          <div className="bg-solara-gold/10 p-6 rounded-2xl border border-solara-gold/30 text-center space-y-2">
            <div className="text-3xl font-extrabold gold-gradient-text font-mono">80%</div>
            <div className="text-xs font-bold text-white">توفير تكاليف جلسات التصوير</div>
            <p className="text-[11px] text-slate-300">استبدال مواقع التصوير واليخوت برندر توليدي فائق الواقعية بدقة 2K.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
            <div className="text-3xl font-extrabold text-white font-mono">10x</div>
            <div className="text-xs font-bold text-white">سرعة إطلاق الحملات</div>
            <p className="text-[11px] text-slate-300">توليد واختبار 12 زاوية إعلانية في أقل من 48 ساعة بدلاً من أسابيع.</p>
          </div>
          <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30 text-center space-y-2">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">2K Res</div>
            <div className="text-xs font-bold text-white">جودة طباعة وإعلانات عالمية</div>
            <p className="text-[11px] text-slate-300">تفاصيل دقيقة لخيوط الخوص واللمعان الذهبي بدون تشوهات بصرية.</p>
          </div>
        </div>
      ),
      speakerNote: 'الـ Generative AI كان عنصراً استراتيجياً مكن الفريق من مضاعفة الإنتاجية واختبار أفكار إعلانية معقدة بتكلفة شبه منعدمة.'
    },
    {
      id: 'destinations',
      tag: '06 / 08 — DESTINATION STRATEGY',
      titleAr: 'استراتيجية الوجهات الساحلية (الساحل، الجونة، دهب)',
      titleEn: 'Micro-Market Destination Architecture',
      subtitleAr: 'تكييف خطوط المنتجات والتسعير وفق الطبيعة الجغرافية لكل وجهة',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-right py-4">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">NORTH COAST (SAHEL)</span>
            <h5 className="text-sm font-bold text-white">الفخامة الصيفية المطلقة</h5>
            <p className="text-xs text-slate-300">لوحات نحاس 18k وبطانات مقاومة للماء لحفلات الشواطئ واليخوت (AOV: 2,800 EGP).</p>
          </div>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">EL GOUNA</span>
            <h5 className="text-sm font-bold text-white">حياة المارينا والسهرات</h5>
            <p className="text-xs text-slate-300">كلاتشات خوص دقيقة وسلاسل لؤلؤ طبيعي قابلة للفك لحياة المارينا (AOV: 2,200 EGP).</p>
          </div>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">DAHAB & SINAI</span>
            <h5 className="text-sm font-bold text-white">البساطة العضوية الحرة</h5>
            <p className="text-xs text-slate-300">خوص نخيل 100% طبيعي وتطريزات ألوان ترابية لعشاق الطبيعة (AOV: 1,500 EGP).</p>
          </div>
        </div>
      ),
      speakerNote: 'هذا التخصيص الجغرافي يرفع نسبة التحويل في الإعلانات المستهدفة جغرافياً بنسبة 35% على الأقل.'
    },
    {
      id: 'financials',
      tag: '07 / 08 — FINANCIALS & ROAS',
      titleAr: 'الوحدة الاقتصادية ومحاكي الأرباح والـ ROAS',
      titleEn: 'Unit Economics & Scalable Financial Model',
      subtitleAr: 'هامش ربح إجمالي 68% ومعدل عائد إعلاني متوقع 4.8x',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-right py-4">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1 text-center">
            <span className="text-[10px] text-slate-400 font-mono block">سعر البيع المقترح</span>
            <div className="text-xl font-bold text-white font-mono">1,850 EGP</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1 text-center">
            <span className="text-[10px] text-slate-400 font-mono block">تكلفة المنتج الإجمالية</span>
            <div className="text-xl font-bold text-slate-300 font-mono">590 EGP</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-solara-gold/40 space-y-1 text-center bg-solara-gold/10">
            <span className="text-[10px] text-solara-gold font-mono block font-bold">هامش الربح الإجمالي</span>
            <div className="text-xl font-bold text-solara-gold font-mono">68.1%</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/40 space-y-1 text-center bg-emerald-500/10">
            <span className="text-[10px] text-emerald-400 font-mono block font-bold">العائد الإعلاني المستهدف</span>
            <div className="text-xl font-bold text-emerald-400 font-mono">4.8x ROAS</div>
          </div>
        </div>
      ),
      speakerNote: 'بفضل ارتفاع متوسط قيمة الطلب (AOV)، يتمتع البراند بمرونة عالية في تكاليف الاستحواذ الإعلاني (CAC).'
    },
    {
      id: 'team-legacy',
      tag: '08 / 08 — THE FOUNDING TEAM',
      titleAr: 'فريق "المغامرون الخمسة" — صناع القصة',
      titleEn: 'The Five Adventurers & Collective Legacy',
      subtitleAr: 'الشراكة المتكاملة التي حولت الفكرة من الصفر إلى مرجع رائد',
      content: (
        <div className="space-y-4 text-right py-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {foundingTeamMembers.map((m) => (
              <div key={m.id} className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-solara-gold/20 text-solara-gold text-xs font-bold flex items-center justify-center mx-auto border border-solara-gold/40">
                  {m.name.includes('أحمد') ? 'أ' : m.name.includes('محمد') ? 'م' : m.name[0]}
                </div>
                <div className="text-xs font-bold text-white truncate">{m.name.split(' ')[0]}</div>
                <div className="text-[9px] text-solara-gold leading-tight">{m.badge}</div>
              </div>
            ))}
          </div>

          <div className="bg-solara-gold/10 p-5 rounded-2xl border border-solara-gold/30 text-center space-y-2">
            <span className="text-xs text-slate-200 font-semibold">
              "3,885+ رسالة، 70+ سؤالاً تحليلياً، 18+ شيت عمل، وعمل جماعي مشرف خلد مجهود الجميع بالتساوي."
            </span>
          </div>
        </div>
      ),
      speakerNote: 'اختتم العرض بتقديم كامل الشكر والتقدير لكل عضو في الفريق على دوره التأسيسي الرائع.'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  const current = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-3 sm:p-6 overflow-hidden">
      
      {/* Slide Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl h-[88vh] bg-solara-obsidian border border-solara-gold/40 rounded-3xl shadow-luxury flex flex-col justify-between overflow-hidden relative"
      >
        
        {/* Top Slide Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-solara-gold text-solara-navy-dark text-xs font-mono font-bold">
              {current.tag}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              {current.titleEn}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                showNotes
                  ? 'bg-solara-gold text-solara-navy-dark border-solara-gold font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
              }`}
            >
              {showNotes ? 'إخفاء ملاحظات العارض' : 'ملاحظات العارض (Notes)'}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Body */}
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="text-right space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {current.titleAr}
                </h3>
                <p className="text-xs sm:text-sm text-solara-gold">
                  {current.subtitleAr}
                </p>
              </div>

              {/* Dynamic Content */}
              {current.content}

              {/* Speaker Notes Drawer */}
              {showNotes && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-right text-xs text-amber-200"
                >
                  <strong className="block text-amber-400 mb-1">💡 نصيحة المتحدث (Presenter Guideline):</strong>
                  {current.speakerNote}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Bottom Controls */}
        <div className="p-6 border-t border-white/10 flex items-center justify-between bg-black/40">
          
          {/* Slide Progress Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'w-6 bg-solara-gold'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <span className="text-xs text-slate-400 font-mono">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2.5 rounded-full bg-solara-gold hover:bg-solara-gold-light text-solara-navy-dark disabled:opacity-30 disabled:cursor-not-allowed font-bold shadow-gold-glow transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

        </div>

      </motion.div>

    </div>
  );
};
