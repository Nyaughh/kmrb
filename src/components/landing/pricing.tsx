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
    <section id="pricing" className="w-full min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 bg-section-dark section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
      
      {/* Modern floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-amber-500/8 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-28 h-28 bg-amber-300/12 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text-modern">
              Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We offer flexible pricing options to suit your project needs and budget, with no hidden fees.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            className="mx-auto grid max-w-sm sm:max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3"
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 py-1 px-4 text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-full font-medium shadow-lg z-10">
                    Most Popular
                  </div>
                )}
                <Card
                  className={`flex flex-col h-full glass-effect border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 group ${
                    plan.popular 
                      ? "border-amber-400/50 shadow-2xl shadow-amber-400/20 bg-amber-400/5 hover:bg-amber-400/10" 
                      : "hover:shadow-lg hover:shadow-amber-400/10"
                  }`}
                >
                  <CardHeader className={`relative ${plan.popular ? "pt-8" : ""}`}>
                    <CardTitle className="text-xl sm:text-2xl text-card-foreground group-hover:text-amber-400 transition-colors duration-300">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4 text-3xl sm:text-4xl font-bold text-card-foreground group-hover:text-amber-400 transition-colors duration-300">
                      {plan.price}
                    </div>
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
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium shadow-lg shadow-amber-400/30"
                          : "glass-effect border-amber-400/40 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/60"
                      } cursor-pointer text-sm sm:text-base transition-all duration-300`}
                      onClick={() => selectPlan(plan.title, plan.price)}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            Need a custom solution?{" "}
            <Link
              href="#contact"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors duration-200"
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