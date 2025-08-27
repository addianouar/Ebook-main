import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Check, Download, Shield, MessageCircle, CreditCard } from "lucide-react"
import ebookCover from "@/assets/ebook-cover.jpg"
import pattern from "@/assets/pattern.jpg"
import { useRef, useEffect, useState, useContext } from "react"
import { LanguageContext } from "@/Context/languagecontext"

export const Purchase = () => {
  const { language } = useContext(LanguageContext)

  const content = {
    fr: {
      header: { small: "Commandez maintenant", title: <>Obtenez votre <span className="text-[#C5912C]">exemplaire</span></>, description: "Transformez votre approche de la pâtisserie dès aujourd'hui avec ce guide révolutionnaire. Offre limitée avec garantie satisfait." },
      title: "ALCHEMY IN LAYERS Vol 1", author: "Par Sara Alöwe", oldPrice: "1299 MAD", newPrice: "799 MAD", discount: "-39%", offer: "Offre de lancement limitée",
      benefitsTitle: "Ce que vous obtenez :",
      benefits: [
        "10 recettes exclusives et innovantes, conçues pour le cake design et la stabilité.",
        "Bases, inserts et crèmes parfaitement équilibrés, pour des gâteaux beaux et savoureux.",
        "Techniques expliquées pas à pas, accompagnées des astuces de chef pour réussir vos créations.",
        "Conseils de conservation, pour que vos gâteaux restent parfaits plus longtemps.",
        "Tableau de conversions pratique, pour simplifier vos préparations.",
        "Accès à un groupe privé pour échanger, poser vos questions et partager vos réalisations.",
        "-20% sur le prochain Volume 2, pour continuer votre exploration de l’alchimie en pâtisserie.",
        "Certificat de réussite après validation et application des recettes, pour valoriser vos compétences."
      ],
      paypal: "Payer avec PayPal - 76 EUR", bank: "Paiement par Virement (WhatsApp)",
      guarantees: [
        { icon: Download, text: "Téléchargement\nImmédiat" },
        { icon: Shield, text: "Paiement\nSécurisé" },
        { icon: MessageCircle, text: "Support\n24/7" }
      ],
      terms: "En procédant à l'achat, vous acceptez nos conditions de vente et de confidentialité. Satisfaction garantie"
    },
    ar: {
      header: { small: "اطلب الآن", title: <>احصل على <span className="text-[#C5912C]">نسختك</span></>, description: "غيّر طريقة تناولك للحلويات اليوم مع هذا الدليل الثوري. عرض محدود مع ضمان الرضا." },
      title: "Alchemy in Layers المجلد 1", author: "بواسطة سارة ألووي", oldPrice: "1299 MAD", newPrice: "799 MAD", discount: "-39%", offer: "عرض إطلاق محدود",
      benefitsTitle: "ما ستحصل عليه:",
      benefits: [
        "10 وصفات حصرية ومبتكرة، مصممة لتزيين الكيك والحفاظ على ثباتها.",
        "قواعد، حشوات وكريمات متوازنة تماماً، للحصول على كيك جميل ولذيذ.",
        "تقنيات مشروحة خطوة بخطوة، مع نصائح الشيف لضمان نجاح إبداعاتك.",
        "نصائح للتخزين، للحفاظ على الكيك بحالة ممتازة لفترة أطول.",
        "جدول تحويلات عملي لتسهيل تحضير الوصفات.",
        "الوصول إلى مجموعة خاصة للتواصل، طرح الأسئلة ومشاركة الإنجازات.",
        "-20% على المجلد الثاني، لاستمرار استكشاف الكيمياء في الحلويات.",
        "شهادة إتمام بعد تجربة الوصفات، لإثبات مهاراتك."
      ],
      paypal: "ادفع عبر PayPal - 76 EUR", bank: "الدفع عبر التحويل (WhatsApp)",
      guarantees: [
        { icon: Download, text: "تحميل\nفوري" },
        { icon: Shield, text: "دفع\nآمن" },
        { icon: MessageCircle, text: "الدعم\n24/7" }
      ],
      terms: "من خلال الشراء، فإنك توافق على شروط البيع والخصوصية الخاصة بنا. رضا مضمون"
    }
  }

  const direction = language === "ar" ? "rtl" : "ltr"
  const textAlign = language === "ar" ? "text-right" : "text-left"

  const handlePayPalPayment = () => {
    window.open(`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=saraalaoui.paypal@gmail.com&amount=76&currency_code=EUR&item_name=Alchemical+Cakes+Vol+1`, "_blank")
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(language === "ar" ? "مرحبًا! أنا مهتم/ة بكتاب 'Alchemical Cakes Volume 1' وأرغب في الدفع عبر التحويل البنكي. هل يمكنكم تزويدي بالتفاصيل؟" : "Bonjour ! Je suis intéressé(e) par l'ebook 'Alchemical Cakes Volume 1' et souhaiterais effectuer un paiement par virement bancaire. Pouvez-vous me donner les détails ?")
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

  const data = content[language]

  return (
    <section dir={direction} className="relative py-16 lg:py-24 bg-[#F2EFE8] flex justify-center items-center">
      {/* Pattern */}
      <img src={pattern} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-10 animate-luxury-float" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 max-w-3xl mx-auto ${textAlign} animate-fade-in-up`}>
          <p className="text-[#C5912C] uppercase tracking-wider font-medium">{data.header.small}</p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#651C32] my-2">{data.header.title}</h2>
          <p className="text-[#651C32]/80 text-base sm:text-lg">{data.header.description}</p>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Ebook */}
          <div className="flex justify-center">
            <div
              ref={cardRef}
              className="relative w-64 sm:w-80 md:w-96 transition-transform duration-300"
              style={{ transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) perspective(600px)` }}
            >
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-luxury-glow"></div>
              <img src={ebookCover} alt="Ebook Cover" className="relative z-10 w-full rounded-2xl shadow-xl object-contain" />
            </div>
          </div>

          {/* Purchase Card */}
          <Card className="bg-white/95 backdrop-blur-sm border border-[#C5912C]/30 p-6 sm:p-8 xl:p-10 shadow-2xl rounded-2xl hover:shadow-gold transition-all duration-500 w-full max-w-xl">
            {/* Title & Price */}
            <div className="text-center space-y-3">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#651C32]">{data.title}</h3>
              <p className="text-[#C5912C] font-inter">{data.author}</p>
              <div className="flex justify-center items-center gap-3 mt-2">
                <span className="line-through text-[#651C32]/40">{data.oldPrice}</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#C5912C]">{data.newPrice}</span>
                <span className="bg-[#C5912C] text-white px-3 py-1 rounded-full text-xs sm:text-sm animate-pulse">{data.discount}</span>
              </div>
              <p className="text-[#651C32]/70 mt-1">{data.offer}</p>
            </div>

            {/* Benefits */}
            <div className="mt-6 space-y-2">
              <h4 className="font-playfair text-[#C5912C] text-center font-semibold">{data.benefitsTitle}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {data.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 p-1 rounded hover:bg-[#C5912C]/5 transition">
                    <Check className="text-[#C5912C] mt-0.5" size={16} />
                    <span className="text-[#651C32]/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 mt-6">
              <LuxuryButton className="w-full bg-[#C5912C] hover:bg-[#B47B24] text-white py-4 rounded-2xl font-semibold" onClick={handlePayPalPayment}>
                <CreditCard className="mr-2" /> {data.paypal}
              </LuxuryButton>
              <LuxuryButton className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-2xl font-semibold" onClick={handleWhatsAppContact}>
                <MessageCircle className="mr-2" /> {data.bank}
              </LuxuryButton>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 text-center border-t border-[#C5912C]/20 pt-4">
              {data.guarantees.map((g, i) => (
                <div key={i} className="space-y-1">
                  <g.icon className="text-[#C5912C] mx-auto" size={18} />
                  <p className="text-[#651C32]/70 text-xs whitespace-pre-line">{g.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[#651C32]/50 text-xs text-center mt-3">{data.terms}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
