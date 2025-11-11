import { Hero } from "@/components/sections/book1/Hero"
import { About } from "@/components/sections/book1/About"
import { Preview } from "@/components/sections/book1/Preview"
import { Features } from "@/components/sections/book1/Features"
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