import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Chef Pâtissière",
      content: "Les recettes de Sara sont révolutionnaires. J'ai enfin réussi à créer des gâteaux qui tiennent parfaitement tout en étant délicieux. Un must-have !",
      rating: 5,
      location: "Paris"
    },
    {
      name: "Antoine Martin",
      role: "Boulanger Artisan",
      content: "Ce livre a transformé ma pratique. Les techniques d'alchimie culinaire sont expliquées avec une précision remarquable. Mes clients sont éblouis !",
      rating: 5,
      location: "Lyon"
    },
    {
      name: "Sophie Laurent",
      role: "Passionnée de Pâtisserie",
      content: "En tant qu'amatrice, j'étais sceptique, mais les explications sont si claires que j'ai réussi tous les gâteaux du premier coup. Extraordinaire !",
      rating: 5,
      location: "Marseille"
    },
    {
      name: "Julien Moreau",
      role: "Chef Restaurant",
      content: "L'approche scientifique de Sara m'a permis de comprendre les 'pourquoi' derrière chaque étape. Mes desserts ont atteint un niveau supérieur.",
      rating: 5,
      location: "Bordeaux"
    },
    {
      name: "Camille Rousseau",
      role: "Blogueuse Culinaire",
      content: "Un livre d'exception ! Sara partage ses secrets les mieux gardés avec une générosité rare. Chaque recette est un chef-d'œuvre.",
      rating: 5,
      location: "Nice"
    },
    {
      name: "Thomas Leroy",
      role: "Entrepreneur Culinaire",
      content: "J'ai pu lancer ma pâtisserie grâce aux techniques apprises dans ce livre. La qualité constante de mes produits fait toute la différence.",
      rating: 5,
      location: "Toulouse"
    }
  ]

  return (
    <section className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            Témoignages
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
            Ce Que Disent les <span className="text-luxury-gold">Professionnels</span>
          </h2>
          <p className="text-luxury-light/80 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez l'expérience de ceux qui ont déjà transformé leur pratique 
            grâce aux techniques d'alchimie culinaire de Sara Alöwe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-luxury-dark-lighter border-luxury-gold/20 p-8 hover:border-luxury-gold/40 hover:bg-luxury-dark-lightest transition-smooth group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 text-luxury-gold/20 group-hover:text-luxury-gold/40 transition-smooth" size={24} />
              
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-luxury-gold fill-current" size={16} />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-luxury-light/90 font-inter leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-luxury-gold/20 pt-6">
                  <div className="font-playfair text-lg font-semibold text-luxury-light">
                    {testimonial.name}
                  </div>
                  <div className="text-luxury-gold text-sm font-inter">
                    {testimonial.role}
                  </div>
                  <div className="text-luxury-light/60 text-sm font-inter">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-luxury-light/80 text-lg font-inter mb-6">
            Rejoignez des milliers de passionnés qui ont déjà transformé leur pratique
          </p>
          <div className="flex items-center justify-center gap-2 text-luxury-gold">
            <Star className="fill-current" size={20} />
            <span className="font-playfair text-2xl font-bold">4.9/5</span>
            <span className="text-luxury-light/70 font-inter">basé sur 2,847 avis</span>
          </div>
        </div>
      </div>
    </section>
  )
}