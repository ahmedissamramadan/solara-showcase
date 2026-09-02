export interface Destination {
  id: string;
  nameEn: string;
  nameAr: string;
  vibeEn: string;
  vibeAr: string;
  targetAudienceEn: string;
  targetAudienceAr: string;
  productRequirementsEn: string[];
  productRequirementsAr: string[];
  recommendedCollection: string;
  avgOrderValue: string;
  colorPalette: string[];
  bgGradient: string;
}

export const destinationsData: Destination[] = [
  {
    id: 'sahel-premium',
    nameEn: 'North Coast — Ultra Luxury & Beach Clubs (Hacienda, Marassi, Almaza)',
    nameAr: 'الساحل الشمالي — الفئة الفاخرة (Hacienda, Marassi, Almaza)',
    vibeEn: 'Quiet luxury, private yachts, sunset cocktail lounges, and high-fashion resort aesthetics',
    vibeAr: 'أناقة مينيمالية هادئة، يخت، حفلات غروب، وتصوير إنستجرام راقٍ',
    targetAudienceEn: 'High-net-worth female executives, luxury travelers, and Class A/A+ tastemakers',
    targetAudienceAr: 'سيدات ورائدات أعمال، فئة A/A+ تبحث عن التميز الاجتماعي والفرادة',
    productRequirementsEn: [
      '18k gold-plated brass nameplates secured with polished corner rivets',
      'Sand-proof water-resistant canvas lining safeguarding valuables',
      'Neutral-toned silk ribbon monogramming (Ivory & Desert Gold)',
      'Midnight navy rigid keepsake gift box tied with champagne satin ribbon'
    ],
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
    nameEn: 'El Gouna — Abu Tig Marina & Contemporary Red Sea Elegance',
    nameAr: 'الجونة — مارينا أبو تيج والفن المعاصر (El Gouna Marina)',
    vibeEn: 'Cosmopolitan yacht marina lifestyle, art bistros, sunset sailing, and breezy evening glamour',
    vibeAr: 'حياة المارينا العالمية، كافيهات فنية، رحلات بحرية، وأزياء سهرات صيفية',
    targetAudienceEn: 'Creative directors, lifestyle influencers, and modern global cosmopolitans',
    targetAudienceAr: 'المصممات، صناع المحتوى، والمغتربون الباحثون عن قطع فريدة غير تقليدية',
    productRequirementsEn: [
      'Delicate handwoven wicker evening clutches accented with cognac leather straps',
      'Precision laser-engraved monogramming with geometric Mediterranean wave accents',
      'Detachable natural freshwater pearl chains for hats and clutches',
      'Structured silhouettes holding smartphones, makeup, and keycards securely'
    ],
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
    nameEn: 'Dahab — Organic Bohemian Simplicity & Sinai Serenity',
    nameAr: 'دهب — البساطة الحرة وأصالة الطبيعة (Dahab & South Sinai)',
    vibeEn: 'Mindful retreat, mountain backdrops, freediving culture, and raw eco-conscious aesthetics',
    vibeAr: 'هدوء نفسي، طبيعة جبلية، مغامرات بحرية، ونمط حياة بوهيمي أصيل',
    targetAudienceEn: 'Nature advocates, yoga practitioners, divers, and sustainable lifestyle purists',
    targetAudienceAr: 'عشاق الطبيعة، ممارسو اليوجا والغوص، والباحثون عن خامات عضوية مستدامة',
    productRequirementsEn: [
      '100% organic, unbleached chemical-free Egyptian palm wicker weave',
      'Ergonomic plush cotton shoulder straps crafted for long coastal walks',
      'Earth-tone accents inspired by Sinai canyons and the Blue Lagoon',
      'Multi-purpose reusable organic cotton dust bag with jute cords'
    ],
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
    nameEn: 'North Coast — Family Vacation & Daily Seaside Living',
    nameAr: 'الساحل الشمالي — العائلات والمصايف الحيوية (Family Coastal)',
    vibeEn: 'Warm family gatherings, long beach days, multi-generation memories, and heavy-duty utility',
    vibeAr: 'لمة العائلة، أيام الشاطئ الطويلة، والبحث عن سعة تخزين عالية ومتانة فائقة',
    targetAudienceEn: 'Mothers, families, and beachgoers requiring expansive volume with refined styling',
    targetAudienceAr: 'الأمهات والعائلات التي تبحث عن شنطة شاطئ تجمع بين الأناقة والاتساع',
    productRequirementsEn: [
      'Voluminous storage compartment with zippered sand-tight security pouches',
      'Bespoke Family Monogram personalization celebrated as an enduring summer gift',
      'Dual-rivet reinforced bridle leather handles built for hefty beach gear loads',
      'Waterproof base lining allowing direct placement on wet beach sand'
    ],
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
