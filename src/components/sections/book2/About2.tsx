import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import pattern from "@/assets/pattern.jpg";

// ===== You'll need to add images for Book 2 slider =====
// For now, using same images as Book 1 - replace with Book 2 images later
import img1 from "@/assets/book2/pic1.webp";
import img2 from "@/assets/book2/pic2.webp";
import img3 from "@/assets/book2/pic3.webp";
import img4 from "@/assets/book2/pic4.webp";
import img5 from "@/assets/book2/pic5.webp";
import img6 from "@/assets/book2/pic6.webp";
import img7 from "@/assets/book2/pic7.webp";
import img8 from "@/assets/book2/pic8.webp";
import img9 from "@/assets/book2/pic9.webp";
import img10 from "@/assets/book2/pic10.webp";
import img11 from "@/assets/book2/pic11.webp";
import img12 from "@/assets/book2/pic12.webp";

const sliderImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
];

export const About2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  const texts = {
    sectionTitle: "About the Book",
    sectionHeading:
      "A <span class='text-[#A6192E]'>Revolutionary</span> Guide",
    sectionDescription:
      "This unique book combines the ancestral art of alchemy with modern pastry techniques. Each recipe is the result of years of refinement to achieve the perfect balance between taste, texture, and presentation.",
    cards: [
      {
        icon: CheckCircle,
        title: "Tested Recipes",
        text: "Every recipe has been rigorously tested to guarantee perfect results.",
      },
      {
        icon: Star,
        title: "Unique Flavors",
        text: "Innovative flavor combinations that will impress your guests.",
      },
      {
        icon: Award,
        title: "Perfect Aesthetics",
        text: "Visually stunning creations that hold impeccably.",
      },
      {
        icon: Sparkles,
        title: "Essential Guide",
        text: "For anyone who wants to create impressive cakes.",
      },
    ],
  };

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden bg-[#F2EFE8]"
    >
      {/* Background */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        {/* Image Slider - RESPONSIVE */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 xl:mb-24 rounded-3xl overflow-hidden shadow-2xl">
          {sliderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-auto object-contain transition-all duration-700 ${
                i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
          <img
            src={sliderImages[currentSlide]}
            alt="reference"
            className="w-full h-auto object-contain opacity-0 pointer-events-none select-none"
          />
        </div>

        {/* Section Title - RESPONSIVE */}
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 text-center">
          <p className="text-[#C5912C] font-medium uppercase tracking-widest text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">
            {texts.sectionTitle}
          </p>
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#C5912C] leading-tight mt-2"
            dangerouslySetInnerHTML={{ __html: texts.sectionHeading }}
          />
          <p className="text-[#1D3C34] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter leading-relaxed mt-4 sm:mt-6 max-w-2xl lg:max-w-4xl mx-auto">
            {texts.sectionDescription}
          </p>
        </div>

        {/* Cards - FULLY RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
          {texts.cards.map((card, idx) => (
            <Card
              key={idx}
              className="bg-[#F2EFE8]/90 border-2 border-[#C5912C]/30 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 text-center"
            >
              <div className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6">
                <div className="bg-[#C5912C]/20 p-3 sm:p-4 lg:p-5 rounded-xl flex items-center justify-center">
                  <card.icon className="text-[#C5912C] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#A6192E] mb-1">
                  {card.title}
                </h3>
                <p className="text-[#1D3C34] text-sm sm:text-base lg:text-lg xl:text-xl font-inter leading-snug">
                  {card.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};