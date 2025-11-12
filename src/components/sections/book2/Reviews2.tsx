import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef, useContext } from "react";
import pattern from "@/assets/pattern.jpg";
import { LanguageContext } from "@/Context/languagecontext";

// Import student application images
import img1 from "@/assets/book2/Students/1.webp";
import img2 from "@/assets/book2/Students/2.webp";
import img3 from "@/assets/book2/Students/3.webp";
import img4 from "@/assets/book2/Students/4.webp";
import img5 from "@/assets/book2/Students/5.webp";
import img6 from "@/assets/book2/Students/6.webp";
import img7 from "@/assets/book2/Students/7.webp";
import img8 from "@/assets/book2/Students/8.webp";
import img9 from "@/assets/book2/Students/9.webp";
export const ReviewsAndApplications = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      reviewsTitle: "Our Students ",
      reviewsSubtitle: "Testimonials",
      applicationsTitle: "Student Creations",
      reviews: [
        { name: "Sarah M.", image: "👩‍🍳", rating: 5, comment: "This book changed the way I bake. The recipes are clear and the results are spectacular!" },
        { name: "Ahmed K.", image: "👨‍🍳", rating: 5, comment: "The techniques explained are professional-level. My clients love my new creations!" },
        { name: "Lisa R.", image: "👩", rating: 5, comment: "Finally, a book that explains everything step by step. My kids are amazed by my cakes!" },
        { name: "Youssef B.", image: "👨‍🍳", rating: 5, comment: "Perfect textures and flavors. I’ve learned so many useful techniques!" },
        { name: "Sofia L.", image: "👩", rating: 5, comment: "Easy-to-follow recipes with amazing results. Highly recommend!" },
        { name: "Karim N.", image: "👨‍🍳", rating: 5, comment: "The perfect guide to improve my creations and impress my clients." },
        { name: "Fatima R.", image: "👩", rating: 5, comment: "My kids love my cakes now! Everything is clear and precise." },
        { name: "Hassan T.", image: "👨‍🍳", rating: 5, comment: "I finally understood cake design techniques. Thank you for this book!" },
        { name: "Maya S.", image: "👩", rating: 5, comment: "Perfect for creating delicious and professional-looking content!" },
        { name: "Omar F.", image: "👨‍🍳", rating: 5, comment: "A must-have book for every pastry lover." },
        { name: "Nora H.", image: "👩‍🍳", rating: 5, comment: "Clear and easy-to-follow recipes. My cakes are a hit!" },
        { name: "Yassine D.", image: "👨‍🍳", rating: 5, comment: "Innovative and simple techniques — an absolute joy!" },
      ]
    }
  };

  const applications = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const reviewSliderRef = useRef<HTMLDivElement>(null);
  const appSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewSliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = reviewSliderRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        reviewSliderRef.current.scrollTo({
          left: scrollLeft + clientWidth > maxScrollLeft ? 0 : scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (appSliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = appSliderRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        appSliderRef.current.scrollTo({
          left: scrollLeft + clientWidth > maxScrollLeft ? 0 : scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const data = content["en"];

  return (
    <section className="relative">
      {/* Reviews Section */}
      <div className="relative py-16 sm:py-20 bg-[#651C32] overflow-hidden">
        <img src={pattern} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#C5912C] font-medium uppercase tracking-wider">{data.reviewsSubtitle}</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#C5912C]">Students</span> Speak
            </h2>
          </div>

          <div ref={reviewSliderRef} className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
            {data.reviews.map((review, i) => (
              <Card
                key={i}
                className="flex-none w-[85%] sm:w-[48%] lg:w-[32%] bg-[#651C32]/95 border border-[#C5912C]/30 rounded-2xl p-6 sm:p-8 text-white shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C5912C]/20 flex items-center justify-center text-xl sm:text-2xl">
                    {review.image}
                  </div>
                  <h4 className="font-playfair text-base sm:text-lg font-bold text-white">
                    {review.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#C5912C] text-[#C5912C]" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 sm:w-6 sm:h-6 text-[#C5912C]/40" />
                  <p className="text-white/80 leading-relaxed pl-5 sm:pl-6 text-sm sm:text-base">{review.comment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="relative py-16 sm:py-20 bg-[#F2EFE8] overflow-hidden">
        <img src={pattern} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#651C32] text-center mb-8 sm:mb-12">
            {data.applicationsTitle}
          </h3>
          <div
            ref={appSliderRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {applications.map((img, i) => (
              <Card
                key={i}
                className="flex-none w-[70%] sm:w-72 lg:w-96 bg-[#F2EFE8] rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Application ${i + 1}`}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
