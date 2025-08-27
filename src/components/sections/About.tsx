import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Award, Sparkles } from "lucide-react"
import ebookMockup from "@/assets/ebook-mockup.png"
import pattern from "@/assets/pattern.jpg"
import { useLanguage } from "@/Context/languagecontext";

export const About = () => {
  const { language } = useLanguage();

  const texts = {
    sectionTitle: {
      fr: "À propos du livre",
      ar: "عن الكتاب",
    },
    sectionHeading: {
      fr: "Un guide <span class='text-[#A6192E]'>révolutionnaire</span>",
      ar: "دليل <span class='text-[#A6192E]'>ثوري</span>",
    },
    sectionDescription: {
      fr: "Ce livre unique combine l'art ancestral de l'alchimie avec les techniques modernes de pâtisserie. Chaque recette est le résultat d'années de perfectionnement pour atteindre l'équilibre parfait entre goût, texture et présentation.",
      ar: "هذا الكتاب الفريد يجمع بين فن الخيمياء التقليدي وتقنيات الحلويات الحديثة. كل وصفة هي نتيجة سنوات من التميز للوصول إلى التوازن المثالي بين المذاق، القوام، والعرض.",
    },
    cards: {
      fr: [
        { icon: CheckCircle, title: "Recettes Testées", text: "Chaque recette a été rigoureusement testée pour garantir un résultat parfait." },
        { icon: Star, title: "Saveurs Uniques", text: "Des combinaisons de saveurs innovantes qui impressionneront vos invités." },
        { icon: Award, title: "Esthétisme Parfait", text: "Des créations visuellement époustouflantes qui tiennent impeccablement." },
        { icon: Sparkles, title: "Guide Essentiel", text: "Pour tous ceux qui souhaitent créer des cakes qui impressionnent." }
      ],
      ar: [
        { icon: CheckCircle, title: "وصفات مجربة", text: "تم اختبار كل وصفة بدقة لضمان نتائج مثالية." },
        { icon: Star, title: "نكهات فريدة", text: "تركيبات مبتكرة من النكهات ستثير إعجاب ضيوفك." },
        { icon: Award, title: "جمال مثالي", text: "إبداعات مذهلة بصريًا مع ثبات لا يُضاهى." },
        { icon: Sparkles, title: "دليل أساسي", text: "لكل من يرغب في إنشاء كيك يترك انطباعاً قوياً." }
      ]
    }
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const fontArabic = language === 'ar' ? 'font-[Tajawal]' : '';

  return (
    <section id="about" className={`py-16 lg:py-20 relative overflow-hidden bg-[#F2EFE8] ${fontArabic}`} dir={direction}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={pattern} 
          alt="Pattern" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F2EFE8]/0 via-[#F2EFE8]/70 to-[#F2EFE8]/100 rounded-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/10 rounded-3xl pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Title */}
        <div className={`mb-12 lg:mb-16 ${textAlign}`}>
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
            {texts.sectionTitle[language]}
          </p>
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight mt-2"
            dangerouslySetInnerHTML={{ __html: texts.sectionHeading[language] }}
          />
          <p
            className={`text-[#1D3C34] font-inter leading-relaxed max-w-xl ${textAlign} ${
              language === 'ar' ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'
            }`}
          >
            {texts.sectionDescription[language]}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${flexDirection}`}>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {texts.cards[language].map((card, idx) => (
              <Card 
                key={idx} 
                className="bg-[#F2EFE8] border border-[#C5912C]/30 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#C5912C]/20 p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <card.icon className="text-[#C5912C]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#A6192E] mb-1 sm:mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#1D3C34] text-sm sm:text-base font-inter">
                      {card.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 animate-scale-in perspective-3d">
            <div className="relative transform hover:rotate-y-2 hover:rotate-x-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-2xl transform scale-105 animate-luxury-glow"></div>
              <img 
                src={ebookMockup} 
                alt="Ebook Mockup" 
                className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
