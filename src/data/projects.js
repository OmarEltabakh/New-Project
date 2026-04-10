import projectSectionImage1 from "../assets/projectSectionImages/image-1.webp";
import project1Image1 from "../assets/projectsImages/project1/image-1.webp";
import project1Image2 from "../assets/projectsImages/project1/image-2.webp";

export const projects = [
  {
    id: 1,
    title: 'مساكن طيبة 1',
    location: 'حي العزيزية، المدينة المنورة',
    description: 'يتكون من 4 مباني سكنية تلبي تطلعاتك للسكن العصري في حي مكتمل الخدمات بمنطقة المدينة المنورة.',
    space: '183م - 286م',
    image: projectSectionImage1,
    images: [
      project1Image1,
      project1Image2,
    ],
    progress: 60,
    buildingsCount: 4,
    apartmentsCount: 28,
    salesType: 'البيع على الخارطة',
    features: [
      'أسطح خاصة بجلسات مظللة',
      'تصميم عصري مميز للشقق',
      'دخول ذكي',
      'وثيقة تأمين ضد العيوب الخفية',
      'عزل حراري وصوتي للجدران',
      'مصاعد بجودة عالية',
      'نوافذ كبيرة',
      'منطقة لغسيل الملابس',
      'إستغلال للمساحات',
      'أحواض زراعية',
      'موقع استراتيجي',
      'ممرات مودرن',
      'جناح رئيسي مميز لكل شقة',
      'أنظمة سلامة ودفاع مدني',
      'مواقف خاصة لكل شقة',
      'البناء على الكود السعودي'
    ],
    locationsDistance: [
      'يبعد عن المسجد النبوي 14 دقيقة',
      'يبعد عن مسجد قباء 12 دقيقة',
      'يبعد عن الجامعة الإسلامية 8 دقائق',
      'يبعد عن جامعة طيبة 9 دقائق',
      'يبعد عن الدائري الثاني 10 دقائق',
      'يبعد عن مركز الخدمات الحكومية الشاملة 4 دقائق'
    ]
  },
  {
    id: 2,
    title: 'مشروع مساكن طيبة 2',
    location: 'المدينة المنورة',
    description: 'مشروع سكني يتكون من 1 مبنى سكنية تضمن 11 شقة سكنية عصرية بتصاميم مميزة.',
    space: 'تصل مساحتها الى 174م',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&q=80'
    ],
    progress: 55,
    buildingsCount: 1,
    apartmentsCount: 11
  },
  {
    id: 3,
    title: 'مشروع فندق بالمدينة المنورة',
    location: 'المدينة المنورة',
    description: 'فندق سكني قيد الإنشاء يتميز بتصميم فريد لخدمة زوار المدينة المنورة.',
    space: 'مساحات متعددة',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
    ],
    progress: 40,
    salesType: 'تحت الإنشاء',
    category: 'فندق سكني'
  },
  {
    id: 4,
    title: 'مشروع فلتين سكنية خاصة',
    location: 'المدينة المنورة',
    description: 'فلل سكنية فاخرة تحت الإنشاء بتصميم عصري ملائم للأسرة السعودية.',
    space: 'مساحات واسعة',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80'
    ],
    progress: 50,
    salesType: 'تحت الإنشاء',
    category: 'فلل سكنية'
  },
];
