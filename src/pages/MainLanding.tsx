import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@/Context/languagecontext";
import { BookOpen, GraduationCap, Globe, FileText } from "lucide-react";
import pattern from "@/assets/pattern.jpg";

const MainLanding = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const content = {
    fr: {
      title: "SARALÖWE ACADEMY",
      subtitle: "Votre destination pour l'excellence en pâtisserie",
      ebooksTitle: "EBOOKS",
      ebooksDesc: "Recettes exclusives et techniques professionnelles",
      masterclassTitle: "MASTERCLASSES",
      masterclassDesc: "Formations complètes avec Sara Alöwe",
      blogsTitle: "BLOGS",
      blogsDesc: "Articles et conseils en pâtisserie",
      cta: "Explorer"
    },
    ar: {
      title: "أكاديمية ساراLÖWE",
      subtitle: "وجهتك للتميز في صناعة الحلويات",
      ebooksTitle: "الكتب الإلكترونية",
      ebooksDesc: "وصفات حصرية وتقنيات احترافية",
      masterclassTitle: "دورات تدريبية",
      masterclassDesc: "تدريبات كاملة مع سارا ألوي",
      blogsTitle: "المدونة",
      blogsDesc: "مقالات ونصائح في صناعة الحلويات",
      cta: "استكشف"
    }
  };

  const t = content[language];

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

      {/* Background Pattern */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-[#651C32] mb-4">
            {t.title}
          </h1>
          <p className="text-[#651C32]/70 text-lg sm:text-xl lg:text-2xl font-inter">
            {t.subtitle}
          </p>
        </div>

        {/* Main Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* EBOOKS Card */}
          <div
            onClick={() => navigate('/ebooks')}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-gold transition-all duration-500 cursor-pointer hover:scale-105 border border-[#C5912C]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#651C32]/10 to-[#C5912C]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-[#C5912C]/20 rounded-full flex items-center justify-center group-hover:bg-[#C5912C] transition-all duration-300">
                <BookOpen size={48} className="text-[#651C32] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] group-hover:text-[#C5912C] transition-colors duration-300">
                {t.ebooksTitle}
              </h2>
              
              <p className="text-[#651C32]/70 text-base lg:text-lg font-inter leading-relaxed">
                {t.ebooksDesc}
              </p>
              
              <button className="mt-6 bg-[#651C32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C5912C] transition-all duration-300 transform group-hover:scale-110">
                {t.cta}
              </button>
            </div>
          </div>

          {/* MASTERCLASSES Card */}
          <div
            onClick={() => navigate('/masterclasses')}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-gold transition-all duration-500 cursor-pointer hover:scale-105 border border-[#C5912C]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#651C32]/10 to-[#C5912C]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-[#C5912C]/20 rounded-full flex items-center justify-center group-hover:bg-[#C5912C] transition-all duration-300">
                <GraduationCap size={48} className="text-[#651C32] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] group-hover:text-[#C5912C] transition-colors duration-300">
                {t.masterclassTitle}
              </h2>
              
              <p className="text-[#651C32]/70 text-base lg:text-lg font-inter leading-relaxed">
                {t.masterclassDesc}
              </p>
              
              <button className="mt-6 bg-[#651C32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C5912C] transition-all duration-300 transform group-hover:scale-110">
                {t.cta}
              </button>
            </div>
          </div>

          {/* BLOGS Card */}
          <div
            onClick={() => navigate('/blogs')}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-gold transition-all duration-500 cursor-pointer hover:scale-105 border border-[#C5912C]/20 md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#651C32]/10 to-[#C5912C]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative z-10 text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-[#C5912C]/20 rounded-full flex items-center justify-center group-hover:bg-[#C5912C] transition-all duration-300">
                <FileText size={48} className="text-[#651C32] group-hover:text-white transition-colors duration-300" />
              </div>

              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#651C32] group-hover:text-[#C5912C] transition-colors duration-300">
                {t.blogsTitle}
              </h2>

              <p className="text-[#651C32]/70 text-base lg:text-lg font-inter leading-relaxed">
                {t.blogsDesc}
              </p>

              <button className="mt-6 bg-[#651C32] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C5912C] transition-all duration-300 transform group-hover:scale-110">
                {t.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;