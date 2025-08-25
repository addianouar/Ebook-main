import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Award, Sparkles } from "lucide-react"
import ebookMockup from "@/assets/ebook-mockup.png"
import pattern from "@/assets/pattern.jpg"

export const About = () => {
  return (
    <section id="about" className="py-16 lg:py-20 relative overflow-hidden bg-[#F2EFE8]">
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
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
            À propos du livre
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight mt-2">
            Un guide <span className="text-[#A6192E]">révolutionnaire</span>
          </h2>
          <p className="text-[#1D3C34] text-base sm:text-lg md:text-xl font-inter leading-relaxed max-w-xl mx-auto mt-4">
            Ce livre unique combine l'art ancestral de l'alchimie avec les techniques modernes de pâtisserie. 
            Chaque recette est le résultat d'années de perfectionnement pour atteindre l'équilibre parfait 
            entre goût, texture et présentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              { icon: CheckCircle, title: "Recettes Testées", text: "Chaque recette a été rigoureusement testée pour garantir un résultat parfait." },
              { icon: Star, title: "Saveurs Uniques", text: "Des combinaisons de saveurs innovantes qui impressionneront vos invités." },
              { icon: Award, title: "Esthétisme Parfait", text: "Des créations visuellement époustouflantes qui tiennent impeccablement." },
              { icon: Sparkles, title: "Guide Essentiel", text: "Pour tous ceux qui souhaitent créer des cakes qui impressionnent." }
            ].map((card, index) => (
              <Card 
                key={index} 
                className="bg-[#F2EFE8] border border-[#C5912C]/30 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 animate-scale-in">
            <div className="relative">
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
