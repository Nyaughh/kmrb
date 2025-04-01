"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background/95 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground"
          >
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
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              className={`text-lg font-medium hover:text-amber-400 transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-amber-400"
                  : "text-foreground/60"
              }`}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                onSectionClick(item.id)
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
} 