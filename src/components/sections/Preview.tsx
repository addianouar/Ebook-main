import { useState, useEffect, useRef, useContext } from "react";
import { Cake, Play, Pause, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import pattern from "@/assets/pattern.jpg";
import { LanguageContext } from "@/Context/languagecontext";

// Recipes data (FR & AR)
const recipesData = {
  fr: [
    { title: "Recette 1 – Pistache & Fruits Rouges", points: ["✓ Base : Molly Cake à la pistache","✓ Insert : Gelée fruits rouges","✓ Crème d’assemblage : Crème montée à la pistache","✓ Crème de couverture : Ganache montée pistache structurée"] },
    { title: "Recette 2 – Brownie Praliné Croustillant", points: ["✓ Base : Brownie fondant au chocolat noir","✓ Insert : Croustillant praliné gianduja","✓ Crème d’assemblage : Ganache montée praliné-noisette","✓ Ganache de couverture : Ganache praliné “dure” chocolat noir ou lait"] },
    { title: "Recette 3 – Framboise & Rose", points: ["✓ Base : Cake vanille souple","✓ Insert : Compotée de framboises fraîches","✓ Crème d’assemblage : Crème montée mascarpone & rose","✓ Crème de couverture : SMBC à la rose"] },
    { title: "Recette 4 – Chocolat Noir & Cerises", points: ["✓ Base : Cake chocolat noir intense","✓ Insert : Cerise amarena texturé","✓ Crème d’assemblage : Crémeux cacao","✓ Crème de couverture : Ganache montée chocolat noir structurée"] },
    { title: "Recette 5 – Passion, Mangue & Noix de Coco", points: ["✓ Base : Cake exotique à la mangue","✓ Insert : Mangue-passion gélifié","✓ Crème d’assemblage : Namelaka coco","✓ Crème de couverture : Ganache montée coco"] },
    { title: "Recette 6 – Amande, Vanille & Chocolat Blanc", points: ["✓ Base : Cake moelleux à l’amande","✓ Insert : Fondant au chocolat blanc (ganache gélifiée)","✓ Crème d’assemblage : Crème diplomate à la vanille","✓ Crème de couverture : Ganache structurée chocolat blanc & praliné d’amande"] },
    { title: "Recette 7 – Caramel Beurre Salé & Noisette", points: ["✓ Base : Cake noisette & vanille","✓ Insert : Caramel beurre salé & noisettes caramélisées","✓ Crème d’assemblage : Namelaka caramel-noisette","✓ Crème de couverture : Ganache montée chocolat au lait, praliné & gianduja"] },
    { title: "Recette 8 – Honey Cake Signature aux Épices Douces", points: ["✓ Base : Pâte à biscuit miel","✓ Insert : Sirop d’imbibage léger au miel & citron (optionnel)","✓ Crème d’assemblage : Ganache montée vanille-citron ultra stable"] },
    { title: "Recette 9 – Croustillant Dulcey & Fleur de Sel", points: ["✓ Base : Cake au muscovado & chocolat Dulcey","✓ Insert : Croustillant dulce de leche & fleur de sel","✓ Crème d’assemblage : Crème montée dulce de leche & mascarpone","✓ Ganache de couverture : Ganache Dulcey structurée (substitut SMBC)"] },
    { title: "Recette 10 – Pâte d’Amande, Orange & Chocolat au Lait", points: ["✓ Base : Cake à la pâte d’amande & zestes d’orange","✓ Insert 1 : Fondant orange confite & miel","✓ Insert 2 (bonus) : Crémeux pâte d’amande","✓ Crème d’assemblage : Chocolat au lait & mascarpone","✓ Crème de couverture : Ganache structurée chocolat au lait"] }
  ],
  ar: [
    { title: "الوصفة 1: الفستق والفواكه الحمراء", points: ["القاعدة: كيك مولي بالفستق (3 طبقات – قطر 15 سم) ✓","الحشوة: جيلي التوت الأحمر ✓","كريمة التجميع: كريمة مخفوقة بالفستق ✓","كريمة التغطية: غاناش مخفوق فستق ✓"] },
    { title: "الوصفة 2: براوني براليني مقرمش", points: ["القاعدة: براوني ناعم شوكولاتة داكنة (طبقتان – قطر 15 سم) ✓","الحشوة: طبقة مقرمشة بالجياندويا والبراليني (تصب في قالب قطر 12 سم ارتفاع 1 سم) ✓","كريمة التجميع: غاناش مخفوق بالبراليني والبندق ✓","كريمة التغطية: غاناش براليني \"صلب\" بالشوكولاتة الداكنة أو بالحليب ✓"] },
    { title: "الوصفة 3: توت العليق وماء الورد", points: ["القاعدة: كيك الفانيليا الطري (قطر 15 سم – 3 طبقات) ✓","الحشوة: كومبوت توت العليق (طازج أو مجمّد) ✓","كريمة التجميع: كريمة مخفوقة بالماسكاربونو وماء الورد ✓","كريمة التغطية: SMBC بماء الورد – قوام قوي ✓"] },
    { title: "الوصفة 4: الشوكولاتة السوداء والكرز", points: ["القاعدة: كيك شوكولاتة داكنة مكثفة (قطر 15 سم – 3 طبقات) ✓","الحشوة: كرز أمارينا بقوام هلامي (غير مطهو كومبوت) ✓","كريمة التجميع: كريمو الكاكاو (تماسك متوسط) ✓","كريمة التغطية: غاناش مخفوق شوكولاتة داكنة ✓"] },
    { title: "الوصفة 5: باشن فروت، مانجو وجوز الهند", points: ["القاعدة: كيك استوائي بالمانجو (قطر 15 سم – 3 طبقات) ✓","الحشوة: طبقة هلامية مانجو – باشن فروت ✓","كريمة التجميع: ناميلاكا جوز الهند (قوام ناعم ولامع) ✓","كريمة التغطية: غاناش جوز الهند المخفوق ✓"] },
    { title: "الوصفة 6: اللوز، الفانيليا، والشوكولاتة البيضاء", points: ["القاعدة: كيك طري لوز (قطر 15 سم – 3 طبقات) ✓","الحشوة: فوندان الشوكولاتة البيضاء (نوع غاناش هلامي) ✓","كريمة التجميع: كريمة دبلوماسية بالفانيليا ✓","كريمة التغطية: غاناش مخفوق الشوكولاتة البيضاء وبراليني اللوز ✓"] },
    { title: "الوصفة 7: كراميل بالزبدة المالحة والبندق", points: ["القاعدة: كيك الزبدة – زيت، فانيليا وبندق ✓","الحشوة: كريميل بالزبدة المالحة والبندق المكرمل ✓","كريمة التجميع: ناميلاكا كريميل – بندق ✓","كريمة التغطية: غاناش مخفوق بالشوكولاتة بالحليب، براليني وجياندويا ✓"] },
    { title: "الوصفة 8: كيك العسل المميز بالتوابل الناعمة", points: ["القاعدة: عجينة البسكوت بالعسل (6 إلى 8 طبقات رقيقة) ✓","الحشوة: شراب خفيف بالعسل والليمون (اختياري) ✓","كريمة التجميع: غاناش مخفوق بالفانيليا والليمون ✓","كريمة التغطية: غاناش مخفوق بالفانيليا والليمون ✓"] },
    { title: "الوصفة 9: كروستيان دولسي بشوائب ملح البحر", points: ["القاعدة: كيك بالموسكوفادو وشوكولاتة دولسي ✓","الحشوة: كروستيان (مقرمش) دولتشي لي تشي وملح البحر ✓","كريمة التجميع: كريمة مخفوقة دولتشي لي تشي وماسكاربوني ✓","كريمة التغطية: غاناش دولسي مهيكل ✓"] },
    { title: "الوصفة 10: معجون اللوز، البرتقال، والشوكولاتة بالحليب", points: ["القاعدة: كيك بمعجون اللوز وبشر البرتقال ✓","الحشوة: فوندان البرتقال المعسل والعسل ✓","كريمة التجميع: بالشوكولاتة بالحليب والماسكاربونو (بدون جيلاتين) ✓","كريمة التغطية: بالشوكولاتة بالحليب ✓"] }
  ]
};

// Recipe images
const recipeImages = [
  "/images/DSC0102.jpeg","/images/DSC0103.jpeg","/images/DSC01033.jpeg","/images/DSC0115.jpeg","/images/DSC0147.jpeg",
  "/images/DSC0148.jpeg","/images/DSC01488.jpeg","/images/DSC0149.jpeg","/images/DSC01499.jpeg","/images/DSC0154.jpeg",
  "/images/DSC0156.jpeg","/images/DSC01566.jpeg","/images/DSC01567.jpeg","/images/DSC0157.jpeg","/images/DSC01578.jpeg",
  "/images/DSC0159.jpeg","/images/DSC0160.jpeg","/images/DSC01601.jpeg"
];

export const Preview = () => {
  const { language } = useContext(LanguageContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % recipeImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + recipeImages.length) % recipeImages.length);
  const togglePause = () => setIsPaused(!isPaused);

  // Auto-play images
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextImage, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#651C32]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={pattern} alt="Pattern" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
            {language === "fr" ? "Aperçu du Livre" : "معاينة الكتاب"}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#C5912C] leading-tight">
            {language === "fr" ? "Contenu " : "المحتوى "}
            <span className="text-white">{language === "fr" ? "Exclusif" : "حصري"}</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            {language === "fr"
              ? "Découvrez un portfolio varié de recettes prêtes à toutes les occasions."
              : "اكتشف مجموعة متنوعة من الوصفات الجاهزة لجميع المناسبات."}
          </p>
        </div>

        {/* Card */}
        <Card className="bg-[#F2EFE8] shadow-xl overflow-visible rounded-2xl relative p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          
          {/* Image slider */}
          <div className="w-full lg:w-1/2 relative flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#C5912C]/30 shadow-lg">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
              <img
                key={currentImage}
                src={recipeImages[currentImage]}
                alt={`Recette ${currentImage + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out opacity-100 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()} // disable right-click
                onDragStart={(e) => e.preventDefault()}   // disable drag
              />
            </div>

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <Cake size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <Cake size={16} />
            </button>
            <button
              onClick={togglePause}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 bg-[#C5912C] text-[#651C32] rounded-full flex items-center justify-center shadow-lg z-20"
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {recipeImages.slice(0, 5).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentImage % 5 ? "bg-[#C5912C]" : "bg-white/50"}`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#C5912C] text-[#F2EFE8] font-semibold px-3 py-1 rounded-full shadow-lg animate-bounce text-sm z-20">
              40 {language === "fr" ? "recettes en total" : "وصفة في المجموع"}
            </div>
          </div>

          {/* Scrollable recipe list */}
          <div className="relative w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#C5912C]/60 scrollbar-track-[#C5912C]/10"
            >
              {recipesData[language].map((recipe, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#C5912C]/10"
                >
                  <h3 className="font-playfair text-sm sm:text-base font-bold text-[#651C32]">{recipe.title}</h3>
                  <ul className="list-disc list-inside text-[#651C32] text-xs sm:text-sm mt-1 sm:mt-2">
                    {recipe.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#C5912C] animate-bounce">
              <ChevronDown size={20} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
