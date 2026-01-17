import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  ArrowLeft,
  Clock,
  Award,
  CheckCircle,
  Download,
  MessageCircle
} from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import pattern from "@/assets/pattern.jpg";
import sweetTableFr from "@/assets/sweettable.png";
import sweetTableAr from "@/assets/sweettable.png";

const SweetTable2026 = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  /* ================= COUNTDOWN ================= */
  useEffect(() => {
    const targetDate = new Date("2026-05-01T11:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ================= TRANSLATIONS ================= */
  const content = {
    fr: {
      hero: {
        badge: "FORMATION EXCLUSIVE 2026",
        title: "FORMATION SWEET TABLE",
        subtitle: "Masterclass Complète | Mai 2026",
        description:
          "Une formation globale pour apprendre à créer un buffet professionnel, aussi bien sur le plan pâtissier que décoratif",
        cta: "Réserver maintenant"
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
        description:
          "تدريب شامل لتعلم إنشاء بوفيه احترافي كامل من الناحية الحلويات والديكور",
        cta: "احجز الآن"
      },
      cta: {
        whatsapp: "احجز عبر واتساب",
        download: "تحميل الكتيب"
      }
    }
  };

  const t = content[language];

  /* ================= ACTIONS ================= */
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      language === "fr"
        ? "Bonjour! Je suis intéressé(e) par la Formation Sweet Table 2026."
        : "مرحباً! أنا مهتم بتدريب Sweet Table 2026."
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

  /* ================= RENDER ================= */
  return (
    <div
      className="min-h-screen bg-[#F2EFE8] relative"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#C5912C] transition"
      >
        <Globe size={20} />
      </button>

      {/* Back */}
      <button
        onClick={() => navigate("/masterclasses")}
        className="fixed top-6 left-6 z-50 bg-white text-[#651C32] p-3 rounded-full shadow-lg hover:bg-[#C5912C] hover:text-white transition"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Background */}
      <img
        src={pattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      <div className="relative z-10 py-24 container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="bg-[#C5912C] text-white px-6 py-2 rounded-full text-sm font-semibold">
            {t.hero.badge}
          </span>
          <h1 className="font-playfair text-5xl font-bold text-[#651C32] mt-6">
            {t.hero.title}
          </h1>
          <p className="text-[#C5912C] text-2xl mt-2">
            {t.hero.subtitle}
          </p>
          <p className="text-[#651C32]/70 max-w-3xl mx-auto mt-4">
            {t.hero.description}
          </p>
        </div>

        {/* Countdown */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-[#651C32] to-[#C5912C] p-8 rounded-3xl text-white text-center grid grid-cols-4 gap-4">
          {["days", "hours", "minutes", "seconds"].map((k, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{timeLeft[k]}</div>
            </div>
          ))}
        </div>

        {/* Brochure Image */}
        <img
          src={language === "fr" ? sweetTableFr : sweetTableAr}
          alt="Brochure"
          className="rounded-3xl shadow-2xl mb-12"
        />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LuxuryButton onClick={handleWhatsAppBooking}>
            <MessageCircle size={20} />
            {t.cta.whatsapp}
          </LuxuryButton>

          <button
            onClick={handleDownloadBrochure}
            className="bg-white border-2 border-[#651C32] text-[#651C32] px-8 py-4 rounded-full font-semibold hover:bg-[#651C32] hover:text-white transition flex items-center gap-2"
          >
            <Download size={20} />
            {t.cta.download}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetTable2026;
