import { motion } from 'framer-motion'
import products from '../data/products.json'
import FloatingPhoto from './FloatingPhoto.jsx'

const icons = {
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Products() {
  return (
    <section id="products" className="bg-light-base py-24 lg:py-32">
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
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-dark-base text-5xl sm:text-6xl lg:text-7xl leading-none mb-6"
          >
            CURATED QUALITY
            <br />
            <span className="text-dark-base/30">OVER VOLUME</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-base/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            We hand-pick every product. If it's on our shelf, we stand behind it.
          </motion.p>
        </div>

        {/* Cards + floating photo */}
        <div className="grid lg:grid-cols-[1fr_220px] gap-10 items-start">
        <div className="grid sm:grid-cols-2 gap-6">
          {products.categories.map((cat, i) => (
            <motion.article
              key={cat.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-7 border border-cream/50 shadow-sm hover:shadow-xl hover:shadow-moss/15 transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-moss/10 flex items-center justify-center text-moss mb-6 group-hover:bg-moss group-hover:text-cream transition-colors duration-300">
                {icons[cat.icon]}
              </div>

              {/* Title */}
              <h3 className="font-heading text-dark-base text-2xl tracking-wide mb-2 leading-tight">
                {cat.name.toUpperCase()}
              </h3>

              {/* Detail */}
              <p className="text-dark-base/70 text-sm leading-relaxed">
                {cat.detail}
              </p>

            </motion.article>
          ))}
        </div>

          {/* Product photos — stacked column */}
          <div className="hidden lg:flex lg:flex-col lg:sticky lg:top-24 gap-5">
            <FloatingPhoto
              src="/images/shop-5.jpg"
              alt="Product at Hilltop Smoke Shop"
              rotate={-3}
              floatY={14}
              duration={6}
              delay={0}
              className="h-56"
            />
            <FloatingPhoto
              src="/images/shop-6.jpg"
              alt="Product at Hilltop Smoke Shop"
              rotate={2}
              floatY={12}
              duration={5.5}
              delay={1.2}
              className="h-56"
            />
            <FloatingPhoto
              src="/images/shop-3.jpg"
              alt="Products at Hilltop Smoke Shop"
              rotate={-2}
              floatY={16}
              duration={7}
              delay={0.6}
              className="h-56"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
