export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} kmrb</p>
      </div>
    </footer>
  )
} 