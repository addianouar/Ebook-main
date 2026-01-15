import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, Download, MessageCircle } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import pattern from "@/assets/pattern.jpg";
import sweetTableFr from "@/assets/sweet-table-fr.png";
import sweetTableAr from "@/assets/sweet-table-ar.png";
import Swal from "sweetalert2";

const SweetTable2026 = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date("2026-05-01T11:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    fr: {
      hero: {
        badge: "FORMATION EXCLUSIVE 2026",
        title: "FORMATION SWEET TABLE",
        subtitle: "Masterclass Complète | Mai 2026",
        description: "Une formation globale pour apprendre à créer un buffet professionnel complet",
        cta: "Réserver maintenant"
      },
      dates: {
        title: "Dates & Horaires",
        date: "Du 1er Mai au 10 Mai 2026",
        hours: "11h00 – 16h00",
        duration: "40 minutes de pause",
        lastDay: "10 Mai : Mise en place finale + Photographie"
      },
      pricing: {
        title: "Tarification",
        early: {
          label: "Tarif Anticipé (jusqu'au 1er avril 2026)",
          price: "12,500 MAD",
          savings: "Économisez 7,500 MAD"
        },
        standard: {
          label: "Tarif Standard (étudiants ayant déjà suivi une formation de base)",
          price: "15,000 MAD",
          savings: "Économisez 5,000 MAD"
        },
        late: {
          label: "Tarif Tardif (nouveaux étudiants sans formation de base préalable)",
          price: "20,000 MAD"
        },
        note: "Places strictement limitées à 12 participants"
      },
      program: {
        title: "Programme Complet - 10 Modules",
        modules: [
          {
            num: "MODULE 1",
            title: "CONCEPT & DIRECTION ARTISTIQUE",
            desc: "Définition du thème, moodboard, palette de couleurs, formes, volumes et cohérence visuelle. Travail sur canvas pour les conceptions, invitations, plans du buffet."
          },
          {
            num: "MODULE 2",
            title: "GÂTEAU CENTRAL (3 ÉTAGES)",
            desc: "Réalisation du gâteau à 3 étages, pièce maîtresse intégrée au concept global."
          },
          {
            num: "MODULE 3",
            title: "ACCOMPAGNEMENTS (10 CRÉATIONS)",
            desc: "Cupcakes, cookies, cake pops, popsicles, rice crispies, donuts, verrines, macarons, chocolats, pyramides... avec harmonie, textures et saveurs."
          },
          {
            num: "MODULE 4",
            title: "PAPETERIE & CRAFT",
            desc: "Création et découpe des éléments personnalisés : invitations, toppers, étiquettes, panneaux, supports, décorations DIY professionnelles et finitions premium."
          },
          {
            num: "MODULE 5",
            title: "ART DE LA TABLE & SCÉNOGRAPHIE",
            desc: "Choix des supports, matières, formes, hauteurs, lecture visuelle et organisation du buffet selon l'espace."
          },
          {
            num: "MODULE 6",
            title: "DRESSAGE & FINITIONS LUXE",
            desc: "Choix des dragées (qualité, saveurs, couleurs), confection et couture des sacs, finitions premium."
          },
          {
            num: "MODULE 7",
            title: "SORTIE TERRAIN + DIY",
            desc: "Collecte de supports, décors et matières, approche fournisseurs, budget et DIY intelligent."
          },
          {
            num: "MODULE 8",
            title: "RÉSEAU PROFESSIONNEL",
            desc: "Contacts clés : menuisiers, couturières, imprimeurs, artisans et prestataires indispensables."
          },
          {
            num: "MODULE 9",
            title: "PHOTOGRAPHIE | INSTAGRAM",
            desc: "Techniques de photographie professionnelle, éclairage, angles, cadrage, composition et création de visuels adaptés aux réseaux sociaux."
          },
          {
            num: "MODULE 10",
            title: "PROJET RÉEL & PHOTOGRAPHIE FINALE",
            desc: "Réalisation d'un vrai sweet table pour un événement réel : conception, installation, mise en place finale et séance photo professionnelle."
          }
        ]
      },
      includes: {
        title: "Inclus dans la formation",
        items: [
          "Formation complète sur 10 modules",
          "Tous les ingrédients et matériel pour créations pâtissières et décorations",
          "Supports et outils DIY",
          "Sortie terrain pratique",
          "Accès aux contacts professionnels clés",
          "Participation à l'événement final avec ambiance festive",
          "Accès aux groupe WhatsApp CHAT",
          "Vidéos d'enregistrements +photos",
          "Bloc-notes professionnels et stylos",
          "Coffret carnet professionnel",
          "Trousse complète de matériel pour le montage du gâteau et couverture (sans les ustensiles)",
          "Cadeaux offerts par notre Académie !",
          "Remise du diplôme officiel",
          "Participation à l'événement qu'il a créé",
          "Photo collective et immortaliser la promotion"
        ]
      },
      requirements: {
        title: "Prérequis et Conditions",
        items: [
          "Âge minimum : 16 ans",
          "Ouverture : Formation ouverte à tous, hommes et femmes",
          "Les élèves ayant suivi une formation de base gâteau 2 étages bénéficient d'un tarif préférentiel",
          "Les anciens élèves ayant suivi une formation de base complète avant 2026 bénéficient du tarif le plus avantageux",
          "Inscription et réservation strictement limitées à 12 participants",
          "Réservation obligatoire via paiement d'un acompte minimum de 4,000 MAD"
        ]
      },
      cta: {
        whatsapp: "Réserver via WhatsApp",
        download: "Télécharger la brochure"
      }
    },
    ar: {
      hero: {
        badge: "تدريب حصري 2026",
        title: "تكوين Sweet Table",
        subtitle: "ماستركلاس كامل | مايو 2026",
        description: "تدريب شامل لتعلم إنشاء بوفيه احترافي كامل",
        cta: "احجز الآن"
      },
      dates: {
        title: "التواريخ والتوقيت",
        date: "من 1 مايو إلى 10 مايو 2026",
        hours: "11:00 – 16:00",
        duration: "استراحة 40 دقيقة",
        lastDay: "10 مايو: التركيب النهائي + التصوير الاحترافي"
      },
      pricing: {
        title: "التسعير",
        early: {
          label: "الطلعة المقدَّاس (الحتا تكوينا سابقاً كامل قبل 2026)",
          price: "12,500 درهم",
          savings: "وفر 7,500 درهم"
        },
        standard: {
          label: "طلعة جديد تدعيم أساس قبل: من طالبين: 15,000 درهم",
          price: "15,000 درهم",
          savings: "وفر 5,000 درهم"
        },
        late: {
          label: "طلعة جديد بدون أي تكوين أساس: 20,000 درهم",
          price: "20,000 درهم"
        },
        note: "الأماكن محدودة بـ 12 مشاركاً فقط"
      },
      program: {
        title: "البرنامج الكامل - 10 وحدات",
        modules: [
          {
            num: "الوحدة 1",
            title: "المفهوم والتوجيه الفني",
            desc: "تحديد الموضوع، لوحة المزاج، لوحة الألوان، الأشكال، الأحجام والانسجام البصري. العمل على Canvas لإنجاز جميع التصاميم اللازمة."
          },
          {
            num: "الوحدة 2",
            title: "الكعكة المركزية (3 طوابق)",
            desc: "إنجاز كعكة من 3 طوابق، باعتبارها القطعة الرئيسية المدمجة في المفهوم العام."
          },
          {
            num: "الوحدة 3",
            title: "المرافقات (10 إبداعات)",
            desc: "كب كيك، كوكيز، كيك بوبس، بوبسيكل، رايس كريسبيز، دوناتس، فيرين، ماكرون، شوكولاتة، أهرامات... مع دراسة التناسق، الارتفاعات، النكهات والتوازن."
          },
          {
            num: "الوحدة 4",
            title: "الورقيات والأشغال اليدوية",
            desc: "تصميم وقص عناصر مخصصة: الدعوات، التوبرز، الملصقات، اللوحات، الحوامل، ديكورات DIY بإحترافية وتشطيبات فاخرة."
          },
          {
            num: "الوحدة 5",
            title: "فن الطاولة والسينوغرافيا",
            desc: "دراسة الدعامات، المواد، الأشكال، الارتفاعات، القراءة البصرية وتنظيم الطاولة حسب المساحة."
          },
          {
            num: "الوحدة 6",
            title: "الدراجيه والتشطيبات الفاخرة",
            desc: "اختيار الدراجيه (الجودة، النكهات، الألوان)، تصميم وخياطة الأكياس، تشطيبات راقية."
          },
          {
            num: "الوحدة 7",
            title: "خرجة ميدانية + DIY",
            desc: "جمع المسلتزمات، الديكورات والمواد، التعرف على الموردين، تقدير الميزانية و DIY ذكي."
          },
          {
            num: "الوحدة 8",
            title: "الشبكة المهنية",
            desc: "التعرف على جهات أساسية: نجارين، خياطين، مطابع، حرفيين وخدمات ضرورية."
          },
          {
            num: "الوحدة 9",
            title: "التصوير والإنستغرام",
            desc: "تقنيات التصوير الاحترافي: الإضاءة، الزوايا، الكادر، تكوين صور ملائمة لوسائل التواصل الاجتماعي."
          },
          {
            num: "الوحدة 10",
            title: "مشروع حقيقي وتصوير نهائي",
            desc: "إنجاز Sweet table حقيقي لحدث فعلي: التصميم، التنصيب، التركيب النهائي وجلسة تصوير احترافية لانستغرام."
          }
        ]
      },
      includes: {
        title: "مشمول في جميع التعريفات",
        items: [
          "تكوين كامل (10 وحدات)",
          "جميع المكونات والمعدات للإبداعات",
          "مسلتزمات وأدوات DIY",
          "خروج ميداني",
          "تصوير احترافي",
          "شهادة رسمية",
          "المشاركة في الحدث النهائي",
          "الوصول إلى شبكة موردين",
          "مذكرة احترافية",
          "دفتر ملاحظات وأقلام",
          "حافظة ملفات",
          "حقيبة كاملة لمعدات تركيب الكعكة (من الأكاديمية)",
          "هدايا الأكاديمية",
          "تسليم الشهادات والصور الجماعية"
        ]
      },
      requirements: {
        title: "شروط المشاركة",
        items: [
          "الحد الأدنى للعمر: 16 سنة",
          "الفتح: التكوين مفتوح للجميع، رجالاً ونساءً",
          "المتطلبات والأسعار: لا توجد متطلبات مسبقة للطلاب الجدد",
          "الطلاب الذين أتموا دورة أساسية كعكة طابقين يحصلون على تخفيض",
          "الطلاب القدامى الذين أتموا دورة أساسية كاملة قبل 2026 يحصلون على أفضل سعر",
          "التسجيل والحجز: يحتاج كل مشارك متابعة الوحدات بنشاط واحترام",
          "الأماكن محدودة بـ 12 مشتركاً مضموناً",
          "الحجز الإلزامي عبر دفع دفعة مقدمة بحد أدنى 4,000 درهم"
        ]
      },
      cta: {
        whatsapp: "احجز عبر واتساب",
        download: "تحميل الكتيب"
      }
    }
  };

  const t = content[language];

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      language === 'fr'
        ? "Bonjour! Je suis intéressé(e) par la Formation Sweet Table 2026. Pouvez-vous me fournir plus d'informations sur la réservation?"
        : "مرحباً! أنا مهتم بتدريب Sweet Table 2026. هل يمكنكم تزويدي بمزيد من المعلومات حول الحجز؟"
    );
    window.open(`https://wa.me/+212664576477?text=${message}`, "_blank");
  };

  const handleDownloadBrochure = () => {
    Swal.fire({
      title: language === 'fr' ? 'Téléchargement de la brochure' : 'تحميل الكتيب',
      text: language === 'fr' 
        ? 'La brochure complète sera envoyée à votre email après inscription.'
        : 'سيتم إرسال الكتيب الكامل إلى بريدك الإلكتروني بعد التسجيل.',
      icon: 'info',
      confirmButtonColor: '#651C32',
      confirmButtonText: language === 'fr' ? 'Contacter via WhatsApp' : 'اتصل عبر واتساب'
    }).then((result) => {
      if (result.isConfirmed) {
        handleWhatsAppBooking();
      }
    });
  };

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

          {/* Countdown Timer */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#651C32] to-[#C5912C] rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-4 gap-4 text-center text-white">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm lg:text-base mt-2">{language === 'fr' ? 'Jours' : 'أيام'}</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm lg:text-base mt-2">{language === 'fr' ? 'Heures' : 'ساعات'}</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm lg:text-base mt-2">{language === 'fr' ? 'Minutes' : 'دقائق'}</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm lg:text-base mt-2">{language === 'fr' ? 'Secondes' : 'ثواني'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Brochure Image Display */}
          <div className="max-w-6xl mx-auto mb-16">
            <img
              src={language === 'fr' ? sweetTableFr : sweetTableAr}
              alt="Sweet Table 2026 Brochure"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <LuxuryButton onClick={handleWhatsAppBooking} className="gap-2">
              <MessageCircle size={20} />
              {t.cta.whatsapp}
            </LuxuryButton>
            <button
              onClick={handleDownloadBrochure}
              className="bg-white text-[#651C32] border-2 border-[#651C32] px-8 py-4 rounded-full font-semibold hover:bg-[#651C32] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t.cta.download}
            </button>
          </div>

          {/* Dates & Pricing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Dates Card */}
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-6 flex items-center gap-3">
                <Calendar className="text-[#C5912C]" size={32} />
                {t.dates.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-[#C5912C] mt-1" />
                  <div>
                    <p className="font-semibold text-[#651C32]">{t.dates.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#C5912C] mt-1" />
                  <div>
                    <p className="font-semibold text-[#651C32]">{t.dates.hours}</p>
                    <p className="text-sm text-[#651C32]/70">{t.dates.duration}</p>
                  </div>
                </div>
                <div className="bg-[#C5912C]/10 p-4 rounded-xl mt-4">
                  <p className="text-sm text-[#651C32] font-semibold">{t.dates.lastDay}</p>
                </div>
              </div>
            </Card>

            {/* Pricing Card */}
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-6 flex items-center gap-3">
                <Award className="text-[#C5912C]" size={32} />
                {t.pricing.title}
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-[#C5912C] rounded-xl p-4 bg-[#C5912C]/5">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.early.label}</p>
                  <p className="text-3xl font-bold text-[#C5912C]">{t.pricing.early.price}</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">{t.pricing.early.savings}</p>
                </div>
                <div className="border-2 border-[#651C32]/30 rounded-xl p-4">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.standard.label}</p>
                  <p className="text-2xl font-bold text-[#651C32]">{t.pricing.standard.price}</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">{t.pricing.standard.savings}</p>
                </div>
                <div className="border-2 border-[#651C32]/30 rounded-xl p-4">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.late.label}</p>
                  <p className="text-2xl font-bold text-[#651C32]">{t.pricing.late.price}</p>
                </div>
                <div className="bg-[#651C32] text-white p-3 rounded-xl mt-4">
                  <p className="text-sm font-semibold text-center">{t.pricing.note}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Program Modules */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.program.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Requirements */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-8">
                {t.requirements.title}
              </h2>
              <div className="space-y-3">
                {t.requirements.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C5912C] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#651C32]/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <LuxuryButton onClick={handleWhatsAppBooking} className="text-lg px-12 py-6">
              <MessageCircle size={24} />
              {t.hero.cta}
            </LuxuryButton>
            <p className="text-[#651C32]/60 text-sm mt-4">
              {language === 'fr' 
                ? 'Places limitées - Réservez maintenant pour garantir votre place'
                : 'أماكن محدودة - احجز الآن لضمان مكانك'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetTable2026;