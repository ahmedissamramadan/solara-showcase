import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, BookOpen, Sun, Menu, X, Presentation, ShoppingBag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenDossier: () => void;
  onNavigateToStudio: () => void;
  onOpenPitchDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDossier, 
  onNavigateToStudio,
  onOpenPitchDeck 
}) => {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelEn: 'Live Store', labelAr: 'المتجر الحي', href: '#live-store', code: '00' },
    { labelEn: 'Studio', labelAr: 'الاستوديو', href: '#studio', code: '01' },
    { labelEn: 'Strategic Shift', labelAr: 'التحول الاستراتيجي', href: '#strategic-shift', code: '02' },
    { labelEn: 'Competitors', labelAr: 'المنافسين', href: '#competitors', code: '03' },
    { labelEn: 'AI Lab', labelAr: 'معمل الـ AI', href: '#ai-lab', code: '04' },
    { labelEn: 'Funnel', labelAr: 'القمع البيعي', href: '#funnel', code: '05' },
    { labelEn: 'ROAS', labelAr: 'العائد الإعلاني', href: '#calculator', code: '06' },
    { labelEn: 'Destinations', labelAr: 'الوجهات', href: '#destinations', code: '07' },
    { labelEn: 'BMC', labelAr: 'نموذج العمل', href: '#bmc', code: '08' },
    { labelEn: 'Ad Hooks', labelAr: 'محاكي الإعلانات', href: '#ad-simulator', code: '09' },
    { labelEn: 'Founders', labelAr: 'فريق التأسيس', href: '#founding-team', code: '10' },
  ];

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className={`fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark z-50 shadow-gold-glow ${
          isRTL ? 'origin-right' : 'origin-left'
        }`}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-solara-obsidian/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-luxury'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Essence */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-solara-gold/20 via-solara-gold/10 to-transparent border border-solara-gold/40 flex items-center justify-center text-solara-gold font-serif font-bold text-base shadow-gold-glow group-hover:scale-105 transition-transform">
              <Sun className="w-4 h-4 text-solara-gold group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <span className="text-lg font-bold tracking-[0.2em] text-white font-cinzel block group-hover:text-solara-gold-light transition-colors">
                SOLARA
              </span>
              <span className="text-[8px] text-solara-gold/90 font-mono tracking-widest block uppercase">
                {t('ITI Capstone Master', 'دراسة حالة ITI المعتمدة')}
              </span>
            </div>
          </a>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-white/[0.08]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1 rounded-full text-[10px] font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1 group"
              >
                <span className="text-[8px] text-solara-gold/60 group-hover:text-solara-gold font-mono">
                  {item.code}
                </span>
                <span>{language === 'en' ? item.labelEn : item.labelAr}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Direct Link to Live Shopify Store */}
            <a
              href="https://www.solaraeg.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-solara-gold/15 hover:bg-solara-gold/25 text-solara-gold-light border border-solara-gold/40 text-xs font-semibold backdrop-blur-md transition-all shadow-gold-glow hover:scale-105"
              title={t('Visit Live Shopify Store (solaraeg.shop)', 'زيارة المتجر الرسمي على شوبيفاي')}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-solara-gold" />
              <span className="hidden xl:inline">solaraeg.shop</span>
              <span className="xl:hidden">{t('Store', 'المتجر')}</span>
              <ExternalLink className="w-3 h-3 text-solara-gold/70" />
            </a>

            {/* Apple-grade Luxury Language Switcher */}
            <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono transition-all ${
                  language === 'en'
                    ? 'bg-solara-gold text-solara-navy-dark shadow-gold-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-arabic transition-all ${
                  language === 'ar'
                    ? 'bg-solara-gold text-solara-navy-dark shadow-gold-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="التحويل للغة العربية"
              >
                عربي
              </button>
            </div>

            {/* Pitch Deck Button */}
            <button
              onClick={onOpenPitchDeck}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-solara-gold/40 backdrop-blur-md transition-all"
            >
              <Presentation className="w-3.5 h-3.5 text-solara-gold" />
              <span>{t('Pitch Deck (P)', 'عرض تقديمي (P)')}</span>
            </button>

            {/* Executive Dossier */}
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-solara-gold/40 backdrop-blur-md transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-solara-gold" />
              <span>{t('Dossier', 'المستند')}</span>
            </button>

            {/* Live Studio CTA */}
            <button
              onClick={onNavigateToStudio}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark text-xs font-bold shadow-gold-glow hover:shadow-luxury hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-solara-navy-dark" />
              <span>{t('Live Studio', 'الاستوديو الحي')}</span>
            </button>
          </div>

          {/* Mobile Actions: Language Toggle & Menu Button */}
          <div className="flex items-center gap-2 2xl:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1 rounded-full bg-solara-gold/15 border border-solara-gold/30 text-solara-gold text-xs font-mono font-bold flex items-center gap-1"
            >
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-solara-gold/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-solara-gold" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="2xl:hidden border-t border-white/10 bg-solara-obsidian/95 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-2">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <a
                href="https://www.solaraeg.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-solara-gold/20 text-solara-gold-light border border-solara-gold/40 text-xs font-bold"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>solaraeg.shop</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPitchDeck();
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 text-slate-200 border border-white/10 text-xs font-semibold"
              >
                <Presentation className="w-3.5 h-3.5 text-solara-gold" />
                <span>{t('Pitch Deck', 'عرض تقديمي')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/5 hover:text-solara-gold flex items-center justify-between transition-colors"
                >
                  <span>{language === 'en' ? item.labelEn : item.labelAr}</span>
                  <span className="text-[10px] text-solara-gold font-mono">{item.code}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
