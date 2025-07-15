"use client"

export const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 bg-section-modern section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40"></div>
      
      {/* Modern floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-52 h-52 bg-amber-400/8 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-1/4 right-1/5 w-44 h-44 bg-amber-500/6 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/2 w-36 h-36 bg-amber-300/10 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl gradient-text-modern">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Ready to start your project? Send us a message and we'll get back to you shortly with personalized solutions.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="mx-auto max-w-2xl w-full">
            <form className="space-y-4 sm:space-y-6 glass-effect p-6 sm:p-8 rounded-2xl border border-amber-400/20 shadow-xl backdrop-blur-lg" action="https://formspree.io/f/xzzeanql" method="POST">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-lg border border-amber-400/30 bg-background/20 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-lg border border-amber-400/30 bg-background/20 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="block w-full rounded-lg border border-amber-400/30 bg-background/20 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, requirements, and timeline..."
                />
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium text-black hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 