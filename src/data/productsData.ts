import { Product } from '../types/solara';

export const solaraProducts: Product[] = [
  {
    id: "coastal-tote",
    code: "SBB10-850",
    nameEn: "Solara Coastal Breeze Rope Tote",
    nameAr: "حقيبة سولارا كوستال بريز (Coastal Breeze Tote)",
    category: "tote",
    priceEGP: 850,
    originalPriceEGP: 1100,
    descriptionEn: "An iconic Mediterranean summer beach tote handwoven from moisture-treated palm wicker, featuring plush organic rope handles and a custom engraved gold/leather nameplate.",
    descriptionAr: "حقيبة شاطئ وصيف أيقونية مصنوعة يدوياً من خوص النخيل المعالج المقاوم للرطوبة، مع مقابض حبل قطنية ناعمة ولوحة حفر مخصصة بالاسم.",
    featuresEn: [
      "Spacious interior designed for beach essentials, resort days, and towels",
      "Bespoke nameplate with precision laser engraving or 18k gold foil",
      "Water-resistant linen lining with concealed zippered security pouch",
      "Reinforced braided cotton rope straps for all-day shoulder comfort"
    ],
    featuresAr: [
      "مساحة واسعة تتسع لكافة مستلزمات الشاطئ والساحل",
      "لوحة مخصصة للاسم أو الحروف بحفر ليزر غائر أو طلاء ذهبي 18k",
      "بطانة داخلية قماشية مقاومة للماء مع جيب سري بسحاب",
      "مقابض حبل مجدول مريحة للاستخدام الطويل على الكتف"
    ],
    dimensions: "42cm x 30cm x 15cm",
    materialsEn: "Purified Egyptian palm wicker, Egyptian organic cotton, 18k gold-plated brass plate / Italian leather",
    materialsAr: "خوص طبيعي منقى، قطن مصري، لوحة نحاسية مطلية بذهب 18k / جلد طبيعي",
    bgGradient: "from-amber-900/30 to-amber-700/10",
    canvasTemplate: {
      baseColor: "#D8BE8A",
      textureType: "straw",
      engravingZone: { x: 0.5, y: 0.6, width: 0.35, height: 0.12 }
    }
  },
  {
    id: "boho-fedora",
    code: "SCH3-500",
    nameEn: "Solara Boho-Luxe Fedora Hat",
    nameAr: "قبعة بوهو لوكس فيدورا (Boho-Luxe Fedora Hat)",
    category: "hat",
    priceEGP: 500,
    originalPriceEGP: 650,
    descriptionEn: "A timeless sun hat infused with bohemian refinement, providing UPF 50+ sun protection and a delicate genuine leather band custom-embossed with your initials.",
    descriptionAr: "قبعة صيفية كلاسيكية بلمسة بوهيمية فاخرة، توفر حماية كاملة من أشعة الشمس مع شريط جلدي رفيع يحمل حروفك الأولى أو اسمك المحفور.",
    featuresEn: [
      "UPF 50+ broad-spectrum defense against harsh midday UV rays",
      "Genuine leather band engraved with laser precision initials",
      "Lightweight, crush-resistant architecture ideal for resort travel",
      "Internal adjustable elastic ribbon ensuring a custom tailored fit"
    ],
    featuresAr: [
      "حماية UPF 50+ من أشعة الشمس المباشرة",
      "شريط جلدي مخصص بحفر ليزر ناعم للاسم",
      "تصميم خفيف الوزن ومقاوم للطي ومناسب لحقائب السفر",
      "حجم قابل للتعديل بحزام داخلي مرن"
    ],
    dimensions: "Circumference: 56 - 58 cm (Adjustable)",
    materialsEn: "Premium raffia straw, warm cognac natural leather trim, gilded brass buckle",
    materialsAr: "خوص رافيا ممتاز، شريط جلد طبيعي بني دافئ، إبزيم معدني مذهب",
    bgGradient: "from-yellow-950/30 to-amber-800/10",
    canvasTemplate: {
      baseColor: "#EAE0CE",
      textureType: "straw",
      engravingZone: { x: 0.5, y: 0.55, width: 0.28, height: 0.08 }
    }
  },
  {
    id: "noir-amber-clutch",
    code: "SCL15-550",
    nameEn: "Solara Noir & Amber Evening Clutch",
    nameAr: "كلاتش سولارا نوار آند آمبر (Noir & Amber Clutch)",
    category: "clutch",
    priceEGP: 550,
    originalPriceEGP: 700,
    descriptionEn: "An architectural evening clutch curated for Sahel nightlife and marina dinners, harmonizing midnight black treated weave with natural amber stones and gilded gold personalization.",
    descriptionAr: "حقيبة يد مدمجة مسائية لحفلات الساحل وعشاء الصيف، تجمع بين اللون الأسود الملكي وحجر الكهرمان الطبيعي مع قطعة حفر ذهبية للاسم.",
    featuresEn: [
      "Minimalist, regal silhouette complementing both day resort wear and evening dresses",
      "Effortless magnetic snap closure with detachable wristlet strap",
      "Polished metallic badge engraved with bespoke initials or anniversary date",
      "Soft velvet interior safeguarding smartphones, sunglasses, and cosmetics"
    ],
    featuresAr: [
      "تصميم مينيمال راقٍ يتناسق مع الإطلالات المسائية والصيفية",
      "قفل مغناطيسي قوي وسلس مع حزام يد جلدي قابل للإزالة",
      "قطعة معدنية مطلية بالذهب لنقش الاسم أو تاريخ مميز",
      "مبطنة بمخمل ناعم لحماية الهاتف والإكسسوارات"
    ],
    dimensions: "26cm x 16cm x 4cm",
    materialsEn: "Black dyed treated straw weave, organic amber resin, 18k gold-finish accents",
    materialsAr: "خيوط قش سوداء معالجة، حجر كهرماني طبيعي، إكسسوارات معدنية ذهبية",
    bgGradient: "from-slate-900/60 to-amber-950/20",
    canvasTemplate: {
      baseColor: "#2A2A2A",
      textureType: "fabric",
      engravingZone: { x: 0.5, y: 0.5, width: 0.3, height: 0.1 }
    }
  },
  {
    id: "gilded-crescent",
    code: "SCL11-530",
    nameEn: "Solara Gilded Crescent Crossbody",
    nameAr: "حقيبة جيلدد كريسنت كروس (Gilded Crescent Crossbody)",
    category: "crossbody",
    priceEGP: 530,
    originalPriceEGP: 680,
    descriptionEn: "An avant-garde crescent silhouette inspired by Mediterranean tides, offering carefree mobility and sculptural elegance across coastal promenades.",
    descriptionAr: "تصميم هلالي مبتكر مستوحى من أمواج البحر المتوسط، تمنحك حرية الحركة مع أناقة لافتة للنظر في كل خروجة صيفية.",
    featuresEn: [
      "Long adjustable crossbody strap ensuring effortless ergonomics during walks",
      "Central leather patch hot-stamped with your personalized name",
      "Featherweight structural weave that holds shape season after season",
      "High-durability brass zipper engineered for coastal salt-air resistance"
    ],
    featuresAr: [
      "حزام كروس جلدي طويل قابل للتعديل لراحة تامة أثناء المشي",
      "باتش جلدي مركزي مختوم باسمك بحفر دقيق",
      "تصميم انسيابي خفيف وسهل التنسيق مع مختلف الإطلالات",
      "سحاب معدني عالي الجودة يدوم طويلاً"
    ],
    dimensions: "28cm x 20cm x 8cm",
    materialsEn: "Fine plaited wicker, rich tan bridle leather, organic linen lining",
    materialsAr: "خوص يدوي مجدول ناعم، جلد طبيعي هافان، بطانة كتانية طبيعية",
    bgGradient: "from-amber-950/40 to-yellow-900/10",
    canvasTemplate: {
      baseColor: "#DFCDB0",
      textureType: "straw",
      engravingZone: { x: 0.5, y: 0.52, width: 0.25, height: 0.09 }
    }
  }
];
