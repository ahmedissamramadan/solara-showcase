import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, BookOpen, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDossier: () => void;
  onNavigateToStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDossier, onNavigateToStudio }) => {
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
    { label: 'الاستوديو الحي', href: '#studio', code: '01' },
    { label: 'التحول الاستراتيجي', href: '#strategic-shift', code: '02' },
    { label: 'مصفوفة المنافسين', href: '#competitors', code: '03' },
    { label: 'معمل الـ AI', href: '#ai-lab', code: '04' },
    { label: 'القمع والـ SEO', href: '#funnel', code: '05' },
    { label: 'حاسبة الـ ROAS', href: '#calculator', code: '06' },
    { label: 'الوجهات الساحلية', href: '#destinations', code: '07' },
    { label: 'نموذج العمل (BMC)', href: '#bmc', code: '08' },
    { label: 'فريق التأسيس', href: '#founding-team', code: '09' },
  ];

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark origin-right z-50 shadow-gold-glow"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-solara-obsidian/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-luxury'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Essence */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-solara-gold/20 via-solara-gold/10 to-transparent border border-solara-gold/40 flex items-center justify-center text-solara-gold font-serif font-bold text-lg shadow-gold-glow group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-solara-gold group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="text-right">
              <span className="text-xl font-bold tracking-[0.2em] text-white font-cinzel block group-hover:text-solara-gold-light transition-colors">
                SOLARA
              </span>
              <span className="text-[9px] text-solara-gold/90 font-mono tracking-widest block uppercase">
                Case Study Archive
              </span>
            </div>
          </a>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-white/[0.08]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1 group"
              >
                <span className="text-[9px] text-solara-gold/60 group-hover:text-solara-gold font-mono">
                  {item.code}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-solara-gold/40 backdrop-blur-md transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-solara-gold" />
              <span>المستند التنفيذي (PDF)</span>
            </button>

            <button
              onClick={onNavigateToStudio}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark text-xs font-bold shadow-gold-glow hover:shadow-luxury hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-solara-navy-dark" />
              <span>الاستوديو الحي</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="2xl:hidden bg-solara-obsidian/95 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 text-right max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 rounded-xl bg-white/5 text-slate-200 text-xs font-semibold hover:bg-solara-gold/15 hover:text-solara-gold transition-colors"
                >
                  <span className="text-xs text-solara-gold ml-2 font-mono">[{item.code}]</span>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full py-3 rounded-xl bg-white/5 text-slate-200 text-xs font-bold border border-white/10 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-solara-gold" />
                <span>قراءة المستند التنفيذي الكامل</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToStudio();
                }}
                className="w-full py-3 rounded-xl bg-solara-gold text-solara-navy-dark text-xs font-bold shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>فتح استوديو التخصيص الحي</span>
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
