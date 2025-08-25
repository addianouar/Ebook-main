import { LuxuryButton } from "@/components/ui/luxury-button";
import { ArrowDown } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import pattern from "@/assets/pattern.jpg";


export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#651C32] flex flex-col items-center justify-center overflow-hidden" id="hero">
    

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={pattern} 
          alt="Pattern background" 
          className="w-full h-full object-cover opacity-50 animate-luxury-float shadow-inner" 
          style={{ filter: 'brightness(0.5) contrast(1.1) drop-shadow(0 0 30px rgba(0,0,0,0.6))', mixBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 mt-20 lg:mt-0">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in-up">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm sm:text-base">
            Sara Alöwe - Collection Exclusive
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-[#F2EFE8]">
            ALCHEMY IN LAYERS Vol 1
          </h1>
          <p className="text-[#F2EFE8]/90 text-sm sm:text-base md:text-lg lg:text-xl font-inter leading-relaxed max-w-full lg:max-w-xl mx-auto lg:mx-0">
            Alchemy in Layers est un voyage au cœur du cake design : 10 recettes inédites, conçues en couches pour garantir à la fois saveur, élégance et stabilité. Chaque base, insert et crème a été pensée pour sublimer vos créations et vous offrir la maîtrise parfaite entre art et technique.
          </p>
          <p className="text-[#C5912C] font-semibold text-base sm:text-lg mt-2">
            Des recettes précises et testées par nos élèves
          </p>
          <ul className="text-[#F2EFE8]/80 list-disc list-inside mt-2 space-y-1 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto lg:mx-0">
            <li>Recettes conçues pour le cake design</li>
            <li>Alliance de science et créativité</li>
            <li>10 créations exclusives et innovantes</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-4">
            <LuxuryButton 
              size="lg"
              onClick={() => scrollToSection('purchase')}
              className="group w-full sm:w-auto bg-[#C5912C] text-[#F2EFE8] font-semibold shadow-lg rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300"
            >
              OBTENIR LE EBOOK
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </LuxuryButton>
            <LuxuryButton 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto bg-[#C5912C] text-[#F2EFE8] font-semibold shadow-lg rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300"
            >
              EN SAVOIR PLUS
            </LuxuryButton>
          </div>
        </div>

        {/* Ebook Cover */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 animate-scale-in">
          <div className="relative w-[80%] sm:w-[60%] md:w-[50%] lg:w-full">
            <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-2xl transform rotate-6 scale-105 animate-luxury-glow"></div>
            <img 
              src={ebookCover}
              alt="Sara Alöwe - Alchemical Cakes Volume 1"
              className="relative z-10 w-full h-auto rounded-2xl shadow-luxury hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-[#C5912C] hover:text-[#F2EFE8] transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};
