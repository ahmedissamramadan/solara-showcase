import { FunnelStage } from '../types/solara';

export const funnelStages: FunnelStage[] = [
  {
    id: "tofu",
    titleAr: "مرحلة الوعي والتشويق (TOFU - Top of Funnel)",
    titleEn: "Awareness & Aesthetic Teasing",
    objectiveAr: "جذب انتباه الجمهور المستهدف وبناء الفضول حول تجربة الصيف والتخصيص الحصري عبر مقاطع ريلز وتيك توك سريعة الانتشار.",
    contentTypes: [
      "فيديوهات ما وراء الكواليس (Behind The Scenes) لعملية حفر الاسم بالليزر",
      "مقاطع جمالية سينمائية (Coastal Aesthetic Reels) في الساحل واليخوت",
      "استطلاعات رأي تفاعلية (Polls) لاختيار أفضل درجات الخوص وتصميمات القبعات"
    ],
    keyHook: "هل جربت ترتدي شنطة صيف معمول عليها اسمك ومفيش منها اتنين في الساحل؟ ✨",
    kpis: [
      { metric: "المشاهدات (Views)", target: "100,000+ مشاهدة" },
      { metric: "معدل الحفظ والمشاركة (Saves & Shares)", target: "> 8.5%" },
      { metric: "تكلفة المشاهدة (CPV)", target: "< 0.04 ج.م" }
    ],
    samplePosts: [
      {
        headline: "لحظة نقش الاسم بالليزر على الخوص الطبيعي",
        platform: "TikTok",
        hook: "الصوت المريح لحفر أول شنطة صيف باسمك 🌴",
        cta: "اكتبي اسمك في الكومنت وشوفي شكله على القطعة!"
      },
      {
        headline: "الساحل الشمالي كما لم تره من قبل مع SOLARA",
        platform: "Instagram",
        hook: "أناقتك في الساحل تبدأ من التفاصيل اللي مفيش زيها 🌊",
        cta: "احفظي البوست لتنسيق إطلالتك الصيفية القادمة."
      }
    ]
  },
  {
    id: "mofu",
    titleAr: "مرحلة الاقتناع والمقارنة (MOFU - Middle of Funnel)",
    titleEn: "Consideration & Craftsmanship Proof",
    objectiveAr: "إثبات الجودة الفائقة، متانة الخامات، وعرض تجارب الـ Unboxing وتفاصيل التغليف لبناء الثقة وإزالة أي تردد.",
    contentTypes: [
      "فيديوهات فتح الصندوق (Unboxing Experience) وتفاصيل ورق التغليف والبطاقات",
      "اختبارات الجودة ومقاومة الماء والرمال (Water & Durability Test)",
      "دليل تنسيق الإطلالات الصيفية (How to Style Solara Bags & Hats)"
    ],
    keyHook: "ليه SOLARA مش مجرد شنطة خوص عادية؟ شوفي تفاصيل البطانة والجلد الطبيعي من الداخل!",
    kpis: [
      { metric: "معدل النقر إلى الموقع (CTR)", target: "> 3.2%" },
      { metric: "رسائل الاستفسار (DM Inquiries)", target: "250+ محادثة" },
      { metric: "معدل التفاعل الإجمالي", target: "> 12%" }
    ],
    samplePosts: [
      {
        headline: "ماذا يوجد داخل صندوق SOLARA الفاخر؟",
        platform: "Instagram",
        hook: "تجربة الـ Unboxing اللي هتحبي تصوريها وتنشيها فوراً 🎁",
        cta: "اطلبي قطعتك المخصصة الآن واستمتعي بالتغليف الفاخر المجاني."
      },
      {
        headline: "اختبار متانة حبل الكتف ومقاومة رطوبة البحر",
        platform: "Facebook",
        hook: "اشتريتي شنطة صيف وباظت من أول مشوار؟ شوفي إحنا بنصنعها إزاي!",
        cta: "تعرفي على مواصفات الخامات والضمان عبر الرابط."
      }
    ]
  },
  {
    id: "bofu",
    titleAr: "مرحلة التحويل والشراء (BOFU - Bottom of Funnel)",
    titleEn: "Conversion & Emotional Gifting",
    objectiveAr: "تحفيز اتخاذ القرار الفوري عبر عروض الباقات الحصرية (Bundles)، عروض الإهداء، والتأكيد على محدودية الكميات المتاحة أسبوعياً.",
    contentTypes: [
      "عروض باقة الصيف المتكاملة (Signature Tote + Boho Fedora Hat)",
      "إعلانات الإهداء السريع (Next-Day Sahel Express Delivery for Gifting)",
      "تقييمات وآراء العملاء بالصور ومقاطع الفيديو الحقيقية (Social Proof)"
    ],
    keyHook: "الكمية المتاحة للتخصيص هذا الأسبوع 20 قطعة فقط لضمان دقة الحرفية اليدوية!",
    kpis: [
      { metric: "معدل التحويل (Conversion Rate)", target: "> 4.1%" },
      { metric: "متوسط قيمة الطلب (AOV)", target: "1,250 ج.م" },
      { metric: "عائد الإنفاق الإعلاني (ROAS)", target: "3.8x" }
    ],
    samplePosts: [
      {
        headline: "عرض باقة الصيف الحصرية: الشنطة + القبعة بحفر الاسم مجاناً",
        platform: "Instagram",
        hook: "وفّري 300 ج.م واحصلي على طقم الصيف الكامل باسمك مخصصاً ☀️",
        cta: "اضغطي على الرابط وأدخلي اسمك قبل نفاد كمية هذا الأسبوع!"
      },
      {
        headline: "أفضل هدية لصديقتك في موسم الساحل",
        platform: "TikTok",
        hook: "رد فعل صديقتي لما شافت اسمها محفور بذهب 18k على الشنطة! 🥺❤️",
        cta: "اطلبي هدية صديقتك الآن مع كارت إهداء مخصص مجاناً."
      }
    ]
  }
];

export const seoBlueprintData = {
  domainStrategy: "solarabrand.eg / solara-summer.com",
  coreFocus: "تصدر نتائج البحث في مصر للكلمات المفتاحية الصيفية والهدايا المخصصة ذات النية الشرائية العالية (Commercial & Transactional Intent).",
  keywordClusters: [
    {
      cluster: "شنط صيف وهاند ميد مخصصة",
      intent: "Transactional",
      difficulty: "Low-Medium",
      volume: "8,500/mo",
      keywords: ["شنط بحر هاند ميد بالاسم", "شنط خوص صيف 2026", "شنط شاطئ مخصصة بالاسم مصر", "شراء شنطة بحر مطرزة"]
    },
    {
      cluster: "قبعات وإكسسوارات الساحل",
      intent: "Commercial",
      difficulty: "Low",
      volume: "6,200/mo",
      keywords: ["قبعات صيفية فيدورا مصر", "قبعة بحر محفور عليها الاسم", "إكسسوارات الساحل الشمالي", "قبعة خوص بوهو شيك"]
    },
    {
      cluster: "هدايا صيفية وباقات إهداء فاخرة",
      intent: "High Commercial",
      difficulty: "Low",
      volume: "5,400/mo",
      keywords: ["هدايا صيفية للبنات", "أفكار هدايا سفر وساحل", "بوكس هدية صيف بالاسم", "كلاتش مسائي صيفي مطلي ذهب"]
    }
  ],
  technicalChecklist: [
    { item: "تثبيت النطاق المفضل وتفعيل شهادة الحماية SSL/HTTPS", status: "Done" },
    { item: "تحسين سرعة التحميل وتخطي معايير Core Web Vitals (LCP < 1.2s)", status: "Done" },
    { item: "تضمين Schema Markup لبيانات المنتجات والمراجعات (Product Schema)", status: "Done" },
    { item: "بناء ملف sitemap.xml و robots.txt مهيأ لمحركات البحث والـ AI Search", status: "Done" }
  ]
};
