import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Mail, MessageCircle, Instagram } from "lucide-react"
import pattern from "@/assets/pattern.jpg"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const content = {
    title: <>Stay in <span className="text-[#C5912C]">Touch</span></>,
    description:
      "Have questions about our ebooks or want to discover upcoming volumes in the collection? Don’t hesitate to reach out to us.",
    whatsapp: "WhatsApp",
    email: "Email",
    follow: "Follow us:",
    rights: `© ${currentYear} Saralöwe. All rights reserved.`,
    dev: "Design & Development by the Saralöwe Team",
    whatsappMessage:
      "Hello! I’d like to get more information about your ebooks.",
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(content.whatsappMessage)
    window.open(`https://wa.me/212600370277?text=${message}`, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@saraalowe.com"
  }

  return (
    <footer className="relative overflow-hidden" dir="ltr">
      {/* Background */}
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
        <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center">
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white animate-bounce">
            {content.title}
          </h3>
          <p className="text-white/80 font-inter leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4">
            <LuxuryButton
              variant="primary"
              onClick={handleWhatsAppContact}
              className="w-full sm:w-auto max-w-xs bg-[#25D366] hover:bg-[#1DA851] text-white transition-all"
            >
              <MessageCircle className="mr-2" size={18} />
              {content.whatsapp}
            </LuxuryButton>
            <LuxuryButton
              variant="outline"
              onClick={handleEmailContact}
              className="w-full sm:w-auto max-w-xs border-white text-white hover:bg-white hover:text-[#651C32] transition-all"
            >
              <Mail className="mr-2" size={18} />
              {content.email}
            </LuxuryButton>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 lg:pt-10 mt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/70 font-inter text-sm">
                {content.follow}
              </span>
              <a
                href="https://www.instagram.com/saracakeartist/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/30 p-3 rounded-lg text-white hover:bg-white hover:text-[#651C32] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white/70 font-inter text-xs sm:text-sm">
                {content.rights}
              </p>
              <p className="text-white/50 font-inter text-xs mt-1">
                {content.dev}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
