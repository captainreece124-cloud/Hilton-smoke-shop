import { motion } from 'framer-motion'

const photos = [
  { src: '/images/shop-1.jpg', alt: 'Inside Hilltop Smoke Shop',    rotate: -4, floatY: 18, duration: 6.0, delay: 0.0, offset: 'lg:mt-16' },
  { src: '/images/shop-2.jpg', alt: 'Product display at Hilltop',   rotate:  3, floatY: 14, duration: 7.0, delay: 1.4, offset: 'lg:mt-0'  },
  { src: '/images/shop-3.jpg', alt: 'Products available in store',  rotate: -2, floatY: 20, duration: 5.5, delay: 0.7, offset: 'lg:mt-10' },
  { src: '/images/shop-4.jpg', alt: 'Hilltop Smoke Shop',           rotate:  4, floatY: 16, duration: 6.5, delay: 2.0, offset: 'lg:mt-6'  },
]

export default function FloatingPhotos() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-moss text-sm tracking-[0.3em] uppercase font-medium mb-16 text-center"
        >
          Inside The Shop
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-end">
          {photos.map((photo, i) => (
            /* Entrance wrapper */
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={photo.offset}
            >
              {/* Float + tilt wrapper */}
              <motion.div
                animate={{ y: [0, -photo.floatY, 0] }}
                transition={{ duration: photo.duration, repeat: Infinity, ease: 'easeInOut', delay: photo.delay }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                style={{ rotate: photo.rotate }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 will-change-transform"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-48 sm:h-60 lg:h-72 object-cover select-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
