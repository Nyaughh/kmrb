"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Portfolio } from "@/components/landing/portfolio"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { Team } from "@/components/landing/team"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export function ClientWrapper() {
  const [activeSection, setActiveSection] = useState("home")
  const sections = useRef<Record<string, HTMLElement | null>>({})

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const selectPlan = (planName: string, planPrice: string) => {
    scrollToSection("contact")

    setTimeout(() => {
      const messageElement = document.getElementById("message") as HTMLTextAreaElement
      if (messageElement) {
        messageElement.value = `I'm interested in the ${planName} plan (${planPrice}). I want to ...`
      }
    }, 800)
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting)
      
      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev
        })
        
        setActiveSection(mostVisible.target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sectionIds = ["home", "services", "portfolio", "pricing", "testimonials", "team", "contact"]

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
  }, [])

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 w-full">
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Portfolio />
        <Pricing selectPlan={selectPlan} scrollToSection={scrollToSection} />
        <Testimonials />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  )
} 