export interface TeamMember {
  id: string;
  name: string;
  roleAr: string;
  roleEn: string;
  specialtyAr: string;
  contributionAr: string;
  badge: string;
  skills: string[];
}

export interface OriginMilestone {
  step: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  dateTag: string;
  iconType: 'store' | 'hammer' | 'sparkles' | 'award';
}

export interface TeamSynergyMetric {
  value: string;
  labelAr: string;
  labelEn: string;
  descAr: string;
}

export const teamSynergyMetrics: TeamSynergyMetric[] = [
  {
    value: '3,885+',
    labelAr: 'رسالة ونقاش تفاعلي',
    labelEn: 'WhatsApp Collaboration Messages',
    descAr: 'نقاشات وميتنجات ليلية مكثفة جمعت الفريق في جروب "المغامرون الخمسة" خطوة بخطوة'
  },
  {
    value: '70+',
    labelAr: 'سؤالاً بحثياً ومقابلة ميدانية',
    labelEn: 'In-Depth Consumer Survey Questions',
    descAr: 'استبيانات ومقابلات متعمقة مع عملاء الساحل والجونة ودهب لرصد المشاكل الحقيقية'
  },
  {
    value: '18+',
    labelAr: 'مستنداً وشيتاً استراتيجياً',
    labelEn: 'Strategic Sheets & Frameworks',
    descAr: 'تغطية شاملة لـ STP, CRM, 7Ps, Action Plans, Control Sheets, ومخططات الـ SEO'
  },
  {
    value: '100%',
    labelAr: 'شراكة وتكامل أخوي',
    labelEn: 'Shared Ownership & Brotherhood',
    descAr: 'عمل جماعي بلا تفرد؛ تكاملت فيه خبرات الفريق ليخرج المشروع كمرجع مشرف للجميع'
  }
];

export const foundingTeamMembers: TeamMember[] = [
  {
    id: 'khaled-hassan',
    name: 'خالد حسن (Khaled Hassan)',
    roleAr: 'أبحاث السوق، دراسة سلوك المستهلك، وخطط التحكم والقياس',
    roleEn: 'Market Research, Consumer Intelligence & Action/Control Systems',
    specialtyAr: 'أبحاث المستهلكين الميدانية (70 سؤالاً تحليلياً)، وتطوير جداول خطط العمل والتحكم',
    contributionAr: 'قيادة أبحاث السوق الميدانية، إعداد استبيانات ومقابلات العملاء الموسعة، وتصميم جدول خطة العمل (Action Plan - 10 Factors) ومصفوفات القياس والتحكم (Control & Measurement Sheets).',
    badge: 'Research & Control',
    skills: ['Consumer Interviews (70 Qs)', 'Market Research', 'Action Plan Architecture', 'Control & KPI Systems']
  },
  {
    id: 'mohamed-abdeldayem',
    name: 'محمد عبد الدايم (Mohamed Abd El Dayem)',
    roleAr: 'استراتيجية التموضع، بناء الشخصيات، وهندسة الـ CRM والقمع',
    roleEn: 'Brand Strategy, Positioning, STP, Personas & CRM Architecture',
    specialtyAr: 'هندسة خريطة التموضع (Positioning Map)، صياغة الهوية، وبناء مسارات الـ CRM',
    contributionAr: 'بناء خريطة وبيان التموضع الاستراتيجي، تحديد عناصر هوية البراند، تطوير شخصيات المشترين المستهدفة (Buyer Personas)، خريطة رحلة العميل، وتصميم قمع التسويق ونظام الـ CRM.',
    badge: 'Strategy & STP',
    skills: ['Positioning Maps', 'STP Framework', 'Buyer Personas', 'Customer Journey', 'CRM Architecture']
  },
  {
    id: 'youssef-khaled',
    name: 'يوسف خالد (Youssef Khaled)',
    roleAr: 'التحليل الموقفي، تكتيكات المزيج التسويقي 7Ps، وقنوات التواصل',
    roleEn: 'Situational Analysis, 7Ps Tactics, Flower of Service & Communication Mix',
    specialtyAr: 'استخلاص رؤى القطاع، بناء عناصر الـ 7Ps، وهندسة المزيج الاتصالي المتكامل',
    contributionAr: 'إجراء التحليل الموقفي الشامل للسوق والمنافسين، استخلاص الرؤى من منصات السوشيال ميديا، وصياغة تكتيكات عناصر المزيج التسويقي السبعة (7Ps)، وزهرة الخدمات، والمزيج الاتصالي الرقمي والميداني.',
    badge: 'Tactics & Channels',
    skills: ['Situational Analysis', '7Ps Marketing Mix', 'Flower of Service', 'Communication Mix', 'Industry Insights']
  },
  {
    id: 'ahmed-issam',
    name: 'أحمد عصام رمضان (Ahmed Issam Ramadan)',
    roleAr: 'استراتيجيات الذكاء الاصطناعي، المنظومة الرقمية، وهندسة التخصيص',
    roleEn: 'AI Campaign Strategy, Generative Creative & Digital Systems Architecture',
    specialtyAr: 'هندسة حملات الـ AI، تصميم استوديو التخصيص الحي، وأتمتة مسارات النمو الرقمي',
    contributionAr: 'قيادة مسار الذكاء الاصطناعي، بناء منصة المعاينة الحية واستوديو التخصيص بالليزر والذهب، إنتاج الكرياتيف التوليدي للصور بدقة 2K، وأتمتة مسارات العمل الرقمية للمشروع.',
    badge: 'AI & Digital Systems',
    skills: ['AI Campaign Strategy', 'Generative Media (2K)', 'Live Canvas Studio', 'Digital Architecture', 'Automation']
  },
  {
    id: 'adham',
    name: 'أدهم (Adham)',
    roleAr: 'استراتيجيات محتوى الـ AI، إنتاج الكرياتيف التوليدي، والمقارنة المعيارية للأدوات',
    roleEn: 'AI Content Strategy, Generative Media Production & AI Tool Benchmarking',
    specialtyAr: 'صياغة رسائل الحملات، إنتاج الصور والفيديوهات بالذكاء الاصطناعي، ومقارنة الأدوات',
    contributionAr: 'المشاركة في بناء حملة التسويق الرقمي بالذكاء الاصطناعي، كتابة نماذج الإعلانات وبوستات السوشيال ميديا، إنتاج الكرياتيف التوليدي، وإجراء المقارنات المعيارية بين أدوات الذكاء الاصطناعي.',
    badge: 'Creative AI & Copy',
    skills: ['AI Prompt Engineering', 'Campaign Copywriting', 'Generative Visuals & Video', 'AI Tool Benchmarking']
  }
];

export const originStoryMilestones: OriginMilestone[] = [
  {
    step: '01',
    titleAr: 'نقطة الصفر: متجر شوبيفاي فارغ وفكرة مجردة',
    titleEn: 'Day Zero: The Empty Shopify Store & The Initial Spark',
    descriptionAr: 'بدأ المشروع بحساب شوبيفاي فارغ تماماً واسم مقترح بدون هوية أو منتجات أو استراتيجية. اجتمع الفريق لوضع إجابة لسؤال جوهري: كيف نبتكر علامة صيفية مصرية ذات قيمة مدركة تبتعد عن فخ المنافسة السعرية؟',
    dateTag: 'المرحلة التأسيسية الأولى',
    iconType: 'store'
  },
  {
    step: '02',
    titleAr: 'النزول الميداني وأبحاث المستهلكين المعمقة (70 سؤالاً)',
    titleEn: 'Artisan Discovery & 70-Question Consumer Intelligence',
    descriptionAr: 'قام الفريق بنزول ميداني للورش الحرفية بمصر، وأجرى استبيانات ومقابلات معمقة تضمنت 70 سؤالاً تحليلياً لدراسة سلوك عملاء الساحل ودهب والجونة، واكتشاف مشاكل الشنط التقليدية والبطانات والخامات.',
    dateTag: 'أبحاث السوق وهندسة الجودة',
    iconType: 'hammer'
  },
  {
    step: '03',
    titleAr: 'ابتكار منظومة التخصيص بالليزر والذهب والـ 7Ps',
    titleEn: 'The Innovation: Laser Engraving, Gold Foil & Full Marketing Mix',
    descriptionAr: 'تكاملت جهود الفريق بين صياغة استراتيجية التموضع والـ STP، وتكتيكات الـ 7Ps والمزيج الاتصالي، وابتكار نظام حفر الاسم بالليزر والطلاء بذهب 18k الذي رفع هامش الربح الإجمالي بنسبة 45%.',
    dateTag: 'الابتكار والـ UVP',
    iconType: 'sparkles'
  },
  {
    step: '04',
    titleAr: 'تتويج المشروع وتسليم المنظومة المتكاملة لمعهد ITI',
    titleEn: 'The Integrated Ecosystem & ITI Graduation Masterpiece',
    descriptionAr: 'توثيق كافة فصول دراسة الحالة، معمل الـ AI التوليدي، ومخططات الإعلانات والـ SEO، وبناء هذه المنصة الرقمية كعمل جماعي يخلد الجهد المشترك لفريق "المغامرون الخمسة".',
    dateTag: 'التسليم النهائي والتوثيق',
    iconType: 'award'
  }
];
