"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: "easeOut",
    },
  },
}

const itemFade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

interface Testimonial {
  name: string
  company: string
  quote: string | { __html: string }
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Flokie",
      company: "Owner at Paragon",
      quote:
        "Hired Komorebi to develop Valdle for me and they crushed it. They're easy to work with and deliver quality work fast. Definitely recommend!",
    },
    {
      name: "Cal",
      company: "Community Manager",
      quote: {
        __html: `"We've had the pleasure to work with Komorebi on a website for the official VALORANT Discord server, partnering with <a href="https://www.riotgames.com" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-500">Riot Games</a> & <a href="https://medal.tv" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-500">Medal.tv</a>. We're thankful to Komorebi for always considering our objectives with each partnered activation, and weaving those in with the community events so that we achieve our brand objectives. We're glad to have been able to deliver unique experiences partnering up together. We look forward to working closer even closer in the future."`,
      },
    },
    {
      name: "dyrex",
      company: "Creator OWCSLE",
      quote:
        "Komorebi was extremely flexible to work with when needed, helped a ton in general on a project that meant a lot to me",
    },
  ]
  
  return (
    <section id="testimonials" className="w-full min-h-screen py-16 md:py-24 lg:py-32 bg-section-modern section-transition relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50"></div>
      
      {/* Modern floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/4 w-40 h-40 bg-amber-400/8 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute bottom-1/4 right-1/5 w-32 h-32 bg-amber-500/12 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-amber-300/10 rounded-full blur-xl animate-float"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text-modern">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Hear from satisfied clients who have experienced our dedication to excellence and innovation.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemFade}
                className="h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="glass-effect border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 h-full group hover:shadow-lg hover:shadow-amber-400/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-card-foreground group-hover:text-amber-400 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-amber-400/80">{testimonial.company}</div>
                      </div>
                    </div>
                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      {typeof testimonial.quote === 'string' ? (
                        `"${testimonial.quote}"`
                      ) : (
                        <span dangerouslySetInnerHTML={testimonial.quote} />
                      )}
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 