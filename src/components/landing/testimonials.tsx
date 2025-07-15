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
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
        <motion.div
          className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
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
          ].map((testimonial: Testimonial, index) => (
            <motion.div
              key={index}
              variants={itemFade}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="text-center bg-card/70 backdrop-blur-sm border-border h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="relative h-12 w-12 rounded-full bg-amber-400/30 flex items-center justify-center">
                      <span className="text-xl font-bold text-amber-400">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-amber-400/40 pl-4 italic text-muted-foreground text-left mb-4 flex-grow">
                    {typeof testimonial.quote === "string" ? (
                      `"${testimonial.quote}"`
                    ) : (
                      <span dangerouslySetInnerHTML={testimonial.quote} />
                    )}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 