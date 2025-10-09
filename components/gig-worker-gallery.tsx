"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const gigWorkers = [
  {
    role: "Mama Mboga",
    name: "Grace",
    description: "Selling fresh vegetables at the market",
    image: "/african-woman-selling-vegetables-at-market-stall-i.jpg",
  },
  {
    role: "Software Developer",
    name: "James",
    description: "Building apps and websites",
    image: "/african-man-working-on-laptop-coding-software-in-k.jpg",
  },
  {
    role: "Content Writer",
    name: "Amina",
    description: "Creating engaging content online",
    image: "/african-woman-writing-content-on-laptop-in-kenya.jpg",
  },
  {
    role: "Boda Boda Driver",
    name: "David",
    description: "Transporting passengers across the city",
    image: "/african-man-on-motorcycle-boda-boda-in-nairobi-ken.jpg",
  },
  {
    role: "Delivery Rider",
    name: "Kevin",
    description: "Delivering packages and food",
    image: "/african-man-delivery-rider-with-backpack-on-motorc.jpg",
  },
  {
    role: "Graphic Designer",
    name: "Wanjiru",
    description: "Creating visual designs for clients",
    image: "/african-woman-graphic-designer-working-on-computer.jpg",
  },
]

export function GigWorkerGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gigWorkers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % gigWorkers.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + gigWorkers.length) % gigWorkers.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Built for Every Hustler</h2>
          <p className="text-base text-muted-foreground">
            From street vendors to online freelancers, Jasho empowers all types of gig workers across Kenya
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            {gigWorkers.map((worker, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={worker.image || "/placeholder.svg"}
                  alt={`${worker.name} - ${worker.role}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-2xl">
                    <p className="text-primary font-semibold text-sm md:text-base mb-2">{worker.role}</p>
                    <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">{worker.name}</h3>
                    <p className="text-white/90 text-base md:text-lg">{worker.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex gap-2 justify-center mt-6">
            {gigWorkers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
