/**
 * Hilltop logo — inlined SVG so colours adapt to context.
 * light=true  → used on dark backgrounds (header / footer)
 * light=false → used on light backgrounds
 */
export default function Logo({ size = 48, light = false }) {
  const outerFill  = '#4a6b3a'           // moss green ring
  const outerStroke = light ? '#ffffff' : '#4a6b3a'
  const innerFill  = light ? '#1a2b19' : '#ffffff'  // dark inside on dark bg, white on light bg
  const textColor  = light ? '#ffffff' : '#4a6b3a'
  const arcColor   = light ? '#5a8a4a' : '#4a6b3a'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hilltop Smoke Shop logo"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" fill={outerFill} stroke={outerStroke} strokeWidth="3" />

      {/* Inner circle */}
      <circle cx="100" cy="100" r="85" fill={innerFill} />

      {/* Decorative corner arcs */}
      <path d="M 40 60 Q 50 50, 65 55"   fill="none" stroke={arcColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M 135 55 Q 150 50, 160 60" fill="none" stroke={arcColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M 40 140 Q 50 150, 65 145" fill="none" stroke={arcColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M 135 145 Q 150 150, 160 140" fill="none" stroke={arcColor} strokeWidth="4" strokeLinecap="round" />

      {/* "Hilltop" script */}
      <text
        x="100" y="85"
        fontFamily="'Brush Script MT', cursive, serif"
        fontSize="42"
        fill={textColor}
        textAnchor="middle"
        fontWeight="bold"
        fontStyle="italic"
      >
        Hilltop
      </text>

      {/* "SMOKE" */}
      <text
        x="100" y="107"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fill={textColor}
        textAnchor="middle"
        fontWeight="bold"
        letterSpacing="2"
        opacity="0.8"
      >
        SMOKE
      </text>

      {/* "SHOP" */}
      <text
        x="100" y="138"
        fontFamily="'Arial Black', sans-serif"
        fontSize="36"
        fill={textColor}
        textAnchor="middle"
        fontWeight="900"
        letterSpacing="1"
      >
        SHOP
      </text>
    </svg>
  )
}
