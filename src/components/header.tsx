"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { MobileMenu } from "@/components/mobile-menu"
import { motion } from "framer-motion"

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface NavigationItem {
  id: string;
  label: string;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const updateUnderline = () => {
      const activeRef = navRefs.current[activeSection]
      if (activeRef) {
        setUnderlineStyle({
          left: activeRef.offsetLeft,
          width: activeRef.offsetWidth
        })
      }
    }

    updateUnderline()
    window.addEventListener('resize', updateUnderline)
    return () => window.removeEventListener('resize', updateUnderline)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onSectionChange(sectionId)
    }
  }

  const navigationItems: NavigationItem[] = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-amber-400/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-amber-400/5"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              className="flex items-center justify-center group"
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              <span
                className="font-bold text-2xl gradient-text-modern transition-transform duration-200 group-hover:scale-105"
              >
                Komorebi
              </span>
              <span className="ml-2 text-sm text-amber-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Digital Studio
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 relative">
              {navigationItems.map((item) => (
                <Link
                  ref={(el) => { navRefs.current[item.id] = el }}
                  key={item.id}
                  className={`text-sm font-medium hover:text-amber-400 transition-all duration-200 relative z-10 ${
                    activeSection === item.id ? "text-amber-400" : "text-foreground/70"
                  }`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                animate={{ left: underlineStyle.left, width: underlineStyle.width }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-foreground/60 hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-200"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-amber-400/40 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-200"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative w-10 h-10 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border-none transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <motion.div
                  animate={mobileMenuOpen ? "open" : "closed"}
                  className="relative w-5 h-5 flex items-center justify-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: -2 },
                      open: { rotate: 45, y: 0 },
                    }}
                    className="absolute w-5 h-0.5 bg-current block rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: -10 },
                    }}
                    className="absolute w-5 h-0.5 bg-current block rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 2 },
                      open: { rotate: -45, y: 0 },
                    }}
                    className="absolute w-5 h-0.5 bg-current block rounded-full"
                  />
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
        activeSection={activeSection}
        onSectionClick={(id: string) => {
          scrollToSection(id)
          setMobileMenuOpen(false)
        }}
      />
    </>
  )
} 