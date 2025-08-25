import { Card } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Clock, Star, Sparkles, Globe, ChefHat } from "lucide-react"
import pattern from "@/assets/pattern.jpg"

export const Features = () => {
  const features = [
    { icon: Star, title: "Saveurs les plus demandées", description: "Les saveurs les plus demandées sur le marché, pour répondre aux attentes de vos clients." },
    { icon: Trophy, title: "Textures légères et parfaites", description: "Des textures incroyables et légères, avec un équilibre parfait." },
    { icon: Sparkles, title: "Recettes moins sucrées", description: "Des recettes moins sucrées, mais toujours gourmandes." },
    { icon: BookOpen, title: "Ingrédients naturels", description: "Tous les ingrédients sont 100 % naturels." },
    { icon: ChefHat, title: "Parfait pour Cake Design", description: "Crèmes et ganaches stables, adaptées à toutes les décorations." },
    { icon: Users, title: "Accessible à tous", description: "Accessibles aussi bien aux professionnels qu’aux débutants." },
    { icon: Clock, title: "Testées et validées", description: "Déjà testées et validées par nos élèves." },
    { icon: Globe, title: "Portfolio varié", description: "10 saveurs différentes à combiner pour un portfolio varié et unique." }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#F2EFE8]">
      {/* Softer Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={pattern} 
          alt="Pattern" 
          className="w-full h-full object-cover opacity-5 blur-sm animate-luxury-float"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm sm:text-base">
             Pourquoi ces recettes vont vous séduire
          </p>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#651C32] leading-tight">
            Les points forts de ces créations
          </h2>
          <p className="text-[#222]/80 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez pourquoi nos recettes séduisent autant les professionnels et les passionnés de pâtisserie.
          </p>
        </div>

        {/* Features grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-[#F2EFE8] border border-[#C5912C]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-2xl cursor-pointer"
            >
              <div className="p-4 sm:p-6 lg:p-6 text-center flex flex-col justify-center items-center space-y-3 sm:space-y-4">
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

        {/* Arabic Version Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Card className="bg-[#1D3C34] shadow-xl max-w-xs sm:max-w-md mx-auto rounded-2xl">
            <div className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  Version Arabe
                </h3>
              </div>
              <p className="font-inter text-white/90 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">
                نسخة عربية متوفرة مع جميع الوصفات والتقنيات
              </p>
              <a 
                href="#purchase" 
                className="inline-flex items-center gap-2 bg-white text-[#1D3C34] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-playfair font-bold text-sm sm:text-base hover:bg-[#F2EFE8]/90 transition-colors duration-300"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                طلب النسخة العربية
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
