// project 1 images
import projectSectionImage1 from "../assets/projectSectionImages/image-1.webp";
import project1Image1 from "../assets/projectsImages/project1/image-1.webp";
import project1Image2 from "../assets/projectsImages/project1/image-2.webp";
import project1Image4 from "../assets/projectsImages/project1/image-4.webp";
import project1Image5 from "../assets/projectsImages/project1/image-5.webp";
import project1Image6 from "../assets/projectsImages/project1/image-6.webp";
import project1Image7 from "../assets/projectsImages/project1/image-7.webp";
import project1Image9 from "../assets/projectsImages/project1/image-9.webp";
// import project1Image10 from "../assets/projectsImages/project1/image-10.webp";
import project1Image11 from "../assets/projectsImages/project1/image-11.webp";
import project1Image12 from "../assets/projectsImages/project1/image-12.webp";
// project2 images
import projectSectionImage2 from "../assets/projectSectionImages/image-2.webp";
import project2Image1 from "../assets/projectsImages/project2/image-1.webp";
import project2Image2 from "../assets/projectsImages/project2/image-2.webp";
import project2Image3 from "../assets/projectsImages/project2/image-3.webp";
import project2Image4 from "../assets/projectsImages/project2/image-4.webp";

// project3 images
import projectSectionImage3 from "../assets/projectSectionImages/image-3.webp";
import project3Image1 from "../assets/projectsImages/project3/image-1.webp";
import project3Image2 from "../assets/projectsImages/project3/image-2.webp";
import project3Image3 from "../assets/projectsImages/project3/image-3.webp";
import project3Image4 from "../assets/projectsImages/project3/image-4.webp";
import project3Image5 from "../assets/projectsImages/project3/image-5.webp";
import project3Image6 from "../assets/projectsImages/project3/image-6.webp";
import project3Image7 from "../assets/projectsImages/project3/image-7.webp";
import project3Image8 from "../assets/projectsImages/project3/image-8.webp";


export const projects = [
  {
    id: 1,
    title: 'مساكن طيبة 1',
    location: 'حي العزيزية، المدينة المنورة',
      detailedDescription: 'يتكون من 4 مباني سكنية تلبي تطلعاتك للسكن العصري في حي مكتمل الخدمات بمنطقة المدينة المنورة، مع التركيز على الجودة والخصوصية لكل عائلة من خلال تصاميم معمارية فريدة واستغلال ذكي للمساحات.',
    space: '183م - 286م',
    mapUrl: 'https://maps.google.com/?q=24.4672,39.6111',
    image: projectSectionImage1,
    images: [
      project1Image5,
      project1Image12,
      project1Image6,
      project1Image9,
      project1Image7,
      project1Image2,
      project1Image1,
      project1Image4,
      project1Image11,
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
    title: 'مشروع وقف الفيحاء',
    location: 'المدينة المنورة',
    detailedDescription: `تولت شركة وسائل النمو إدارة المشروع ضمن منظومة متكاملة تغطي جميع مراحل التطوير والتشغيل العقاري.
بدأت الرحلة بالإشراف الفني على المشروع لضمان جودة التنفيذ، بالتوازي مع تنظيم الجوانب المالية وإدارة التكاليف بكفاءة، ثم تهيئة المشروع للتشغيل من خلال تجهيز البنية التشغيلية والخدمات الأساسية.
وانطلاقًا من خبرتنا في التسويق العقاري وإدارة الأصول، تم إعداد المشروع للسوق وتأجيره بنجاح، ضمن خطة مدروسة تحقق أعلى استفادة ممكنة من الأصل العقاري.
نحن في وسائل النمو لا نقتصر على إدارة المشاريع فقط، بل نقدم نموذجًا متكاملًا يشمل التطوير، التسويق، إدارة المشاريع، وإدارة الأملاك، لضمان انتقال المشروع بسلاسة من مرحلة التنفيذ إلى أصل استثماري فعّال.`,
    space: 'حوالي 1050 م²',
    mapUrl: 'https://maps.google.com/?q=24.4672,39.6111',
    image: projectSectionImage2,
    images: [
      project2Image3,
      project2Image1,
      project2Image2,
      project2Image4,
    ],
    progress: 100,
    floorsCount: 4,
    features: [
      '4 أدوار',
      'سلالم طوارئ',
      'خزانات مياه رئيسية',
      'أنظمة سلامة متكاملة بالكامل متوافق مع متطلبات الدفاع المدني'
    ]
  },
  {
    id: 3,
    title: 'الهجرة رزدنس',
    location: 'مخطط القصواء، المدينة المنورة',
    detailedDescription: `شقق سكنية فاخرة في موقع استراتيجي بقلب سيدة المدن "المدينة المنورة" بمخطط القصواء تتراوح مساحات الشقق من 161 متر إلى 190 متر بتصاميم عصرية مميزة تعكس تجربة فريدة وجودة حـيـــــاة راقـــــيـــــة`,
    space: '161م - 190م',
    mapUrl: 'https://maps.google.com/?q=24.4444,39.6333',
    image: projectSectionImage3,
    images: [
      project3Image1,
      project3Image2,
      project3Image5,
      project3Image3,
      project3Image4,
      project3Image6,
      project3Image7,
      project3Image8,
    ],
    progress: null,
    salesType: 'شقق سكنية',
    features: [
      'البناء على الكود السعودي',
      'أسقف عالية',
      'وثيقة تأمين ضد العيوب الخفية',
      'دخول ذكي',
      'موقع استراتيجي',
      'بهو فندقي بممرات مودرن',
      'موقف خاص للسيارة لكل شقة',
      'عازل حراري وصوتي',
      'استغلال مساحات',
      'جناح رئيسي مميز لكل شقة',
      'أنظمة سلامة والدفاع المدني',
      'مصاعد شركة فوجي'
    ],
    locationsDistance: [
      'يبعد عن الحرم النبوي الشريف 9km',
      'يبعد عن مسجد قباء 5km',
      'يبعد عن ممشى الهجرة 350m',
      'يبعد عن الدائري الثاني 2km',
      'يبعد عن العالية مول 5km',
      'يبعد عن الحديقة المركزية 2km'
    ]
  }
];
