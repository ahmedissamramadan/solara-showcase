import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Box, FileText, Heart, ArrowLeft, ArrowRight, Layers, Palette, Check } from 'lucide-react';

export const BrandIdentitySection: React.FC = () => {
  const [activeUnboxingStep, setActiveUnboxingStep] = useState<number>(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const unboxingSteps = [
    {
      step: 1,
      titleAr: "الطبقة الأولى: الصندوق الخارجي الفاخر (The Rigid Outer Box)",
      descAr: "صندوق كرتوني صلب باللون الأزرق الداكن السولاري (Midnight Navy) يحمي المنتج أثناء الشحن ويحمل ملصق أمان ذهبي مختوم، يعطي انطباعاً أولياً بالفخامة والقيمة العالية.",
      badge: "الحماية والهيبة",
      color: "from-blue-950/90 to-slate-900/90",
      icon: Box
    },
    {
      step: 2,
      titleAr: "الطبقة الثانية: ورق التغليف الحريري (The Silk Patterned Wrap)",
      descAr: "ورق حريري ناعم مطبوع بنقشة شمس SOLARA الهندسية الدقيقة، يضيف عنصر الغموض والتشويق (Suspense) قبل كشف تفاصيل المنتج.",
      badge: "التشويق والغموض",
      color: "from-amber-950/80 to-yellow-950/40",
      icon: FileText
    },
    {
      step: 3,
      titleAr: "الطبقة الثالثة: بطاقة الشكر المخصصة (The Hand-Signed Card)",
      descAr: "كارت شكر أنيق يحمل اسم العميل مكتوباً بخط اليد مع ختم شمعي ذهبي وتعليمات العناية بالخوص الطبيعي، مما يبني ارتباطاً عاطفياً مباشراً.",
      badge: "اللمسة الشخصية",
      color: "from-amber-900/60 to-amber-700/30",
      icon: Heart
    },
    {
      step: 4,
      titleAr: "الطبقة الرابعة: لحظة الكشف عن البطل (The Hero Reveal)",
      descAr: "ظهور الحقيبة أو القبعة بحفر الاسم بالليزر أو اللوحة المطلية بذهب 18k تتلألأ في الداخل، جاهزة للتصوير الفوري ومشاركتها كـ UGC على السوشيال ميديا.",
      badge: "التقاط الصور والمشاركة",
      color: "from-solara-gold/40 to-yellow-600/20",
      icon: Sparkles
    }
  ];

  const colorPalette = [
    { name: "Solar Gold (ذهب الشمس)", hex: "#D4AF37", role: "لون التميز والطلاء وحفر الليزر" },
    { name: "Midnight Navy (الأزرق السولاري)", hex: "#0A1424", role: "لون الهيبة والفخامة والصناديق" },
    { name: "Riviera Sand (رمال الساحل)", hex: "#F5EEDB", role: "لون الخوص والورق الحريري والخلفيات" },
    { name: "Terracotta Clay (طين الشاطئ)", hex: "#C85A32", role: "لون اللمسات التفاعلية والحرارة" }
  ];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 04 — VISUAL IDENTITY & SENSORY UNBOXING FLOW ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>Brand Architecture & Unboxing Psychology</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          الهوية البصرية وتجربة <span className="gold-gradient-text">فتح الصندوق (Unboxing)</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          تصميم تجربة العميل ليس مقتصراً على المنتج فقط؛ بل كل ثانية تمر من لحظة استلام الطرد وحتى فتح الصندوق مصممة لدفع العميل لتصوير فيديو ونشره تلقائياً.
        </p>
      </div>

      {/* Grid: Visual System & Unboxing Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: Brand Identity Tokens & Logo */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Logo Showcase */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/30 text-center space-y-4 shadow-luxury">
            <div className="w-24 h-24 rounded-3xl bg-solara-navy-dark border border-solara-gold p-1 mx-auto flex items-center justify-center shadow-gold-glow">
              <span className="text-5xl font-serif text-solara-gold font-bold">S</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white tracking-[0.25em] font-cinzel">SOLARA</h3>
              <p className="text-xs text-solara-gold uppercase tracking-widest font-mono mt-1">Personalized Summer Brand</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed text-right pt-2">
              شعار مينيمال يجمع بين الخطوط الرومانية الكلاسيكية وتجريد أشعة الشمس الصيفية. صُمم خصيصاً ليناسب الحفر الدقيق على المعادن والجلود والخوص الطبيعي.
            </p>
          </div>

          {/* Color Palette Swatches */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4 text-solara-gold" />
              لوحة الألوان الأساسية (Color System)
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {colorPalette.map((col, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopyHex(col.hex)}
                  className="bg-black/40 p-3.5 rounded-2xl border border-white/5 flex items-center gap-3 cursor-pointer hover:border-solara-gold/40 transition-all group"
                  title="انقر لنسخ كود اللون"
                >
                  <div className="w-8 h-8 rounded-xl shadow-md shrink-0 border border-white/20" style={{ backgroundColor: col.hex }} />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-white truncate group-hover:text-solara-gold-light">{col.name.split('(')[0]}</div>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      {copiedHex === col.hex ? (
                        <span className="text-emerald-400 flex items-center gap-0.5"><Check className="w-3 h-3" /> تم النسخ</span>
                      ) : (
                        <span>{col.hex}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Interactive 4-Layer Unboxing Simulator */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-solara-gold/30 shadow-luxury space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-solara-gold" />
                <span>محاكي تجربة فتح الصندوق (Unboxing Flow)</span>
              </h3>
              <p className="text-xs text-slate-400">انقر على المراحل لمشاهدة تفاصيل كل طبقة تغليف</p>
            </div>
            <span className="text-xs font-bold text-solara-gold bg-solara-gold/10 px-3 py-1 rounded-full border border-solara-gold/30 font-mono">
              Layer {activeUnboxingStep + 1} of 4
            </span>
          </div>

          {/* Steps Indicator Bar */}
          <div className="grid grid-cols-4 gap-2">
            {unboxingSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUnboxingStep(idx)}
                className={`py-2.5 px-1 rounded-2xl text-[11px] font-bold transition-all text-center border ${
                  activeUnboxingStep === idx
                    ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-102'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'
                }`}
              >
                الطبقة {idx + 1}
              </button>
            ))}
          </div>

          {/* Active Step Visual Representation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUnboxingStep}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${unboxingSteps[activeUnboxingStep].color} border border-solara-gold/40 shadow-xl space-y-4 text-right backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs bg-solara-gold text-solara-navy-dark px-3 py-1 rounded-full font-bold">
                  {unboxingSteps[activeUnboxingStep].badge}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-black/40 text-solara-gold flex items-center justify-center border border-white/10 shadow-md">
                  {React.createElement(unboxingSteps[activeUnboxingStep].icon, { className: "w-6 h-6" })}
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                {unboxingSteps[activeUnboxingStep].titleAr}
              </h4>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {unboxingSteps[activeUnboxingStep].descAr}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={activeUnboxingStep === 0}
              onClick={() => setActiveUnboxingStep(prev => prev - 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الطبقة السابقة</span>
            </button>

            <button
              disabled={activeUnboxingStep === 3}
              onClick={() => setActiveUnboxingStep(prev => prev + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-solara-navy-dark bg-solara-gold hover:bg-solara-gold-light disabled:opacity-30 disabled:pointer-events-none transition-all shadow-gold-glow"
            >
              <span>الطبقة التالية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
