"use client"

import { motion } from "framer-motion"
import { Code, Globe, Laptop, MessageSquare, Zap } from "lucide-react"
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

export const Services = () => {
  return (
    <section id="services" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We provide end-to-end development services with meticulous attention to detail.
            </p>
          </div>
        </div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              icon: <Globe className="h-8 w-8 text-amber-400" />,
              title: "Website Development",
              description:
                "Custom websites built with modern technologies that are fast, responsive, and optimized for search engines.",
            },
            {
              icon: <Laptop className="h-8 w-8 text-amber-400" />,
              title: "Software Development",
              description:
                "Bespoke software solutions tailored to your business needs, from internal tools to customer-facing applications.",
            },
            {
              icon: <Zap className="h-8 w-8 text-amber-400" />,
              title: "Mobile App Development",
              description:
                "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
            },
            {
              icon: <Code className="h-8 w-8 text-amber-400" />,
              title: "API Development",
              description:
                "Robust and scalable APIs that connect your systems and enable seamless data exchange between applications.",
            },
            {
              icon: <MessageSquare className="h-8 w-8 text-amber-400" />,
              title: "Consultation",
              description:
                "Expert advice on technology choices, architecture, and development strategies to help you make informed decisions.",
            },
            {
              icon: <Laptop className="h-8 w-8 text-amber-400" />,
              title: "Maintenance & Support",
              description:
                "Ongoing maintenance and support to ensure your digital products remain secure, up-to-date, and performing optimally.",
            },
          ].map((service, index) => (
            <motion.div key={index} variants={itemFade} className="h-full">
              <Card className="bg-card/70 border-border backdrop-blur-sm hover:bg-card transition-colors duration-300 h-full">
                <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 pb-2">
                  <div className="p-1.5 sm:p-2 rounded-md bg-amber-400/10">{service.icon}</div>
                  <CardTitle className="text-lg sm:text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 