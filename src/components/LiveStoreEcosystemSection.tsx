import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Tag,
  Layers,
  ArrowRight,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { solaraProducts } from '../data/productsData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const LiveStoreEcosystemSection: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section id="live-store" className="py-24 relative overflow-hidden bg-solara-obsidian/90">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 -left-48 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 -right-48 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-gold text-solara-gold-light text-xs font-mono mb-4">
            <ShoppingBag className="w-3.5 h-3.5 text-solara-gold" />
            <span>{t('ACTIVE COMMERCIAL ARCHITECTURE', 'المعمارية التجارية النشطة للمشروع')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white mb-4">
            {t('The Live D2C Store & Social Ecosystem', 'المتجر الإلكتروني الحي والمنظومة التسويقية')}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t(
              'SOLARA operates not just as a conceptual defense, but as a fully deployed commercial entity with a live Shopify e-commerce flagship, real SKUs, active social channels, and an automated generative AI creative pipeline.',
              'مشروع SOLARA لم يكتفِ بكونه دراسة حالة أكاديمية للتخرج، بل تم إطلاقه وتوثيقه عملياً ككيان تجاري حي متكامل بمتجر إلكتروني رسمي على شوبيفاي، وحسابات تسويقية نشطة، وكتالوج منتجات حقيقي وصور تجارية احترافية تم إنتاجها بالذكاء الاصطناعي.'
            )}
          </p>
        </div>

        {/* 3 Core Omnichannel Pillars (Store, Instagram, Facebook) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Official E-Commerce Store */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-solara-gold/30 hover:border-solara-gold transition-all duration-300 relative group flex flex-col justify-between shadow-luxury bg-gradient-to-b from-white/[0.04] to-transparent">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-solara-gold/15 border border-solara-gold/30 flex items-center justify-center text-solara-gold shadow-gold-glow">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {t('LIVE STORE', 'متجر نشط')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-cinzel mb-1">
                www.solaraeg.shop
              </h3>
              <p className="text-xs text-solara-gold/80 font-mono mb-3">
                {t('Shopify 15.5.0 D2C Flagship Engine', 'منصة شوبيفاي المتطورة للتجارة المباشرة')}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                {t(
                  'Fully automated e-commerce storefront with local EGP currency, instant cart checkout, responsive mobile UI, and secure Egyptian shipping logistics.',
                  'متجر إلكتروني متكامل يدعم الدفع بالجنيه المصري، وتجربة تسوق سريعة ومحسنة للهواتف الذكية مع نظام تتبع شحنات محافظات مصر والساحل.'
                )}
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Catalog Size', 'الكتالوج النشط')}</span>
                  <span className="font-mono text-solara-gold font-bold">{solaraProducts.length} {t('Active SKUs', 'قطع متاحة')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Price Spectrum', 'نطاق الأسعار')}</span>
                  <span className="font-mono text-white font-bold">280 — 625 EGP</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('AI Asset Integration', 'تكامل صور الـ AI')}</span>
                  <span className="font-mono text-emerald-400 font-bold">{t('Gemini Commercial CDN', 'مرفوعة على خوادم المتجر')}</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.solaraeg.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow hover:scale-[1.02] transition-transform"
            >
              <span>{t('Visit Live Flagship Store', 'زيارة المتجر الرسمي الآن')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Official Instagram Community */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-luxury bg-gradient-to-b from-white/[0.04] to-transparent">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  @solara.eg.shop
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-cinzel mb-1">
                Instagram Official
              </h3>
              <p className="text-xs text-pink-400/80 font-mono mb-3">
                {t('Visual Lifestyle & Reels Hub', 'منصة الفيديوهات ونمط الحياة الساحلي')}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                {t(
                  'The aesthetic visual heart for high-converting 9:16 reels, behind-the-scenes artisan craftsmanship, customer unboxing tags, and influencer resort seeding.',
                  'المركز البصري الرئيسي لفيديوهات الريلز القصيرة، وتوثيق تفاصيل حياكة الخوص والجلد يدوياً، وتجارب فتح الشحنات وتفاعل عميلات الساحل.'
                )}
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Content Pillar', 'عمود المحتوى')}</span>
                  <span className="text-slate-200 font-medium">{t('Quiet Luxury & Unboxing', 'الفخامة الهادئة والفتح الفاخر')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Audio Policy', 'سياسة الصوتيات')}</span>
                  <span className="text-solara-gold font-medium">{t('Raw Waves & Wind Only', 'أصوات طبيعية دون موسيقى')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Target Hub', 'النطاق الجغرافي')}</span>
                  <span className="text-white font-medium">{t('Sahel, Gouna, New Cairo', 'الساحل، الجونة، القاهرة الجديدة')}</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/solara.eg.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-pink-900/20"
            >
              <span>{t('Follow on Instagram', 'متابعة حساب إنستغرام')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Official Facebook Community */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-luxury bg-gradient-to-b from-white/[0.04] to-transparent">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  SOLARA Egypt
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-cinzel mb-1">
                Facebook Business Page
              </h3>
              <p className="text-xs text-blue-400/80 font-mono mb-3">
                {t('Meta Ad Funnel & Direct Messenger', 'قمع إعلانات ميتا وخدمة العملاء')}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                {t(
                  'Powers our Paid Meta Ad campaigns, detailed customer reviews, mother-daughter gift requests, and high-conversion Messenger automated checkout routing.',
                  'المنصة المخصصة لإدارة الحملات الإعلانية الممولة على ميتا، واستقبال طلبات الهدايا والاستفسارات المباشرة من العميلات.'
                )}
              </p>

              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Channel Role', 'الدور الاستراتيجي')}</span>
                  <span className="text-slate-200 font-medium">{t('Conversion & Customer Trust', 'التحويل وبناء الثقة')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Campaign Types', 'نوع الحملات')}</span>
                  <span className="text-blue-300 font-medium">{t('Advantage+ & Retargeting', 'إعلانات مبيعات وإعادة استهداف')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t('Payment Options', 'خيارات الدفع')}</span>
                  <span className="text-white font-medium">{t('COD & Mobile Wallets', 'دفع عند الاستلام ومحافظ إلكترونية')}</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61590285145771"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-blue-900/30"
            >
              <span>{t('View Facebook Page', 'زيارة صفحة فيسبوك')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Real Product Showcase Grid from solaraeg.shop */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-luxury">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-solara-gold mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>{t('OFFICIAL LIVE CATALOG', 'كتالوج المنتجات الرسمي المتوفر على المتجر')}</span>
              </div>
              <h3 className="text-2xl font-bold font-cinzel text-white">
                {t('Verified Live Store SKUs', 'القطع الفعلية المتاحة للشراء على solaraeg.shop')}
              </h3>
            </div>

            <a
              href="https://www.solaraeg.shop/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-solara-gold-light hover:text-white transition-colors group"
            >
              <span>{t('Browse Full Collection on Shopify', 'تصفح الكوليكشن بالكامل على شوبيفاي')}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solaraProducts.map((prod) => (
              <div 
                key={prod.id}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-solara-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-solara-navy-dark">
                  {prod.imageUrl ? (
                    <img
                      src={prod.imageUrl}
                      alt={language === 'en' ? prod.nameEn : prod.nameAr}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-solara-navy-light text-slate-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                  )}

                  {/* SKU Code Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/70 backdrop-blur-md text-solara-gold border border-solara-gold/30">
                    {prod.code}
                  </span>

                  {/* Discount Badge */}
                  {prod.originalPriceEGP && (
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-red-500/80 backdrop-blur-md text-white">
                      -{Math.round(((prod.originalPriceEGP - prod.priceEGP) / prod.originalPriceEGP) * 100)}%
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 line-clamp-1 group-hover:text-solara-gold transition-colors">
                      {language === 'en' ? prod.nameEn : prod.nameAr}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {language === 'en' ? prod.descriptionEn : prod.descriptionAr}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold text-solara-gold font-mono">
                          {prod.priceEGP} <span className="text-[10px] text-slate-400">EGP</span>
                        </span>
                        {prod.originalPriceEGP && (
                          <span className="text-xs text-slate-500 line-through font-mono">
                            {prod.originalPriceEGP} EGP
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {t('In Stock', 'متوفر')}
                      </span>
                    </div>

                    <a
                      href={prod.liveStoreUrl || 'https://www.solaraeg.shop/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-solara-gold text-slate-200 hover:text-solara-navy-dark font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>{t('View on solaraeg.shop', 'شاهد على المتجر')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
