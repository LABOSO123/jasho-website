import { TrendingUp, CloudRain, Shield, PiggyBank, Briefcase, Award, BarChart3, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "Income Mirror",
    description:
      "Track all your income sources—M-Pesa, cash, multiple hustles—in one place with real-time visualization.",
    color: "text-primary",
  },
  {
    icon: CloudRain,
    title: "Financial Weather Radar",
    description:
      "AI predicts your earning patterns, helping you prepare for slow seasons and maximize high-earning periods.",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Hustle Trust Score",
    description: "Build an alternative credit score that unlocks micro-loans, insurance, and pay-later products.",
    color: "text-amber-500",
  },
  {
    icon: Shield,
    title: "AI Fraud Shield",
    description: "Stay protected from scams and fake jobs with AI-powered detection and community alerts.",
    color: "text-red-500",
  },
  {
    icon: PiggyBank,
    title: "Smart Savings & Insurance",
    description: "Automate micro-savings (KSh 50-100) and access affordable health, accident, and income protection.",
    color: "text-green-500",
  },
  {
    icon: Briefcase,
    title: "Gig Market Integrator",
    description: "Connect to partner platforms like Uber and Glovo, and discover new opportunities when income drops.",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Multi-Gig Dashboard",
    description: "Manage your entire gig portfolio with personalized forecasts and adaptive financial planning.",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "Rewards & Gamification",
    description: "Earn badges, airtime, discounts, and reduced fees for positive financial behaviors.",
    color: "text-orange-500",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance text-foreground">
            Everything You Need to Power Your Hustle
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Jasho combines AI technology with deep understanding of gig work to give you financial tools that actually
            work for your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 group bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
