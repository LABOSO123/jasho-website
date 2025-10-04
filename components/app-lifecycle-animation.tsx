"use client"

import { useEffect, useState } from "react"
import { LogIn, BarChart3, CloudRain, Award, Shield, PiggyBank, Briefcase, Zap } from "lucide-react"

const appSteps = [
  {
    icon: LogIn,
    title: "Login",
    description: "Quick & secure access to your financial dashboard",
    screen: "login",
  },
  {
    icon: BarChart3,
    title: "Income Mirror",
    description: "Track all your income sources in real-time",
    screen: "income",
  },
  {
    icon: CloudRain,
    title: "AI Forecasting",
    description: "Predict your earning patterns with AI",
    screen: "forecast",
  },
  {
    icon: Award,
    title: "Hustle Trust Score",
    description: "Build credit score for irregular income",
    screen: "credit",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Stay protected from scams with AI",
    screen: "fraud",
  },
  {
    icon: PiggyBank,
    title: "Smart Savings",
    description: "Automate micro-savings and access insurance",
    screen: "savings",
  },
  {
    icon: Briefcase,
    title: "Gig Marketplace",
    description: "Discover new opportunities across platforms",
    screen: "gigs",
  },
  {
    icon: Zap,
    title: "Earn Rewards",
    description: "Get badges and discounts for good behavior",
    screen: "rewards",
  },
]

export function AppLifecycleAnimation() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % appSteps.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = appSteps[currentStep].icon

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/smiling-african-kenyan-woman-in-orange-shirt-holdi.jpg"
                alt="Person using Jasho app"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Floating phone overlay showing app lifecycle */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CurrentIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground truncate">{appSteps[currentStep].title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{appSteps[currentStep].description}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {appSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        index === currentStep ? "bg-primary" : index < currentStep ? "bg-primary/40" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feature details */}
        <div className="space-y-8 order-1 md:order-2">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <CurrentIcon className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Step {currentStep + 1} of {appSteps.length}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{appSteps[currentStep].title}</h3>

            <p className="text-base text-muted-foreground leading-relaxed">{appSteps[currentStep].description}</p>
          </div>

          {/* Progress indicators */}
          <div className="space-y-3">
            {appSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${
                    index === currentStep
                      ? "bg-primary/10 border-2 border-primary shadow-lg scale-105"
                      : index < currentStep
                        ? "bg-primary/5 border border-primary/20 opacity-60"
                        : "bg-muted/30 border border-transparent opacity-40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      index === currentStep ? "bg-primary text-white" : "bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-sm font-medium ${index === currentStep ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
