import { useState, useEffect } from "react";
import { Cake, Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";

// Recipe images in public folder
const recipeImages = [
  "/images/DSC01484.png",
  "/images/DSC01480.png",
  "/images/DSC01472.png",
  "/images/DSC01150.png",
  "/images/DSC01035.png",
  "/images/DSC01034.png",
  "/images/DSC01022.png",
  "/images/DSC01607.png",
  "/images/DSC01603.png",
  "/images/DSC01595.png",
  "/images/DSC01577.png",
  "/images/DSC01573.png",
  "/images/DSC01568.png",
  "/images/DSC01565.png",
  "/images/DSC01560.png",
  "/images/DSC01494.png",
  "/images/DSC01498.png",
  "/images/DSC01545.png"
];

const recipes = [
  { 
    title: "Recette 1 – Pistache & Fruits Rouges", 
    points: [
      "✓ Base : Molly Cake à la pistache",
      "✓ Insert : Gelée fruits rouges",
      "✓ Crème d’assemblage : Crème montée à la pistache",
      "✓ Crème de couverture : Ganache montée pistache structurée"
    ] 
  },
  { 
    title: "Recette 2 – Brownie Praliné Croustillant", 
    points: [
      "✓ Base : Brownie fondant au chocolat noir",
      "✓ Insert : Croustillant praliné gianduja",
      "✓ Crème d’assemblage : Ganache montée praliné-noisette",
      "✓ Ganache de couverture : Ganache praliné “dure” chocolat noir ou lait"
    ] 
  },
  { 
    title: "Recette 3 – Framboise & Rose", 
    points: [
      "✓ Base : Cake vanille souple",
      "✓ Insert : Compotée de framboises fraîches",
      "✓ Crème d’assemblage : Crème montée mascarpone & rose",
      "✓ Crème de couverture : SMBC (Swiss Meringue Buttercream) à la rose"
    ] 
  },
  { 
    title: "Recette 4 – Chocolat Noir & Cerises", 
    points: [
      "✓ Base : Cake chocolat noir intense",
      "✓ Insert : Cerise amarena texturé",
      "✓ Crème d’assemblage : Crémeux cacao",
      "✓ Crème de couverture : Ganache montée chocolat noir structurée"
    ] 
  },
  { 
    title: "Recette 5 – Passion, Mangue & Noix de Coco", 
    points: [
      "✓ Base : Cake exotique à la mangue",
      "✓ Insert : Mangue-passion gélifié",
      "✓ Crème d’assemblage : Namelaka coco",
      "✓ Crème de couverture : Ganache montée coco"
    ] 
  },
  { 
    title: "Recette 6 – Amande, Vanille & Chocolat Blanc", 
    points: [
      "✓ Base : Cake moelleux à l’amande",
      "✓ Insert : Fondant au chocolat blanc (ganache gélifiée)",
      "✓ Crème d’assemblage : Crème diplomate à la vanille",
      "✓ Crème de couverture : Ganache structurée chocolat blanc & praliné d’amande"
    ] 
  },
  { 
    title: "Recette 7 – Caramel Beurre Salé & Noisette", 
    points: [
      "✓ Base : Cake noisette & vanille",
      "✓ Insert : Caramel beurre salé & noisettes caramélisées",
      "✓ Crème d’assemblage : Namelaka caramel-noisette",
      "✓ Crème de couverture : Ganache montée chocolat au lait, praliné & gianduja"
    ] 
  },
  { 
    title: "Recette 8 – Honey Cake Signature aux Épices Douces", 
    points: [
      "✓ Base : Pâte à biscuit miel",
      "✓ Insert : Sirop d’imbibage léger au miel & citron (optionnel)",
      "✓ Crème d’assemblage : Ganache montée vanille-citron ultra stable"
    ] 
  },
  { 
    title: "Recette 9 – Croustillant Dulcey & Fleur de Sel", 
    points: [
      "✓ Base : Cake au muscovado & chocolat Dulcey",
      "✓ Insert : Croustillant dulce de leche & fleur de sel",
      "✓ Crème d’assemblage : Crème montée dulce de leche & mascarpone",
      "✓ Ganache de couverture : Ganache Dulcey structurée (substitut SMBC)"
    ] 
  },
  { 
    title: "Recette 10 – Pâte d’Amande, Orange & Chocolat au Lait", 
    points: [
      "✓ Base : Cake à la pâte d’amande & zestes d’orange",
      "✓ Insert 1 : Fondant orange confite & miel",
      "✓ Insert 2 (bonus) : Crémeux pâte d’amande",
      "✓ Crème d’assemblage : Chocolat au lait & mascarpone",
      "✓ Crème de couverture : Ganache structurée chocolat au lait"
    ] 
  }
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
              loading="lazy"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
