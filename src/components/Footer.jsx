import { motion } from 'framer-motion'
import Logo from './Logo.jsx'
import siteConfig from '../data/site-config.json'
import { trackCTA, trackInstagram } from '../hooks/useGA4.js'

const { business } = siteConfig

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function smoothScrollTo(href) {
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-dark-base/90 backdrop-blur-sm border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={44} light />
              <div>
                <p className="font-heading text-cream text-xl tracking-wider leading-none">HILLTOP</p>
                <p className="text-cream/40 text-xs tracking-[0.2em] uppercase">Smoke Shop · Est. 2022</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Your local, independent vape &amp; smoke shop in Hilton Village Centre, Pietermaritzburg.
              Real products. Real people.
            </p>
            {/* Social */}
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInstagram}
              aria-label="Hilltop Smoke Shop on Instagram"
              className="inline-flex items-center gap-2 text-cream/40 hover:text-cream transition-colors duration-200"
            >
              <InstagramIcon />
              <span className="text-sm">@hilltop.smoke.shop</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-cream/30 text-xs tracking-[0.3em] uppercase font-medium mb-5">Navigation</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => { smoothScrollTo(link.href); trackCTA(`footer_${link.label.toLowerCase()}`) }}
                    className="text-cream/60 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-cream/30 text-xs tracking-[0.3em] uppercase font-medium mb-5">Find Us</p>
            <div className="space-y-3">
              <p className="text-cream/60 text-sm leading-relaxed">{business.address}</p>
              <a
                href={`tel:${business.phone}`}
                className="text-cream/60 hover:text-cream text-sm transition-colors duration-200 block"
              >
                {business.phoneDisplay}
              </a>
              <div className="pt-2 space-y-1">
                {siteConfig.business.hours.map((h) => (
                  <p key={h.days} className="text-cream/40 text-xs">
                    <span className="text-cream/60">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs">
            © 2025 Hilltop Smoke Shop. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Not available to persons under the age of 18.
          </p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
