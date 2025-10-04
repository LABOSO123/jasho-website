"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { AppLifecycleAnimation } from "@/components/app-lifecycle-animation"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qFfUQnlywZZiNRAwjJ8M3P7CiFTAt6.png"
            alt="Jasho - Powering Your Hustle"
            className="h-24 md:h-32 w-auto"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:text-primary">
            Features
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex hover:text-primary">
            How It Works
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">Get Started</Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance text-foreground">
              Empower Your Hustle with <span className="text-primary">Smart Financial Tools</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              Track multiple income streams, forecast earnings with AI, build your credit score, and access savings &
              insurance—all designed for Kenya's gig workers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base px-8 py-6 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
              >
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-2 hover:border-primary hover:text-primary transition-all bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">KSh 50M+</div>
                <div className="text-sm text-muted-foreground">Income Tracked</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - App Lifecycle Animation */}
          <div className="relative">
            <AppLifecycleAnimation />
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
