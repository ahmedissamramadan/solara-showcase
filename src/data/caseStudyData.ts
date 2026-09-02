export interface CaseStudyChapter {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  summaryEn: string;
  summaryAr: string;
  keyInsightsEn: string[];
  keyInsightsAr: string[];
  framework: {
    nameEn: string;
    nameAr: string;
    descriptionEn: string;
    descriptionAr: string;
    steps: {
      titleEn: string;
      titleAr: string;
      descEn: string;
      descAr: string;
      icon: string;
    }[];
  };
}

export const caseStudyOverview = {
  brandName: "SOLARA",
  arabicName: "سولارا",
  taglineEn: "The Bespoke Summer Identity & Accessible Luxury Lifestyle Brand",
  taglineAr: "علامة الهوية الصيفية المخصصة بالاسم والحرفية الراقية",
  categoryEn: "Accessible Luxury / Resort Lifestyle & Custom Goods",
  categoryAr: "لايف ستايل صيفي راقٍ ومصنوعات يدوية مخصصة بالاسم",
  locationEn: "Egypt — Alexandria / North Coast / Cairo",
  locationAr: "مصر — الإسكندرية / الساحل الشمالي / القاهرة",
  timeline: "2025 – 2026",
  heroMetrics: [
    {
      labelEn: "Initial Validation Target",
      labelAr: "المستهدف المبكر",
      value: "100 Orders",
      subtextEn: "Proof of operational unit economics & craft capacity",
      subtextAr: "إثبات كفاءة النموذج التشغيلي وطاقة الورش"
    },
    {
      labelEn: "Value-Added Delta",
      labelAr: "فارق القيمة المضافة",
      value: "+45%",
      subtextEn: "Gross margin uplift via on-demand laser/gold monogramming",
      subtextAr: "هامش ربح إضافي بفضل التخصيص بالليزر والذهب"
    },
    {
      labelEn: "Uncontested Market Gap",
      labelAr: "الفجوة التنافسية",
      value: "100%",
      subtextEn: "Zero local competitors pairing coastal aesthetic with bespoke nameplates",
      subtextAr: "غياب أي منافس يجمع بين التخصيص والجماليات الصيفية"
    },
    {
      labelEn: "Projected ROAS Multiple",
      labelAr: "عائد الإعلانات المتوقع",
      value: "3.8x",
      subtextEn: "Driven by hyper-targeted AI-assisted UGC creative testing",
      subtextAr: "بفضل محتوى الـ UGC المولد بمعمل الـ AI التوليدي"
    }
  ],
  theShift: {
    from: {
      titleEn: "Generic Craft Workshop Trap (Traditional Handicraft)",
      titleAr: "سلوك متجر المشغولات اليدوية التقليدي (The Craft Store Trap)",
      traitsEn: [
        "Sold merely as commodity palm wicker or generic straw hats in street bazaars",
        "Cutthroat price wars eroding artisan margins down to negligible returns",
        "Absence of brand identity; flimsy plastic bags ruining initial customer impression",
        "Unpredictable seasonal spikes with zero durable customer retention or digital funnels"
      ],
      traitsAr: [
        "البيع كـ منتج خوص أو قبعة تقليدية متوفرة بالأسواق الشعبية",
        "المنافسة المحتدمة على السعر فقط وتآكل هوامش الربح",
        "غياب الهوية البصرية الموحدة وضعف تغليف وتجربة فتح الصندوق",
        "الاعتماد على مواسم صيفية عشوائية بدون قمع تسويقي مستدام"
      ]
    },
    to: {
      titleEn: "Resort Lifestyle & Identity System (The SOLARA Brand)",
      titleAr: "سلوك علامة الهوية ونمط الحياة الفاخر (The SOLARA Identity System)",
      traitsEn: [
        "Selling profound emotional ownership via personal nameplates and monogramming",
        "Positioned as an iconic symbol of Sahel luxury, summer travel, and milestone gifting",
        "4-layer royal unboxing: navy rigid keepsake box, custom wax tissue seal, hand-calligraphed card",
        "High-velocity digital acquisition fueled by the AI Creative Engine and UGC network"
      ],
      traitsAr: [
        "بيع الشعور بالملكية العاطفية (Emotional Ownership) عبر الاسم والحفر",
        "التموضع كأيقونة صيفية للساحل وذكريات السفر والإهداء الراقي",
        "تجربة استلام متكاملة (علبة فاخرة، ورق حريري، كارت شكر مخصص)",
        "منظومة محتوى رقمي متقدمة مدعومة بأدوات الذكاء الاصطناعي والـ UGC"
      ]
    }
  }
};

export const caseStudyChapters: CaseStudyChapter[] = [
  {
    id: "foundation",
    number: "01",
    titleEn: "Brand Genesis & The Strategic Shift",
    titleAr: "التأسيس والتحول الاستراتيجي",
    subtitleEn: "How to identify an untapped market void and transition from craft commodity to luxury identity",
    subtitleAr: "كيف تكتشف فجوة السوق وتنتقل من متجر يدوي إلى براند هوية؟",
    summaryEn: "SOLARA was conceived from a stark disparity in the Egyptian lifestyle market: Coastal vacationers were trapped between coarse, unbranded bazaar wicker with failing linings and foreign luxury labels charging exorbitant tariffs without personalization. SOLARA was engineered as Egypt's pioneering accessible luxury brand delivering handwoven wicker elevated with jewelry-grade custom monograms.",
    summaryAr: "انطلق مشروع SOLARA من رصد فجوة واضحة في السوق المصري: محبو الصيف والساحل يواجهون خيارين، إما منتجات خوص شعبية رديئة التشطيب بدون هوية، أو ماركات عالمية باهظة تفتقد للخصوصية والتخصيص. تم بناء SOLARA لتكون البراند المصري الأول الذي يقدم منتجات صيفية راقية بحفر الاسم ونحت الحروف.",
    keyInsightsEn: [
      "Consumers do not pay premium margins for a 'straw bag' — they pay for 'MY bespoke coastal piece tailored exclusively for me and my Sahel aesthetic'.",
      "On-demand personalization transforms a disposable seasonal purchase into an irreplaceable sentimental heirloom.",
      "Laser-focused audience definition governs tone of voice, rigid box packaging weight, and precision ad targeting."
    ],
    keyInsightsAr: [
      "الناس لا تدفع سعراً مضاعفاً مقابل 'حقيبة خوص'، بل مقابل 'حقيبتي التي صُنعت لي وحدي وتليق بصوري في الساحل'.",
      "التخصيص (Personalization) ينقل المنتج من فئة السلع الاستهلاكية (Commodity) إلى فئة الهدايا ذات القيمة التذكارية التي لا تقدر بثمن.",
      "تحديد الجمهور المستهدف بدقة هو ما يحدد نبرة الصوت، اختيار خامات التغليف، وتصميم الحملات الإعلانية."
    ],
    framework: {
      nameEn: "The 3P Identity Framework (Purpose, Personalization, Prestige)",
      nameAr: "إطار الـ 3P لبناء الهوية (Purpose, Personalization, Prestige)",
      descriptionEn: "A tri-pillar strategic model inoculating the brand against replication and price commoditization:",
      descriptionAr: "إطار عمل ثلاثي لبناء براند يستعصي على التقليد والمنافسة السعرية:",
      steps: [
        {
          titleEn: "Coastal Purpose",
          titleAr: "الغرض ونمط الحياة (Purpose)",
          descEn: "Anchoring the brand in freedom, coastal serenity, and memories rather than manufacturing metrics.",
          descAr: "ربط البراند بحرية الصيف والساحل وذكريات الرحلات وليس مجرد تفاصيل التصنيع.",
          icon: "Sun"
        },
        {
          titleEn: "Emotional Personalization",
          titleAr: "التخصيص العاطفي (Personalization)",
          descEn: "Precision laser monograms, Italian leather patches, and 18k galvanic gold nameplates.",
          descAr: "حفر الاسم بالليزر أو الباتش الجلدي أو القطع المعدنية المطلية بالذهب.",
          icon: "Sparkles"
        },
        {
          titleEn: "Tactile Prestige",
          titleAr: "الهيبة واللمسة الفاخرة (Prestige)",
          descEn: "Royal midnight navy rigid box, textured tissue seal, and handwritten appreciation calligraphy.",
          descAr: "تغليف الصندوق الأزرق الداكن والورق الحريري وبطاقة الإهداء المختومة.",
          icon: "Crown"
        }
      ]
    }
  },
  {
    id: "market-research",
    number: "02",
    titleEn: "Market Intelligence & Competitor Benchmarking",
    titleAr: "أبحاث السوق والتحليل التنافسي",
    subtitleEn: "Decoding the competitive landscape to claim an uncontested Unique Selling Proposition (USP)",
    subtitleAr: "تحليل الخريطة التنافسية واستخراج الميزة الفريدة (USP)",
    summaryEn: "The team conducted a rigorous audit of direct and indirect competitors across Egypt (Khoos, KOFFA, Simplicity Gallery, Zara) leveraging social intelligence to parse engagement ratios, viral creative formats, and systemic structural weaknesses across rival catalogs.",
    summaryAr: "تم تحليل المنافسين المباشرين وغير المباشرين في السوق المصري (Khoos, KOFFA, Simplicity Gallery, Zara) عبر منصات التواصل باستخدام بيانات Rival IQ لفهم معدلات التفاعل والمحتوى الرائج ونقاط الضعف الجوهرية لدى كل منافس.",
    keyInsightsEn: [
      "KOFFA leans into boho-chic imagery but lacks permanent personalization and structured corporate gifting capabilities.",
      "Khoos celebrates village heritage but suffers from dated silhouettes detached from youthful coastal trends.",
      "Global fast fashion (Zara/Mango) offers uniform designs worn ubiquitously, destroying social distinction."
    ],
    keyInsightsAr: [
      "براند KOFFA يعتمد على أسلوب البوهو شيك لكنه يفتقد نظام التخصيص بالاسم وتجربة الإهداء المؤسسية.",
      "براند Khoos يركز على الطابع البيئي والتراثي لكنه يعاني من ضعف الجانب الجمالي المعاصر وعصرية منصات التواصل.",
      "الماركات السريعة (Zara / H&M) تقدم تصميمات نمطية يرتديها الجميع في كل مكان مما يلغي ميزة التفرد والتميز الاجتماعي."
    ],
    framework: {
      nameEn: "Competitive Gap Blue Ocean Matrix",
      nameAr: "مصفوفة الفجوة التنافسية والمحيط الأزرق",
      descriptionEn: "Blue Ocean strategy leapfrogging competition by satisfying an unaddressed market dimension:",
      descriptionAr: "استراتيجية المحيط الأزرق لتجاوز المنافسة عبر سد الفجوة غير المخدومة:",
      steps: [
        {
          titleEn: "Material Engineering",
          titleAr: "تحليل الخامات والتشطيب",
          descEn: "Eliminating coarse unlined wicker; adopting moisture-cured palm fibers and humidity-resistant leather.",
          descAr: "استبعاد الخامات الرديئة واعتماد خوص النخيل المعالج والجلد الطبيعي المقاوم لرطوبة البحر.",
          icon: "Layers"
        },
        {
          titleEn: "Engagement Intelligence",
          titleAr: "تحديد مؤشرات التفاعل",
          descEn: "Social post telemetry revealed personalized monogram reels outperform product-only reels by 4.2x.",
          descAr: "دراسة منشورات المنافسين واكتشاف أن بوستات التخصيص تحقق 4 أضعاف التفاعل مقارنة ببوستات المنتجات الصامتة.",
          icon: "BarChart3"
        },
        {
          titleEn: "Definitive USP Articulation",
          titleAr: "صياغة الـ USP النهائي",
          descEn: "Egypt's sole summer brand fusing ancestral wickerwork with bespoke nameplates and royal keepsake unboxing.",
          descAr: "البراند المصري الوحيد الذي يدمج المنتجات الصيفية اليدوية بحرفية التخصيص بالاسم وتجربة الإهداء الفاخرة.",
          icon: "Target"
        }
      ]
    }
  },
  {
    id: "branding-experience",
    number: "03",
    titleEn: "Visual Identity & Unboxing Architecture",
    titleAr: "الهوية البصرية وتجربة فتح الصندوق",
    subtitleEn: "Engineering indelible first impressions: From golden-ratio logo to 4-layer sensory unboxing",
    subtitleAr: "هندسة الانطباع الأول من الشعار إلى تغليف الـ Unboxing الفاخر",
    summaryEn: "SOLARA's visual language was constructed not as a superficial graphic, but as an integrated visual system inspired by warm Egyptian sunbursts and deep Mediterranean midnight waters. Every packaging touchpoint was calculated to convert organic customers into spontaneous UGC advocates upon opening.",
    summaryAr: "لم تكن هوية SOLARA مجرد رسمة لوجو، بل نظاماً بصرياً متكاملاً مستوحى من أشعة شمس الساحل الذهبية وزرقة البحر الأبيض المتوسط العميقة، مع تصميم نظام تغليف متدرج يضمن تحويل كل عميل إلى صانع محتوى (UGC Generator) بمجرد استلام الصندوق.",
    keyInsightsEn: [
      "The logotype balances contemporary geometric serifs with a sunburst emblem engineered for microscopic laser engraving.",
      "Investing 35-45 EGP into rigid gift boxing manufactures >250 EGP in perceived value, obliterating buyer remorse.",
      "A handwritten, gold-embossed personalized thank-you note triggers deep emotional attachment and viral organic sharing."
    ],
    keyInsightsAr: [
      "الشعار يدمج خطوط السيريف المعاصرة مع رمزية الإشراق الصيفي المينيمال لتسهيل الحفر على المعادن والجلود.",
      "تكلفة التغليف الفاخر (30-40 ج.م) تضيف قيمة مدركة تتجاوز 250 ج.م في عقل العميل وتلغي تماماً التردد في الشراء.",
      "تضمين كارت شكر يحمل اسم العميل بخط يدوي يخلق ارتباطاً نفسياً وولاءً عاطفياً طويل الأمد."
    ],
    framework: {
      nameEn: "The 4-Layer Sensory Unboxing Sequence",
      nameAr: "تسلسل طبقات الـ Unboxing الأربع الفاخرة",
      descriptionEn: "A choreographed reveal sequence engineered to trigger smartphone cameras and organic shares:",
      descriptionAr: "تسلسل طبقات تجربة استلام المنتج المصممة لإثارة الإعجاب والتصوير:",
      steps: [
        {
          titleEn: "The Outer Shield",
          titleAr: "الطبقة الخارجية (The Outer Shield)",
          descEn: "Heavy-duty midnight navy rigid presentation box sealed with a gold-leaf tamper seal.",
          descAr: "صندوق كرتوني متين باللون الأزرق الداكن السولاري مع ملصق أمان ذهبي.",
          icon: "Box"
        },
        {
          titleEn: "The Silk Veil",
          titleAr: "طبقة الحماية الحريرية (The Silk Veil)",
          descEn: "Custom-printed tissue paper displaying delicate monogram watermarks, building anticipation.",
          descAr: "ورق تغليف ناعم مطبوع بنقشة الشعار الدقيقة يحافظ على غموض المنتج.",
          icon: "FileText"
        },
        {
          titleEn: "The Personal Touch",
          titleAr: "اللمسة الشخصية (The Personal Touch)",
          descEn: "Hand-inked calligraphy card addressing the recipient by name with artisan care instructions.",
          descAr: "كارت شكر مكتوب به اسم العميل مع تعليمات العناية بالمنتج اليدوي.",
          icon: "Heart"
        },
        {
          titleEn: "The Grand Reveal",
          titleAr: "لحظة الكشف عن البطل (The Reveal)",
          descEn: "The bespoke personalized piece crowned with gleaming 18k gold foil or laser engraving.",
          descAr: "المنتج المحفور بالاسم بطلاء ذهبي أو حفر ليزر غائر جاهز للاستخدام والتصوير.",
          icon: "Sparkles"
        }
      ]
    }
  },
  {
    id: "ai-content-factory",
    number: "04",
    titleEn: "AI Creative Lab & Content Engineering",
    titleAr: "معمل الذكاء الاصطناعي وهندسة المحتوى",
    subtitleEn: "Compressing commercial ad production costs by 80% via generative AI pipelines",
    subtitleAr: "كيف تم خفض تكلفة الإنتاج الإعلاني 80% بفضل الـ Generative AI؟",
    summaryEn: "SOLARA orchestrated a modern AI creative stack (Midjourney, Gemini Image FX, Runway, Higgsfield) transforming raw smartphone craft photography into ultra-luxury 2K resort lookbooks and high-converting UGC video assets that capture attention within the opening two seconds.",
    summaryAr: "استخدمت SOLARA منظومة متقدمة من أدوات الذكاء الاصطناعي (Midjourney, Gemini Image FX, Higgsfield, Runway) لتحويل صور المنتجات اليدوية المصورة بكاميرا هاتف إلى جلسات تصوير تحريرية فاخرة وفيديوهات UGC تجذب الانتباه خلال أول ثانيتين.",
    keyInsightsEn: [
      "Plain workshop photos were transposed into yacht decks and Sahel beach clubs at 2K resolution, bypassing six-figure production costs.",
      "Modest Egyptian and Arab female models were generated to honor cultural identity while maintaining aspirational prestige.",
      "Hook-Story-Offer video scripts engineered with AI boosted average video completion and retention rates by +65%."
    ],
    keyInsightsAr: [
      "الصور الملتقطة في بيئة استوديو عادية تم تحويلها لخلفيات يخوت بحرية ومنتجعات ساحلية فاخرة بجودة 2K دون الحاجة لتكاليف جلسات تصوير بمئات الآلاف.",
      "توليد موديلز محتشمات بملامح شرق أوسطية عربية تناسب ثقافة المجتمع المصري وتعزز مصداقية الإعلان.",
      "توليد سيناريوهات تيك توك وريلز بأسلوب الـ Hook-Story-Offer زادت معدلات الاحتفاظ بالفيديو (View Retention) بنسبة 65%."
    ],
    framework: {
      nameEn: "The AI Creative Production Pipeline",
      nameAr: "خط الإنتاج الإبداعي المؤتمت بالـ AI",
      descriptionEn: "An automated three-phase loop from phone capture to high-converting ad variant:",
      descriptionAr: "خط الإنتاج الإبداعي المؤتمت من الفكرة للبوست النهائي:",
      steps: [
        {
          titleEn: "Raw Craft Capture",
          titleAr: "التصوير الخام للمنتج (Raw Capture)",
          descEn: "Standard studio photography under neutral, balanced lighting preserving authentic wicker texture.",
          descAr: "تصوير قطع الشنط والقبعات بخلفيات نظيفة وإضاءة طبيعية واضحة.",
          icon: "Camera"
        },
        {
          titleEn: "AI Contextualization",
          titleAr: "إعادة التكوين بالـ AI (AI Contextualization)",
          descEn: "Seamless synthetic blending into Mediterranean seascapes, catamaran decks, and marina sunsets.",
          descAr: "دمج المنتج في بيئات الساحل، شواطئ البحر، واليخوت مع الحفاظ على تفاصيل الخوص الدقيقة.",
          icon: "Wand2"
        },
        {
          titleEn: "Motion & UGC Synthesis",
          titleAr: "صناعة الـ UGC والفيديو (Motion Synthesis)",
          descEn: "Synthesizing dynamic motion, ASMR sound design, and micro-influencer product spotlights.",
          descAr: "تحريك العناصر وإنتاج مقاطع تفاعلية بأسلوب المؤثرين للترويج على تيك توك وإنستجرام.",
          icon: "Video"
        }
      ]
    }
  },
  {
    id: "launch-growth",
    number: "05",
    titleEn: "Full-Funnel Growth, Paid Ads & SEO Architecture",
    titleAr: "القمع التسويقي وخطة النمو والإطلاق",
    subtitleEn: "Executing the multi-channel roadmap to achieve the initial 100 orders with sustainable ROAS",
    subtitleAr: "خطة التوسع وتحقيق أول 100 أوردر مع عائد إعلاني مستدام",
    summaryEn: "The launch framework harmonizes targeted social acquisition (Meta & TikTok Ads), organic scrollytelling Reels, and authoritative organic SEO to dominate high-intent summer and bridal gifting queries across Egyptian search engines.",
    summaryAr: "تعتمد خطة الإطلاق على قمع تسويقي متوازن يربط بين إعلانات السوشيال ميديا المدفوعة (Meta & TikTok Ads)، التسويق بالمحتوى العضوي (Organic Reels)، وتحسين محركات البحث (SEO) لضمان تصدر الكلمات الصيفية عالية النية الشرائية في مصر.",
    keyInsightsEn: [
      "A 10-day pre-launch teaser campaign accumulated an early-bird VIP waitlist of 240+ verified buyers.",
      "Positioning creative angles around 'The Definitive Personalized Summer Gift for Your Best Friend' boosted AOV by +35%.",
      "Aggressive SEO targeting for terms like 'Personalized beach bags Egypt' delivers a continuous compounding stream of zero-CAC orders."
    ],
    keyInsightsAr: [
      "مرحلة التشويق (Teasing Phase) قبل الإطلاق بـ 10 أيام خلقت قائمة انتظار (Waitlist) من 240+ مهتم بالتخصيص.",
      "حملات الإعلانات ركزت على زاوية 'أفضل هدية صيفية باسم صديقتك' مما رفع متوسط قيمة السلة (AOV) بنسبة 35% لشراء قطعتين معاً.",
      "استهداف الـ SEO لكلمات مثل 'شنط بحر هاند ميد بالاسم' يضمن تدفق مبيعات مجاني ومستمر دون الاعتماد الكامل على الإعلانات."
    ],
    framework: {
      nameEn: "The Sustainable Growth Flywheel",
      nameAr: "المحرك التسويقي الشامل لنمو المبيعات",
      descriptionEn: "A closed-loop engine driving cold social browsers into repeat brand ambassadors:",
      descriptionAr: "المحرك التسويقي الشامل لتحويل المشاهدات إلى أوردرات متكررة:",
      steps: [
        {
          titleEn: "Top-of-Funnel Tease (TOFU)",
          titleAr: "مرحلة الوعي (TOFU)",
          descEn: "High-tempo ASMR reels showcasing name laser cutting to ignite millions of impressions.",
          descAr: "ريلز سريعة تعرض التخصيص بالليزر ولمعان القطعة الذهبية لجذب المشاهدات المليونية.",
          icon: "Eye"
        },
        {
          titleEn: "Middle-of-Funnel Proof (MOFU)",
          titleAr: "مرحلة الاقتناع والمقارنة (MOFU)",
          descEn: "Tactile unboxing video proofs, durability benchmarks, and initial customer reviews.",
          descAr: "مقارنة الجودة، تجارب الـ Unboxing الحية، وتقييمات العملاء الأوائل.",
          icon: "CheckCircle"
        },
        {
          titleEn: "Bottom-of-Funnel Conversion (BOFU)",
          titleAr: "مرحلة الشراء الفوري (BOFU)",
          descEn: "Curated Tote + Fedora bundles paired with expedited 24-hour coastal resort dispatch.",
          descAr: "عروض الباقات (Tote + Hat Bundle) مع شحن سريع وتخصيص مجاني لفترة محدودة.",
          icon: "ShoppingBag"
        }
      ]
    }
  }
];
