import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Award, Star, Users } from "lucide-react"
import authorPortrait from "@/assets/author-portrait.png"
import pattern from "@/assets/pattern.jpg"
import { useLanguage } from "@/Context/languagecontext"

export const Author = () => {
  const { language } = useLanguage()

  const achievements = [
    { icon: Award, number: 15, suffix: "+", label: { fr: "Années d'expérience", ar: "سنوات خبرة" } },
    { icon: Star, number: 500, suffix: "+", label: { fr: "Recettes créées", ar: "الوصفات المبتكرة" } },
    { icon: Users, number: 5000, suffix: "+", label: { fr: "Élèves formés", ar: "الطلاب المتدربين" } },
    { icon: null, number: 95000, suffix: "+", label: { fr: "Followers Instagram", ar: "متابعو إنستغرام" }, customIcon: "instagram", link: "https://www.instagram.com/" }
  ]

  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState(achievements.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  // IntersectionObserver to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Animate counters
  useEffect(() => {
    if (!visible) return
    let start: number | null = null
    const duration = 1500

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)

      setCounts(
        achievements.map((a) => Math.floor(a.number * progress))
      )

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [visible])

  const direction = language === 'ar' ? 'rtl' : 'ltr'
  const textAlign = language === 'ar' ? 'text-right' : 'text-left'
  const flexDirection = language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'
  const fontArabic = language === 'ar' ? 'font-[Tajawal]' : ''

  return (
    <section ref={sectionRef} className={`relative py-12 sm:py-16 lg:py-20 bg-[#651C32] overflow-hidden ${fontArabic}`} dir={direction}>
      {/* Background Pattern */}
      <img 
        src={pattern} 
        alt="Pattern" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 animate-luxury-float" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${flexDirection}`}>

          {/* Author Image */}
          <div className="relative flex justify-center lg:justify-start mb-8 lg:mb-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-full blur-3xl scale-110"></div>
              <img 
                src={authorPortrait}
                alt="Sara Alöwe - Chef Pâtissière"
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-[#C5912C]/30"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#C5912C] text-[#651C32] p-2.5 lg:p-3 rounded-full shadow-lg">
                <Award size={20} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Title */}
            <div className={textAlign}>
              <p className="text-[#C5912C] font-inter font-medium tracking-wider uppercase text-sm">
                 {language === 'fr' ? "Rencontrez l'auteure" : "تعرف على المؤلفة"}
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Sara <span className="text-[#C5912C]">Alöwe</span>
              </h2>
            </div>

            {/* Bio */}
            <div className={`text-white/80 font-inter leading-relaxed space-y-2 ${textAlign} ${language==='fr' ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}`}>
              {language === 'fr' ? (
                <>
                  <p>
                    Sara Alöwe est une <strong>cake designer</strong> et <strong>formatrice passionnée</strong>, connue pour son sens du détail et son approche artistique de la pâtisserie. Après de nombreuses demandes de ses élèves, elle a rassemblé son savoir-faire dans une <strong>collection en trois volumes</strong> comprenant <strong>30 recettes innovantes</strong> pour le cake design.
                  </p>
                  <p>
                    <strong>Alchemy in Layers – 10 recettes de cakes innovants</strong> est le premier tome de cette série, dédié à la <strong>stabilité</strong>, la <strong>créativité</strong> et l’excellence en pâtisserie moderne.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    سارة ألووي هي <strong>مصممة كيك</strong> و<strong>مدربة شغوفة</strong>، معروفة باهتمامها بالتفاصيل ونهجها الفني في الحلويات. بعد طلبات كثيرة من طلابها، جمعت خبرتها في <strong>مجموعة من ثلاثة مجلدات</strong> تحتوي على <strong>30 وصفة مبتكرة</strong> لتصميم الكيك.
                  </p>
                  <p>
                    <strong>الخيمياء في الطبقات – 10 وصفات كيك مبتكرة</strong> هو الجزء الأول من هذه السلسلة، مخصص للـ <strong>ثبات</strong> و<strong>الإبداع</strong> والتميز في الحلويات الحديثة.
                  </p>
                </>
              )}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-[#651C32]/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-[#C5912C]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div className="mb-2 flex items-center justify-center">
                    {achievement.customIcon === "instagram" ? (
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <svg 
                          className="text-[#C5912C]" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          width="20" 
                          height="20"
                        >
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
                        </svg>
                      </a>
                    ) : (
                      <achievement.icon className="text-[#C5912C]" size={20} />
                    )}
                  </div>
                  <div className="font-playfair text-lg sm:text-xl font-bold text-[#C5912C] mb-1">
                    {counts[index].toLocaleString()}{achievement.suffix}
                  </div>
                  <div className="text-white/70 font-inter text-xs sm:text-sm">
                    {achievement.label[language]}
                  </div>
                </Card>
              ))}
            </div>

            {/* Blockquote */}
            <Card className="bg-[#651C32]/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border-l-4 border-[#C5912C]/50 mt-6">
              <blockquote className="space-y-2">
                <p className="text-white/80 font-inter italic text-sm sm:text-base leading-relaxed">
                  {language==='fr' 
                    ? "« L’alchimie n’est pas magie… c’est la science des ingrédients naturels, travaillés avec justesse pour créer la stabilité et la beauté des gâteaux. »"
                    : "« الكيمياء ليست سحرًا… إنها علم المكونات الطبيعية، معالجَة بعناية لخلق الثبات وجمال الكعك. »"}
                </p>
                <footer className="text-[#C5912C] font-playfair font-semibold text-xs sm:text-sm">
                  — Sara Alöwe
                </footer>
              </blockquote>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
