import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, Calculator } from 'lucide-react';

export const BudgetROASCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(6000); // 6,000 EGP
  const [aov, setAov] = useState<number>(1150); // 1,150 EGP average basket
  const [cpc, setCpc] = useState<number>(1.8); // 1.8 EGP per click
  const [conversionRate, setConversionRate] = useState<number>(3.5); // 3.5%
  const [grossMargin, setGrossMargin] = useState<number>(60); // 60% margin

  // Calculations
  const clicks = Math.round(adSpend / cpc);
  const orders = Math.round(clicks * (conversionRate / 100));
  const totalRevenue = orders * aov;
  const roas = totalRevenue > 0 ? (totalRevenue / adSpend).toFixed(2) : '0';
  const cac = orders > 0 ? Math.round(adSpend / orders) : 0;
  const grossProfit = totalRevenue * (grossMargin / 100);
  const netProfit = Math.round(grossProfit - adSpend);

  return (
    <section id="calculator" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-noise">
      
      {/* Decorative Stamp */}
      <div className="text-[10px] font-cinzel tracking-[0.3em] text-solara-gold/40 uppercase mb-4 text-center">
        [ MODULE 06 — UNIT ECONOMICS & PAID ACQUISITION SIMULATOR ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Unit Economics & Ad Spend Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          محاكي ميزانيات الإعلانات <span className="gold-gradient-text">والعائد على الإنفاق (ROAS)</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          أداة تفاعلية لاختبار الجدوى الاقتصادية لحملات Meta و TikTok Ads لبراند SOLARA وحساب الأرباح الصافية المتوقعة بناءً على مؤشرات الأداء الحقيقية.
        </p>
      </div>

      {/* Grid: Controls & Output Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Interactive Controls (Sliders) */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-luxury space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <DollarSign className="w-5 h-5 text-solara-gold" />
            <span>متغيرات الحملة الإعلانية والتشغيل</span>
          </h3>

          {/* Slider 1: Ad Spend */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">ميزانية الإعلانات الشهرية (Ad Spend)</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{adSpend.toLocaleString()} ج.م</span>
            </div>
            <input
              type="range"
              min={2000}
              max={30000}
              step={500}
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-solara-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>2,000 ج.م</span>
              <span>30,000 ج.م</span>
            </div>
          </div>

          {/* Slider 2: AOV */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">متوسط قيمة السلة (AOV - Average Basket)</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{aov} ج.م</span>
            </div>
            <input
              type="range"
              min={500}
              max={2500}
              step={50}
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full accent-solara-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>500 ج.م (قطعة واحدة)</span>
              <span>2,500 ج.م (باقة كاملة)</span>
            </div>
          </div>

          {/* Slider 3: CPC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">تكلفة النقرة (CPC - Cost Per Click)</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{cpc.toFixed(2)} ج.م</span>
            </div>
            <input
              type="range"
              min={0.8}
              max={4.5}
              step={0.1}
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className="w-full accent-solara-gold cursor-pointer"
            />
          </div>

          {/* Slider 4: Conversion Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">معدل التحويل إلى أوردر (Conversion Rate)</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{conversionRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={7.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-solara-gold cursor-pointer"
            />
          </div>

          {/* Slider 5: Gross Margin */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">هامش الربح الإجمالي للمنتجات (Gross Margin)</span>
              <span className="font-bold font-mono text-emerald-400 text-sm">{grossMargin}%</span>
            </div>
            <input
              type="range"
              min={40}
              max={75}
              step={5}
              value={grossMargin}
              onChange={(e) => setGrossMargin(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>

        </div>

        {/* Right: Real-time Output Cards */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Top Big Result: ROAS & Net Profit */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/15 to-solara-navy-dark shadow-luxury space-y-6 glow-ambient">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">عائد الإنفاق الإعلاني</span>
                <div className="text-4xl sm:text-5xl font-extrabold gold-gradient-text font-serif">
                  {roas}x
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  أداء مربح جداً للبراند
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">صافي الربح التقديري</span>
                <div className={`text-3xl sm:text-4xl font-extrabold font-serif ${netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {netProfit.toLocaleString()} ج.م
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">بعد خصم الإعلانات وتكلفة التصنيع</span>
              </div>
            </div>

            {/* Sub Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center text-xs">
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">إجمالي الإيرادات</span>
                <span className="font-bold text-white font-mono">{totalRevenue.toLocaleString()} ج.م</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">عدد الأوردرات</span>
                <span className="font-bold text-solara-gold font-mono">{orders} طلب</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-2xl border border-white/5">
                <span className="text-slate-500 block text-[10px] mb-0.5">تكلفة الاستحواذ (CAC)</span>
                <span className="font-bold text-blue-300 font-mono">{cac} ج.م/طلب</span>
              </div>
            </div>

          </div>

          {/* Strategy Tip Box */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 text-xs text-slate-300 leading-relaxed space-y-1.5">
            <span className="text-solara-gold font-bold block text-xs">💡 التوصية الاستراتيجية لتحقيق أعلى عائد:</span>
            <p>
              التركيز على بيع باقات "Tote + Fedora Hat" مع حفر الاسم مجاناً يرفع متوسط قيمة الطلب (AOV) من 850 ج.م إلى 1,350 ج.م، مما يخفض تكلفة الاستحواذ الإعلانية كنسبة من الإيراد ويضاعف الـ ROAS.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
