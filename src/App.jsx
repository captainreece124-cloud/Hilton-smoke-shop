import { useEffect } from 'react'
import SmokeBackground from './components/SmokeBackground.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import FeaturedBrands from './components/FeaturedBrands.jsx'
import HookahRental from './components/HookahRental.jsx'
import InstagramFeed from './components/InstagramFeed.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// GA4 scroll depth tracking
function useScrollDepthTracking() {
  useEffect(() => {
    const milestones = new Set()
    const thresholds = [25, 50, 75, 100]

    const handleScroll = () => {
      const scrolled = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = totalHeight > 0 ? Math.round((scrolled / totalHeight) * 100) : 0

      thresholds.forEach((t) => {
        if (pct >= t && !milestones.has(t)) {
          milestones.add(t)
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', { percent_scrolled: t })
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default function App() {
  useScrollDepthTracking()

  return (
    <>
      {/* Global WebGL smoke background — fixed behind all sections */}
      <SmokeBackground smokeColor="#4a6b3a" />

      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-moss focus:text-cream focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <FeaturedBrands />
        <HookahRental />
        <InstagramFeed />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
