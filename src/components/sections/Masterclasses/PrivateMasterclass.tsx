import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, MessageCircle, MapPin, DollarSign } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import pattern from "@/assets/pattern.jpg";
import Swal from "sweetalert2";

const BeginnerCakeDesign = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      hero: {
        badge: "FORMATION PERSONNALISÉE",
        title: "MASTERCLASS PRIVÉE",
        subtitle: "Formation sur Mesure | Tous Niveaux",
        description: "Des formations entièrement personnalisées, conçues selon votre niveau, vos besoins et vos objectifs. Chaque masterclass est une création originale développée avec vous.",
        cta: "Réserver maintenant"
      },
      formats: {
        title: "Formats Disponibles",
        individual: {
          name: "Formation Individuelle",
          description: "Attention exclusive et personnalisée",
          price: "À partir de 6,000 MAD"
        },
        duo: {
          name: "Formation en Binôme",
          description: "Apprentissage partagé à deux",
          price: "4,200 MAD par personne",
          calculation: "6000 ÷ 2 + 20% de 6000"
        },
        trio: {
          name: "Formation en Trinôme",
          description: "Groupe de 3 participants maximum",
          price: "3,500 MAD par personne",
          calculation: "6000 ÷ 3 + 25% de 6000"
        },
        note: "Un quatrième participant peut être accepté sur demande avec accord de tous (même tarif qu'en trinôme)"
      },
      categories: {
        title: "Catégories Disponibles",
        list: [
          "Cake Design",
          "Cookies Décorés en Royal Icing",
          "Macarons Professionnels",
          "Autres spécialités en pâtisserie et cake design"
        ],
        note: "La catégorie est définie lors de la réservation pour fixer le cadre pédagogique et le tarif"
      },
      approach: {
        title: "Notre Approche Unique",
        subtitle: "Création Originale - Pas de Copier-Coller",
        principle: "Principe Fondamental",
        points: [
          "Aucun modèle copié ou reproduit depuis Internet",
          "Chaque projet est une création originale conçue ensemble",
          "Le design final est décidé le premier jour (MODULE 1: SKETCHING)",
          "Objectif: apprendre à créer, structurer et développer un design",
          "Formation personnalisée selon vos objectifs et techniques choisies"
        ]
      },
      includes: {
        title: "Inclus dans la Formation",
        items: [
          "Formation entièrement personnalisée selon votre niveau",
          "Création d'un design original unique",
          "Module SKETCHING inclus (conception du projet)",
          "Tout le matériel fourni sur place",
          "Accompagnement personnalisé tout au long",
          "Techniques adaptées à vos objectifs",
          "Pas de matériel personnel nécessaire"
        ]
      },
      conditions: {
        title: "Conditions de Réservation",
        items: [
          "Avance obligatoire de 30% du montant total pour confirmer",
          "Sans avance, aucune date n'est bloquée",
          "Catégorie définie lors de la réservation",
          "Design final décidé le premier jour (MODULE 1: SKETCHING)",
          "Modification de format acceptée avant confirmation finale uniquement",
          "Aucune modification après validation définitive"
        ]
      },
      cancellation: {
        title: "Politique d'Annulation",
        items: [
          "Aucun remboursement à partir de la première semaine avant le début",
          "Toute annulation avant ce délai doit être justifiée",
          "En cas de force majeure, remboursement partiel après étude du dossier",
          "L'avance de 30% reste non remboursable",
          "Aucun remboursement après le début de la formation",
          "Retards ou absences : aucune prolongation ni compensation"
        ]
      },
      rules: {
        title: "Règlement",
        items: [
          "Interdit de filmer sans autorisation préalable",
          "Demande vidéo à faire à l'avance et validée par l'académie",
          "Visages interdits dans les vidéos",
          "Vidéos autorisées : usage strictement personnel uniquement",
          "Partage interdit des contenus enregistrés"
        ]
      },
      cta: {
        whatsapp: "Réserver via WhatsApp",
        moreInfo: "Demander plus d'informations"
      }
    },
    ar: {
      hero: {
        badge: "تدريب مخصص",
        title: "ماستر كلاس خاصة",
        subtitle: "تدريب حسب الطلب | جميع المستويات",
        description: "دورات تدريبية مُصمَّمة بشكل كامل حسب مستواك واحتياجاتك وأهدافك. كل ماستر كلاس هو إبداع أصلي يتم تطويره معك.",
        cta: "احجز الآن"
      },
      formats: {
        title: "الصيغ المتاحة",
        individual: {
          name: "تكوين فردي",
          description: "اهتمام حصري ومخصص",
          price: "ابتداءً من 6,000 درهم"
        },
        duo: {
          name: "تكوين ثنائي",
          description: "تعلم مشترك لشخصين",
          price: "4,200 درهم للشخص",
          calculation: "6000 ÷ 2 + 20٪ من 6000"
        },
        trio: {
          name: "تكوين ثلاثي",
          description: "مجموعة من 3 مشاركين كحد أقصى",
          price: "3,500 درهم للشخص",
          calculation: "6000 ÷ 3 + 25٪ من 6000"
        },
        note: "يمكن قبول مشارك رابع عند الطلب بموافقة الجميع (نفس التعرفة الثلاثية)"
      },
      categories: {
        title: "الفئات المتاحة",
        list: [
          "تصميم الكيك",
          "تزيين الكوكيز بالرويال آيسينغ",
          "الماكرون الاحترافي",
          "تخصصات أخرى في الحلويات وتصميم الكيك"
        ],
        note: "يتم تحديد الفئة عند الحجز لتحديد الإطار التعليمي والتعرفة"
      },
      approach: {
        title: "نهجنا الفريد",
        subtitle: "إبداع أصلي - لا للنسخ واللصق",
        principle: "المبدأ الأساسي",
        points: [
          "لا يتم نسخ أي نموذج أو إعادة إنتاجه من الإنترنت",
          "كل مشروع هو إبداع أصلي يتم تصميمه معًا",
          "يتم تحديد التصميم النهائي في اليوم الأول (الوحدة 1: SKETCHING)",
          "الهدف: تعلم إنشاء وبناء وتطوير تصميم",
          "تدريب مخصص وفق أهدافك والتقنيات المختارة"
        ]
      },
      includes: {
        title: "ما يشمله التدريب",
        items: [
          "تدريب مخصص بالكامل حسب مستواك",
          "إنشاء تصميم أصلي فريد",
          "وحدة SKETCHING مشمولة (تصميم المشروع)",
          "جميع المعدات متوفرة في الموقع",
          "مرافقة شخصية طوال المدة",
          "تقنيات مكيفة حسب أهدافك",
          "لا حاجة لمعدات شخصية"
        ]
      },
      conditions: {
        title: "شروط الحجز",
        items: [
          "دفعة مسبقة إلزامية 30٪ من المبلغ الإجمالي للتأكيد",
          "بدون دفعة مسبقة، لا يتم حجز أي تاريخ",
          "تحديد الفئة عند الحجز",
          "التصميم النهائي يحدد في اليوم الأول (الوحدة 1: SKETCHING)",
          "تعديل الصيغة مقبول قبل التأكيد النهائي فقط",
          "لا تعديل بعد التأكيد النهائي"
        ]
      },
      cancellation: {
        title: "سياسة الإلغاء",
        items: [
          "لا استرداد من الأسبوع الأول قبل البدء",
          "يجب تبرير أي إلغاء قبل هذا الموعد",
          "في حالة القوة القاهرة، استرداد جزئي بعد دراسة الملف",
          "الدفعة المسبقة 30٪ غير قابلة للاسترداد",
          "لا استرداد بعد بدء التدريب",
          "التأخيرات أو الغياب: لا تمديد ولا تعويض"
        ]
      },
      rules: {
        title: "اللوائح",
        items: [
          "ممنوع التصوير بدون إذن مسبق",
          "طلب الفيديو يجب تقديمه مسبقًا والموافقة عليه من الأكاديمية",
          "الوجوه ممنوعة في الفيديوهات",
          "الفيديوهات المصرح بها: للاستخدام الشخصي فقط",
          "ممنوع مشاركة المحتويات المسجلة"
        ]
      },
      cta: {
        whatsapp: "احجز عبر واتساب",
        moreInfo: "اطلب المزيد من المعلومات"
      }
    }
  };

  const t = content[language];

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      language === 'fr'
        ? "Bonjour! Je suis intéressé(e) par une Masterclass Privée. Pouvez-vous me fournir plus d'informations sur les disponibilités et les catégories proposées?"
        : "مرحباً! أنا مهتم بماستر كلاس خاصة. هل يمكنكم تزويدي بمزيد من المعلومات حول التوفر والفئات المقترحة؟"
    );
    window.open(`https://wa.me/+212664576477?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
        <span className="font-semibold">{language === 'fr' ? 'AR' : 'FR'}</span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate('/masterclasses')}
        className="fixed top-6 left-6 z-50 bg-white/90 text-[#651C32] p-3 rounded-full shadow-lg hover:bg-[#C5912C] hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold hidden sm:inline">{language === 'fr' ? 'Retour' : 'رجوع'}</span>
      </button>

      {/* Background Pattern */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      {/* Hero Section */}
      <div className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
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
            <p className="text-[#651C32]/70 text-lg sm:text-xl max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Formats Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.formats.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20 hover:border-[#C5912C] transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C5912C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-2">{t.formats.individual.name}</h3>
                  <p className="text-sm text-[#651C32]/70 mb-4">{t.formats.individual.description}</p>
                  <p className="text-2xl font-bold text-[#C5912C]">{t.formats.individual.price}</p>
                </div>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20 hover:border-[#C5912C] transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C5912C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-2">{t.formats.duo.name}</h3>
                  <p className="text-sm text-[#651C32]/70 mb-4">{t.formats.duo.description}</p>
                  <p className="text-2xl font-bold text-[#C5912C] mb-2">{t.formats.duo.price}</p>
                  <p className="text-xs text-[#651C32]/60">{t.formats.duo.calculation}</p>
                </div>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20 hover:border-[#C5912C] transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C5912C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-2">{t.formats.trio.name}</h3>
                  <p className="text-sm text-[#651C32]/70 mb-4">{t.formats.trio.description}</p>
                  <p className="text-2xl font-bold text-[#C5912C] mb-2">{t.formats.trio.price}</p>
                  <p className="text-xs text-[#651C32]/60">{t.formats.trio.calculation}</p>
                </div>
              </Card>
            </div>
            <div className="bg-[#C5912C]/10 border-2 border-[#C5912C]/30 rounded-xl p-4 text-center">
              <p className="text-sm text-[#651C32]/80 flex items-center justify-center gap-2">
                <CheckCircle size={16} className="text-[#C5912C] flex-shrink-0" />
                {t.formats.note}
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-6 text-center">
                {t.categories.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {t.categories.list.map((category, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-[#F2EFE8] rounded-xl">
                    <Award className="text-[#C5912C] flex-shrink-0" size={24} />
                    <span className="text-[#651C32] font-medium">{category}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#C5912C]/10 border-2 border-[#C5912C]/30 rounded-xl p-4 text-center">
                <p className="text-sm text-[#651C32]/80">
                  {t.categories.note}
                </p>
              </div>
            </Card>
          </div>

          {/* Approach Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-[#651C32] to-[#C5912C] p-8 lg:p-12 rounded-3xl shadow-2xl text-white">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-center mb-3">
                {t.approach.title}
              </h2>
              <p className="text-xl text-center mb-8 text-white/90">{t.approach.subtitle}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="font-playfair text-xl font-bold mb-4 flex items-center gap-2">
                  <Award size={24} />
                  {t.approach.principle}
                </h3>
                <div className="space-y-3">
                  {t.approach.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* What's Included */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-8">
                {t.includes.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.includes.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C5912C] flex-shrink-0 mt-1" />
                    <span className="text-sm text-[#651C32]/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Conditions, Cancellation & Rules Grid */}
          <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Conditions */}
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-6 flex items-center gap-2">
                <CheckCircle size={24} className="text-[#C5912C]" />
                {t.conditions.title}
              </h3>
              <div className="space-y-3">
                {t.conditions.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#C5912C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-[#651C32]/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cancellation */}
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-6 flex items-center gap-2">
                <Clock size={24} className="text-[#C5912C]" />
                {t.cancellation.title}
              </h3>
              <div className="space-y-3">
                {t.cancellation.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#C5912C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-[#651C32]/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Rules */}
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-6 flex items-center gap-2">
                <Award size={24} className="text-[#C5912C]" />
                {t.rules.title}
              </h3>
              <div className="space-y-3">
                {t.rules.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#C5912C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-[#651C32]/80 leading-relaxed">{item}</p>
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
            <p className="text-[#651C32]/60 text-sm">
              {language === 'fr' 
                ? 'Contactez-nous pour discuter de votre projet personnalisé'
                : 'اتصل بنا لمناقشة مشروعك المخصص'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerCakeDesign;