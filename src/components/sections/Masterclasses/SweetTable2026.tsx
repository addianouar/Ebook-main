import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, Download, MessageCircle } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import pattern from "@/assets/pattern.jpg";
import sweetTableFr from "@/assets/sweet table.webp";
import sweetTableAr from "@/assets/sweet table.webp";
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
        description: "Une formation globale pour apprendre à créer un buffet professionnel, aussi bien sur le plan pâtissier que décoratif",
        cta: "Réserver maintenant"
      },
      dates: {
        title: "DATE & HORAIRES",
        date: "DU 1ER MAI AU 10 MAI 2026",
        hours: "HEURES DE FORMATION : 11h00 – 16h00",
        duration: "PAUSE : 40 MIN",
        lastDayTitle: "ET POUR LE DERNIER JOUR (10 MAI) :",
        lastDaySchedule: [
          "10h00 – 14h00 : MISE EN PLACE DU SWEET TABLE FINAL ET SÉANCE DE PHOTOGRAPHIE PROFESSIONNELLE",
          "14h00 – 14h40 : PAUSE",
          "14h40 – 17h00 : AMBIANCE FESTIVE DE CLÔTURE, FÊTE DE FIN DE FORMATION",
          "17h00 : REMISE DES DIPLÔMES ET PHOTO DE LA PROMOTION"
        ]
      },
      pricing: {
        title: "TARIFICATION",
        anciens: {
          label: "Anciens élèves (ayant suivi une formation de base complète avant)",
          price: "12 500 MAD"
        },
        nouveaux: {
          label: "Nouveaux élèves ayant déjà fait une formation de base gâteau 2 étages",
          price: "15 000 MAD"
        },
        nouveauxSans: {
          label: "Nouveaux élèves n'ayant jamais suivi de formation de base",
          price: "20 000 MAD"
        },
        note: "INCLUS DANS TOUS LES TARIFS :"
      },
      program: {
        title: "PROGRAMME",
        modules: [
          {
            num: "MODULE 1",
            title: "CONCEPT & DIRECTION ARTISTIQUE",
            desc: "Définition du thème, moodboard, palette de couleurs, formes, volumes et cohérence visuelle du sweet table. Travail sur canvas pour toutes les conceptions nécessaires, y compris invitations, plans du buffet et idées décoratives."
          },
          {
            num: "MODULE 2",
            title: "GÂTEAU CENTRAL (3 ÉTAGES)",
            desc: "Réalisation du gâteau à 3 étages, pièce maîtresse intégrée au concept global."
          },
          {
            num: "MODULE 3",
            title: "ACCOMPAGNEMENTS (10 CRÉATIONS)",
            desc: "Cupcakes, cookies, cake pops, popsicles, rice crispies, donuts, verrines, macarons, chocolats, pyramides... avec travail sur l'harmonie, les textures et les saveurs."
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
            title: "DRAGÉES & FINITIONS LUXE",
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
            desc: "Réalisation d'un vrai sweet table pour un événement réel : conception, installation, mise en place finale et séance photo professionnelle pour Instagram et portfolio."
          }
        ],
        finalEvent: {
          title: "CLÔTURE - CÉLÉBRATION & REMISE DES DIPLÔMES",
          desc: "Chaque élève devint invité de l'événement qu'il a créé, dans une ambiance festive et musicale. Ils repartent avec toutes leurs créations : gâteau, accompagnements, papeterie, dragées et décorations, et reçoivent leur diplôme officiel. Une photo collective immortalise la promotion."
        }
      },
      includes: {
        title: "INCLUS DANS TOUS LES TARIFS",
        items: [
          "Formation complète sur 10 modules",
          "Tous les ingrédients et matériel pour créations pâtissières et décorations",
          "Supports et outils DIY",
          "Sortie terrain pratique",
          "Accès aux contacts professionnels clés",
          "Participation à l'événement final avec ambiance festive",
          "Accès aux groupe WhatsApp CHAT",
          "Vidéos d'enregistrements + photos",
          "Bloc-notes professionnels et stylos",
          "Coffret carnet professionnel",
          "Trousse complète de matériel pour le montage du gâteau et couverture (sans les ustensiles)",
          "Cadeaux offerts par notre Académie !",
          "Remise du diplôme officiel",
          "Participation à l'événement qu'il a créé",
          "Photo collective et immortaliser la promotion",
          "Trousse complète de matériel pour le montage du gâteau et couverture (+ Cadeaux offerts par notre Académie !)"
        ]
      },
      requirements: {
        title: "CONDITIONS DE PARTICIPATION",
        subtitle: "CONDITIONS DE PARTICIPATION – MASTERCLASS SWEET TABLE 2026",
        conditions: [
          {
            title: "ÂGE MINIMUM ET OUVERTURE",
            items: [
              "Âge minimum : 16 ans.",
              "Ouverture : La formation est ouverte à tous, hommes et femmes."
            ]
          },
          {
            title: "PRÉREQUIS ET TARIFS",
            items: [
              "Pas de prérequis obligatoires pour les nouveaux élèves.",
              "Les élèves ayant suivi une formation de base gâteau 2 étages bénéficient d'un tarif préférentiel.",
              "Les anciens élèves ayant suivi une formation de base complète avant 2026 bénéficient du tarif le plus avantageux."
            ]
          },
          {
            title: "INSCRIPTION ET RÉSERVATION",
            items: [
              "Les places sont strictement limitées à 12 participants pour garantir un suivi personnalisé.",
              "Chaque participant s'engage à suivre activement les modules et à respecter les règles.",
              "Réservation obligatoire via paiement d'un acompte minimum de 4 000 MAD",
              "Le paiement peut se faire en 2 ou 3 tranches. Le solde restant doit être réglé au plus tard une semaine avant le début de la formation."
            ]
          },
          {
            title: "PAIEMENT ET REMBOURSEMENT",
            items: [
              "Aucun remboursement n'est possible après le 5 avril 2026, sauf cas d'urgence médicale dûment justifiée par un certificat médical.",
              "En cas d'annulation, seules les dépenses non engagées seront partiellement remboursées selon le montant déjà payé."
            ]
          },
          {
            title: "MATÉRIEL ET INGRÉDIENTS",
            items: [
              "Tous les ingrédients et outils nécessaires pour la réalisation des créations pâtissières et décorations sont fournis.",
              "Les participants peuvent apporter leur propre matériel s'ils le souhaitent, mais ce n'est pas obligatoire."
            ]
          },
          {
            title: "PARTICIPATION ACTIVE ET RESPECT",
            items: [
              "Chaque participant s'engage à suivre activement les modules de manière active et respecter le planning des journées.",
              "Toute action irrespectueuse, menaçante ou mettant en danger la sécurité des autres participants peut entraîner l'exclusion de la formation sans remboursement."
            ]
          },
          {
            title: "SANTÉ ET SÉCURITÉ",
            items: [
              "Les participants doivent informer l'équipe de tout problème de santé pouvant affecter leur participation (allergies, conditions particulières...)."
            ]
          },
          {
            title: "DROITS D'IMAGE ET CONTENU",
            items: [
              "Les photos et vidéos prises lors de la formation et de l'événement final peuvent être utilisées par SARALÖWE ACADEMY pour communication et promotion.",
              "Il est formellement interdit de partager les vidéos ou photos de la formation (incluant les méthodes de travail ou les recettes, sans autorisation préalable).",
              "Il est bienvenu de partager sur les stories ou posts les photos finales du projet final (sweet table) si mise en scène finale."
            ]
          },
          {
            title: "DIPLÔME OFFICIEL",
            items: [
              "Les participants devront avoir complété l'ensemble des modules et du projet final pour recevoir le diplôme officiel de la masterclass."
            ]
          },
          {
            title: "ENGAGEMENT PERSONNEL",
            items: [
              "En s'inscrivant, chaque participant s'engage à respecter l'ensemble des conditions durant tout l'événement et à la formation et à l'événement final."
            ]
          }
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
        description: "تدريب شامل لتعلم إنشاء بوفيه احترافي كامل من الناحية الحلويات والديكور",
        cta: "احجز الآن"
      },
      dates: {
        title: "التواريخ والتوقيت",
        date: "من 1 مايو إلى 10 مايو 2026",
        hours: "أيام التكوين : 11:00 الى 16:00",
        duration: "استراحة : 40 دقيقة",
        lastDayTitle: "اليوم الأخير (10 مايو):",
        lastDaySchedule: [
          "10:00 – 14:00 : تركيب SWEET TABLE النهائي + جلسة تصوير احترافية",
          "14:00 – 14:40 : استراحة",
          "14:40 – 17:00 : أجواء احتفالية ونهاية التكوين",
          "17:00 : تسليم الشهادات + صورة جماعية"
        ]
      },
      pricing: {
        title: "التسعير",
        anciens: {
          label: "الطلعة القدماء (التاتبعا تكوينا أساسا كامل قبل 2026)",
          price: "12,500 درهم"
        },
        nouveaux: {
          label: "طلعة جديد كيما دايرا أساس في كيك تاستاجات 2 : 15,000 درهم",
          price: "15,000 درهم"
        },
        nouveauxSans: {
          label: "طلعة جديد بدون أي تكوين أساس",
          price: "20,000 درهم"
        },
        note: "مشمول في جميع التعريفات:"
      },
      program: {
        title: "البرنامج",
        modules: [
          {
            num: "الوحدة 1",
            title: "المفهوم والتوجيه الفني",
            desc: "تحديد الموضوع، الموودبورد، الأشكال، الأحجام والانسجام البصري لطاولة الحلويات. العمل على Canvas لإنجاز جميع التصاميم اللازمة، بما في ذلك الدعوات، مخططات الطاولة والأفكار الزخرفية."
          },
          {
            num: "الوحدة 2",
            title: "الكعك المركزي (3 طوابق)",
            desc: "إنجازكعكة من 3 طوابق، باعتبارها القطعة الرئيسية المدمجة في المفهوم العام."
          },
          {
            num: "الوحدة 3",
            title: "المرافقات (10 إبداعات)",
            desc: "كب كيك، كوكيز، كيك بوبس، بوبسيكل، رايس كريسبيز، دوناتس، فيرين، ماكرون، شوكولاتة، أهرامات... مع دراسة التناسق، الارتفاعات، القوام والنكهات."
          },
          {
            num: "الوحدة 4",
            title: "الورقيات والأشغال اليدوية (Papeterie & Craft)",
            desc: "تصميم وقص عناصر مخصصة: الدعوات، التوبرز، الملصقات، اللوحات، الحوامل، ديكورات DIY بإحترافية وتشطيبات فاخرة."
          },
          {
            num: "الوحدة 5",
            title: "فن الطاولة والسينوغرافيا",
            desc: "دراسة المواد، الأشكال، الارتفاعات، القراءة البصرية وتنظيم الطاولة حسب المساحة."
          },
          {
            num: "الوحدة 6",
            title: "اختيار الدراجي (الجودة، النكهات، الألوان)، تصميم وخياطة الأكياس، تشطيبات راقية",
            desc: "اختيار الدراجي (الجودة، النكهات، الألوان)، تصميم وخياطة الأكياس، تشطيبات راقية."
          },
          {
            num: "الوحدة 7",
            title: "الخروج الميداني + DIY",
            desc: "جمع المستلزمات، الديكورات والمواد، التعرف على الموردين، تقدير الميزانية و DIY ذكي."
          },
          {
            num: "الوحدة 8",
            title: "الشبكة المهنية",
            desc: "التعرف على جهات أساسية: نجارين، خياطين، طباعين، حرفيين ومقدمي خدمات ضروريين."
          },
          {
            num: "الوحدة 9",
            title: "التصوير والإنستغرام",
            desc: "تقنيات التصوير الاحترافي، الإضاءة، الزوايا، الكادر، التركيب وإنشاء صور مناسبة لوسائل التواصل الاجتماعي."
          },
          {
            num: "الوحدة 10",
            title: "مشروع حقيقي وتصوير نهائي",
            desc: "إنجاز Sweet table حقيقي لحدث فعلي: التصميم، التنصيب، التركيب النهائي وجلسة تصوير احترافية لإنستغرام وبورتفوليو."
          }
        ],
        finalEvent: {
          title: "الختام – الاحتفال وتسليم الشهادات",
          desc: "كل متدرب يصبح ضيف في الحدث الذي أنجزه، في أجواء احتفالية وموسيقية. يعود الجميع بجميع إبداعاتهم (الكيكة، المرافقات، الورقيات، الدراجي، الديكور)، ويحصل كل منهم على الشهادة الرسمية. صورة جماعية للدفعة تخلّد هذه اللحظة."
        }
      },
      includes: {
        title: "مشمول في جميع التعريفات",
        items: [
          "تكوين كامل (10 وحدات)",
          "جميع المكونات والمعدات للإبداعات",
          "مستلزمات وأدوات DIY",
          "خروج ميداني",
          "الوصول إلى شبكة موردين",
          "مشاركة في الحدث النهائي جو احتفالي",
          "الوصول إلى مجموعة واتساب CHAT",
          "فيديوهات تسجيلات وصور",
          "دفتر ملاحظات واقلام",
          "حافظة ملفات",
          "حقيبة كاملة لإعدادات ترکيب الكيکة (هدية منقدمة من الأكاديمية)",
          "شهادة رسمية",
          "مشاركة في الحدث النهائي الذي أنجز",
          "صورة جماعية تخليدا للدفعة",
          "حقيبة كاملة لمعدات تركيب الكعكة (+ هدية متقدمة من الأكاديمية)"
        ]
      },
      requirements: {
        title: "شروط المشاركة",
        subtitle: "شروط المشاركة – ماستركلاس SWEET TABLE 2026",
        conditions: [
          {
            title: "الحد الأدنى للعمر والفتح",
            items: [
              "الحد الأدنى للعمر: 16 سنة",
              "الفتح: التدريب مفتوح للجميع، رجالاً ونساءً"
            ]
          },
          {
            title: "المتطلبات والأسعار",
            items: [
              "لا توجد متطلبات مسبقة للطلاب الجدد",
              "الطلاب الذين حضروا دورة كيك بطابقين يحصلون على تخفيض في السعر",
              "الطلاب القدامى الذين أتموا دورة أساسية كاملة قبل 2026 يحصلون على أفضل سعر"
            ]
          },
          {
            title: "التسجيل والحجز",
            items: [
              "الأماكن محدودة بـ 12 مشاركاً مضموناً لضمان متابعة شخصية",
              "يلتزم كل مشارك بمتابعة الوحدات بنشاط واحترام القواعد",
              "الحجز الإلزامي عبر دفع دفعة مقدمة بحد أدنى 4,000 درهم",
              "يمكن أن يتم الدفع على دفعتين أو 3 دفعات. يجب دفع المبلغ المتبقي على الأقل أسبوعاً قبل بداية التدريب"
            ]
          },
          {
            title: "الدفع والاسترجاع",
            items: [
              "لا يوجد استرداد ممكن بعد 5 أبريل 2026، إلا في حالة طارئة طبية مبررة بشهادة طبية",
              "في حالة الإلغاء، سيتم استرداد المبلغ المتبقي جزئياً فقط وفقاً للأموال التي دفعت فعلاً"
            ]
          },
          {
            title: "المواد والمستلزمات",
            items: [
              "جميع المكونات والأدوات اللازمة لإنجاز الحلويات والديكورات متوفرة",
              "يمكن للمشتركين إحضار أدواتهم الخاصة إذا رغبوا، لكن ليس إلزامياً"
            ]
          },
          {
            title: "المشاركة الفعالة واحترام الآخرين",
            items: [
              "يجب على كل مشارك متابعة الوحدات بنشاط واحترام جدول الأيام",
              "أي سلوك متهور أو عدم احترام أو يضع تعريف الأمن للآخرين قد يؤدي إلى استبعاد المتدرب دون استرجاع المبلغ"
            ]
          },
          {
            title: "الصحة والسلامة",
            items: [
              "يجب على المشاركين إبلاغ الفريق بأي حالة صحية أو حساسية قد تؤثر على مشاركتهم"
            ]
          },
          {
            title: "حقوق الصورة والمحتوى",
            items: [
              "يمكن استخدام الصور والفيديوهات المتعلقة خلال التدريب والحدث النهائي من قبل SARALOWE ACADEMY للتواصل والترويج والتواصل",
              "ممنوع منعاً باتاً مشاركة فيديوهات أو صور التدريب (بما في ذلك طرق العمل أو الوصفات)، دون إذن مسبق",
              "يمكن مشاركة الصور النهائية للمشروع النهائي (SWEET TABLE مكتمل) على القصص أو المنشورات الشخصية"
            ]
          },
          {
            title: "الشهادة الرسمية",
            items: [
              "على المشاركين إتمام جميع الوحدات والمشروع النهائي للحصول على الشهادة الرسمية للماستركلاس"
            ]
          },
          {
            title: "الالتزام",
            items: [
              "عند التسجيل، يلتزم كل مشارك باحترام كامل الشروط والمشاركة الفعالة في الدورة والحدث النهائي"
            ]
          }
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
   const link = document.createElement("a");
    link.href = "/BROCHURE SWEET TABLE.pdf";
    link.download = "BROCHURE SWEET TABLE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          {/* Dates & Schedule Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-6 text-center">
                {t.dates.title}
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#651C32] mb-2">{t.dates.date}</p>
                  <p className="text-[#C5912C] font-semibold">{t.dates.hours}</p>
                  <p className="text-[#651C32]/70">{t.dates.duration}</p>
                </div>
                <div className="bg-[#F2EFE8] p-6 rounded-2xl mt-6">
                  <p className="font-bold text-[#651C32] mb-4">{t.dates.lastDayTitle}</p>
                  <div className="space-y-2">
                    {t.dates.lastDaySchedule.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Clock size={16} className="text-[#C5912C] mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#651C32]/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#651C32] mb-8 text-center">
                {t.pricing.title}
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-[#C5912C] rounded-xl p-6 bg-[#C5912C]/5">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.anciens.label}</p>
                  <p className="text-4xl font-bold text-[#C5912C]">{t.pricing.anciens.price}</p>
                </div>
                <div className="border-2 border-[#651C32]/30 rounded-xl p-6">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.nouveaux.label}</p>
                  <p className="text-3xl font-bold text-[#651C32]">{t.pricing.nouveaux.price}</p>
                </div>
                <div className="border-2 border-[#651C32]/30 rounded-xl p-6">
                  <p className="text-sm text-[#651C32]/70 mb-2">{t.pricing.nouveauxSans.label}</p>
                  <p className="text-3xl font-bold text-[#651C32]">{t.pricing.nouveauxSans.price}</p>
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

            {/* Final Event */}
            <Card className="bg-gradient-to-r from-[#651C32] to-[#C5912C] p-8 rounded-3xl shadow-2xl text-white">
              <div className="flex items-start gap-4">
                <Award size={48} className="flex-shrink-0" />
                <div>
                  <h4 className="font-playfair text-2xl font-bold mb-3">
                    {t.program.finalEvent.title}
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    {t.program.finalEvent.desc}
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

          {/* Requirements Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-4">
                {t.requirements.title}
              </h2>
              <p className="text-[#C5912C] text-center mb-8">{t.requirements.subtitle}</p>
              <div className="space-y-6">
                {t.requirements.conditions.map((section, index) => (
                  <div key={index} className="border-l-4 border-[#C5912C] pl-6">
                    <h4 className="font-bold text-[#651C32] mb-3">{section.title}</h4>
                    <div className="space-y-2">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#C5912C] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-[#651C32]/80 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <LuxuryButton onClick={handleWhatsAppBooking} className="text-lg px-12 py-6 mb-4">
              <MessageCircle size={24} />
              {t.hero.cta}
            </LuxuryButton>
            <p className="text-[#651C32]/60 text-sm">
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