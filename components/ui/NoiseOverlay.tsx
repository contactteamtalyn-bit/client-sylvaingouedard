interface NoiseOverlayProps {
  opacity?: number
  blend?: 'multiply' | 'overlay' | 'screen' | 'soft-light'
}

export function NoiseOverlay({ opacity = 0.04, blend = 'multiply' }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        opacity,
        mixBlendMode: blend,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nz'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nz)'/%3E%3C/svg%3E\")",
      }}
    />
  )
}
