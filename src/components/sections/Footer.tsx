import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Mail, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react"
import pattern from "@/assets/pattern.jpg"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Bonjour ! Je souhaiterais obtenir plus d'informations sur vos ebooks de pâtisserie."
    )
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@saraalowe.com"
  }

  return (
    <footer className="relative overflow-hidden text-center">
      {/* Red background */}
      <div className="absolute inset-0 bg-[#651C32]"></div>
      {/* Pattern overlay */}
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 animate-luxury-float"
      />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 sm:py-16 lg:py-20">
        {/* Contact Section */}
        <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white animate-bounce">
            Restons en <span className="text-[#C5912C]">Contact</span>
          </h3>
          <p className="text-white/80 font-inter leading-relaxed text-sm sm:text-base max-w-xl mx-auto animate-fade-in-up">
            Vous avez des questions sur nos ebooks ou souhaitez découvrir 
            les prochains volumes de la collection ? N'hésitez pas à nous contacter.
          </p>

          {/* Centered Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 animate-pulse">
            <LuxuryButton
              variant="primary"
              onClick={handleWhatsAppContact}
              className="flex-1 max-w-xs bg-[#25D366] hover:bg-[#1DA851] text-white transition-all"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp
            </LuxuryButton>
            <LuxuryButton
              variant="outline"
              onClick={handleEmailContact}
              className="flex-1 max-w-xs border-white text-white hover:bg-white hover:text-[#651C32] transition-all"
            >
              <Mail className="mr-2" size={18} />
              Email
            </LuxuryButton>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 lg:pt-10 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-white/70 font-inter text-xs sm:text-sm">
                Suivez-nous :
              </span>
              <div className="flex gap-2 sm:gap-3 mt-1 sm:mt-0">
                <button className="bg-white/10 border border-white/30 p-2 rounded-lg text-white hover:bg-white hover:text-[#651C32] transition-all duration-300 animate-bounce">
                  <Instagram size={16} />
                </button>
                <button className="bg-white/10 border border-white/30 p-2 rounded-lg text-white hover:bg-white hover:text-[#651C32] transition-all duration-300 animate-bounce">
                  <Facebook size={16} />
                </button>
                <button className="bg-white/10 border border-white/30 p-2 rounded-lg text-white hover:bg-white hover:text-[#651C32] transition-all duration-300 animate-bounce">
                  <Twitter size={16} />
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <p className="text-white/70 font-inter text-xs sm:text-sm">
                © {currentYear} Sara Alöwe. Tous droits réservés.
              </p>
              <p className="text-white/50 font-inter text-xs mt-1">
                Conception & Développement par l'équipe Sara Alöwe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
