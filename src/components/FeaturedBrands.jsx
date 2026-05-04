import { motion } from 'framer-motion'
import FloatingPhoto from './FloatingPhoto.jsx'

const brands = [
  {
    id: 'nasty',
    name: 'Nasty Bar',
    eyebrow: 'Disposables',
    headline: 'Built Different.',
    copy: "Premium disposables running 9K, 16K, and 20K puff counts. Trusted flavours, authentic quality — not the cheap stuff you find everywhere. If you want Nasty Bar, we've got the full range.",
    tags: ['9K Puffs', '16K Puffs', '20K Puffs', 'Full Range'],
  },
  {
    id: 'beudla',
    name: 'Beudla Industries',
    eyebrow: 'Local SA Brand',
    headline: 'Proudly South African.',
    copy: "E-liquids made right here in South Africa. We stock Beudla Industries because they're doing it right — quality product, supporting our own economy. Every purchase keeps money in SA.",
    tags: ['E-Liquids', 'SA Made', 'Premium'],
  },
  {
    id: 'velo',
    name: 'VELO Nicotine Pouches',
    eyebrow: 'Tobacco-Free',
    headline: 'No Smoke. No Compromise.',
    copy: 'VELO nicotine pouches — tobacco-free, discreet, satisfying. Bright Spearmint, Strong Mint, and more. We also carry ZYN for those who want variety. Ask us about strengths.',
    tags: ['Tobacco-Free', 'VELO', 'ZYN', 'Multiple Strengths'],
  },
]

export default function FeaturedBrands() {
  return (
    <section className="bg-dark-secondary/80 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-moss text-sm tracking-[0.3em] uppercase font-medium mb-4"
          >
            Featured
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-cream text-5xl sm:text-6xl lg:text-7xl leading-none"
          >
            BRANDS WE TRUST
          </motion.h2>
        </div>

        {/* Brand rows + side photo */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
        <div className="space-y-16 lg:space-y-20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border-t border-cream/10 pt-12 space-y-5"
            >
              <p className="text-moss text-sm tracking-[0.3em] uppercase font-medium">{brand.eyebrow}</p>
              <h3 className="font-heading text-cream text-4xl sm:text-5xl leading-none">{brand.headline.toUpperCase()}</h3>
              <p className="text-cream/65 text-base sm:text-lg leading-relaxed max-w-2xl">{brand.copy}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {brand.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-moss/40 text-moss text-xs tracking-wide rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

          {/* Photo 2 — sticky on desktop */}
          <div className="lg:sticky lg:top-32">
            <FloatingPhoto
              src="/images/shop-2.jpg"
              alt="Product display at Hilltop Smoke Shop"
              rotate={3}
              floatY={18}
              duration={7}
              delay={1}
              className="h-72 lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
