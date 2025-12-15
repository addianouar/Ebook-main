import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import pattern from "@/assets/pattern.jpg";
import cupcakeCover from "@/assets/cupcake.jpg";
import ebookcover from "@/assets/ebook-cover.webp";
import winterFallCover from "@/assets/winter-fall-course.jpg";
import saharaCover from "@/assets/sahara-course.jpg";
import masterclassCover from "@/assets/masterclass-amandes-vanille.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const books = [
    {
      id: 0,
      title: "CAKE AMANDES & VANILLE",
      subtitle: "Masterclass Professionnelle",
      cover: masterclassCover,
      route: null,
      whatsappNumber: "+212664576477",
      description:
        "Masterclass dédiée à une crème au beurre magique, sans œufs et sans sucre, pensée pour les professionnels exigeants.",
      price: "1400 DH (Live)",
      pricePresential: "2800 DH (Présentiel)",
      dates: "10 Janvier • 10h00 – 18h00",
      features: [
        "Crème au beurre magique",
        "Sans œufs & sans sucre",
        "Stabilité été & hiver",
        "Piping précis",
        "Cake amandes & vanille premium"
      ],
      isWhatsApp: true,
      isNew: true
    },
    {
      id: 1,
      title: "CUPCAKE EVOLUTION",
      subtitle: "Vol 1",
      cover: cupcakeCover,
      route: "/cupcake-vol1",
      description:
        "10 unique cupcake creations blending unexpected flavors and refined techniques",
      price: "799 MAD",
      features: [
        "10 Exclusive Recipes",
        "Professional Techniques",
        "Instant Download",
        "Telegram Videos"
      ],
      isWhatsApp: false
    },
    {
      id: 2,
      title: "ALCHEMY IN LAYERS",
      subtitle: "Vol 1",
      cover: ebookcover,
      route: "/book2",
      description:
        "10 exclusive layered cake recipes ensuring flavor, elegance and stability",
      price: "799 MAD",
      features: [
        "10 Layer Cake Recipes",
        "Cake Design Focus",
        "Stable Creams",
        "Step-by-Step Guide"
      ],
      isWhatsApp: false
    },
    {
      id: 3,
      title: "WINTER FALL",
      subtitle: "Online Course",
      cover: winterFallCover,
      route: null,
      whatsappNumber: "+212664576477",
      description: "Natural textures and wafer paper flower techniques",
      price: "1800 MAD",
      dates: "15–17 December",
      features: [
        "Natural Texture Techniques",
        "Wafer Paper Flowers",
        "Live Sessions",
        "Lifetime Access"
      ],
      isWhatsApp: true
    },
    {
      id: 4,
      title: "MOROCCAN SAHARA",
      subtitle: "Formation de Base",
      cover: saharaCover,
      route: null,
      whatsappNumber: "+212664576477",
      description:
        "Complete cake design foundation with modern techniques",
      price: "3200 MAD",
      features: [
        "Two-tier Cake",
        "Cupcakes & Cake Pops",
        "Macarons",
        "Certificate Included"
      ],
      isWhatsApp: true
    }
  ];

  const navigateToDestination = (book: any) => {
    if (book.isWhatsApp && book.whatsappNumber) {
      const msg = encodeURIComponent(
        `Hello! I'm interested in the ${book.title}.`
      );
      window.open(
        `https://wa.me/${book.whatsappNumber.replace(/[^0-9]/g, "")}?text=${msg}`,
        "_blank"
      );
    } else if (book.route) {
      navigate(book.route);
    }
  };

  const handleCardClick = (book: any) => {
    if (isMobile) {
      if (!flippedCards.includes(book.id)) {
        setFlippedCards([...flippedCards, book.id]);
        return;
      }
    }
    navigateToDestination(book);
  };

  const isFlipped = (id: number) => flippedCards.includes(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A0E1F] via-[#651C32] to-[#2E0D14] relative overflow-hidden">
      <img
        src={pattern}
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="relative h-[700px] cursor-pointer perspective-1000 group"
                onClick={() => handleCardClick(book)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform
                    ${isMobile && isFlipped(book.id) ? "rotate-y-180" : ""}
                    ${!isMobile ? "group-hover:rotate-y-180" : ""}
                  `}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-4 border-[#C5912C]/30">
                    <div className="h-3/5 relative">
                      <img
                        src={book.cover}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {book.isNew && (
                        <div className="absolute top-4 left-4 bg-[#C5912C] text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                          NEW
                        </div>
                      )}

                      {book.dates && (
                        <div className="absolute top-4 right-4 bg-[#651C32] text-white px-4 py-2 rounded-full text-sm font-bold">
                          {book.dates}
                        </div>
                      )}
                    </div>

                    <div className="p-8 bg-[#F2EFE8] h-2/5">
                      <p className="text-[#C5912C] uppercase text-sm">
                        {book.subtitle}
                      </p>
                      <h2 className="text-3xl font-bold text-[#651C32] mb-3">
                        {book.title}
                      </h2>
                      <p className="text-[#1D3C34]/70 mb-4">
                        {book.description}
                      </p>
                      <p className="text-[#C5912C] font-bold text-2xl">
                        {book.price}
                      </p>
                      {book.pricePresential && (
                        <p className="text-sm text-[#651C32]">
                          {book.pricePresential}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 bg-[#651C32] text-white border-4 border-[#C5912C]">
                    <h3 className="text-2xl font-bold mb-6">What’s Included</h3>

                    {book.features.map((f: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-[#C5912C]" size={18} />
                        <span>{f}</span>
                      </div>
                    ))}

                    {isMobile && (
                      <p className="mt-6 text-center text-sm opacity-70">
                        Tap again to continue
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Home;
