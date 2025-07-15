"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

interface NavigationItem {
  id: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navigationItems: NavigationItem[];
  onSectionClick: (id: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  navigationItems,
  onSectionClick,
}: MobileMenuProps) {
  const { theme, setTheme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.15 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm glass-effect shadow-xl backdrop-blur-xl border-l border-amber-400/20"
            >
              <div className="flex h-full flex-col">
                <div className="flex h-16 items-center justify-between border-b border-amber-400/20 px-4 sm:px-6 lg:px-8">
                  <Link
                    className="flex items-center justify-center"
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      onSectionClick("home")
                      onClose()
                    }}
                  >
                    <span
                      className="font-bold text-2xl gradient-text-modern"
                    >
                      Komorebi
                    </span>
                  </Link>
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
                      variant="ghost"
                      size="icon"
                      onClick={onClose}
                      className="relative w-10 h-10 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border-none flex items-center justify-center transition-all duration-200"
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 45 }}
                          transition={{ duration: 0.2 }}
                          className="absolute w-5 h-0.5 bg-current block rounded-full"
                          style={{ top: "0.75rem" }}
                        />
                        <motion.span
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute w-5 h-0.5 bg-current block rounded-full"
                          style={{ top: "0.75rem" }}
                        />
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: -45 }}
                          transition={{ duration: 0.2 }}
                          className="absolute w-5 h-0.5 bg-current block rounded-full"
                          style={{ top: "0.75rem" }}
                        />
                      </div>
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <div
                        key={item.id}
                      >
                        <Link
                          className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 relative ${
                            activeSection === item.id
                              ? "bg-amber-400/10 text-amber-400 shadow-lg shadow-amber-400/10"
                              : "text-foreground/70 hover:bg-amber-400/5 hover:text-amber-400"
                          }`}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            onSectionClick(item.id)
                          }}
                        >
                          {item.label}
                          {activeSection === item.id && (
                            <motion.div
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full"
                              initial={{ opacity: 0, scaleY: 0 }}
                              animate={{ opacity: 1, scaleY: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                </nav>
                <div className="border-t border-amber-400/20 p-6">
                  <Button
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium shadow-lg shadow-amber-400/25 transition-all duration-200"
                    onClick={() => {
                      onSectionClick("contact")
                      onClose()
                    }}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 