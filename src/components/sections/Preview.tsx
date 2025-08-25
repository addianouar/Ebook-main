import { useState, useEffect } from "react";
import { Cake, Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";

// Import recipe images
import DSC01484 from "@/assets/asssets/DSC01484.png";
import DSC01480 from "@/assets/asssets/DSC01480.png";
import DSC01472 from "@/assets/asssets/DSC01472.png";
import DSC01150 from "@/assets/asssets/DSC01150.png";
import DSC01035 from "@/assets/asssets/DSC01035.png";
import DSC01034 from "@/assets/asssets/DSC01034.png";
import DSC01022 from "@/assets/asssets/DSC01022.png";
import DSC01607 from "@/assets/asssets/DSC01607.png";
import DSC01603 from "@/assets/asssets/DSC01603.png";
import DSC01595 from "@/assets/asssets/DSC01595.png";
import DSC01577 from "@/assets/asssets/DSC01577.png";
import DSC01573 from "@/assets/asssets/DSC01573.png";
import DSC01568 from "@/assets/asssets/DSC01568.png";
import DSC01565 from "@/assets/asssets/DSC01565.png";
import DSC01560 from "@/assets/asssets/DSC01560.png";
import DSC01494 from "@/assets/asssets/DSC01494.png";
import DSC01498 from "@/assets/asssets/DSC01498.png";
import DSC01545 from "@/assets/asssets/DSC01545.png";

const recipeImages = [
  DSC01484, DSC01480, DSC01472, DSC01150, DSC01035,
  DSC01034, DSC01022, DSC01607, DSC01603, DSC01595,
  DSC01577, DSC01573, DSC01568, DSC01565, DSC01560,
  DSC01494, DSC01498, DSC01545
];

const recipes = [
  { title: "Recette 1 – Pistache & Fruits Rouges", points: ["Base : Molly Cake à la pistache", "Insert : Gelée fruits rouges", "Crème d’assemblage : Crème montée à la pistache", "Crème de couverture : Ganache montée pistache structurée"] },
  { title: "Recette 2 – Brownie Praliné Croustillant", points: ["Base : Brownie fondant au chocolat noir", "Insert : Croustillant praliné gianduja", "Crème d’assemblage : Ganache montée praliné-noisette", "Ganache de couverture : Ganache praliné “dure” chocolat noir ou lait"] },
  { title: "Recette 3 – Framboise & Rose", points: ["Base : Cake vanille souple", "Insert : Compotée de framboises fraîches", "Crème d’assemblage : Crème montée mascarpone & rose", "Crème de couverture : SMBC à la rose"] },
  { title: "Recette 4 – Chocolat Noir & Cerises", points: ["Base : Cake chocolat noir intense", "Insert : Cerise amarena texturé", "Crème d’assemblage : Crémeux cacao", "Crème de couverture : Ganache montée chocolat noir structurée"] },
  { title: "Recette 5 – Passion, Mangue & Noix de Coco", points: ["Base : Cake exotique à la mangue", "Insert : Mangue-passion gélifié", "Crème d’assemblage : Namelaka coco", "Crème de couverture : Ganache montée coco"] },
  { title: "Recette 6 – Citron & Basilic", points: ["Base : Cake citron léger", "Insert : Gelée citron-basilic", "Crème d’assemblage : Crème montée au citron", "Crème de couverture : Icing citronné"] },
  { title: "Recette 7 – Caramel & Noisette", points: ["Base : Cake caramel", "Insert : Praliné noisette", "Crème d’assemblage : Ganache caramel", "Crème de couverture : Ganache noisette"] },
  { title: "Recette 8 – Mangue & Passion", points: ["Base : Cake mangue", "Insert : Passion gélifié", "Crème d’assemblage : Namelaka passion", "Crème de couverture : Ganache mangue"] },
  { title: "Recette 9 – Chocolat Blanc & Framboise", points: ["Base : Cake chocolat blanc", "Insert : Compotée framboise", "Crème d’assemblage : Crème mascarpone", "Crème de couverture : SMBC chocolat blanc"] },
  { title: "Recette 10 – Vanille & Caramel", points: ["Base : Cake vanille", "Insert : Caramel tendre", "Crème d’assemblage : Ganache vanille", "Crème de couverture : Ganache caramel"] }
];

export const Preview = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % recipeImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + recipeImages.length) % recipeImages.length);
  const togglePause = () => setIsPaused(!isPaused);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#651C32]">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={pattern} alt="Pattern" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">Aperçu du Livre</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight">
            Contenu <span className="text-white">Exclusif</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez un portfolio varié de recettes prêtes à toutes les occasions.
          </p>
        </div>

        {/* Card */}
        <Card className="bg-[#F2EFE8] shadow-xl overflow-visible rounded-2xl relative p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          {/* Slider */}
          <div className="w-full lg:w-1/2 relative flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#C5912C]/30 shadow-lg">
            <img
              src={recipeImages[currentImage]}
              alt={`Recette ${currentImage + 1}`}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain transition-transform duration-500"
            />

            {/* Buttons */}
            <button onClick={prevImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20">
              <Cake size={16} />
            </button>
            <button onClick={nextImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20">
              <Cake size={16} />
            </button>
            <button onClick={togglePause} className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20">
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>

            {/* Animated Badge */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#C5912C] text-[#F2EFE8] font-semibold px-3 py-1 rounded-full shadow-lg animate-bounce text-sm z-20">
              40 recettes en total
            </div>
          </div>

          {/* Recipe List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 max-h-96 overflow-y-auto pr-2">
            {recipes.map((recipe, index) => (
              <div key={index} className="p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#C5912C]/10">
                <h3 className="font-playfair text-sm sm:text-base font-bold text-[#651C32]">{recipe.title}</h3>
                <ul className="list-disc list-inside text-[#651C32] text-xs sm:text-sm mt-1 sm:mt-2">
                  {recipe.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
