export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackWhatsApp() {
  trackEvent('whatsapp_click', { event_category: 'engagement', event_label: 'floating_button' })
}

export function trackCTA(label) {
  trackEvent('cta_click', { event_category: 'engagement', event_label: label })
}

export function trackInstagram() {
  trackEvent('instagram_click', { event_category: 'social', event_label: 'instagram_feed' })
}
