export interface TeamMember {
  id: string;
  nameEn: string;
  nameAr: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  roleEn: string;
  roleAr: string;
  specialtyEn: string;
  specialtyAr: string;
  contributionEn: string;
  contributionAr: string;
  badgeEn: string;
  badgeAr: string;
  skillsEn: string[];
  skillsAr: string[];
  affiliationEn: string;
  affiliationAr: string;
}

export interface OriginMilestone {
  step: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  dateTagEn: string;
  dateTagAr: string;
  iconType: 'store' | 'hammer' | 'sparkles' | 'award';
}

export interface TeamSynergyMetric {
  value: string;
  labelEn: string;
  labelAr: string;
  descEn: string;
  descAr: string;
}

export const teamSynergyMetrics: TeamSynergyMetric[] = [
  {
    value: '3,885+',
    labelEn: 'Interactive Collaborative Messages',
    labelAr: 'رسالة ونقاش تفاعلي موثق',
    descEn: 'Intensive nightly strategy sessions uniting the team in "The Five Adventurers" channel.',
    descAr: 'نقاشات وميتنجات ليلية مكثفة جمعت الفريق في جروب "المغامرون الخمسة" خطوة بخطوة.'
  },
  {
    value: '70+',
    labelEn: 'Field Questions & Consumer Interviews',
    labelAr: 'سؤالاً بحثياً ومقابلة ميدانية',
    descEn: 'Exhaustive surveys in Sahel, Gouna, & Dahab uncovering authentic customer friction points.',
    descAr: 'استبيانات ومقابلات متعمقة مع عملاء الساحل والجونة ودهب لرصد المشاكل الحقيقية.'
  },
  {
    value: '18+',
    labelEn: 'Strategic Deliverables & Frameworks',
    labelAr: 'مستنداً وشيتاً استراتيجياً',
    descEn: 'End-to-end coverage across STP, 7Ps, CRM, 10-factor Action Plans, and SEO roadmaps.',
    descAr: 'تغطية شاملة لـ STP, CRM, 7Ps, Action Plans, Control Sheets, ومخططات الـ SEO.'
  },
  {
    value: '100%',
    labelEn: 'Equal Ownership & Shared Brotherhood',
    labelAr: 'شراكة وتكامل أخوي متكافئ',
    descEn: 'Collective excellence without individualism; blending unique talents into an authoritative benchmark.',
    descAr: 'عمل جماعي بلا تفرد؛ تكاملت فيه خبرات الفريق ليخرج المشروع كمرجع مشرف للجميع.'
  }
];

export const foundingTeamMembers: TeamMember[] = [
  {
    id: 'khaled-hassan',
    nameEn: 'Khaled Hassan',
    nameAr: 'خالد حسن',
    email: 'kh594229@gmail.com',
    phone: '+20 122 219 1897',
    whatsappUrl: 'https://wa.me/201222191897',
    roleEn: 'Market Research, Consumer Intelligence & Action/Control Systems',
    roleAr: 'أبحاث السوق، دراسة سلوك المستهلك، وخطط العمل والتحكم والقياس',
    specialtyEn: '70-Question Field Consumer Survey, Sahel & Red Sea Market Analysis, and 10-Factor Action/Control Systems',
    specialtyAr: 'أبحاث المستهلكين الميدانية (استبيان الـ 70 سؤالاً تحليلياً)، وتطوير جداول خطط العمل والتحكم والقياس',
    contributionEn: 'Spearheaded field artisan & consumer research across Sahel, El Gouna, and Dahab; formulated the comprehensive 70-question consumer interview framework; engineered the 10-factor Action Plan matrix and KPI measurement & control sheets.',
    contributionAr: 'قيادة أبحاث السوق الميدانية واستبيانات المستهلكين المعمقة (70 سؤالاً)، دراسة وتفكيك مشاكل حقائب الصيف والورش الحرفية، وتصميم جدول خطة العمل (Action Plan - 10 Factors) ومصفوفات القياس والتحكم.',
    badgeEn: 'Research & Control',
    badgeAr: 'الأبحاث والتحكم',
    skillsEn: ['Consumer Interviews (70 Qs)', 'Field Market Research', 'Action Plan Architecture', 'Control & KPI Systems', 'Competitive Analysis'],
    skillsAr: ['مقابلات المستهلكين (70 سؤالاً)', 'أبحاث السوق الميدانية', 'هيكلة خطط العمل (10 عوامل)', 'أنظمة القياس والتحكم', 'تحليل المنافسين'],
    affiliationEn: 'Information Technology Institute (ITI) — MCIT Egypt',
    affiliationAr: 'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات'
  },
  {
    id: 'mohamed-abdeldayem',
    nameEn: 'Mohamed Abd El Dayem',
    nameAr: 'محمد عبد الدايم',
    email: 'mabdeldayem293@gmail.com',
    phone: '+20 122 446 6333',
    whatsappUrl: 'https://wa.me/201224466333',
    roleEn: 'Brand Strategy, Positioning, STP, Personas & CRM Architecture',
    roleAr: 'استراتيجية التموضع، الـ STP، بناء الشخصيات، وهندسة الـ CRM والقمع',
    specialtyEn: 'Positioning Map Calibration, Brand DNA Formulation, Buyer Personas (Layla, Nour, Farida), and CRM Funnels',
    specialtyAr: 'هندسة خريطة وبيان التموضع الاستراتيجي، تحديد عناصر هوية البراند، وتطوير شخصيات المشترين ونظام الـ CRM',
    contributionEn: 'Architected the strategic positioning map and value proposition statement; established the full STP framework; crafted distinct buyer personas (Layla, Nour, Farida); and designed customer journey touchpoints with CRM funnel pipelines.',
    contributionAr: 'صياغة خريطة وبيان التموضع الاستراتيجي، تطبيق إطار الـ STP بالكامل، بناء شخصيات المشترين المستهدفة، ورسم خريطة رحلة العميل وهندسة قمع التسويق ونظام الـ CRM.',
    badgeEn: 'Strategy & STP',
    badgeAr: 'الاستراتيجية والتموضع',
    skillsEn: ['Positioning Maps', 'STP Framework', 'Buyer Personas', 'Customer Journey Mapping', 'CRM Architecture'],
    skillsAr: ['خرائط التموضع', 'إطار الـ STP', 'شخصيات المشترين', 'رحلة العميل', 'هندسة الـ CRM'],
    affiliationEn: 'Information Technology Institute (ITI) — MCIT Egypt',
    affiliationAr: 'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات'
  },
  {
    id: 'youssef-hisham',
    nameEn: 'Youssef Hisham',
    nameAr: 'يوسف هشام',
    email: 'youssefhisham.jockey@gmail.com',
    phone: '+20 121 266 9388',
    whatsappUrl: 'https://wa.me/201212669388',
    roleEn: 'Situational Analysis, 7Ps Tactics, Flower of Service & Communication Mix',
    roleAr: 'التحليل الموقفي، تكتيكات المزيج التسويقي 7Ps، زهرة الخدمات، والمزيج الاتصالي',
    specialtyEn: 'Macro & Micro Situational Audit, Extended 7Ps Marketing Mix Formulation, and Multi-channel Communications',
    specialtyAr: 'استخلاص رؤى القطاع، بناء عناصر الـ 7Ps، وهندسة المزيج الاتصالي المتكامل وزهرة الخدمات',
    contributionEn: 'Conducted the in-depth situational and competitive landscape audit; structured the extended 7Ps marketing mix tactics and Flower of Service framework; orchestrated the integrated marketing communication (IMC) strategy across digital and offline channels.',
    contributionAr: 'إجراء التحليل الموقفي الشامل للسوق والمنافسين، استخلاص الرؤى من منصات التواصل، صياغة تكتيكات المزيج التسويقي السبعة (7Ps)، وهندسة زهرة الخدمات والمزيج الاتصالي الرقمي والميداني.',
    badgeEn: 'Tactics & Channels',
    badgeAr: 'التكتيكات والقنوات',
    skillsEn: ['Situational Analysis', '7Ps Marketing Mix', 'Flower of Service', 'Integrated Communications', 'Social Intelligence'],
    skillsAr: ['التحليل الموقفي', 'المزيج التسويقي 7Ps', 'زهرة الخدمات', 'المزيج الاتصالي المتكامل', 'استخبارات السوشيال'],
    affiliationEn: 'Information Technology Institute (ITI) — MCIT Egypt',
    affiliationAr: 'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات'
  },
  {
    id: 'adham-mahmoud',
    nameEn: 'Adham Mahmoud',
    nameAr: 'أدهم محمود',
    email: 'adham.mahmoud.1928@gmail.com',
    phone: '+20 122 809 0110',
    whatsappUrl: 'https://wa.me/201228090110',
    roleEn: 'AI Content Strategy, Generative Media Production & AI Tool Benchmarking',
    roleAr: 'استراتيجيات محتوى الذكاء الاصطناعي، إنتاج الكرياتيف التوليدي، ومقارنة الأدوات',
    specialtyEn: 'Generative AI Visual Asset Synthesis, Persuasive Campaign Copywriting, and LLM/Tool Stack Benchmarking',
    specialtyAr: 'صياغة رسائل الحملات، إنتاج الصور والفيديوهات بالذكاء الاصطناعي، والمقارنة المعيارية للأدوات',
    contributionEn: 'Co-engineered the AI-powered digital campaign strategy; authored persuasive ad hooks and high-converting social copy; executed generative image and video prompts; and conducted rigorous benchmarking across cutting-edge AI creative tools.',
    contributionAr: 'المشاركة في بناء حملة التسويق بالذكاء الاصطناعي، كتابة نماذج ونصوص الإعلانات وبوستات السوشيال ميديا، إنتاج الكرياتيف التوليدي، وإجراء المقارنات المعيارية بين أدوات الـ AI.',
    badgeEn: 'Creative AI & Copy',
    badgeAr: 'الـ AI الإبداعي والكتابة',
    skillsEn: ['AI Prompt Engineering', 'Campaign Copywriting', 'Generative Visuals & Video', 'AI Tool Benchmarking', 'Creative Testing'],
    skillsAr: ['هندسة الأوامر (Prompts)', 'كتابة الإعلانات الإبداعية', 'الوسائط التوليدية للـ AI', 'المقارنة المعيارية للأدوات', 'اختبار الكرياتيف'],
    affiliationEn: 'Information Technology Institute (ITI) — MCIT Egypt',
    affiliationAr: 'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات'
  },
  {
    id: 'ahmed-issam',
    nameEn: 'Ahmed Issam Ramadan',
    nameAr: 'أحمد عصام رمضان',
    email: 'ahmedissam.personal@gmail.com',
    phone: '+20 100 854 7934',
    whatsappUrl: 'https://wa.me/201008547934',
    roleEn: 'AI Campaign Strategy, Generative Creative & Digital Systems Architecture',
    roleAr: 'استراتيجيات الذكاء الاصطناعي، المنظومة الرقمية، وهندسة التخصيص التفاعلي',
    specialtyEn: 'High-Res 2K Generative Visual Direction, Real-time Canvas Personalization Engine, and Full-Stack Platform Architecture',
    specialtyAr: 'هندسة حملات الـ AI التوليدي 2K، تصميم استوديو التخصيص التفاعلي بالليزر والذهب، وبناء المنظومة الرقمية',
    contributionEn: 'Led the technological and AI ecosystem; built the interactive live product personalization canvas studio (laser engraving & 18k gold foil rendering); produced the 2K generative advertising visuals; and architected & deployed the production showcase web application.',
    contributionAr: 'قيادة المسار التقني واستراتيجيات الـ AI، ابتكار وتطوير استوديو التخصيص التفاعلي بالليزر والذهب بـ Canvas، إنتاج الكرياتيف التوليدي بدقة 2K، وبناء وإطلاق المنصة الرقمية الحية على شبكة الإنترنت.',
    badgeEn: 'AI & Digital Systems',
    badgeAr: 'الـ AI والأنظمة الرقمية',
    skillsEn: ['AI Campaign Strategy', 'Generative Media (2K)', 'Live Canvas Studio Engine', 'Full-Stack Web Architecture', 'Workflow Automation'],
    skillsAr: ['استراتيجيات حملات الـ AI', 'ميديا توليدية 2K', 'محرك استوديو الـ Canvas', 'بناء المنصات الرقمية', 'أتمتة مسارات العمل'],
    affiliationEn: 'Information Technology Institute (ITI) — MCIT Egypt',
    affiliationAr: 'معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات'
  }
];

export const originStoryMilestones: OriginMilestone[] = [
  {
    step: '01',
    titleEn: 'Day Zero: The Empty Store & The Foundational Spark',
    titleAr: 'نقطة الصفر: متجر شوبيفاي فارغ وفكرة مجردة',
    descriptionEn: 'The journey began with an empty Shopify storefront and an unformed concept. The team gathered to solve a pivotal dilemma: How do we birth a distinct Egyptian summer lifestyle brand that defies the generic handicraft price-war trap?',
    descriptionAr: 'بدأ المشروع بحساب شوبيفاي فارغ تماماً واسم مقترح بدون هوية أو منتجات أو استراتيجية. اجتمع الفريق لوضع إجابة لسؤال جوهري: كيف نبتكر علامة صيفية مصرية ذات قيمة مدركة تبتعد عن فخ المنافسة السعرية؟',
    dateTagEn: 'Foundational Discovery',
    dateTagAr: 'المرحلة التأسيسية الأولى',
    iconType: 'store'
  },
  {
    step: '02',
    titleEn: 'Artisan Immersion & 70-Question Consumer Intelligence',
    titleAr: 'النزول الميداني وأبحاث المستهلكين المعمقة (70 سؤالاً)',
    descriptionEn: 'The team conducted field visits to Egyptian artisan workshops and executed deep consumer research with 70 rigorous analytical questions, dissecting summer shoppers in Sahel, Gouna, and Dahab to uncover lining, handle, and durability flaws.',
    descriptionAr: 'قام الفريق بنزول ميداني للورش الحرفية بمصر، وأجرى استبيانات ومقابلات معمقة تضمنت 70 سؤالاً تحليلياً لدراسة سلوك عملاء الساحل ودهب والجونة، واكتشاف مشاكل الشنط التقليدية والبطانات والخامات.',
    dateTagEn: 'Market Intelligence',
    dateTagAr: 'أبحاث السوق وهندسة الجودة',
    iconType: 'hammer'
  },
  {
    step: '03',
    titleEn: 'Breakthrough: Laser Engraving, Gold Foil & 7Ps Architecture',
    titleAr: 'ابتكار منظومة التخصيص بالليزر والذهب وتكتيكات الـ 7Ps',
    descriptionEn: 'The team formulated an integrated value proposition combining positioning, extended 7Ps marketing tactics, and an innovative on-demand personalization system (18k metallic foil & precision laser engraving) elevating gross margins by +45%.',
    descriptionAr: 'تكاملت جهود الفريق بين صياغة استراتيجية التموضع والـ STP، وتكتيكات الـ 7Ps والمزيج الاتصالي، وابتكار نظام حفر الاسم بالليزر والطلاء بذهب 18k الذي رفع هامش الربح الإجمالي بنسبة 45%.',
    dateTagEn: 'Value Innovation',
    dateTagAr: 'الابتكار والـ UVP',
    iconType: 'sparkles'
  },
  {
    step: '04',
    titleEn: 'The Graduation Masterpiece & ITI Capstone Defense',
    titleAr: 'تتويج المشروع وتسليم المنظومة المتكاملة لمعهد ITI',
    descriptionEn: 'Documenting every strategic milestone, AI creative lab, paid ad roadmap, and live web application into an enduring, interactive master benchmark honoring the collective spirit of "The Five Adventurers".',
    descriptionAr: 'توثيق كافة فصول دراسة الحالة، معمل الـ AI التوليدي، ومخططات الإعلانات والـ SEO، وبناء هذه المنصة الرقمية كعمل جماعي يخلد الجهد المشترك لفريق "المغامرون الخمسة".',
    dateTagEn: 'Capstone Defense',
    dateTagAr: 'التسليم النهائي والتوثيق',
    iconType: 'award'
  }
];
