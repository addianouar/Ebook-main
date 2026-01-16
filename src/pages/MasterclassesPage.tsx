import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Clock, Users, Award } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import pattern from "@/assets/pattern.jpg";

const MasterclassesPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "Nos Formations Masterclass",
      subtitle: "Formations professionnelles avec Sara Alöwe",
      backButton: "Retour",
      available: "Disponible",
      comingSoon: "Bientôt disponible",
      reserve: "Réserver maintenant",
      learnMore: "En savoir plus",
      masterclasses: [
        {
  id: 1,
  title: "Formation Débutant en Cake Design",
  description: "Formation en groupe, destinée aux personnes qui souhaitent acquérir des bases solides en cake design. Réalisation complète d'un gâteau à deux étages.",
  details: ["Groupes de 6 à 10 personnes", "Formation organisée une fois par mois"],
  icon: Users,
  available: true,  // ✅ Now true
  route: "/masterclass/beginner-cake-design"  // ✅ Add route
},
        {
          id: 2,
          title: "Formation Sweet Table 2026",
          description: "Une formation globale pour apprendre à créer un buffet professionnel, aussi bien sur le plan pâtissier que décoratif. Cake + accompagnements complets.",
          details: ["Du 1er mai au 10 mai 2026", "11h00 - 16h00", "10 modules complets"],
          icon: Award,
          available: true,
          route: "/masterclass/sweet-table-2026"
        },
        {
          id: 3,
          title: "Masterclass Wedding Cake",
          description: "Formation avancée dédiée aux gâteaux de mariage. Travail technique, structure, finitions haut de gamme et design élégant.",
          details: ["Groupe limité à 6 personnes", "Formation 2 à 3 fois par an"],
          icon: Award,
          available: false
        },
        {
          id: 4,
          title: "Masterclass Cake 3D",
          description: "Formation spécialisée dans la sculpture et le cake design artistique. Travail du volume, des formes et des détails réalistes, modelage, sculpture...",
          details: ["Groupe de 6 personnes maximum", "Formation 2 à 3 fois par an"],
          icon: Award,
          available: false
        },
      
        {
  id: 5,
  title: "Masterclass Privées (Sur Mesure)",
  description: "Les masterclass privées sont entièrement personnalisées, aussi bien au niveau du contenu que du format, selon les besoins et objectifs du participant.",
  details: ["Format 100% personnalisé", "1 à 3 participants", "Consultation gratuite"],
  icon: Users,  // Better icon for exclusive service
  available: true,  // ✅ Now true
  route: "/masterclass/private"  // ✅ Add route
}
      ]
    },
    ar: {
      title: "دوراتنا التدريبية المتقدمة",
      subtitle: "تدريبات احترافية مع سارا ألوي",
      backButton: "رجوع",
      available: "متاح",
      comingSoon: "قريباً",
      reserve: "احجز الآن",
      learnMore: "معرفة المزيد",
      masterclasses: [
        {
          id: 1,
          title: "تدريب المبتدئين في تصميم الكيك",
          description: "تدريب جماعي مخصص للأشخاص الذين يرغبون في اكتساب أساسيات قوية في تصميم الكيك. إنجاز كامل لكعكة من طابقين.",
          details: ["مجموعات من 6 إلى 10 أشخاص", "يتم تنظيم التدريب مرة واحدة شهرياً"],
          icon: Users,
            available: true,  // ✅ Now true
  route: "/masterclass/beginner-cake-design"  
        },
        {
          id: 2,
          title: "تكوين Sweet Table 2026",
          description: "تدريب شامل لتعلم إنشاء بوفيه احترافي، سواء من الناحية الحلويات أو الديكور. كيك + مرافقات كاملة.",
          details: ["من 1 مايو إلى 10 مايو 2026", "11:00 - 16:00", "10 وحدات كاملة"],
          icon: Award,
          available: true,
          route: "/masterclass/sweet-table-2026"
        },
        {
          id: 3,
          title: "ماستركلاس كيك الزفاف",
          description: "تدريب متقدم مخصص لكعكات الزفاف. عمل تقني، هيكل، تشطيبات راقية وتصميم أنيق.",
          details: ["مجموعة محدودة بـ 6 أشخاص", "التدريب 2 إلى 3 مرات سنوياً"],
          icon: Award,
          available: false
        },
        {
          id: 4,
          title: "ماستركلاس كيك ثلاثي الأبعاد",
          description: "تدريب متخصص في النحت والتصميم الفني للكيك. العمل على الحجم والأشكال والتفاصيل الواقعية والنمذجة والنحت...",
          details: ["مجموعة من 6 أشخاص كحد أقصى", "التدريب 2 إلى 3 مرات سنوياً"],
          icon: Award,
          available: false
        },
        {
          id: 5,
          title: "ماستركلاس خاصة (حسب الطلب)",
          description: "الماستركلاس الخاصة مخصصة بالكامل، سواء من حيث المحتوى أو الشكل، وفقاً لاحتياجات وأهداف المشارك.",
          details: ["تدريب فردي", "تدريب ثنائي", "تدريب ثلاثي (كحد أقصى)"],
          icon: Users,
           available: true,  // ✅ Now true
  route: "/masterclass/private" 
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#F2EFE8] relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#C5912C] transition-all duration-300 flex items-center gap-2"
      >
        <Globe size={20} />
        <span className="font-semibold">{language === 'fr' ? 'AR' : 'FR'}</span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 bg-white/90 text-[#651C32] p-3 rounded-full shadow-lg hover:bg-[#C5912C] hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold hidden sm:inline">{t.backButton}</span>
      </button>

      {/* Background Pattern */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#651C32] mb-4">
            {t.title}
          </h1>
          <p className="text-[#651C32]/70 text-lg sm:text-xl font-inter">
            {t.subtitle}
          </p>
        </div>

        {/* Masterclasses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.masterclasses.map((masterclass) => {
            const Icon = masterclass.icon;
            return (
              <div
                key={masterclass.id}
                className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                  masterclass.available
                    ? 'border-[#C5912C] hover:scale-105 cursor-pointer'
                    : 'border-[#651C32]/20'
                }`}
                onClick={() => masterclass.available && masterclass.route && navigate(masterclass.route)}
              >
                {/* Status Badge */}
                <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} ${
                  masterclass.available 
                    ? 'bg-[#C5912C] text-white' 
                    : 'bg-[#651C32]/20 text-[#651C32]'
                } px-4 py-1 rounded-full text-xs font-semibold`}>
                  {masterclass.available ? t.available : t.comingSoon}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  masterclass.available 
                    ? 'bg-[#C5912C]/20 group-hover:bg-[#C5912C]' 
                    : 'bg-[#651C32]/10'
                }`}>
                  <Icon size={32} className={`${
                    masterclass.available 
                      ? 'text-[#651C32] group-hover:text-white' 
                      : 'text-[#651C32]/50'
                  } transition-colors duration-300`} />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl lg:text-2xl font-bold text-[#651C32] mb-4 text-center min-h-[60px]">
                  {masterclass.title}
                </h3>

                <p className="text-[#651C32]/70 text-sm leading-relaxed mb-6 min-h-[100px]">
                  {masterclass.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  {masterclass.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Clock size={16} className="text-[#C5912C] mt-1 flex-shrink-0" />
                      <span className="text-[#651C32]/70 text-xs">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  disabled={!masterclass.available}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    masterclass.available
                      ? 'bg-[#651C32] text-white hover:bg-[#C5912C]'
                      : 'bg-[#651C32]/20 text-[#651C32]/50 cursor-not-allowed'
                  }`}
                >
                  {masterclass.available ? t.reserve : t.comingSoon}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MasterclassesPage;