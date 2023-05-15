const translation = {
  en: {
    home: "home",
    features: "about us",
    contact: "Contact us",
    English: "English",
    Arabic: "Arabic",
    h1header: "Al Muhtaseb for designing and programming websites",
    pheader: "We are a web design company that specializes in creating amazing and unique website experiences. We aim to turn your ideas into a reality that best reflects your personality or project. Depending on the client and his needs, we offer customized and effective solutions at an affordable cost. We believe that design should be both aesthetic and functional, which is why we strive to provide innovative and trendy designs. Contact us today to turn your idea into reality.",
    About: "About Us",
    h1About: "Do not hesitate to contact us",
    pAbout: "We are a company specialized in designing and developing modern and advanced websites. We believe that good design can turn websites into interesting and impressive experiences, and we always strive to provide the best possible user experience. We care about the quality of work and design details, and we work hard to achieve the vision and goals of our customers, by designing unique and innovative websites that reflect the identity of our customers and attract users.",
    h4serv:"our services",
    h1serv:"Get In Reasonable Price",
    select1serv:"Programming services",
    select2serv:"Design services",
    h3front1serv:"Web Design",
    pfront1serv:"We design modern and attractive websites for small, medium and large companies.",
    h3back1serv:"Digital Marketing",
    pback1serv:"We provide digital marketing services including search engine optimization, advertising campaign management, social network management, and email marketing.",
    h3front2serv:"E-commerce",
    pfront2serv:"Designing and developing online stores for companies and individuals to increase revenues and facilitate the commercial process.",
    h3back2serv:"Search Engine Optimization",
    pback2serv:"Optimizing websites for search engines to increase accessibility and attract more visitors.",
    h3front3serv:"Software project management",
    pfront3serv:"Organizing and managing the various processes and tasks related to software development, ensuring that set goals are achieved in accordance with the set schedule and budget.",
    h3back3serv:"Create a content management system",
    pback3serv:"Design and development of a cms content management system",
    h1contact:"contact us",
  },
  ar: {
    home: "الصفحة الرئيسية",
    features: "من نحن",
    contact: "تواصل معنا",
    English: "انجليزي",
    Arabic: "عربي",
    h1header: "المحتسب لتصميم وبرمجة المواقع الإلكترونية",
    pheader: "نحن شركة تصميم مواقع متخصصة في إنشاء تجارب مواقع مذهلة وفريدة من نوعها. نهدف إلى تحويل أفكارك إلى واقع يعكس شخصيتك أو مشروعك على أفضل وجه. اعتمادًا على العميل واحتياجاته ، نقدم حلولًا مخصصة وفعالة بتكلفة معقولة. نعتقد أن التصميم يجب أن يكون جماليًا وعمليًا ، ولهذا السبب نسعى جاهدين لتقديم تصميمات مبتكرة وعصرية. اتصل بنا اليوم لتحويل فكرتك إلى حقيقة.",
    About: "من نحن",
    h1About: "لا تترددوا في الاتصال بنا",
    pAbout: "نحن شركة متخصصة في تصميم وتطوير المواقع الإلكترونية الحديثة والمتقدمة. نعتقد أن التصميم الجيد يمكن أن يحول مواقع الويب إلى تجارب ممتعة ومثيرة للإعجاب ، ونسعى دائمًا لتوفير أفضل تجربة مستخدم ممكنة. نهتم بجودة العمل وتفاصيل التصميم ، ونعمل بجد لتحقيق رؤية وأهداف عملائنا ، من خلال تصميم مواقع إلكترونية فريدة ومبتكرة تعكس هوية عملائنا وتجذب المستخدمين.",
    h4serv:"خدماتنا",
    h1serv:"احصل على سعر معقول",
    select1serv:"خدمات البرمجة",
    select2serv:"خدمات التصميم",
    h3front1serv:"تصميم المواقع",
    pfront1serv:"نصمم مواقع الكترونية حديثة وجذابة للشركات الصغيرة والمتوسطة والكبيرة.",
    h3back1serv:"التسويق الرقمي",
    pback1serv:"نحن نقدم خدمات التسويق الرقمي بما في ذلك تحسين محرك البحث وإدارة الحملات الإعلانية وإدارة الشبكات الاجتماعية والتسويق عبر البريد الإلكتروني.",
    h3front2serv:"التجارة الإلكترونية",
    pfront2serv:"تصميم وتطوير المتاجر الإلكترونية للشركات والأفراد لزيادة الإيرادات وتسهيل العملية التجارية.",
    h3back2serv:"تحسين محركات البحث",
    pback2serv:"تحسين مواقع الويب لمحركات البحث لزيادة إمكانية الوصول إليها وجذب المزيد من الزوار.",
    h3front3serv:"إدارة مشروع البرمجيات",
    pfront3serv:"تنظيم وإدارة العمليات والمهام المختلفة المتعلقة بتطوير البرمجيات ، وضمان تحقيق الأهداف المحددة وفقًا للجدول الزمني والميزانية المحددين.",
    h3back3serv:"إنشاء نظام إدارة المحتوى",
    pback3serv:"تصميم وتطوير نظام إدارة محتوى CMS",
    h1contact:"اتصل بنا",
  },
}
const selecter = document.querySelector("select");
selecter.addEventListener('change',(event) => {
  selectlanguesh(event.target.value);
});
const selectlanguesh = (language) => {
 const elements = document.querySelectorAll('[data-itin]');
 elements.forEach((element) => {
  const translationKey = element.getAttribute("data-itin");
  element.textContent = translation[language][translationKey];
 });
}
