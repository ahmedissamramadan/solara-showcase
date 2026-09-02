export interface BMCBlock {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  iconName: string;
  pointsEn: string[];
  pointsAr: string[];
  keyInsightEn: string;
  keyInsightAr: string;
  borderColor: string;
}

export const bmcBlocks: BMCBlock[] = [
  {
    id: 'customer-segments',
    number: '01',
    titleEn: 'Customer Segments',
    titleAr: 'شرائح العملاء',
    iconName: 'Users',
    pointsEn: [
      'Sahel & El Gouna elite vacationers and women executives (Class A/A+)',
      'Thoughtful Givers curating keepsake bridal, anniversary, & milestone gifts',
      'Fashion tastemakers & content creators seeking unique unrepeated aesthetics',
      'Conscious eco-minimalists in Dahab prioritizing sustainable Egyptian craftsmanship'
    ],
    pointsAr: [
      'سيدات ورائدات أعمال الساحل الشمالي والجونة (الفئة A/A+)',
      'عشاق الإهداء العاطفي (Thoughtful Givers) للعرائس والمناسبات',
      'صناع المحتوى والمؤثرات الباحثات عن قطع فريدة غير مكررة',
      'عشاق البساطة البوهيمية المستدامة في دهب وجنوب سيناء'
    ],
    keyInsightEn: 'Targeting deep identity ownership and aesthetic prestige over transactional commodity consumption.',
    keyInsightAr: 'التركيز على الرغبة في التميز البصري والملكية الشخصية بدلاً من الشراء الاستهلاكي.',
    borderColor: 'border-amber-500/40'
  },
  {
    id: 'value-propositions',
    number: '02',
    titleEn: 'Value Propositions',
    titleAr: 'القيمة المقدمة (UVP)',
    iconName: 'Sparkles',
    pointsEn: [
      'First Egyptian lifestyle brand pairing indigenous palm weave with precision finishing',
      'On-demand bespoke monogramming via precision laser & 18k metallic gold leaf',
      'Live interactive digital personalization studio with instantaneous pre-order preview',
      'Museum-grade 4-layer rigid keepsake unboxing tailored for prestigious gifting'
    ],
    pointsAr: [
      'البراند المصري الوحيد الجامع بين الحرفية اليدوية والتقفيل الآلي الدقيق',
      'تخصيص كامل بالاسم عبر الحفر بالليزر واللوحات الذهبية 18k',
      'تجربة شراء رقمية حية بمعاينة فورية قبل بدء التصنيع',
      'تجربة فتح صندوق (Unboxing) فاخرة بأربع طبقات كهدية ملكية'
    ],
    keyInsightEn: 'We do not sell mere straw bags; we deliver enduring summer identity artifacts and emotional prestige.',
    keyInsightAr: 'لا نبيع مجرد شنطة صيفية، بل نبيع هوية شخصية دائمة وشعوراً بالانفراد.',
    borderColor: 'border-solara-gold'
  },
  {
    id: 'channels',
    number: '03',
    titleEn: 'Channels',
    titleAr: 'قنوات الوصول',
    iconName: 'Share2',
    pointsEn: [
      'Ultra-fast Shopify D2C flagship storefront featuring live Canvas Personalization Studio',
      'Geo-targeted Meta & TikTok Ad funnels optimized for Sahel and Red Sea corridors',
      'Organic AI-assisted UGC content engine across Instagram Reels and Pinterest',
      'Exclusive pop-up resort showrooms within luxury coastal hotels and beach clubs'
    ],
    pointsAr: [
      'متجر إلكتروني فائق السرعة عبر شوبيفاي مع استوديو تخصيص حي',
      'حملات Meta & TikTok Ads مستهدفة جغرافياً للساحل والجونة',
      'تسويق المحتوى التوليدي وشبكة الـ UGC عبر إنستجرام وPinterest',
      'منافذ عرض حصرية (Pop-up Boutiques) في فنادق وشواطئ الساحل'
    ],
    keyInsightEn: 'Agile hybrid D2C engine connecting digital custom ordering with expedited same-day coastal logistics.',
    keyInsightAr: 'نموذج D2C هجين يجمع بين الطلب الرقمي وسرعة التوصيل للأماكن الساحلية.',
    borderColor: 'border-blue-500/40'
  },
  {
    id: 'customer-relationships',
    number: '04',
    titleEn: 'Customer Relationships',
    titleAr: 'علاقات العملاء',
    iconName: 'HeartHandshake',
    pointsEn: [
      'Live WhatsApp concierge approval of custom monogram render prior to engraving',
      'Hand-signed artisan appreciation parchment tucked inside every rigid box',
      'Solara VIP Coastal Club loyalty tier for private seasonal pre-releases',
      'Comprehensive warranty covering wicker integrity, strap rivets, & gold finish'
    ],
    pointsAr: [
      'معاينة حية وموافقة العميل على بروفة التخصيص عبر واتساب',
      'كارت شكر موقع يدوياً من الحرفي المصري داخل كل صندوق',
      'نظام ولاء (SOLARA VIP Coastal Club) للخصومات الموسمية',
      'ضمان شامل على متانة اليد والخياطة والطلاء الذهبي'
    ],
    keyInsightEn: 'Cultivating intimate emotional rapport converting one-time buyers into lifelong brand evangelists.',
    keyInsightAr: 'بناء علاقة عاطفية وثيقة تجعل كل عميل سفيراً حقيقياً للبراند (Organic Word of Mouth).',
    borderColor: 'border-rose-500/40'
  },
  {
    id: 'revenue-streams',
    number: '05',
    titleEn: 'Revenue Streams',
    titleAr: 'مصادر الإيرادات',
    iconName: 'DollarSign',
    pointsEn: [
      'Core sales of customized coastal totes (850 – 1,100 EGP / $18 – $24 USD)',
      'Evening clutches, fedoras, and freshwater pearl accessories (500 – 700 EGP)',
      'High-margin personalization add-ons (18k metallic foil and dual monograms)',
      'Curated bridal party and executive corporate summer gift bundles'
    ],
    pointsAr: [
      'مبيعات شنط التوت الصيفية المخصصة (1,650 – 2,800 EGP)',
      'مبيعات كلاتشات السهرات وقبعات الشمس باللؤلؤ (1,200 – 1,950 EGP)',
      'رسوم التخصيص الذهبي والحفر بالليزر الإضافي (Upselling)',
      'باقات الهدايا الملكية للعرائس والمناسبات (Gift Bundles)'
    ],
    keyInsightEn: 'Gross margin exceeds 68% driven by high perceived value of bespoke personalization.',
    keyInsightAr: 'هامش ربح إجمالي يتجاوز 68% بفضل إضافة التخصيص الاسمي والقيمة المدركة.',
    borderColor: 'border-emerald-500/40'
  },
  {
    id: 'key-resources',
    number: '06',
    titleEn: 'Key Resources',
    titleAr: 'الموارد الرئيسية',
    iconName: 'Layers',
    pointsEn: [
      'Vetted network of master Egyptian wicker plaiters in the Nile Delta & Upper Egypt',
      'Precision laser engraving machinery and 18k gold galvanic electroplating facilities',
      'Generative AI creative lab synthesizing 2K editorial advertising assets',
      'Proprietary design system, brand knowledge base, and automated digital pipelines'
    ],
    pointsAr: [
      'شبكة ورش الحرفيين المصريين المهرة في حياكة خوص النخيل والجلود',
      'ماكينات الحفر بالليزر وورش طلاء وتصنيع النحاس المطلي بذهب 18k',
      'معمل الذكاء الاصطناعي التوليدي لإنتاج الأصول والصور الإعلانية بدقة 2K',
      'الهوية البصرية وقاعدة المعرفة والمنظومة الرقمية المؤتمتة'
    ],
    keyInsightEn: 'A scalable hybrid infrastructure harmonizing ancestral handcrafts with modern software automation.',
    keyInsightAr: 'أصول رقمية وحرفية تتيح قابلية التوسع (Scalability) دون المساس بجودة المنتج.',
    borderColor: 'border-indigo-500/40'
  },
  {
    id: 'key-activities',
    number: '07',
    titleEn: 'Key Activities',
    titleAr: 'الأنشطة الرئيسية',
    iconName: 'Activity',
    pointsEn: [
      'Continuous ergonomic silhouette innovation and salt-air stress testing',
      'Bespoke laser engraving execution, rivet mounting, and 4-layer gift boxing',
      'High-velocity performance marketing optimization and CRO A/B testing',
      'White-glove customer support and specialized gated-compound coastal dispatch'
    ],
    pointsAr: [
      'التطوير المستمر لتصاميم الشنط واختبار متانة الخامات مع الورش',
      'تنفيذ عمليات الحفر بالليزر وتركيب الألواح الذهبية والتغليف الفاخر',
      'إدارة حملات الاستحواذ الإعلانية وتحسين معدل التحويل (CRO)',
      'خدمة العملاء ومتابعة الشحن والتوصيل لقرى الساحل والجونة'
    ],
    keyInsightEn: 'Simultaneous orchestration of physical craft supply chains and high-velocity digital acquisition.',
    keyInsightAr: 'إدارة متزامنة بين سلاسل الإمداد الحرفية ومحركات النمو الرقمي السريع.',
    borderColor: 'border-teal-500/40'
  },
  {
    id: 'key-partnerships',
    number: '08',
    titleEn: 'Key Partnerships',
    titleAr: 'الشراكات الرئيسية',
    iconName: 'Handshake',
    pointsEn: [
      'Traditional artisan co-ops in Egyptian rural craft centers ensuring sustainable palm harvest',
      'Specialized express couriers with guaranteed security gate access in Sahel & Gouna',
      'Curated high-fashion content creators and boutique resort concierges',
      'International artisanal commerce platforms (Etsy & Amazon Global) for Gulf export'
    ],
    pointsAr: [
      'ورش الحرفيين التقليديين في دلتا مصر وصعيدها لخوص النخيل',
      'شركات الشحن السريع المتخصصة في التوصيل لقرى الساحل الشمالي والجونة',
      'المؤثرات وصناع محتوى الموضة الراقية (High-Fashion Influencers)',
      'منصات التجارة الدولية (Etsy & Amazon Global) للتوسع الخارجي'
    ],
    keyInsightEn: 'Symbiotic ecosystem empowering indigenous Egyptian artisans into global prestige commerce.',
    keyInsightAr: 'تحالف استراتيجي يدعم الحرف اليدوية التراثية وينقلها إلى العالمية.',
    borderColor: 'border-cyan-500/40'
  },
  {
    id: 'cost-structure',
    number: '09',
    titleEn: 'Cost Structure',
    titleAr: 'هيكل التكاليف',
    iconName: 'PieChart',
    pointsEn: [
      'Raw direct materials (cured palm wicker, full-grain leather, linen, gold foil): 22% – 28%',
      'Master artisan wages, laser processing, & rigid keepsake gift boxing: 12% – 15%',
      'Paid advertising acquisition budgets & customer acquisition cost (CAC): 15% – 20%',
      'Cloud infrastructure, Shopify fees, and digital payment gateway commissions: 6% – 8%'
    ],
    pointsAr: [
      'تكلفة الخامات المباشرة (خوص معالج، جلد بقرى، كانفاس، طلاء ذهب): 22% – 28%',
      'أجور المصنعيات والحرفية اليدوية وتغليف الصناديق الصلبة: 12% – 15%',
      'ميزانية الإعلانات الممولة وتكلفة الاستحواذ على العميل (CAC): 15% – 20%',
      'التشغيل، اللوجستيات، ورسوم بوابات الدفع الإلكتروني: 6% – 8%'
    ],
    keyInsightEn: 'Hyper-lean structural overhead achieved by substituting costly photoshoot production with the AI Creative Lab.',
    keyInsightAr: 'هيكل تكاليف رشيق بفضل الاستغناء عن جلسات التصوير المكلفة بالاعتماد على معمل الـ AI.',
    borderColor: 'border-violet-500/40'
  }
];
