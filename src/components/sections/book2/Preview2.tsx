import { useState, useEffect } from "react";
import { Cake, Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";

// ===== Import images (using same as Book 1 for now - replace with Book 2 images) =====
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

const recipeImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

// ===== 10 Recipes Data =====
const recipesData = [
  {
    title: "Recipe 1 – Pistachio & Red Fruits",
    points: [
      "Base: Pistachio Molly Cake",
      "Insert: Red fruit jelly",
      "Assembly cream: Pistachio whipped cream",
      "Covering cream: Structured pistachio whipped ganache"
    ]
  },
  {
    title: "Recipe 2 – Crunchy Praline Brownie",
    points: [
      "Base: Dark chocolate fudgy brownie",
      "Insert: Praline gianduja crunchy",
      "Assembly cream: Praline-hazelnut whipped ganache",
      "Covering ganache: 'Hard' praline ganache dark or milk chocolate"
    ]
  },
  {
    title: "Recipe 3 – Raspberry & Rose",
    points: [
      "Base: Soft vanilla cake",
      "Insert: Fresh raspberry compote",
      "Assembly cream: Mascarpone & rose whipped cream",
      "Covering cream: Rose SMBC"
    ]
  },
  {
    title: "Recipe 4 – Dark Chocolate & Cherries",
    points: [
      "Base: Intense dark chocolate cake",
      "Insert: Textured amarena cherry",
      "Assembly cream: Cocoa cremeux",
      "Covering cream: Structured dark chocolate whipped ganache"
    ]
  },
  {
    title: "Recipe 5 – Passion, Mango & Coconut",
    points: [
      "Base: Exotic mango cake",
      "Insert: Mango-passion jelly",
      "Assembly cream: Coconut namelaka",
      "Covering cream: Coconut whipped ganache"
    ]
  },
  {
    title: "Recipe 6 – Almond, Vanilla & White Chocolate",
    points: [
      "Base: Soft almond cake",
      "Insert: White chocolate fondant (gelled ganache)",
      "Assembly cream: Vanilla diplomat cream",
      "Covering cream: Structured white chocolate & almond praline ganache"
    ]
  },
  {
    title: "Recipe 7 – Salted Butter Caramel & Hazelnut",
    points: [
      "Base: Hazelnut & vanilla cake",
      "Insert: Salted butter caramel & caramelized hazelnuts",
      "Assembly cream: Caramel-hazelnut namelaka",
      "Covering cream: Milk chocolate whipped ganache, praline & gianduja"
    ]
  },
  {
    title: "Recipe 8 – Signature Honey Cake with Sweet Spices",
    points: [
      "Base: Honey sponge cake",
      "Insert: Light honey & lemon soaking syrup (optional)",
      "Assembly cream: Ultra stable vanilla-lemon whipped ganache"
    ]
  },
  {
    title: "Recipe 9 – Crunchy Dulcey & Fleur de Sel",
    points: [
      "Base: Muscovado & Dulcey chocolate cake",
      "Insert: Dulce de leche crunchy & fleur de sel",
      "Assembly cream: Dulce de leche & mascarpone whipped cream",
      "Covering ganache: Structured Dulcey ganache (SMBC substitute)"
    ]
  },
  {
    title: "Recipe 10 – Almond Paste, Orange & Milk Chocolate",
    points: [
      "Base: Almond paste & orange zest cake",
      "Insert 1: Candied orange & honey fondant",
      "Insert 2 (bonus): Almond paste cremeux",
      "Assembly cream: Milk chocolate & mascarpone",
      "Covering cream: Structured milk chocolate ganache"
    ]
  }
];

export const Preview2 = () => {
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
            Discover a varied portfolio of recipes ready for all occasions.
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