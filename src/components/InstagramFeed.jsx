import { motion } from 'framer-motion'
import { trackInstagram } from '../hooks/useGA4.js'

const INSTAGRAM_URL = 'https://instagram.com/hilltop.smoke.shop'


export default function InstagramFeed() {
  return (
    <section className="bg-dark-secondary/80 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-moss text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Stay Connected
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-cream text-5xl sm:text-6xl lg:text-7xl leading-none mb-6"
          >
            FOLLOW THE
            <br />
            <span className="text-cream/40">JOURNEY</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagram}
            className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-base transition-colors duration-200"
          >
            <InstagramIcon />
            @hilltop.smoke.shop
          </motion.a>
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagram}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-cream/20 hover:border-cream text-cream font-semibold text-base rounded-full transition-all duration-200 hover:scale-105 hover:bg-cream/5"
          >
            <InstagramIcon />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
