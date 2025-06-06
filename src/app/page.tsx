"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, Globe, Laptop, MessageSquare, Moon, Sun, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import ProfileCard from "@/components/ui/profile-card"

interface Testimonial {
  name: string;
  company: string;
  quote: string | { __html: string };
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const sections = useRef<Record<string, HTMLElement | null>>({})

  // Handle initial client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Fill contact form and scroll to contact section
  const selectPlan = (planName: string, planPrice: string) => {
    scrollToSection("contact")
    
    // Wait for scroll to complete before filling form
    setTimeout(() => {
      const messageElement = document.getElementById("message") as HTMLTextAreaElement
      if (messageElement) {
        messageElement.value = `I'm interested in the ${planName} plan (${planPrice}). I want to ...`
      }
    }, 800)
  }

  // Observe sections for active state
  useEffect(() => {
    if (!mounted) return

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.15,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sectionIds = ["home", "services", "portfolio", "pricing", "testimonials", "contact"]

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
        sections.current[id] = element
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = sections.current[id]
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [mounted])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

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

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-5"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/10" />
      </div>

      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 w-full">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950"></div>

          {/* Animated light rays - enhanced and more professional */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[200px] w-[40px] bg-amber-400/10 blur-md"
                style={{
                  left: `${20 + i * 15}%`,
                  top: "-10%",
                  height: "120%",
                  transform: `rotate(${15 + i * 2}deg)`,
                  animation: `lightRay ${6 + i * 0.5}s ease-in-out infinite alternate`,
                  opacity: 0.05 + i * 0.02,
                }}
              ></div>
            ))}
          </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center space-y-4 sm:space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
              >
                <div className="space-y-4">
                  <motion.h1
                    className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl/none flex flex-col gap-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <span className="relative inline-block min-w-36 sm:min-w-48 min-h-10 sm:min-h-16 text-left mb-0">
                      <span className="typewriter-jp text-foreground">光漏れ</span>
                      <span className="typewriter-en text-foreground">Komorebi</span>
                    </span>
                    <span className="relative block -mt-1">
                      <motion.span 
                        className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 dark:from-amber-200 dark:via-amber-400 dark:to-amber-200 bg-clip-text text-transparent relative z-10 hover-glow"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                      >
                        Digital Innovation Studio
                        <div className="relative h-8">
                          <div className="particle"></div>
                          <div className="particle"></div>
                          <div className="particle"></div>
                          <div className="particle"></div>
                          <div className="particle"></div>
                        </div>
                      </motion.span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[8px] bg-amber-500/30 dark:bg-amber-400/30 -z-10 transform -skew-x-6"
                        initial={{ width: "0%", opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                      ></motion.span>
                    </span>
                  </motion.h1>
                  <motion.div
                    className="max-w-[600px] relative z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-base sm:text-lg md:text-xl text-foreground">
                      Where technology meets artistry. Crafting digital experiences that leave lasting impressions.
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  className="flex flex-row gap-3 relative z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <Button
                    className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-neutral-900 border-none font-medium pointer-events-auto cursor-pointer flex-1 sm:flex-initial text-sm sm:text-base"
                    onClick={() => scrollToSection("contact")}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-500/40 dark:border-amber-400/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 dark:hover:bg-amber-400/10 pointer-events-auto cursor-pointer flex-1 sm:flex-initial text-sm sm:text-base"
                    onClick={() => scrollToSection("portfolio")}
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Feature annotations removed as requested */}
                  
                  <div className="hidden lg:flex lg:justify-end glow-ring rounded-3xl relative">
                    <svg
                      className="h-[350px] w-[350px] svg-path-3d"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(245, 158, 11)" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="rgb(251, 191, 36)" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.3" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <g className="animate-float" style={{ transformOrigin: 'center', animationDelay: '0.1s' }}>
                        <path
                          d="M31.9,-52.8C43.6,-46.1,56.5,-41.1,64.1,-31.2C71.7,-21.3,74,-6.5,72.4,7.6C70.7,21.7,65.1,35.1,55.8,44.8C46.5,54.5,33.5,60.5,20.3,62.9C7.1,65.3,-6.2,64.1,-19.2,60.6C-32.2,57.1,-44.9,51.3,-53.4,41.7C-61.9,32.1,-66.1,18.8,-67.9,4.8C-69.6,-9.1,-68.9,-23.7,-62.2,-35.2C-55.6,-46.7,-43.1,-55,-30.6,-60.8C-18.1,-66.6,-5.5,-69.8,3.1,-64.9C11.7,-60,20.2,-59.5,31.9,-52.8Z"
                          className="animate-float"
                          fill="url(#gradient1)"
                          fillOpacity="0.4"
                          filter="url(#glow)"
                          transform="translate(100 100)"
                        />
                      </g>
                      <g className="animate-float-slow" style={{ transformOrigin: 'center', animationDelay: '0.2s' }}>
                        <path
                          d="M49.1,-75.3C60.3,-68.4,63.9,-48.4,68.8,-31.1C73.7,-13.8,80.1,0.7,78.5,14.7C76.8,28.7,67.1,42.1,55.3,50.6C43.5,59.1,29.7,62.6,15.9,66.5C2,70.4,-11.9,74.5,-25.8,72.3C-39.7,70,-53.6,61.3,-62.5,48.6C-71.4,35.9,-75.4,19.2,-77.2,2.1C-79,-15,-78.6,-32.3,-70.4,-43.9C-62.2,-55.5,-46.2,-61.3,-32,-65.6C-17.7,-69.9,-5.3,-72.8,8,-77.4C21.3,-82,40.6,-82.3,49.1,-75.3Z"
                          className="animate-float-slow"
                          fill="url(#gradient1)"
                          fillOpacity="0.3"
                          filter="url(#glow)"
                          transform="translate(100 100)"
                        />
                      </g>
                      <g className="animate-float-slower" style={{ transformOrigin: 'center', animationDelay: '0.3s' }}>
                        <path
                          d="M39.1,-64.4C52.9,-59.1,67.9,-52.5,73.9,-41C80,-29.6,77.2,-14.8,74.2,-1.7C71.3,11.3,68.3,22.6,61.7,31.1C55.1,39.6,44.9,45.2,34.5,51.8C24.1,58.5,13.6,66.2,1.1,64.5C-11.4,62.7,-22.7,51.6,-32.2,42.2C-41.6,32.9,-49.1,25.3,-55.1,15.3C-61.1,5.4,-65.5,-6.8,-64.3,-18.8C-63.1,-30.8,-56.2,-42.5,-46,-49.2C-35.8,-55.9,-22.4,-57.5,-9.9,-61.3C2.6,-65.1,13.1,-71.2,23.9,-70.9C34.7,-70.7,45.7,-64.3,39.1,-64.4Z"
                          className="animate-float-slower"
                          fill="url(#gradient1)"
                          fillOpacity="0.2"
                          filter="url(#glow)"
                          transform="translate(100 100)"
                        />
                      </g>
                      
                      {/* Enhanced glowing dots */}
                      <circle className="animate-pulse-slow" cx="50" cy="50" r="5" fill="#FBBF24" opacity="0.6" filter="url(#glow)" />
                      <circle className="animate-pulse-slow" cx="150" cy="40" r="4" fill="#F59E0B" opacity="0.5" filter="url(#glow)" style={{ animationDelay: '0.5s' }} />
                      <circle className="animate-pulse-slow" cx="160" cy="120" r="6" fill="#FBBF24" opacity="0.4" filter="url(#glow)" style={{ animationDelay: '1s' }} />
                      <circle className="animate-pulse-slow" cx="80" cy="160" r="5" fill="#F59E0B" opacity="0.5" filter="url(#glow)" style={{ animationDelay: '1.5s' }} />
                      <circle className="animate-pulse-slow" cx="120" cy="80" r="7" fill="#FBBF24" opacity="0.6" filter="url(#glow)" style={{ animationDelay: '2s' }} />
                      
                      {/* Central design element */}
                      <g filter="url(#glow)" className="animate-float" style={{ transformOrigin: 'center', animationDelay: '1.5s' }}>
                        <circle cx="100" cy="100" r="15" fill="rgba(251, 191, 36, 0.2)" />
                        <circle cx="100" cy="100" r="10" fill="rgba(251, 191, 36, 0.4)" />
                        <circle cx="100" cy="100" r="5" fill="rgba(251, 191, 36, 0.6)" />
                      </g>
                    </svg>
                    
                    {/* Additional glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-amber-400/10 to-amber-500/5 rounded-3xl pointer-events-none"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 rounded-3xl blur-xl opacity-50 animate-pulse-slow pointer-events-none"></div>
                  </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/10 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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

        <section id="portfolio" className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Our Recent Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  Take a look at our featured work that showcases our expertise and capabilities.
                </p>
              </div>
            </div>
            <motion.div
              className="mx-auto w-full max-w-3xl px-4 sm:px-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div
                className="group relative rounded-xl shadow-lg w-full bg-card/70 backdrop-blur-sm border border-border overflow-hidden"
                  variants={itemFade}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Link href="https://valdle.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                      <span className="sr-only">Visit Valdle</span>
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      alt="Valdle - Valorant Game"
                      className="h-full w-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-300"
                      src="https://valdle.com/og-image.jpg"
                      width="1200"
                      height="675"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg?height=675&width=1200&text=Valdle';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-card-foreground group-hover:text-amber-400 transition-colors duration-200">Valdle</h3>
                      <p className="text-base text-amber-400 mb-2">Client Project for <span className="inline-block">
                        <span className="relative inline-block group/tooltip">
                          <span className="underline underline-offset-2 decoration-1 hover:text-amber-500 transition-colors duration-200 cursor-help">VALCORD</span>
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-card text-xs text-amber-100 dark:text-amber-100 text-black dark:text-amber-100 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg border border-amber-400/20">
                            The official VALORANT Discord server network
                          </span>
                        </span>
                      </span></p>
                      <p className="text-sm text-muted-foreground max-w-[600px] leading-relaxed">
                        A wordle like game that tests your Valorant knowledge with three unique mini-games, every day.
                      </p>
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          </div>
        </section>

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
                    className={`flex flex-col h-full bg-card/70 backdrop-blur-sm border-border ${plan.popular ? "border-amber-400/50 shadow-lg shadow-amber-400/10" : ""}`}
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

        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <motion.div
              className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  name: "Flokie",
                  company: "Owner at Paragon",
                  quote:
                    "Hired Komorebi to develop Valdle for me and they crushed it. They're easy to work with and deliver quality work fast. Definitely recommend!",
                },
                {
                  name: "Cal",
                  company: "Community Manager",
                  quote: {
                    __html: `"We've had the pleasure to work with Komorebi on a website for the official VALORANT Discord server, partnering with <a href="https://www.riotgames.com" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-500">Riot Games</a> & <a href="https://medal.tv" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-500">Medal.tv</a>. We're thankful to Komorebi for always considering our objectives with each partnered activation, and weaving those in with the community events so that we achieve our brand objectives. We're glad to have been able to deliver unique experiences partnering up together. We look forward to working closer even closer in the future."`
                  },
                },
              ].map((testimonial: Testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <Card className="text-center bg-card/70 backdrop-blur-sm border-border h-full">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        <div className="relative h-12 w-12 rounded-full bg-amber-400/30 flex items-center justify-center">
                          <span className="text-xl font-bold text-amber-400">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-amber-400/40 pl-4 italic text-muted-foreground text-left mb-4 flex-grow">
                        {typeof testimonial.quote === 'string' ? 
                          `"${testimonial.quote}"` : 
                          <span dangerouslySetInnerHTML={testimonial.quote} />
                        }
                      </blockquote>
                      <div>
                        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-muted relative">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  The talented individuals behind our success.
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
                  name: "Aarin",
                  position: "Frontend Developer & UX/UI Designer",
                  bio: "Combines frontend development expertise with UX/UI design skills to create beautiful and functional user interfaces, while managing project delivery and client relationships.",
                  imageUrl: "/images/team/nyaughh.jpg",
                  initials: "A",
                },
                {
                  name: "Alen",
                  position: "Full Stack Developer",
                  bio: "Expert in cloud infrastructure, hardware integration, and full-stack development, specializing in building scalable systems and complex technical solutions.",
                  imageUrl: "/images/team/alen.jpg",
                  initials: "A",
                },
                {
                  name: "John",
                  position: "Backend Architect",
                  bio: "Intuitive developer who specializes in backend architecture and optimization, bringing creative solutions to complex technical challenges while ensuring scalable and efficient systems.",
                  imageUrl: "/images/team/john.jpg",
                  initials: "J",
                },
                {
                  name: "Bilal",
                  position: "Backend Developer",
                  bio: "Problem-solving expert who specializes in backend development, creating APIs and scalable server-side solutions while tackling complex technical challenges.",
                  imageUrl: "/images/team/bilal.jpg",
                  initials: "B",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <ProfileCard {...member} className="h-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  Ready to start your project? Send us a message and we'll get back to you shortly.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl">
              <form className="space-y-4 sm:space-y-6" action="https://formspree.io/f/xzzeanql" method="POST">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    placeholder="Tell us about your project"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-amber-400 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-background transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} kmrb
          </p>
        </div>
      </footer>
    </div>
  )
}

