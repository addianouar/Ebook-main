import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef, useContext } from "react";
import pattern from "@/assets/pattern.jpg";
import { LanguageContext } from "@/Context/languagecontext";

// Import student application images
import img1 from "@/assets/asssets/1.jpg";
import img2 from "@/assets/asssets/2.jpg";
import img3 from "@/assets/asssets/3.jpg";
import img4 from "@/assets/asssets/4.jpg";
import img5 from "@/assets/asssets/5.jpg";
import img6 from "@/assets/asssets/6.jpg";
import img7 from "@/assets/asssets/7.jpg";
import img8 from "@/assets/asssets/8.jpg";
import img9 from "@/assets/asssets/9.jpg";

export const ReviewsAndApplications = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      reviewsTitle: "Nos Élèves Témoignent",
      reviewsSubtitle: "Témoignages",
      applicationsTitle: "Applications de nos Élèves",
      reviews: [
        { name: "Sarah M.", role: "Pâtissière Amateur", image: "👩‍🍳", rating: 5, comment: "Ce livre a transformé ma façon de faire de la pâtisserie. Les recettes sont claires et les résultats spectaculaires !" },
        { name: "Ahmed K.", role: "Chef Professionnel", image: "👨‍🍳", rating: 5, comment: "Les techniques expliquées sont d'un niveau professionnel. Mes clients adorent mes nouvelles créations !" },
        { name: "Lisa R.", role: "Maman Passionnée", image: "👩", rating: 5, comment: "Enfin un livre qui explique tout étape par étape. Mes enfants sont émerveillés par mes gâteaux !" },
        { name: "Youssef B.", role: "Passionné de Cake Design", image: "👨‍🍳", rating: 5, comment: "Les textures et saveurs sont parfaites, j’ai appris tellement de techniques utiles !" },
        { name: "Sofia L.", role: "Étudiante en pâtisserie", image: "👩", rating: 5, comment: "Des recettes faciles à suivre et super efficaces. Je recommande vivement !" },
        { name: "Karim N.", role: "Chef Pâtissier", image: "👨‍🍳", rating: 5, comment: "Le guide idéal pour perfectionner mes créations et impressionner mes clients." },
        { name: "Fatima R.", role: "Maman Créative", image: "👩", rating: 5, comment: "Les enfants adorent mes gâteaux maintenant ! Tout est clair et précis." },
        { name: "Hassan T.", role: "Apprenti Pâtissier", image: "👨‍🍳", rating: 5, comment: "J’ai enfin compris les techniques de cake design, merci pour ce livre !" },
        { name: "Maya S.", role: "Blogueuse Gourmande", image: "👩", rating: 5, comment: "Parfait pour créer du contenu visuel gourmand et professionnel !" },
        { name: "Omar F.", role: "Chef Amateur", image: "👨‍🍳", rating: 5, comment: "Un livre incontournable pour tous les passionnés de pâtisserie." },
        { name: "Nora H.", role: "Pâtissière Amateur", image: "👩‍🍳", rating: 5, comment: "Des recettes claires et faciles à suivre. Mes gâteaux font sensation !" },
        { name: "Yassine D.", role: "Chef Passionné", image: "👨‍🍳", rating: 5, comment: "Techniques innovantes et simples à appliquer, un vrai plaisir !" },
      ]
    },
    ar: {
      reviewsTitle: "شهادات طلابنا",
      reviewsSubtitle: "آراء الطلاب",
      applicationsTitle: "تطبيقات طلابنا",
      reviews: [
        { name: "سارة م.", role: "هاوية حلويات", image: "👩‍🍳", rating: 5, comment: "هذا الكتاب غيّر طريقة إعداد الحلويات لدي. الوصفات واضحة والنتائج مذهلة!" },
        { name: "أحمد ك.", role: "شيف محترف", image: "👨‍🍳", rating: 5, comment: "التقنيات المشروحة بمستوى احترافي. عملائي يحبون إبداعاتي الجديدة!" },
        { name: "ليزا ر.", role: "أم شغوفة", image: "👩", rating: 5, comment: "أخيرًا كتاب يشرح كل شيء خطوة بخطوة. أطفالي مبهورون بحلوياتي!" },
        { name: "يوسف ب.", role: "هاوي تصميم الكيك", image: "👨‍🍳", rating: 5, comment: "القوام والنكهات مثالية، تعلمت الكثير من التقنيات المفيدة!" },
        { name: "صوفيا ل.", role: "طالبة في صناعة الحلويات", image: "👩", rating: 5, comment: "وصفات سهلة التطبيق وفعالة للغاية. أوصي بها بشدة!" },
        { name: "كريم ن.", role: "شيف حلويات", image: "👨‍🍳", rating: 5, comment: "الدليل المثالي لتحسين إبداعاتي وإبهار عملائي." },
        { name: "فاطمة ر.", role: "أم مبدعة", image: "👩", rating: 5, comment: "الأطفال يحبون حلوياتي الآن! كل شيء واضح ودقيق." },
        { name: "حسن ت.", role: "متدرب حلويات", image: "👨‍🍳", rating: 5, comment: "أخيرًا فهمت تقنيات تصميم الكيك، شكرًا لهذا الكتاب!" },
        { name: "مايا س.", role: "مدونة طعام", image: "👩", rating: 5, comment: "مثالي لإنشاء محتوى بصري شهي واحترافي!" },
        { name: "عمر ف.", role: "شيف هاوي", image: "👨‍🍳", rating: 5, comment: "كتاب لا غنى عنه لجميع عشاق الحلويات." },
        { name: "نورا هـ.", role: "هاوية حلويات", image: "👩‍🍳", rating: 5, comment: "وصفات واضحة وسهلة المتابعة. حلوياتي تحقق إعجاب الجميع!" },
        { name: "ياسين د.", role: "شيف شغوف", image: "👨‍🍳", rating: 5, comment: "تقنيات مبتكرة وسهلة التطبيق، متعة حقيقية!" },
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

  const data = content[language];

  return (
    <section className="relative">
      {/* Reviews Section */}
      <div className="relative py-16 sm:py-20 bg-[#651C32] overflow-hidden">
        <img src={pattern} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#C5912C] font-medium uppercase tracking-wider">{data.reviewsSubtitle}</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {data.reviewsTitle.includes("Nos") ? <>Nos <span className="text-[#C5912C]">Élèves</span> Témoignent</> : data.reviewsTitle}
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
                  <div>
                    <h4 className="font-playfair text-base sm:text-lg font-bold">{review.name}</h4>
                    <p className="text-white/70 text-xs sm:text-sm">{review.role}</p>
                  </div>
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
