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
        badge: "FORMATION DE BASE",
        title: "FORMATION DÉBUTANT EN CAKE DESIGN",
        subtitle: "Cours Collectif | Tous Niveaux",
        description: "Une formation complète pour maîtriser les techniques fondamentales du cake design et comprendre les aspects scientifiques de la pâtisserie professionnelle",
        cta: "Réserver maintenant"
      },
      locations: {
        title: "Prochaines Sessions",
        tanger: {
          name: "Tanger",
          duration: "4 jours",
          schedule: "11h - 15h",
          dates: [
            { date: "9 au 12 février", status: "almost" },
            { date: "24 au 27 mars", status: "available" },
            { date: "6 au 9 juillet", status: "available" },
            { date: "24 au 27 août", status: "available" }
          ]
        },
        casa: {
          name: "Casablanca",
          duration: "3 jours",
          schedule: "11h - 17h (40 min pause)",
          dates: [
            { date: "23 au 25 janvier", status: "full" },
            { date: "20 au 22 février", status: "almost" }
          ]
        },
        labels: {
          available: "Places disponibles",
          almost: "Presque complet",
          full: "COMPLET"
        }
      },
      pricing: {
        title: "Tarification",
        fixedPrice: "4,500 MAD",
        deposit: "Avance obligatoire : 2,000 MAD",
        note: "Des promotions peuvent être appliquées pour certaines occasions",
        special: "Réduction possible sur justification (1 demande par groupe maximum)"
      },
      program: {
        title: "Programme Complet - 10 Unités + Projet Final",
        modules: [
          {
            num: "UNITÉ 1",
            title: "INTRODUCTION ET SCIENCES",
            desc: "Relations entre science et pâtisserie. Chimie des ingrédients, précision et applications scientifiques dans le cake design. Présentation des outils et principes de conception."
          },
          {
            num: "UNITÉ 2",
            title: "SCIENCE DERRIÈRE LE CAKE DESIGN",
            desc: "Chimie des ingrédients (œufs, sucre, matières grasses, levures). Réactions chimiques : caramélisation et réaction de Maillard. Ajustements selon texture et climat."
          },
          {
            num: "UNITÉ 3",
            title: "BASES ET TECHNIQUES",
            desc: "Préparation des bases pour un mélange homogène et aéré. Choix du moule et température adaptée. Reconnaître un gâteau parfait et éviter les erreurs courantes."
          },
          {
            num: "UNITÉ 4",
            title: "CUISSON ET FOUR",
            desc: "Maîtriser les techniques de cuisson selon le type de gâteau. Températures et durées adaptées. Gestion des erreurs : affaissement, cuisson inégale, surcuisson."
          },
          {
            num: "UNITÉ 5",
            title: "CRÈME ET GANACHE",
            desc: "Techniques : crème au beurre, crème au fromage, ganache montée professionnelle. Ganache chocolat blanc, noir et colorée. Conservation optimale."
          },
          {
            num: "UNITÉ 6",
            title: "ASSEMBLAGE DU GÂTEAU",
            desc: "Disposition des couches pour solidité et stabilité. Contrôle de hauteur et uniformité. Techniques professionnelles d'empilage."
          },
          {
            num: "UNITÉ 7",
            title: "CONSERVATION ET CLIMAT",
            desc: "Techniques pour prolonger la fraîcheur et durée de conservation. Gestion chaleur et humidité. Éviter condensation et fissures."
          },
          {
            num: "UNITÉ 8",
            title: "SCIENCE DES COULEURS",
            desc: "Influence des couleurs sur le design. Coordination et mélange approprié. Couleurs primaires, secondaires et complexes. Corriger les erreurs."
          },
          {
            num: "UNITÉ 9",
            title: "PÂTE À SUCRE ET DÉCORATIONS",
            desc: "Recouvrir sans fissures. Coloration et texture. Décorations de base : fleurs, motifs simples et finitions modernes pour gâteau 2 étages."
          },
          {
            num: "UNITÉ 10",
            title: "CALCUL DES COÛTS",
            desc: "Détermination des coûts : matières premières, main-d'œuvre, frais fixes. Fixer un prix compétitif et rentable. Organisation des commandes."
          }
        ],
        finalProject: {
          title: "PROJET FINAL",
          desc: "Réalisation complète d'un gâteau 2 étages : préparation, cuisson, assemblage, décoration et calcul des coûts. Évaluation de la qualité : goût, texture et design."
        }
      },
      includes: {
        title: "Inclus dans la Formation",
        items: [
          "Formation complète sur 10 unités + projet final",
          "Tout le matériel fourni sur place",
          "Accompagnement personnalisé malgré le format collectif",
          "Certificat d'achèvement",
          "Support de cours professionnel",
          "Accès au groupe WhatsApp de soutien",
          "Suivi post-formation",
          "Conseils pour démarrer votre activité"
        ]
      },
      requirements: {
        title: "Conditions de Participation",
        items: [
          "Âge minimum : 16 ans",
          "Formation ouverte à tous : hommes et femmes",
          "Ouvert aux débutants complets et professionnels",
          "Groupes de 6 à 10 participants",
          "Réservation confirmée après paiement de l'avance de 2,000 MAD",
          "Sans avance, aucune place n'est bloquée"
        ]
      },
      cancellation: {
        title: "Politique d'Annulation",
        items: [
          "Aucun remboursement à partir de la première semaine avant le début",
          "Toute annulation avant ce délai doit être justifiée",
          "En cas de force majeure, remboursement partiel après étude du dossier",
          "L'avance reste non remboursable",
          "Aucun remboursement après le début de la formation",
          "Retards ou absences : aucune prolongation ni compensation"
        ]
      },
      rules: {
        title: "Règlement Intérieur",
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
        badge: "التدريب الأساسي",
        title: "تدريب المبتدئين في تصميم الكيك",
        subtitle: "دورة جماعية | جميع المستويات",
        description: "تدريب كامل لإتقان التقنيات الأساسية لتصميم الكيك وفهم الجوانب العلمية للحلويات الاحترافية",
        cta: "احجز الآن"
      },
      locations: {
        title: "الدورات القادمة",
        tanger: {
          name: "طنجة",
          duration: "4 أيام",
          schedule: "11:00 - 15:00",
          dates: [
            { date: "9 إلى 12 فبراير", status: "almost" },
            { date: "24 إلى 27 مارس", status: "available" },
            { date: "6 إلى 9 يوليو", status: "available" },
            { date: "24 إلى 27 أغسطس", status: "available" }
          ]
        },
        casa: {
          name: "الدار البيضاء",
          duration: "3 أيام",
          schedule: "11:00 - 17:00 (استراحة 40 دقيقة)",
          dates: [
            { date: "23 إلى 25 يناير", status: "full" },
            { date: "20 إلى 22 فبراير", status: "almost" }
          ]
        },
        labels: {
          available: "أماكن متاحة",
          almost: "شبه مكتمل",
          full: "مكتمل"
        }
      },
      pricing: {
        title: "التسعير",
        fixedPrice: "4,500 درهم",
        deposit: "دفعة مقدمة إلزامية: 2,000 درهم",
        note: "يمكن تطبيق عروض ترويجية في مناسبات معينة",
        special: "تخفيض ممكن بناءً على مبرر (طلب واحد لكل مجموعة كحد أقصى)"
      },
      program: {
        title: "البرنامج الكامل - 10 وحدات + مشروع نهائي",
        modules: [
          {
            num: "الوحدة 1",
            title: "مقدمة والعلوم",
            desc: "العلاقات بين العلم والحلويات. كيمياء المكونات والدقة والتطبيقات العلمية في تصميم الكيك. عرض الأدوات ومبادئ التصميم."
          },
          {
            num: "الوحدة 2",
            title: "العلم وراء تصميم الكيك",
            desc: "كيمياء المكونات (البيض، السكر، الدهون، الخمائر). التفاعلات الكيميائية: الكراميل وتفاعل مايلارد. التعديلات حسب الملمس والمناخ."
          },
          {
            num: "الوحدة 3",
            title: "الأساسيات والتقنيات",
            desc: "تحضير القواعد للحصول على خليط متجانس وهوائي. اختيار القالب ودرجة الحرارة المناسبة. التعرف على الكعكة المثالية وتجنب الأخطاء الشائعة."
          },
          {
            num: "الوحدة 4",
            title: "الخبز والفرن",
            desc: "إتقان تقنيات الخبز حسب نوع الكعكة. درجات الحرارة والأوقات المناسبة. إدارة الأخطاء: الانهيار، الخبز غير المتساوي، الإفراط في الخبز."
          },
          {
            num: "الوحدة 5",
            title: "الكريمة والجاناش",
            desc: "التقنيات: كريمة الزبدة، كريمة الجبن، جاناش محترف. جاناش الشوكولاتة الأبيض والأسود والملون. الحفظ الأمثل."
          },
          {
            num: "الوحدة 6",
            title: "تجميع الكعكة",
            desc: "ترتيب الطبقات للصلابة والاستقرار. التحكم في الارتفاع والتجانس. تقنيات التكديس الاحترافية."
          },
          {
            num: "الوحدة 7",
            title: "الحفظ والمناخ",
            desc: "تقنيات لإطالة النضارة ومدة الحفظ. إدارة الحرارة والرطوبة. تجنب التكثيف والتشققات."
          },
          {
            num: "الوحدة 8",
            title: "علم الألوان",
            desc: "تأثير الألوان على التصميم. التنسيق والمزج المناسب. الألوان الأساسية والثانوية والمعقدة. تصحيح الأخطاء."
          },
          {
            num: "الوحدة 9",
            title: "عجينة السكر والزخارف",
            desc: "التغطية بدون تشققات. التلوين والملمس. الزخارف الأساسية: الزهور، الأنماط البسيطة والتشطيبات الحديثة لكعكة من طابقين."
          },
          {
            num: "الوحدة 10",
            title: "حساب التكاليف",
            desc: "تحديد التكاليف: المواد الخام، العمالة، المصاريف الثابتة. تحديد سعر تنافسي ومربح. تنظيم الطلبات."
          }
        ],
        finalProject: {
          title: "المشروع النهائي",
          desc: "إنجاز كامل لكعكة من طابقين: التحضير، الخبز، التجميع، الزخرفة وحساب التكاليف. تقييم الجودة: الطعم، الملمس والتصميم."
        }
      },
      includes: {
        title: "ما يشمله التدريب",
        items: [
          "تدريب كامل على 10 وحدات + مشروع نهائي",
          "جميع المعدات متوفرة في الموقع",
          "مرافقة شخصية رغم الشكل الجماعي",
          "شهادة إتمام",
          "دعم دورة احترافي",
          "الوصول إلى مجموعة واتساب للدعم",
          "متابعة ما بعد التدريب",
          "نصائح لبدء نشاطك"
        ]
      },
      requirements: {
        title: "شروط المشاركة",
        items: [
          "الحد الأدنى للعمر: 16 سنة",
          "التدريب مفتوح للجميع: رجال ونساء",
          "مفتوح للمبتدئين الكاملين والمحترفين",
          "مجموعات من 6 إلى 10 مشاركين",
          "يتم تأكيد الحجز بعد دفع مقدم 2,000 درهم",
          "بدون دفعة مقدمة، لا يتم حجز أي مكان"
        ]
      },
      cancellation: {
        title: "سياسة الإلغاء",
        items: [
          "لا يوجد استرداد من الأسبوع الأول قبل البدء",
          "يجب تبرير أي إلغاء قبل هذا الموعد",
          "في حالة القوة القاهرة، استرداد جزئي بعد دراسة الملف",
          "الدفعة المقدمة غير قابلة للاسترداد",
          "لا يوجد استرداد بعد بدء التدريب",
          "التأخيرات أو الغياب: لا تمديد ولا تعويض"
        ]
      },
      rules: {
        title: "اللوائح الداخلية",
        items: [
          "ممنوع التصوير بدون إذن مسبق",
          "يجب تقديم طلب الفيديو مسبقاً والموافقة عليه من الأكاديمية",
          "الوجوه ممنوعة في مقاطع الفيديو",
          "مقاطع الفيديو المصرح بها: للاستخدام الشخصي فقط",
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
        ? "Bonjour! Je suis intéressé(e) par la Formation Débutant en Cake Design. Pouvez-vous me fournir plus d'informations sur les prochaines sessions disponibles?"
        : "مرحباً! أنا مهتم بتدريب المبتدئين في تصميم الكيك. هل يمكنكم تزويدي بمزيد من المعلومات حول الدورات القادمة المتاحة؟"
    );
    window.open(`https://wa.me/+212664576477?text=${message}`, "_blank");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'full': return 'bg-red-500 text-white';
      case 'almost': return 'bg-orange-500 text-white';
      case 'available': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'full': return t.locations.labels.full;
      case 'almost': return t.locations.labels.almost;
      case 'available': return t.locations.labels.available;
      default: return '';
    }
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

          {/* Locations & Dates Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.locations.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tanger */}
              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-[#C5912C]" size={32} />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[#651C32]">{t.locations.tanger.name}</h3>
                    <p className="text-sm text-[#651C32]/70">{t.locations.tanger.duration} • {t.locations.tanger.schedule}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.locations.tanger.dates.map((dateInfo, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#F2EFE8] rounded-xl">
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-[#C5912C]" />
                        <span className="text-[#651C32] font-medium">{dateInfo.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(dateInfo.status)}`}>
                        {getStatusLabel(dateInfo.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Casablanca */}
              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-[#C5912C]" size={32} />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[#651C32]">{t.locations.casa.name}</h3>
                    <p className="text-sm text-[#651C32]/70">{t.locations.casa.duration} • {t.locations.casa.schedule}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.locations.casa.dates.map((dateInfo, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#F2EFE8] rounded-xl">
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-[#C5912C]" />
                        <span className="text-[#651C32] font-medium">{dateInfo.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(dateInfo.status)}`}>
                        {getStatusLabel(dateInfo.status)}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-6 flex items-center gap-3">
                <DollarSign className="text-[#C5912C]" size={32} />
                {t.pricing.title}
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-[#C5912C] rounded-xl p-6 bg-[#C5912C]/5 text-center">
                  <p className="text-sm text-[#651C32]/70 mb-2">{language === 'fr' ? 'Prix par participant' : 'السعر لكل مشارك'}</p>
                  <p className="text-5xl font-bold text-[#C5912C] mb-2">{t.pricing.fixedPrice}</p>
                  <p className="text-lg text-[#651C32] font-semibold">{t.pricing.deposit}</p>
                </div>
                <div className="bg-[#F2EFE8] p-4 rounded-xl space-y-2">
                  <p className="text-sm text-[#651C32]/80 flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#C5912C] mt-1 flex-shrink-0" />
                    {t.pricing.note}
                  </p>
                  <p className="text-sm text-[#651C32]/80 flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#C5912C] mt-1 flex-shrink-0" />
                    {t.pricing.special}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Program Modules */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.program.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {t.program.modules.map((module, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-[#C5912C]/10 hover:border-[#C5912C] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5912C] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-xs text-[#C5912C] font-semibold mb-1">{module.num}</p>
                      <h4 className="font-playfair text-lg font-bold text-[#651C32] mb-2">
                        {module.title}
                      </h4>
                      <p className="text-sm text-[#651C32]/70 leading-relaxed">
                        {module.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {/* Final Project */}
            <Card className="bg-gradient-to-r from-[#651C32] to-[#C5912C] p-8 rounded-3xl shadow-2xl text-white">
              <div className="flex items-start gap-4">
                <Award size={48} className="flex-shrink-0" />
                <div>
                  <h4 className="font-playfair text-2xl font-bold mb-3">
                    {t.program.finalProject.title}
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    {t.program.finalProject.desc}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* What's Included */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-[#651C32] to-[#C5912C] p-8 lg:p-12 rounded-3xl shadow-2xl text-white">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-center mb-8">
                {t.includes.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.includes.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C5912C] bg-white rounded-full flex-shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Requirements, Cancellation & Rules Grid */}
          <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Requirements */}
            <Card className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-xl font-bold text-[#651C32] mb-6 flex items-center gap-2">
                <Users size={24} className="text-[#C5912C]" />
                {t.requirements.title}
              </h3>
              <div className="space-y-3">
                {t.requirements.items.map((item, index) => (
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
                ? 'Réservez votre place dès maintenant - Places limitées par session'
                : 'اتصل بنا لمنااحجز مكانك الآن - أماكن محدودة لكل دورة'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BeginnerCakeDesign;