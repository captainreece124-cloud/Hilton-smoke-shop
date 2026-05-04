import { motion } from 'framer-motion'
import siteConfig from '../data/site-config.json'
import { trackCTA } from '../hooks/useGA4.js'

const { business } = siteConfig

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function Contact() {
  return (
    <section id="contact" className="bg-light-base py-24 lg:py-32 overflow-hidden">
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
            Get Connected
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-dark-base text-5xl sm:text-6xl lg:text-7xl leading-none"
          >
            FIND US IN
            <br />
            <span className="text-dark-base/30">HILTON VILLAGE</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Business info */}
          <div className="space-y-5">
            {/* Address */}
            <motion.div
              custom={0}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-cream/50 shadow-sm flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center flex-shrink-0 text-moss mt-0.5">
                <MapPinIcon />
              </div>
              <div>
                <p className="text-dark-base font-semibold text-sm tracking-wide uppercase mb-1">Location</p>
                <p className="text-dark-base/70 text-base leading-relaxed">{business.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moss text-sm font-medium mt-2 inline-block hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-cream/50 shadow-sm flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center flex-shrink-0 text-moss mt-0.5">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-dark-base font-semibold text-sm tracking-wide uppercase mb-1">Phone</p>
                <a
                  href={`tel:${business.phone}`}
                  className="text-dark-base/70 text-base hover:text-moss transition-colors"
                >
                  {business.phoneDisplay}
                </a>
                <p className="text-dark-base/70/50 text-xs mt-1">Tap to call on mobile</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              custom={2}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-cream/50 shadow-sm flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center flex-shrink-0 text-moss mt-0.5">
                <ClockIcon />
              </div>
              <div className="flex-1">
                <p className="text-dark-base font-semibold text-sm tracking-wide uppercase mb-3">Trading Hours</p>
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between items-center py-1.5 border-b border-cream/40 last:border-0">
                    <span className="text-dark-base/70 text-sm">{h.days}</span>
                    <span className="text-dark-base text-sm font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map embed */}
            <motion.div
              custom={3}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-video bg-gray-50 relative"
            >
              <iframe
                title="Hilltop Smoke Shop location in Hilton Village Centre"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.867!2d30.2978!3d-29.7551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHilton+Village+Centre!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: WhatsApp + Instagram */}
          <div className="space-y-5">
            {/* WhatsApp card */}
            <motion.div
              custom={4}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#075E54] rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                  <WAIcon />
                </div>
                <p className="font-semibold text-base">Message us on WhatsApp</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Quickest way to reach us — ask about stock, book a hookah, or just say hi.
              </p>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA('contact_whatsapp')}
                className="block w-full text-center px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-xl transition-colors duration-200"
              >
                Message Us Now
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div
              custom={5}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-500/20 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <p className="text-dark-base font-semibold mb-1">Follow on Instagram</p>
                <p className="text-dark-base/70 text-sm">@hilltop.smoke.shop</p>
              </div>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA('contact_instagram')}
                className="px-5 py-2.5 bg-dark-base text-cream text-sm font-medium rounded-xl hover:bg-moss transition-colors duration-200"
              >
                Follow
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
