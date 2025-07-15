export const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-section-modern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/60"></div>
      
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Komorebi
            </h3>
            <span className="text-xs text-muted-foreground hidden sm:block">
              © {new Date().getFullYear()}
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-amber-400 transition-colors duration-200">
              Services
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors duration-200">
              Portfolio
            </a>
            <a href="#team" className="hover:text-amber-400 transition-colors duration-200">
              Team
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors duration-200">
              Contact
            </a>
          </div>
          
          <div className="text-xs text-muted-foreground sm:hidden">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
    </footer>
  )
} 