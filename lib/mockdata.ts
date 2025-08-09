// Mock Data for Egypt Marketing Portfolio
// This file contains all temporary data until backend integration

export interface Section {
  id: string;
  title: string;
  type?: string;
}

export interface PortfolioItem {
  sector: string;
  count: number;
  color: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: string;
  color?: string;
  items?: string[];
  features?: string[];
}

export interface Value {
  title: string;
  desc: string;
  icon: any;
  color: string;
}

export interface Metric {
  title: string;
  value: string;
  desc: string;
  icon: any;
  color: string;
}

export interface CaseStudy {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  type: string;
  icon: any;
  title: string;
  details: string[];
  color: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  color: string;
}

// Company Information
export const companyInfo = {
  name: "شركة مصر للتحليل والدراسات التسويقية",
  tagline: "تقديم مفهوم جديد للاستثمار في التسويق",
  foundedYear: 2021,
  totalProjects: 200,
  website: "https://masr-group.com",
  email: "info@masr-group.com",
  phones: ["01030331434", "01020137353"],
  address: {
    street: "قطعة 659 – السياحية (أ)",
    city: "حدائق أكتوبر – محافظة الجيزة",
    country: "مصر"
  }
};

// Navigation Sections
export const sections: Section[] = [
  { id: "intro", title: "مقدمة", type: "hero" },
  { id: "vision", title: "رؤيتنا", type: "text" },
  { id: "mission", title: "رسالتنا", type: "text" },
  { id: "goal", title: "هدفنا", type: "cards" },
  { id: "values", title: "قيمنا الجوهرية", type: "grid" },
  { id: "services", title: "خدماتنا", type: "grid" },
  { id: "design", title: "التصميم الإبداعي والجرافيك", type: "content" },
  { id: "production", title: "الإنتاج الفني والمحتوى المرئي", type: "cards" },
  { id: "development", title: "البرمجيات والمواقع", type: "grid" },
  { id: "portfolio", title: "سابقة أعمالنا", type: "gallery" },
  { id: "why-us", title: "لماذا تعمل معنا؟", type: "grid" },
  { id: "conclusion", title: "الخاتمة", type: "hero" },
  { id: "contact", title: "تواصل معنا", type: "contact" },
  { id: "final", title: "الصفحة الختامية", type: "footer" }
];

// Portfolio Data by Sector
export const portfolioData: PortfolioItem[] = [
  { sector: "عقارات", count: 49, color: "bg-blue-500" },
  { sector: "مصانع", count: 18, color: "bg-green-500" },
  { sector: "متاجر إلكترونية", count: 17, color: "bg-purple-500" },
  { sector: "مطاعم", count: 12, color: "bg-orange-500" },
  { sector: "جمعيات خيرية", count: 11, color: "bg-red-500" },
  { sector: "تعليم وتدريب", count: 10, color: "bg-indigo-500" },
  { sector: "تشطيبات وديكور", count: 6, color: "bg-pink-500" },
  { sector: "مقاولات", count: 5, color: "bg-yellow-500" },
  { sector: "صالونات تجميل", count: 5, color: "bg-cyan-500" },
  { sector: "شركات تجارة عامة", count: 4, color: "bg-teal-500" },
  { sector: "محلات تجارية", count: 4, color: "bg-lime-500" },
  { sector: "مستحضرات تجميل", count: 4, color: "bg-rose-500" },
  { sector: "شركات صناعة محتوى", count: 4, color: "bg-violet-500" },
  { sector: "شركات تكييف وتبريد", count: 3, color: "bg-sky-500" },
  { sector: "شركات خدمات متنوعة", count: 3, color: "bg-emerald-500" },
  { sector: "شركات تنقية مياه", count: 3, color: "bg-blue-400" },
  { sector: "مؤسسات خدمات مالية", count: 3, color: "bg-green-400" },
  { sector: "عيادات", count: 3, color: "bg-red-400" },
  { sector: "حضانات", count: 2, color: "bg-purple-400" },
  { sector: "شركات مكافحة حشرات", count: 2, color: "bg-orange-400" }
];

// Company Values
export const companyValues = [
  {
    title: "المنهجية",
    desc: "نبدأ من البيانات، ونبني على التحليل، ولا نتخذ قرارًا دون فهم كامل للسياق.",
    icon: "BarChart3",
    color: "text-blue-400"
  },
  {
    title: "المسؤولية",
    desc: "نؤمن أن نجاح العميل هو مسؤوليتنا، ونتعامل مع كل مشروع كأنه مشروعنا الخاص.",
    icon: "Shield",
    color: "text-green-400"
  },
  {
    title: "الوضوح",
    desc: "نُبقي الصورة كاملة أمام العميل: بالأرقام، والنتائج، والتحديات.",
    icon: "Eye",
    color: "text-yellow-400"
  },
  {
    title: "التميّز",
    desc: "لا ننسخ، لا نكرر، لا نتبع القوالب الجاهزة… بل نصنع لكل عميل حلًا فريدًا.",
    icon: "Star",
    color: "text-purple-400"
  },
  {
    title: "الاستدامة",
    desc: "نبحث عن نتائج تدوم، لا حملات تنتهي مع آخر يوم إعلان.",
    icon: "TrendingUp",
    color: "text-indigo-400"
  }
];

// Main Services
export const mainServices: Service[] = [
  {
    title: "الاستشارات التسويقية",
    desc: "كثير من أصحاب الأعمال يُنفذون حملات، يُنفقون ميزانيات، وينتظرون نتائج… لكن دون بوصلة.",
    icon: "Users",
    color: "from-blue-600 to-indigo-600",
    items: [
      "تحليل دقيق لأدائك الحالي",
      "مراجعة شاملة لحملاتك",
      "دراسة لعمق جمهورك",
      "نظرة فنية على موقعك الإلكتروني",
      "قراءة واضحة لمنافسيك وسوقك"
    ]
  },
  {
    title: "تحسين محركات البحث (SEO)",
    desc: "أن تكون جيدًا لا يكفي… المهم أن يتم العثور عليك",
    icon: "Search",
    color: "from-green-600 to-teal-600",
    items: [
      "تحليل بنية موقعك الإلكتروني فنيًا",
      "تحسين المحتوى ليتحدث بلغة جمهورك",
      "بناء روابط داخلية وخارجية",
      "متابعة الأداء وتحليل النتائج"
    ]
  },
  {
    title: "التسويق عبر محركات البحث (SEM)",
    desc: "عندما لا تنتظر أن يجدك العميل… بل تتوجه إليه مباشرة",
    icon: "MousePointer",
    color: "from-violet-600 to-purple-700",
    items: [
      "إعداد حملات Google Ads احترافية",
      "استهداف دقيق للكلمات المفتاحية",
      "تحسين معدل التحويل والعائد",
      "تحليل وتتبع الأداء المستمر"
    ]
  },
  {
    title: "التسويق عبر وسائل التواصل الاجتماعي",
    desc: "لأن الجمهور لا يبحث فقط… بل يتفاعل، ويتحدث، ويتأثر",
    icon: "Share2",
    color: "from-blue-600 to-indigo-700",
    items: [
      "إدارة صفحات فيسبوك وإنستجرام",
      "إنتاج محتوى تفاعلي وجذاب",
      "حملات إعلانية مستهدفة",
      "تحليل التفاعل وبناء المجتمع"
    ]
  },
  {
    title: "إدارة الحملات الإعلانية المدفوعة",
    desc: "الميزانيات تُستهلك، والمنافسة تزداد، والسوق يتغير باستمرار",
    icon: "TrendingUp",
    color: "from-rose-600 to-pink-700",
    items: [
      "تخطيط الميزانيات وتوزيعها",
      "استهداف الجمهور المناسب",
      "تحسين الحملات لأفضل عائد",
      "تقارير مفصلة عن الأداء"
    ]
  }
];

// Design Services
export const designServices: Service[] = [
  {
    title: "تصميم الشعارات والهوية البصرية",
    desc: "لأن الشعار ليس مجرد رسمة… بل توقيع بصري يُعبّر عنك",
    icon: "🎨",
    items: [
      "تصميم شعارات احترافية",
      "بناء دليل متكامل للهوية البصرية",
      "تطبيق الهوية على مختلف الوسائط"
    ]
  },
  {
    title: "تصميمات إعلانية تترك أثرًا",
    desc: "العميل لا يقرأ كثيرًا… لكنه يرى كل شيء",
    icon: "📱",
    items: [
      "تصميم محتوى يومي وإعلاني",
      "إعلانات رقمية بأحجام مختلفة",
      "تصاميم ترويجية تعزز البيع"
    ]
  },
  {
    title: "موشن جرافيك وفيديوهات",
    desc: "تنطق بما لا تقوله الكلمات",
    icon: "🎬",
    items: [
      "كتابة سيناريو وتسلسل سردي",
      "تصميم وتحريك العناصر",
      "دمج مؤثرات صوتية وبصرية"
    ]
  }
];

// Production Services
export const productionServices: Service[] = [
  {
    title: "إنتاج وتصوير الإعلانات التجارية",
    desc: "عندما تكون الصورة هي رسالتك… لا مجال للصدفة",
    icon: "Camera",
    color: "from-red-600 to-rose-700",
    items: [
      "إعداد السيناريو والمحتوى الإبداعي",
      "تصوير احترافي بأحدث المعدات",
      "إخراج فني يعكس القيمة المضافة",
      "مونتاج وتحرير بجودة سينمائية"
    ]
  },
  {
    title: "التصوير الفوتوغرافي والفيديو الخارجي",
    desc: "الصورة القوية… تروي القصة دون تعليق",
    icon: "Camera",
    color: "from-blue-600 to-cyan-700",
    items: [
      "تصوير فوتوغرافي عالي الجودة",
      "فيديوهات توثيقية أو ترويجية",
      "إخراج مرئي احترافي",
      "معالجة بصرية متقدمة"
    ]
  },
  {
    title: "تصوير المواقع والمساحات الداخلية",
    desc: "لأن المكان هو جزء من التجربة",
    icon: "Building2",
    color: "from-emerald-600 to-green-700",
    items: [
      "تصوير داخلي احترافي",
      "معالجة لونية تُبرز جمالية المكان",
      "إخراج بصري للحملات",
      "تصوير معماري متخصص"
    ]
  },
  {
    title: "تصوير الستوب موشن",
    desc: "الحركة البسيطة تصنع دهشة بصرية",
    icon: "Play",
    color: "from-purple-600 to-violet-700",
    items: [
      "إعداد السيناريو والتحريك الإبداعي",
      "تصوير تسلسلي احترافي",
      "دمج صوتي وبصري متقن",
      "تقنيات حديثة للحركة"
    ]
  },
  {
    title: "تصوير الدرون والفيديوهات الجوية",
    desc: "لأن الرؤية من الأعلى… تمنحك بعدًا مختلفًا",
    icon: "Globe",
    color: "from-orange-600 to-amber-700",
    items: [
      "تصوير احترافي بطائرات بدون طيار",
      "إخراج ديناميكي للمواقع الكبرى",
      "مونتاج جذّاب يعزز الانبهار",
      "لقطات جوية سينمائية"
    ]
  },
  {
    title: "إنتاج المحتوى التفاعلي والرقمي",
    desc: "المحتوى الذي يجذب ويُحوّل الزوار إلى عملاء",
    icon: "Sparkles",
    color: "from-pink-600 to-rose-700",
    items: [
      "محتوى تفاعلي للمنصات الرقمية",
      "رسوم متحركة ثلاثية الأبعاد",
      "محتوى واقع افتراضي ومعزز",
      "تجارب بصرية غامرة"
    ]
  }
];

// Development Services
export const developmentServices: Service[] = [
  {
    title: "تصميم وتطوير مواقع الويب",
    desc: "موقعك الإلكتروني ليس مجرد نافذة عرض… بل هو مقر شركتك في العالم الرقمي",
    icon: "Monitor",
    features: [
      "تصميم مرن وجذّاب",
      "أداء تقني عالي",
      "تكامل مع أنظمة التحليل",
      "توافق كامل مع الأجهزة"
    ]
  },
  {
    title: "تصميم وتطوير تطبيقات الموبايل",
    desc: "هاتف العميل هو أقرب مكان يمكن أن تتواجد فيه علامتك",
    icon: "Smartphone",
    features: [
      "تجربة استخدام سلسة",
      "برمجة قوية ومتجاوبة",
      "دعم فني مستمر",
      "تطبيقات Android وiOS"
    ]
  },
  {
    title: "برمجيات الإدارة المتخصصة",
    desc: "لأن كل نشاط ناجح يحتاج إلى نظام قوي يُدير التفاصيل",
    icon: "Database",
    features: [
      "برامج إدارة الشركات",
      "برامج تنظيم البيانات",
      "برامج إدارة العيادات",
      "أنظمة مخصصة"
    ]
  }
];

// Performance Metrics
export const performanceMetrics = [
  {
    title: "معدل التحوّل",
    value: "4%",
    desc: "متجاوزين المتوسط السوقي",
    icon: "TrendingUp",
    color: "text-green-600"
  },
  {
    title: "معدل النقر",
    value: "2.4%",
    desc: "خفض التكلفة وزيادة العملاء",
    icon: "MousePointer",
    color: "text-blue-600"
  },
  {
    title: "العائد على الاستثمار",
    value: "4X",
    desc: "متوسط العائد على كل جنيه",
    icon: "BarChart3",
    color: "text-purple-600"
  },
  {
    title: "الحملات المُدارة",
    value: "800+",
    desc: "حملة رقمية باحتراف",
    icon: "Globe",
    color: "text-orange-600"
  },
  {
    title: "مدة تحقيق النتائج",
    value: "30-45",
    desc: "يوماً من بداية التنفيذ",
    icon: "Zap",
    color: "text-red-600"
  }
];

// Case Studies
export const caseStudies: CaseStudy[] = [
  {
    title: "قطاع العقارات",
    desc: "مضاعفة عدد الاستفسارات بنسبة +135% في أول شهرين",
    icon: "🏘️",
    color: "bg-blue-500"
  },
  {
    title: "قطاع التعليم",
    desc: "معدل تحويل بلغ 9.4%، ثلاثة أضعاف المتوسط المعتاد",
    icon: "🎓",
    color: "bg-green-500"
  },
  {
    title: "متجر إلكتروني",
    desc: "خفض تكلفة الاكتساب بنسبة 41% من خلال تحسين الاستهداف",
    icon: "🛍️",
    color: "bg-purple-500"
  }
];

// Contact Information
export const contactInfo = [
  {
    type: "phone",
    icon: "Phone",
    title: "الهاتف",
    details: ["01030331434", "01020137353"],
    color: "text-blue-600"
  },
  {
    type: "email",
    icon: "Mail",
    title: "البريد الإلكتروني",
    details: ["info@masr-group.com"],
    color: "text-green-600"
  },
  {
    type: "address",
    icon: "MapPin",
    title: "العنوان",
    details: ["قطعة 659 – السياحية (أ)", "حدائق أكتوبر – محافظة الجيزة"],
    color: "text-red-600"
  },
  {
    type: "website",
    icon: "Globe",
    title: "الموقع الإلكتروني",
    details: ["masr-group.com"],
    color: "text-purple-600"
  }
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: "فيسبوك",
    handle: "MasrAnalysis",
    color: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  },
  {
    name: "إنستجرام",
    handle: "masr_analysis",
    color: "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
  },
  {
    name: "تيكتوك",
    handle: "masr_analysis",
    color: "border-black text-black hover:bg-black hover:text-white"
  }
];

// Content Sections
export const contentSections = {
  intro: {
    title: "مرحباً بكم في شركة مصر للتحليل والدراسات التسويقية",
    subtitle: "في عالم لم يعد التسويق فيه مجرد وسيلة للظهور، بل أداة بقاء وتوسّع، يصبح الفارق الحقيقي بين شركة تنمو، وأخرى تتراجع… هو منهجية التفكير، ودقّة القرار، ووضوح الرؤية.",
    description: "في \"مصر للتحليل والدراسات التسويقية\"، لا ننظر إلى التسويق كحملات مؤقتة، بل كاستثمار استراتيجي طويل المدى، يُبنى على التحليل، ويقوده التخطيط، وتدعمه الخبرة."
  },
  vision: {
    title: "رؤيتنا",
    content: "أن نصبح الخيار الأول للشركات التي تُدرك أن النجاح يبدأ من تحليل واعٍ، وتخطيط ذكي، وتسويق يُدار كأداة استثمار لا كعبء على الميزانية.",
    subtitle: "نطمح إلى ترسيخ ثقافة التسويق القائم على البيانات، وقيادة تحوّل حقيقي في طريقة تعامل السوق العربي مع قراراته التسويقية."
  },
  mission: {
    title: "رسالتنا",
    content: "نحن نُساعد الشركات على تحويل فوضى الخيارات التسويقية إلى قرارات واضحة ومؤثرة.",
    subtitle: "نُقدّم حلولًا مبنية على فهم الواقع، تحليل المنافسة، واستراتيجية قابلة للتنفيذ، تضمن أن كل خطوة تسويقية تقترب بالمشروع من أهدافه، لا تبتعد عنه."
  },
  goal: {
    title: "هدفنا",
    content: "هدفنا أن يكون لكل استثمار تسويقي قيمة حقيقية، ولكل خطوة تأثير ملموس، ولكل خطة نتائج قابلة للقياس.",
    subtitle: "نسعى لأن نصبح العقل التحليلي والمحرّك الإبداعي وراء قصص النجاح القادمة في السوق المصري والعربي."
  },
  conclusion: {
    title: "الخاتمة",
    content: "في \"مصر للتحليل والدراسات التسويقية\"، نؤمن أن النجاح في عالم اليوم لا يُقاس فقط بعدد المتابعين أو حجم الظهور… بل بقيمة كل خطوة، ودقّة كل قرار، وتأثير كل حملة.",
    subtitle: "نحن لا نُقدّم خدمات جاهزة، بل نُصمّم حلولًا تسويقية متكاملة تنبع من واقعك، وتخاطب جمهورك، وتدفع مشروعك نحو النمو الحقيقي والمستدام.",
    cta: "دعنا نبدأ قصة نجاح جديدة… دعنا نكون فريقك التسويقي الحقيقي"
  },
  services: {
    title: "خدماتنا",
    subtitle: "نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية جميع احتياجاتكم التسويقية والتقنية"
  },
  design: {
    title: "التصميم الإبداعي والجرافيك",
    subtitle: "لأن أول انطباع... لا يُمنح مرتين",
    description: "في عالم تُحسم فيه القرارات خلال ثوانٍ، لا يكفي أن تُقدّم محتوى جيدًا، بل يجب أن يكون مرئيًا، مشوّقًا، ويعكس شخصيتك التجارية بوضوح وأناقة."
  },
  production: {
    title: "الإنتاج الفني والمحتوى المرئي",
    subtitle: "لأن الصورة أقوى من ألف كلمة… والمشهد أقوى من ألف فكرة"
  },
  development: {
    title: "البرمجيات والمواقع",
    subtitle: "الواجهة الرقمية ليست مجرد حضور… بل امتداد حقيقي لنشاطك"
  },
  portfolio: {
    title: "سابقة أعمالنا",
    subtitle: `على مدار أكثر من ${companyInfo.totalProjects} مشروع في السوق المصري والعربي`,
    description: "عملنا مع مجموعة واسعة من العملاء في مختلف القطاعات، مما أكسبنا خبرة عملية عميقة، ومهارة في تخصيص الحلول التسويقية بما يتناسب مع طبيعة كل نشاط.",
    conclusion: "تنوّع القطاعات التي تعاملنا معها يعكس مرونتنا وفهمنا العميق للسوق، وقدرتنا على تقديم حلول واقعية وقابلة للتنفيذ، مهما اختلف النشاط أو حجم المشروع."
  },
  whyUs: {
    title: "لماذا تعمل معنا؟",
    subtitle: "لأننا لا نُقدّم وعودًا… بل نتائج",
    metricsTitle: "مؤشرات الأداء التي تهمك"
  },
  contact: {
    title: "تواصل معنا",
    subtitle: "🟢 كن على بُعد خطوة واحدة من خطة تسويقية تصنع الفرق",
    socialTitle: "تابعنا على وسائل التواصل الاجتماعي",
    motto: "نحن لا ننتظر الفرص… نحن نخلقها."
  },
  final: {
    motto: "نؤمن أن كل مشروع يستحق خطة… وكل خطة يجب أن تُبنى على علم وتحليل… وكل تحليل يجب أن يُترجم إلى نمو حقيقي.",
    footer: "مع تحيات فريق مصر للتحليل والدراسات التسويقية",
    copyright: `© 2024 ${companyInfo.name}. جميع الحقوق محفوظة.`
  }
};

// Why Choose Us Reasons
export const whyChooseUsReasons = [
  "يُفكّر تحليليًا… وينفّذ إبداعيًا",
  "يربط بين الاستراتيجية والتنفيذ",
  "يضع أهدافك نصب عينيه من أول خطوة",
  "يملك خبرة في أكثر من 200 مشروع بمجالات مختلفة",
  "لا يتعامل مع التسويق كترف، بل كاستثمار يجب أن يعود"
];

// Working System Steps
export const workingSystemSteps = [
  "تحليل أولي",
  "خطة تنفيذ محددة بالأهداف الزمنية",
  "متابعة من مدير حساب",
  "تقارير دورية شفافة"
];

// Add service descriptions
export const serviceDescriptions = {
  marketing: "كثير من أصحاب الأعمال يُنفذون حملات، يُنفقون ميزانيات، وينتظرون نتائج… لكن دون بوصلة. في \"مصر للتحليل والدراسات التسويقية\"، لا نأتي بالحلول الجاهزة، بل نصمم لك خارطة طريق مبنية على:",
  seo: "في عالم رقمي يعتمد فيه العملاء على محركات البحث لاتخاذ قراراتهم، أصبحت الصدارة في نتائج البحث ضرورة تنافسية، لا مجرد ميزة إضافية.",
  seoGoal: "🎯 لأن التواجد في الصفحة الأولى ليس هدفًا في حد ذاته… بل وسيلة للوصول إلى العميل، وتحقيق التحويل، وتعظيم العائد"
};

// Header Constants (texts that appear in header navigation)
export const headerTexts = {
  contactButton: "تواصل معنا"
};

// Hero Section Data
export const heroSectionData = {
  welcomeText: "مرحباً بكم في",
  companyNameDisplay: "مصر للتحليل والدراسات التسويقية",
  startJourneyButton: "ابدأ رحلتك معنا",
  discoverServicesButton: "اكتشف خدماتنا",
  sinceYear: "منذ عام",
  moreThan: "أكثر من",
  projectText: "مشروع",
  marketDescription: "في السوق المصري والعربي"
};

// Vision Section Data
export const visionSectionData = {
  badge: "رؤيتنا للمستقبل"
};

// Mission Section Data
export const missionSectionData = {
  badge: "مهمتنا الأساسية"
};

// Goal Section Data
export const goalSectionData = {
  badge: "هدفنا الاستراتيجي"
};

// Values Section Data
export const valuesSectionData = {
  badge: "قيمنا الجوهرية",
  title: "القيم التي نؤمن بها"
};

// Design Section Data
export const designSectionData = {
  badge: "التصميم الإبداعي",
  title: "التصميم الإبداعي والجرافيك",
  subtitle: "لأن أول انطباع... لا يُمنح مرتين"
};

// Services Section Data
export const servicesSectionData = {
  badge: "خدماتنا المتميزة",
  title: "خدمات تسويقية متكاملة",
  subtitle: "نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية جميع احتياجاتكم التسويقية والتقنية"
};

// Production Section Data
export const productionSectionData = {
  badge: "الإنتاج الإبداعي",
  title: "الإنتاج الفني والمحتوى المرئي",
  subtitle: "لأن الصورة أقوى من ألف كلمة… والمشهد أقوى من ألف فكرة"
};

// Development Section Data
export const developmentSectionData = {
  badge: "التطوير التقني",
  title: "البرمجيات والمواقع",
  subtitle: "الواجهة الرقمية ليست مجرد حضور… بل امتداد حقيقي لنشاطك"
};

// Portfolio Section Data
export const portfolioSectionData = {
  badge: "إنجازاتنا",
  title: "سابقة أعمالنا",
  subtitle: "على مدار أكثر من {totalProjects} مشروع في السوق المصري والعربي",
  description: "عملنا مع مجموعة واسعة من العملاء في مختلف القطاعات، مما أكسبنا خبرة عملية عميقة، ومهارة في تخصيص الحلول التسويقية بما يتناسب مع طبيعة كل نشاط.",
  conclusionText: "تنوّع القطاعات التي تعاملنا معها يعكس مرونتنا وفهمنا العميق للسوق، وقدرتنا على تقديم حلول واقعية وقابلة للتنفيذ، مهما اختلف النشاط أو حجم المشروع."
};

// Why Us Section Data
export const whyUsSectionData = {
  badge: "تميزنا",
  title: "لماذا تعمل معنا؟",
  subtitle: "لأننا لا نُقدّم وعودًا… بل نتائج",
  metricsTitle: "مؤشرات الأداء التي تهمك"
};

// Conclusion Section Data
export const conclusionSectionData = {
  callToActionTitle: "دعنا نبدأ قصة نجاح جديدة…",
  callToActionSubtitle: "دعنا نكون فريقك التسويقي الحقيقي",
  startProjectButton: "ابدأ مشروعك معنا اليوم"
};

// Contact Section Data
export const contactSectionData = {
  badge: "تواصل معنا",
  title: "ابدأ رحلتك معنا",
  subtitle: "🟢 كن على بُعد خطوة واحدة من خطة تسويقية تصنع الفرق"
};

// Final Section Data
export const finalSectionData = {
  motto: "نؤمن أن كل مشروع يستحق خطة… وكل خطة يجب أن تُبنى على علم وتحليل… وكل تحليل يجب أن يُترجم إلى نمو حقيقي.",
  socialPlatforms: ["فيسبوك", "إنستجرام", "تيكتوك", "الموقع الإلكتروني"],
  footerText: "مع تحيات فريق مصر للتحليل والدراسات التسويقية",
  copyrightText: "جميع الحقوق محفوظة."
};

// Export all data as default
export default {
  companyInfo,
  sections,
  portfolioData,
  companyValues,
  mainServices,
  designServices,
  productionServices,
  developmentServices,
  performanceMetrics,
  caseStudies,
  contactInfo,
  socialLinks,
  contentSections,
  whyChooseUsReasons,
  workingSystemSteps,
  headerTexts,
  heroSectionData,
  visionSectionData,
  missionSectionData,
  goalSectionData,
  valuesSectionData,
  designSectionData,
  servicesSectionData,
  productionSectionData,
  developmentSectionData,
  portfolioSectionData,
  whyUsSectionData,
  conclusionSectionData,
  contactSectionData,
  finalSectionData
};
