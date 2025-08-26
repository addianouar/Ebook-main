import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Check, Download, Shield, MessageCircle, CreditCard } from "lucide-react"
import ebookCover from "@/assets/ebook-cover.jpg"
import pattern from "@/assets/pattern.jpg"
import { useRef, useEffect, useState } from "react"

export const Purchase = () => {
  const benefits = [
    "10 recettes exclusives et innovantes, conçues pour le cake design et la stabilité.",
    "Bases, inserts et crèmes parfaitement équilibrés, pour des gâteaux beaux et savoureux.",
    "Techniques expliquées pas à pas, accompagnées des astuces de chef pour réussir vos créations.",
    "Conseils de conservation, pour que vos gâteaux restent parfaits plus longtemps.",
    "Tableau de conversions pratique, pour simplifier vos préparations.",
    "Accès à un groupe privé pour échanger, poser vos questions et partager vos réalisations.",
    "-20% sur le prochain Volume 2, pour continuer votre exploration de l’alchimie en pâtisserie.",
    "Certificat de réussite après validation et application des recettes, pour valoriser vos compétences."
  ]

  const handlePayPalPayment = () => {
    const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=saraalaoui.paypal@gmail.com&amount=76&currency_code=EUR&item_name=Alchemical+Cakes+Vol+1`
    window.open(url, "_blank")
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Bonjour ! Je suis intéressé(e) par l'ebook 'Alchemical Cakes Volume 1' de Sara Alöwe et souhaiterais effectuer un paiement par virement bancaire. Pouvez-vous me donner les détails ?"
    )
    window.open(`https://wa.me/+212600370277?text=${message}`, "_blank")
  }

  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15
      setRotate({ x, y })
    }

    const handleMouseLeave = () => setRotate({ x: 0, y: 0 })

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section id="purchase" className="relative py-12 lg:py-20 overflow-hidden">
      {/* Cream background */}
      <div className="absolute inset-0 bg-[#F2EFE8]"></div>
      {/* Pattern overlay */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 animate-luxury-float"
      />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 lg:space-y-4 mb-8 lg:mb-12 animate-fade-in-up">
          <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
            Commandez maintenant
          </p>
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#651C32] leading-tight">
            Obtenez votre <span className="text-[#C5912C]">exemplaire</span>
          </h2>
          <p className="text-[#651C32]/80 text-sm sm:text-base font-inter leading-relaxed max-w-3xl mx-auto">
            Transformez votre approche de la pâtisserie dès aujourd'hui avec ce guide révolutionnaire. Offre limitée avec garantie satisfait.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Product Image */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <div
              ref={cardRef}
              className="relative w-full max-w-xs sm:max-w-sm transition-transform duration-300"
              style={{
                transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) perspective(600px)`
              }}
            >
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-luxury-glow"></div>
              <img
                src={ebookCover}
                alt="Sara Alöwe - Alchemical Cakes Volume 1"
                className="relative z-10 w-full h-auto max-h-96 sm:max-h-[500px] rounded-2xl shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Card className="bg-white/95 backdrop-blur-sm border border-[#C5912C]/30 p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl rounded-2xl hover:shadow-gold transition-all duration-500 space-y-5">
              {/* Title & Price */}
              <div className="text-center space-y-2">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#651C32]">
                  ALCHEMY IN LAYERS Vol 1
                </h3>
                <p className="text-[#C5912C] font-inter text-sm">Par Sara Alöwe</p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2">
                  <span className="text-[#651C32]/40 line-through font-inter text-sm sm:text-base">
                    1299 MAD
                  </span>
                  <span className="font-playfair text-2xl sm:text-3xl font-bold text-[#C5912C] drop-shadow">
                    799 MAD
                  </span>
                  <span className="bg-[#C5912C] text-white px-2 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                    -39%
                  </span>
                </div>
                <p className="text-[#651C32]/70 font-inter text-xs sm:text-sm mt-1">
                  Offre de lancement limitée
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="font-playfair text-sm sm:text-lg font-semibold text-[#C5912C] text-center">
                  Ce que vous obtenez :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-1 rounded-md hover:bg-[#C5912C]/5 transition"
                    >
                      <Check className="text-[#C5912C] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-[#651C32]/80 font-inter text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Buttons */}
              <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl py-4 text-lg font-semibold bg-[#C5912C] text-white hover:bg-[#B47B24] hover:scale-105 transition-all shadow-xl"
                  onClick={handlePayPalPayment}
                >
                  <CreditCard className="mr-2" size={20} />
                  Payer avec PayPal - 76 EUR
                </LuxuryButton>

                <LuxuryButton
                  variant="primary"
                  size="lg"
                  className="w-full rounded-2xl py-4 text-lg font-semibold bg-[#25D366] text-white hover:bg-[#1DA851] hover:scale-105 transition-all shadow-xl"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Paiement par Virement (WhatsApp)
                </LuxuryButton>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#C5912C]/20 text-center">
                <div className="space-y-1">
                  <Download className="text-[#C5912C] mx-auto" size={18} />
                  <p className="text-[#651C32]/70 font-inter text-xs">Téléchargement<br />Immédiat</p>
                </div>
                <div className="space-y-1">
                  <Shield className="text-[#C5912C] mx-auto" size={18} />
                  <p className="text-[#651C32]/70 font-inter text-xs">Paiement<br />Sécurisé</p>
                </div>
                <div className="space-y-1">
                  <MessageCircle className="text-[#C5912C] mx-auto" size={18} />
                  <p className="text-[#651C32]/70 font-inter text-xs">Support<br />24/7</p>
                </div>
              </div>

              <p className="text-[#651C32]/50 font-inter text-xs text-center mt-2">
                En procédant à l'achat, vous acceptez nos conditions de vente et de confidentialité. Satisfaction garantie
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
