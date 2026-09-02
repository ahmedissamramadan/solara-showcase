import React, { useState } from 'react';
import { Sparkles, Wand2, Video, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AICreativeLab: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeMediaTab, setActiveMediaTab] = useState<'visuals' | 'videos'>('visuals');
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  const videoShowcases = [
    {
      titleEn: "Cinematic Launch & Teaser Video",
      titleAr: "فيديو التشويق والإطلاق الرسمي (Teaser Video)",
      platform: "Instagram Reels / TikTok",
      duration: "15s",
      hookEn: "Subtle rhythmic Mediterranean waves meeting the golden sands as the SOLARA tote emerges with laser monogramming 🌊",
      hookAr: "صوت أمواج الساحل الهادئة مع لحظة ظهور حقيبة SOLARA من رمال الشاطئ الذهبية 🌊",
      visualDescEn: "Cinematic drone dolly transition from turquoise shoreline to a macroscopic focus on the gleaming 18k gold nameplate.",
      visualDescAr: "تصوير سينمائي يبدأ بلقطة مقربة للأمواج ثم انتقال سلس لظهور تفاصيل حفر الاسم بالليزر على الحقيبة.",
      statsEn: "Projected Reach: 85,000+ Views | 9.2% Save Ratio",
      statsAr: "تفاعل متوقع: 85,000+ مشاهدة | معدل حفظ 9.2%"
    },
    {
      titleEn: "AI Synthetic UGC Reaction & Unboxing",
      titleAr: "فيديو الـ UGC بالذكاء الاصطناعي (AI UGC Reaction)",
      platform: "TikTok Ads / Meta Ads",
      duration: "20s",
      hookEn: "A friend opens her Solara rigid gift box, gasped in delight as her name shines in 18k gold leaf! 🥺✨",
      hookAr: "صديقة تفتح صندوق SOLARA وتتفاجأ بنقش اسمها بطلاء ذهبي 18k! 🥺✨",
      visualDescEn: "Dynamic vertical selfie angle with tactile ASMR unboxing, enthusiastic voiceover, and an explicit direct checkout CTA.",
      visualDescAr: "تصوير ديناميكي بأسلوب السيلفي والـ Unboxing السريع مع تعليق صوتي حماسي وCall-To-Action مباشر للشراء.",
      statsEn: "Target Conversion (CR): 4.2% | Ultra-low CPM",
      statsAr: "معدل تحويل متوقع (CR): 4.2% | تكلفة نقرة منخفضة"
    },
    {
      titleEn: "Marine Durability & Water-Resilience Proof",
      titleAr: "فيديو اختبار المتانة ومقاومة الماء (Durability Proof)",
      platform: "Facebook Video / Instagram Feed",
      duration: "18s",
      hookEn: "Can handmade Egyptian palm wicker survive sea spray and intense sun? Watch this live experiment! ☀️",
      hookAr: "هل الخوص اليدوي بيستحمل مية البحر والشمس؟ شوفي التجربة العملية! ☀️",
      visualDescEn: "Pouring saltwater directly onto the treated wicker exterior, revealing bone-dry interior linen lining and reinforced strap rivets.",
      visualDescAr: "اختبار صب الماء على خوص النخيل المعالج وإظهار جفاف البطانة الداخلية ومتانة خياطة حبل الكتف.",
      statsEn: "-70% Cart Abandonment | Undisputed Trust",
      statsAr: "إزالة تردد العملاء بنسبة 70% وزيادة الثقة في جودة المنتج"
    }
  ];

  return (
    <section id="ai-lab" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ {t('MODULE 05 — GENERATIVE AI CREATIVE ENGINE & UGC WORKFLOW', 'الوحدة 05 — معمل الذكاء الاصطناعي التوليدي وسير عمل الـ UGC')} ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold mb-4">
          <Wand2 className="w-3.5 h-3.5" />
          <span>{t('Generative AI Creative Engine', 'معمل الذكاء الاصطناعي التوليدي')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              AI Creative Lab & <span className="gold-gradient-text">Visual Asset Engineering</span>
            </>
          ) : (
            <>
              معمل الذكاء الاصطناعي <span className="gold-gradient-text">وهندسة المحتوى البصري</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'How SOLARA eliminated 80%+ of legacy photoshoot overhead using state-of-the-art generative pipelines, elevating raw craft photos into global luxury ad creatives.',
            'كيف استطاعت SOLARA توفير أكثر من 80% من تكاليف جلسات التصوير الباهظة باستخدام أدوات الـ AI التوليدي، مع رفع الجودة البصرية لمستوى الإعلانات العالمية.'
          )}
        </p>
      </div>

      {/* Media Type Tabs */}
      <div className="flex justify-center gap-3 mb-14">
        <button
          onClick={() => setActiveMediaTab('visuals')}
          className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2.5 ${
            activeMediaTab === 'visuals'
              ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-105 font-bold'
              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{t('Visuals: Before & After Slider', 'مقارنة الصور قبل وبعد (Before & After)')}</span>
        </button>

        <button
          onClick={() => setActiveMediaTab('videos')}
          className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all border flex items-center gap-2.5 ${
            activeMediaTab === 'videos'
              ? 'bg-gradient-to-r from-solara-gold-light via-solara-gold to-solara-gold-dark text-solara-navy-dark border-solara-gold shadow-gold-glow scale-105 font-bold'
              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>{t('AI UGC Video Scripts', 'فيديوهات الـ UGC والـ Teasing')}</span>
        </button>
      </div>

      {/* Tab 1: Interactive Image Comparison Slider */}
      {activeMediaTab === 'visuals' && (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-solara-gold/30 shadow-luxury space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h3 className="text-xl font-bold text-white font-display">
                {t('Interactive AI Transformer (Before / After)', 'سلايدر المقارنة التفاعلي (Interactive AI Transformer)')}
              </h3>
              <p className="text-xs text-slate-400">
                {t(
                  'Drag the center divider to inspect raw craft capture vs final commercial output',
                  'اسحب الشريط في المنتصف للمقارنة بين اللقطة الخام والصورة التجارية النهائية المطورة'
                )}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                {t('Raw Phone Capture', 'اللقطة الأصلية بكاميرا هاتف')}
              </span>
              <span className="flex items-center gap-1.5 text-solara-gold font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-solara-gold" />
                {t('2K Generative Commercial', 'توليد إعلاني 2K بجودة عالمية')}
              </span>
            </div>
          </div>

          {/* Interactive Comparison Surface */}
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none">
            
            {/* Background Image: AI Luxury Output (Right Side) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/90 via-blue-950/90 to-solara-navy-dark flex items-center justify-center p-8 text-center">
              <div className="space-y-3 max-w-md">
                <span className="text-xs bg-solara-gold text-solara-navy-dark font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  AI Commercial Masterpiece (2K)
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif">SOLARA Signature Coastal Campaign</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {t(
                    'Precision synthetic blending of the tote into a luxury Mediterranean resort sunset with golden coastal lighting.',
                    'دمج دقيق للحقيبة في بيئة منتجع ساحلي فاخر مع إضاءة شمس الغروب الذهبية ونعومة رمال الساحل المتوسطي.'
                  )}
                </p>
                <div className="pt-2 flex justify-center gap-2 text-[11px] text-solara-gold-light font-mono">
                  <span className="bg-black/50 px-3 py-1 rounded-full border border-solara-gold/20">Prompt: Coastal Luxury Yacht</span>
                  <span className="bg-black/50 px-3 py-1 rounded-full border border-solara-gold/20">Res: 2048 x 2048</span>
                </div>
              </div>
            </div>

            {/* Foreground Clipped Image: Raw Shoot (Left Side) */}
            <div
              className="absolute inset-0 bg-gradient-to-tl from-stone-900 via-slate-900 to-slate-950 flex items-center justify-center p-8 text-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="space-y-3 max-w-md">
                <span className="text-xs bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Raw Craft Capture (Before)
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-slate-300 font-serif">
                  {t('Raw Workshop Studio Table', 'اللقطة الخام على طاولة استوديو')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t(
                    'Direct baseline photography on neutral craft board, utilized as the structural mask for AI inpainting.',
                    'تصوير مباشر بدون ديكورات أو إضاءة شاطئية أو عناصر مساعدة، تم استخدامه كقناع أساسي للذكاء الاصطناعي.'
                  )}
                </p>
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-solara-gold cursor-ew-resize flex items-center justify-center shadow-gold-glow"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-solara-gold text-solara-navy-dark shadow-2xl flex items-center justify-center font-bold text-xs">
                ⇄
              </div>
            </div>

            {/* Hidden Range Input for Touch & Drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>

          <div className="text-center text-xs text-slate-400">
            {t(
              '💡 Over 40+ synthetic photographic assets synthesized for bags, fedoras, and clutches in the digital brand library.',
              '💡 تم توليد أكثر من 40 تكويناً بصرياً لخطوط حقائب الشاطئ وقبعات الفيدورا وحفظها في مجلد أصول البراند.'
            )}
          </div>

        </div>
      )}

      {/* Tab 2: AI UGC Videos & Reels Breakdown */}
      {activeMediaTab === 'videos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Video Showcase Player Simulation */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-solara-gold/30 shadow-luxury space-y-6">
            
            {/* 9:16 Aspect Video Simulator */}
            <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-solara-navy-dark to-black border-2 border-solara-gold/40 flex flex-col justify-between p-5">
              
              {/* Top Header inside Video */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] bg-red-600/80 text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  UGC Ad Format
                </span>
                <span className="text-[10px] text-white/80 font-mono">0:15 / 0:15</span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="w-16 h-16 rounded-full bg-solara-gold/30 border border-solara-gold text-solara-gold-light mx-auto flex items-center justify-center backdrop-blur-md shadow-gold-glow animate-pulse">
                <Play className="w-7 h-7 fill-solara-gold translate-x-0.5" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className={`bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-1.5 z-10 ${
                isRTL ? 'text-right' : 'text-left'
              }`}>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-solara-gold" />
                  @solara.eg
                </div>
                <p className="text-[11px] text-slate-200 leading-tight">
                  {language === 'en' ? videoShowcases[activeVideoIndex].hookEn : videoShowcases[activeVideoIndex].hookAr}
                </p>
                <div className="text-[10px] text-solara-gold font-semibold pt-1 font-mono">
                  🎵 Original Sound — Summer Vibes Sahel 2026
                </div>
              </div>

            </div>

          </div>

          {/* Right: Video Scripts & Storyboard Breakdown */}
          <div className={`lg:col-span-6 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              {t('Approved Campaign Script Architecture', 'سيناريوهات المحتوى الإعلاني المعتمدة')}
            </h3>
            
            {videoShowcases.map((vid, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideoIndex(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeVideoIndex === idx
                    ? 'bg-solara-gold/15 border-solara-gold text-white shadow-md scale-102'
                    : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-solara-gold font-mono">{vid.platform}</span>
                  <span className="text-[11px] bg-black/40 px-2 py-0.5 rounded text-slate-300 font-mono">{vid.duration}</span>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {language === 'en' ? vid.titleEn : vid.titleAr}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {language === 'en' ? vid.visualDescEn : vid.visualDescAr}
                </p>
                
                <div className="text-[11px] text-emerald-400 font-semibold pt-2 border-t border-white/10 font-mono">
                  🎯 {language === 'en' ? vid.statsEn : vid.statsAr}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
};
