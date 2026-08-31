export interface BMCBlock {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  iconName: string;
  points: string[];
  keyInsightAr: string;
  borderColor: string;
}

export const bmcBlocks: BMCBlock[] = [
  {
    id: 'customer-segments',
    number: '01',
    titleAr: 'شرائح العملاء',
    titleEn: 'Customer Segments',
    iconName: 'Users',
    points: [
      'سيدات ورائدات أعمال الساحل الشمالي والجونة (الفئة A/A+)',
      'عشاق الإهداء العاطفي (Thoughtful Givers) للعرائس والمناسبات',
      'صناع المحتوى والمؤثرات الباحثات عن قطع فريدة غير مكررة',
      'عشاق البساطة البوهيمية المستدامة في دهب وجنوب سيناء'
    ],
    keyInsightAr: 'التركيز على الرغبة في التميز البصري والملكية الشخصية بدلاً من الشراء الاستهلاكي.',
    borderColor: 'border-amber-500/40'
  },
  {
    id: 'value-propositions',
    number: '02',
    titleAr: 'القيمة المقدمة (UVP)',
    titleEn: 'Value Propositions',
    iconName: 'Sparkles',
    points: [
      'البراند المصري الوحيد الجامع بين الحرفية اليدوية والتقفيل الآلي الدقيق',
      'تخصيص كامل بالاسم عبر الحفر بالليزر واللوحات الذهبية 18k',
      'تجربة شراء رقمية حية بمعاينة فورية قبل بدء التصنيع',
      'تجربة فتح صندوق (Unboxing) فاخرة بأربع طبقات كهدية ملكية'
    ],
    keyInsightAr: 'لا نبيع مجرد شنطة صيفية، بل نبيع هوية شخصية دائمة وشعوراً بالانفراد.',
    borderColor: 'border-solara-gold'
  },
  {
    id: 'channels',
    number: '03',
    titleAr: 'قنوات الوصول',
    titleEn: 'Channels',
    iconName: 'Share2',
    points: [
      'متجر إلكتروني فائق السرعة عبر شوبيفاي مع استوديو تخصيص حي',
      'حملات Meta & TikTok Ads مستهدفة جغرافياً للساحل والجونة',
      'تسويق المحتوى التوليدي وشبكة الـ UGC عبر إنستجرام وPinterest',
      'منافذ عرض حصرية (Pop-up Boutiques) في فنادق وشواطئ الساحل'
    ],
    keyInsightAr: 'نموذج D2C هجين يجمع بين الطلب الرقمي وسرعة التوصيل للأماكن الساحلية.',
    borderColor: 'border-blue-500/40'
  },
  {
    id: 'customer-relationships',
    number: '04',
    titleAr: 'علاقات العملاء',
    titleEn: 'Customer Relationships',
    iconName: 'HeartHandshake',
    points: [
      'معاينة حية وموافقة العميل على بروفة التخصيص عبر واتساب',
      'كارت شكر موقع يدوياً من الحرفي المصري داخل كل صندوق',
      'نظام ولاء (SOLARA VIP Coastal Club) للخصومات الموسمية',
      'ضمان شامل على متانة اليد والخياطة والطلاء الذهبي'
    ],
    keyInsightAr: 'بناء علاقة عاطفية وثيقة تجعل كل عميل سفيراً حقيقياً للبراند (Organic Word of Mouth).',
    borderColor: 'border-rose-500/40'
  },
  {
    id: 'revenue-streams',
    number: '05',
    titleAr: 'مصادر الإيرادات',
    titleEn: 'Revenue Streams',
    iconName: 'DollarSign',
    points: [
      'مبيعات شنط التوت الصيفية المخصصة (1,650 – 2,800 EGP)',
      'مبيعات كلاتشات السهرات وقبعات الشمس باللؤلؤ (1,200 – 1,950 EGP)',
      'رسوم التخصيص الذهبي والحفر بالليزر الإضافي (Upselling)',
      'باقات الهدايا الملكية للعرائس والمناسبات (Gift Bundles)'
    ],
    keyInsightAr: 'هامش ربح إجمالي يتجاوز 68% بفضل إضافة التخصيص الاسمي والقيمة المدركة.',
    borderColor: 'border-emerald-500/40'
  },
  {
    id: 'key-resources',
    number: '06',
    titleAr: 'الموارد الرئيسية',
    titleEn: 'Key Resources',
    iconName: 'Layers',
    points: [
      'شبكة ورش الحرفيين المصريين المهرة في حياكة خوص النخيل والجلود',
      'ماكينات الحفر بالليزر وورش طلاء وتصنيع النحاس المطلي بذهب 18k',
      'معمل الذكاء الاصطناعي التوليدي لإنتاج الأصول والصور الإعلانية بدقة 2K',
      'الهوية البصرية وقاعدة المعرفة والمنظومة الرقمية المؤتمتة'
    ],
    keyInsightAr: 'أصول رقمية وحرفية تتيح قابلية التوسع (Scalability) دون المساس بجودة المنتج.',
    borderColor: 'border-indigo-500/40'
  },
  {
    id: 'key-activities',
    number: '07',
    titleAr: 'الأنشطة الرئيسية',
    titleEn: 'Key Activities',
    iconName: 'Activity',
    points: [
      'التطوير المستمر لتصاميم الشنط واختبار متانة الخامات مع الورش',
      'تنفيذ عمليات الحفر بالليزر وتركيب الألواح الذهبية والتغليف الفاخر',
      'إدارة حملات الاستحواذ الإعلانية وتحسين معدل التحويل (CRO)',
      'خدمة العملاء ومتابعة الشحن والتوصيل لقرى الساحل والجونة'
    ],
    keyInsightAr: 'إدارة متزامنة بين سلاسل الإمداد الحرفية ومحركات النمو الرقمي السريع.',
    borderColor: 'border-teal-500/40'
  },
  {
    id: 'key-partnerships',
    number: '08',
    titleAr: 'الشراكات الرئيسية',
    titleEn: 'Key Partnerships',
    iconName: 'Handshake',
    points: [
      'ورش الحرفيين التقليديين في دلتا مصر وصعيدها لخوص النخيل',
      'شركات الشحن السريع المتخصصة في التوصيل لقرى الساحل الشمالي والجونة',
      'المؤثرات وصناع محتوى الموضة الراقية (High-Fashion Influencers)',
      'منصات التجارة الدولية (Etsy & Amazon Global) للتوسع الخارجي'
    ],
    keyInsightAr: 'تحالف استراتيجي يدعم الحرف اليدوية التراثية وينقلها إلى العالمية.',
    borderColor: 'border-cyan-500/40'
  },
  {
    id: 'cost-structure',
    number: '09',
    titleAr: 'هيكل التكاليف',
    titleEn: 'Cost Structure',
    iconName: 'PieChart',
    points: [
      'تكلفة الخامات المباشرة (خوص معالج، جلد بقرى، كانفاس، طلاء ذهب): 22% – 28%',
      'أجور المصنعيات والحرفية اليدوية وتغليف الصناديق الصلبة: 12% – 15%',
      'ميزانية الإعلانات الممولة وتكلفة الاستحواذ على العميل (CAC): 15% – 20%',
      'التشغيل، اللوجستيات، ورسوم بوابات الدفع الإلكتروني: 6% – 8%'
    ],
    keyInsightAr: 'هيكل تكاليف رشيق بفضل الاستغناء عن جلسات التصوير المكلفة بالاعتماد على معمل الـ AI.',
    borderColor: 'border-violet-500/40'
  }
];
