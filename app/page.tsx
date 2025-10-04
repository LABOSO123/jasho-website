import { Hero } from "@/components/hero"
import { GigWorkerGallery } from "@/components/gig-worker-gallery"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GigWorkerGallery />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
