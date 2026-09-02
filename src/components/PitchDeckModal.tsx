import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Sparkles, Compass, Users, Layers, TrendingUp, Sun, FileText, CheckCircle2,
  MessageCircle, Mail, Phone, ExternalLink, GraduationCap
} from 'lucide-react';
import { foundingTeamMembers } from '../data/teamData';
import { useLanguage } from '../context/LanguageContext';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const { language, isRTL, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  const slides = [
    {
      id: 'cover',
      tag: '01 / 08 — THE VISION',
      titleEn: 'SOLARA: The Anatomy of a Modern Identity Brand',
      titleAr: 'SOLARA: تشريح علامة هوية صيفية مصرية معاصرة',
      subtitleEn: 'From an empty Shopify storefront to an authoritative benchmark for digital venture builders',
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
              {t(
                'Information Technology Institute (ITI) Capstone Defense — Digital Marketing Track',
                'مشروع تخرج الدفعة المكثفة لمعهد تكنولوجيا المعلومات (ITI) — مسار التسويق الرقمي'
              )}
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
      speakerNoteEn: 'Begin the presentation emphasizing that SOLARA is not merely a bag label, but a psychological shift from generic craft to 18k bespoke identity.',
      speakerNoteAr: 'ابدأ العرض بتوضيح فكرة أن SOLARA ليست مجرد براند شنط، بل هي تحول استراتيجي من منتج يدوي رخيص إلى هوية شخصية مطلية بذهب 18k.'
    },
    {
      id: 'problem-gap',
      tag: '02 / 08 — MARKET GAP',
      titleEn: 'Market Void: The Commodity Craft Paradox',
      titleAr: 'فجوة السوق: معضلة السلع اليدوية التقليدية في مصر',
      subtitleEn: 'Why standard Egyptian handmade shops face margin depletion and ad fatigue',
      subtitleAr: 'لماذا يفشل أغلب بائعي الهاند ميد في كسب هوامش ربح مجزية؟',
      content: (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-red-400 font-bold font-mono">
                {t('Red Ocean Commodity Trap', 'المنافسة التقليدية الحمراء')}
              </span>
              <span className="text-red-400 font-bold text-sm">❌ {t('Price Trap', 'الفخ السعري')}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <li>• {t('Selling generic unbranded wicker at 300–450 EGP with margins eaten by Meta ad auctions.', 'بيع شنط خوص غير مخصصة بأسعار 300–450 EGP بهوامش لا تغطي تكاليف الإعلانات.')}</li>
              <li>• {t('Weak unlined construction decaying rapidly in marine saltwater & sand.', 'ضعف متانة البطانات الداخلية وتلف اليد عند التعرض للرمال ومياه البحر.')}</li>
              <li>• {t('Total absence of scarcity & exorbitant legacy photoshoot overhead.', 'انعدام الهوية والشعور بالندرة، واعتماد جلسات تصوير تقليدية باهظة التكلفة.')}</li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-bold font-mono">
                {t('SOLARA Blue Ocean Moat', 'استراتيجية المحيط الأزرق لـ SOLARA')}
              </span>
              <span className="text-emerald-400 font-bold text-sm">✓ {t('Accessible Luxury', 'الفئة الفاخرة المتاحة')}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <li>• {t('18k brushed gold monogramming & laser incision priced at 1,650–2,800 EGP.', 'تخصيص كامل بالاسم عبر الحفر بالليزر واللوحات الذهبية 18k بسعر 1,650–2,800 EGP.')}</li>
              <li>• {t('Water-repellent marine canvas lining with double-riveted bridal leather base.', 'بطانات كانفاس عازلة وقواعد جلدية مقواة بمسامير مزدوجة ضد رمال الشاطئ.')}</li>
              <li>• {t('Generative AI workflow slashing photoshoot cost by 80% with 2K luxury assets.', 'معمل ذكاء اصطناعي توليدي يوفر 80% من تكاليف التصوير وينتج مشاهد 2K مذهلة.')}</li>
            </ul>
          </div>
        </div>
      ),
      speakerNoteEn: 'Highlight the Blue Ocean positioning that lifted the piece into the accessible luxury ("Masstige") echelon.',
      speakerNoteAr: 'ركز على مصفوفة المحيط الأزرق وكيف نقلنا المنتج من قطاع السلع الرخيصة إلى قطاع الرفاهية المتاحة (Masstige).'
    },
    {
      id: 'personas',
      tag: '03 / 08 — TARGET AUDIENCE',
      titleEn: 'Target Segmentation & Buyer Personas',
      titleAr: 'الجمهور المستهدف وشخصيات المشترين (STP)',
      subtitleEn: 'Three archetypes driving 85% of brand acquisition velocity',
      subtitleAr: 'ثلاث شخصيات رئيسية تحرك 85% من حجم مبيعات العلامة',
      content: (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 01</span>
            <h4 className="text-sm font-bold text-white">
              {t('Layla (Sahel Premium Regular)', 'ليلى (مسافرة الساحل الفاخر)')}
            </h4>
            <p className="text-xs text-slate-300">
              {t('Seeks effortless coastal elegance in Hacienda & Marassi with a bag bearing her personal initials.', 'تبحث عن التميز الاجتماعي في هاسيندا ومراسي وشنطة تحمل اسمها للتصوير الراقي.')}
            </p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 2,800 EGP</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 02</span>
            <h4 className="text-sm font-bold text-white">
              {t('Nour (Digital Trendsetter)', 'نور (عاشقة التريند والموضة)')}
            </h4>
            <p className="text-xs text-slate-300">
              {t('Craves viral evening clutches and pearl fedoras for TikTok & Instagram sharing in Gouna.', 'تبحث عن كلاتشات السهرات وقبعات اللؤلؤ لمشاركتها على تيك توك وإنستجرام في الجونة.')}
            </p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 1,950 EGP</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">PERSONA 03</span>
            <h4 className="text-sm font-bold text-white">
              {t('Farida (Sentimental Keepsake Gifter)', 'فريدة (الإهداء العاطفي)')}
            </h4>
            <p className="text-xs text-slate-300">
              {t('Desires an emotional heirloom gift for her sister or best friend with verified rigid box unboxing.', 'تبحث عن هدية لا تُنسى لأختها أو صديقتها باسمها مع تجربة فتح صندوق ملكية مبهرة.')}
            </p>
            <div className="text-[10px] text-solara-gold font-mono pt-2">AOV: 2,400 EGP</div>
          </div>
        </div>
      ),
      speakerNoteEn: 'The sentimental gifting archetype achieves peak conversion rates because bespoke monogramming completely removes purchase hesitation.',
      speakerNoteAr: 'شخصية "صاحب الهدية العاطفية" تحقق أعلى معدل تحويل لأن القيمة المضافة للتخصيص الاسمي تزيل التردد في الشراء تماماً.'
    },
    {
      id: 'product-unboxing',
      tag: '04 / 08 — PRODUCT & UNBOXING',
      titleEn: '4-Layer Luxury Unboxing Architecture',
      titleAr: 'هندسة المنتج وتجربة فتح الصندوق (Unboxing Flow)',
      subtitleEn: 'Engineering parcel delivery into an organic viral UGC loop',
      subtitleAr: 'تحويل لحظة الاستلام إلى أداة تسويقية ذاتية الانتشار (Viral Loop)',
      content: (
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 01</span>
            <h5 className="text-xs font-bold text-white">
              {t('Rigid Navy Box', 'الصندوق الكحلي الصلب')}
            </h5>
            <p className="text-[11px] text-slate-300">
              {t('Heavyweight keepsake box sealed with a gold-foil wax badge.', 'صندوق هدايا فاخر بلون كحلي وشعار ذهبي محفور.')}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 02</span>
            <h5 className="text-xs font-bold text-white">
              {t('Silk Veil & Stamp', 'الورق الحريري والختم')}
            </h5>
            <p className="text-[11px] text-slate-300">
              {t('Monogrammed tissue wrap generating curiosity.', 'تغليف ناعم مع استيكر الشمع الذهبي الملكي.')}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 03</span>
            <h5 className="text-xs font-bold text-white">
              {t('Cotton Dust Bag', 'جراب الـ Dust Bag')}
            </h5>
            <p className="text-[11px] text-slate-300">
              {t('Organic breathable pouch protecting natural wicker.', 'جراب قماشي قطني لحماية الشنطة طوال الصيف.')}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-solara-gold">Layer 04</span>
            <h5 className="text-xs font-bold text-white">
              {t('Inked Parchment Card', 'كارت الشكر الموقع')}
            </h5>
            <p className="text-[11px] text-slate-300">
              {t('Hand-signed calligraphy card with recipient name.', 'بطاقة موقعة يدوياً من الحرفي باسم المشترية.')}
            </p>
          </div>
        </div>
      ),
      speakerNoteEn: 'Deliberately engineered unboxing prompts 60%+ of customers to post spontaneous Instagram stories without solicitation.',
      speakerNoteAr: 'تجربة الـ Unboxing المصممة بعناية تدفع 60% من المشترين لتصوير فيديو Story ومشاركته على إنستجرام دون أي طلب مسبق.'
    },
    {
      id: 'ai-creative',
      tag: '05 / 08 — GENERATIVE AI LAB',
      titleEn: 'Generative AI Lab & Visual Asset Production',
      titleAr: 'معمل الذكاء الاصطناعي التوليدي وهندسة المحتوى',
      subtitleEn: 'Generating 40+ 2K commercial assets while reducing 80% photoshoot costs',
      subtitleAr: 'إنتاج 40+ أصلاً إعلانياً فائق الدقة وتوفير 80% من ميزانيات التصوير',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          <div className="bg-solara-gold/10 p-6 rounded-2xl border border-solara-gold/30 text-center space-y-2">
            <div className="text-3xl font-extrabold gold-gradient-text font-mono">80%</div>
            <div className="text-xs font-bold text-white">
              {t('Photoshoot Cost Savings', 'توفير تكاليف جلسات التصوير')}
            </div>
            <p className="text-[11px] text-slate-300">
              {t('Replacing yachts and rental villas with synthetic 2K photorealistic environments.', 'استبدال مواقع التصوير واليخوت برندر توليدي فائق الواقعية بدقة 2K.')}
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-2">
            <div className="text-3xl font-extrabold text-white font-mono">10x</div>
            <div className="text-xs font-bold text-white">
              {t('Campaign Velocity', 'سرعة إطلاق الحملات')}
            </div>
            <p className="text-[11px] text-slate-300">
              {t('Generating 12 creative angles in under 48 hours rather than multi-week production.', 'توليد واختبار 12 زاوية إعلانية في أقل من 48 ساعة بدلاً من أسابيع.')}
            </p>
          </div>
          <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30 text-center space-y-2">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">2K Res</div>
            <div className="text-xs font-bold text-white">
              {t('Global Luxury Fidelity', 'جودة طباعة وإعلانات عالمية')}
            </div>
            <p className="text-[11px] text-slate-300">
              {t('Microscopic wicker texture fidelity without generative artifacts.', 'تفاصيل دقيقة لخيوط الخوص واللمعان الذهبي بدون تشوهات بصرية.')}
            </p>
          </div>
        </div>
      ),
      speakerNoteEn: 'Generative AI was a strategic force multiplier enabling rapid creative iteration at zero marginal shoot cost.',
      speakerNoteAr: 'الـ Generative AI كان عنصراً استراتيجياً مكن الفريق من مضاعفة الإنتاجية واختبار أفكار إعلانية معقدة بتكلفة شبه منعدمة.'
    },
    {
      id: 'destinations',
      tag: '06 / 08 — DESTINATION STRATEGY',
      titleEn: 'Coastal Micro-Market Segmentation',
      titleAr: 'استراتيجية الوجهات الساحلية (الساحل، الجونة، دهب)',
      subtitleEn: 'Calibrating product lines and price points across distinct resort vibes',
      subtitleAr: 'تكييف خطوط المنتجات والتسعير وفق الطبيعة الجغرافية لكل وجهة',
      content: (
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">NORTH COAST (SAHEL)</span>
            <h5 className="text-sm font-bold text-white">
              {t('Ultra-Chic Beach Clubs', 'الفخامة الصيفية المطلقة')}
            </h5>
            <p className="text-xs text-slate-300">
              {t('18k gold leaf plates with waterproof canvas for yachts (AOV: 2,800 EGP).', 'لوحات نحاس 18k وبطانات مقاومة للماء لحفلات الشواطئ واليخوت (AOV: 2,800 EGP).')}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">EL GOUNA</span>
            <h5 className="text-sm font-bold text-white">
              {t('Marina Promenade Nights', 'حياة المارينا والسهرات')}
            </h5>
            <p className="text-xs text-slate-300">
              {t('Micro wicker evening clutches and detachable freshwater pearls (AOV: 2,200 EGP).', 'كلاتشات خوص دقيقة وسلاسل لؤلؤ طبيعي قابلة للفك لحياة المارينا (AOV: 2,200 EGP).')}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] text-solara-gold font-mono font-bold">DAHAB & SINAI</span>
            <h5 className="text-sm font-bold text-white">
              {t('Organic Bohemian Simplicity', 'البساطة العضوية الحرة')}
            </h5>
            <p className="text-xs text-slate-300">
              {t('100% untreated raw palm with earth-tone embroidery for nature lovers (AOV: 1,500 EGP).', 'خوص نخيل 100% طبيعي وتطريزات ألوان ترابية لعشاق الطبيعة (AOV: 1,500 EGP).')}
            </p>
          </div>
        </div>
      ),
      speakerNoteEn: 'Micro-market destination messaging increases geofenced ad CTR by 35%+ across coastal campaigns.',
      speakerNoteAr: 'هذا التخصيص الجغرافي يرفع نسبة التحويل في الإعلانات المستهدفة جغرافياً بنسبة 35% على الأقل.'
    },
    {
      id: 'financials',
      tag: '07 / 08 — FINANCIALS & ROAS',
      titleEn: 'Unit Economics & Financial Engine',
      titleAr: 'الوحدة الاقتصادية ومحاكي الأرباح والـ ROAS',
      subtitleEn: '68% gross margin backing a scalable 4.8x target return on ad spend',
      subtitleAr: 'هامش ربح إجمالي 68% ومعدل عائد إعلاني متوقع 4.8x',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1 text-center">
            <span className="text-[10px] text-slate-400 font-mono block">
              {t('Suggested Retail (AOV)', 'سعر البيع المقترح')}
            </span>
            <div className="text-xl font-bold text-white font-mono">1,850 EGP</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1 text-center">
            <span className="text-[10px] text-slate-400 font-mono block">
              {t('COGS & Personalization', 'تكلفة المنتج الإجمالية')}
            </span>
            <div className="text-xl font-bold text-slate-300 font-mono">590 EGP</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-solara-gold/40 space-y-1 text-center bg-solara-gold/10">
            <span className="text-[10px] text-solara-gold font-mono block font-bold">
              {t('Gross Contribution', 'هامش الربح الإجمالي')}
            </span>
            <div className="text-xl font-bold text-solara-gold font-mono">68.1%</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/40 space-y-1 text-center bg-emerald-500/10">
            <span className="text-[10px] text-emerald-400 font-mono block font-bold">
              {t('Target ROAS Multiple', 'العائد الإعلاني المستهدف')}
            </span>
            <div className="text-xl font-bold text-emerald-400 font-mono">4.8x ROAS</div>
          </div>
        </div>
      ),
      speakerNoteEn: 'High AOV buffers customer acquisition costs, safeguarding profitability even as ad CPMs fluctuate.',
      speakerNoteAr: 'بفضل ارتفاع متوسط قيمة الطلب (AOV)، يتمتع البراند بمرونة عالية في تكاليف الاستحواذ الإعلاني (CAC).'
    },
    {
      id: 'team-legacy',
      tag: '08 / 08 — THE FOUNDING TEAM',
      titleEn: 'Team "The Five Adventurers" & Collective Synergy',
      titleAr: 'فريق "المغامرون الخمسة" — صناع القصة',
      subtitleEn: 'An equal partnership transforming an empty store into an enduring ITI benchmark',
      subtitleAr: 'الشراكة المتكاملة التي حولت الفكرة من الصفر إلى مرجع رائد',
      content: (
        <div className={`space-y-4 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {foundingTeamMembers.map((m) => (
              <div key={m.id} className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-center space-y-2">
                <div className="w-9 h-9 rounded-full bg-solara-gold/20 text-solara-gold text-xs font-bold flex items-center justify-center mx-auto border border-solara-gold/40">
                  {language === 'en' ? m.nameEn[0] : m.nameAr[0]}
                </div>
                <div className="text-xs font-bold text-white truncate">
                  {language === 'en' ? m.nameEn.split(' ')[0] : m.nameAr.split(' ')[0]}
                </div>
                <div className="text-[9px] text-solara-gold leading-tight">
                  {language === 'en' ? m.badgeEn : m.badgeAr}
                </div>
                {/* Contact Links */}
                <div className="flex items-center justify-center gap-1.5 pt-1 border-t border-white/10">
                  <a
                    href={m.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-3 h-3" />
                  </a>
                  <a
                    href={`mailto:${m.email}`}
                    className="p-1 rounded-md bg-solara-gold/10 text-solara-gold hover:bg-solara-gold/20"
                    title="Email"
                  >
                    <Mail className="w-3 h-3" />
                  </a>
                  <a
                    href={`tel:${m.phone}`}
                    className="p-1 rounded-md bg-white/5 text-slate-300 hover:bg-white/10"
                    title={m.phone}
                  >
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-solara-gold/10 border border-solara-gold/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-solara-gold shrink-0" />
              <span className="text-slate-200">
                {t(
                  'Information Technology Institute (ITI) — Ministry of Communications & IT (MCIT Egypt)',
                  'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات وتكنولوجيا المعلومات'
                )}
              </span>
            </div>
            <span className="text-solara-gold font-mono font-bold">3,885+ Messages Logged</span>
          </div>
        </div>
      ),
      speakerNoteEn: 'Conclude acknowledging the equal contribution of all 5 members: Khaled, Mohamed, Youssef, Ahmed, and Adham.',
      speakerNoteAr: 'اختتم العرض بتقديم التحية لروح الفريق المتكامل والجهد المتكافئ بين كافة الأعضاء الخمسة دون أي استئثار.'
    }
  ];

  if (!isOpen) return null;

  const current = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-panel w-full max-w-5xl h-[92vh] rounded-3xl border border-solara-gold/40 shadow-luxury flex flex-col overflow-hidden"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:px-8 border-b border-white/10 bg-solara-navy-dark/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-solara-gold animate-pulse" />
            <span className="text-xs font-mono font-bold text-solara-gold tracking-widest uppercase">
              {current.tag}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                showNotes
                  ? 'bg-solara-gold text-solara-navy-dark border-solara-gold font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              {t('Speaker Notes', 'ملاحظات المتحدث')}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas Body */}
        <div className="flex-1 p-6 sm:p-12 overflow-y-auto flex flex-col justify-between relative bg-gradient-to-b from-solara-navy-glass via-solara-navy-dark to-solara-obsidian">
          
          <div className={`space-y-2 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {language === 'en' ? current.titleEn : current.titleAr}
            </h3>
            <p className="text-xs sm:text-sm text-solara-gold font-serif">
              {language === 'en' ? current.subtitleEn : current.subtitleAr}
            </p>
          </div>

          {/* Dynamic Content Body */}
          <div className="flex-1 flex flex-col justify-center">
            {current.content}
          </div>

          {/* Speaker Notes Drawer */}
          {showNotes && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <span className="font-bold block mb-1 font-mono uppercase text-[10px]">
                {t('SPEAKER TALKING POINT:', 'ملاحظة إرشادية للمتحدث:')}
              </span>
              <p>{language === 'en' ? current.speakerNoteEn : current.speakerNoteAr}</p>
            </motion.div>
          )}

        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="flex items-center justify-between p-4 sm:px-8 border-t border-white/10 bg-solara-navy-dark/90">
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-8 bg-solara-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-solara-gold text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>

            <span className="text-xs font-mono text-slate-400">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-xl bg-solara-gold text-solara-navy-dark hover:bg-solara-gold-light disabled:opacity-30 disabled:pointer-events-none font-bold transition-all shadow-gold-glow"
            >
              {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
