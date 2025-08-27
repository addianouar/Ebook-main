import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Mail, MessageCircle, Instagram } from "lucide-react"
import pattern from "@/assets/pattern.jpg"
import { useContext } from "react"
import { LanguageContext } from "@/Context/languagecontext"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { language } = useContext(LanguageContext)

  const content = {
    fr: {
      title: <>Restons en <span className="text-[#C5912C]">Contact</span></>,
      description:
        "Vous avez des questions sur nos ebooks ou souhaitez découvrir les prochains volumes de la collection ? N'hésitez pas à nous contacter.",
      whatsapp: "WhatsApp",
      email: "Email",
      follow: "Suivez-nous :",
      rights: `© ${currentYear} Sara Alöwe. Tous droits réservés.`,
      dev: "Conception & Développement par l'équipe Sara Alöwe",
      whatsappMessage:
        "Bonjour ! Je souhaiterais obtenir plus d'informations sur vos ebooks de pâtisserie.",
    },
    ar: {
      title: <>لنبقَ على <span className="text-[#C5912C]">تواصل</span></>,
      description:
        "هل لديك أسئلة حول كتبنا الإلكترونية أو ترغب في اكتشاف المجلدات القادمة من السلسلة؟ لا تتردد في الاتصال بنا.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      follow: "تابعنا على :",
      rights: `© ${currentYear} سارة ألووي. جميع الحقوق محفوظة.`,
      dev: "تصميم وتطوير فريق سارة ألووي",
      whatsappMessage:
        "مرحباً! أود الحصول على مزيد من المعلومات حول كتبكم الإلكترونية في مجال الحلويات.",
    },
  }

  const direction = language === "ar" ? "rtl" : "ltr"
  const textAlign = language === "ar" ? "text-right" : "text-center"

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(content[language].whatsappMessage)
    window.open(`https://wa.me/212600370277?text=${message}`, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@saraalowe.com"
  }

  return (
    <footer className="relative overflow-hidden" dir={direction}>
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
        <div className={`space-y-6 lg:space-y-8 animate-fade-in-up ${textAlign}`}>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white animate-bounce">
            {content[language].title}
          </h3>
          <p className="text-white/80 font-inter leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
            {content[language].description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4">
            <LuxuryButton
              variant="primary"
              onClick={handleWhatsAppContact}
              className="w-full sm:w-auto max-w-xs bg-[#25D366] hover:bg-[#1DA851] text-white transition-all"
            >
              <MessageCircle className="mr-2" size={18} />
              {content[language].whatsapp}
            </LuxuryButton>
            <LuxuryButton
              variant="outline"
              onClick={handleEmailContact}
              className="w-full sm:w-auto max-w-xs border-white text-white hover:bg-white hover:text-[#651C32] transition-all"
            >
              <Mail className="mr-2" size={18} />
              {content[language].email}
            </LuxuryButton>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 lg:pt-10 mt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/70 font-inter text-sm">
                {content[language].follow}
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
                {content[language].rights}
              </p>
              <p className="text-white/50 font-inter text-xs mt-1">
                {content[language].dev}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
