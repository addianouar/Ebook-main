import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";

import pattern from "@/assets/pattern.jpg";
import cupcakeCover from "@/assets/cupcake.jpg";
import ebookcover from "@/assets/ebook-cover.webp";

const EbooksPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = {
    fr: {
      title: "Nos Ebooks Exclusifs",
      subtitle: "Découvrez nos collections de recettes professionnelles",
      backButton: "Retour",
      books: [
        {
          id: 1,
          title: "CUPCAKE EVOLUTION",
          subtitle: "Vol 1",
          description: "10 créations uniques de cupcakes mêlant saveurs inattendues et techniques raffinées",
          price: "799 MAD",
          features: ["10 Recettes Exclusives", "Techniques Professionnelles", "Téléchargement Instantané", "Vidéos Telegram"]
        },
        {
          id: 2,
          title: "ALCHEMY IN LAYERS",
          subtitle: "Vol 1",
          description: "10 recettes exclusives de gâteaux à étages assurant saveur, élégance et stabilité",
          price: "799 MAD",
          features: ["10 Recettes Layer Cake", "Focus Cake Design", "Crèmes Stables", "Guide Étape par Étape"]
        }
      ]
    },
    ar: {
      title: "كتبنا الإلكترونية الحصرية",
      subtitle: "اكتشف مجموعاتنا من الوصفات الاحترافية",
      backButton: "رجوع",
      books: [
        {
          id: 1,
          title: "تطور الكب كيك",
          subtitle: "المجلد 1",
          description: "10 إبداعات فريدة من الكب كيك تمزج بين النكهات غير المتوقعة والتقنيات الرفيعة",
          price: "799 درهم",
          features: ["10 وصفات حصرية", "تقنيات احترافية", "تحميل فوري", "فيديوهات تيليجرام"]
        },
        {
          id: 2,
          title: "سحر الطبقات",
          subtitle: "المجلد 1",
          description: "10 وصفات حصرية لكعكات متعددة الطبقات تضمن النكهة والأناقة والاستقرار",
          price: "799 درهم",
          features: ["10 وصفات كيك", "تركيز تصميم الكيك", "كريمات مستقرة", "دليل خطوة بخطوة"]
        }
      ]
    }
  };

  const t = content[language];
  const books = [
    { ...t.books[0], cover: cupcakeCover, route: "/cupcake-vol1" },
    { ...t.books[1], cover: ebookcover, route: "/book2" }
  ];

  const toggleCardFlip = (id: number) => {
    if (isMobile) {
      setFlippedCards(prev =>
        prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#2B0F1E] transition-all duration-300 flex items-center gap-2"
      >
        <Globe size={20} />
        <span className="font-semibold">{language === 'fr' ? 'AR' : 'FR'}</span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 bg-white/90 text-[#651C32] p-3 rounded-full shadow-lg hover:bg-[#2B0F1E] hover:text-white transition-all duration-300 flex items-center gap-2"
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

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="group perspective-1000"
              onMouseEnter={() => !isMobile && setFlippedCards(prev => [...prev, book.id])}
              onMouseLeave={() => !isMobile && setFlippedCards(prev => prev.filter(id => id !== book.id))}
              onClick={() => toggleCardFlip(book.id)}
            >
              <div
                className={`relative w-full h-[500px] sm:h-[550px] lg:h-[600px] transition-transform duration-700 transform-style-3d ${
                  flippedCards.includes(book.id) ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2B0F1E]/20 group-hover:border-[#2B0F1E] transition-all duration-300">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#651C32] via-[#651C32]/95 to-transparent p-6">
                      <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#2B0F1E] mb-2">
                        {book.title}
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base">{book.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-gradient-to-br from-[#651C32] to-[#2B0F1E] rounded-3xl shadow-2xl p-8 flex flex-col justify-between text-white">
                    <div>
                      <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-4">
                        {book.title}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed mb-6">
                        {book.description}
                      </p>
                      <ul className="space-y-3">
                        {book.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#2B0F1E] rounded-full"></span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-4">{book.price}</p>
                      <button
                        onClick={() => navigate(book.route)}
                        className="w-full bg-white text-[#651C32] py-3 rounded-full font-semibold hover:bg-[#2B0F1E] hover:text-white transition-all duration-300"
                      >
                        {language === 'fr' ? 'Voir Plus' : 'عرض المزيد'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default EbooksPage;