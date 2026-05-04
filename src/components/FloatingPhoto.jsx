import { motion } from 'framer-motion'

export default function FloatingPhoto({ src, alt, rotate = 2, floatY = 14, duration = 6, delay = 0, objectFit = 'cover', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.3 } }}
        style={{ rotate: `${rotate}deg` }}
        className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 will-change-transform h-full"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          style={{ objectFit }}
          className="w-full h-full select-none block"
        />
      </motion.div>
    </motion.div>
  )
}
