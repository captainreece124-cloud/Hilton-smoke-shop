import { motion } from 'framer-motion'

const images = [
  {
    src: '/images/nasty-display.jpg',
    alt: 'Nasty Bar and nicotine pouches display on green moss wall with Nasty branding',
    caption: 'Our nicotine pouch wall',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/beudla-shelf.jpg',
    alt: 'Beudla Industries e-liquid shelf display at Hilltop Smoke Shop',
    caption: 'Beudla Industries range',
    span: '',
  },
  {
    src: '/images/hookah-menu.jpg',
    alt: 'Hilltop Hookah Rental menu board showing flavours and R150 pricing',
    caption: 'Hookah rental menu',
    span: '',
  },
  {
    src: '/images/velo-post.jpg',
    alt: 'VELO Bright Spearmint nicotine pouches product photo',
    caption: 'VELO nicotine pouches',
    span: '',
  },
  {
    src: '/images/store-interior.jpg',
    alt: 'Hilltop Smoke Shop interior with brick wall and product displays',
    caption: 'Inside the shop',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-light-base py-24 lg:py-32">
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
            Inside Hilltop
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-dark-base text-5xl sm:text-6xl lg:text-7xl leading-none"
          >
            STEP INSIDE
            <br />
            <span className="text-dark-base/30">OUR WORLD</span>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-64">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-cream/30 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-dark-base to-dark-secondary"
                aria-hidden="true"
              >
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-moss/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-moss/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <p className="text-cream/30 text-xs tracking-widest uppercase">{img.caption}</p>
                  <p className="text-cream/15 text-xs mt-1">Upload image to /public/images/</p>
                </div>
              </div>

              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-cream text-sm font-medium tracking-wide">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upload note for client */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary/40 text-xs mt-8 tracking-wide"
        >
          Place your images in <code className="bg-cream/50 px-1.5 py-0.5 rounded text-xs">/public/images/</code> to replace the placeholders above.
        </motion.p>
      </div>
    </section>
  )
}
