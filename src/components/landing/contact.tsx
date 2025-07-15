"use client"

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Ready to start your project? Send us a message and we'll get back to you shortly.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <form className="space-y-4 sm:space-y-6" action="https://formspree.io/f/xzzeanql" method="POST">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 sm:mt-2 block w-full rounded-md border border-border bg-card/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-card-foreground placeholder-muted-foreground shadow-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                placeholder="Tell us about your project"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-amber-400 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-black hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-background transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 