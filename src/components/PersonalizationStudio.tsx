import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, Check, Shield, Gift, ShoppingBag, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { solaraProducts } from '../data/productsData';
import { Product } from '../types/solara';
import { renderProductCustomization, CustomizationStyle } from '../utils/canvasHelpers';
import { useLanguage } from '../context/LanguageContext';

export const PersonalizationStudio: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product>(solaraProducts[0]);
  const [customText, setCustomText] = useState<string>('Laila | ليلى');
  const [selectedStyle, setSelectedStyle] = useState<CustomizationStyle>('gold-foil');
  const [giftCardRecipient, setGiftCardRecipient] = useState<string>(
    'To my dearest friend, wishing you an unforgettable summer in Sahel ☀️'
  );
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

  const styleOptions: { 
    id: CustomizationStyle; 
    nameEn: string; 
    nameAr: string; 
    descEn: string; 
    descAr: string; 
    badgeEn: string; 
    badgeAr: string; 
    color: string 
  }[] = [
    {
      id: 'gold-foil',
      nameEn: '18k Brushed Gold Leaf (Solid Brass)',
      nameAr: 'طلاء ذهبي 18k (Solid Brushed Gold)',
      descEn: 'Jewelry-grade polished brass plate reflecting sunbeams across Sahel beaches',
      descAr: 'لوحة نحاسية مصقولة ببريق الذهب ولمعان فاخر تحت شمس الساحل',
      badgeEn: 'Most Popular',
      badgeAr: 'الأكثر طلباً',
      color: 'from-amber-300 via-yellow-500 to-amber-700'
    },
    {
      id: 'laser-engrave',
      nameEn: 'Deep Laser Incision (Natural Wicker)',
      nameAr: 'حفر ليزر غائر (Laser Charred)',
      descEn: 'Subtle char engraving directly onto natural palm weave in an understated minimalist aesthetic',
      descAr: 'نقش دقيق مباشرة على الخوص الطبيعي بأسلوب مينيمال كلاسيكي',
      badgeEn: '100% Organic',
      badgeAr: 'طبيعي 100%',
      color: 'from-amber-900 to-stone-950'
    },
    {
      id: 'leather-patch',
      nameEn: 'Cognac Full-Grain Leather Patch',
      nameAr: 'باتش جلد طبيعي هافان (Cognac Leather)',
      descEn: 'Italian bridle leather hot-embossed and hand-stitched with saddle thread',
      descAr: 'قطعة جلد بقري مختومة حرارياً ومخيطة يدوياً بدرزات السراجة',
      badgeEn: 'Heirloom Craft',
      badgeAr: 'تراثي فاخر',
      color: 'from-amber-800 to-yellow-950'
    },
    {
      id: 'silver-foil',
      nameEn: 'Platinum Brushed Silver Plate',
      nameAr: 'لوحة فضية براقة (Platinum Silver)',
      descEn: 'Crisp rhodium-sheen metallic plate for a sleek contemporary coastal mood',
      descAr: 'لوحة معدنية باردة ناصعة للمظهر العصري الهادئ',
      badgeEn: 'Contemporary',
      badgeAr: 'مودرن',
      color: 'from-slate-100 to-slate-400'
    }
  ];

  return (
    <section id="studio" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-noise">
      
      {/* Decorative Module Stamp */}
      <div className={`absolute top-12 text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/30 uppercase hidden md:block ${
        isRTL ? 'right-12' : 'left-12'
      }`}>
        [ {t('MODULE 01 — REAL-TIME PERSONALIZATION ENGINE', 'الوحدة 01 — محرك استوديو التخصيص التفاعلي')} ]
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/10 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-solara-gold" />
            <span>{t('Interactive Canvas Customization Engine', 'استوديو التخصيص الحي التفاعلي')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
            {language === 'en' ? (
              <>
                Live Customization Studio <span className="gold-gradient-text">with Laser & 18K Gold</span>
              </>
            ) : (
              <>
                استوديو التخصيص الحي <span className="gold-gradient-text">بالحفر بالليزر والذهب</span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              'The fundamental differentiator that propelled SOLARA from a generic craft shop into an aspirational identity brand. Type your name or initials and witness your bespoke heirloom rendered in real time.',
              'العنصر الجوهري الذي نقل SOLARA من فئة المشغولات اليدوية الشعبية إلى فئة العلامات المرموقة. جرّب كتابة اسمك وشاهد كيف تتحول الحقيبة أو القبعة إلى قطعة حصرية لا يملكها أحد سواك.'
            )}
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
                  <span className="text-xs font-medium text-slate-300 font-mono">
                    {t('Real-Time HTML5 Canvas Shader', 'معاينة حية للماتيريال بدقة 60 إطار')}
                  </span>
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
                <div className={`absolute bottom-4 glass-panel px-3.5 py-1.5 rounded-full text-xs text-slate-200 flex items-center gap-2 border border-solara-gold/30 shadow-lg ${
                  isRTL ? 'right-4' : 'left-4'
                }`}>
                  <Shield className="w-3.5 h-3.5 text-solara-gold" />
                  <span>{t('100% Egyptian Handcrafted Artisanship', 'حرفية يدوية مصرية 100%')}</span>
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
                    <span>{t('Download Render (PNG)', 'تحميل صورة التصميم (PNG)')}</span>
                  </button>

                  <button
                    onClick={() => setShowGiftModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-medium text-xs border border-white/10 transition-all"
                  >
                    <Gift className="w-4 h-4 text-solara-gold" />
                    <span>{t('Gift Certificate Card', 'شهادة الإهداء الفاخرة')}</span>
                  </button>

                  {selectedProduct.liveStoreUrl && (
                    <a
                      href={selectedProduct.liveStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-solara-gold/15 hover:bg-solara-gold/30 text-solara-gold-light font-bold text-xs border border-solara-gold/40 transition-all shadow-gold-glow"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-solara-gold" />
                      <span>{t('Order on Official Store', 'اطلب من المتجر الحي')}</span>
                      <ExternalLink className="w-3 h-3 text-solara-gold/80" />
                    </a>
                  )}
                </div>

                <div className={isRTL ? 'text-left' : 'text-right'}>
                  <div className="text-[11px] text-slate-400">
                    {t('Direct Craft Price:', 'السعر المباشر المقترح:')}
                  </div>
                  <div className="text-2xl font-bold gold-gradient-text font-serif">
                    {selectedProduct.priceEGP} EGP{' '}
                    <span className="text-xs text-slate-500 line-through font-normal">
                      {selectedProduct.originalPriceEGP} EGP
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Product Quick Specs */}
            <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-slate-300">
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">
                  {t('Material', 'الخامات')}
                </span>
                <span className="font-semibold text-slate-200 truncate block">
                  {language === 'en' ? selectedProduct.materialsEn.split(',')[0] : selectedProduct.materialsAr.split('،')[0]}
                </span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">
                  {t('Dimensions', 'الأبعاد')}
                </span>
                <span className="font-semibold text-slate-200 font-mono">{selectedProduct.dimensions}</span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">
                  {t('Turnaround', 'مدة التخصيص')}
                </span>
                <span className="font-semibold text-solara-gold">
                  {t('24 – 48 Hours', '24 - 48 ساعة')}
                </span>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">
                  {t('Dispatch Corridor', 'مناطق التوصيل')}
                </span>
                <span className="font-semibold text-emerald-400">
                  {t('Sahel, Gouna & Cairo', 'الساحل، الجونة والقاهرة')}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Controls & Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Select Product */}
            <div className={`glass-panel p-6 rounded-3xl border border-white/10 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">1</span>
                  {t('Select Resort Piece', 'اختر قطعة الصيف')}
                </h3>
                <span className="text-xs text-solara-gold font-medium">
                  {t('4 Core Silhouettes', '4 موديلات رئيسية')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {solaraProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3.5 rounded-2xl transition-all border ${
                      isRTL ? 'text-right' : 'text-left'
                    } ${
                      selectedProduct.id === prod.id
                        ? 'bg-solara-gold/15 border-solara-gold text-white shadow-sm scale-102'
                        : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold truncate mb-1">
                      {language === 'en' ? prod.nameEn.split('—')[0] : prod.nameAr.split('(')[0]}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono">{prod.code}</span>
                      <span className="text-solara-gold font-semibold">{prod.priceEGP} EGP</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Text Input */}
            <div className={`glass-panel p-6 rounded-3xl border border-white/10 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">2</span>
                  {t('Enter Name or Monogram', 'اكتب الاسم أو الحروف الأولى')}
                </h3>
                <span className="text-xs text-slate-400">
                  {t('English or Arabic', 'عربي أو إنجليزي')}
                </span>
              </div>

              <div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  maxLength={24}
                  placeholder={t('e.g., Laila or Farida', 'مثال: Laila أو سارة')}
                  className="w-full bg-solara-navy-dark/90 border border-solara-gold/40 focus:border-solara-gold rounded-2xl px-4 py-3.5 text-base font-bold text-solara-gold-light placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-solara-gold/30 transition-all text-center tracking-wider font-display"
                />
                <div className="flex items-center justify-between mt-2.5 text-[11px] text-slate-400 px-1">
                  <span>{t('Max 24 characters', 'أقصى عدد: 24 حرفاً')}</span>
                  <div className="flex gap-2">
                    <button onClick={() => setCustomText('Laila | ليلى')} className="hover:text-solara-gold underline">Laila</button>
                    <button onClick={() => setCustomText('Nour | نور')} className="hover:text-solara-gold underline">Nour</button>
                    <button onClick={() => setCustomText('Farida | فريدة')} className="hover:text-solara-gold underline">Farida</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Choose Customization Style */}
            <div className={`glass-panel p-6 rounded-3xl border border-white/10 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-solara-gold text-solara-navy-dark text-xs flex items-center justify-center font-bold font-mono">3</span>
                  {t('Engraving Material & Texture', 'أسلوب التنفيذ والطلاء')}
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
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-tr ${opt.color} border border-white/30 flex items-center justify-center shadow-sm shrink-0`}>
                        {selectedStyle === opt.id && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          {language === 'en' ? opt.nameEn : opt.nameAr}
                          <span className="text-[10px] bg-solara-gold/20 text-solara-gold-light px-2 py-0.5 rounded-full font-normal">
                            {language === 'en' ? opt.badgeEn : opt.badgeAr}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {language === 'en' ? opt.descEn : opt.descAr}
                        </div>
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
              className={`glass-panel p-8 rounded-3xl max-w-lg w-full border border-solara-gold/40 shadow-luxury text-center relative ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center mx-auto mb-4 border border-solara-gold/30">
                <Gift className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 font-serif text-center">SOLARA Gifting Certificate</h3>
              <p className="text-xs text-solara-gold mb-6 font-mono text-center">CERTIFIED HANDCRAFTED RESORT LUXURY</p>

              <div className="bg-solara-navy-dark/90 border border-solara-gold/30 p-6 rounded-2xl mb-6 space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>{t('Selected Silhouette:', 'المنتج:')}</span>
                  <span className="text-white font-bold">
                    {language === 'en' ? selectedProduct.nameEn : selectedProduct.nameAr}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>{t('Engraved Monogram:', 'الاسم المحفور:')}</span>
                  <span className="text-solara-gold font-bold text-base font-serif">{customText}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>{t('Application Type:', 'نوع الحفر:')}</span>
                  <span className="text-white font-semibold">
                    {language === 'en' 
                      ? styleOptions.find(s => s.id === selectedStyle)?.nameEn 
                      : styleOptions.find(s => s.id === selectedStyle)?.nameAr}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    {t('Custom Gift Inscription:', 'رسالة الإهداء الشخصية:')}
                  </span>
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
                  {t('Close', 'إغلاق')}
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="w-1/2 py-3 rounded-full bg-solara-gold text-solara-navy-dark text-xs font-bold shadow-gold-glow hover:bg-solara-gold-light transition-all"
                >
                  {t('Download Gift Card', 'تحميل بطاقة الإهداء')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
