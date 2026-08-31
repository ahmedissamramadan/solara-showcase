import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, Check, Shield, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { solaraProducts } from '../data/productsData';
import { Product } from '../types/solara';
import { renderProductCustomization, CustomizationStyle } from '../utils/canvasHelpers';

export const PersonalizationStudio: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(solaraProducts[0]);
  const [customText, setCustomText] = useState<string>('Laila | ليلى');
  const [selectedStyle, setSelectedStyle] = useState<CustomizationStyle>('gold-foil');
  const [giftCardRecipient, setGiftCardRecipient] = useState<string>('إلى صديقتي الغالية، صيف لا يُنسى في الساحل ☀️');
  const [showGiftModal, setShowGiftModal] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Redraw canvas on inputs change
  useEffect(() => {
    if (canvasRef.current) {
      renderProductCustomization({
        canvas: canvasRef.current,
        product: selectedProduct,
        customText: customText,
        style: selectedStyle
      });
    }
  }, [selectedProduct, customText, selectedStyle]);

  const handleDownloadImage = () => {
    if (!canvasRef.current) return;
    
    // Confetti explosion
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4D06F', '#FAFAF7', '#C5A775']
    });

    const link = document.createElement('a');
    link.download = `SOLARA-${selectedProduct.code}-${customText.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_')}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const styleOptions: { id: CustomizationStyle; nameAr: string; descAr: string; badge: string; color: string }[] = [
    {
      id: 'gold-foil',
      nameAr: 'طلاء ذهبي 18k (Solid Brushed Gold)',
      descAr: 'لوحة نحاسية مصقولة ببريق الذهب ولمعان فاخر تحت شمس الساحل',
      badge: 'الأكثر طلباً',
      color: 'from-amber-300 via-yellow-500 to-amber-700'
    },
    {
      id: 'laser-engrave',
      nameAr: 'حفر ليزر غائر (Laser Charred)',
      descAr: 'نقش دقيق مباشرة على الخوص الطبيعي بأسلوب مينيمال كلاسيكي',
      badge: 'طبيعي 100%',
      color: 'from-amber-900 to-stone-950'
    },
    {
      id: 'leather-patch',
      nameAr: 'باتش جلد طبيعي هافان (Cognac Leather)',
      descAr: 'قطعة جلد بقري مختومة حرارياً ومخيطة يدوياً بدرزات السراجة',
      badge: 'تراثي فاخر',
      color: 'from-amber-800 to-yellow-950'
    },
    {
      id: 'silver-foil',
      nameAr: 'لوحة فضية براقة (Platinum Silver)',
      descAr: 'لوحة معدنية باردة ناصعة للمظهر العصري الهادئ',
      badge: 'مودرن',
      color: 'from-slate-100 to-slate-400'
    }
  ];

  return (
    <section id="studio" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="absolute top-12 left-12 text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/30 uppercase hidden md:block">
        [ MODULE 01 — REAL-TIME PERSONALIZATION ENGINE ]
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/10 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-solara-gold" />
            <span>Interactive Customization Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
            استوديو التخصيص الحي <span className="gold-gradient-text">بالحفر بالليزر والذهب</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            العنصر الجوهري الذي نقل SOLARA من فئة المشغولات اليدوية الشعبية إلى فئة العلامات المرموقة. جرّب كتابة اسمك وشاهد كيف تتحول الحقيبة أو القبعة إلى قطعة حصرية لا يملكها أحد سواك.
          </p>
        </div>

        {/* Main Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Canvas Surface Display */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full relative glass-panel p-6 sm:p-8 rounded-3xl border border-solara-gold/30 shadow-luxury glow-ambient">
              
              {/* Product Header Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-slate-300 font-mono">Procedural 60FPS Shader Render</span>
                </div>
                <div className="text-xs font-bold text-solara-gold font-mono bg-solara-gold/10 px-3 py-1 rounded-full border border-solara-gold/30">
                  SKU: {selectedProduct.code}
                </div>
              </div>

              {/* HTML5 Canvas Surface */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-solara-navy-dark border border-white/10 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />

                {/* Floating Craft Quality Tag */}
                <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-full text-xs text-slate-200 flex items-center gap-2 border border-solara-gold/30">
                  <Shield className="w-3.5 h-3.5 text-solara-gold" />
                  <span>حرفية يدوية مصرية 100%</span>
                </div>
              </div>

              {/* Preview Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleDownloadImage}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark hover:brightness-110 text-solara-navy-dark font-bold text-xs shadow-gold-glow transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>تحميل صورة التصميم (PNG)</span>
                  </button>

                  <button
                    onClick={() => setShowGiftModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-medium text-xs border border-white/10 transition-all"
                  >
                    <Gift className="w-4 h-4 text-solara-gold" />
                    <span>شهادة الإهداء الفاخرة</span>
                  </button>
                </div>

                <div className="text-left">
                  <div className="text-[11px] text-slate-400">السعر المقترح للتسليم:</div>
                  <div className="text-2xl font-bold gold-gradient-text font-serif">
                    {selectedProduct.priceEGP} ج.م{' '}
                    <span className="text-xs text-slate-500 line-through font-normal">
                      {selectedProduct.originalPriceEGP} ج.م
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Quick Specs */}
            <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-slate-300">
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">الخامات</span>
                <span className="font-semibold text-slate-200">{selectedProduct.materialsAr.split('،')[0]}</span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">الأبعاد</span>
                <span className="font-semibold text-slate-200 font-mono">{selectedProduct.dimensions}</span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">مدة التخصيص</span>
                <span className="font-semibold text-solara-gold">24 - 48 ساعة</span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">التوصيل</span>
                <span className="font-semibold text-emerald-400">الساحل والقاهرة</span>
              </div>
            </div>
          </div>

          {/* Right: Controls & Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Select Product */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">1</span>
                  اختر قطعة الصيف
                </h3>
                <span className="text-xs text-solara-gold font-medium">4 موديلات رئيسية</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {solaraProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3.5 rounded-2xl text-right transition-all border ${
                      selectedProduct.id === prod.id
                        ? 'bg-solara-gold/15 border-solara-gold text-white shadow-sm scale-102'
                        : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold truncate mb-1">{prod.nameAr.split('(')[0]}</div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono">{prod.code}</span>
                      <span className="text-solara-gold font-semibold">{prod.priceEGP} ج.م</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Text Input */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">2</span>
                  اكتب الاسم أو الحروف الأولى
                </h3>
                <span className="text-xs text-slate-400">عربي أو إنجليزي</span>
              </div>

              <div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  maxLength={24}
                  placeholder="مثال: Laila أو سارة"
                  className="w-full bg-solara-navy-dark/90 border border-solara-gold/40 focus:border-solara-gold rounded-2xl px-4 py-3.5 text-base font-bold text-solara-gold-light placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-solara-gold/30 transition-all text-center tracking-wider font-display"
                />
                <div className="flex items-center justify-between mt-2.5 text-[11px] text-slate-400 px-1">
                  <span>أقصى عدد: 24 حرفاً</span>
                  <div className="flex gap-2">
                    <button onClick={() => setCustomText('Laila | ليلى')} className="hover:text-solara-gold underline">ليلى</button>
                    <button onClick={() => setCustomText('Nour | نور')} className="hover:text-solara-gold underline">نور</button>
                    <button onClick={() => setCustomText('Farida | فريدة')} className="hover:text-solara-gold underline">فريدة</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Choose Customization Style */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">3</span>
                  أسلوب التنفيذ والطلاء
                </h3>
              </div>

              <div className="space-y-2">
                {styleOptions.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setSelectedStyle(opt.id)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      selectedStyle === opt.id
                        ? 'bg-solara-gold/15 border-solara-gold text-white shadow-sm'
                        : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-tr ${opt.color} border border-white/30 flex items-center justify-center shadow-sm`}>
                        {selectedStyle === opt.id && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          {opt.nameAr}
                          <span className="text-[10px] bg-solara-gold/20 text-solara-gold-light px-2 py-0.5 rounded-full font-normal">
                            {opt.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">{opt.descAr}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Gift Certificate Modal */}
      <AnimatePresence>
        {showGiftModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel p-8 rounded-3xl max-w-lg w-full border border-solara-gold/40 shadow-luxury text-center relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center mx-auto mb-4 border border-solara-gold/30">
                <Gift className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 font-serif">SOLARA Gifting Certificate</h3>
              <p className="text-xs text-solara-gold mb-6 font-mono">CERTIFIED HANDCRAFTED SUMMER LUXURY</p>

              <div className="bg-solara-navy-dark/90 border border-solara-gold/30 p-6 rounded-2xl mb-6 text-right space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>المنتج:</span>
                  <span className="text-white font-bold">{selectedProduct.nameAr}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>الاسم المحفور:</span>
                  <span className="text-solara-gold font-bold text-base">{customText}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>نوع الحفر:</span>
                  <span className="text-white font-semibold">{styleOptions.find(s => s.id === selectedStyle)?.nameAr}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">رسالة الإهداء الشخصية:</span>
                  <textarea
                    value={giftCardRecipient}
                    onChange={(e) => setGiftCardRecipient(e.target.value)}
                    rows={2}
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-solara-gold"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowGiftModal(false)}
                  className="w-1/2 py-3 rounded-full bg-white/10 text-slate-300 text-xs font-semibold hover:bg-white/20 transition-all"
                >
                  إغلاق
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="w-1/2 py-3 rounded-full bg-solara-gold text-solara-navy-dark text-xs font-bold shadow-gold-glow hover:bg-solara-gold-light transition-all"
                >
                  تحميل بطاقة الإهداء
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
