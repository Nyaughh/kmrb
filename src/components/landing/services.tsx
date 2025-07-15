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
    <section id="services" className="w-full min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 bg-section-dark section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-pattern opacity-40"></div>
      
      {/* Modern floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-amber-400/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-amber-500/12 rounded-full blur-2xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-amber-300/10 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text-modern">
              What We Do
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              From concept to launch, we build digital products that work beautifully and perform flawlessly.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[50vh]">
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
                title: "Web Development",
                description:
                  "We craft websites that look great and load fast. Every site is built to work perfectly on any device and rank well on search engines.",
              },
              {
                icon: <Laptop className="h-8 w-8 text-amber-400" />,
                title: "Custom Software",
                description:
                  "Need something specific? We build software that fits exactly what your business needs, whether it's for your team or your customers.",
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-400" />,
                title: "Mobile Apps",
                description:
                  "iOS, Android, or both - we create mobile apps that people actually want to use and keep coming back to.",
              },
              {
                icon: <Code className="h-8 w-8 text-amber-400" />,
                title: "API Development",
                description:
                  "We build the behind-the-scenes connections that make your apps talk to each other smoothly and securely.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-amber-400" />,
                title: "Tech Consulting",
                description:
                  "Not sure which direction to go? We'll help you figure out the best tech stack and approach for your project.",
              },
              {
                icon: <Laptop className="h-8 w-8 text-amber-400" />,
                title: "Ongoing Support",
                description:
                  "Launch day isn't the end - we stick around to keep everything running smoothly and add new features as you grow.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={itemFade} className="h-full">
                <Card className="glass-effect hover:bg-card/80 transition-all duration-300 h-full group hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10">
                  <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 pb-2">
                    <div className="p-1.5 sm:p-2 rounded-md bg-amber-400/20 group-hover:bg-amber-400/30 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-card-foreground group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 