import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  Star,
  Sparkles,
  Video,
  Infinity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";

// Poster slider images — replace with your actual poster files
import posterImage1 from "@/assets/blue-porcelain-poster-1.webp";
import posterImage2 from "@/assets/blue-porcelain-poster-2.webp";
import posterImage3 from "@/assets/blue-porcelain-poster-3.webp";

// Gallery images — replace with your actual gallery photos
import galleryImage1 from "@/assets/blue-porcelain-gallery-1.webp";
import galleryImage2 from "@/assets/blue-porcelain-gallery-2.webp";
import galleryImage3 from "@/assets/blue-porcelain-gallery-3.webp";
import galleryImage4 from "@/assets/blue-porcelain-gallery-4.webp";

const BluePorcelainMasterclass = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      hero: {
        badge: "MASTERCLASS EN LIGNE",
        title: "THE BLUE PORCELAIN",
        subtitle: "Du 5 au 8 Avril",
        description:
          "Wedding cake artistique multi-étages réel (non dummy) inspiré de la porcelaine contemporaine et de la haute couture pâtissière.",
      },
      pricing: {
        title: "Tarif",
        oldPrice: "3,300 DH",
        newPrice: "2,200 DH",
        note: "Réservez vos places avant le 20 Mars",
      },
      format: {
        title: "Format",
        items: [
          "Session LIVE + vidéos enregistrées",
          "Accès à vie",
          "Certificat de réussite après application du cours",
          "Places très limitées",
        ],
      },
      program: {
        title: "Ce que vous allez apprendre",
        items: [
          "Construction complète d'un wedding cake professionnel",
          "Structure gravity cake sécurisée",
          "Organisation interne, dowels et stabilité structurelle",
          "Couverture crème au beurre signature (alternative pâte à sucre)",
          "Couverture pâte à sucre sharp edges haute précision",
          "Techniques de lissage professionnel",
          "Piping fleurs relief effet porcelaine (cadre ovale décoratif)",
          "Travail wafer paper avancé (fleurs, nœud, éléments légers)",
          "Création papillons effet porcelaine",
          "Finitions couture et présentation haut de gamme",
        ],
      },
      flavors: {
        title: "Saveurs Réalisées",
        items: [
          {
            name: "Coco Mangue",
            desc: "Crème coco exotique — Insert fruits exotiques",
          },
          {
            name: "Pistache",
            desc: "Crème au beurre pistache pure — Insert fruits rouges",
          },
          {
            name: "Chocolat Noir Intense",
            desc: "Crémeux chocolat noir — Caramel noisette",
          },
          {
            name: "Vanille",
            desc: "Crème vanille — Crémeux chocolat blanc vanille",
          },
        ],
      },
      chef: {
        title: "Présentée par",
        name: "Chef Sara Alaoui",
        achievements: [
          "Vice-championne du monde 2025",
          "+15 ans d'expérience",
          "+6000 élèves formés",
        ],
      },
      gallery: "Galerie",
      cta: {
        whatsapp: "Réserver via WhatsApp",
        subtitle: "Places très limitées — Réservez avant le 20 Mars",
      },
    },
    ar: {
      hero: {
        badge: "ماستركلاس عبر الإنترنت",
        title: "THE BLUE PORCELAIN",
        subtitle: "من 5 إلى 8 أبريل",
        description:
          "كعكة زفاف فنية متعددة الطوابق حقيقية (ليست دمية) مستوحاة من الخزف المعاصر والأزياء الراقية في صناعة الحلويات.",
      },
      pricing: {
        title: "التعرفة",
        oldPrice: "3,300 درهم",
        newPrice: "2,200 درهم",
        note: "احجز مكانك قبل 20 مارس",
      },
      format: {
        title: "الصيغة",
        items: [
          "جلسة مباشرة + فيديوهات مسجلة",
          "وصول مدى الحياة",
          "شهادة نجاح بعد تطبيق الدورة",
          "أماكن محدودة جداً",
        ],
      },
      program: {
        title: "ما ستتعلمه",
        items: [
          "بناء كامل لكعكة زفاف احترافية",
          "هيكل gravity cake آمن",
          "التنظيم الداخلي والدعامات والاستقرار الهيكلي",
          "تغطية كريمة الزبدة المميزة (بديل عجينة السكر)",
          "تغطية عجينة السكر بحواف حادة عالية الدقة",
          "تقنيات التنعيم الاحترافي",
          "Piping زهور بارزة بتأثير البورسلين (إطار بيضاوي زخرفي)",
          "عمل متقدم بورق الويفر (زهور، عقدة، عناصر خفيفة)",
          "إنشاء فراشات بتأثير البورسلين",
          "تشطيبات كوتور وعرض راقي",
        ],
      },
      flavors: {
        title: "النكهات المنجزة",
        items: [
          {
            name: "جوز الهند والمانجو",
            desc: "كريمة جوز الهند الاستوائية — حشوة فواكه استوائية",
          },
          {
            name: "الفستق",
            desc: "كريمة زبدة الفستق النقية — حشوة فواكه حمراء",
          },
          {
            name: "شوكولاتة داكنة مكثفة",
            desc: "كريمة شوكولاتة داكنة — كراميل البندق",
          },
          {
            name: "الفانيليا",
            desc: "كريمة فانيليا — كريمة شوكولاتة بيضاء بالفانيليا",
          },
        ],
      },
      chef: {
        title: "مقدمة من",
        name: "الشيف سارة العلوي",
        achievements: [
          "نائبة بطلة العالم 2025",
          "+15 سنة خبرة",
          "+6000 طالب تم تدريبهم",
        ],
      },
      gallery: "معرض الصور",
      cta: {
        whatsapp: "احجز عبر واتساب",
        subtitle: "أماكن محدودة جداً — احجز قبل 20 مارس",
      },
    },
  };

  const t = content[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const posterImages = [posterImage1, posterImage2, posterImage3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posterImages.length) % posterImages.length);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      language === "fr"
        ? "Bonjour! Je suis intéressé(e) par la Masterclass The Blue Porcelain (5-8 Avril). Pouvez-vous me fournir plus d'informations?"
        : "مرحباً! أنا مهتم بماستركلاس The Blue Porcelain (5-8 أبريل). هل يمكنكم تزويدي بمزيد من المعلومات؟"
    );
    window.open(`https://wa.me/+212634340007?text=${message}`, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-[#F2EFE8] relative"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(37, 211, 102, 0.7), 0 0 60px rgba(37, 211, 102, 0.5);
            transform: scale(1.05);
          }
        }
        .whatsapp-button {
          animation: pulse-glow 2s ease-in-out infinite;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          transition: all 0.3s ease;
        }
        .whatsapp-button:hover {
          animation: none;
          box-shadow: 0 0 40px rgba(37, 211, 102, 0.8), 0 0 80px rgba(37, 211, 102, 0.6);
          transform: scale(1.1);
        }
      `}</style>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#C5912C] transition-all duration-300 flex items-center gap-2"
      >
        <Globe size={20} />
        <span className="font-semibold">
          {language === "fr" ? "AR" : "FR"}
        </span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate("/masterclasses")}
        className="fixed top-6 left-6 z-50 bg-white/90 text-[#651C32] p-3 rounded-full shadow-lg hover:bg-[#C5912C] hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold hidden sm:inline">
          {language === "fr" ? "Retour" : "رجوع"}
        </span>
      </button>

      {/* Background Pattern */}
      <img
        src={pattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block bg-[#C5912C] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {t.hero.badge}
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-[#651C32] mb-4">
              {t.hero.title}
            </h1>
            <p className="text-[#C5912C] text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-[#651C32]/70 text-lg sm:text-xl max-w-4xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Official Poster Slider */}
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5912C]/30">
              {/* Slides */}
              <div className="relative w-full">
                {posterImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`The Blue Porcelain Poster ${index + 1}`}
                    className={`w-full h-auto object-contain transition-opacity duration-500 ${
                      index === currentSlide ? "block opacity-100" : "hidden opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#C5912C] hover:text-white transition-all duration-300 text-[#651C32]"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#C5912C] hover:text-white transition-all duration-300 text-[#651C32]"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {posterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#C5912C] scale-125"
                        : "bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/30 text-center">
              <h2 className="font-playfair text-2xl font-bold text-[#651C32] mb-6">
                {t.pricing.title}
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-[#651C32]/40 line-through">
                  {t.pricing.oldPrice}
                </span>
                <span className="text-5xl font-bold text-[#C5912C]">
                  {t.pricing.newPrice}
                </span>
              </div>
              <p className="text-[#651C32]/70 text-sm font-semibold">
                {t.pricing.note}
              </p>
            </Card>
          </div>

          {/* Format Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-10">
              {t.format.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.format.items.map((item, index) => {
                const icons = [Video, Infinity, Award, Users];
                const Icon = icons[index];
                return (
                  <Card
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#C5912C]/20 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-[#C5912C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#C5912C]" />
                    </div>
                    <span className="text-[#651C32] font-medium text-sm">
                      {item}
                    </span>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Program / What You'll Learn */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-10">
              {t.program.title}
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <div className="space-y-4">
                {t.program.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#C5912C] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[#651C32]/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Flavors Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-10">
              {t.flavors.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.flavors.items.map((flavor, index) => (
                <Card
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#C5912C]/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C5912C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles size={18} className="text-[#C5912C]" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-[#651C32] text-lg mb-1">
                        {flavor.name}
                      </h4>
                      <p className="text-[#651C32]/60 text-sm">{flavor.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-10">
              {t.gallery}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[galleryImage1, galleryImage2, galleryImage3, galleryImage4].map(
                (img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#C5912C]/20 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={img}
                      alt={`Blue Porcelain ${index + 1}`}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Chef Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-[#651C32] backdrop-blur-sm p-8 rounded-3xl shadow-xl text-center">
              <h2 className="font-playfair text-2xl font-bold text-white mb-2">
                {t.chef.title}
              </h2>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-[#C5912C] mb-6">
                {t.chef.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {t.chef.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                  >
                    <Star size={16} className="text-[#C5912C]" />
                    <span className="text-white text-sm font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handleWhatsAppBooking}
              className="whatsapp-button text-lg px-12 py-6 mb-4 rounded-full text-white font-bold inline-flex items-center gap-3 border-none cursor-pointer"
            >
              <MessageCircle size={24} />
              {t.cta.whatsapp}
            </button>
            <p className="text-[#651C32]/60 text-sm">{t.cta.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePorcelainMasterclass;
