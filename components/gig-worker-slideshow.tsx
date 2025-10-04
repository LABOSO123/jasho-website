"use client"

import { useEffect, useState } from "react"

const gigWorkers = [
  {
    alt: "Mama Mboga - Vegetable Vendor",
  },
  {
    alt: "Software Developer",
  },
  {
    alt: "Content Writer & Freelancer",
  },
  {
    alt: "Boda Boda Driver",
  },
  {
    alt: "Delivery Rider",
  },
  {
    alt: "Graphic Designer",
  },
  {
    alt: "Street Vendor",
  },
  {
    alt: "Online Tutor",
  },
]
// </CHANGE>

export function GigWorkerSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gigWorkers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-muted ring-1 ring-primary/10">
        {gigWorkers.map((worker, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`/.jpg?height=600&width=600&query=${encodeURIComponent(`African ${worker.alt} working professionally in Kenya`)}`}
              alt={worker.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* </CHANGE> */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
              <p className="text-white text-2xl font-bold drop-shadow-lg">{worker.alt}</p>
              <div className="w-16 h-1 bg-primary mt-2 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute -inset-6 border-2 border-primary/30 rounded-[2rem] -z-10" />
      <div className="absolute -inset-3 bg-primary/5 rounded-[1.75rem] -z-20" />

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {gigWorkers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-12 shadow-lg shadow-primary/50"
                : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
