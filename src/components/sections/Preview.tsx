import { useState, useEffect } from "react";
import { Cake, Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";

// ===== Import images (resized WebP) =====
import IMG_0819 from "@/assets/saralowe/resized/IMG_0819.webp";
import IMG_0832 from "@/assets/saralowe/resized/IMG_0832.webp";
import IMG_0818 from "@/assets/saralowe/resized/IMG_0818.webp";
import IMG_0840 from "@/assets/saralowe/resized/IMG_0840.webp";
import IMG_0825 from "@/assets/saralowe/resized/IMG_0825.webp";
import IMG_0823 from "@/assets/saralowe/resized/IMG_0823.webp";
import IMG_0820 from "@/assets/saralowe/resized/IMG_0820.webp";
import IMG_0827 from "@/assets/saralowe/resized/IMG_0827.webp";
import IMG_0833 from "@/assets/saralowe/resized/IMG_0833.webp";
import IMG_0829 from "@/assets/saralowe/resized/IMG_0829.webp";
import IMG_0830 from "@/assets/saralowe/resized/IMG_0830.webp";
import IMG_0845 from "@/assets/saralowe/resized/IMG_0845.webp";
import IMG_0837 from "@/assets/saralowe/resized/IMG_0837.webp";
import IMG_0839 from "@/assets/saralowe/resized/IMG_0839.webp";
import IMG_0841 from "@/assets/saralowe/resized/IMG_0841.webp";
import IMG_0842 from "@/assets/saralowe/resized/IMG_0842.webp";
import IMG_0888 from "@/assets/saralowe/resized/IMG_0888.webp";
import IMG_0856 from "@/assets/saralowe/resized/IMG_0856.webp";
import IMG_0848 from "@/assets/saralowe/resized/IMG_0848.webp";
import IMG_0890 from "@/assets/saralowe/resized/IMG_0890.webp";
import IMG_0862 from "@/assets/saralowe/resized/IMG_0862.webp";
import IMG_0858 from "@/assets/saralowe/resized/IMG_0858.webp";
import IMG_0846 from "@/assets/saralowe/resized/IMG_0846.webp";
import IMG_0869 from "@/assets/saralowe/resized/IMG_0869.webp";
import IMG_0874 from "@/assets/saralowe/resized/IMG_0874.webp";
import IMG_0849 from "@/assets/saralowe/resized/IMG_0849.webp";
import IMG_0883 from "@/assets/saralowe/resized/IMG_0883.webp";

const recipeImages = [
  IMG_0819, IMG_0832, IMG_0818, IMG_0840, IMG_0825, IMG_0823,
  IMG_0820, IMG_0827, IMG_0833, IMG_0829, IMG_0830, IMG_0845,
  IMG_0837, IMG_0839, IMG_0841, IMG_0842, IMG_0888, IMG_0856,
  IMG_0848, IMG_0890, IMG_0862, IMG_0858, IMG_0846, IMG_0869,
  IMG_0874, IMG_0849, IMG_0883
];

// ===== Recipes Data =====
const recipesData = [
  { title: "Strawberry & Rosemary", points: ["Cake: Soft vanilla cupcake infused with rosemary & honey", "Insert: Strawberry compote lightly blended, rosemary-scented", "Frosting: Mascarpone & honey-rosemary whipped cream"] },
  { title: "Pear & Blue Cheese", points: ["Cake: Vanilla cupcake with warm honey & pear pieces", "Insert: Honey & blue-cheese cream", "Frosting: Cream cheese frosting with honey & walnuts"] },
  { title: "Blueberry & Kumquat", points: ["Cake: Vanilla cupcake with kumquat zest & juice", "Insert: Kumquat & blueberry compote", "Frosting: Cream cheese frosting with candied kumquat zest"] },
  { title: "Milk Chocolate & Black Sesame", points: ["Cake: Milk-chocolate cupcake with black sesame paste", "Insert: Black sesame praline", "Frosting: Mascarpone & milk chocolate cream with sesame paste"] },
  { title: "Sweet Potato & Chai Spices", points: ["Cake: Spiced cupcake with sweet potato purée and chai spices", "Insert: Spiced caramel", "Frosting: Cream cheese & spiced honey frosting"] },
  { title: "Rose & Freeze-Dried Raspberry", points: ["Cake: Rose-scented cupcake", "Insert: Raspberry & rose jelly", "Frosting: Mascarpone & rose mascarpone whipped cream"] },
  { title: "Pecan Caramel & Banana", points: ["Cake: Banana cupcake with chopped pecans", "Insert: Salted caramel", "Frosting: Cream cheese frosting blended with salted caramel"] },
  { title: "Candied Lemon & Ginger", points: ["Cake: Light lemon cupcake with fresh grated ginger", "Insert: Lemon curd infused with ginger", "Frosting: Mascarpone & lemon whipped frosting"] },
  { title: "Matcha & Star Anise", points: ["Cake: Matcha cupcake with star anise", "Insert: Caramelized white-chocolate filling", "Frosting: Mascarpone & white chocolate frosting"] },
  { title: "Saffron & Almond", points: ["Cake: Almond cupcake with saffron-infused milk", "Insert: Almond & saffron cream", "Frosting: Mascarpone with saffron-infused honey"] },
];

export const Preview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ===== Preload all images =====
  useEffect(() => {
    recipeImages.forEach((img) => {
      const preloaded = new Image();
      preloaded.src = img;
    });
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % recipeImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % recipeImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + recipeImages.length) % recipeImages.length);
  const togglePause = () => setIsPaused((p) => !p);

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#651C32]">
      <div className="absolute inset-0 pointer-events-none">
        <img src={pattern} alt="Pattern" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
            Preview of the Book
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight">
            Exclusive <span className="text-white">Content</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Discover a curated portfolio of unique cupcake recipes — each with layered flavors and elegant finishing touches.
          </p>
        </div>

        <Card className="bg-[#F2EFE8] shadow-xl rounded-2xl relative p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          {/* Image slider */}
          <div className="relative w-full lg:w-1/2 mx-auto rounded-xl overflow-hidden aspect-[4/3] bg-[#F2EFE8]">
            <img
              key={currentSlide}
              src={recipeImages[currentSlide]}
              alt={`Recipe ${currentSlide + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out select-none"
            />

            {/* Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-md"
            >
              <Cake size={14} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-md"
            >
              <Cake size={14} />
            </button>
            <button
              onClick={togglePause}
              aria-label={isPaused ? "Play" : "Pause"}
              className="absolute top-3 right-3 w-8 h-8 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-md"
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>

            <div className="absolute top-3 left-3 bg-[#C5912C] text-[#F2EFE8] font-semibold px-2 py-1 rounded-full text-xs shadow-md">
              10 recipes in total
            </div>
          </div>

          {/* Recipe List */}
          <div className="relative w-full lg:w-1/2 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-[#C5912C]/60 scrollbar-track-[#C5912C]/10">
            {recipesData.map((recipe, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-[#C5912C]/10 mb-2"
              >
                <h3 className="font-playfair text-base font-bold text-[#651C32]">
                  {recipe.title}
                </h3>
                <ul className="list-disc list-inside text-[#651C32] text-sm mt-2 space-y-1">
                  {recipe.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
