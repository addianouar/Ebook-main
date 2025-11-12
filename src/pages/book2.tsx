import { Hero2 } from "@/components/sections/book2/Hero2"
import { About2 } from "@/components/sections/book2/About2"
import { Preview2 } from "@/components/sections/book2/Preview2"
import { Features2 } from "@/components/sections/book2/Features2"
import { Author } from "@/components/sections/Author"
import { Purchase2 } from "@/components/sections/book2/Purchase2"
import { Footer } from "@/components/sections/Footer"
import { ReviewsAndApplications } from "@/components/sections/book2/Reviews2"
const Book2 = () => {
  return (
    <div className="min-h-screen bg-luxury-dark relative">
      {/* ALCHEMY IN LAYERS Vol 1 - Book 2 Landing Page */}
      <Hero2 />
      <About2 />
      <Preview2 />
      <Features2 />
      <ReviewsAndApplications />
      <Author />
      <Purchase2 />
      <Footer />
    </div>
  )
}

export default Book2