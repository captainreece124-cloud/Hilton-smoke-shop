import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'
import { trackCTA } from '../hooks/useGA4.js'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function smoothScrollTo(href) {
  const el = document.querySelector(href)
  if (!el) return
  const offset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href, label) => {
    smoothScrollTo(href)
    setMenuOpen(false)
    trackCTA(`nav_${label.toLowerCase()}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-base/75 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => smoothScrollTo('#hero')}
            className="flex items-center gap-3 group"
            aria-label="Hilltop Smoke Shop — scroll to top"
          >
            <Logo size={40} light />
            <div className="hidden sm:block leading-tight">
              <p className="font-heading text-cream text-lg tracking-wider leading-none">
                HILLTOP
              </p>
              <p className="text-cream-dark text-xs tracking-[0.2em] uppercase font-medium">
                Smoke Shop
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.label)}
                className="px-4 py-2 text-cream/80 hover:text-cream text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-moss scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
            <a
              href="https://wa.me/27820899752?text=Hi%20Hilltop%2C%20I%27d%20like%20to%20know%20more%20about..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('header_whatsapp')}
              className="ml-3 px-5 py-2 bg-moss hover:bg-moss-dark text-cream text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-cream focus-visible:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark-base/80 backdrop-blur-xl border-t border-cream/10 overflow-hidden"
          >
            <nav className="px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href, link.label)}
                  className="text-left px-4 py-3 text-cream text-lg font-medium tracking-wide border-b border-cream/10 hover:text-cream-dark transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                href="https://wa.me/27820899752?text=Hi%20Hilltop%2C%20I%27d%20like%20to%20know%20more%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-3 bg-moss text-cream font-semibold text-center rounded-xl"
              >
                WhatsApp Us
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
