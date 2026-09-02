import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, Calculator, TrendingUp, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BudgetROASCalculator: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
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
        [ {t('MODULE 07 — UNIT ECONOMICS & PAID ACQUISITION SIMULATOR', 'الوحدة 07 — اقتصاديات الوحدة ومحاكي الاستحواذ المدفوع')} ]
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-gold/15 text-solara-gold-light border border-solara-gold/30 text-xs font-semibold mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t('Interactive Unit Economics & Ad Spend Simulator', 'اقتصاديات الوحدة ومحاكي الإنفاق الإعلاني')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-display">
          {language === 'en' ? (
            <>
              Ad Budget & <span className="gold-gradient-text">ROAS Profitability Simulator</span>
            </>
          ) : (
            <>
              محاكي ميزانيات الإعلانات <span className="gold-gradient-text">والعائد على الإنفاق (ROAS)</span>
            </>
          )}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t(
            'An interactive financial tool testing unit economics across Meta and TikTok paid funnels, computing net contribution margins and projected revenue in real time.',
            'أداة تفاعلية لاختبار الجدوى الاقتصادية لحملات Meta و TikTok Ads لبراند SOLARA وحساب الأرباح الصافية المتوقعة بناءً على مؤشرات الأداء الحقيقية.'
          )}
        </p>
      </div>

      {/* Grid: Controls & Output Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Interactive Controls (Sliders) */}
        <div className={`lg:col-span-6 glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-luxury space-y-6 ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <DollarSign className="w-5 h-5 text-solara-gold" />
            <span>{t('Campaign & Operational Levers', 'متغيرات الحملة الإعلانية والتشغيل')}</span>
          </h3>

          {/* Slider 1: Ad Spend */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t('Monthly Ad Spend', 'ميزانية الإعلانات الشهرية')}</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{adSpend.toLocaleString()} EGP</span>
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
              <span>2,000 EGP</span>
              <span>30,000 EGP</span>
            </div>
          </div>

          {/* Slider 2: AOV */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t('Average Order Value (AOV)', 'متوسط قيمة السلة (AOV)')}</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{aov} EGP</span>
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
              <span>500 EGP ({t('Single Item', 'قطعة واحدة')})</span>
              <span>2,500 EGP ({t('Bundle Gift', 'باقة كاملة')})</span>
            </div>
          </div>

          {/* Slider 3: CPC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t('Cost Per Click (CPC)', 'تكلفة النقرة (CPC)')}</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{cpc.toFixed(2)} EGP</span>
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
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.80 EGP ({t('Viral UGC', 'تفاعل ريلز')})</span>
              <span>4.50 EGP ({t('Sahel Retargeting', 'إعادة استهداف الساحل')})</span>
            </div>
          </div>

          {/* Slider 4: Conversion Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t('Storefront Conversion Rate (CR)', 'معدل التحويل (Conversion Rate)')}</span>
              <span className="font-bold font-mono text-solara-gold text-sm">{conversionRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1.5}
              max={7.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-solara-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1.5%</span>
              <span>7.0%</span>
            </div>
          </div>

          {/* Slider 5: Gross Margin */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">{t('Gross Craft Margin', 'هامش الربح الإجمالي')}</span>
              <span className="font-bold font-mono text-emerald-400 text-sm">{grossMargin}%</span>
            </div>
            <input
              type="range"
              min={40}
              max={75}
              step={1}
              value={grossMargin}
              onChange={(e) => setGrossMargin(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>40% ({t('Standard', 'عادي')})</span>
              <span>75% ({t('With 18k Personalization', 'مع التخصيص بالذهب')})</span>
            </div>
          </div>

        </div>

        {/* Right: Output KPI Cards */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Main Hero Metric: ROAS */}
          <div className="glass-panel p-8 rounded-3xl border border-solara-gold/40 bg-gradient-to-br from-solara-gold/15 to-transparent shadow-luxury text-center space-y-2">
            <span className="text-xs font-mono text-solara-gold uppercase tracking-wider block">
              {t('Projected Ad Return Multiple (ROAS)', 'مضاعف عائد الإنفاق الإعلاني (ROAS)')}
            </span>
            <div className="text-5xl sm:text-6xl font-black gold-gradient-text font-serif">
              {roas}x
            </div>
            <p className="text-xs text-slate-300">
              {t(
                `Every 1 EGP invested returns ${roas} EGP in gross customer orders`,
                `كل 1 ج.م يتم إنفاقه في الإعلانات يولد ${roas} ج.م مبيعات مباشرة`
              )}
            </p>
          </div>

          {/* Secondary KPIs Grid */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 block">{t('Total Gross Orders', 'إجمالي الطلبات المتوقعة')}</span>
              <div className="text-2xl font-bold text-white font-mono">{orders} {t('Orders', 'طلب')}</div>
              <span className="text-[10px] text-slate-500 font-mono">
                {t('Generated from', 'ناتجة عن')} {clicks.toLocaleString()} {t('clicks', 'نقرة')}
              </span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 block">{t('Customer Acquisition Cost (CAC)', 'تكلفة اكتساب العميل (CAC)')}</span>
              <div className="text-2xl font-bold text-solara-gold font-mono">{cac} EGP</div>
              <span className="text-[10px] text-slate-500 font-mono">
                {t('Healthy vs AOV', 'نسبة ممتازة مقارنة بالسلة')}
              </span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 block">{t('Total Projected Revenue', 'إجمالي المبيعات الإجمالية')}</span>
              <div className="text-2xl font-bold text-white font-mono">{totalRevenue.toLocaleString()} EGP</div>
              <span className="text-[10px] text-emerald-400 font-mono">
                {t('Gross Sales Value', 'القيمة البيعية الكلية')}
              </span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 space-y-1">
              <span className="text-[11px] text-emerald-300 block">{t('Net Profit Contribution', 'صافي الأرباح بعد الإعلانات')}</span>
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                {netProfit.toLocaleString()} EGP
              </div>
              <span className="text-[10px] text-emerald-500/80 font-mono">
                {t('After Ad Spend Deduction', 'بعد خصم ميزانية الإعلانات')}
              </span>
            </div>

          </div>

          <div className="text-center text-xs text-slate-400 pt-2 font-mono">
            {t(
              '✦ Simulation based on live validated benchmark telemetry from the ITI Capstone Defense.',
              '✦ المحاكاة مبنية على أرقام ومؤشرات حقيقية معتمدة في دراسة حالة التخرج لمعهد تكنولوجيا المعلومات.'
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
