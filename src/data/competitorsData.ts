import { Persona, Competitor } from '../types/solara';

export const solaraPersonas: Persona[] = [
  {
    id: "laila",
    name: "ليلى — مستكشفة الساحل (The Sahel Explorer)",
    archetypeAr: "عاشقة الأناقة والظهور الرقمي",
    archetypeEn: "The Sahel Explorer",
    demographics: {
      age: "23 - 29 سنة",
      occupation: "أخصائية تسويق / رائدة أعمال شابة",
      incomeBracket: "فئة A / B+ (مرتفع)",
      location: "القاهرة الجديدة / الشيخ زايد (تقضي الصيف بالساحل الشمالي)"
    },
    quote: "أنا لا أشتري مجرد شنطة بحر، أريد قطعة مميزة تعكس ذوقي وتظهر بشكل ساحر في صوري وفيديوهاتي على إنستجرام.",
    psychographics: [
      "تهتم بالموضة المعاصرة وتتابع صيحات الـ Resort Wear والـ Boho Chic",
      "تحب التقاط صور эстетика (Aesthetic) ومشاركة يوميات رحلاتها",
      "تقدر اللمسات المخصصة والأشياء التي لا تتكرر مع الآخرين"
    ],
    painPoints: [
      "المنتجات المعروضة في المحلات العادية مستهلكة ويرتديها الجميع",
      "منتجات الخوص التقليدية تتلف بسرعة وتجرح الملابس بسبب الخيوط الخشنة",
      "الماركات العالمية تبالغ في الأسعار (تتجاوز 6,000 ج.م) بدون أي ميزة تخصيص"
    ],
    solaraSolution: "حقيبة Coastal Tote وقبعة Fedora بتشطيب فاخر وحفر اسمها بالليزر أو بقطعة مذهبة تمنحها إطلالة حصرية ومميزة على الشاطئ.",
    preferredProducts: ["SBB10-850 Coastal Breeze Tote", "SCH3-500 Boho-Luxe Fedora Hat"],
    avgOrderValue: "1,350 ج.م (باقة الشنطة + القبعة)"
  },
  {
    id: "nour",
    name: "نور — صانعة الذكريات والإهداء (The Thoughtful Gifter)",
    archetypeAr: "الباحثة عن الهدايا العاطفية الراقية",
    archetypeEn: "The Thoughtful Gifter",
    demographics: {
      age: "26 - 35 سنة",
      occupation: "مهندسة معمارية / مديرة مشروعات",
      incomeBracket: "فئة A / B+ (مستقر وعالٍ)",
      location: "الإسكندرية / مصر الجديدة"
    },
    quote: "أفضل هدية لصديقتي في كتب كتابها أو عيد ميلادها الصيفي هي هدية محفور عليها اسمها وتأتي في علبة هدايا فاخرة وكارت شكر مخصص.",
    psychographics: [
      "تعتز بالمشاعر والعلاقات الصادقة وتبحث عن هدايا تترك أثراً دائماً",
      "تقدر التغليف الفاخر وتفاصيل الـ Unboxing الدقيقة",
      "تفضل الشراء الإلكتروني الموثوق مع إمكانية إضافة إهداء شخصي"
    ],
    painPoints: [
      "صعوبة العثور على هدية صيفية ذات قيمة عاطفية وتغليف ملوكي",
      "معظم المتاجر اليدوية ترسل المنتجات في أكياس بلاستيكية رديئة تفسد بهجة الإهداء",
      "القلق من تأخر التوصيل قبل موعد المناسبة"
    ],
    solaraSolution: "صندوق SOLARA الفاخر الكامل (The Gift Experience): منتج محفور باسم الصديقة، ورق تغليف حريري، وكارت إهداء مكتوب باليد.",
    preferredProducts: ["SCL15-550 Noir & Amber Clutch", "SBB10-850 Coastal Tote"],
    avgOrderValue: "1,400 ج.م (شراء هدية + قطعة شخصية لنفسها)"
  },
  {
    id: "farida",
    name: "فريدة — المتذوقة الهادئة (The Conscious Minimalist)",
    archetypeAr: "مقدرة الحرفية والجودة العالية",
    archetypeEn: "The Conscious Minimalist",
    demographics: {
      age: "30 - 45 سنة",
      occupation: "طبيبة / مستشارة أعمال",
      incomeBracket: "فئة A (دخل مرتفع)",
      location: "الزمالك / المعادي / الجونة"
    },
    quote: "أبحث عن خامات طبيعية أصيلة تعيش طويلاً وتمنحني راحة وأناقة بسيطة دون مبالغة أو بهرجة زائدة.",
    psychographics: [
      "تفضل المنتجات اليدوية المصنوعة من مواد بيئية مستدامة",
      "تركز على جودة الخياطة، متانة الجلد، ونظافة التشطيب الداخلي",
      "تحب القطع التي تجمع بين الوظيفة العملية والجمال الكلاسيكي"
    ],
    painPoints: [
      "كثرة المنتجات البلاستيكية والصناعية في الأسواق",
      "ضعف جودة البطانات وسرعة تلف السحابات في المنتجات الرخيصة",
      "ندرة الماركات المصرية التي تقدم جودة عالمية حقيقية"
    ],
    solaraSolution: "خوص نخيل مصري معالج يدوياً مع بطانة كتانية طبيعية وجلد متين يدوم لعدة مواسم.",
    preferredProducts: ["SCL11-530 Gilded Crescent Crossbody", "SCH3-500 Boho-Luxe Fedora"],
    avgOrderValue: "1,030 ج.م"
  }
];

export const competitorBenchmarks: Competitor[] = [
  {
    name: "SOLARA",
    category: "Personalized Summer Lifestyle",
    priceRange: "500 - 850 ج.م",
    strengths: [
      "نظام تخصيص متطور بالاسم والحفر بالليزر والقطع المذهبة",
      "جماليات صيفية معاصرة (Coastal & Sahel Aesthetic)",
      "تجربة تغليف وإهداء فاخرة (Unboxing Luxury)",
      "تسعير في متناول فئة واسعة مع جودة تشطيب ممتازة"
    ],
    weaknesses: [
      "علامة تجارية ناشئة في مرحلة بناء الوعي والانتشار"
    ],
    solaraAdvantage: "الجمع الفريد بين التخصيص بالاسم والجماليات الصيفية الراقية بسعر مناسب وتغليف إهداء ملوكي.",
    metrics: {
      personalization: 95,
      coastalAesthetics: 90,
      craftQuality: 88,
      priceAccessibility: 85,
      digitalExperience: 92,
      emotionalGifting: 95
    }
  },
  {
    name: "KOFFA (كوفا)",
    category: "Boho Fashion & Bags",
    priceRange: "800 - 1,400 ج.م",
    strengths: [
      "قاعدة جماهيرية واسعة وتواجد قوي على السوشيال ميديا",
      "تصميمات بوهيمية منوعة بألوان جذابة"
    ],
    weaknesses: [
      "غياب نظام التخصيص بالاسم",
      "أسعار مرتفعة مقارنة بالقيمة الملموسة",
      "تغليف تقليدي وتجربة إهداء غير مكتملة"
    ],
    solaraAdvantage: "SOLARA تتفوق بحفر الاسم المخصص وتجربة الإهداء الفاخرة وسعر أكثر جاذبية.",
    metrics: {
      personalization: 20,
      coastalAesthetics: 85,
      craftQuality: 78,
      priceAccessibility: 60,
      digitalExperience: 75,
      emotionalGifting: 45
    }
  },
  {
    name: "Khoos (خوص)",
    category: "Eco-Handmade Traditional",
    priceRange: "350 - 750 ج.م",
    strengths: [
      "تركيز قوي على الطابع البيئي والتراثي",
      "استخدام خامات مصرية تقليدية"
    ],
    weaknesses: [
      "ضعف التخصيص وعصرية التصميمات",
      "جماليات بصرية تقليدية لا تناسب أجواء الساحل الحديثة",
      "تجربة شراء رقمية عادية وضعف في صناعة المحتوى الإعلاني"
    ],
    solaraAdvantage: "SOLARA تنقل الخوص من الطابع التراثي القديم إلى واجهة الموضة الصيفية المعاصرة مع التخصيص الشخصي.",
    metrics: {
      personalization: 15,
      coastalAesthetics: 55,
      craftQuality: 80,
      priceAccessibility: 88,
      digitalExperience: 45,
      emotionalGifting: 35
    }
  },
  {
    name: "Fast Fashion (Zara / H&M)",
    category: "Mass Market Fashion",
    priceRange: "1,200 - 2,500 ج.م",
    strengths: [
      "قوة العلامة التجارية وسرعة التوفر في المولات",
      "تصميمات عالمية حديثة"
    ],
    weaknesses: [
      "انعدام التميز والتفرد (المنتج يرتديه آلاف الأشخاص)",
      "مواد مصنعة وليست خامات طبيعية يدوية",
      "استحالة التخصيص أو كتابة الاسم"
    ],
    solaraAdvantage: "SOLARA تقدم قطعة يدوية طبيعية نادرة مصنوعة خصيصاً للعميل ولا يمتلك مثلها أحد.",
    metrics: {
      personalization: 0,
      coastalAesthetics: 80,
      craftQuality: 70,
      priceAccessibility: 40,
      digitalExperience: 85,
      emotionalGifting: 30
    }
  }
];
