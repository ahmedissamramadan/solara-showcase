import { ArrowUp, Sun, HeartHandshake, ShoppingBag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t border-white/10 bg-solara-obsidian py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-noise ${
      isRTL ? 'text-right' : 'text-left'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Details */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-solara-gold/20 text-solara-gold flex items-center justify-center font-bold font-cinzel text-base border border-solara-gold/40 shadow-gold-glow">
              <Sun className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-[0.25em] text-white font-cinzel">SOLARA</span>
            <span className="text-xs bg-solara-gold/15 text-solara-gold px-3 py-1 rounded-full border border-solara-gold/30 font-mono">
              [ {t('MASTER BRAND CASE STUDY', 'دراسة حالة العلامة التجارية المرجعية')} ]
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            {t(
              'Information Technology Institute (ITI) Digital Marketing Capstone. Engineered and documented as an authoritative blueprint for building aspirational identity brands in Egypt.',
              'مشروع تخرج التسويق الرقمي — معهد تكنولوجيا المعلومات (ITI). تم بناؤه وتوثيقه كمرجع استراتيجي لتأسيس علامات الهوية الصيفية والتخصيص في مصر.'
            )}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] text-slate-400 pt-1 font-mono">
            <HeartHandshake className="w-3.5 h-3.5 text-solara-gold" />
            <span>
              {t(
                'Architected collaboratively by "The Five Adventurers" Team',
                'تأسس بتكامل وإخاء فريق "المغامرون الخمسة"'
              )}
            </span>
          </div>
        </div>

        {/* Official Omnichannel Channels Hub */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs">
          <span className="text-solara-gold font-mono text-[11px] font-bold tracking-wider uppercase">
            {t('Official Brand Channels', 'قنوات البراند الرسمية')}
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.solaraeg.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-solara-gold/15 hover:bg-solara-gold/30 text-solara-gold-light border border-solara-gold/40 transition-all text-xs font-mono font-bold"
              title="Official Shopify Store"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>solaraeg.shop</span>
              <ExternalLink className="w-3 h-3 text-solara-gold/70" />
            </a>

            <a
              href="https://www.instagram.com/solara.eg.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/30 transition-all"
              title="Instagram @solara.eg.shop"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61590285145771"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-all"
              title="Facebook @SOLARA Egypt"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-2 flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all hover:text-solara-gold hover:border-solara-gold/40 shadow-glass text-xs"
          >
            <span>{t('Back to Top', 'العودة للأعلى')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© 2025–2026 SOLARA Brand & Team The Five Adventurers. All Rights Reserved.</span>
        <span className="font-mono text-[10px] text-solara-gold/70">
          {t(
            'Engineered with Coastal Luxury Aesthetics, Apple-Grade Motion & ITI Academic Standards ☀️',
            'صُمم بأعلى معايير الأناقة الساحلية والجماليات العالمية لمعايير تخرج معهد تكنولوجيا المعلومات ☀️'
          )}
        </span>
      </div>
    </footer>
  );
};
