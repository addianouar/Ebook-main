import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Star, Sparkles } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import cupcakeCover from "@/assets/cupcake.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const books = [
    {
      id: 1,
      title: "CUPCAKE EVOLUTION",
      subtitle: "Vol 1",
      cover: cupcakeCover,
      route: "/cupcake-vol1",
      description: "10 unique cupcake creations blending unexpected flavors and refined techniques",
      price: "799 MAD",
      oldPrice: "1999 MAD",
      features: ["10 Exclusive Recipes", "Tested by Students", "Professional Techniques", "Instant Download"]
    },
    {
      id: 2,
      title: "ALCHEMY IN LAYERS",
      subtitle: "Vol 1",
      cover: cupcakeCover, // TODO: Replace with alchemy-cover.jpg when you add it
      route: "/book2",
      description: "10 exclusive recipes designed in layers for cake design, guaranteeing flavor, elegance, and stability",
      price: "799 MAD",
      oldPrice: "1299 MAD",
      features: ["10 Layer Cake Recipes", "Cake Design Focused", "Stable Creams & Ganaches", "Step-by-Step Guide"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A0E1F] via-[#651C32] to-[#2E0D14] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={pattern}
          alt="Pattern"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#C5912C] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#A6192E] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <p className="text-[#C5912C] tracking-widest uppercase font-medium text-sm sm:text-base mb-2">
              Sara Alöwe - Exclusive Collection
            </p>
            <div className="h-1 w-20 bg-[#C5912C] mx-auto rounded-full"></div>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2EFE8] leading-tight">
            Discover Our <span className="text-[#C5912C]">Ebooks</span>
          </h1>
          
          <p className="text-[#F2EFE8]/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your pastry skills with our exclusive collection of professional recipes and techniques
          </p>

          <div className="flex items-center justify-center gap-2 text-[#C5912C]">
            <Star className="fill-current" size={20} />
            <span className="font-playfair text-xl font-bold">4.9/5</span>
            <span className="text-[#F2EFE8]/70">from 2,847 students</span>
          </div>
        </div>

        {/* Ebook Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`relative w-full h-[600px] sm:h-[650px] lg:h-[700px] transition-transform duration-700 transform-style-3d cursor-pointer ${
                  flippedCard === book.id ? "rotate-y-180" : ""
                }`}
                onMouseEnter={() => setFlippedCard(book.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => book.route && navigate(book.route)}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative h-full bg-[#F2EFE8] rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C5912C]/30 hover:border-[#C5912C] transition-all duration-300 group">
                    {/* Cover Image */}
                    <div className="h-3/5 overflow-hidden relative">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F2EFE8] via-transparent to-transparent"></div>
                    </div>

                    {/* Book Info */}
                    <div className="h-2/5 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-[#C5912C] font-medium uppercase tracking-wider text-sm mb-2">
                          {book.subtitle}
                        </p>
                        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#651C32] mb-3">
                          {book.title}
                        </h2>
                        <p className="text-[#1D3C34]/70 text-sm sm:text-base line-clamp-2">
                          {book.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div>
                          {book.oldPrice && (
                            <span className="text-[#651C32]/40 line-through text-sm mr-2">
                              {book.oldPrice}
                            </span>
                          )}
                          <span className="text-[#C5912C] font-bold text-xl sm:text-2xl">
                            {book.price}
                          </span>
                        </div>
                        <div className="bg-[#C5912C] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute top-4 right-4 bg-[#C5912C]/90 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Hover to flip
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-gradient-to-br from-[#651C32] to-[#4A0E1F] rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-4 border-[#C5912C]">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="text-[#C5912C]" size={24} />
                        <h3 className="font-playfair text-2xl font-bold text-[#F2EFE8]">
                          What's Inside
                        </h3>
                      </div>

                      <p className="text-[#F2EFE8]/90 text-base sm:text-lg mb-6 leading-relaxed">
                        {book.description}
                      </p>

                      <div className="space-y-3">
                        {book.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Sparkles className="text-[#C5912C] flex-shrink-0" size={18} />
                            <span className="text-[#F2EFE8]/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className="w-full bg-[#C5912C] hover:bg-[#D8A13A] text-white font-bold py-4 rounded-2xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 mt-6"
                      onClick={() => book.route && navigate(book.route)}
                    >
                      View Details
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-[#F2EFE8]/80 text-base sm:text-lg mb-4">
            Join thousands of students who have transformed their pastry skills
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#F2EFE8]/60">
            <div className="flex items-center gap-2">
              <BookOpen className="text-[#C5912C]" size={20} />
              <span>Professional Recipes</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-[#C5912C]" size={20} />
              <span>Student Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#C5912C]" size={20} />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for 3D flip effect */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;