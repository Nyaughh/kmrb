"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
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
                  <g className="animate-float" style={{ transformOrigin: "center", animationDelay: "0.1s" }}>
                    <path
                      d="M31.9,-52.8C43.6,-46.1,56.5,-41.1,64.1,-31.2C71.7,-21.3,74,-6.5,72.4,7.6C70.7,21.7,65.1,35.1,55.8,44.8C46.5,54.5,33.5,60.5,20.3,62.9C7.1,65.3,-6.2,64.1,-19.2,60.6C-32.2,57.1,-44.9,51.3,-53.4,41.7C-61.9,32.1,-66.1,18.8,-67.9,4.8C-69.6,-9.1,-68.9,-23.7,-62.2,-35.2C-55.6,-46.7,-43.1,-55,-30.6,-60.8C-18.1,-66.6,-5.5,-69.8,3.1,-64.9C11.7,-60,20.2,-59.5,31.9,-52.8Z"
                      className="animate-float"
                      fill="url(#gradient1)"
                      fillOpacity="0.4"
                      filter="url(#glow)"
                      transform="translate(100 100)"
                    />
                  </g>
                  <g className="animate-float-slow" style={{ transformOrigin: "center", animationDelay: "0.2s" }}>
                    <path
                      d="M49.1,-75.3C60.3,-68.4,63.9,-48.4,68.8,-31.1C73.7,-13.8,80.1,0.7,78.5,14.7C76.8,28.7,67.1,42.1,55.3,50.6C43.5,59.1,29.7,62.6,15.9,66.5C2,70.4,-11.9,74.5,-25.8,72.3C-39.7,70,-53.6,61.3,-62.5,48.6C-71.4,35.9,-75.4,19.2,-77.2,2.1C-79,-15,-78.6,-32.3,-70.4,-43.9C-62.2,-55.5,-46.2,-61.3,-32,-65.6C-17.7,-69.9,-5.3,-72.8,8,-77.4C21.3,-82,40.6,-82.3,49.1,-75.3Z"
                      className="animate-float-slow"
                      fill="url(#gradient1)"
                      fillOpacity="0.3"
                      filter="url(#glow)"
                      transform="translate(100 100)"
                    />
                  </g>
                  <g className="animate-float-slower" style={{ transformOrigin: "center", animationDelay: "0.3s" }}>
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
                  <circle
                    className="animate-pulse-slow"
                    cx="50"
                    cy="50"
                    r="5"
                    fill="#FBBF24"
                    opacity="0.6"
                    filter="url(#glow)"
                  />
                  <circle
                    className="animate-pulse-slow"
                    cx="150"
                    cy="40"
                    r="4"
                    fill="#F59E0B"
                    opacity="0.5"
                    filter="url(#glow)"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    className="animate-pulse-slow"
                    cx="160"
                    cy="120"
                    r="6"
                    fill="#FBBF24"
                    opacity="0.4"
                    filter="url(#glow)"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    className="animate-pulse-slow"
                    cx="80"
                    cy="160"
                    r="5"
                    fill="#F59E0B"
                    opacity="0.5"
                    filter="url(#glow)"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <circle
                    className="animate-pulse-slow"
                    cx="120"
                    cy="80"
                    r="7"
                    fill="#FBBF24"
                    opacity="0.6"
                    filter="url(#glow)"
                    style={{ animationDelay: "2s" }}
                  />

                  {/* Central design element */}
                  <g
                    filter="url(#glow)"
                    className="animate-float"
                    style={{ transformOrigin: "center", animationDelay: "1.5s" }}
                  >
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
  )
} 