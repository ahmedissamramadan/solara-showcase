export interface Destination {
  id: string;
  nameAr: string;
  nameEn: string;
  vibeAr: string;
  targetAudience: string;
  productRequirementsAr: string[];
  recommendedCollection: string;
  avgOrderValue: string;
  colorPalette: string[];
  bgGradient: string;
}

export const destinationsData: Destination[] = [
  {
    id: 'sahel-premium',
    nameAr: 'الساحل الشمالي — الفئة الفاخرة (Hacienda, Marassi, Almaza)',
    nameEn: 'North Coast — Ultra Luxury & Beach Clubs',
    vibeAr: 'أناقة مينيمالية هادئة، يخت، حفلات غروب، وتصوير إنستجرام راقٍ',
    targetAudience: 'سيدات ورائدات أعمال، فئة A/A+ تبحث عن التميز الاجتماعي',
    productRequirementsAr: [
      'تخصيص لوحة نحاسية مطلية بذهب 18k بمسامير زوايا متقنة',
      'بطانة كانفاس داخلية معالجة مقاومة للرمال ومياه البحر',
      'تطريز أسماء بخيوط حريرية محايدة (Ivory & Desert Gold)',
      'تغليف في صندوق صلب كحلي داكن مع شريط ساتان كهدية فاخرة'
    ],
    recommendedCollection: 'Solara Royal Riviera Tote + Sun Visor',
    avgOrderValue: '2,400 – 3,200 EGP',
    colorPalette: ['#0A1128', '#D4AF37', '#F3E9DC', '#1C2541'],
    bgGradient: 'from-[#0A1128]/90 via-[#1C2541]/80 to-[#030712]'
  },
  {
    id: 'gouna',
    nameAr: 'الجونة — مارينا أبو تيج والفن المعاصر (El Gouna Marina)',
    nameEn: 'El Gouna — Cosmopolitan & Marina Lifestyle',
    vibeAr: 'حياة المارينا العالمية، كافيهات فنية، رحلات بحرية، وأزياء سهرات صيفية',
    targetAudience: 'المصممات، صناع المحتوى، والمغتربون الباحثون عن قطع فريدة غير تقليدية',
    productRequirementsAr: [
      'كلاتشات سهرة من الخوص المجدول الدقيق مع حزام جلد طبيعي كونياك',
      'حفر ليزر غائر للأحرف الأولى مع نقشة أمواج البحر الهندسية',
      'سلاسل لؤلؤ طبيعي قابلة للفك والتركيب على القبعات والكلاتش',
      'حجم عملي لحمل الآيفون برو ماكس، بطاقات الائتمان، ومستحضرات التجميل'
    ],
    recommendedCollection: 'Solara Marina Pearl Clutch + Horizon Boater',
    avgOrderValue: '1,800 – 2,600 EGP',
    colorPalette: ['#0077B6', '#D4AF37', '#90E0EF', '#03045E'],
    bgGradient: 'from-[#0077B6]/30 via-[#03045E]/80 to-[#030712]'
  },
  {
    id: 'dahab',
    nameAr: 'دهب — البساطة الحرة وأصالة الطبيعة (Dahab & South Sinai)',
    nameEn: 'Dahab — Bohemian Coastal & Raw Nature',
    vibeAr: 'هدوء نفسي، طبيعة جبلية، مغامرات بحرية، ونمط حياة بوهيمي أصيل',
    targetAudience: 'عشاق الطبيعة، ممارسو اليوجا والغوص، والباحثون عن خامات عضوية مستدامة',
    productRequirementsAr: [
      'خوص نخيل مصري طبيعي 100% غير مبيض أو معالج كيميائياً',
      'مقابض قطنية مريحة للكتف لتحمل المشي لمسافات طويلة على الشاطئ',
      'تطريز ألوان ترابية مستوحاة من جبال سيناء ورمال اللاجون',
      'جراب قماشي قطني (Dust Bag) صديق للبيئة متعدد الاستخدامات'
    ],
    recommendedCollection: 'Solara Nomad Eco-Weave Tote + Palm Hat',
    avgOrderValue: '1,200 – 1,800 EGP',
    colorPalette: ['#8D6E63', '#C79A64', '#EFEBE9', '#3E2723'],
    bgGradient: 'from-[#8D6E63]/30 via-[#3E2723]/80 to-[#030712]'
  },
  {
    id: 'sahel-family',
    nameAr: 'الساحل الشمالي — العائلات والمصايف الحيوية (Family Coastal)',
    nameEn: 'North Coast — Family Vacation & Daily Beach Life',
    vibeAr: 'لمة العائلة، أيام الشاطئ الطويلة، والبحث عن سعة تخزين عالية ومتانة فائقة',
    targetAudience: 'الأمهات والعائلات التي تبحث عن شنطة شاطئ تجمع بين الأناقة والاتساع',
    productRequirementsAr: [
      'سعة تخزين ضخمة مع جيوب داخلية بسوستة لحفظ الموبايل والمفاتيح من الرمل',
      'تخصيص باسم العائلة أو اسم الأم (Family Monogram) كهدية عائلية',
      'أيدي جلدية مقواة بمسامير مزدوجة لتحمل أوزان الفوط والكريمات',
      'قاعدة جلدية معزولة تسمح بوضع الشنطة على الرمال الرطبة دون تضرر الخوص'
    ],
    recommendedCollection: 'Solara Grand Family Beach Tote',
    avgOrderValue: '1,950 – 2,800 EGP',
    colorPalette: ['#1A365D', '#D69E2E', '#ED8936', '#0F172A'],
    bgGradient: 'from-[#1A365D]/40 via-[#0F172A]/90 to-[#030712]'
  }
];
