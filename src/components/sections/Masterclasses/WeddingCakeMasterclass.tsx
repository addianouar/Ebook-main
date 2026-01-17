import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, MessageCircle, MapPin, DollarSign } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import pattern from "@/assets/pattern.jpg";
import Swal from "sweetalert2";

const WeddingCakeMasterclass = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      hero: {
        badge: "FORMATION AVANCÉE",
        title: "MASTERCLASS WEDDING CAKE",
        subtitle: "Formation Avancée | Présentiel & En Ligne",
        description: "Formation avancée dédiée exclusivement aux gâteaux de mariage. Cette masterclass aborde le wedding cake comme un système complet : conception, ingénierie pâtissière, exécution, finitions haut de gamme et gestion professionnelle.",
        cta: "Réserver maintenant"
      },
      formats: {
        title: "Formats Disponibles",
        presential: {
          name: "Présentiel",
          price: "4,500 DH",
          features: [
            "8 participants maximum",
            "Travail en groupe sur wedding cake 5 étages",
            "100% vrai gâteau",
            "Introduction au polystyrène sur demande",
            "Repartez avec vos dégustations",
            "Certificat de participation"
          ]
        },
        online: {
          name: "En Ligne",
          price: "3,000 DH",
          features: [
            "Formation via Google Meet",
            "12 participants maximum",
            "Exécution ou observation active",
            "Selon choix du participant",
            "Certificat de participation"
          ]
        }
      },
      locations: {
        title: "Prochaines Sessions",
        duration: "4 jours",
        schedule: "11h - 17h (40 min pause)",
        dates: [
          { date: "8 au 11 avril", status: "available" },
          { date: "4 au 7 juin", status: "available" }
        ],
        labels: {
          available: "Places disponibles",
          almost: "Presque complet",
          full: "COMPLET"
        }
      },
      program: {
        title: "Programme Complet - 6 Phases",
        phases: [
          {
            num: "PHASE 1",
            title: "CONCEPTION & MODÉLISATION",
            subtitle: "Penser avant de produire",
            steps: [
              {
                name: "Analyse du projet & brief client",
                desc: "Comprendre le contexte : nombre d'invités, lieu, climat, timing, thème et contraintes. Traduire une demande émotionnelle en données techniques exploitables."
              },
              {
                name: "Sketching & modélisation visuelle",
                desc: "Sketching professionnel pour définir : proportions, hauteurs, volumes, lignes et équilibre visuel. Le dessin devient une carte technique du gâteau final."
              }
            ]
          },
          {
            num: "PHASE 2",
            title: "INGÉNIERIE PÂTISSIÈRE",
            subtitle: "La stabilité avant la beauté",
            steps: [
              {
                name: "Sélection des recettes adaptées",
                desc: "Introduction directe aux recettes utilisées : cakes porteurs, fourrages stables, ganaches d'assemblage et de couverture. Comprendre la relation entre texture, poids et tenue dans le temps."
              },
              {
                name: "Calculs & planification",
                desc: "Calcul des quantités, des étages, des supports et du matériel. Organisation du planning de production sur plusieurs jours (workflow professionnel)."
              },
              {
                name: "Système d'équilibre & structures internes",
                desc: "Analyse des systèmes de soutien : tiges, plateaux, ancrage central, répartition des charges. Le wedding cake est étudié comme une structure mécanique comestible."
              }
            ]
          },
          {
            num: "PHASE 3",
            title: "EXÉCUTION & ASSEMBLAGE",
            subtitle: "Transformer le plan en réalité",
            steps: [
              {
                name: "Préparations, cuisson & mise à niveau",
                desc: "Cuisson contrôlée, découpe, nivelage et préparation des bases. Chaque étage est préparé pour garantir stabilité et précision."
              },
              {
                name: "Montage & sécurisation",
                desc: "Assemblage méthodique, alignement parfait, verrouillage des étages. Techniques pour éviter affaissement, glissement ou déformation."
              }
            ]
          },
          {
            num: "PHASE 4",
            title: "FINITIONS & DESIGN HAUT DE GAMME",
            subtitle: "La technique au service de l'élégance",
            steps: [
              {
                name: "Couverture professionnelle",
                desc: "Travail de la pâte à sucre et/ou de la crème au beurre : lissage net, angles propres, finitions adaptées au wedding cake de luxe."
              },
              {
                name: "Décoration avancée & détails premium",
                desc: "Fleurs (sucre ou beurre), glaçage royal, stencils, textures modernes sur pâte à sucre ou crème au beurre. Gestion de l'équilibre visuel et du rythme décoratif."
              }
            ]
          },
          {
            num: "PHASE 5",
            title: "LOGISTIQUE & VALORISATION",
            subtitle: "Un wedding cake réussi arrive intact… et se vend bien",
            steps: [
              {
                name: "Transport, livraison & gestion des risques",
                desc: "Préparation au transport, conditions climatiques, montage sur site, solutions face aux imprévus. Anticiper l'échec pour garantir le succès."
              },
              {
                name: "Session photographie professionnelle",
                desc: "Mise en scène, lumière, angles et détails. Créer un contenu visuel cohérent avec un positionnement haut de gamme."
              }
            ]
          },
          {
            num: "PHASE 6",
            title: "VISION PROFESSIONNELLE",
            subtitle: "Penser comme une wedding cake designer",
            steps: [
              {
                name: "Lecture critique du projet final",
                desc: "Analyse du résultat : structure, esthétique, cohérence et faisabilité réelle. Comprendre comment améliorer, optimiser et adapter à différents contextes."
              }
            ]
          }
        ]
      },
      requirements: {
        title: "Conditions de Participation",
        items: [
          "Âge minimum : 16 ans",
          "Formation ouverte aux femmes et aux hommes",
          "Priorité aux anciens élèves ayant suivi une formation de base en cake design chez SARALÖWE Academy",
          "Les participants doivent avoir une base en cake design (gâteaux à étages ou techniques similaires)",
          "Inscription validée uniquement après confirmation et paiement",
          "Les places étant limitées, priorité donnée selon : anciens élèves → nouvelles inscriptions → liste d'attente",
          "Respect du planning : tous les participants doivent suivre le programme aux horaires indiqués"
        ]
      },
      rules: {
        title: "Utilisation des Vidéos & Matériel",
        items: [
          "En présentiel, les participants peuvent filmer pour usage personnel uniquement",
          "Les vidéos de formation en ligne sont strictement privées, non partageables et protégées par SARALÖWE Academy",
          "Matériel et ingrédients fournis pour la formation",
          "Respect des règles d'hygiène et d'utilisation obligatoire",
          "Les participants s'engagent à respecter l'éthique et le comportement professionnel durant toute la masterclass"
        ]
      },
      cta: {
        whatsapp: "Réserver via WhatsApp",
        moreInfo: "Demander plus d'informations"
      }
    },
    ar: {
      hero: {
        badge: "التدريب المتقدم",
        title: "ماستركلاس كعكة الزفاف",
        subtitle: "تدريب متقدم | حضوري وعبر الإنترنت",
        description: "تدريب متقدم مخصص حصرياً لكعكات الزفاف. تتناول هذه الماستركلاس كعكة الزفاف كنظام كامل: التصميم، الهندسة الحلوانية، التنفيذ، اللمسات الراقية والإدارة الاحترافية.",
        cta: "احجز الآن"
      },
      formats: {
        title: "الصيغ المتاحة",
        presential: {
          name: "حضوري",
          price: "4,500 درهم",
          features: [
            "8 مشاركين كحد أقصى",
            "العمل الجماعي على كعكة زفاف 5 طوابق",
            "100٪ كعكة حقيقية",
            "مقدمة للبوليستيرين عند الطلب",
            "المغادرة مع التذوق الخاص بك",
            "شهادة مشاركة"
          ]
        },
        online: {
          name: "عبر الإنترنت",
          price: "3,000 درهم",
          features: [
            "التدريب عبر Google Meet",
            "12 مشاركاً كحد أقصى",
            "التنفيذ أو المراقبة النشطة",
            "حسب اختيار المشارك",
            "شهادة مشاركة"
          ]
        }
      },
      locations: {
        title: "الدورات القادمة",
        duration: "4 أيام",
        schedule: "11:00 - 17:00 (استراحة 40 دقيقة)",
        dates: [
          { date: "8 إلى 11 أبريل", status: "available" },
          { date: "4 إلى 7 يونيو", status: "available" }
        ],
        labels: {
          available: "أماكن متاحة",
          almost: "شبه مكتمل",
          full: "مكتمل"
        }
      },
      program: {
        title: "البرنامج الكامل - 6 مراحل",
        phases: [
          {
            num: "المرحلة 1",
            title: "التصميم والنمذجة",
            subtitle: "التفكير قبل الإنتاج",
            steps: [
              {
                name: "تحليل المشروع وملخص العميل",
                desc: "فهم السياق: عدد الضيوف، المكان، المناخ، التوقيت، الموضوع والقيود. ترجمة طلب عاطفي إلى بيانات تقنية قابلة للاستغلال."
              },
              {
                name: "الرسم والنمذجة البصرية",
                desc: "رسم احترافي لتحديد: النسب، الارتفاعات، الأحجام، الخطوط والتوازن البصري. يصبح الرسم خريطة تقنية للكعكة النهائية."
              }
            ]
          },
          {
            num: "المرحلة 2",
            title: "الهندسة الحلوانية",
            subtitle: "الاستقرار قبل الجمال",
            steps: [
              {
                name: "اختيار الوصفات المناسبة",
                desc: "مقدمة مباشرة للوصفات المستخدمة: الكعك الحامل، الحشوات المستقرة، جاناش التجميع والتغطية. فهم العلاقة بين الملمس والوزن والثبات مع مرور الوقت."
              },
              {
                name: "الحسابات والتخطيط",
                desc: "حساب الكميات والطوابق والدعامات والمعدات. تنظيم جدول الإنتاج على مدى عدة أيام (سير عمل احترافي)."
              },
              {
                name: "نظام التوازن والهياكل الداخلية",
                desc: "تحليل أنظمة الدعم: القضبان، الصواني، التثبيت المركزي، توزيع الأحمال. تُدرس كعكة الزفاف كهيكل ميكانيكي صالح للأكل."
              }
            ]
          },
          {
            num: "المرحلة 3",
            title: "التنفيذ والتجميع",
            subtitle: "تحويل الخطة إلى واقع",
            steps: [
              {
                name: "التحضيرات والخبز والتسوية",
                desc: "خبز مُتحكم فيه، قطع، تسوية وتحضير القواعد. يتم تحضير كل طابق لضمان الاستقرار والدقة."
              },
              {
                name: "التركيب والتأمين",
                desc: "تجميع منهجي، محاذاة مثالية، قفل الطوابق. تقنيات لتجنب الانهيار أو الانزلاق أو التشوه."
              }
            ]
          },
          {
            num: "المرحلة 4",
            title: "اللمسات النهائية والتصميم الراقي",
            subtitle: "التقنية في خدمة الأناقة",
            steps: [
              {
                name: "التغطية الاحترافية",
                desc: "العمل بعجينة السكر و/أو كريمة الزبدة: تنعيم نظيف، زوايا حادة، تشطيبات مناسبة لكعكة الزفاف الفاخرة."
              },
              {
                name: "الزخرفة المتقدمة والتفاصيل المميزة",
                desc: "الزهور (سكر أو زبدة)، الزجاج الملكي، الإستنسل، الأنسجة الحديثة على عجينة السكر أو كريمة الزبدة. إدارة التوازن البصري والإيقاع الزخرفي."
              }
            ]
          },
          {
            num: "المرحلة 5",
            title: "اللوجستيات والتقييم",
            subtitle: "كعكة زفاف ناجحة تصل سليمة... وتُباع جيداً",
            steps: [
              {
                name: "النقل والتوصيل وإدارة المخاطر",
                desc: "التحضير للنقل، الظروف المناخية، التركيب في الموقع، الحلول في مواجهة الطوارئ. توقع الفشل لضمان النجاح."
              },
              {
                name: "جلسة التصوير الاحترافي",
                desc: "الإخراج، الإضاءة، الزوايا والتفاصيل. إنشاء محتوى بصري متسق مع موضع راقي."
              }
            ]
          },
          {
            num: "المرحلة 6",
            title: "الرؤية الاحترافية",
            subtitle: "التفكير كمصممة كعكات زفاف",
            steps: [
              {
                name: "القراءة النقدية للمشروع النهائي",
                desc: "تحليل النتيجة: الهيكل، الجماليات، التماسك والجدوى الحقيقية. فهم كيفية التحسين والتحسين والتكيف مع سياقات مختلفة."
              }
            ]
          }
        ]
      },
      requirements: {
        title: "شروط المشاركة",
        items: [
          "الحد الأدنى للعمر: 16 سنة",
          "التدريب مفتوح للنساء والرجال",
          "الأولوية للطلاب السابقين الذين حضروا تدريباً أساسياً في تصميم الكيك في أكاديمية SARALÖWE",
          "يجب أن يكون لدى المشاركين أساس في تصميم الكيك (كعكات متعددة الطوابق أو تقنيات مماثلة)",
          "التسجيل مؤكد فقط بعد التأكيد والدفع",
          "نظراً لمحدودية الأماكن، تُعطى الأولوية وفقاً لـ: الطلاب السابقون → التسجيلات الجديدة → قائمة الانتظار",
          "احترام الجدول الزمني: يجب على جميع المشاركين متابعة البرنامج في الأوقات المحددة"
        ]
      },
      rules: {
        title: "استخدام الفيديو والمواد",
        items: [
          "في الحضور الشخصي، يمكن للمشاركين التصوير للاستخدام الشخصي فقط",
          "مقاطع الفيديو الخاصة بالتدريب عبر الإنترنت خاصة تماماً، غير قابلة للمشاركة ومحمية من قبل أكاديمية SARALÖWE",
          "المعدات والمكونات متوفرة للتدريب",
          "احترام قواعد النظافة والاستخدام إلزامي",
          "يلتزم المشاركون باحترام الأخلاقيات والسلوك المهني طوال الماستركلاس"
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
        ? "Bonjour! Je suis intéressé(e) par la Masterclass Wedding Cake. Pouvez-vous me fournir plus d'informations sur les prochaines sessions disponibles?"
        : "مرحباً! أنا مهتم بماستركلاس كعكة الزفاف. هل يمكنكم تزويدي بمزيد من المعلومات حول الدورات القادمة المتاحة؟"
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
            <p className="text-[#651C32]/70 text-lg sm:text-xl max-w-4xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Formats Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.formats.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Présentiel */}
              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-[#651C32] mb-2">{t.formats.presential.name}</h3>
                  <p className="text-4xl font-bold text-[#C5912C]">{t.formats.presential.price}</p>
                </div>
                <div className="space-y-3">
                  {t.formats.presential.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#C5912C] flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#651C32]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* En Ligne */}
              <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-[#651C32] mb-2">{t.formats.online.name}</h3>
                  <p className="text-4xl font-bold text-[#C5912C]">{t.formats.online.price}</p>
                </div>
                <div className="space-y-3">
                  {t.formats.online.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#C5912C] flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#651C32]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Locations & Dates Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.locations.title}
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#C5912C]" size={32} />
                <div>
                  <p className="text-sm text-[#651C32]/70">{t.locations.duration} • {t.locations.schedule}</p>
                </div>
              </div>
              <div className="space-y-3">
                {t.locations.dates.map((dateInfo, index) => (
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

          {/* Program Phases */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-12">
              {t.program.title}
            </h2>
            <div className="space-y-6">
              {t.program.phases.map((phase, phaseIndex) => (
                <Card key={phaseIndex} className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#C5912C]/20">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-[#C5912C] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">{phaseIndex + 1}</span>
                      </div>
                      <div>
                        <p className="text-xs text-[#C5912C] font-semibold mb-1">{phase.num}</p>
                        <h3 className="font-playfair text-2xl font-bold text-[#651C32]">{phase.title}</h3>
                        <p className="text-sm text-[#651C32]/70 italic">{phase.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {phase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="bg-[#F2EFE8] p-4 rounded-xl">
                        <h4 className="font-semibold text-[#651C32] mb-2">{step.name}</h4>
<p className="text-sm text-[#651C32]/70 leading-relaxed">{step.desc}</p>
</div>
))}
</div>
</Card>
))}
</div>
</div>
 {/* Requirements & Rules Grid */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            ? 'Réservez votre place dès maintenant - Formation avancée limitée'
            : 'احجز مكانك الآن - تدريب متقدم محدود'}
        </p>
      </div>
    </div>
  </div>
</div>
);
};
export default WeddingCakeMasterclass;