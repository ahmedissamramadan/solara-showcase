import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Box, FileText, Heart, ArrowLeft, ArrowRight, Layers, Palette, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BrandIdentitySection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [activeUnboxingStep, setActiveUnboxingStep] = useState<number>(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const unboxingSteps = [
    {
      step: 1,
      titleEn: "Layer 01: The Rigid Presentation Keepsake Box",
      titleAr: "الطبقة الأولى: الصندوق الخارجي الفاخر (The Rigid Outer Box)",
      descEn: "Heavy-duty custom rigid box finished in Midnight Navy, protecting the piece during coastal transit and sealed with a stamped gold-leaf security seal.",
      descAr: "صندوق كرتوني صلب باللون الأزرق الداكن السولاري (Midnight Navy) يحمي المنتج أثناء الشحن ويحمل ملصق أمان ذهبي مختوم، يعطي انطباعاً أولياً بالفخامة والقيمة العالية.",
      badgeEn: "Protection & Prestige",
      badgeAr: "الحماية والهيبة",
      color: "from-blue-950/90 to-slate-900/90",
      icon: Box
    },
    {
      step: 2,
      titleEn: "Layer 02: The Monogrammed Silk Veil",
      titleAr: "الطبقة الثانية: ورق التغليف الحريري (The Silk Patterned Wrap)",
      descEn: "Soft semi-translucent tissue printed with micro Solara sunburst patterns, injecting tactile curiosity and suspense before the unveiling.",
      descAr: "ورق حريري ناعم مطبوع بنقشة شمس SOLARA الهندسية الدقيقة، يضيف عنصر الغموض والتشويق (Suspense) قبل كشف تفاصيل المنتج.",
      badgeEn: "Anticipation & Mystery",
      badgeAr: "التشويق والغموض",
      color: "from-amber-950/80 to-yellow-950/40",
      icon: FileText
    },
    {
      step: 3,
      titleEn: "Layer 03: The Hand-Inked Calligraphy Card",
      titleAr: "الطبقة الثالثة: بطاقة الشكر المخصصة (The Hand-Signed Card)",
      descEn: "Bespoke textured cotton parchment addressed personally to the recipient, featuring artisan care instructions and a tactile golden wax seal.",
      descAr: "كارت شكر أنيق يحمل اسم العميل مكتوباً بخط اليد مع ختم شمعي ذهبي وتعليمات العناية بالخوص الطبيعي، مما يبني ارتباطاً عاطفياً مباشراً.",
      badgeEn: "Personal Intimacy",
      badgeAr: "اللمسة الشخصية",
      color: "from-amber-900/60 to-amber-700/30",
      icon: Heart
    },
    {
      step: 4,
      titleEn: "Layer 04: The Hero Monogram Reveal",
      titleAr: "الطبقة الرابعة: لحظة الكشف عن البطل (The Hero Reveal)",
      descEn: "The handwoven tote or fedora gleaming with 18k gold leaf or deep laser engraving, triggering smartphone cameras for spontaneous social sharing.",
      descAr: "ظهور الحقيبة أو القبعة بحفر الاسم بالليزر أو اللوحة المطلية بذهب 18k تتلألأ في الداخل، جاهزة للتصوير الفوري ومشاركتها كـ UGC على السوشيال ميديا.",
      badgeEn: "Viral Social UGC",
      badgeAr: "التقاط الصور والمشاركة",
      color: "from-solara-gold/40 to-yellow-600/20",
      icon: Sparkles
    }
  ];

  const colorPalette = [
    { 
      nameEn: "Solar Gold (18k Leaf)", 
      nameAr: "Solar Gold (ذهب الشمس)", 
      hex: "#D4AF37", 
      roleEn: "Bespoke monogramming, metallic foil, & accent hardware",
      roleAr: "لون التميز والطلاء وحفر الليزر" 
    },
    { 
      nameEn: "Midnight Navy", 
      nameAr: "Midnight Navy (الأزرق السولاري)", 
      hex: "#0A1424", 
      roleEn: "Rigid keepsake boxes, architectural backgrounds, & typography",
      roleAr: "لون الهيبة والفخامة والصناديق" 
    },
    { 
      nameEn: "Riviera Sand", 
      nameAr: "Riviera Sand (رمال الساحل)", 
      hex: "#F5EEDB", 
      roleEn: "Natural unbleached palm wicker, tissue wrap, & linen",
      roleAr: "لون الخوص والورق الحريري والخلفيات" 
    },
    { 
      nameEn: "Terracotta Coast", 
      nameAr: "Terracotta Clay (طين الشاطئ)", 
      hex: "#C85A32", 
      roleEn: "Bridle leather edge finishes, heat stamps, & micro-CTAs",
      roleAr: "لون اللمسات التفاعلية والحرارة" 
    }
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
        [ {t('MODULE 04 — VISUAL IDENTITY & SENSORY UNBOXING FLOW', 'الوحدة 04 — الهوية البصرية وتدفق الـ Unboxing الحسي')} ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>{t('Brand Architecture & Sensory Unboxing Psychology', 'معمارية الهوية وسيكولوجية فتح الصندوق')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Visual Identity & <span className="gold-gradient-text">4-Layer Unboxing Flow</span>
            </>
          ) : (
            <>
              الهوية البصرية وتجربة <span className="gold-gradient-text">فتح الصندوق (Unboxing)</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'Experience engineering extends far beyond product utility. Every second from parcel handover to unboxing is choreographed to turn every customer into a spontaneous UGC creator.',
            'تصميم تجربة العميل ليس مقتصراً على المنتج فقط؛ بل كل ثانية تمر من لحظة استلام الطرد وحتى فتح الصندوق مصممة لدفع العميل لتصوير فيديو ونشره تلقائياً.'
          )}
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
              <p className="text-xs text-solara-gold uppercase tracking-widest font-mono mt-1">
                {t('Bespoke Summer Identity', 'علامة الهوية الصيفية')}
              </p>
            </div>
            <p className={`text-xs text-slate-300 leading-relaxed pt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t(
                'A minimalist serif insignia harmonizing Roman editorial proportions with clean sunburst geometry, engineered specifically for micro laser engraving on metals and leather.',
                'شعار مينيمال يجمع بين الخطوط الرومانية الكلاسيكية وتجريد أشعة الشمس الصيفية. صُمم خصيصاً ليناسب الحفر الدقيق على المعادن والجلود والخوص الطبيعي.'
              )}
            </p>
          </div>

          {/* Color Palette Swatches */}
          <div className={`glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Palette className="w-4 h-4 text-solara-gold" />
              <span>{t('Core Luxury Color Tokens', 'لوحة الألوان الأساسية')}</span>
            </h4>

            <div className="space-y-2.5">
              {colorPalette.map((col) => (
                <div
                  key={col.hex}
                  onClick={() => handleCopyHex(col.hex)}
                  className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-solara-gold/40 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl border border-white/20 shadow-sm shrink-0"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-solara-gold transition-colors">
                        {language === 'en' ? col.nameEn : col.nameAr}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {language === 'en' ? col.roleEn : col.roleAr}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-white flex items-center gap-1">
                    {copiedHex === col.hex ? <Check className="w-3 h-3 text-emerald-400" /> : col.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: 4-Layer Interactive Unboxing Flow */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/30 shadow-luxury space-y-8">
          
          <div className={`flex items-center justify-between border-b border-white/10 pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-solara-gold" />
                <span>{t('Interactive 4-Layer Unboxing Simulator', 'محاكي تجربة فتح الصندوق بأربع طبقات')}</span>
              </h3>
              <p className="text-xs text-slate-400">
                {t('Click each step to unpack the sensory sequence', 'اضغط على كل مرحلة لمعاينة تسلسل الاستلام')}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-solara-gold">
              {activeUnboxingStep + 1} / {unboxingSteps.length}
            </span>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-4 gap-2">
            {unboxingSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveUnboxingStep(idx)}
                className={`py-3 rounded-2xl text-xs font-bold transition-all border ${
                  activeUnboxingStep === idx
                    ? 'bg-solara-gold text-solara-navy-dark border-solara-gold shadow-gold-glow font-bold'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                }`}
              >
                {t('Layer', 'طبقة')} 0{s.step}
              </button>
            ))}
          </div>

          {/* Active Step Visual Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUnboxingStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${unboxingSteps[activeUnboxingStep].color} border border-white/15 space-y-4 shadow-xl ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/15 backdrop-blur-md text-white font-mono px-3 py-1 rounded-full border border-white/20">
                  {language === 'en' ? unboxingSteps[activeUnboxingStep].badgeEn : unboxingSteps[activeUnboxingStep].badgeAr}
                </span>
                <span className="text-xs font-mono text-solara-gold uppercase">
                  {t('Step', 'المرحلة')} 0{unboxingSteps[activeUnboxingStep].step}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                {language === 'en' ? unboxingSteps[activeUnboxingStep].titleEn : unboxingSteps[activeUnboxingStep].titleAr}
              </h4>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                {language === 'en' ? unboxingSteps[activeUnboxingStep].descEn : unboxingSteps[activeUnboxingStep].descAr}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveUnboxingStep((prev) => (prev > 0 ? prev - 1 : unboxingSteps.length - 1))}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-all"
            >
              {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
              <span>{t('Previous Layer', 'الطبقة السابقة')}</span>
            </button>

            <button
              onClick={() => setActiveUnboxingStep((prev) => (prev < unboxingSteps.length - 1 ? prev + 1 : 0))}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-solara-gold text-solara-navy-dark text-xs font-bold shadow-gold-glow hover:bg-solara-gold-light transition-all"
            >
              <span>{t('Next Reveal', 'كشف الطبقة التالية')}</span>
              {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
