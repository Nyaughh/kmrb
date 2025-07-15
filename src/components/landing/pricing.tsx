"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
}

const itemFade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

interface PricingProps {
  selectPlan: (planName: string, planPrice: string) => void
  scrollToSection: (sectionId: string) => void
}

export const Pricing = ({ selectPlan, scrollToSection }: PricingProps) => {
  return (
    <section id="pricing" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We offer flexible pricing options to suit your project needs and budget.
            </p>
          </div>
        </div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: "Basic",
              description: "For small projects and startups",
              price: "$40/hour",
              features: [
                "Simple website or application",
                "Up to 5 pages/screens",
                "Basic design",
                "1 month of support",
              ],
              popular: false,
            },
            {
              title: "Professional",
              description: "For medium-sized businesses",
              price: "$60/hour",
              features: [
                "Complex website or application",
                "Up to 15 pages/screens",
                "Custom design",
                "3 months of support",
                "SEO optimization",
              ],
              popular: true,
            },
            {
              title: "Enterprise",
              description: "For large businesses and organizations",
              price: "$80/hour",
              features: [
                "Enterprise-grade solutions",
                "Unlimited pages/screens",
                "Premium design",
                "12 months of support",
                "Advanced integrations",
                "Dedicated project manager",
              ],
              popular: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              variants={itemFade}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card
                className={`flex flex-col h-full bg-card/70 backdrop-blur-sm border-border ${
                  plan.popular ? "border-amber-400/50 shadow-lg shadow-amber-400/10" : ""
                }`}
              >
                <CardHeader>
                  {plan.popular && (
                    <div className="py-1 px-3 text-xs bg-amber-400 text-neutral-900 rounded-full w-fit mx-auto mb-2 font-medium">
                      Popular
                    </div>
                  )}
                  <CardTitle className="text-xl sm:text-2xl text-card-foreground">{plan.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4 text-3xl sm:text-4xl font-bold text-card-foreground">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-amber-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-4 sm:p-6 pt-0 mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-amber-400 hover:bg-amber-500 text-neutral-900 font-medium"
                        : "bg-amber-400/20 hover:bg-amber-400/30 text-amber-500 dark:text-amber-400 border border-amber-400/30"
                    } cursor-pointer text-sm sm:text-base transition-colors duration-200`}
                    onClick={() => selectPlan(plan.title, plan.price)}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            Need a custom solution?{" "}
            <Link
              href="#contact"
              className="text-amber-400 hover:underline"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
} 