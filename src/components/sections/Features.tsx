import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Clock, Star, Sparkles, Globe, ChefHat } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import { useLanguage } from "@/Context/languagecontext";

export const Features = () => {
  const { language } = useLanguage();

  const features = {
    fr: [
      { icon: Star, title: "Saveurs les plus demandées", description: "Les saveurs les plus demandées sur le marché, pour répondre aux attentes de vos clients." },
      { icon: Trophy, title: "Textures légères et parfaites", description: "Des textures incroyables et légères, avec un équilibre parfait." },
      { icon: Sparkles, title: "Recettes moins sucrées", description: "Des recettes moins sucrées, mais toujours gourmandes." },
      { icon: BookOpen, title: "Ingrédients naturels", description: "Tous les ingrédients sont 100 % naturels." },
      { icon: ChefHat, title: "Parfait pour Cake Design", description: "Crèmes et ganaches stables, adaptées à toutes les décorations." },
      { icon: Users, title: "Accessible à tous", description: "Accessibles aussi bien aux professionnels qu’aux débutants." },
      { icon: Clock, title: "Testées et validées", description: "Déjà testées et validées par nos élèves." },
      { icon: Globe, title: "Portfolio varié", description: "10 saveurs différentes à combiner pour un portfolio varié et unique." }
    ],
    ar: [
      { icon: Star, title: "أكثر النكهات طلبًا", description: "أكثر النكهات المطلوبة في السوق لتلبية توقعات عملائك." },
      { icon: Trophy, title: "قوام خفيف ومثالي", description: "قوام رائع وخفيف مع توازن مثالي." },
      { icon: Sparkles, title: "وصفات أقل حلاوة", description: "وصفات أقل حلاوة لكنها لذيذة دائمًا." },
      { icon: BookOpen, title: "مكونات طبيعية", description: "جميع المكونات طبيعية 100٪." },
      { icon: ChefHat, title: "مثالي لتصميم الكيك", description: "كريمات وغاناش مستقرة، مناسبة لجميع الزخارف." },
      { icon: Users, title: "متاح للجميع", description: "متاحة للمحترفين والمبتدئين على حد سواء." },
      { icon: Clock, title: "تم اختبارها والتحقق منها", description: "تم اختبارها والتحقق منها بالفعل من قبل طلابنا." },
      { icon: Globe, title: "محفظة متنوعة", description: "10 نكهات مختلفة يمكن دمجها لمحفظة فريدة ومتنوعة." }
    ]
  };

  const sectionHeader = {
    fr: {
      smallTitle: "Pourquoi ces recettes vont vous séduire",
      bigTitle: "Les points forts de ces créations",
      description: "Découvrez pourquoi nos recettes séduisent autant les professionnels et les passionnés de pâtisserie."
    },
    ar: {
      smallTitle: "لماذا ستعجبك هذه الوصفات",
      bigTitle: "أهم ميزات هذه الإبداعات",
      description: "اكتشف لماذا تجذب وصفاتنا كل من المحترفين وهواة الحلويات."
    }
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const textAlign = language === 'ar' ? 'text-right' : 'text-left';
  const flexDirection = language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const fontArabic = language === 'ar' ? 'font-[Tajawal]' : '';

  return (
    <section 
      id="features" 
      className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#F2EFE8] ${fontArabic}`}
      dir={direction}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={pattern} 
          alt="Pattern" 
          className="w-full h-full object-cover opacity-5 blur-sm animate-luxury-float"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className={`text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up ${textAlign}`}>
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm sm:text-base">
            {sectionHeader[language].smallTitle}
          </p>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#651C32] leading-tight">
            {sectionHeader[language].bigTitle}
          </h2>
          <p className="text-[#222]/80 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            {sectionHeader[language].description}
          </p>
        </div>

        {/* Features grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features[language].map((feature, index) => (
            <Card 
              key={index} 
              className="bg-[#F2EFE8] border border-[#C5912C]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group rounded-2xl cursor-pointer"
            >
              <div className={`p-4 sm:p-6 lg:p-6 text-center flex flex-col justify-center items-center space-y-3 sm:space-y-4 ${textAlign}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-[#C5912C]/10 rounded-full flex items-center justify-center group-hover:bg-[#C5912C] group-hover:text-white transition-all duration-300">
                  <feature.icon size={20} className="sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-playfair text-base sm:text-lg md:text-lg font-bold text-[#651C32] group-hover:text-[#C5912C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#222]/70 font-inter text-xs sm:text-sm md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
