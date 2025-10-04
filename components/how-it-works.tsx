import { Smartphone, TrendingUp, Wallet, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Sign Up in Minutes",
    description: "Create your account and connect your M-Pesa. No paperwork, no hassle.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Track Your Income",
    description: "Log all your hustles—from boda boda rides to mama mboga sales. Our AI learns your patterns.",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Build Your Score",
    description: "As you track income, your Hustle Trust Score grows, unlocking loans and insurance.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Grow Your Business",
    description: "Use forecasts to plan ahead, save automatically, and access credit when you need it.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-foreground">How Jasho Works</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Get started in four simple steps and take control of your financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Number Badge */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-20">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
