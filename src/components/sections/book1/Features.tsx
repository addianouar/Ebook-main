import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Clock, Star, Sparkles, Globe, ChefHat } from "lucide-react";
import pattern from "@/assets/pattern.jpg";

export const Features = () => {

  const features = [
    { icon: Star, title: "Rare & Exceptional Flavors", description: "Discover unique and refined cupcake creations, crafted with rare flavor combinations that stand out from the ordinary." },
    { icon: Trophy, title: "Perfectly Light Textures", description: "Incredible and light textures, perfectly balanced." },
    { icon: Sparkles, title: "Less Sweet Recipes", description: "Recipes that are less sweet but still delicious." },
    { icon: BookOpen, title: "Natural Ingredients", description: "All ingredients are 100% natural." },
    { icon: ChefHat, title: "Perfect for Cake Design", description: "Stable creams and ganaches suitable for all decorations." },
    { icon: Users, title: "Accessible to Everyone", description: "Accessible to both professionals and beginners." },
    { icon: Clock, title: "Tested and Verified", description: "Already tested and verified by our students." },
    { icon: Globe, title: "Varied Portfolio", description: "10 different flavors to combine for a unique and diverse portfolio." }
  ];

  const sectionHeader = {
    smallTitle: "Why You’ll Love These Recipes",
    bigTitle: "The Highlights of Our Creations",
    description: "Discover why our recipes attract both professionals and pastry enthusiasts alike."
  };

  return (
    <section 
      id="features" 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#F2EFE8]"
      dir="ltr"
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
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up text-left">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm sm:text-base">
            {sectionHeader.smallTitle}
          </p>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#651C32] leading-tight">
            {sectionHeader.bigTitle}
          </h2>
          <p className="text-[#222]/80 text-sm sm:text-base md:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            {sectionHeader.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-[#F2EFE8] border border-[#C5912C]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group rounded-2xl cursor-pointer"
            >
              <div className="p-4 sm:p-6 lg:p-6 text-center flex flex-col justify-center items-center space-y-3 sm:space-y-4 text-left">
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
