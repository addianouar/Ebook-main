import { Hero } from "@/components/sections/book1/Hero"
import { About } from "@/components/sections/book1/About"
import { Preview } from "@/components/sections/book1/Preview"
import { Features } from "@/components/sections/book1/Features"
import { ReviewsAndApplications } from "@/components/sections/Reviews"
import { Author } from "@/components/sections/Author"
import { Purchase } from "@/components/sections/Purchase"
import { Footer } from "@/components/sections/Footer"

const Book2 = () => {
  return (
    <div className="min-h-screen bg-luxury-dark relative">
      {/* NOTE: This is a duplicate of the first book landing page */}
      {/* Content will be customized later with Book 2 specific information */}
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

export default Book2