"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { UsersIcon } from "lucide-react"
import Marquee from "react-fast-marquee"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/ui/tech-icon"

export const Portfolio = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const projects = [
    {
      href: "https://chat.kmrb.tech",
      ariaLabel: "Visit T2Chat",
      imgAlt: "t2Chat - AI-powered chat",
      imgSrc: "https://chat.kmrb.tech/T2Chat.jpg",
      placeholder: "T2Chat",
      title: "T2Chat",
      description: "Open Souce Multi-Platform AI Chat App",
      projectType: {
        prefix: "Build for",
        text: "T3 Cloneathon",
        href: "https://cloneathon.t3.chat/",
      },
      tech: ["Convex", "Better Auth", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn"],
      userCount: "1000+",
    },
    {
      href: "https://github.com/Nyaughh/wa-fm-bot",
      ariaLabel: "Visit Wa FM Bot",
      imgAlt: "Wa FM Bot - A WhatsApp Last.fm Song Tracking Bot",
      imgSrc: "/wa-fm.png",
      placeholder: "Wa FM",
      title: "Wa FM Bot",
      description: "A TypeScript-based bot that allows users to track their listening habits on Last.fm via WhatsApp.",
      projectType: {
        text: "Open Source Community Project",
      },
      tech: ["TypeScript", "Node.js", "MongoDB"],
      userCount: "500+",
    },
    {
      href: "https://valdle.com",
      ariaLabel: "Visit Valdle",
      imgAlt: "Valdle - Valorant Game",
      imgSrc: "https://valdle.com/og-image.jpg",
      placeholder: "Valdle",
      title: "Valdle",
      description: "A wordle like game that tests your Valorant knowledge with three unique mini-games, every day.",
      projectType: {
        prefix: "Client Project for",
        text: "VALCORD",
        tooltip: "The official VALORANT Discord server network",
      },
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn", "Prisma", "PostgreSQL", "Redis"],
      userCount: "100k+",
    },
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const TechBadges = ({ tech }: { tech: string[] }) => {
    const [needsMarquee, setNeedsMarquee] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const checkOverflow = () => {
        if (containerRef.current && contentRef.current) {
          const containerWidth = containerRef.current.offsetWidth
          const contentWidth = contentRef.current.scrollWidth
          setNeedsMarquee(contentWidth > containerWidth)
        }
      }

      checkOverflow()
      window.addEventListener('resize', checkOverflow)
      return () => window.removeEventListener('resize', checkOverflow)
    }, [tech])

    const badges = (
      <div className="flex items-center gap-2" ref={contentRef}>
        {tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="flex items-center gap-1.5 whitespace-nowrap bg-orange-700/10 text-orange-700 border-orange-700/20 hover:bg-orange-700/20 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/20 dark:hover:bg-amber-400/20 transition-colors duration-200"
          >
            <TechIcon tech={t} className="h-3 w-3" />
            <span className="text-xs">{t}</span>
          </Badge>
        ))}
      </div>
    )

    return (
      <div className="flex-1 overflow-hidden" ref={containerRef}>
        {needsMarquee ? (
          <Marquee gradient={false} speed={20}>
            <div className="flex items-center gap-2 pr-4">
              {tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="flex items-center gap-1.5 whitespace-nowrap bg-orange-700/10 text-orange-700 border-orange-700/20 hover:bg-orange-700/20 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/20 dark:hover:bg-amber-400/20 transition-colors duration-200"
                >
                  <TechIcon tech={t} className="h-3 w-3" />
                  <span className="text-xs">{t}</span>
                </Badge>
              ))}
            </div>
          </Marquee>
        ) : (
          badges
        )}
      </div>
    )
  }

  return (
    <section id="portfolio" className="w-full min-h-screen py-16 md:py-24 lg:py-32 bg-section-modern section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-36 h-36 bg-orange-600/8 dark:bg-amber-400/12 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-1/3 left-1/6 w-32 h-32 bg-orange-700/6 dark:bg-amber-500/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-orange-800/5 dark:bg-amber-300/8 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text-modern">
              Our Recent Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Take a look at our featured work that showcases our expertise, innovation, and commitment to excellence.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent className="-ml-8">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="basis-full md:basis-3/4 lg:basis-2/3 pl-8">
                  <div className="h-full">
                    <motion.div
                      className="group relative rounded-xl shadow-xl w-full glass-effect border border-orange-700/20 dark:border-amber-400/20 overflow-hidden h-full flex flex-col"
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      animate={{
                        scale: index === current ? 1.02 : 0.92,
                        opacity: index === current ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-20"
                        >
                          <span className="sr-only">{project.ariaLabel}</span>
                        </Link>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-700/20 to-black/30 dark:from-amber-400/30 dark:to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                          alt={project.imgAlt}
                          className="h-full w-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-500"
                          src={project.imgSrc}
                          width="1200"
                          height="675"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.onerror = null
                            target.src = `/placeholder.svg?height=675&width=1200&text=${project.placeholder}`
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-card-foreground group-hover:text-orange-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.projectType && (
                            <p className="text-base text-orange-700 dark:text-amber-400 mb-2">
                              {project.projectType.prefix && `${project.projectType.prefix} `}
                              {project.projectType.href ? (
                                <a
                                  href={project.projectType.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-2 decoration-1 hover:text-orange-800 dark:hover:text-amber-300 transition-colors duration-200"
                                >
                                  {project.projectType.text}
                                </a>
                              ) : project.projectType.tooltip ? (
                                <span className="inline-block">
                                  <span className="relative inline-block group/tooltip">
                                    <span className="underline underline-offset-2 decoration-1 hover:text-orange-800 dark:hover:text-amber-300 transition-colors duration-200 cursor-help">
                                      {project.projectType.text}
                                    </span>
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-card text-xs text-orange-700 dark:text-amber-100 rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg border border-orange-700/20 dark:border-amber-400/20">
                                      {project.projectType.tooltip}
                                    </span>
                                  </span>
                                </span>
                              ) : (
                                <span>{project.projectType.text}</span>
                              )}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground max-w-[600px] leading-relaxed mt-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-orange-700/20 dark:border-amber-400/20 flex items-end justify-between gap-4">
                          <TechBadges tech={project.tech} />
                          <div className="flex items-center gap-1.5 text-xs text-orange-700/80 dark:text-amber-400/80 whitespace-nowrap">
                            <UsersIcon className="h-4 w-4" />
                            <span>{project.userCount} users</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-orange-700/30 text-orange-700 hover:bg-orange-700/10 dark:border-amber-400/30 dark:text-amber-400 dark:hover:bg-amber-400/10" />
            <CarouselNext className="hidden md:flex border-orange-700/30 text-orange-700 hover:bg-orange-700/10 dark:border-amber-400/30 dark:text-amber-400 dark:hover:bg-amber-400/10" />
          </Carousel>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-2 rounded-full bg-orange-700 dark:bg-amber-400 transition-all duration-300 ${
                i === current ? "w-4 opacity-100 shadow-lg shadow-orange-700/50 dark:shadow-amber-400/50" : "opacity-60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
} 