import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Preview } from "@/components/sections/Preview"
import { Features } from "@/components/sections/Features"
import { ReviewsAndApplications } from "@/components/sections/Reviews"
import { Author } from "@/components/sections/Author"
import { Purchase } from "@/components/sections/Purchase"
import { Footer } from "@/components/sections/Footer"

const CupcakeVol1 = () => {
  return (
    <div className="min-h-screen bg-luxury-dark relative">
      <Hero />
      <About />
      <Preview />
      <Features />
      <ReviewsAndApplications />
      <Author />
      <Purchase />
      <Footer />
    </div>
  )
}

export default CupcakeVol1