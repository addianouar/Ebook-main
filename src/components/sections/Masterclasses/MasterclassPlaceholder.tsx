import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, ArrowLeft, Clock } from "lucide-react";
import { LanguageContext } from "@/Context/languagecontext";
import pattern from "@/assets/pattern.jpg";

interface MasterclassPlaceholderProps {
  titleFr: string;
  titleAr: string;
  descriptionFr: string;
  descriptionAr: string;
}

const MasterclassPlaceholder = ({ titleFr, titleAr, descriptionFr, descriptionAr }: MasterclassPlaceholderProps) => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      title: titleFr,
      description: descriptionFr,
      comingSoon: "Bientôt disponible",
      message: "Cette masterclass sera bientôt disponible. Restez connectés pour plus d'informations !",
      notifyMe: "Me notifier",
      backButton: "Retour aux formations"
    },
    ar: {
      title: titleAr,
      description: descriptionAr,
      comingSoon: "قريباً",
      message: "ستكون هذه الدورة متاحة قريباً. ابقَ على اتصال لمزيد من المعلومات!",
      notifyMe: "أخبرني",
      backButton: "العودة إلى التدريبات"
    }
  };

  const t = content[language];

  const handleNotify = () => {
    const message = encodeURIComponent(
      language === 'fr'
        ? `Bonjour! Je suis intéressé(e) par la formation "${t.title}". Pouvez-vous me notifier quand elle sera disponible?`
        : `مرحباً! أنا مهتم بتدريب "${t.title}". هل يمكنكم إخباري عندما يكون متاحاً؟`
    );
    window.open(`https://wa.me/+212664576477?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] relative flex items-center justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
        <span className="font-semibold hidden sm:inline">{t.backButton}</span>
      </button>

      {/* Background Pattern */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-[#C5912C]/20">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#C5912C]/20 rounded-full flex items-center justify-center">
            <Clock size={48} className="text-[#651C32]" />
          </div>

          <span className="inline-block bg-[#C5912C] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            {t.comingSoon}
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#651C32] mb-6">
            {t.title}
          </h1>

          <p className="text-[#651C32]/70 text-lg leading-relaxed mb-8">
            {t.description}
          </p>

          <div className="bg-[#651C32]/5 border-2 border-[#651C32]/20 rounded-2xl p-6 mb-8">
            <p className="text-[#651C32] font-medium">
              {t.message}
            </p>
          </div>

          <button
            onClick={handleNotify}
            className="bg-[#651C32] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C5912C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t.notifyMe}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterclassPlaceholder;