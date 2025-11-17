import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import cupcakeCover from "@/assets/cupcake.jpg";
import ebookcover from "@/assets/ebook-cover.webp";
// Import your new course images
import winterFallCover from "@/assets/winter-fall-course.jpg"; // You'll need to add this image
import saharaCover from "@/assets/sahara-course.jpg"; // You'll need to add this image

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      features: ["10 Exclusive Recipes", "Tested by Students", "Professional Techniques", "Instant Download", "Telegram Canal With Videos Step by Step"],
      isWhatsApp: false
    },
    {
      id: 2,
      title: "ALCHEMY IN LAYERS",
      subtitle: "Vol 1",
      cover: ebookcover,
      route: "/book2",
      description: "10 exclusive recipes designed in layers for cake design, guaranteeing flavor, elegance, and stability",
      price: "799 MAD",
      oldPrice: "1299 MAD",
      features: ["10 Layer Cake Recipes", "Cake Design Focused", "Stable Creams & Ganaches", "Step-by-Step Guide"],
      isWhatsApp: false
    },
    {
      id: 3,
      title: "WINTER FALL",
      subtitle: "Online Course",
      cover: winterFallCover,
      route: null,
      whatsappNumber: "+212664576477",
      description: "Master natural texture techniques and wafer paper flower design",
      price: "1800 MAD",
      dates: "15-16-17 December",
      features: [
        "Natural Texture Techniques",
        "Wafer Paper Flower Design",
        "Wood, Stone, Fabric Effects",
        "Live Google Meet Sessions",
        "Lifetime Video Access"
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
      description: "Complete cake design foundation with modern techniques",
      price: "3200 MAD",
      pricePresential: "4500 MAD",
      dates: "22-26 December",
      features: [
        "Two-tier Cake Creation",
        "Popsicles & Macarons",
        "Cupcakes & Cake Pops",
        "Royal Icing Cookies",
        "Certificate & Telegram Access"
      ],
      isWhatsApp: true
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === books.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, books.length]);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? books.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === books.length - 1 ? 0 : currentIndex + 1);
  };

  const handleCardClick = (book: typeof books[0]) => {
    if (book.isWhatsApp && book.whatsappNumber) {
      const message = encodeURIComponent(`Hello! I'm interested in the ${book.title} course.`);
      window.open(`https://wa.me/${book.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    } else if (book.route) {
      navigate(book.route);
    }
  };

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    const isMobile = window.innerWidth < 768;
    const cardsToShow = isMobile ? 1 : 2;
    const cards = [];
    
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % books.length;
      cards.push(books[index]);
    }
    
    return cards;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

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
            <p className="text-[#C5912C] tracking-widest uppercase font-bold text-lg sm:text-xl mb-2">
              Chef Sara Alaoui - Exclusive Collection 
            </p>
            <p className="text-white italic font-bold text-base sm:text-lg mb-4">
              Vice-Championne du monde - FIPGC 2025
            </p>
            <div className="h-1 w-20 bg-[#C5912C] mx-auto rounded-full"></div>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2EFE8] leading-tight">
            Discover Our <span className="text-[#C5912C]">Collection</span>
          </h1>
          
          <p className="text-[#F2EFE8]/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your pastry skills with our exclusive ebooks and professional courses
          </p>

          <div className="flex items-center justify-center gap-2 text-[#C5912C]">
            <Star className="fill-current" size={20} />
            <span className="font-playfair text-xl font-bold">4.9/5</span>
            <span className="text-[#F2EFE8]/70">from 2,847 students</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="flex items-center justify-center gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 sm:-left-12 z-20 bg-[#C5912C]/20 hover:bg-[#C5912C]/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {visibleCards.map((book) => (
                <div
                  key={book.id}
                  className="transition-all duration-500 transform"
                >
                  <div 
                    className="relative h-[600px] sm:h-[650px] lg:h-[700px] bg-[#F2EFE8] rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C5912C]/30 hover:border-[#C5912C] transition-all duration-300 group cursor-pointer"
                    onClick={() => handleCardClick(book)}
                  >
                    {/* Cover Image */}
                    <div className="h-3/5 overflow-hidden relative">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F2EFE8] via-transparent to-transparent"></div>
                      
                      {/* Dates Badge for Courses */}
                      {book.dates && (
                        <div className="absolute top-4 right-4 bg-[#C5912C] text-white px-4 py-2 rounded-full text-sm font-bold">
                          {book.dates}
                        </div>
                      )}
                    </div>

                    {/* Book/Course Info */}
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
                          {book.pricePresential && (
                            <span className="text-[#651C32] text-sm block">
                              Presential: {book.pricePresential}
                            </span>
                          )}
                        </div>
                        <div className="bg-[#C5912C] text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                          {book.isWhatsApp ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                          ) : (
                            <ArrowRight size={20} />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover Features (Back of Card Effect) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#651C32]/95 to-[#4A0E1F]/95 rounded-3xl p-6 sm:p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="text-[#C5912C]" size={24} />
                          <h3 className="font-playfair text-2xl font-bold text-[#F2EFE8]">
                            What's Included
                          </h3>
                        </div>

                        <div className="space-y-3">
                          {book.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <Sparkles className="text-[#C5912C] flex-shrink-0" size={18} />
                              <span className="text-[#F2EFE8]/90 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          className="w-full bg-[#C5912C] hover:bg-[#D8A13A] text-white font-bold py-4 rounded-2xl transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 mt-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(book);
                          }}
                        >
                          {book.isWhatsApp ? "Register via WhatsApp" : "View Details"}
                          {book.isWhatsApp ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                          ) : (
                            <ArrowRight size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-12 z-20 bg-[#C5912C]/20 hover:bg-[#C5912C]/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#C5912C]' 
                    : 'w-2 bg-[#C5912C]/30 hover:bg-[#C5912C]/50'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-[#F2EFE8]/80 text-base sm:text-lg mb-4">
            Join thousands of students who have transformed their pastry skills
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#F2EFE8]/60">
            <div className="flex items-center gap-2">
              <BookOpen className="text-[#C5912C]" size={20} />
              <span>Professional Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-[#C5912C]" size={20} />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#C5912C]" size={20} />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
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