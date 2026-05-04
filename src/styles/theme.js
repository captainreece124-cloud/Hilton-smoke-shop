/**
 * Hilltop Smoke Shop — Design Token Reference
 * These mirror the CSS custom properties in src/index.css.
 * Import this file wherever you need color values in JS/inline styles.
 */

export const colors = {
  // Primary — Moss Green
  primary:       '#4a6b3a',
  primaryDark:   '#2d5238',
  primaryLight:  '#5a8a4a',

  // Secondary — White
  secondary:     '#ffffff',
  secondaryMuted: '#d8d8d8',

  // Dark bases
  darkBase:      '#2c1f15',
  darkSecondary: '#3d2f1f',

  // Light base (section backgrounds)
  lightBase:     '#f8f8f6',

  // Moss (alias for primary)
  moss:          '#4a6b3a',
  mossLight:     '#5a8a4a',
}

export const fonts = {
  heading: '"Bebas Neue", "Impact", ui-sans-serif, system-ui, sans-serif',
  body:    '"Inter", ui-sans-serif, system-ui, sans-serif',
}

export default { colors, fonts }
