import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import pattern from "@/assets/pattern.jpg";

// ===== Slider Images (your saralowe folder) =====
import img1 from "@/assets/saralowe/resized/IMG_0840.webp";
import img2 from "@/assets/saralowe/resized/IMG_0845.webp";
import img3 from "@/assets/saralowe/resized/IMG_0837.webp";
import img4 from "@/assets/saralowe/resized/IMG_0839.webp";
import img5 from "@/assets/saralowe/resized/IMG_0841.webp";
import img6 from "@/assets/saralowe/resized/IMG_0888.webp";
import img7 from "@/assets/saralowe/resized/IMG_0856.webp";
import img8 from "@/assets/saralowe/resized/IMG_0848.webp";
import img9 from "@/assets/saralowe/resized/IMG_0890.webp";
import img10 from "@/assets/saralowe/resized/IMG_0862.webp";
import img11 from "@/assets/saralowe/resized/IMG_0858.webp";
import img12 from "@/assets/saralowe/resized/IMG_0869.webp";

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 1300); // cinematic speed
    return () => clearInterval(interval);
  }, []);

  const texts = {
    sectionTitle: "About the Book",
    sectionHeading:
      "A <span class='text-[#A6192E]'>Revolutionary</span> Guide",
    sectionDescription:
      "This unique book blends the ancient art of alchemy with modern pastry-making techniques. Each recipe is the result of years of refinement to achieve the perfect balance between flavor, texture, and presentation.",
    cards: [
      {
        icon: CheckCircle,
        title: "Tested Recipes",
        text: "Every recipe has been carefully tested to ensure perfect results.",
      },
      {
        icon: Star,
        title: "Unique Flavors",
        text: "Innovative flavor combinations that will impress every guest.",
      },
      {
        icon: Award,
        title: "Perfect Aesthetics",
        text: "Visually stunning creations with flawless structure and style.",
      },
      {
        icon: Sparkles,
        title: "Essential Guide",
        text: "For anyone aspiring to craft cakes that leave a lasting impression.",
      },
    ],
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#F2EFE8]"
    >
      {/* Background Pattern */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
      />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Cinematic Slider (auto height, adapts to image size) */}
        <div className="relative w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] overflow-hidden rounded-3xl shadow-2xl mb-12">
          {sliderImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`w-full h-auto object-contain transition-opacity duration-700 ease-in-out absolute left-0 top-0 ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
          {/* Keeps container height equal to image height dynamically */}
          <img
            src={sliderImages[currentSlide]}
            alt="reference"
            className="w-full h-auto object-contain opacity-0 pointer-events-none select-none"
          />
        </div>

        {/* Section Title */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="text-[#C5912C] font-medium uppercase tracking-widest text-sm sm:text-base">
            {texts.sectionTitle}
          </p>
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight mt-2"
            dangerouslySetInnerHTML={{ __html: texts.sectionHeading }}
          />
          <p className="text-[#1D3C34] text-base sm:text-lg md:text-xl font-inter leading-relaxed mt-4 max-w-2xl mx-auto">
            {texts.sectionDescription}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
          {texts.cards.map((card, idx) => (
            <Card
              key={idx}
              className="bg-[#F2EFE8]/90 border border-[#C5912C]/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-[85%] sm:w-[80%] lg:w-[90%] text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#C5912C]/20 p-3 rounded-xl flex items-center justify-center">
                  <card.icon className="text-[#C5912C]" size={28} />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#A6192E] mb-1">
                  {card.title}
                </h3>
                <p className="text-[#1D3C34] text-sm sm:text-base font-inter leading-snug">
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
