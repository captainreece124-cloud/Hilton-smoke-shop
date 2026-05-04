import { motion } from 'framer-motion'
import hookahData from '../data/hookah-flavours.json'
import { trackCTA } from '../hooks/useGA4.js'

const WA_URL = "https://wa.me/27820899752?text=Hi%20Hilltop%2C%20I'd%20like%20to%20book%20a%20hookah%20rental..."

export default function HookahRental() {
  return (
    <section className="bg-dark-base/80 py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative smoke wisps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/3 w-1 h-48 bg-gradient-to-b from-cream/0 via-cream/5 to-cream/0 rounded-full blur-sm"
          animate={{ y: [-20, -80], opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 0 }}
        />
        <motion.div
          className="absolute top-0 left-1/2 w-1 h-64 bg-gradient-to-b from-cream/0 via-cream/4 to-cream/0 rounded-full blur-sm"
          animate={{ y: [-20, -100], opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-56 bg-gradient-to-b from-cream/0 via-cream/5 to-cream/0 rounded-full blur-sm"
          animate={{ y: [-20, -90], opacity: [0, 0.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy + pricing */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-moss text-sm tracking-[0.3em] uppercase font-medium mb-4"
            >
              Hookah Rental
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-cream text-5xl sm:text-6xl lg:text-7xl leading-none mb-8"
            >
              HOOKAH NIGHTS.
              <br />
              <span className="text-cream/40">YOUR PLACE</span>
              <br />
              <span className="text-cream">OR OURS.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/65 text-base sm:text-lg leading-relaxed mb-10"
            >
              Rent a hookah for home use or enjoy an in-store session. We pack it fresh,
              you pick your flavour from our 14-option menu. Refills keep the night going.
            </motion.p>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('hookah_book_whatsapp')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold text-base rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Book Your Hookah
            </motion.a>
          </div>

          {/* Right: flavour badges */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-cream/40 text-xs tracking-[0.3em] uppercase font-medium mb-6"
            >
              Available Flavours
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {hookahData.featured.map((flavour, i) => (
                <motion.span
                  key={flavour}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="px-4 py-2.5 bg-dark-secondary border border-cream/15 text-cream/80 text-sm font-medium rounded-full hover:border-moss hover:text-cream transition-colors duration-200 cursor-default"
                >
                  {flavour}
                </motion.span>
              ))}
            </div>

            {/* All flavours count note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-cream/30 text-sm"
            >
              +{hookahData.flavours.length - hookahData.featured.length} more available in-store
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  )
}
