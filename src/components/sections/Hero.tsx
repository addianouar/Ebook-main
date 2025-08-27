import { LuxuryButton } from "@/components/ui/luxury-button";
import { ArrowDown, Globe } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import pattern from "@/assets/pattern.jpg";
import { useLanguage } from "@/Context/languagecontext";

export const Hero = () => {
  const { language, toggleLanguage } = useLanguage();

  const texts = {
    heroTagline: {
      fr: "Sara Alöwe - Collection Exclusive",
      ar: "سارة ألووي - مجموعة حصرية",
    },
    heroTitle: {
      fr: "ALCHEMY IN LAYERS Vol 1",
      ar: "الخيمياء في الطبقات - المجلد 1",
    },
    heroDescription: {
      fr: "Alchemy in Layers est un voyage au cœur du cake design : 10 recettes inédites, conçues en couches pour garantir à la fois saveur, élégance et stabilité. Chaque base, insert et crème a été pensée pour sublimer vos créations et vous offrir la maîtrise parfaite entre art et technique.",
      ar: "الخيمياء في الطبقات رحلة فريدة إلى قلب فن تصميم الكعك: 10 وصفات مبتكرة مصممة على طبقات لضمان النكهة والجمال والثبات. تم تصميم كل قاعدة، وحشوة، وكريمة لتزيين إبداعاتك ومنحك السيطرة الكاملة بين الفن والتقنية.",
    },
    heroHighlight: {
      fr: "Des recettes précises et testées par nos élèves",
      ar: "وصفات دقيقة ومجربة من قبل طلابنا",
    },
    heroBullets: {
      fr: [
        "Recettes conçues pour le cake design",
        "Alliance de science et créativité",
        "10 créations exclusives et innovantes",
      ],
      ar: [
        "وصفات مصممة خصيصًا لفن تصميم الكعك",
        "مزيج متناغم بين العلم والإبداع",
        "10 ابتكارات حصرية وفريدة",
      ],
    },
    heroBtnPrimary: {
      fr: "OBTENIR LE EBOOK",
      ar: "احصل على الكتاب الإلكتروني",
    },
    heroBtnSecondary: {
      fr: "EN SAVOIR PLUS",
      ar: "اكتشف المزيد",
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const direction = language === "ar" ? "rtl" : "ltr";
  const textAlign = language === "ar" ? "text-right" : "text-left";
  const flexDirection = language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row";
  const fontArabic = language === "ar" ? "font-[Tajawal]" : "";

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#651C32] px-4 sm:px-6 lg:px-12 ${fontArabic}`}
      id="hero"
      dir={direction}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={pattern}
          alt="Pattern background"
          className="w-full h-full object-cover opacity-50 animate-luxury-float shadow-inner"
          style={{
            filter: "brightness(0.5) contrast(1.1) drop-shadow(0 0 30px rgba(0,0,0,0.6))",
            mixBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mt-20 flex flex-col items-center lg:items-start gap-8 lg:gap-12 w-full max-w-7xl ${flexDirection}`}
      >
        {/* Text */}
        <div className={`flex-1 space-y-4 sm:space-y-6 animate-fade-in-up ${textAlign}`}>
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm sm:text-base">
            {texts.heroTagline[language]}
          </p>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-[#F2EFE8] ${
              language === "ar" ? "tracking-tight" : ""
            }`}
          >
            {texts.heroTitle[language]}
          </h1>
          <p className="text-[#F2EFE8]/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-xl">
            {texts.heroDescription[language]}
          </p>
          <p className="text-[#C5912C] font-semibold text-base sm:text-lg mt-2">
            {texts.heroHighlight[language]}
          </p>

          {/* Bullets */}
          <ul
            className={`text-[#F2EFE8]/80 list-disc mt-2 space-y-2 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto lg:mx-0 ${textAlign}`}
          >
            {texts.heroBullets[language].map((bullet, idx) => (
              <li key={idx} className={language === "ar" ? "mr-6 leading-relaxed" : ""}>
                {bullet}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-${
              language === "ar" ? "end" : "start"
            } mt-4`}
          >
            <LuxuryButton
              size="lg"
              onClick={() => scrollToSection("purchase")}
              className="group w-full sm:w-auto bg-[#C5912C] text-[#F2EFE8] font-semibold shadow-lg rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {texts.heroBtnPrimary[language]}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </LuxuryButton>

            <LuxuryButton
              size="lg"
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto bg-[#C5912C] text-[#F2EFE8] font-semibold shadow-lg rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300"
            >
              {texts.heroBtnSecondary[language]}
            </LuxuryButton>

            {/* Language Toggle */}
            <LuxuryButton
              size="lg"
              onClick={toggleLanguage}
              className="w-full sm:w-auto bg-[#F2EFE8] text-[#651C32] font-semibold shadow-lg rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Globe size={18} />
              {language === "fr" ? "العربية" : "Francais"}
            </LuxuryButton>
          </div>
        </div>

        {/* Ebook */}
        <div className="flex-1 relative flex justify-center lg:justify-end mt-8 lg:mt-0 animate-scale-in w-full max-w-md sm:max-w-lg lg:max-w-full">
          <div className="relative w-full">
            <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-2xl transform rotate-6 scale-105 animate-luxury-glow"></div>
            <img
              src={ebookCover}
              alt="Sara Alöwe - Alchemical Cakes Volume 1"
              className="relative z-10 w-full h-auto rounded-2xl shadow-luxury hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#C5912C] hover:text-[#F2EFE8] transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};
