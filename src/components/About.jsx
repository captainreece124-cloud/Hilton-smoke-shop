import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FloatingPhoto from './FloatingPhoto.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-dark-base/80 py-24 lg:py-32">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-moss text-sm tracking-[0.3em] uppercase font-medium mb-4 text-center"
        >
          Our Story
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-cream text-5xl sm:text-6xl lg:text-7xl text-center mb-16 leading-none"
        >
          HOME-GROWN.
          <br />
          <span className="text-cream/40">COMMUNITY-FOCUSED.</span>
        </motion.h2>

        {/* Copy + photo — two columns on desktop */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          <p className="text-cream/80 text-lg leading-relaxed">
            We opened our doors in <strong className="text-cream">2022</strong> right here in
            Hilton Village Centre — not as a franchise, not as a chain, but as a shop by
            people who genuinely love what they do and know their customers by name.
          </p>
          <p className="text-cream/70 text-base leading-relaxed">
            Hilton is our community. Every product on our shelves is chosen because it's
            quality we'd use ourselves — not because a corporate buyer pushed it on us.
            We stock <strong className="text-cream">local South African brands</strong> like
            Beudla Industries alongside international names like Nasty Bar and VELO.
          </p>
        </motion.div>

          {/* Photo 1 */}
          <FloatingPhoto
            src="/images/shop-1.jpg"
            alt="Inside Hilltop Smoke Shop"
            rotate={-3}
            floatY={16}
            duration={6}
            delay={0.5}
            className="h-72 lg:h-96"
          />
        </div>

      </div>
    </section>
  )
}
