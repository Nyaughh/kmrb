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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <div className="flex h-full flex-col">
                <div className="flex h-16 items-center justify-between border-b border-border/40 px-4 sm:px-6 lg:px-8">
                  <Link
                    className="flex items-center justify-center group"
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault()
                      onSectionClick("home")
                      onClose()
                    }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="font-bold text-2xl bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent"
                    >
                      Komorebi
                    </motion.span>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="text-foreground/60 hover:text-amber-400 hover:bg-muted"
                    >
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onClose}
                      className="relative w-10 h-10 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border-none flex items-center justify-center"
                    >
                      <motion.div
                        className="relative w-5 h-5 flex items-center justify-center"
                      >
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 45 }}
                          className="absolute w-5 h-0.5 bg-current block"
                          style={{ top: "0.75rem" }}
                        />
                        <motion.span
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          className="absolute w-5 h-0.5 bg-current block"
                          style={{ top: "0.75rem" }}
                        />
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: -45 }}
                          className="absolute w-5 h-0.5 bg-current block"
                          style={{ top: "0.75rem" }}
                        />
                      </motion.div>
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="space-y-1">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                            activeSection === item.id
                              ? "bg-amber-400/10 text-amber-400"
                              : "text-foreground/60 hover:bg-muted hover:text-foreground"
                          }`}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            onSectionClick(item.id)
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
                <div className="border-t border-border/40 p-6">
                  <Button
                    className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium"
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