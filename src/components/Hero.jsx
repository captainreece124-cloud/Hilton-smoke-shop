import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { trackCTA } from '../hooks/useGA4.js'
import Logo from './Logo.jsx'

// True if running on a touch-only mobile device
const isMobileDevice = () =>
  typeof window !== 'undefined' && window.innerWidth < 768

function smoothScrollTo(href) {
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const videoRef = useRef(null)
  const [mobile, setMobile] = useState(isMobileDevice)

  // Update on resize
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Kick off play explicitly (handles browsers that need a nudge)
  useEffect(() => {
    if (!mobile && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [mobile])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── STATIC BASE (always present, sits behind everything) ─────────── */}
      <div className="absolute inset-0 bg-dark-base" />

      {/* ── VIDEO BACKGROUND (desktop ≥ 768px only) ─────────────────────── */}
      {!mobile && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-smoke.mp4" type="video/mp4" />
        </video>
      )}

      {/* ── GRADIENT OVERLAY (always on top of video) ────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(74,107,58,0.65) 0%, rgba(20,31,19,0.90) 100%)',
        }}
      />

      {/* Extra bottom vignette so the scroll indicator reads clearly */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-base/60 to-transparent pointer-events-none" />

      {/* ── ANIMATED ACCENT BLOBS ────────────────────────────────────────── */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-moss/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-moss/20 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mb-8"
        >
          {/* Glow ring behind logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-moss/30 blur-2xl scale-110 animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Logo size={180} light />
            </motion.div>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="text-cream/60 text-xs sm:text-sm tracking-[0.4em] uppercase font-medium mb-6"
        >
          Hilton Village Centre · Pietermaritzburg
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-16 bg-cream/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-moss" />
          <div className="h-px w-16 bg-cream/30" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          Your local vape &amp; smoke destination.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate="visible"
          className="text-cream/55 text-base sm:text-lg max-w-xl mx-auto mb-12"
        >
          Curated products. Local brands. Genuine people.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.75}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => { smoothScrollTo('#contact'); trackCTA('hero_visit_us') }}
            className="px-8 py-4 bg-moss hover:bg-moss-dark text-cream font-semibold text-base rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-moss/40 min-w-44"
          >
            Visit Us
          </button>
          <button
            onClick={() => { smoothScrollTo('#products'); trackCTA('hero_view_products') }}
            className="px-8 py-4 border-2 border-cream/50 hover:border-cream text-cream font-semibold text-base rounded-full transition-all duration-200 hover:scale-105 hover:bg-cream/10 min-w-44 backdrop-blur-sm"
          >
            View Products
          </button>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cream/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <motion.rect
              x="6.5" y="5" width="3" height="5" rx="1.5" fill="currentColor"
              animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
